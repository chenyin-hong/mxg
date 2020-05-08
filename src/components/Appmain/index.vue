<template>
    <div class="layoutmain">
        <el-breadcrumb v-show="$route.path !== '/home/'" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:$route.path}">{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div> 
</template>

<style scoped>
        .el-breadcrumb{
            height: 10px;
            padding: 20px;
            border-radius: 4px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>