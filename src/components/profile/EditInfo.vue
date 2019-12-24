<template>
  <v-app>
    <v-row>
      <v-col md="3">
        <v-avatar size="150" tile class="avatar ma-5">
          <v-img class="avatar" :src="url"></v-img>
        </v-avatar>
        <v-container id="upimg">
          <!-- <v-file-input @change="changeImg" label="修改头像"></v-file-input> -->
          <input
            name="avatar"
            type="file"
            accept="image/*"
            multiple
            @change="getFile($event)"
            class="image_file"
          />
        </v-container>
      </v-col>
      <v-col md="9">
        <v-card class="mx-auto">
          <v-form ref="form" lazy-validation>
            <v-card-actions class="display-1 ma-3">
              <v-text-field v-model="form.nickName" :counter="15" label="昵称" required></v-text-field>
            </v-card-actions>
            <v-card-actions class="ma-3">
              <v-text-field v-model="form.name" label="真实姓名" required></v-text-field>
            </v-card-actions>
            <v-card-actions class="ma-3">
              <v-radio-group row prepend-icon="mdi-face" v-model="form.sex" :mandatory="false">
                <v-radio label="男" value="0"></v-radio>
                <v-radio label="女" value="1"></v-radio>
              </v-radio-group>
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
import { read } from "fs";
import { getUserinfo } from "@/api/index";
export default {
  components: {
    Nav
  },
  data: () => ({
    user: "",
    avatar: "",
    form: {
      avatar: "",
      nickName: "",
      // collect: "123",
      name: "",
      sex: "",
      age: "",
      description: "",
      idCard: "",
      phoneNumber: "",
      bankcard: ""
    },
    url:
      "https://ctguqmx-bbs-img.oss-cn-beijing.aliyuncs.com/images/submit/bd08156570ae52e0f4ff1cd6e6b51a2a.jpg",
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
    getFile() {
      this.avatar = event.target.files[0];
      console.log(this.avatar);
    },
    editInfo() {
      event.preventDefault();
      let formData = new FormData();
      formData.append("avatar", this.avatar);
      editUserInfo(formData).then(res => {
        console.log(res);
      });
    },
    changeImg() {
      let that = this;
      let file = event.target.files[0];

      that.uploadImgName = file.name;

      let param = new FormData(); // 创建form对象
      param.append("avatar", file, file.name); // 通过append向form对象添加数据
      // param.append("order_no", that.order.order_no); // 添加form表单中其他数据
      console.log(param.get("file")); // FormData私有类对象，访问不到，可以通过get判断值是否传进去

      editUserInfo(param.get("file")).then(res => {
        console.log(res);
      });
      // let upimg = document.getElementById("upimg")
      // this.form = new FormData()
      // form.append('avatar',)
    }
  },
  created() {
    getUserinfo().then(res => {
      console.log(res.result);
      this.form = res.result;
    });
  }
};
</script>
<style>
.avatar {
  border-radius: 2px;
}
</style>