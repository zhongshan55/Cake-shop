//鼠标切换图片
var  $sm_imgs=$(".top-thumb>img");
$lg_img=$(".top-picture>img");
$sm_imgs.mouseover(function(){
    $img=$(this);
  $lg_img.prop("src",$img.prop("src")) ;
})
//选择尺寸
var $lis=$(".options-right .size ul>li");
$lis.click(function(){
    var $li=$(this);
    $li.addClass("active")
    .children().addClass("active");
    $li.siblings().removeClass("active")
    .children().removeClass("active")
      var bang=parseInt($li.text()).toFixed(1);
      if(bang!="NaN"){
     $("span.unit_price").html(`￥${Number(bang*198).toFixed(2)}`);
      $("span.pound").html(`/${bang}磅`)
  //顶部显示所选磅数与中间内容区域一致
   $(".top_pirce_p").html(`${ $("span.unit_price").html()+ $("span.pound").html()}`);
      }
})
$(document).scroll(function(){
  var h=$(document).scrollTop();
  // console.log(h);
  if(h>1021){
    $("header").css("display","none");
    $(".suspension-box").css("display","block")
  }
  if(h<940){ 
    $("header").css("display","block");
    $(".suspension-box").css("display","none")
  }
})
$(".top_price_p").mouseenter(function(){
  console.log(1221)
   $(".options-right.top").css("display","block")
})
$(".top_price_p").mouseleave(function(){
  console.log(1200)
   $(".options-right.top").css("display","none")
})
    
   
    