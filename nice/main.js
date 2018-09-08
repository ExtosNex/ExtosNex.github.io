$(document).ready(function() {
      $("#poke1").mouseenter(function(){
        window.setTimeout(p1,175);
        function p1(){
        $("#poke1").hide();
        $("2").show();
        $("3").hide();
        }  
      });  
      $("#poke2").mouseenter(function(){
        window.setTimeout(p2,175);
        function p2(){
        $("#poke1").show();
        $("#poke2").hide();
        $("#poke3").show();
        };
      });
      $("#poke3").mouseenter(function(){
        window.setTimeout(p3,175);
        function p3(){
        $("#poke1").show();
        $("#poke2").show();
        $("#poke3").hide();
       };
      });
    });
      
    $(document).ready(function(){
      $("#kachow").mouseenter(function(){
        $("#mcqween").show();
        window.setTimeout(mcqween,2000);
        function mcqween(){
        $("#mcqween").hide();
        };
      });
    });