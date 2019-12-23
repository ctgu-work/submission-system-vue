<template>
  <v-app>
    <div>
      <v-container>
        <v-data-table :headers="headers" :items="desserts" sort-by="name" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>专家管理</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">新建专家</v-btn>
                </template>
                <v-card>
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
                          <v-text-field v-model="editedItem.count" label="昵称"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.phoneNumber" label="手机号"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="8">
                          <v-select :items="categories" label="分类" outlined></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field disabled v-model="editedItem.userId" label="用户Id"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select :items="statuss" label="状态" outlined></v-select>
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
      { text: "分类", value: "category"},
      { text: "手机号", value: "phoneNumber" },
      { text: "用户Id", value: "userId" },
      { text: "审稿数量", value: "count" },
      { text: "状态", value: "status"},
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [], //数据
    editedIndex: -1,
    editedItem: {
      id: 0,
      name: 0,
      count: 0,
      category: 0,
      phoneNumber: 0,
      userId: 0,
      status: 0
    },
    defaultItem: {
      id: "",
      name: 0,
      count: 0,
      category: 0,
      phoneNumber: 0,
      userId: 0,
      status: 0
    },
    categories: ["教育", "计算机"],
    statuss: ["已审核", "未审核"]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "添加专家" : "编辑专家";
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
          name: "chase",
          id: 159,
          count: 6.0,
          category: "计算机",
          phoneNumber: 4.0,
          userId: "13409676651",
          status: "未审核"
        },
        {
          name: "Ice cream sandwich",
          id: 237,
          count: 9.0,
          category: 37,
          phoneNumber: 4.3,
          userId: "13409676652",
          status: "未审核"
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