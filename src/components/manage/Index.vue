<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <router-link to="index">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>系统首页</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="user">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>用户统计</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="article">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>文章统计</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="tag">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>标签管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="category">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>分类管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="specialist">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>专家管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="check">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>专家审核</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="message">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>消息管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="invoice">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>稿费管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
        <router-link to="admin">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>管理员管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="cyan" dark>
      <v-spacer />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <!-- <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            123
          </v-col>
        </v-row>
      </v-container>-->
    </v-content>

    <v-footer color="cyan" app>
      <v-spacer />

      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "LayoutsDemosBaselineFlipped",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>