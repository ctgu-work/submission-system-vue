<template>
  <v-app>
    <!-- 专家认证 -->
    <v-row class="d-flex justify-center">
      <v-col md="10">
        <!--  -->
        <v-stepper>
          <v-stepper-header>
            <v-stepper-step step="1">实名</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2">类别及认证</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">{{step3}}</v-stepper-step>
            <v-divider></v-divider>
            <!-- <v-stepper-step :rules="[() => false]" step="4">
              审核不通过
              <small>资历不够</small>
            </v-stepper-step>-->
          </v-stepper-header>
        </v-stepper>
        <v-container class>
          <v-row class="justify-center">
            <v-col md="9" class="test pa-12">
              <h2 class="pb-4">专家审核</h2>
              <router-view></router-view>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    step3: "提交审核"
  }),
  watch: {
    "$route.path": function(newVal, oldVal) {
      if (newVal.contains("profile/authen/authening")) {
        this.step3 = "正在审核";
      } else {
        console.log(newVal + " " + oldVal);
      }
    }
  }
};
</script>
<style>
.test {
  background-color: #eeeeee;
}
</style>