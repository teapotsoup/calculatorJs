const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const sqrt = document.getElementById("sqrt");

plus.addEventListener('click', () => {
    document.getElementById("result").innerText = parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value);
});

minus.addEventListener('click', () => {
    document.getElementById("result").innerText = parseInt(document.getElementById("num1").value) - parseInt(document.getElementById("num2").value);
});

sqrt.addEventListener('click', () => {
    document.getElementById("result").innerText = parseInt(document.getElementById("num1").value) ** parseInt(document.getElementById("num2").value);
});




const plusMinus = document.getElementById("plusMinus");

plusMinus.addEventListener('click', () => {
    let result = 0;
    let arr;
    let numArr;
    let operatorArr = new Array();
    arr = document.getElementById("num3").value.split('');
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === '-' || arr[i] === '+') {
            operatorArr.push(arr[i]);
        }
    }
    numArr = document.getElementById("num3").value.split(/\+|\-/);
    if (operatorArr[0] === '-') {
        result = parseInt(numArr[0]) - parseInt(numArr[1]);
    }
    else if (operatorArr[0] === '+') {
        result = parseInt(numArr[0]) + parseInt(numArr[1]);
    }
    console.log(result);
    for (let i = 1; i < operatorArr.length; ++i) {
        if (operatorArr[i] === '-') {
            result = result - parseInt(numArr[i + 1]);
        }
        else if (operatorArr[i] === '+') {
            result = result + parseInt(numArr[i + 1]);
        }
    }
    document.getElementById("result1").innerText = result;

});
