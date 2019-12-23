<template>
  <v-app>
    <div>
      <div>
        <v-container v-if="apply != null">
          <v-card>
            <v-card-title>审核专家</v-card-title>
            <v-card-text>
              <h1>姓名: {{apply.name}}</h1>
              <h2 class="pt-2">联系方式: {{apply.phoneNumber}}</h2>
            </v-card-text>
            <v-card-actions v-if="apply.imges!=null">
              <v-container>
                <v-row>
                  <v-col class="title" cols="12">证书：</v-col>
                  <v-col v-for="(img,i) in apply.imges" :key="i" cols="6">
                    <v-img :src="img"></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
            <v-card-actions>
              <v-container>
                <v-btn @click="submitYes">通过</v-btn>
                <v-btn @click="submitNo">不通过</v-btn>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-container>
      </div>
      <v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">申请人</th>
                <th class="text-left">日期</th>
                <th class="text-left">审核</th>
              </tr>
            </thead>
            <tbody>
              <tr @click="click(item.name)" v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{item.date}}</td>
                <td>
                  <v-btn>审核</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    desserts: [
      {
        id: 1,
        date: "2017-12-18",
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        id: 1,
        date: "2017-12-18",
        name: "Ice cream sandwich",
        calories: 237
      }
    ],
    test: null,
    apply: {
      id: 1,
      imges: [
        "http://p9.pccoo.cn/bbs/20171128/2017112809182285409028_1024_682.jpg",
        "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        "http://www.faeryduct.com/uploadfile/2012/0621/20120621054858119.jpg"
      ],
      name: "chase",
      phoneNumber: "13409676651"
    },
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
  }),
  methods: {
    check() {
      console;
    },
    submitYes() {
      this.apply = null;
    },
    submitNo() {
      this.apply = null;
    }
  }
};
</script>