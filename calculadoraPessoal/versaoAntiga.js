

const numero1 = document.getElementById('btnNum1')
const numero2 = document.getElementById('btnNum2')
const numero3 = document.getElementById('btnNum3')
const numero4 = document.getElementById('btnNum4')
const numero5 = document.getElementById('btnNum5')
const numero6 = document.getElementById('btnNum6')
const numero7 = document.getElementById('btnNum7')
const numero8 = document.getElementById('btnNum8')
const numero9 = document.getElementById('btnNum9')
const numero0 = document.getElementById('btnNum0')
const buttonA = document.getElementById("btnNumA");
const buttonB = document.getElementById("btnNumB");
const buttonC = document.getElementById("btnNumC");
const buttonD = document.getElementById("btnNumD");
const buttonE = document.getElementById("btnNumE");
const buttonF = document.getElementById("btnNumF");


const numero01 = document.getElementById('btnNum1.2')
const numero02 = document.getElementById('btnNum2.2')
const numero03 = document.getElementById('btnNum3.2')
const numero04 = document.getElementById('btnNum4.2')
const numero05 = document.getElementById('btnNum5.2')
const numero06 = document.getElementById('btnNum6.2')
const numero07 = document.getElementById('btnNum7.2')
const numero08 = document.getElementById('btnNum8.2')
const numero09 = document.getElementById('btnNum9.2')
const numero00 = document.getElementById('btnNum0.2')
const buttonA2 = document.getElementById("btnNumA.2");
const buttonB2 = document.getElementById("btnNumB.2");
const buttonC2 = document.getElementById("btnNumC.2");
const buttonD2 = document.getElementById("btnNumD.2");
const buttonE2 = document.getElementById("btnNumE.2");
const buttonF2 = document.getElementById("btnNumF.2");


let selectUser1 = document.getElementById('sltUser1')
let selectUser2 = document.getElementById('sltUser2')
let selectResult = document.getElementById('sltResult')
let selectCalculo = document.getElementById('sltCalculo')


let inputNumber = document.getElementById('inpNumber')
let inputNumber2 = document.getElementById('inpNumber2')

document.addEventListener('DOMContentLoaded', () => {
    selectUser1.value = "1"; 
    selectUser2.value = "1"; 
    disableButtons(selectUser1.value);
    disableButtons2(selectUser2.value);
});


numero1.addEventListener('click', () => {
    inputNumber.value += numero1.value
})

numero2.addEventListener('click', () => {
    inputNumber.value += numero2.value
})

numero3.addEventListener('click', () => {
    inputNumber.value += numero3.value
})

numero4.addEventListener('click', () => {
    inputNumber.value += numero4.value
})

numero5.addEventListener('click', () => {
    inputNumber.value += numero5.value
})

numero6.addEventListener('click', () => {
    inputNumber.value += numero6.value
})

numero7.addEventListener('click', () => {
    inputNumber.value += numero7.value
})

numero8.addEventListener('click', () => {
    inputNumber.value += numero8.value
})

numero9.addEventListener('click', () => {
    inputNumber.value += numero9.value
})

numero0.addEventListener('click', () => {
    inputNumber.value += numero0.value
})
// Botões letras
buttonA.addEventListener('click', () => {
    inputNumber.value += buttonA2.value;
});

buttonB.addEventListener('click', () => {
    inputNumber.value += buttonB2.value;
});

buttonC.addEventListener('click', () => {
    inputNumber.value += buttonC2.value;
});

buttonD.addEventListener('click', () => {
    inputNumber.value += buttonD2.value;
});

buttonE.addEventListener('click', () => {
    inputNumber.value += buttonE2.value;
});

buttonF.addEventListener('click', () => {
    inputNumber.value += buttonF2.value;
});

// Botões segundo container
numero01.addEventListener('click', () => {
    inputNumber2.value += numero01.value
})

numero02.addEventListener('click', () => {
    inputNumber2.value += numero02.value
})

numero03.addEventListener('click', () => {
    inputNumber2.value += numero03.value
})

numero04.addEventListener('click', () => {
    inputNumber2.value += numero04.value
})

numero05.addEventListener('click', () => {
    inputNumber2.value += numero05.value
})

numero06.addEventListener('click', () => {
    inputNumber2.value += numero06.value
})

