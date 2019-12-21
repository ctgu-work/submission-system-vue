<template>
  <v-app id="inspire">
    

    <!-- 导航栏 -->
    <Nav/>
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
                  <v-container
                    :key="item.id"
                    class="flex-column pl-0 pr-0"
                    style="border-top: 1px solid #e0e0e0;"
                  >
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
//引入方法
import { fetchTab } from "@/api/index";
import { fetchHotArticleList } from "@/api/index";

//引入组件
import Nav from "@/components/index/Nav";
export default {
  components: {
    Nav
  },
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
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
  computed: {
  },
  created() {
    this.getHotArticleList();
  },
  methods: {
    getHotArticleList() {
      fetchHotArticleList(this.hotArticleList).then(res => {
        this.hotArticleList = res.list;
      });
    }
  }
};
</script>

<style>
</style>