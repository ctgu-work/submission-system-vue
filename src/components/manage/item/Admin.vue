<template>
  <v-app>
    <div>
      <v-container>
        <v-data-table :headers="headers" :items="desserts" sort-by="name" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>管理员管理</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">新建管理</v-btn>
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
                          <v-text-field v-model="editedItem.nickName" label="昵称"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.phoneNumber" label="手机号"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.password" label="密码"></v-text-field>
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
      { text: "昵称", value: "nickName" },
      { text: "手机号", value: "phoneNumber" },
      { text: "密码", value: "password", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [], //数据
    editedIndex: -1,
    editedItem: {
      id: 0,
      nickName: 0,
      phoneNumber: 0,
      password: 0
    },
    defaultItem: {
      id: 0,
      nickName: 0,
      phoneNumber: 0,
      password: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "添加管理" : "编辑管理";
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
          id: 159,
          nickName: 6.0,
          phoneNumber: 4.0,
          password: "13409676651"
        },
        {
          id: 237,
          nickName: 9.0,
          phoneNumber: 4.3
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