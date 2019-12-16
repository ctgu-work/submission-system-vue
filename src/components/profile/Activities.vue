<template>
  <v-app>
    <v-row>
      <v-spacer />
      <v-col md="10">
        <v-row>
          <v-col md="3">
            <v-card height="500" width="auto">
              <v-img
                class="white--text align-end"
                width="auto"
                height="227"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              ></v-img>
              <v-card-text class="text--primary">
                <div class="headline font-weight-black">Chase</div>
                <div class="font-weight-light">Number 10</div>
              </v-card-text>
              <v-btn @click="editInfo" width="210" style="margin:0 auto;" class="d-flex" flat>编辑主页</v-btn>
              <v-card-subtitle class="pt-2">那些路上的脚印永远不会被隐藏</v-card-subtitle>
              <v-container class="d-flex align-start flex-column">
                <div>📫:&nbsp;imsunchao@gmail.com</div>
                <div>💒:&nbsp;湖北宜昌</div>
              </v-container>
            </v-card>
          </v-col>
          <v-col style="background-color:white;" md="9">
            <router-view></router-view>
            <!-- <v-tabs >
              <v-tab>
                <router-link :to="{path:'/profile/activities/'}">首页</router-link>
              </v-tab>
              <v-tab>
                <router-link :to="{path:'/profile/activities/state'}">稿件状态</router-link>
              </v-tab>
              <v-tab>
                <router-link :to="{path:'/profile/activities/info'}">收益</router-link>
              </v-tab>
            </v-tabs>
            <router-view />-->
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
  </v-app>
</template>
<script>
export default {
  methods: {
    editInfo() {
      this.$router.replace("/profile/activities/editinfo");
    }
  }
};
</script>
<style>
a {
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none;
}
</style>