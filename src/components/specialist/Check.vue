<template>
  <v-app>
      <v-alert v-model="alert" dismissible type="warning">
      你的审核会直接影响他人的劳动成果，请认真审核!
    </v-alert>
    <div class="d-flex align-start">
      <v-avatar class size="120">
        <img :src="avatar" :alt="nickname" />
      </v-avatar>
      <div class="pl-10 d-flex align-start flex-column mt-auto mb-auto">
        <p class="headline">{{nickname}}</p>
        <p class="body-1">
          <v-icon v-text="`fas fa-envelope`"></v-icon>
           {{email}}
        </p>
      </div>
    </div>
    <v-divider class="pt-5"></v-divider>
    <div v-html="content" class="pl-5 body-1 text-start"></div>
    <div class="d-flex pl-5" style="color:#BDBDBD;">发表于{{time}}</div>
    <v-radio-group v-model="form.row" row>
      <v-radio label="通过" value="1"></v-radio>
      <v-radio label="不通过" value="2"></v-radio>
    </v-radio-group>
    <div>
      <v-textarea v-model="form.text" background-color="grey lighten-2" color="black" label="评语"></v-textarea>
    </div>
    <div>
      <v-btn @click="submit" small>提交</v-btn>
    </div>
  </v-app>
</template>
<script>
import { submitComment } from "@/api/specialist";
export default {
  data: () => ({
      alert:true,
    avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
    nickname: "chase",
    email: "imsunchao@gmail.com",
    like: 20,
    content: "<h1>123</h1><p>123</p><p>123</p>",
    time: "2019-12-01",
    id: "",
    column: null,

    form: {
      row: "2",
      text: "",
      id: ""
    }
  }),
  methods: {
    submit() {
      console.log(this.form);
      submitComment(this.form).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.form.id = this.id;
    console.log("query" + this.$route.query.id);
  }
};
</script>