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