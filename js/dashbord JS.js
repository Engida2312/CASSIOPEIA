$(document).ready(function(){

    var heightEvaluated = 0;
    function calcHeight(){
        heightEvaluated = $(window).height() - $(".navigation").outerHeight();
    $(".bodyContent, .sidebar").height(heightEvaluated);
    }
    
  //we can run it on page load 
  calcHeight();
  //we can run it on page resize
    $(window).resize(function(){
      calcHeight();
    });

  // $("#.content a").click(function(){
  //   $("#sideContent a").css("background-color", "yellow");
  // });

});

 var colorChanger = document.getElementById("sideContent");
  colorChanger.addEventListener("click", backgroundChanger);
   function backgroundChanger(e){
     if(e.target.nodeName == "A"){
       for(var i = 0; i< e.target.parentNode.children.length; i++){
         e.target.parentNode.children[i].classList.remove("active1");
            e.target.classList.add("active1");
        } 
    }
  }
