<template>
  <div style="flex-grow: 1">
    <a-layout-header style="background: #fff; padding: 0; height: 20px">
    </a-layout-header>
    <a-layout-content style="margin: 0 16px">
      <div class="form-container" style="margin-bottom: 80px">
        <a-row :gutter="[20, 20]" style="display: flex">
          <!-- Sử dụng container wrapper để áp dụng margin -->
          <div class="card-wrapper">
            <a-col :span="24" :md="8" class="boxshadow">
              <a-card title="Người dùng" :bordered="false">
                <a-statistic
                  ref="activeUsers"
                  title="Tài khoản đang hoạt động"
                />
              </a-card>
            </a-col>
          </div>
          <div class="card-wrapper">
            <a-col :span="24" :md="8" class="boxshadow">
              <a-card title="Sản phẩm" :bordered="false">
                <a-statistic
                  ref="activeCompanies"
                  title="Sản phẩm đang hoạt động"
                />
              </a-card>
            </a-col>
          </div>
          <div class="card-wrapper">
            <a-col :span="24" :md="8" class="boxshadow">
              <a-card title="Đơn hàng" :bordered="false">
                <a-statistic ref="activeJobs" title="Đơn hàng thành công" />
              </a-card>
            </a-col>
          </div>
        </a-row>
      </div>
    </a-layout-content>
    <div class="chart-container">
      <!-- <a-card
        title="Doanh số theo quý mỗi năm"
        class="highlight-card"
        style="flex: 30%"
      >
        <div style="height: 400px; overflow: hidden">
          <ag-charts-vue :options="options2"></ag-charts-vue>
        </div>
      </a-card> -->
      <a-card
        title="Doanh số theo 6 tháng gần nhất"
        class="highlight-card"
        style="flex: 70%"
      >
        <div style="height: 400px; overflow: hidden">
          <ag-charts-vue :options="options1"></ag-charts-vue>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { Card, Col, Row, Statistic } from "ant-design-vue";
import { CountUp } from "countup.js";
import { AgChartsVue } from "ag-charts-vue3";
import { getTotalAccount } from "@/apis/modules/api.user";
import { getTotalProduct } from "@/apis/modules/api.product";
import { getTotalOrder, getTotalSale } from "@/apis/modules/api.order";

export default defineComponent({
  name: "App",
  components: {
    "a-card": Card,
    "a-col": Col,
    "a-row": Row,
    "a-statistic": Statistic,
    "ag-charts-vue": AgChartsVue,
  },
  setup() {
    const activeUsers = ref(null);
    const activeCompanies = ref(null);
    const activeJobs = ref(null);
    const options1 = ref({
      // Data: Data to be displayed in the chart
      data: [],
      // Series: Defines which chart type and data to use
      series: [{ type: "bar", xKey: "month", yKey: "totalPrice" }],
    });

    const options2 = ref({
      title: {
        text: "Annual Fuel Expenditure",
      },
      data: [
        {
          quarter: "Q1",
          petrol: 200,
          diesel: 100,
        },
        {
          quarter: "Q2",
          petrol: 300,
          diesel: 130,
        },
        {
          quarter: "Q3",
          petrol: 350,
          diesel: 160,
        },
        {
          quarter: "Q4",
          petrol: 400,
          diesel: 200,
        },
      ],
      series: [
        {
          type: "line",
          xKey: "quarter",
          yKey: "petrol",
          yName: "Petrol",
        },
        {
          type: "line",
          xKey: "quarter",
          yKey: "diesel",
          yName: "Diesel",
        },
      ],
    });

    const totalAccout = ref(0);
    const totalProduct = ref(0);
    const totalOrder = ref(0);

    const fetchData = async () => {
      try {
        totalAccout.value = (await getTotalAccount()).total;
        totalProduct.value = (await getTotalProduct()).total;
        totalOrder.value = (await getTotalOrder()).total;
        const totalPrice = await getTotalSale();
        const processedPrice = totalPrice.map((item) => {
          return {
            ...item,
            totalPrice: parseFloat(item.totalPrice),
            month: `Tháng ${item.month}`,
          };
        });
        options1.value.data = processedPrice;
      } catch (err) {
        console.log(err);
      }
    };

    onMounted(async () => {
      await fetchData();
      const userCountUp = new CountUp(
        activeUsers.value?.$el.querySelector(".ant-statistic-content-value"),
        totalAccout.value,
        { separator: "," }
      );
      const companyCountUp = new CountUp(
        activeCompanies.value?.$el.querySelector(
          ".ant-statistic-content-value"
        ),
        totalProduct.value,
        { separator: "," }
      );
      const jobCountUp = new CountUp(
        activeJobs.value?.$el.querySelector(".ant-statistic-content-value"),
        totalOrder.value,
        { separator: "," }
      );

      if (!userCountUp.error) userCountUp.start();
      if (!companyCountUp.error) companyCountUp.start();
      if (!jobCountUp.error) jobCountUp.start();
    });

    return {
      activeUsers,
      activeCompanies,
      activeJobs,
      options1,
      options2,
    };
  },
});
</script>

<style>
.chart-container {
  display: flex;
  justify-content: space-between; /* Căn các thẻ card để chúng cách nhau */
}

.highlight-card {
  transition: box-shadow 0.3s ease; /* Tạo hiệu ứng chuyển động cho box-shadow */
  background-color: #fff; /* Đặt màu nền của thẻ card là màu trắng */
  margin: 0 12px 0 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); /* Thêm box-shadow khi hover vào thẻ card */
}

.highlight-card:hover {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* Thêm box-shadow khi hover vào thẻ card */
}

.chart-container {
  display: flex;
  justify-content: space-between; /* Căn các thẻ card để chúng cách nhau */
}

.boxshadow {
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  max-width: 100% !important;
}

.boxshadow:hover {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.card-wrapper {
  margin: 0px 1.6%;
  width: 30%;
}
</style>
