import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { StripeConfigService } from './stripe.config';
import {
  API_VERSION_STRIPE,
  PAYMENT_CANCEL_URL,
  PAYMENT_SUCCESS_URL,
  StripeEvent,
} from 'src/constans/enum';
import { IUser } from '../users/users.interface';
import { OrderService } from '../order/order.service';
import { OrderDetailService } from '../order_detail/order_detail.service';
import { CartService } from '../cart/cart.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(
    private readonly stripeConfigService: StripeConfigService,
    private readonly orderService: OrderService,
    private readonly configService: ConfigService,
  ) {
    this.stripe = new Stripe(this.stripeConfigService.secretKey, {
      apiVersion: API_VERSION_STRIPE,
    });
  }

  metadata = {};
  userIdCurrent = '';

  async createCustomer(name: string, email: string) {
    return this.stripe.customers.create({
      name,
      email,
    });
  }

  async getUrl(getUrlPaymentDto: any, user: IUser) {
    const { listProduct } = getUrlPaymentDto;

    this.metadata = getUrlPaymentDto;

    const totalPrice = listProduct.reduce((acc, curr) => {
      return acc + parseInt(curr.price) * curr.quantity;
    }, 0);

    this.metadata['totalPrice'] = totalPrice;
    this.userIdCurrent = user.id;

    const line_items = getUrlPaymentDto.listProduct.map((item) => {
      console.log(
        `http://${this.configService.get<string>('MINIO_ENDPOINT')}:${this.configService.get<string>('MINIO_PORT')}/${item.image}`,
      );
      return {
        price_data: {
          currency: 'vnd',
          product_data: {
            name: item.productName,
            images: [
              `http://${this.configService.get<string>('MINIO_ENDPOINT')}:${this.configService.get<string>('MINIO_PORT')}/${item.image}`,
            ],
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      };
    });

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: PAYMENT_SUCCESS_URL,
      cancel_url: PAYMENT_CANCEL_URL,
      customer_email: user.email,
    });

    // res.redirect(303, session.url);
    return { url: session.url };
  }

  async webhook(signature: string, payload: Buffer) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    const event = this.stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret,
    );

    switch (event.type) {
      case StripeEvent.PAYMENT_INTENT_SUCCEEDED:
        await this.orderService.create(this.metadata, this.userIdCurrent);
        return event.data.object;
      case StripeEvent.INVOICE_PAYMENT_SUCCEEDED:
        console.log('subscription payment succeeded', event.data.object);
        return event.data.object;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
