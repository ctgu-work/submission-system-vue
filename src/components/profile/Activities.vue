<template>
  <v-app>
    <v-row>
      <v-spacer />
      <v-col md="10">
        <v-row>
          <v-col md="3">
            <v-card height="500" width="auto">
              <v-img
                class="white--text align-end"
                width="auto"
                height="227"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              ></v-img>
              <v-card-text class="text--primary">
                <div class="headline font-weight-black">Chase</div>
                <div class="font-weight-light">Number 10</div>
              </v-card-text>
              <v-btn width="210" style="margin:0 auto;" class="d-flex" flat>编辑主页</v-btn>
              <v-card-subtitle class="pt-2">那些路上的脚印永远不会被隐藏</v-card-subtitle>
              <v-container class="d-flex align-start flex-column">
                <div>📫: imsunchao@gmail.com</div>
                <div>地址：湖北宜昌</div>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="9">
            <v-tabs>
              <v-tab>文章</v-tab>
              <v-tab>个人信息</v-tab>
              <v-tab>稿件状态</v-tab>
              <v-tab>收益</v-tab>
              <!-- <v-tab></v-tab> -->
            </v-tabs>
            <v-container></v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
  </v-app>
</template>