import { DetailProduct } from 'src/modules/detail-product/entities/detail-product.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';  

@Entity()
export class OrderDetail {
  @PrimaryColumn()
  id: string;

  @Column()
  @ManyToOne((type) => Order, (order) => order.orderDeatail)
  order: string;

  @Column()
  @ManyToOne((type) => DetailProduct, (detailProduct) => detailProduct.id)
  detailProduct: string;

  @Column()
  quantity: number;

  @Column()
  price: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
