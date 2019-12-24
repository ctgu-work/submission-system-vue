<template>
  <v-app>
    <div>
      <v-container>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item,i) in items" :key="i">
            <v-expansion-panel-header>
              <v-container class="pa-0">
                <v-icon v-text="`fas fa-book`" />
                {{item.title}}
              </v-container>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
               <v-container class="pa-0" v-if="item.status ==='过期'">稿件已过期，请重新投递！</v-container>
              <v-container v-else-if="item.status !=='未审稿'" class="pa-0">
                审稿人: {{item.reviewSpecialist}}
                <v-content class="pa-0">评语: {{item.reviewContent}}</v-content>
                <!-- <v-content v-else-if="item.state=-0" class="pa-0">评语: {{item.reason}}</v-content> -->
              </v-container>
             
              <v-container class="pa-0" v-else>待审核</v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
      <v-container>
        <v-btn>上一页</v-btn>
        <v-btn class="ml-2">下一页</v-btn>
      </v-container>
    </div>
  </v-app>
</template>

<script>
/*
state 0 审核; -1 未通过; 1 通过        
*/
import { getMyPaperStatus } from "@/api/profile";
export default {
  data: () => ({
    startPage: 1,
    items: [
      {
        state: 1,
        title: "您尚未投递任何稿件",
        verifier: {
          id: "1",
          reviewSpecialist: "吴彦祖"
        },
        reviewContent: "通过"
      }
    ]
  }),
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getMyPaperStatus().then(res => {
        console.log(res);
        this.items = res.result;
        console.log(this.items);
      });
    }
  }
};
</script>