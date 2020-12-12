window.onload = function () {
  var left_control = document.getElementById("left");
  var right_control = document.getElementById("right");
  var now_slide=0

  left_control.onclick = function(){
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
  }

  var body = document.getElementById("fullCoverSection");
  body.addEventListener("mousewheel", function(delta){
    if(delta.wheelDelta >= 0){
      var slidelist = document.getElementsByClassName("slidelist");
      var targets = slidelist[0].getElementsByTagName("li");
      if(now_slide == 0) now_slide = targets.length-1;
      else now_slide--;
      
      for(var i=0;i<targets.length;i++){
        targets[i].style["transform"] = "translateX("+(-100*now_slide) +"%)" 
      }
    }else{
      var slidelist = document.getElementsByClassName("slidelist");
      var targets = slidelist[0].getElementsByTagName("li");
      if(now_slide == targets.length-1) now_slide = 0;
      else now_slide++;
      
      for(var i=0;i<targets.length;i++){
        targets[i].style["transform"] = "translateX("+(-100*now_slide) +"%)"
      }
    }
  })

  body.onclick = function(a){
    console.log(`${a.clientX} ${window.innerWidth}`)
    if(a.clientX < innerWidth/2){
      var slidelist = document.getElementsByClassName("slidelist");
      var targets = slidelist[0].getElementsByTagName("li");
      if(now_slide == 0) now_slide = targets.length-1;
      else now_slide--;
      
      for(var i=0;i<targets.length;i++){
        targets[i].style["transform"] = "translateX("+(-100*now_slide) +"%)" 
      }
    }else{
      var slidelist = document.getElementsByClassName("slidelist");
      var targets = slidelist[0].getElementsByTagName("li");
      if(now_slide == targets.length-1) now_slide = 0;
      else now_slide++;
      
      for(var i=0;i<targets.length;i++){
        targets[i].style["transform"] = "translateX("+(-100*now_slide) +"%)"
      }
    }
  }
};
