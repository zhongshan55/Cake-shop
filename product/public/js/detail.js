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
      }
})
//向下滚动到某位置时显示顶部标题
     var unit_price=$("#unit_price").text();
     console.log(unit_price);
     var pound=$("pound").text();
   console.log( $(".top_pirce_p").html(`${unit_price}`));
    