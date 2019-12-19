<template>
  <form class="fill-height">
    <!-- @input="$v.name.$touch()"
    @blur="$v.name.$touch()"-->
    <v-text-field v-model="name" :counter="10" label="真实姓名" required></v-text-field>
    <!-- :error-messages="emailErrors" -->
    <!-- @input="$v.email.$touch()"
    @blur="$v.email.$touch()"-->
    <v-text-field v-model="email" label="邮箱" required></v-text-field>
    <v-text-field v-model="phonenumber" label="手机号" required></v-text-field>
    <!-- @change="$v.checkbox.$touch()"
    @blur="$v.checkbox.$touch()"-->
    <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
  </form>
</template>
<script>
export default {
    data: () => ({
    name: "chase",
    nameErrors: "名字错误",
    email: "1131497375@qq.com",
    phonenumber: "13409676651",
    emailErrors: null,
    checkboxErrors: null,
    checkbox: false
  }),
  methods: {
    submit() {
      this.$router.push("identify");
    }
  }
};
</script>
<style>
.form {
  background-color: #eeeeee;
}
</style>