<template>
  <v-app>
    <div>
      <v-container>
        <v-card>
          <v-card-title>标签管理</v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-chip
              v-for="(item,i) in tags"
              :key="i"
              class="ma-2"
              color="secondary"
            >{{item.tagName}}</v-chip>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-btn>添加</v-btn>
            </v-container>
            <v-container>
              <v-text-field
                v-model="tag"
                label="标签"
                required
              ></v-text-field>
              <v-btn>删除</v-btn>
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
    tags: [
      {
        id: 1,
        tagName: "Nginx"
      },
      {
        id: 2,
        tagName: "Java"
      }
    ],
    tag: ''
  }),

  created() {},

  methods: {}
};
</script>