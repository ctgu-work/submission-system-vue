<template>
  <v-app>
    <v-tabs>
      <v-tab>
        <router-link :to="{path:'/profile/activities/context/info'}">首页</router-link>
      </v-tab>
      <v-tab>
        <router-link :to="{path:'/profile/activities/context/state'}">稿件状态</router-link>
      </v-tab>
      <v-tab>
        <router-link :to="{path:'/profile/activities/context/info'}">收益</router-link>
      </v-tab>
    </v-tabs>
    <router-view />
  </v-app>
</template>