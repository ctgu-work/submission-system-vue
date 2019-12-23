<template>
  <v-app>
    <div>
      <v-data-table :headers="headers" :items="desserts" sort-by="title" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>稿件管理</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <!-- <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on"></v-btn>
              </template> -->
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
                        <v-text-field v-model="editedItem.title" label="标题"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.author" label="作者"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.clickRate" label="访问量（次）"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select v-model="editedItem.category" :items="items" label="分类"></v-select>
                        <!-- <v-text-field v-model="editedItem.category" label="分类"></!-->
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.likeCount" label="点赞数"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select  v-model="editedItem.status" :items="statusItem" label="状态"></v-select>
                        <!-- <v-text-field v-model="editedItem.status" label="状态"></!-->
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.username" label="投稿人"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                          <v-date-picker v-model="editedItem.submitTime"></v-date-picker>
                        <!-- <v-text-field v-model="editedItem.submitTime" label="投递时间"></v-text-field> -->
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
      { text: "标题", value: "title" },
      { text: "作者", value: "author" },
      { text: "类型", value: "category" },
      { text: "访问量", value: "clickRate" },
      { text: "点赞量", value: "likeCount" },
      { text: "状态", value: "status" },
      { text: "投稿人", value: "username" },
      { text: "投递时间", value: "submitTime" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [], //数据
    editedIndex: -1,
    editedItem: {
      id: 0,
      title: 0,
      author: 0,
      category: 0,
      clickRate: 0,
      likeCount: 0,
      status: 0,
      username: 0,
      submitTime: 0
    },
    defaultItem: {
      id: "",
      title: 0,
      author: 0,
      category: 0,
      clickRate: 0,
      likeCount: 0,
      status: 0,
      username: 0,
      submitTime: 0
    },
    items: ["科学", "人文", "物理"],
    statusItem:['未审稿','已审稿'],
    picker: new Date().toISOString().substr(0, 10),
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "添加文章" : "编辑稿件";
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
          title: "Spring",
          id: 159,
          author: "chase",
          category: "物理",
          clickRate: 1234,
          likeCount: 123443,
          status: "未审稿",
          username: "吴彦祖",
          submitTime: "2017-11-13"
        },
        {
          title: "操作系统概念",
          id: 237,
          author: "kunges",
          category: "科学",
          clickRate: 1231423,
          likeCount: 1235532455432,
          status: "已审稿",
          username: "蔡徐坤",
          submitTime: "2017-11-13"
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