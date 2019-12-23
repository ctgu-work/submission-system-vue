<template>
  <v-app>
    <div>
      <v-container>
        <v-card>
          <v-card-title>分类管理</v-card-title>
          <v-divider></v-divider>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="categories" label="分类" outlined></v-select>
          </v-col>

          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-text-field v-model="tag" label="标签" required></v-text-field>
              <v-btn>添加</v-btn>
              <v-btn class="ml-2">删除</v-btn>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    categories: ["科学", "物理"],
    category: ""
  }),

  created() {},

  methods: {}
};
</script>