<template>
    <div>
      <h1>动态路由实验，当有两个以上的参数需要使用router来传递，如何配置</h1>
      <h2>应用场景如：新闻列表，注意路由变化</h2>
      <h3>点击更改路由参数，然后页面从路由参数拿值进行渲染</h3>
      <h3>实现功能 1 ：保存两个参数：页码X以及新闻种类Y</h3>
      <h3>实现功能 2 ：点击页码时路由变化为list-Y-X</h3>
      <h3>实现功能 3 ：点击种类时路由变化为list-Y</h3>
      <h3>实现功能 4 ：点击种类再点击页码时路由变化为list-Y-X</h3>
      <h3>实现功能 5 ：点击页码再点击种类时，页码重新赋值为1</h3>
      <h3>实现功能 6 ：当点进文章详情后退回上个页面时保存两个参数：页码以及新闻种类</h3>
      <hr />
      <h2>当前路由参数（$routerparams)</h2>
      <span>{{ routerparams }}</span>
      <hr />
      <div>
        <h2>点击区域</h2>
        <span>NewsCategory:</span>
        <div>
          <!--写法1-->
          <!--<router-link :to="{ name:'testParam1', params:{AParam: 'a'}}" tag="el-button">a</router-link>-->
          <!--<router-link :to="{ name:'testParam1', params:{AParam: 'b'}}" tag="el-button">b</router-link>-->
          <!--<router-link :to="{ name:'testParam1', params:{AParam: 'c'}}" tag="el-button">c</router-link>-->
          <!--写法2-->
          <!--<el-button @click="changeCate(a)">a类新闻</el-button>-->
          <!--<el-button @click="changeCate(b)">b类新闻</el-button>-->
          <!--<el-button @click="changeCate(c)">c类新闻</el-button>-->
          <!--写法3-->
          <el-button v-for="(cate,index) in cates" :key="index" @click="changeCate(cate)">{{ cate }}类新闻</el-button>
        </div>
        <span>NewsPageNum:</span><span>{{ currentPage }}</span>
        <div>
          <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          routerparams: '',
          AParams: '',
          cates: ['a','b','c'],
          cate:'',
          currentPage: 1
        }
      },
      created() {
        this.fetchParams()
      },
      methods: {
        fetchParams() {
          this.routerparams = this.$route.params
        },
        changeCate(item) {
          // 路由跳转，使用带有一个参数的路由
          this.$router.push ({ name: 'testParam1', params: { AParam: item }})
          this.cate = item
          // 点击新闻种类后将页码归为1
          this.currentPage = 1
        },
        handleCurrentChange(val) {
          // 三目运算判断新闻种类，如果没有赋值的话，则默认为a类
          this.cate = this.cate?this.cate:this.cates[0]
          // 获取页码值给currentPage参数存储
          this.currentPage = val
          // 路由跳转，使用带有两个参数的路由
          this.$router.push ({ name: 'testParam', params: { AParam: this.cate, BParam: this.currentPage }})
        }
      },
      watch: {
        '$route'(to, from) {
          // 对路由变化作出响应...
          this.fetchParams()
        }
      }
    }
</script>

<style scoped>

</style>
