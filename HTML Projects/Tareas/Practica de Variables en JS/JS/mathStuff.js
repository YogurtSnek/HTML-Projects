var x, y, z;
x = 30
y = "50"
z = true

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
+"<br>Summing with a string witll concatenate the values <br>Summing with a boolean will add 1 or 0"
+"depending if the boolean value is true or false <br>Lastly, summing with numbers will simply add the values"
+"</p>");


document.writeln("<p><br>Example with Summing"
+"<br>X + X = " + (x+x)
+"<br>Y + Y = " + (y+y)
+"<br>Z + Z = " + (z+z)
+"</p>")

document.writeln("<br>You may notice that with Y and Z, even though it is a string and a boolean it is being used as a number from here on");

document.writeln("<p><br>Example with Substraction"
+"<br>X - X = " + (x-x)
+"<br>Y - Y = " + (y-y)
+"<br>Z - Z = " + (z-z)
+"</p>")

document.writeln("<p><br>Example with Multiplying"
+"<br>X * X = " + (x*x)
+"<br>Y * Y = " + (y*y)
+"<br>Z * Z = " + (z*z)
+"</p>")

document.writeln("<p><br>Example with Dividing"
+"<br>X / X = " + (x/x)
+"<br>Y / Y = " + (y/y)
+"<br>Z / Z = " + (z/z)
+"</p>")