<template>
  <v-app>
    <v-row>
      <v-col md="3">
        <v-avatar size="150" tile class="avatar ma-5">
          <v-img class="avatar" :src="url"></v-img>
        </v-avatar>
        <v-container >
          <v-file-input  v-model="form.avatar" label="修改头像"></v-file-input>
        </v-container>
      </v-col>
      <v-col md="9">
        <v-card class="mx-auto">
          <v-form ref="form" lazy-validation>
            <!-- <v-form ref="form" v-model="valid" lazy-validation> -->
            <v-card-actions class="display-1 ma-3">
              <!-- :rules="nameRules" -->
              <v-text-field v-model="form.nickName" :counter="15" label="昵称" required></v-text-field>
            </v-card-actions>
            <v-card-actions class="ma-3">
              <v-text-field v-model="form.name" label="真实姓名" required></v-text-field>
            </v-card-actions>
            <v-card-actions class="ma-3">
              <v-select
                v-model="form.sex"
                :items="sexItem"
                :rules="[v => !!v || 'Item is required']"
                label="性别"
                required
              ></v-select>
            </v-card-actions>
            <v-card-actions class="ma-5">
              <v-select v-model="form.age" :items="ageItem" label="年龄"></v-select>
            </v-card-actions>
            <v-card-actions class="ma-5">
              <v-text-field v-model="form.description" label="一句话介绍你自己"></v-text-field>
            </v-card-actions>
            <v-card-actions class="ma-5">
              <v-text-field v-model="form.idCard" label="身份证号"></v-text-field>
            </v-card-actions>
            <v-card-actions class="ma-5">
              <!-- :rules="phoneRules" -->
              <v-text-field v-model="form.phoneNumber" label="手机号" required></v-text-field>
            </v-card-actions>
            <v-card-actions class="ma-5">
              <v-text-field v-model="form.bankcard" label="银行卡号" />
            </v-card-actions>
            <v-card-actions class="ml-5 mt-0 pt-0 pb-7">
              <v-btn @click="editInfo" class="mr-4">submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
/*
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,
*/
import { editUserInfo } from "@/api/profile";
import Nav from "@/components/index/Nav";
import { read } from 'fs';
export default {
  components: {
    Nav
  },
  data: () => ({
    form: {
      avatar: null,
      nickName: "chase",
      // collect: "123",
      name: "吴彦祖",
      sex: 1,
      age: null,
      description: "那些路上的脚印，永远不会被隐藏",
      idCard: "421102199907025213",
      phoneNumber: "13409676651",
      bankcard: "12312312432"
    },
    url: "https://cdn.vuetifyjs.com/images/cards/server-room.jpg",
    sexItem: ["男", "女"],
    checkbox: "1",
    ageItem: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99
    ]
  }),
  methods: {
    editInfo() {
      editUserInfo(this.form).then(res=>{
        console.log(res)
      });
      console.log(this.form);
    },
    changeImg(e){
      // this.form.avatar = this.$refs.myfile.files[0]
      //  this.form.avatar = new FormData()
      //  this.form.avatar.append('file',e.file)
    }
  }
};
</script>
<style>
.avatar {
  border-radius: 2px;
}
</style>