numero07.addEventListener('click', () => {
    inputNumber2.value += numero07.value
})

numero08.addEventListener('click', () => {
    inputNumber2.value += numero08.value
})

numero09.addEventListener('click', () => {
    inputNumber2.value += numero09.value
})

numero00.addEventListener('click', () => {
    inputNumber2.value += numero00.value
})
// Botões de letras
buttonA2.addEventListener('click', () => {
    inputNumber2.value += buttonA2.value;
});

buttonB2.addEventListener('click', () => {
    inputNumber2.value += buttonB2.value;
});

buttonC2.addEventListener('click', () => {
    inputNumber2.value += buttonC2.value;
});

buttonD2.addEventListener('click', () => {
    inputNumber2.value += buttonD2.value;
});

buttonE2.addEventListener('click', () => {
    inputNumber2.value += buttonE2.value;
});

buttonF2.addEventListener('click', () => {
    inputNumber2.value += buttonF2.value;
});


function disableButtons(value) {
    numero1.disabled = true
    numero2.disabled = true;
    numero3.disabled = true;
    numero4.disabled = true;
    numero5.disabled = true;
    numero6.disabled = true;
    numero7.disabled = true;
    numero8.disabled = true;
    numero9.disabled = true;
    numero0.disabled = true
    buttonA.disabled = true
    buttonB.disabled = true
    buttonC.disabled = true
    buttonD.disabled = true
    buttonE.disabled = true
    buttonF.disabled = true
    if (value === "2") {
        numero0.disabled = false
        numero1.disabled = false
    }
     if (value === "8") {
        numero0.disabled = false
        numero1.disabled = false
        numero2.disabled = false;
        numero3.disabled = false;
        numero4.disabled = false;
        numero5.disabled = false;
        numero6.disabled = false;
        numero7.disabled = false;
        
    }
    if (value === "10") {
        numero1.disabled = false
        numero2.disabled = false;
        numero3.disabled = false;
        numero4.disabled = false;
        numero5.disabled = false;
        numero6.disabled = false;
        numero7.disabled = false;
        numero8.disabled = false;
        numero9.disabled = false;
        numero0.disabled = false
    }

    if (value === "16"){
        numero1.disabled = false
        numero2.disabled = false;
        numero3.disabled = false;
        numero4.disabled = false;
        numero5.disabled = false;
        numero6.disabled = false;
        numero7.disabled = false;
        numero8.disabled = false;
        numero9.disabled = false;
        numero0.disabled = false
        buttonA.disabled = false
        buttonB.disabled = false
        buttonC.disabled = false
        buttonD.disabled = false
        buttonE.disabled = false
        buttonF.disabled = false
    }
}

function disableButtons2(value) {
    numero01.disabled = true;
    numero02.disabled = true;
    numero03.disabled = true;
    numero04.disabled = true;
    numero05.disabled = true;
    numero06.disabled = true;
    numero07.disabled = true;
    numero08.disabled = true;
    numero09.disabled = true;
    numero00.disabled = true;
    buttonA2.disabled = true;
    buttonB2.disabled = true;
    buttonC2.disabled = true;
    buttonD2.disabled = true;
    buttonE2.disabled = true;
    buttonF2.disabled = true;

    if (value === "2") {
        numero00.disabled = false;
        numero01.disabled = false;
    }
    if (value === "8") {
        numero00.disabled = false;
        numero01.disabled = false;
        numero02.disabled = false;
        numero03.disabled = false;
        numero04.disabled = false;
        numero05.disabled = false;
        numero06.disabled = false;
        numero07.disabled = false;
    }
    if (value === "10") {
        numero01.disabled = false;
        numero02.disabled = false;
        numero03.disabled = false;
        numero04.disabled = false;
        numero05.disabled = false;
        numero06.disabled = false;
        numero07.disabled = false;
        numero08.disabled = false;
        numero09.disabled = false;
        numero00.disabled = false;
    }

    if (value === "16") {
        numero01.disabled = false;
        numero02.disabled = false;
        numero03.disabled = false;
        numero04.disabled = false;
        numero05.disabled = false;
        numero06.disabled = false;
        numero07.disabled = false;
        numero08.disabled = false;
        numero09.disabled = false;
        numero00.disabled = false;
        buttonA2.disabled = false;
        buttonB2.disabled = false;
        buttonC2.disabled = false;
        buttonD2.disabled = false;
        buttonE2.disabled = false;
        buttonF2.disabled = false;
    }
}

