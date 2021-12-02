
    var enterButton = document.getElementById('enterButton');
    var output = document.getElementById('outputTxt');
    var remiaing=document.getElementById("numbr");
    var randomNumber = Math.floor(Math.random()*100)+1;
    var nbr=10;
    
    function random(){
      var input = document.getElementById('userInput').value;
      if(input == randomNumber){
        if(nbr==1 || nbr==2 || nbr==3)
        {
          output.innerHTML="c'ect vrai et tu es très intelligent "+ ", "+ " le numéro est "+ randomNumber;
           
   
        }
        else{
          output.innerHTML="c'ect vrai et tu es très intelligent"+ ", "+ " le numéro est  "+ randomNumber;
         
   
        }
       
        
      }
      else if(input>randomNumber && input<100){
        output.innerHTML="trés grand";
        nbr--;
        remiaing.innerHTML=nbr;
      }
      else if(input<randomNumber && input>1){
        output.innerHTML="trop petit";
        nbr--;
        remiaing.innerHTML=nbr;
      }
      else if(input<1){
        output.innerHTML="ce nombre est compris entre 1 ET 100";
      }
      else if(isNaN(input)){
        output.innerHTML="ce n'est pas un nombre";
      }
      else{
        output.innerHTML="ce nombre est compris entre 1 ET 100";
      }
      if(nbr==0){
        output.innerHTML="ooups!!! jeu terminé";
        alert("ooups!!! jeu terminé ")
        document.location.reload();
        nbr=10;
        remiaing.innerHTML=nbr;
      }
     

    }
 
    btn.addEventListener('click', random);
   
    
