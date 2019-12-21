<template>
  <v-app class="ma-0 grey lighten-3">
    <template v-for="item in articlelist">
      <!-- {{item}} -->
      <v-container
        :key="item.id"
        class="mx-auto pa-2 mb-3 mr-0 ml-0 fill-weight"
        color="#26c6da"
        max-height="250px"
        style="background-color:white;border-radius: 4px;box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);"
      >
        <v-row>
          <v-col sm="1" class="d-none d-sm-flex pa-0 pl-4 mt-1 mb-1">
            <v-avatar class="body-0" size="60">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-col>

          <v-col sm="11" class="d-flex flex-column pa-0">
            <v-container class="pa-0 pl-6  d-flex flex-wrap" >
              <span style="font-size:20px" >{{item.title}}</span>
              <!-- 热度 -->
              <v-avatar v-if="item.times > 10000" class="ml-2" color size="20" tile style>
                <v-icon class="mr-1" color="red" style="font-size:28px;">mdi-fire</v-icon>
              </v-avatar>
              <span class="mr-2"></span>
              <!-- 置顶标签 -->
              <v-avatar v-if="item.weight!=0" class="mr-1" color size="auto" tile>
                <span
                  class
                  style="background: #25bb9b;color:#fff;padding: 2px 10px;font-size:14px;border:1px solid #BDBDBD;border-radius:12px"
                >置顶</span>
              </v-avatar>
              <!-- 文章标签 -->
              <template v-for="i in item.tag" >
                <v-avatar :key="i" class="mr-1" color size="auto" tile>
                  <span
                    class
                    style="padding: 2px 10px;font-size:14px;border:1px solid #BDBDBD;border-radius:12px"
                  >{{i}}</span>
                </v-avatar>
              </template>
            </v-container>
            <v-container class="d-flex pl-6 pb-0 flex-wrap">
              <span style="font-size:14px">{{item.author}}</span>
              <span style="font-size:14px" class="ml-2">{{item.date}}</span>
              <span style="font-size:14px" class="ml-2">发表在[{{item.classify}}]</span>
              <div style="font-size:8px" class="ml-auto">
                <v-icon class="mr-1">mdi-shoe-print</v-icon>
                <span class="subheading mr-2">{{item.times}}</span>
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">{{item.like}}</span>
                <!-- <span class="mr-2"></span> -->
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">{{item.share}}</span>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app>
</template>
<script>
import { fetchArticleList } from "@/api/index";
export default {
  data: () => ({
    articlelist: [],
    size: 0,
    maxsize: 20
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      fetchArticleList(this.articlelist).then(res => {
        console.log(res);
        this.articlelist = res.list;
      });
    }
  }
};
</script>