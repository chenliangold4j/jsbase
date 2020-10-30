<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form :model="loginForm" class="login_form" label-width="0">
        <!-- 用户名 -->
        <el-form-item label="">
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
            v-model="loginForm.name"
          >
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="loginForm.region"
            type="password"
          >
          </el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item label="">
          <el-button v-on:click="test_ok" type="primary">登录</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "zs",
        region: "",
      },
    };
  },
  methods: {
    test_ok() {
      this.loginForm.name = "test";
      console.log("test");
      this.$http
        .post("http://localhost:8081/login", this.loginForm)
        .then((res) => {
          window.sessionStorage.setItem("token",res.data.data);
          this.$router.push('/home');
        })
        .catch((e) => {
          console.log(e);
          console.log("获取数据失败");
        });
    },
  },
};
</script>

<style>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10 px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>