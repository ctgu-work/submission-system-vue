<template>
  <v-app id="inspire">
    <!-- 侧边栏 -->
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in tablist">
          <!-- 将侧边栏分为三类
          1. 有heading
          2. 有children
          3. 其他
          -->
          <!-- 有heading -->
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>

          <!-- 有children -->
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <!-- 二级菜单 -->
            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <!-- 其他 -->
          <v-list-item v-else :key="item.text" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- 导航栏 -->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
    </v-app-bar>

    <!-- 主体内容 -->
    <v-content class="grey lighten-2">
      <v-row class="fill-height ma-1" fluid>
        <v-col align="center" justify="center" xs="12" sm="12" md="9" lg="9">
          <!-- 中间内容 -->
          <router-view></router-view>
        </v-col>

        <!-- 右侧 -->
        <v-col class="flex-column mr-0.1 d-none d-md-flex" md="3" lg="3">
          <v-card class="mx-auto" outlined>
            <v-list-item class="d-flex">
              <v-list-item-content>
                <div class="overline mb-4"></div>
                <v-list-item-title class="headline mb-1">最热话题</v-list-item-title>
                <div class="d-flex flex-wrap">
                  <!-- 标签 -->
                  <template v-for="i in tags">
                    <v-avatar :key="i" class="ma-1 d-block" color size="auto" tile>
                      <span
                        class
                        style="padding: 2px 10px;font-size:14px;border:1px solid #BDBDBD;border-radius:12px"
                      >{{i}}</span>
                    </v-avatar>
                  </template>
                </div>
                <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
              </v-list-item-content>

              <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
            </v-list-item>
            <!-- 大于10个不显示 -->
            <v-card-actions v-if="tags.length>10">
              <v-btn text>查看更多</v-btn>
              <!-- <v-btn text>Button</v-btn> -->
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto mt-3" width="100%" outlined>
            <v-list-item class="d-flex">
              <v-list-item-content>
                <div class="overline mb-4"></div>
                <v-list-item-title class="headline mb-1">最热文章</v-list-item-title>
                <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
                <template v-for="item in this.hotArticleList">
                  <v-container :key="item.id" class="flex-column pl-0 pr-0" style="border-top: 1px solid #e0e0e0;">
                    <span class="d-block">{{item.title}}</span>
                    <div style="font-size:11px" class="mt-3 d-flex d-block flex-wrap">
                      <span style="line-height:20px">发表于 {{item.date}}</span>

                      <div class="ml-auto">
                        <v-icon class="mr-1">mdi-heart</v-icon>
                        <span class="d-inline-block subheading mr-2 ml-auto">{{item.like}}</span>
                      </div>
                    </div>
                  </v-container>
                </template>
              </v-list-item-content>

              <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
            </v-list-item>

            <!-- <v-card-actions>
              <v-btn text>Button</v-btn>
              <v-btn text>Button</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-col>
      </v-row>
    </v-content>

    <!-- 右下角联系我们 -->
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey darken-2">Create contact</v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
                </v-avatar>
                <v-text-field placeholder="Name" />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field prepend-icon="business" placeholder="Company" />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Job title" />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mail" placeholder="Email" />
            </v-col>
            <v-col cols="12">
              <v-text-field type="tel" prepend-icon="phone" placeholder="(000) 000 - 0000" />
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="notes" placeholder="Notes" />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary">More</v-btn>
          <v-spacer />
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { fetchTab } from "@/api/index";
import { fetchHotArticleList } from "@/api/index";
// import { sortByKey } from "@/utils/util";
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    tablist: [],
    tags: [
      "测试",
      "JavaWeb",
      "Rabbit MQ",
      "爬虫",
      "Nginx",
      "MySql",
      "Git",
      "生活",
      "体育",
      "幼儿教育",
      "量子力学"
    ],
    hotArticleList: []
  }),
  created() {
    this.getTab();
    this.getHotArticleList();
  },
  methods: {
    getTab() {
      fetchTab(this.list).then(res => {
        console.log(res);
        this.tablist = res.list;
      });
    },

    getHotArticleList() {
      fetchHotArticleList(this.hotArticleList).then(res => {
        console.log("获取最热文章列表");
        this.hotArticleList = res.list;
      });
    }
  },
  watch: {
    tablist: {
      handler(val, oldVal) {
        console.log("b.tablist: " + val + "---" + oldVal); //但是这两个值打印出来却都是一样的
        console.log(this.$route.path);
        if (this.$route.path == "/") {
          console.log(
            "加载第一个组件，请求地址应该是: " + this.tablist[0].site
          );
          this.$router.replace("/articlelist");
        }
      },
      deep: true
    }
  }
};
</script>

<style>
</style>