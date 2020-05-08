<template>
    <div>
      <!-- 筛选 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
                <el-input v-model="formInline.user" placeholder="会员卡号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="formInline.user" placeholder="会员姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formInline.region" placeholder="支付类型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true">新增</el-button>
            </el-form-item>
            <el-form-item>
                <el-button >重置</el-button>
            </el-form-item>

        </el-form>
      <!-- 会员列表 -->
        <el-table
          :data="member_list"
          border
          style="width: 100%">
          <el-table-column type="index" label="序号" width="90"></el-table-column>
          <el-table-column prop="cardNum" label="会员卡号" width="180"></el-table-column>
          <el-table-column prop="name" label="会员姓名" width="180"></el-table-column>
          <el-table-column prop="birthday" label="会员生日" width="180"></el-table-column>
          <el-table-column prop="phone" label="手机号码" width="180"></el-table-column>
          <el-table-column prop="money" label="开卡金额" width="180"></el-table-column>
          <el-table-column prop="payType|" label="支付类型" width="180"></el-table-column>
          <el-table-column prop="address" label="会员地址" width="270" ></el-table-column>
          <el-table-column label="操作" width="180">
             <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

      <!-- 分页功能 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      <!-- add——dialog -->
      <el-dialog title="新增会员" :visible.sync="dialogFormVisible" width="500px">
          <el-form 
          :model="pojo"
          label-position="right"
          label-width="100px"
          style="width:400px"
          :rules="rules"
          ref="pojoForm"
          >
            <el-form-item label="会员卡号" prop="cardNum">
              <el-input v-model="pojo.cardNum" ></el-input>
            </el-form-item>
            <el-form-item label="会员姓名" prop="name" >
              <el-input v-model="pojo.name" ></el-input>
            </el-form-item>
            <el-form-item label="会员生日" >
              <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择生日">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="手机号码" prop="">
              <el-input v-model="pojo.phone" ></el-input>
            </el-form-item>
            <el-form-item label="开卡金额" >
              <el-input v-model="pojo.money" ></el-input>
            </el-form-item>
            <el-form-item label="支付类型" prop="payType">
              <el-select v-model="pojo.payType" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="会员地址" >
              <el-input v-model="pojo.address" ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addData('pojoForm')">确 定</el-button>
          </div>
      </el-dialog>
    </div>
</template>

<script>

import memberApi from "@/api/member.js"
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        member_list: [],
        total:0,
        pagesize:2,
        currentPage:1,
        searchMap:{},
        dialogFormVisible:true,//控制新增弹窗属性
        pojo:{},
        rules:{
          cardNum:[
            {required:true,message:"卡号不能为空",trigger:"blur"}
          ],
          name:[
            {required:true,message:"姓名不能为空",trigger:"blur"}
          ],
          payType:[
            {required:true,message:"支付类型不能为空",trigger:"change"}
          ],
        },
        value1:"",
        value2:"",
      }
    },


    created(){
      this.fechDate()
    },

    methods:{
      fechDate(){
        memberApi.search(this.currentPage,this.pagesize,this.searchMap).then(resulf => {
          const resp = resulf.data
          this.member_list = resp.data
          this.total = resp.total
          console.log(resp.total)
          console.log(resulf.data)
        }).catch(error => {
          console.log(error)
        })
      },

      // 提交新增会员数据
      addData(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            console.log("tijiaochenggong")
          }else{
            console.log("tijoiashibai")
          }
        })
        },
    }

  }
</script>

<style scoped>

  .el-pagination{
    float: right;
    margin-top: 20px;
  }
  .el-form{
    margin-top: 20px;
  }

</style>
