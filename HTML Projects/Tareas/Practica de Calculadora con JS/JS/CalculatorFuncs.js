function sum() {
    result = Number(document.getElementById("value1").value) + Number(document.getElementById("value2").value)
    document.getElementById("result").value = result
    historyWrite(1,result)
}

function substract() {
    result = Number(document.getElementById("value1").value) - Number(document.getElementById("value2").value)
    document.getElementById("result").value = result
    historyWrite(2,result)
}

function multiply() {
    result = Number(document.getElementById("value1").value) * Number(document.getElementById("value2").value)
    document.getElementById("result").value = result
    historyWrite(3,result)
}

function divide() {
    if (Number(document.getElementById("value2").value != 0)) {
        result = Number(document.getElementById("value1").value) / Number(document.getElementById("value2").value)
        document.getElementById("result").value = result
        historyWrite(4,result)
        
    } else {
        document.getElementById("result").value = "Can't divide by 0!"
    }

}

function historyWrite(x, result) {
    switch (x) {
        case 1:
            document.getElementById("history").value += document.getElementById("value1").value + " + " + document.getElementById("value2").value + " = " + result + "\n"
            break
        case 2:
            document.getElementById("history").value += document.getElementById("value1").value + " - " + document.getElementById("value2").value + " = " + result + "\n"
            break
        case 3:
            document.getElementById("history").value += document.getElementById("value1").value + " * " + document.getElementById("value2").value + " = " + result + "\n"
            break
        case 4:
            document.getElementById("history").value += document.getElementById("value1").value + " / " + document.getElementById("value2").value + " = " + result + "\n"
            break
    }

    OnInput()

}

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false)


}

function OnInput() {
  this.style.height = 0
  this.style.height = (this.scrollHeight) + "px" 
}