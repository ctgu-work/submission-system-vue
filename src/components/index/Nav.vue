<template>
  <!--主页导航栏 -->
  <div>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">在线投稿系统</span>
      </v-toolbar-title>
      <!-- flat -->
      <v-text-field
        text
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
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-bell</v-icon>
        </template>
        <span>消息</span>
      </v-tooltip>
      <div class="pr-4"></div>
      <v-menu v-if="user!=null" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="32px" item>
              <v-img v-if="user.avatarUrl.length!=0" :src="user.avatarUrl" alt="Vuetify" />
              <v-img v-else src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" />
              <!-- <v-img :src="`${publicPath}img/xixixi.jpg`" alt="Vuetify" /> -->
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in avatarList" :key="index">
            <v-list-item-title @click="clickAvatar(item.url)">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" @click="dialog = !dialog" v-text="`fas fa-user`"></v-icon>
        </template>
        <span>登陆注册</span>
      </v-tooltip>
    </v-app-bar>

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

    <!-- 登录表单 -->
    <v-dialog v-model="dialog" width="800px">
      <template>
        <v-card>
          <v-toolbar flat color="primary" dark>
            <v-toolbar-title>登录/注册</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab>
              <v-icon left>mdi-account</v-icon>用户登录
            </v-tab>
            <v-tab>
              <v-icon left>mdi-lock</v-icon>用户注册
            </v-tab>
            <v-tab>
              <v-icon left>mdi-access-point</v-icon>专家登录
            </v-tab>

            <!-- 用户登录 -->
            <v-tab-item>
              <v-card flat>
                <v-container>
                  <v-row class="mx-2">
                    <v-col cols="12">
                      <v-text-field
                        v-model="userForm.phoneNumber"
                        type="tel"
                        prepend-icon="phone"
                        placeholder="手机号"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="userForm.password"
                        type="password"
                        prepend-icon="lock"
                        placeholder="密码"
                      />
                    </v-col>
                  </v-row>
                </v-container>
                <v-card-actions>
                  <v-spacer />
                  <v-btn text @click="userLogin">提交</v-btn>
                  <v-btn text color="primary" @click="dialog = false">取消</v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
            <!-- 用户注册 -->
            <v-tab-item>
              <v-card flat>
                <v-container>
                  <v-row class="mx-2">
                    <v-col cols="12">
                      <v-text-field
                        v-model="registerForm.name"
                        type="tel"
                        prepend-icon="mdi-account"
                        placeholder="姓名"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="registerForm.nickName"
                        type="tel"
                        prepend-icon="phone"
                        placeholder="昵称"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="registerForm.idCard"
                        type="tel"
                        prepend-icon="mdi-account-badge-horizontal"
                        placeholder="身份证号"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-radio-group
                        row
                        prepend-icon="mdi-face"
                        v-model="registerForm.sex"
                        :mandatory="false"
                      >
                        <v-radio label="男" value="1"></v-radio>
                        <v-radio label="女" value="2"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="registerForm.phoneNumber"
                        type="tel"
                        prepend-icon="phone"
                        placeholder="手机号"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="registerForm.age"
                        prepend-icon="mdi-cake"
                        placeholder="年龄"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="registerForm.password"
                        type="password"
                        prepend-icon="lock"
                        placeholder="密码"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="registerForm.email"
                        type="email"
                        prepend-icon="email"
                        placeholder="邮箱"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="registerForm.verify"
                            type="email"
                            prepend-icon="email"
                            placeholder="验证码"
                          />
                        </v-col>
                        <v-col cols="6">
                          <v-btn @click="submitVerify" class="mr-2">提交</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                      <v-btn @click="submitRegister" class="mr-2">提交</v-btn>
                      <v-btn @click="dialog=!dialog">取消</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-tab-item>
            <!-- 专家登录 -->
            <v-tab-item>
              <v-card flat>
                <v-container>
                  <v-row class="mx-2">
                    <v-col cols="12">
                      <v-text-field
                        v-model="specialistForm.phoneNumber"
                        type="tel"
                        prepend-icon="phone"
                        placeholder="手机号"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="specialistForm.password"
                        type="password"
                        prepend-icon="lock"
                        placeholder="密码"
                      />
                    </v-col>
                  </v-row>
                </v-container>
                <v-container>
                  <v-btn @click="spLogin" class="mr-2">登录</v-btn>
                  <v-btn @click="dialog=!dialog">取消</v-btn>
                </v-container>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
<script>
import { fetchTab } from "@/api/index";
import { fetchHotArticleList } from "@/api/index";
import {
  login,
  register,
  getVerifyCode,
  specialistLogin,
  logout
} from "@/api/index";
import { getUserinfo } from "@/api/index";
export default {
  data: () => ({
    tablist: [],
    drawer: null,
    dialog: false,
    publicPath: process.env.BASE_URL, //public 文件夹
    avatarList: [
      { title: "个人主页", url: "/profile" },
      { title: "写文章", url: "/" },
      { title: "修改信息", url: "/profile/activities/editinfo" },
      { title: "成为专家", url: "/profile/authen" },
      { title: "退出登录", url: "logout" }
    ],
    userForm: {
      phoneNumber: "",
      password: ""
    },
    registerForm: {
      name: "",
      nickName: "",
      idCard: "",
      sex: 1,
      phoneNumber: "",
      password: "",
      email: "",
      verify: "",
      age: ""
    },
    user: null,
    specialistForm: {
      phoneNumber: "",
      password: ""
    }
  }),
  created() {
    this.getTab();
    getUserinfo().then(res => {
      this.user = res.result;
    });
  },
  methods: {
    getTab() {
      fetchTab(this.list).then(res => {
        this.tablist = res.list;
      });
    },
    clickAvatar(data) {
      console.log(data);
      if (data === "logout") {
        
        logout()
        // this.$router.push("/");
      } else {
        this.$router.push(data);
      }
    },
    userLogin() {
      login(this.userForm).then(res => {
        if (res.msg === "success") {
          this.user = res.result;
          this.$store.dispatch("tologin", res);
          this.dialog = false;
        } else {
          console.log("登录失败");
        }
      });
    },
    submitRegister() {
      register(this.registerForm).then(res => {
        console.log(res);
      });
    },
    submitVerify() {
      getVerifyCode(this.registerForm).then(res => {
        this.registerForm.verify = res.verify;
      });
    },
    spLogin() {
      specialistLogin(this.specialistForm).then(res => {
        console.log(res);
      });
    }
  }
};
</script>