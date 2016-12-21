
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

function main(){
  setTimeout(function(){
    $("#body").css("visibility","visible");
    $("#body").addClass("active");
  },500)
  fontsizeResize();
  $(window).on("resize", function(){
    setTimeout(function(){
      fontsizeResize();
    }, 10);
  });
}

window.onload = init;
function init(){
  main();

}
