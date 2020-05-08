<template>
    <div class="layoutheader">
        <a href="/#/home">
            <img class="logo" src="@/assets/logo.png" alt="" width="25px">
            <span class="comanpy">梦雪谷管理系统</span>
        </a>
        <el-dropdown>
            <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-unfold">系统退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div> 
</template>

<style scoped>
    .logo{
        vertical-align: middle;
        padding: 0 10px 0 40px;
    }
    .comanpy{
        position: absolute;
        color: white;
    }
    .el-dropdown{
        float: right;
        margin-right: 40px;
        color: white;
    }
</style>