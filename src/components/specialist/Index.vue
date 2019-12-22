<template>
  <v-app>
    <div>
      <v-tabs v-model="tab" background-color="deep-purple accent-4" class="elevation-2" dark>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">待审核</v-tab>
        <v-tab href="#tab-2">已审核文章</v-tab>
        <v-tab-item value="tab-1">
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
          <td><router-link :to="{path:'check',query:{id:item.id}}"><v-btn>审核</v-btn></router-link></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
          <!-- <v-card flat tile>
           <v-row>
             <v-col cols="auto" class="mr-auto">
                 <div class="pl-5 title">
                   Spring解密
                 </div>
             </v-col>
             <v-col cols="auto">
             </v-col >
             <v-col cols="auto">
               <v-btn class="mr-5">审核</v-btn>
             </v-col>
           </v-row>
          </v-card> -->
        </v-tab-item>
      </v-tabs>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit ameon ",
      desserts: [
          {
            id:1,
            date:'2017-12-18',
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            id:1,
            date:'2017-12-18',
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            id:1,
            date:'2017-12-18',
            name: 'Eclair',
            calories: 262,
          },
          {
            id:1,
            date:'2017-12-18',
            name: 'Cupcake',
            calories: 305,
          },
          {
            id:1,
            date:'2017-12-18',
            name: 'Gingerbread',
            calories: 356,
          },
          {
            id:1,
            date:'2017-12-18',
            name: 'Jelly bean',
            calories: 375,
          },
          {
            id:1,
            date:'2017-12-18',
            name: 'Lollipop',
            calories: 392,
          },
          {
            id:1,
            date:'2017-12-18',
            name: 'Honeycomb',
            calories: 408,
          },
          {
            id:41,
            date:'2017-12-18',
            name: 'Donut',
            calories: 452,
          },
          {
            id:3,
            date:'2017-12-18',
            name: 'KitKat',
            calories: 518,
          },
        ],
    };
  },
  methods: {
    click(data){
      console.log(data)
    }
  }
};
</script>