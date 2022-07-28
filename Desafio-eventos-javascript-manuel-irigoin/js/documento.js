document.addEventListener('keydown', colorBlack);
         function colorBlack(e){
            if(e.keyCode == '37'){
               document.getElementById('cuadrado').style.background = '#f4a130';
            }
         }
         window.addEventListener('keydown', colorGreen);
         function colorGreen(e){
            if(e.keyCode == '39'){
                document.getElementById('cuadrado').style.background = '#f00ea2';
            }
         }