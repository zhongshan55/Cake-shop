// 轮播图js 
   var i=0;         //现在正在显示第几张图片,从0开始
   var LIWIDTH=1200;//每个li的固定高度
   var DURATION=500;//每次轮播动画持续的时间
   var LICOUNT=2;    //li的总个数
   //要移动的ul
   var ulImgs=document.getElementById("ul-imgs");
   //包含小圆点列表的ul
   var ulIdxs=document.getElementById("ul-idxs");
   var lis=ulIdxs.children;
   //从当前位置移动到任意一个范围内的位置
   function moveTo(to){
       //如果用户没有传入要跳入到第几张图,就默认调到当前图片的下一张图
       if(to==undefined){
           to=i+1;
       }
       if(i==0){//如果滚动从头开始,在重新加上transition   
         if(to>i){  //如果要看当前位置右边的图片,是不会出问题的
         ulImgs.className="tansition";
         }else{//只有i==0在开头,且还要看左边图时,才会出现问题
         //为了避免用户再次看到偷梁换柱的此效果,先把transition class去掉
          ulImgs.className="";
         //讲ulImgs拉到最左侧
         ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
         //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
         setTimeout(function(){
             moveTo(LICOUNT-1);
         },100)
          return;
         }   
       }
       i=to;//先将表示第几张图片的变量i变为目标位置
       //在用i计算ulImgs的marginLeft距离
       ulImgs.style.marginLeft=-i*LIWIDTH+"px";
       //先删除所有小圆点的class
       for(var li of lis){
           li.className="";
       }
       if(i==LICOUNT){
           i=0;
           //当transition动画播完后,才
           setTimeout(function(){
             ulImgs.className="";//清除transition属性
             ulImgs.style.marginLeft=0;//将ulImgs拉回0位置
           },DURATION)
       }
       //再给当前位置的小圆点添加calss.active
       lis[i].className="active";
   }
//    左右切换按钮
   var btnLeft=document.getElementById("btn-left");
   var btnRight=document.getElementById("btn-right");
   //用开关控制,上次动画没有播放完,下次动画不能开始
   var canClick=true;
   btnRight.onclick=function(){
       //调用两个按钮公共移动方法,参数1表示移动i+1的位置,相当于左移一个
       move(1)
   }
     //两个按钮公共的移动函数,n传入1时,参数1表示移动到i+1的位置,左移.n传入-1时,移动到i-1位置,右移
     function move(n){
         if(canClick){//只有可单击时
         moveTo(i+n);//才调用真正移动ul的方法
         canClick=false;//马上把开关关上,禁止再次点击
         //只有本地transition动画播放完,才能自动打开开关,点击按钮才有反应.
         setTimeout(function(){
             canClick=true;
         },DURATION+100);
         }
     }
     btnLeft.onclick=function(){
         move(-1);
     } 
  //每次轮播之间间隔3秒
  var interval=3000;
  var timer=setInterval(function(){
      moveTo()
  },3000);
  var carousel=document.getElementById("carousel");
  carousel.onmouseover=function(){
      clearInterval(timer);
  }
  carousel.onmouseout=function(){
      timer=setInterval(function(){
          moveTo();
      },3000)
  }
  var ulIdxs=document.getElementById("ul-idxs");
  var canClick=true;
  ulIdxs.onclick=function(e){
    if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
            if(li.className!=="active"){
                for(var i=0; i<lis.length;i++){
                    if(lis[i]==li){
                        break;
                    }
                }
                moveTo(i);
                setTimeout(function(){
                    canClick=true;
            },DURATION);
        }
      } 
    }
  }

  //加入购物车
  var carts=document.querySelectorAll(".modulelist-car")
  console.log(carts);
  var layer=document.querySelector(".layer-shade");
  for(var cart of carts){
      
   cart.onclick=function(){
       var cart=this;
    var buy_in=cart.parentElement.nextElementSibling;
    console.log(buy_in);
    buy_in.classList.add("block");
    layer.classList.add("block");

   layer.onclick=function(){
        buy_in.classList.remove("block");
        layer.classList.remove("block");
   }

}
}
 
var btn_bangs=document.querySelectorAll(".module-cakelist .live_buy ul>li")
var btn_is=document.querySelectorAll(".module-cakelist .live_buy ul>li>i")

   for(var btn_bang of btn_bangs){
       btn_bang.onclick=function(){
           var btn_bang=this;
        //    console.log(btn_bang)
        for(var btn_i of btn_is){
            btn_i.className="";
        }     
     btn_bang.firstElementChild.classList.add("active");
       }
   } 
   //加入购物车成功
   var cart_btns=document.querySelectorAll(".live_buy .shopping_cart")
   console.log(cart_btns)
   for(var cart_btn of cart_btns){
       cart_btn.onclick=function(){
           var cart_btn=this;
           var  buy_in=cart_btn.parentElement.parentElement;
               console.log(buy_in);
              buy_in.classList.remove("block");
              buy_in.nextElementSibling.classList.add("block");
              layer.classList.remove("block");
       setTimeout(function(){
        buy_in.nextElementSibling.classList.remove("block");
       },3000)
       }
   }

  

