window.onload = function () {
  var left_control = document.getElementById("left");
  var right_control = document.getElementById("right");
  var now_slide=0

  left_control.onclick = function () {
    var slidelist = document.getElementsByClassName("slidelist");
    var targets = slidelist[0].getElementsByTagName("li");
    if(now_slide == 0) now_slide = targets.length-1;
    else now_slide--;
    
    for(var i=0;i<targets.length;i++){
      targets[i].style["transform"] = "translateX("+(-100*now_slide) +"%)"
    }
  }

  right_control.onclick = function(){
    var slidelist = document.getElementsByClassName("slidelist");
    var targets = slidelist[0].getElementsByTagName("li");
    if(now_slide == targets.length-1) now_slide = 0;
    else now_slide++;
    
    for(var i=0;i<targets.length;i++){
      targets[i].style["transform"] = "translateX("+(-100*now_slide) +"%)"
    }
    
    var targets_span = targets[now_slide].getElementsByTagName("span");
    targets_span[0].style["fontSize"] = "0px";
    for(var i=5; i < 80; i++){
      setTimeout(() => {
        targets_span[0].style["fontSize"] = i+"px";
      }, i*100);
      
    }
  }

};