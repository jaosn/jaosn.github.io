function main(){
  setTimeout(function(){
    $("#body").css("visibility","visible");
    $("#body").addClass("active");
  },500)
  loadText();
  fontsizeResize();
  $(window).on("resize", function(){
    setTimeout(function(){
      fontsizeResize();
    }, 10);
  });
  $("[data-project]").on("click",function(){
    console.log("clicked");
    if ($(this).parent().hasClass("active")) {
      $(this).parent().addClass("deactive");
      setTimeout(function(){
        $("[data-project]").parent().removeClass("active").removeClass("deactive");
      },500);
    }else{
      $(this).parent().addClass("active");
    }
  });

  $("[data-button]:not([data-button='projects'])").on("click",function(){
    var page = $(this).data("button");
    console.log(page);
    navigate(page,"");
  });

  $(".button[data-button='projects'] .accordions").on("click",function(){
    var step = $(this).data("step");
    console.log(step);
    navigate("projects",step);
  });
}

window.onload = init;
function init(){
  $(document).ready(function () {
    main();
  });
}


var bw;
var bh;
var fontSize;
function fontsizeResize() {
  bw = $("#body").width();
  bh = $("#body").height();
  var ws = bw/1024;
  var hs = bh/768;
  var ss = ws < hs ? ws : hs;
  var txtPx = Math.round(ss * 100 / 5);
  fontSize = txtPx;
  console.log("change?");
  $("html").css("font-size",txtPx+"px");
}

function loadText(){
  $("[data-text]").each(function(){
    var key = $(this).data("text");
    $(this).append("<span class='en_txt'>"+text[$(this).data("text")]+"<span>")
    console.log();
  });
}

function navigate(page,step){
  $("#body").data("page",page);
  $("#body").data("step",step);
}
