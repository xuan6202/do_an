<template style="font-family: ">
  <the-header v-if="isAdminRoute === false"></the-header>
  <div
    style="width: 100%; height: 40px; background-color: #002140"
    v-if="isAdminRoute === true"
  >
    <div class="header_admin_child">
      <i class="fa-solid fa-user" style="margin-right: 4px; font-size: 14p"></i>
      <span style="font-size: 14px; font-weight: 100">
        AD - {{ userLogin.username }}</span
      >

      <div class="header_admin_subnav">
        <ul class="subnav_list">
          <router-link to="/home">
            <li class="subnav_list-item">Trang chủ</li>
          </router-link>

          <li class="subnav_list-item" @click="handleLogout">Đăng xuất</li>
        </ul>
      </div>
    </div>
  </div>
  <div
    style="display: flex; min-height: 90vh"
    class="header_admin"
    v-if="isAdminRoute === true"
  >
    <div style="margin: 18px 0px"></div>
    <div>
      <router-view name="sidebarAdmin"></router-view>
    </div>
    <router-view name="admin"></router-view>
  </div>
  <router-view></router-view>
  <alert-box v-if="isAdminRoute === false"></alert-box>
  <the-cart v-if="isAdminRoute === false"></the-cart>
  <the-footer v-if="isAdminRoute === false"></the-footer>
</template>

<script>
import TheHeader from "@/components/client/TheHeader.vue";
import AlertBox from "@/components/client/share/TheToast.vue";
import TheCart from "@/components/client/cart/TheCart.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";
import TheFooter from "./components/client/TheFooter.vue";
export default {
  components: { TheHeader, AlertBox, TheCart, TheFooter },
  setup() {
    const store = useStore();
    const router = useRouter();
    const userLogin = computed(() => store.state.auth.userLogin);

    const isAdminRoute = computed(() => store.state.isAdminRoute);

    const handleLogout = () => {
      store.dispatch("auth/logoutAction", router);
    };

    return {
      isAdminRoute,
      handleLogout,
      userLogin,
    };
  },
};
</script>

<style scoped>
.header_admin {
  position: relative;
}

.header_admin_child {
  color: white;
  cursor: pointer;
  position: absolute;
  padding: 0 24px;
  right: 24px;
  top: 10px;
  border-radius: 12px;
  z-index: 50;
}

.header_admin_subnav {
  position: absolute;
  top: 105%;
  width: 120px;
  background-color: white;
  z-index: 100;
  display: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.subnav_list {
  padding: 10px;
}

.header_admin_child:hover .header_admin_subnav {
  display: block;
}

.subnav_list-item {
  padding: 6px 12px;
  font-size: 14px;
  color: black;
}

.subnav_list-item:hover {
  color: blue;
}
</style>
