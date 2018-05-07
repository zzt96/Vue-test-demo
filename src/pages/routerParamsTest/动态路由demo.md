# 动态路由实验，使用router.params传递两个以上的参数
点击更改路由参数，然后页面从路由参数拿值进行渲染
- 实现功能 1 ：保存两个参数：页码X以及新闻种类Y
- 实现功能 2 ：点击页码时路由变化为list-Y-X
- 实现功能 3 ：点击种类时路由变化为list-Y
- 实现功能 4 ：点击种类再点击页码时路由变化为list-Y-X
- 实现功能 5 ：点击页码再点击种类时，页码重新赋值为1
- 实现功能 6 ：当点进文章详情后退回上个页面时保存两个参数：页码以及新闻种类,即页面拿到X和Y再进行渲染
## 启动
下载项目npm install，npm run dev之后
更改地址，后面+/testParam/
## 路由配置
在这里可以看出，可以使用/list-:AParam-:BParam'的形式配置路由
当AParam=1，BParam=2的时候，对应的路由是/list-1-2
```
    {
      path: '/testParam/list-:AParam-:BParam',
      name: 'testParam',
      component: testParam
    }, {
      path: '/testParam/list-:AParam',
      name: 'testParam1',
      component: testParam
    }, {
      path: '/testParam/',
      name: 'testParam2',
      component: testParam
    }
```

## 实现方法
- fetchParams()获取路由参数
- changeCate(item)改变新闻种类
- handleCurrentChange(val)页码点击事件
## 知识点
- router.push的带参使用
- router.params的理解
