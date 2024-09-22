<template>
  <div class="sec-banner bg0 p-t-80 p-b-50">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
          <!-- Block1 -->
          <div class="block1 wrap-pic-w">
            <img
              :src="`${config.MINIO_URL}banners/banner-02.jpg`"
              alt="IMG-BANNER"
              style="height: 220px; background-color: rgba(0, 0, 0, 0.7)"
            />

            <a
              class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
            >
              <div class="block1-txt-child1 flex-col-l"></div>

              <div class="block1-txt-child2 p-b-4 trans-05">
                <div class="block1-link stext-101 cl0 trans-09 f-arial">
                  Đặt ngay
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
          <!-- Block1 -->
          <div class="block1 wrap-pic-w">
            <img
              :src="`${config.MINIO_URL}banners/banner-01.jpg`"
              alt="IMG-BANNER"
            />

            <a
              class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
            >
              <div class="block1-txt-child1 flex-col-l">
                <!-- <span class="block1-name ltext-102 trans-04 p-b-8">
                  BỘ SƯU TẬP MỚI
                </span>

                <span class="block1-info stext-102 trans-04">
                  Cùng chờ đón các bộ sản phẩm mới và hấp dẫn!
                </span> -->
              </div>

              <div class="block1-txt-child2 p-b-4 trans-05">
                <div class="block1-link stext-101 cl0 trans-09 f-arial">
                  Đặt ngay
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
          <!-- Block1 -->
          <div class="block1 wrap-pic-w">
            <img
              :src="`${config.MINIO_URL}banners/banner-03.jpg`"
              alt="IMG-BANNER"
            />

            <a
              class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
            >
              <div class="block1-txt-child1 flex-col-l">
                <!-- <span class="block1-name ltext-102 trans-04 p-b-8">
                  GIAO HÀNG TẬN NƠI
                </span>

                <span class="block1-info stext-102 trans-04">
                  Miến phí vận chuyển đơn hàng nội thành Hà Nội
                </span> -->
              </div>

              <div class="block1-txt-child2 p-b-4 trans-05">
                <div class="block1-link stext-101 cl0 trans-09 f-arial">
                  Đặt ngay
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/configs/config";

export default {
  setup() {
    return {
      config,
    };
  },
};
</script>

<style scoped>
.f-arial,
span {
  color: #ccc;
}

.block1 {
  height: 240px;
  overflow: hidden;
}
</style>
