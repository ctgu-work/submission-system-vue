<template>
  <v-app>
    <!-- 导航栏 -->
    <Nav/>
    <!-- <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click="toIndex"  @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">在线投稿系统</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" />
        </v-avatar>
      </v-btn>
    </v-app-bar> -->
    <!-- 中间内容 -->
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
  components:{
    Nav
  },
  data:()=>({
    drawer:false
  }),
  methods:{
    toIndex(){
      this.$router.push('/')
    }
  }
}
</script>