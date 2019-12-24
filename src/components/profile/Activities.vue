<template>
  <v-app>
    <v-row>
      <v-spacer />
      <v-col md="10">
        <v-row>
          <v-col md="3">
            <v-card height="500" width="auto">
              <v-img
                v-if="user.avatarUrl.length==0"
                class="white--text align-end"
                width="auto"
                height="227"
                src="https://ctguqmx-bbs-img.oss-cn-beijing.aliyuncs.com/images/submit/bd08156570ae52e0f4ff1cd6e6b51a2a.jpg"
              ></v-img>
              <v-img
                v-else
                class="white--text align-end"
                width="auto"
                height="227"
                :src="user.avatarUrl"
              ></v-img>
              <!-- https://ctguqmx-bbs-img.oss-cn-beijing.aliyuncs.com/images/submit/bd08156570ae52e0f4ff1cd6e6b51a2a.jpg -->
              <v-card-text class="text--primary">
                <div class="headline font-weight-black">{{user.nickName}}</div>
                <div class="font-weight-light">{{user.name}}</div>
              </v-card-text>
              <v-btn @click="editInfo" width="210" style="margin:0 auto;" class="d-flex" flat>编辑主页</v-btn>
              <v-card-subtitle class="pt-2">{{user.description}}</v-card-subtitle>
              <v-container class="d-flex align-start flex-column">
                <div>📫:&nbsp;{{user.email}}</div>
                <div>📱:&nbsp;{{user.phoneNumber}}</div>
              </v-container>
            </v-card>
          </v-col>
          <v-col style="background-color:white;" md="9">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
  </v-app>
</template>
<script>
import { getUserinfo } from "@/api/index";
export default {
  data: () => ({
    user: {
      avatarUrl: ""
    }
  }),
  methods: {
    editInfo() {
      this.$router.replace("/profile/activities/editinfo");
    }
  },
  created() {
    getUserinfo().then(res => {
      this.user = res.result;
    });
  }
};
</script>
<style scoped>
a {
  color: rgba(0, 0, 0, 0.54);
  text-decoration: none;
}
</style>