function clearScreen(){
    var clear = document.getElementById("clear")
    document.getElementById("result").value = "";
    }

function display(value){
    document.getElementById("result").value += value;
    }

function equal(){
    equ = document.getElementById("equal").value
      }

function Back(){
    var back = document.getElementById('result');
    back.value = back.value.slice(0,-1);
     }

function calculate(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
    }
   
window.addEventListener('keypress',(event)=>{
    operator = ['-','+','/','*']
    key = event.key
    code = event.code
        if (code.includes('Digit') || operator.includes(key) ){
            parent = document.getElementById("result")
            parent.innerText = parent.innerText + key
            console.log(event)
        }
        else{
            alert("Only numbers are allowed")
        }
    }
)
