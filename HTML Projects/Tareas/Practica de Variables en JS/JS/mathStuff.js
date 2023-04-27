var x, y, z;
x = 30;
y = "50";
z = true;

document.writeln("<p>Primitive Data Types"
+"<br>"
+"Variable X is: "+x+" and it's type is: " + typeof(x)
+"<br>Variable Y is: "+y+" and it's type is: " + typeof(y)
+"<br>Variable Z is: "+z+" and it's type is: " + typeof(z)
+"</p>");


document.writeln("<p>" 
+"<br><br>"
+"X + Y = " + (x+y)
+"<br>Y + Z = " + (y+z)
+"<br>Z + X = " + (z+x)
+"<br><br>As you can notice, any variable type can be used "
+"for summing though the results will be largely inadequate if used improperly"
+"<br>Summing with a string will concatenate the values <br>Summing with a boolean will add 1 or 0"
+" depending if the boolean value is true or false <br>Lastly, summing with numbers will simply add the values"
+"</p>");


document.writeln("<p><br>Example with Summing"
+"<br>X + X = " + (x+x)
+"<br>Y + Y = " + (y+y)
+"<br>Z + Z = " + (z+z)
+"</p>");

document.writeln("<br>You may notice that with Y and Z, even though it is a string and a boolean it is being used as a number from here on");

document.writeln("<p><br>Example with Substraction"
+"<br>X - X = " + (x-x)
+"<br>Y - Y = " + (y-y)
+"<br>Z - Z = " + (z-z)
+"</p>");

document.writeln("<p><br>Example with Multiplying"
+"<br>X * X = " + (x*x)
+"<br>Y * Y = " + (y*y)
+"<br>Z * Z = " + (z*z)
+"</p>");

document.writeln("<p><br>Example with Dividing"
+"<br>X / X = " + (x/x)
+"<br>Y / Y = " + (y/y)
+"<br>Z / Z = " + (z/z)
+"</p>");

var firstArr = [5, 4, 3, 2, 1];
var secndArr = [6, 7, 3, 2, 1];

document.writeln("<br><br>Now that we've showcased variables, let's talk about arrays.");
document.writeln("<br>First Array = " + firstArr
+ "<br>Second Array = " + secndArr);

document.writeln("<br><br>We can also do various commands with the arrays.");
firstArr.sort();
document.writeln("<br>First Array after Sorting: " + firstArr);
firstArr.reverse();
document.writeln("<br>First Array after Reverse: " + firstArr);
firstArr.push(500);
document.writeln("<br>First Array after Pushing the number 500: " + firstArr);
firstArr.pop();
document.writeln("<br>First Array after Popping the number 500: " + firstArr + "   <i>Note: We can pop whatever value in the array into another variable.</i>");

document.writeln("<br><br>We can also print out element by element of the array: <br><u>Second Array element by element with for each</u><br>");
var txt = "";
secndArr.forEach(forEachFunc);
document.writeln(txt);

function forEachFunc (value, index, array) {
    txt += value + "<br>";
}

document.writeln("<br><u>Second Array element by element with map</u><br>");
var numbers = secndArr.map(mapFunc)
document.write(numbers + "<br>")

function mapFunc (value, index, array) {
    return value 
}

document.writeln("<br><u>Second Array element by element with flat map</u><br>")
var numbers2 = secndArr.flatMap((x) => x);
document.writeln(numbers2+"<br>")

document.writeln("<br><u>Second Array element by element but filtered with only numbers less than 5</u><br>")
var filteredNums = secndArr.filter(filterFunc)
document.writeln(filteredNums)

function filterFunc (value, index, array) {
    return value < 5
}
