function refreshLessonPage() {
    let lessonSection = document.getElementById("lesson");
    if (lessonNumber == 0) {
        lessonSection.innerHTML = 
        `<h2><img src="../Logo.png" height=30>Lesson 0: Hello, World!</h2>
        <p>Whenever you are learining a new programming language, people traditionally make the computer say "Hello World" to ensure that they are able to run a program successfully without complicated code. In JavaScript, a computer can "print" statements to what we call the console using the fsollowing statement:</p>
        <div class="code">console.log("text");</div>
        <p>console.log() prints out whatever exists between the parenthesis. If you want to print out text, have quotation marks ("") around the text you want to print. For example:1
        <div class="code">console.log("Strawberry Jam");</div>
        <div class="code">--> Strawberry Jam</div>
        <p>console.log("Strawberry Jam"); prints out "Strawberry Jam" to the console.</p>
        <p>One final note: every programming statement must end with a semicolon (;). While the JavaScript compiler can usually still run code without semicolons, it can occasionally fail to run the code. Adding semicolons to the end of every statement not only makes your code more reliable, but it also makes your code cleaner.
        <p><challenge>Challenge: can you code a program that prints "Hello, World!" to the console?</challenge></p>`;
    } else if (lessonNumber == 1){
        lessonSection.innerHTML = 
        `<h2><img src="../Logo.png" height=30>Lesson 1: Variables</h2>
        <p>A variable is a container for storing a data value. Variables are declared with the var keyword, and you can set their data value equal to something by using the equals (=) sign.</p>
        <div class="code">var x = 5;</div>
        <p>The line of code above does 2 things. Firstly, it initializes a new variable called x with the "var" keyword. Secondly, it sets the new variable of x to the value of 5.</p>
        <p>Of course, this value of x is not very helpful if we can't do anything with it. Let's add 6 to x with the following code:</p>
        <div class="code">var x = 5;</div>
        <div class="code">x = x + 6;</div>
        <p>On line 1, we initialize a variable named x, and set it equal to 5. On line 2, set x equal to the sum of x + 6, which in effect adds 6 to x's value. However, we don't have any console output, so we need to ensure that the user see's x's value in the console. So we add a third line to our code:</p>
        <div class="code">var x = 5;</div>
        <div class="code">x = x + 6;</div>
        <div class="code">console.log(x);</div>
        <div class="code">--> 11</div>
        <p>In the example above, lines 1-2 do the same things as they did before. However, with line 3, we tell the console to print out the value of x. Notice that there are no quotes; we want to print the value <i>variable</i> x, not "x".</p>
        <p><challenge>Write some code that has variables x and y. Have x be set equal to 15, and have y be set equal to 8. Then print out to the console what the difference between x and y is (which is x - y).</challenge></p>`;
    } else if (lessonNumber == 2){
        lessonSection.innerHTML = 
        `<h2><img src="../Logo.png" height=30>Lesson 2: Data Types</h2>`;
    }
}