<template>
  <v-app>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">标题</th>
            <th class="text-left">日期</th>
            <th class="text-left">作者</th>
            <th class="text-left">审核</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in desserts" :key="i">
            <td>{{ item.title }}</td>
            <td>{{item.submitTime}}</td>
            <td>{{ item.author }}</td>
            <td>
              <router-link :to="{path:'check',query:{id:item.paperId}}">
                <v-btn>审核</v-btn>
              </router-link>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
</template>
<script>
import { searchUnchecked } from "@/api/specialist";
export default {
  data: () => ({
    desserts: [
      {
        id: 1,
        submitTime: "2017-12-18",
        title: "Frozen Yogurt",
        author: 159,
        paperId: 0
      }
    ],
    fristPage: true,
    haveNexPage: false,
    havePerPage: false,
    lastPage: true
  }),
  created() {
    this.getUnchecked();
  },
  methods: {
    getUnchecked() {
      searchUnchecked().then(res => {
        console.log(res)
        this.desserts = res.result[0].list;
        this.fristPage = res[0].result[0].fristPage;
        this.haveNexPage = res[0].result[0].haveNexPage;
        this.havePerPage = res[0].result[0].havePerPage;
        this.lastPage = res[0].result[0].lastPage;
        console.log(this.desserts);
      });
    }
  }
};
</script>