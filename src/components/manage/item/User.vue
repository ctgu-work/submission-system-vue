<template>
  <v-app>
    <div>
      <v-container>
        <v-data-table :headers="headers" :items="desserts" sort-by="name" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>用户管理</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">新建用户</v-btn>
                </template>
                <v-card>
                  <!-- new item -->
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <!-- 弹窗 -->
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.name" label="名字"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.nickName" label="昵称"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.phoneNumber" label="手机号"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field v-model="editedItem.idCard" label="银行卡号"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.password" label="密码"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.email" label="邮箱"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.paper" label="发表邮件(个)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.money" label="稿费(元)"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                    <v-btn color="blue darken-1" text @click="save">保存</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
            <v-icon small @click="deleteItem(item)">delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "id",
        align: "left",
        sortable: true,
        value: "id"
      },
      { text: "姓名", value: "name" },
      { text: "昵称", value: "nickName" },
      { text: "卡号", value: "idCard", sortable: false },
      { text: "手机号", value: "phoneNumber", sortable: false },
      { text: "密码", value: "password", sortable: false },
      { text: "邮箱", value: "email", sortable: false },
      { text: "发表稿件", value: "paper" },
      { text: "稿费", value: "money" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [], //数据
    editedIndex: -1,
    editedItem: {
      id: 0,
      name: 0,
      nickName: 0,
      idCard: 0,
      phoneNumber: 0,
      password: 0,
      email: 0,
      paper: 0,
      money: 0
    },
    defaultItem: {
      id: "",
      name: 0,
      nickName: 0,
      idCard: 0,
      phoneNumber: 0,
      password: 0,
      email: 0,
      paper: 0,
      money: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "添加用户" : "编辑用户";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      //插入数据
      this.desserts = [
        {
          name: "Frozen Yogurt",
          id: 159,
          nickName: 6.0,
          idCard: "112323413253452355234",
          phoneNumber: 4.0,
          password: "13409676651",
          email: "1131497375@qq.com",
          paper: 1,
          money: 2
        },
        {
          name: "Ice cream sandwich",
          id: 237,
          nickName: 9.0,
          idCard: 37,
          phoneNumber: 4.3,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 3,
          money: 4
        },
        {
          name: "Eclair",
          id: 262,
          nickName: 16.0,
          idCard: 23,
          phoneNumber: 6.0,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 4,
          money: 21
        },
        {
          name: "Cupcake",
          id: 305,
          nickName: 3.7,
          idCard: 67,
          phoneNumber: 4.3,
          password: "13409673652",
          email: "1131497375@qq.com",
          paper: 132,
          money: 123
        },
        {
          name: "Gingerbread",
          id: 356,
          nickName: 16.0,
          idCard: 49,
          phoneNumber: 3.9,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 1,
          money: 2
        },
        {
          name: "Jelly bean",
          id: 375,
          nickName: 0.0,
          idCard: 94,
          phoneNumber: 0.0,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 1,
          money: 2
        },
        {
          name: "Lollipop",
          id: 392,
          nickName: 0.2,
          idCard: 98,
          phoneNumber: 0,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 1,
          money: 2
        },
        {
          name: "Honeycomb",
          id: 408,
          nickName: 3.2,
          idCard: 87,
          phoneNumber: 6.5,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 1,
          money: 2
        },
        {
          name: "Donut",
          id: 452,
          nickName: 25.0,
          idCard: 51,
          phoneNumber: 4.9,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 1,
          money: 2
        },
        {
          name: "KitKat",
          id: 518,
          nickName: 26.0,
          idCard: 65,
          phoneNumber: 7,
          password: "13409676652",
          email: "1131497375@qq.com",
          paper: 1,
          money: 2
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item); //取到第item个要修改的列
      this.editedItem = Object.assign({}, item); //把item复制到{} 返回出去
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("你确定想要删除这一行?") && this.desserts.splice(index, 1); //删除
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>