function Summation() {
    var limit = Number(document.getElementById("Summation-Limit").value)
    var sValue = Number(document.getElementById("Summation-startingValue").value)
    

    if (sValue < limit) {
        var Procedure = ""
        var Summation = 0
        for (let i = sValue; i < limit; i++) {

            Summation += (i*i)
            Procedure += "("+ i + " * " + i + ") + "
        }

        Summation += (limit*limit)
        Procedure += "("+ limit + " * " + limit + ")"

        console.log(Procedure)

        document.getElementById("Summation").value = Summation

        var xmlhttp;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.onreadystatechange=function()
        {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log("Successful Connection.")
        }
        }
      
        xmlhttp.open("POST","PHP/FileWrite.php",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("Procedure="+ encodeURIComponent(Procedure));


        writeProcedure("Summation-Procedure");
      
    } else {
        alert("Starting Value of the Summation cannot be over the limit! \nCheck console for details.")
        console.log("Limit: " + limit + "\nStarting Value: " + sValue)
    }
    
}

function Fibonacci() {

}

function Factorial() {

}

function writeProcedure(ID) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "Assets/Procedure.txt",false);
    xmlhttp.send();
    console.log(xmlhttp.response);
    document.getElementById(ID).value = xmlhttp.response;
  }