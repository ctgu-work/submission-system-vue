<template>
  <v-app>
    <div>
      <v-container>
        <v-card>
          <v-card-title>发布站内消息</v-card-title>
          <v-spacer />
          <v-card-subtitle>
            <p>选择对象:</p>
            <v-autocomplete
              v-model="value"
              :items="search"
              outlined
              dense
              chips
              small-chips
              label="Outlined"
              multiple
            ></v-autocomplete>
          </v-card-subtitle>
          <v-card-actions>
            <v-container>
              <v-textarea solo name="input-7-4" label="消息"></v-textarea>
              <v-btn>发布</v-btn>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    items: ["全体对象", "foo", "bar", "fizz", "buzz"],
    values: ["123"],
    value: null,
    search: []
  }),
  created() {
    this.merge();
    console.log(this.search);
  },
  methods: {
    merge() {
      console.log("merge");
      this.search = this.items.concat(this.values);
    }
  }
};
</script>