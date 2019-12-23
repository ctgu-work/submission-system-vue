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
                <tr @click="click(item.name)" v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{item.date}}</td>
                  <td>{{ item.calories }}</td>
                  <td>
                    <router-link :to="{path:'check',query:{id:item.id}}">
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
export default {
    data:()=>({
        desserts: [
        {
          id: 1,
          date: "2017-12-18",
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          id: 1,
          date: "2017-12-18",
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          id: 1,
          date: "2017-12-18",
          name: "Eclair",
          calories: 262
        },
        {
          id: 1,
          date: "2017-12-18",
          name: "Cupcake",
          calories: 305
        },
        {
          id: 1,
          date: "2017-12-18",
          name: "Gingerbread",
          calories: 356
        },
        {
          id: 1,
          date: "2017-12-18",
          name: "Jelly bean",
          calories: 375
        },
        {
          id: 1,
          date: "2017-12-18",
          name: "Lollipop",
          calories: 392
        },
        {
          id: 1,
          date: "2017-12-18",
          name: "Honeycomb",
          calories: 408
        },
        {
          id: 41,
          date: "2017-12-18",
          name: "Donut",
          calories: 452
        },
        {
          id: 3,
          date: "2017-12-18",
          name: "KitKat",
          calories: 518
        }
      ]
    }),
    created(){
        console.log('checking')
    }
}
</script>