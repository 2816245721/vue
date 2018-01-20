 var Home={
	 template:`<div>
     <div style="width:200px;height:200px;background:blue;">文章列表</div>
     <div style="width:200px;height:200px;background:red;float:right;margin-top:-200px;margin-right:900px;">视频列表</div>
  </div>
   `
 }
 var Menu1={
	 template:`
     <div>
     <div style="width:400px;height:100px;background:blue;">新闻条目</div>  
	 <div style="width:400px;height:100px;background:blue;">新闻条目</div>  
	 <div style="width:400px;height:100px;background:blue;">新闻条目</div>  
    </div>
  `
 }
 var Menu2={
	 template:`
      <div>
      <div style="width:400px;height:100px;background:blue;">广告栏</div>
      <div style="width:400px;height:250px;background:blue:">视频内容</div>
      </div>
    `
 }
 var routes=[
	{path:'/',component:Home},
	{path:'/menu1',component:Menu1},
	{path:'/menu2',component:Menu2}
 ]
   var router=new VueRouter({
	   routes:routes
   })
   var app = new Vue({
        el: '#app',
        data: {
            name: '',
            active: 0,
            menuList: [
                {
                    name: '首页',
                    path: '/',
                },
                {
                    name: '新闻',
                    path: 'menu1',
                },
                {
                    name: '视频',
                    path: 'menu2',
                }
            ]
        },
	    methods: {
            setMenu: function (index) {
                this.active = index;
                this.name = this.menuList[index].name;
                this.$router.push({path: this.menuList[index].path});
            }
        },
        mounted: function () {
            this.setMenu(0);
        },
       router:router
       
    });