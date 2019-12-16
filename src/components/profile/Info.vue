<template>
  <v-app>
    <v-container class>
      <v-row class="d-flex justify-space-around fill-height">
        <v-col md="6">
          <v-container>
            <v-card>
              <v-card-title style="background-color:#f7f7f7;">
                <v-icon v-text="`fas fa-flag`" style="color:rgb(8,178,146);" class="pr-2"></v-icon>成就
              </v-card-title>
              <v-card-actions>
                <v-icon v-text="`fas fa-book`"></v-icon>
                <v-card-text>123</v-card-text>
                <v-icon v-text="`fas fa-grin`"></v-icon>
                <v-card-text>113</v-card-text>
                <v-icon v-text="`fas fa-award`"></v-icon>
                <v-card-text>123</v-card-text>
              </v-card-actions>
            </v-card>
          </v-container>

          <v-container>
            <v-card>
              <v-card-title style="background-color:#f7f7f7;">
                <v-icon v-text="`fas fa-wallet`" style="color:rgb(8,178,146);" class="pr-2"></v-icon>稿费
              </v-card-title>
              <v-card-actions>
                <v-icon v-text="`fas fa-money-check-alt`"></v-icon>
                <v-card-text>113</v-card-text>
                <v-icon v-text="`fa s fa-bookmark`"></v-icon>
                <v-card-text>123</v-card-text>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>

        <v-col md="6">
          <v-container>
            <v-card>
              <v-card-title style="background-color:#f7f7f7;">
                <v-icon v-text="`fas fa-edit`" style="color:rgb(8,178,146);" class="pr-2"></v-icon>稿件
              </v-card-title>
              <v-card-actions>
                <v-icon v-text="`fas fa-check`"></v-icon>
                <v-card-text>113</v-card-text>
                <v-icon v-text="`fas fa-question-circle`"></v-icon>
                <v-card-text>113</v-card-text>
                <v-icon v-text="`fas fa-times`"></v-icon>
                <v-card-text>123</v-card-text>
              </v-card-actions>
            </v-card>
          </v-container>
          <v-container>
            <v-card>
              <v-card-title style="background-color:#f7f7f7;">
                <v-icon v-text="`fas fa-star`" style="color:rgb(8,178,146);" class="pr-2"></v-icon>关注
              </v-card-title>
              <v-card-actions>
                <v-icon v-text="`fas fa-wallet`"></v-icon>
                <v-card-text>113</v-card-text>
                <!-- <v-icon v-text="`fa s fa-award`"></v-icon>
                <v-card-text>123</v-card-text>-->
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
        <v-col xs="12" md="12">
          <v-container>
            <v-card class="fill-width" >
              <v-card-title style="background-color:#f7f7f7;">
                <v-icon v-text="`fas fa-star`" style="color:rgb(8,178,146);" class="pr-2"></v-icon>擅长方向
              </v-card-title>
              <v-card-text>
                <v-chip-group  column active-class="primary--text">
                  <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    tags: ["测试","HTML","Vue","JAVA","SpringBoot","Nginx"]
  })
};
</script>