selectUser1.addEventListener('change', () => {
    disableButtons(selectUser1.value);
});

selectUser2.addEventListener('change', () => {
    disableButtons2(selectUser2.value);
});

inputNumber.addEventListener('keydown', (event) => {
    event.preventDefault();
});

inputNumber2.addEventListener('keydown', (event) =>{
    event.preventDefault(); 
});

const clearButton = document.getElementById('clearButton');
const clearButton2 = document.getElementById('clearButton2');

clearButton.addEventListener('click', () => {
    inputNumber.value = inputNumber.value.slice(0, -1);
});

clearButton2.addEventListener('click', () => {
    inputNumber2.value = inputNumber2.value.slice(0, -1);
});


function converter(){ 
    // var binario1 = number.toString(2)
    // var binario2 = number2.toString(2)
    // var octal1 = number.toString(8)
    // var octal2 = number2.toString(8)
    // var hexa1 = number.toString(16)
    // var hexa2 = number2.toString(16)

    if(selectResult.value === "2" && selectCalculo.value === "soma"){
        somar()
    }else if(selectResult.value === "8" && selectCalculo.value === "soma"){
        somar()
    }else if(selectResult.value === "10" && selectCalculo.value === "soma"){
        somar()
    }else if(selectResult.value === "16" && selectCalculo.value === "soma"){
        somar()
    }else if (selectResult.value === "2" && selectCalculo.value === "subtracao"){
        subtrair()
    }else if(selectResult.value === "8" && selectCalculo.value === "subtracao"){
        subtrair()
    }else if(selectResult.value === "10" && selectCalculo.value === "subtracao"){
        subtrair()
    }else if(selectResult.value === "16" && selectCalculo.value === "subtracao"){
        subtrair()
    }
}

let centerField = document.getElementById('centerContainer')

function somar(){

    // if(selectResult.value === "2" && selectCalculo.value === "soma"){
    //     const num1 = parseInt(inputNumber.value, 2)
    //     const num2 = parseInt(inputNumber2.value, 2)

    //     const result =  (num1 + num2 )

    //     let div = document.getElementById('resultContainer')
    //     div.className = 'resultField'
    //     let p = document.createElement('p')
    //     p.textContent = `Resultado da soma: ${result.toString(2)}`
    //     div.appendChild(p)
    //     centerField.appendChild(div)
    // }

    // if(selectResult.value === "8" && selectCalculo.value === "soma"){
    //     const num1 = parseInt(inputNumber.value, 8)
    //     const num2 = parseInt(inputNumber2.value, 8)

    //     const result =  (num1 + num2 )

    //     let div = document.getElementById('resultContainer')
    //     div.className = 'resultField'
    //     let p = document.createElement('p')
    //     p.textContent = `Resultado da soma: ${result.toString(8)}`
    //     div.appendChild(p)
    //     centerField.appendChild(div)
    // }

    const inputNum = inputNumber.value.trim(); 
    const inputNum2 = inputNumber2.value.trim();

    if(selectResult.value === "2" && selectCalculo.value === "soma"){
        let num1, num2
        // Verifica o formato do primeiro número (num1)
        if (selectUser1.value === "8") {
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = parseInt(inputNum2, 8); 
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }


        const result =  (num1 + num2 )

        let div = document.getElementById('resultContainer')
        div.className = 'resultField'
        let p = document.createElement('p')
        p.textContent = `Resultado da soma: ${result.toString(2)}`
        div.appendChild(p)
        centerField.appendChild(div)

    }
     if(selectResult.value === "8" && selectCalculo.value === "soma"){

        let num1, num2

        console.log(num1)
        if (selectUser1.value === "8") {
            console.log('valor foi convertido para decimal')
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = inputNum2
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }

        // Deveria calcular o resultado e exibir em octal
        const result = num1 + num2;
        let div = document.getElementById('resultContainer');
        div.className = 'resultField';
        let p = document.createElement('p');
        p.textContent = `Resultado da soma: ${result.toString(8)}`;
        div.appendChild(p);
        centerField.appendChild(div);
    }

    if(selectResult.value === "10" && selectCalculo.value === "soma"){

        let num1, num2

        console.log(num1)
        if (selectUser1.value === "8") {
            console.log('valor foi convertido para decimal')
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = inputNum2
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }

        // Deveria calcular o resultado e exibir em octal
        const result = num1 + num2;
        let div = document.getElementById('resultContainer');
        div.className = 'resultField';
        let p = document.createElement('p');
        p.textContent = `Resultado da soma: ${result.toString(10)}`;
        div.appendChild(p);
        centerField.appendChild(div);
    }

    if(selectResult.value === "16" && selectCalculo.value === "soma"){

        let num1, num2

        console.log(num1)
        if (selectUser1.value === "8") {
            console.log('valor foi convertido para decimal')
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = inputNum2
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }

        // Deveria calcular o resultado e exibir em octal
        const result = num1 + num2;
        let div = document.getElementById('resultContainer');
        div.className = 'resultField';
        let p = document.createElement('p');
        p.textContent = `Resultado da soma: ${result.toString(16)}`;
        div.appendChild(p);
        centerField.appendChild(div);
    }
    
}

