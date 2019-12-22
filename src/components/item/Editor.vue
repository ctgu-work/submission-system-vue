<template>
  <v-app>
    <v-container>
      <v-row style="text-align:left">
        <v-col cols="12">
          <div class="display-1">编辑文章</div>

          <v-divider class="pb-5" />
          <div class="headline">标题添加</div>
          <div>
            <v-card>
              <v-card-actions>
                <v-text-field v-model="form.title" :counter="20" label="标题" required></v-text-field>
              </v-card-actions>
            </v-card>
          </div>
          <!-- <v-divider /> -->
          <div class="headline pt-5">分类管理</div>
          <div>
            <v-card>
              <v-card-actions>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select small :items="items" chips filled label="分类" outlined></v-select>
                </v-col>
              </v-card-actions>
            </v-card>
          </div>
          <v-divider />
          <div class="headline pt-5">标签管理</div>
          <div>
            <v-card>
              <v-card-subtitle>
                <v-text-field v-model="tag" :counter="20" label="标签" required></v-text-field>
              </v-card-subtitle>
              <v-card-text>
                <v-btn @click="addTag" color="primary" raised>添加</v-btn>
              </v-card-text>

              <v-snackbar v-model="snackbar">
                {{snackbar_tag}}{{snackbarMess}}
                <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
              </v-snackbar>

              <v-card-title>已选标签：</v-card-title>
              <v-card-actions>
                <div v-for="(item,i) in form.tag" :key="i" class="text-center">
                  <v-chip
                    @click="deleteTag(i)"
                    class="ma-2"
                    color="green"
                    text-color="white"
                  >{{item}}</v-chip>
                </div>
              </v-card-actions>
            </v-card>
          </div>
          <v-divider class="pt-5" />
          <div class="headline">作者管理</div>
          <v-card>
            <v-card-actions>
              <v-text-field v-model="form.author" :counter="20" label="作者" required></v-text-field>
            </v-card-actions>
          </v-card>
          <v-divider />
        </v-col>
      </v-row>
      <div>
        <div ref="editor" style="text-align:left"></div>
        <div class="d-flex justify-end">
          <v-dialog v-model="dialog" width="800px">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-5" @click="getContent" color="primary" dark v-on="on">预览内容</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">预览内容</span>
              </v-card-title>
              <v-divider />
              <v-card-text v-html="html"></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">关闭</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn @click="submit" class="ma-5" color="primary" dark>提交</v-btn>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import E from "wangeditor";
import { getClasstify } from "@/api/article";
import { submitArtile } from "@/api/article";

export default {
  name: "editor",
  data() {
    return {
      form: {
        editorContent: "",
        title: "",
        classfity: "",
        tag: [],
        author: ""
      },
      tag: "",
      items: ["科学", "生物", "人文", "数学", "物理"],
      tags: [
        "Java",
        "前端",
        "Vue",
        "React",
        "Nginx",
        "Css",
        "SSM",
        "SpringBoot",
        "SpringCloud",
        "操作系统"
      ],
      snackbar: false,
      snackbar_tag: "",
      snackbarMess: "",
      dialog: false,
      html: ""
    };
  },
  methods: {
    getContent: function() {
      this.html = this.form.editorContent;
      console.log(this.html);
    },
    addTag() {
      if (this.tag.replace(/(^s*)|(s*$)/g, "").length == 0) {
        this.snackbar = true;
        this.snackbar_tag = "";
        this.snackbarMess = "标签不能为空";
      } else if (this.form.tag.indexOf(this.tag) > -1) {
        this.snackbar = true;
        this.snackbar_tag = this.tag;
        this.snackbarMess = "标签已添加";
      } else {
        this.form.tag.push(this.tag);
        this.tag = "";
      }
    },
    deleteTag(data) {
      console.log(data);
      this.form.tag.splice(data, 1);
    },
    submit() {
      submitArtile(this.form).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    getClasstify().then(res => {
      console.log(res);
    });
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.zIndex = 2;
    //配置上传图片
    editor.customConfig.uploadImgServer = "/upload";
    editor.customConfig.onchange = html => {
      this.form.editorContent = html;
    };
    editor.create();
  }
};
</script>

<style scoped>
</style>
