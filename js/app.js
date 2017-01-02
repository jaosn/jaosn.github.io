function main(){
  setTimeout(function(){
    $("#body").css({
      "visibility":"visible",
      "overflow":"hidden"
    });
    $("#body .sidebar").addClass("active");
    animateColumn("intro");
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

  $("[data-link='email']").on("click",function(){
    var link = $(this).data("link");
    if (link == "email") {
      sendEmail();
    }
  });

  $("[data-link='email']").on("mouseenter",function(){
    $(this).addClass("active");
  }).on("mouseleave",function(){
    $(this).removeClass("active");
  });

  $(".sidebar").hover(function(){
    clearTimeout(countTime);
    console.log("in");
  },function(){
    console.log("out");
    autoClose();
  });

  $(".sidebutton").on("click",function(){
    var state = $(this).hasClass("show");
    console.log(state);
    if ( state == true) {
      openMenu();
    }else{
      closeMenu();
    }
  });

  setTimeout(function(){
    closeMenu();
  },3000)

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
var countTime;
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
    $(this).append("<span class='en_txt'>"+text[$(this).data("text")]+"</span>")
    console.log();
  });
}

function navigate(page,step){
  var pre = $("#body").attr("data-page");
  if (pre != page) {
    $("#body").attr("data-pre",pre);
    // var curIndex = pages.indexOf(page);
    // var curIndex = pages.indexOf(page);

  }
  $("#body").attr("data-page",page);
  $("#body").attr("data-step",step);
  $(".column").removeClass("active");
  animateColumn(page);
}

var pages = ["intro","education","experience","projects"];

function checkDevice(){
  var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
  var is_ie = navigator.userAgent.indexOf('MSIE') > -1;
  var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  var is_windows = navigator.userAgent.indexOf("Windows") !== -1;
  var is_mac = navigator.userAgent.indexOf("Mac") !== -1;
  var is_ipad = navigator.userAgent.indexOf("iPad") !== -1;
  var css;
  // if (is_windows) {
  //   css = ".quotations .doublequote {top:0;}"
  //   $("head").append("<style class='windows'>"+css+"</style>");
  // }

}

function sendEmail(){
  var sub = "Zhenyu's homepage";
  var body = "I saw your profile from your homepage, would linke to talk to you ..";
  window.location.href = "mailto:hanzhenyugg@gmail.com?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
}

function closeMenu() {
  $(".sidebar").addClass("close");
  $(".sidebutton").addClass("show");
  $(".page").addClass("full");
}

function openMenu() {
  $(".sidebar").removeClass("close");
  $(".sidebutton").removeClass("show");
  $(".page").removeClass("full");
}

function autoClose(){
  countTime = setTimeout(function(){
    closeMenu();
  },5000);
  return false;
}

function animateColumn(page) {
  var count = 1;
  var temp = [];
  $(".page[data-page='"+page+"'] .column").each(function(){
    temp.push($(this));
    setTimeout(function(){
      temp[count-1].addClass("active");
      count += 1;
    }, 250*count);
  })
}