function subtrair () {

    const inputNum = inputNumber.value.trim(); 
    const inputNum2 = inputNumber2.value.trim();

    if(selectResult.value === "2" && selectCalculo.value === "subtracao"){
        let num1, num2
        // Verifica o formato do primeiro número (num1)
        if (selectUser1.value === "8") {
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = parseInt(inputNum2, 8); 
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }


        const result =  (num1 - num2 )

        let div = document.getElementById('resultContainer')
        div.className = 'resultField'
        let p = document.createElement('p')
        p.textContent = `Resultado da subtração: ${result.toString(2)}`
        div.appendChild(p)
        centerField.appendChild(div)

    }
     if(selectResult.value === "8" && selectCalculo.value === "subtracao"){

        let num1, num2

        console.log(num1)
        if (selectUser1.value === "8") {
            console.log('valor foi convertido para decimal')
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = inputNum2
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }

        // Deveria calcular o resultado e exibir em octal
        const result = num1 - num2;
        let div = document.getElementById('resultContainer');
        div.className = 'resultField';
        let p = document.createElement('p');
        p.textContent = `Resultado da subtração: ${result.toString(8)}`;
        div.appendChild(p);
        centerField.appendChild(div);
    }

    if(selectResult.value === "10" && selectCalculo.value === "subtracao"){

        let num1, num2

        console.log(num1)
        if (selectUser1.value === "8") {
            console.log('valor foi convertido para decimal')
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = inputNum2
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }

        // Deveria calcular o resultado e exibir em octal
        const result = num1 - num2;
        let div = document.getElementById('resultContainer');
        div.className = 'resultField';
        let p = document.createElement('p');
        p.textContent = `Resultado da subtração: ${result.toString(10)}`;
        div.appendChild(p);
        centerField.appendChild(div);
    }

    if(selectResult.value === "16" && selectCalculo.value === "subtracao"){

        let num1, num2

        console.log(num1)
        if (selectUser1.value === "8") {
            console.log('valor foi convertido para decimal')
            num1 = parseInt(inputNum, 8); 
        } else if (selectUser1.value === "10") {
            num1 = parseInt(inputNum, 10);
        } else if (selectUser1.value === "16") {
            num1 = parseInt(inputNum, 16); 
        } else if (selectUser1.value === "2") {
            num1 = parseInt(inputNum, 2); 
        }

        if (selectUser2.value === "8") {
            num2 = inputNum2
        } else if (selectUser2.value === "10") {
            num2 = parseInt(inputNum2, 10);
        } else if (selectUser2.value === "16") {
            num2 = parseInt(inputNum2, 16); 
        } else if (selectUser2.value === "2") {
            num2 = parseInt(inputNum2, 2); 
        }

        // Deveria calcular o resultado e exibir em octal
        const result = num1 - num2;
        let div = document.getElementById('resultContainer');
        div.className = 'resultField';
        let p = document.createElement('p');
        p.textContent = `Resultado da subtração: ${result.toString(16)}`;
        div.appendChild(p);
        centerField.appendChild(div);
    }
}

function clean1(){
    document.getElementById('inpNumber').value = ""
}

function clean2(){
    document.getElementById('inpNumber2').value = ""
}
