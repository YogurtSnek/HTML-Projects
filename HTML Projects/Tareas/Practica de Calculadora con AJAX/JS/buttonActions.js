function Summation() {
    var limit = Number(document.getElementById("Summation-Limit").value)
    var sValue = Number(document.getElementById("Summation-startingValue").value)
    

    if (sValue < limit) {
        var Procedure = ""
        var Summation = 0
        for (let i = sValue; i < limit; i++) {

            Summation += (i*i)
            Procedure += "("+ i + " * " + i + ")\n + "
        }

        Summation += (limit*limit)
        Procedure += "("+ limit + " * " + limit + ")"

        document.getElementById("Summation").value = Summation

        saveProcedure(Procedure)

        writeProcedure("Summation-Procedure")
      
    } else {
        alert("Starting Value of the Summation cannot be over the limit! \nCheck console for details.")
        console.log("Limit: " + limit + "\nStarting Value: " + sValue)
    }
    
}

function Fibonacci() {
    var Procedure = ""
    var n1 = 0 
    var temp = 0
    var n2 = 1

    for (var i = 0;i < 18; i++) {
        temp = n1 + n2
        Procedure += n1 + " + " + n2 + " = " + temp + "\n"
        n1 = n2
        n2 = temp
    }

    document.getElementById("Fibonacci-Sequence").value = temp

    saveProcedure(Procedure)

    writeProcedure("Fibonacci-Procedure")
}

function Factorial() {
    var num = document.getElementById("Factorial-ToDisplay").value

    if (num > 0) {
        var factorial = 1;
        var Procedure = ""

        for (let i = num; i > 1; i--) {
            factorial *= i;
            Procedure += i + " * "
            if (i%5 == 0) {
                Procedure += "\n"
            }
        }

        factorial *= 1;
        Procedure += 1 + " = " + factorial

        document.getElementById("Factorial").value = factorial   

        saveProcedure(Procedure)

        writeProcedure("Factorial-Procedure")


    } else if (num == 0) {
        document.getElementById("Factorial").value = "1"
        document.getElementById("Factorial-Procedure").value = "0! = 1"
    } else {
        alert("The number cannot be negative nor can it have symbols.")
    }

}

function saveProcedure(Procedure) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log("Successful Connection.")
        }
    }
    
    xmlhttp.open("POST","PHP/FileWrite.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("Procedure="+ encodeURIComponent(Procedure));
}


function writeProcedure(ID) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "Assets/Procedure.txt",false);
    xmlhttp.send();
    console.log(xmlhttp.response);
    document.getElementById(ID).value = xmlhttp.response;
}

function factorialCalc(num) {
    if(num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorialCalc(num - 1);
      }
}