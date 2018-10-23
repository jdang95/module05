var num = prompt("Enter Number from 0-10", "") //prompt user to enter the number

var num = parseInt(num); //parse the num to number
var i = 0;
   
document.write('<table border="1" cellspacing="0">');
for(i=1;i<11;i++) {
    document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr>");
}

document.write("</table>");

