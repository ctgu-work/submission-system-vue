<template>
  <v-app>
    <Nav />
    <v-content class="white">
      <v-row class="fill-height ma-1" fluid>
        <v-col justify="center">
          <!-- 中间内容 -->
          <!-- http://localhost:8081/#/profile/activities -->
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import Nav from "@/components/index/Nav";
export default {
  components: {
    Nav
  }
};
</script>