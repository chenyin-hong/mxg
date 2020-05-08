<template>
    <div class="login_tanchuang">
        <el-form ref="form" :model="sizeForm" :rules="rules" label-width="80px" size="mini" class="login_form">
            <h2 class="login_title">梦雪谷会员管理系统</h2>
            <el-form-item label="手机号：" prop="telephone">
                <el-input v-model="sizeForm.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input type="password" v-model="sizeForm.password"></el-input>
            </el-form-item>
            <el-form-item size="large">
                <el-button type="primary" @click="submitForm('form')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import {login} from "@/api/login.js"
  export default {
    data() {
      return {
        sizeForm: {
          telephone: '',
          password: '',
        },
        rules:{
            telephone:[
                {required:true,message:"请输入电话号码",trigger:"blur"},
                {max:11,min:11,message:"请输入正确格式的电话号码",trigger:"blur"},
                // {type:"int",message:"请输入正确格式的手机号"}
            ],
            password:[               
                {required:true,message:"请输入密码",trigger:"blur"},
                {max:12,min:3,message:"密码长度在3到12位之间",trigger:"blur"},
            ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            login(this.sizeForm.telephone,this.sizeForm.password).then(resulf => {
              console.log(resulf.data)
              console.log(resulf.data.code)
              const rsp = resulf.data
              console.log(rsp.code)
              if (rsp.code===200){
                this.$router.push("/home")
                alert("提交成功")
              }else{
                alert("错啦")
              };
              console.log(this.sizeForm.telephone,this.sizeForm.password)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<style scoped>
    .login_tanchuang{
        background: url("../../assets/login.jpg");
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .login_form{
        background:rgb(255, 255,255,0.8);
        padding: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin:-120px 0 0 -190px; 
        width: 380px;
        border-radius: 8px;
    }
    .login_title{
        text-align: center;
    }
</style>