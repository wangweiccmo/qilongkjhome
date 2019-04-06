<template>
  <el-breadcrumb class="jx-breadcrumb " separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">
          {{ item.name }}
        </span>
        <a v-else @click.stop="handleLink(item)">{{ item.name }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>

export default {
  name:'JxBreadcrumb',
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)

      this.levelList = matched.slice(1)
    },
      handleLink(item) {
      const { redirect, path } = item

      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
  .jx-breadcrumb {
    border-bottom: solid 1px #e6e6e6;
    width: 100%;
    padding: 5px;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: #606266;
    cursor: text;
    line-height: 20px;

  }
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
</style>
