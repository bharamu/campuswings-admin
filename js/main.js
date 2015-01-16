function fitBanner(id,offset){
  var originalHeight = $(id).height();
  console.log("width of "+id+": "+originalHeight);
  var windowHeight = $(window).height();
  var headerHeight = $("header").height();
  // alert($(".center-triangle-div").height());
  var triangleHeight = 30; //height of the triangle

  windowHeight = windowHeight - offset;

  if(windowHeight > originalHeight){
    $(id).css({ "min-height": windowHeight+"px" });
  }
  // $(window).resize(function() {
  //   hi = $(window).height();
  //   $(id).css({ height: hi+"px" });
  // });
}

fitBanner(".better_header",0);