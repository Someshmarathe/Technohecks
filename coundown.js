var m;
     var minutes =0;
     var second = 0;
      function start(){
         var count = 1;
         m = setInterval( function(){
            if(count < 10){
             count= "0" + count;
            }
            if (count > 100){
                count = 0;
                second++;
                if ( second < 10){
                    second ="0" + second;
                }
            }
            if(second > 60){
                 second = 0;
                 minutes++;
                 if(minutes < 10){
                    minutes = "0"+ minutes;
                 }
            }
            
            var time = minutes + " :" + second + " :" + count ;
            document.getElementById("countdown").innerHTML = time;
            count++;
        } ,9) 
     }
     function Stop(){
        clearInterval(m);
     }
     function reset(){
        clearInterval(m);
         count = 0;
         second=0;
         minutes=0;
         time = minutes + "0:" + second + "0:" + count +"0" ; 
         document.getElementById("countdown").innerHTML = time;
     }