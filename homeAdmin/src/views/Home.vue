<template>
  <div class="home fu">
    <div style="width: 100%;height:50px;border-bottom: 1px solid #cccccc">
      后台管理
    </div>
    <div class="jx-box">
      <div style="width: 200px;padding-top: 50px;text-align: left">
        <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @select="selectMenu">
          <el-menu-item index="/home">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
            <el-menu-item index="/home/newsList">
              <i class="el-icon-setting"></i>
              <span slot="title">新闻发布</span>
            </el-menu-item>

        </el-menu>
      </div>
      <div class="jx-flex1">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
            <!-- 这里是会被缓存的视图组件，比如 Home！ -->
          </router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive">
          <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
        </router-view>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "home",
  components: {

  },
    methods: {
        selectMenu(val) {
            this.$router.push(val)
        }
    }
};
</script>
