$(function () {
    $.ajax({
        url: "header.html",
        type: "get",
        success: function (result) {
            // console.log(result)
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css"></link>`).appendTo("head")
        }
    })
})
// console.log($(".app-download"));


window.onload = function () {
    var app=document.getElementsByClassName("app-download")[0];
    console.log(app);
    var app_hide=document.getElementsByClassName("app-hidden")[0]
     app.onmouseover=function(){
        app_hide.classList.add("app-block");
    }

     app.onmouseout=function(){
       app_hide.classList.remove("app-block");
    }

    var citys=document.querySelectorAll(".header-right #gz .city>li")
        for(var city of citys){
            city.onclick=function(){
              var city=this;
              city.parentElement.previousElementSibling.innerHTML=city.innerHTML; 
            }
        }
}

