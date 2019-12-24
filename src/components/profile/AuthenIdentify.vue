<template>
    <div>
      <v-container>
        <form class="form fill-height">
      <!-- 
      :error-messages="errors.collect('select')"
      v-validate="'required'"-->
      <v-select
        class="mt-10"
        v-model="select"
        :items="classlist"
        label="类别"
        data-vv-name="select"
        required
      ></v-select>
      <v-file-input class="mt-10" small-chips multiple label="选择认证文件(可多选)"></v-file-input>
      <!-- 
      :error-messages="errors.collect('checkbox')"
      v-validate="'required'"-->
      <v-checkbox
        v-model="checkbox"
        value="1"
        label="确认条款"
        data-vv-name="checkbox"
        type="checkbox"
        required
      ></v-checkbox>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </form>
      </v-container>
    </div>
</template>
<script>
export default {
  data: () => ({
    select: "",
    checkbox: false,
    classlist: ["科学", "人文", "历史", "教育"]
  }),
  methods: {
    submit() {
      this.$router.push("authening");
    }
  }
};
</script>
<style>
</style>