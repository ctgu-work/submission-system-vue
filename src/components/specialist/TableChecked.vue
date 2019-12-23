<template>
  <v-app>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item,i) in items" :key="i">
        <v-expansion-panel-header disable-icon-rotate>
          {{item.id}}
          <template v-slot:actions>
            <v-icon v-if="item.status==1" color="teal">mdi-check</v-icon>
            <v-icon v-else color="error">mdi-alert-circle</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>评语:{{item.content}}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        title: "Spring学习指南",
        content: "写的不错",
        status: 1
      },
      {
        id: 2,
        title: "Spring学习指南",
        content: "写的不错",
        status: 0
      }
    ]
  }),
  created(){
      console.log('123')
  }
};
</script>