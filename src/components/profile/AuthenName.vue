<template>
  <form class="fill-height">
    <v-text-field v-model="user.name" :counter="10" label="真实姓名" required></v-text-field>
    <v-text-field v-model="user.email" label="邮箱" required></v-text-field>
    <v-text-field v-model="user.phoneNumber" label="手机号" required></v-text-field>
    <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <p>{{error}}</p>
  </form>
</template>
<script>
import { getUserinfo } from "@/api/index";
import { toFixName } from "@/api/profile";
export default {
  data: () => ({
    error:'',
    realName: "",
    nameErrors: "名字错误",
    email: "",
    phoneNumber: "",
    emailErrors: null,
    checkboxErrors: null,
    checkbox: false,
    user: {
      name: "",
      email: "",
      phoneNumber: ""
    },
    data: { realName: "", email: "", phoneNumber: "" }
  }),
  created() {
    this.init();
  },
  methods: {
    submit() {
      this.data.realName = this.user.name;
      this.data.email = this.user.email;
      this.data.phoneNumber = this.user.phoneNumber;
      toFixName(this.data).then(res => {
        if(res==1){
          this.$router.push("identify");
        }else{
          this.error='信息错误'
        }
        return;
      });
    },
    init() {
      getUserinfo().then(res => {
        this.user = res.result;
      });
    }
  }
};
</script>
<style>
.form {
  background-color: #eeeeee;
}
</style>