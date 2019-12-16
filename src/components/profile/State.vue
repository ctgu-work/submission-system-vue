<template>
  <v-app>
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
            <v-container v-if="item.state!=0" class="pa-0">
              审稿人: {{item.verifier.name}}
              <v-content v-if="item.state==1" class="pa-0">{{item.reason}}</v-content>
              <v-content v-else-if="item.state==-1" class="pa-0">未通过理由: {{item.reason}}</v-content>
            </v-container>

            <v-container class="pa-0" v-else>待审核</v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-app>
</template>

<script>
/*
state 0 审核; -1 未通过; 1 通过        
*/
export default {
  data: () => ({
    items: [
      {
        state: 1,
        title: "Spring的发展史",
        verifier: {
          id: "1",
          name: "吴彦祖"
        },
        reason: "通过"
      },
      {
        state: 0,
        title: "Mysql",
        verifier: {
          id: "2",
          name: "clearlove"
        }
      },
      {
        state: -1,
        title: "nginx的发展史",
        verifier: {
          id: "2",
          name: "mata"
        },
        reason: "创始人被抓，不通过"
      }
    ]
  })
};
</script>