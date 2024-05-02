
function getRandomPin() {
   const randomPin = Math.round(Math.random()*10000);
   const randomPinString = randomPin + '';
   if(randomPinString.length == 4){
     return randomPinString;
   }
   else{
      return getRandomPin();
   }

}

// Math.round(Math.random()*10000)
document.getElementById('generate-pin').addEventListener('click',function(){
    document.getElementById('display-pin').value = getRandomPin();

})

document.getElementById('calculator').addEventListener('click',function(event){
   const number = event.target.innerText;;
   const typedNumberField = document.getElementById('typed-numbers');
   const typeNumberValue = typedNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = typeNumberValue.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
         
        const newTypeNumber = typeNumberValue + number;
        typedNumberField.value = newTypeNumber;

    }


})

document.getElementById('verify-pin').addEventListener('click',function(){


     const genertaedPin = document.getElementById('display-pin').value;
     console.log(genertaedPin);
     const typedPin = document.getElementById('typed-numbers').value;
     console.log(typedPin);

     const successText = document.getElementById('pin-success');
     const errorText = document.getElementById('pin-failure')

     if(genertaedPin === typedPin){
      successText.style.display = 'block';
      errorText.style.display = 'none';
     }

     else{
       successText.style.display = 'none';
      errorText.style.display = 'block';
     }
})
