function q1() {
  var num1 = parseInt(window.prompt("Enter the first integer:"), 10);
  var num2 = parseInt(window.prompt("Enter the second integer:"), 10);

  document.write("<h2>Question 1 Output</h2>");

  if (isNaN(num1) || isNaN(num2)) {
    document.write("Invalid input. Retry.");
  } else if (num1 === num2) {
    document.write("Both numbers are equal: " + num1);
  } else if (num1 > num2) {
    document.write("The larger number is: " + num1);
  } else {
    document.write("The larger number is: " + num2);
  }
}
