<template>
  <div class="login">
      <CmpLogin style="margin-top: 200px;width: 300px;display: inline-block"> </CmpLogin>
  </div>
</template>

<script>
// @ is an alias to /src
import CmpLogin from '_cmp/CmpLogin';
export default {
  name: "login",
  components: {CmpLogin}
};
</script>
<style>
    .login{
        height: 100%;
        width: 100%;
        text-align: center;

    }

</style>