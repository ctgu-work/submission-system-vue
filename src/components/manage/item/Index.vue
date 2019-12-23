<template>
  <v-app>
    <div>
      <v-row class="pa-5">
        <v-col cols="md-5">
          <v-card>
            <v-card-title>
              <v-avatar color="indigo" size="104">
                <span class="white--text headline">Super</span>
              </v-avatar>
            </v-card-title>
            <v-spacer />
            <v-card-subtitle>
              <p>
                <v-icon v-text="`fas fa-user-circle`" class="pr-2" />
                {{admin.nickName}}
              </p>
              <p>
                <v-icon v-text="`fas fa-phone-alt`" class="pr-2" />
                {{admin.phoneNumber}}
              </p>
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="md-7">
          <v-card class="d-flex justify-start">
            <v-container class="pa-0 d-flex justify-start">
              <v-avatar size="100" tile color="#2d8cf0">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>
              <v-container class="pa-0 d-flex text-center flex-column justify-center">
                <span class="display-1">123</span>
                <span>用户人数</span>
              </v-container>
            </v-container>
            <v-container class="pa-0 d-flex justify-start">
              <v-avatar size="100" tile color="#64d572">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>
              <v-container class="pa-0 d-flex text-center flex-column justify-center">
                <span class="display-1">123</span>
                <span>文章总数</span>
              </v-container>
            </v-container>
            <v-container class="pa-0 d-flex justify-start">
              <v-avatar size="100" tile color="#f25e43">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>
              <v-container class="pa-0 d-flex text-center flex-column justify-center">
                <span class="display-1">123</span>
                <span>系统消息</span>
              </v-container>
            </v-container>
          </v-card>
        </v-col>
        <!-- <v-col cols="6">
          <v-card class="mx-auto text-center" color="green" dark max-width="600">
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item">${{ item.value }}</template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block text>Go to Report</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="mx-auto text-center" color="green" dark max-width="600">
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="form1.value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item">${{ item.form1.date }}</template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>
            <v-card-text>
              <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn block text>Go to Report</v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->
      </v-row>
    </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    admin: {
      nickName: "chase",
      phoneNumber: 1234345353
    },
    form1: {
      date: ["1", "2", "3", "4", "5", "6", "7"],
      value: [423, 446, 675, 510, 590, 610, 760]
    },
    value: [423, 446, 675, 510, 590, 610, 760]
  })
};
</script>