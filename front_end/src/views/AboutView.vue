<template>
  <!-- Title page -->
  <!-- <section
    class="bg-img1 txt-center p-lr-15 p-tb-92"
    style="
      background-image: url('https://oms.hotdeal.vn/images/editors/sources/000360138459/360138-buffet-nuong-lau-tang-tom-hum-668-bbq-hotpot-body-1.jpg');
    "
  >
    <h2 class="ltext-105 cl0 txt-center">Giới thiệu</h2>
  </section> -->

  <!-- Content page -->
  <section class="">
    <div class="container">
      <h1>VỀ CÂU CHUYỆN CỦA BEAUTY</h1>

      <section class="mission-vision">
        <h2>Tầm nhìn và sứ mệnh:</h2>
        <p>
          Beauty là một tổ chức hoạt động với mong muốn chia sẻ lợi ích cho cộng
          đồng về làm đẹp. Giúp khách hàng có thể tìm mua được những sản phẩm mỹ
          phẩm chính hãng tốt nhất với giá hợp lý nhất.
        </p>
        <p>
          Sứ mệnh của chúng tôi là trở thành một lực lượng có sức ảnh hưởng tốt
          nhất với cộng đồng. Giúp cho những người phụ nữ sau độ tuổi 30 trở nên
          trẻ đẹp hơn thông qua những bí quyết làm đẹp được nghiên cứu kỹ lưỡng
          và từ các Spa nổi tiếng như HT SPA, thẩm mỹ viện Aura...
        </p>
        <div class="logo">
          <img
            src="/images/icons/logo-03.png"
            alt="Beauty Logo"
            style="width: 300px; margin: 0 auto"
          />
          <h2>Beauty</h2>
        </div>
      </section>

      <section class="core-values">
        <h2>Giá trị cốt lõi:</h2>
        <p>
          Đạo đức, sáng tạo, lạc quan, tử tế và trở thành một lực lượng tốt.
        </p>
      </section>

      <section class="brand-identity">
        <h2>NHẬN DIỆN THƯƠNG HIỆU</h2>
        <p>
          Sự khác biệt của chúng tôi được minh chứng qua cách chúng tôi hỗ trợ
          khách hàng. Chúng tôi mong muốn chia sẻ thông điệp và giá trị rằng cao
          cả trị công đồng. Làm sao để mua được sản phẩm tốt, làm sao có thể mua
          được sản phẩm có giấy tờ chứng từ rõ ràng.
        </p>
      </section>

      <section class="business-philosophy">
        <h2>TRIẾT LÝ KINH DOANH</h2>
        <p>
          Triết lý kinh doanh của chúng tôi có thể giúp các khách hàng của chúng
          tôi kết hợp việc chăm sóc gia đình, sức khỏe và sắc đẹp cho bản thân.
        </p>
        <p>
          Để việc đó này cũng được mở rộng và hoàn thiện đầy đủ giúp các đối tác
          của chúng tôi thành công và có cuộc sống hạnh phúc hơn.
        </p>
        <p>
          Giá trị của chúng tôi hướng tới giúp mọi người gặp gỡ những chuyên gia
          điều trị liệu. Giúp mọi người có được sự tự tin và biết được rằng mình
          xứng đáng với những giá trị tốt đẹp tại Việt Nam.
        </p>
      </section>

      <section class="business-models">
        <h3>Những Mô hình hoạt động của Beauty</h3>
        <ul>
          <li>
            <strong>Tư vấn hỗ trợ kiến thức mỹ phẩm</strong><br />Mua được mỹ
            phẩm tốt không phải điều dễ, nhưng với mạng lưới mỹ phẩm trên toàn
            quốc. Beauty sẽ giúp bạn tìm mua và sở hữu những sản phẩm mỹ phẩm
            tốt nhất.
          </li>
          <li>
            <strong>Beauty Spa</strong><br />Mô hình nhượng quyền Spa với chi
            phí thấp nhưng hiệu quả kinh doanh lại rất cao.
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: left; /* Đặt text-align về left để căn lề trái */
}

h1 {
  color: red;
  font-size: 24px;
  text-align: center; /* Căn giữa cho tiêu đề chính */
  margin-bottom: 20px;
}

h2 {
  color: green;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
}

h3 {
  color: red;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 10px;
}

p {
  margin: 10px 0;
  text-align: justify; /* Để căn đều văn bản */
}

a {
  color: cyan;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.logo {
  text-align: center; /* Căn giữa cho phần logo */
  margin-top: 20px;
}

.logo img {
  width: 150px;
  height: auto;
}

.logo h2 {
  color: white;
  font-size: 24px;
  margin-top: 10px;
}
</style>
