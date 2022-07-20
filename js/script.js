
 $(document).ready(function(){
   $(".menu-bar").click(function(){
     $(".topnav-main").slideToggle();
   });


   // when you click outside the side menu it will hide it 
   if(window.matchMedia("(max-width: 768px)").matches){
     $("main, footer").mouseup(function(){
     
     $(".topnav-main").slideUp();
   });
   }
   
   
 });



