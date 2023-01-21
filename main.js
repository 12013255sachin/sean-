let btn = document.getElementById('btn');
let output = document.getElementById('outputbox');

 let number = [Math.floor(Math.random() *100)]
 btn.addEventListener('click',function(){
    let input = document.getElementById('inputbox').value;
    if(input == number){
        output.innerHTML = 'you guessed it right'
    }
    else if(input < number){
        output.innerHTML = "guessed too low"
    };
    if(input > number){
        output.innerHTML = 'guessed too high'
    }
 });