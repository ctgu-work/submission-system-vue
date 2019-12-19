<template>
  <v-app>
    <v-container style="height:100%;" class="d-flex flex-column">
      <div>
        <v-container class="d-flex align-start">
          <v-avatar class size="120">
            <img :src="avatar" :alt="nickname" />
          </v-avatar>
          <div class="pl-10 d-flex align-start flex-column mt-auto mb-auto">
            <p class="headline">{{nickname}}</p>
            <p class="body-1">
              <v-icon v-text="`fas fa-envelope`"></v-icon>
              : {{email}}
            </p>
          </div>
        </v-container>
      </div>
      
      <div v-if="like!=0">
        <v-container class="d-flex align-start pl-5">20人赞赏了该文章</v-container>
      </div>
      <v-divider></v-divider>
      <div>
        <v-container v-html="content" class="pl-5 body-1 text-start"></v-container>
      </div>
      <div class="d-flex pl-5" style="color:#BDBDBD;">
        发表于{{time}}
      </div>
      <div class="pt-10">
        <v-avatar color="red">
          <button class="white--text headline">赞</button>
        </v-avatar>
      </div>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
    nickname: "chase",
    email: "imsunchao@gmail.com",
    like: 20,
    content: "<h1>123</h1><p>123</p><p>123</p>",
    time:"2019-12-01"
  })
};
</script>