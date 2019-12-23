<template>
  <v-app>
    <div>
      <v-tabs v-model="tab" background-color="deep-purple accent-4" class="elevation-2" dark>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">待审核</v-tab>
        <v-tab href="#tab-2">我审核的文章</v-tab>
        <v-tab-item value="tab-1">
          <TableChecking />
        </v-tab-item>
        <v-tab-item value="tab-2">
          <TableChecked />
        </v-tab-item>
      </v-tabs>
    </div>
  </v-app>
</template>
<script>
import TableChecked from "@/components/specialist/TableChecked";
import TableChecking from "@/components/specialist/TableChecking";
export default {
  components: {
    TableChecked,
    TableChecking
  },
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit ameon "
    };
  },
  methods: {
    click(data) {
      console.log(data);
    }
  }
};
</script>