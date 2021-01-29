function refreshLessonPage() {
    let key = document.getElementById("lessonKey");
    key.innerHTML = "<p>Lesson Key: " + lessonSkipCodes[lessonNumber] + `</p>
    <p>If you are a returning student, type in the key of your last lesson to enter.</p>`;
    let lessonSection = document.getElementById("lesson");
    let logoLink = "../js_icon.png";
    if (lessonNumber == 0) {
        lessonSection.innerHTML =
            `<h2><img src="${logoLink}" height=30>Lesson 0: Hello, World!</h2>
        <p>Whenever you are learning a new programming language, people traditionally make the computer say "Hello World" to ensure that they are able to run a program successfully without complicated code. In JavaScript, a computer can "print" statements to what we call the console using the following statement:</p>
        <div class="code">
        <div class="class">console</div>.log("text");
        </div>
        <p>console.log() prints out whatever exists between the parenthesis. If you want to print out text, have quotation marks ("") around the text you want to print. For example:
        <div class="code"><div><div class="class">console</div>.log("Strawberry Jam");</div>
        <div>--> Strawberry Jam</div></div>
        <p>console.log("Strawberry Jam"); prints out "Strawberry Jam" to the console.</p>
        <p>One final note: every programming statement must end with a semicolon (;). While the JavaScript compiler can usually still run code without semicolons, it can occasionally fail to run the code. Adding semicolons to the end of every statement not only makes your code more reliable, but it also makes your code cleaner.
        <p><challenge>Challenge: can you code a program that prints "Hello, World!" to the console?</challenge></p>`;
    } else if (lessonNumber == 1) {
        lessonSection.innerHTML =
            `<h2><img src="${logoLink}" height=30>Lesson 1: Variables</h2>
        <p>A variable is a container for storing a data value. Variables are declared with the var keyword, and you can set their data value equal to something by using the equals (=) sign.</p>
        <div class="code">
        <div class="keyword">var</div> <div class="var">x</div> = 5;</div>
        <p>The line of code above does 2 things. Firstly, it initializes a new variable called x with the "var" keyword. Secondly, it sets the new variable of x to the value of 5.</p>
        <p>Of course, this value of x is not very helpful if we can't do anything with it. Let's add 6 to x with the following code:</p>
        <div class="code">
        <div><div class="keyword">var</div> <div class="var">x</div> = 5;</div>
        <div><div class="var">x</div> = <div class="var">x</div> + 6;</div>
        </div>
        <p>On line 1, we initialize a variable named x, and set it equal to 5. On line 2, set x equal to the sum of x + 6, which in effect adds 6 to x's value. However, we don't have any console output, so we need to ensure that the user see's x's value in the console. So we add a third line to our code:</p>
        <div class="code"><div><div class="keyword">var</div> <div class="var">x</div> = 5;</div>
        <div><div class="var">x</div> = <div class="var">x</div> + 6;</div>
        <div><div class="class">console</div>.log(<div class="var">x</div>);</div>
        <div>--> 11</div></div>
        <p>In the example above, lines 1-2 do the same things as they did before. However, with line 3, we tell the console to print out the value of x. Notice that there are no quotes; we want to print the value <i>variable</i> x, not "x".</p>
        <p><challenge>Write some code that has variables x and y. Have x be set equal to 15, and have y be set equal to 8. Then print out to the console what the difference between x and y is (which is x - y).</challenge></p>`;
    } else if (lessonNumber == 2) {
        lessonSection.innerHTML =
            `<h2><img src="${logoLink}" height=30>Lesson 2: Data Types of Number</h2>
        <p>In the past lesson, we have had our variables be of type Number. Number is a datatype, which is a value type. Number includes integers (whole numbers), and floats (numbers with decimals).</p>
        <p>As we have already went over, you can use the plus (+) sign to add two numbers together, and you can use the minus (-) sign to subtract one number from another. For multiplication, use the asterisk symbol (*), and for division, use the foreward slash (/) symbol. Just like regular math, the order of operations still apply, and parentheses () can still be inserted to change the order of operations. Now that you know the corresponding characters for each mathematical operation, you can do more complicated math with numbers.</p>
        <p><challenge>Write a program that has variable C represent Celsius. Set the the variable representing Celsius equal to 17. Then print out what the Fahrenheit amount would be, according to C. The conversion formula is Fahrenheit = 9/5 * Celsius + 32</challenge></p>`;
    } else if (lessonNumber == 3) {
        //&emsp; is a tab
        lessonSection.innerHTML =
            `<h2><img src="${logoLink}" height=30>Lesson 3: if/else statements and Number comparisons</h2>
        <p>So far in our code, we have been running all of our lines of code in order from top to bottom. However, there are cases when you would not want to excecute all of your lines of code, and would like to skip some, based on what is happening in your program. That's where if/else statements come into play. Here is an example:</p>
        <div class="code">
        <div><div class="keyword">var</div> <div class="var">x</div> = 5;</div>
        <div><div class="keyword">var</div> <div class="var">y</div> = 3;</div>
        <div>if (<div class="var">x</div> > <div class="var">y</div>){</div>
        <div>&emsp; <div class="class">console</div>.log("x is greater than y");</div>
        <div>} else if(<div class="var">x</div> < <div class="var">y</div>){</div>
        <div>&emsp; <div class="class">console</div>.log("x is less than y");</div>
        <div>} else {</div>
        <div>&emsp; <div class="class">console</div>.log("x is equal to y");</div>
        <div>}</div>
        </div>
        <p>In the above code, if x is greater than y (a larger number than y) on line 3, then we will excecute line 4 in the code, which has the text "x is greater than y" printed to the console. If x <i>is not</i> greater than y, then we continue onward to the first else statement, which appears on line 5; otherwise we will skip all the way to right after line 9 (the end of the if/else statement). On line 5, we test to see if y is greater than x. If true, we will excecute line 6 in the code, which has the text "y is greater than x" printed to the console. If the comparison statement on line 5 turns out to be false, we skip ahead to line 7, which just has an else statement, with no comparison condition. When there is no comparison condition after the else statement (so it is else, and not else if), the else statment is excecuted no matter what, provided that all of the preceeding if/else statements above were false.</p>
        <p>To check if two values are equal to each other, use <i>double</i> equals signs (==). If you use single equals (=), then the computer will assume you are setting a variable to a value. The extra equal sign is what tells the computer that you are testing if two values are equal.</p>
        <p><challenge>Write a program that calculates a letter grade based on a score you received. Have a variable called pointsReceived that stores how many points you have scored on the assignment, and have a variable called totalPossiblePoints that stores the highest score that someone could score on the test. Have it be that you scored 59 points out of 73 possible. Remember that an A is anything above 89.9%, a B is anything above 79.9%, a C is anything above 69.9%, a D is anything above 59.9%, and an F is anything lower than a D. Make sure that you test for all cases when testing for your grade, and <u><strong>have your grade exressed as a decimal, such as 0.50 = 50%</strong></u>.</challenge></p>`;
    } else if (lessonNumber == 4) {
        //&emsp; is a tab
        lessonSection.innerHTML = `<h2><img src="${logoLink}" height=30>Lesson 4: while loops</h2>
        <p>Sometimes, we want some of our lines of code to keep on repeating excecution so long a certain statement is true.</p>
        <p>For example, if we want to print x as long as it is greater than 6, we can write.</p>
        <div class="code"><div class="keyword">var</div> x = 1;<br>
        while(x < 6){<br>
        &emsp;<div class="class">console</div>.log(x); <br>   
        &emsp;x = x + 1; <br>   
        }</div>
        <p>This will output 1, 2, 3, 4, 5. You can check with the bottom console.</p>
        <p>The condition that's being checked for is if x is less than 6. These conditions are the same as the ones used in the if statements. While this is true, the lines inside the loop will run. After each of the lines in the loop have been run, then the condition will be checked again.</p>
        <p>One thing to avoid is what is called an infinite loop, where the condition will always be true. This will cause the loop to never end, and can cause other issues as well. The easiest way to create one would be</p>
        <div class="code">while(true){<br>
        &emsp; //Some Code<br>
        }</div>
        <p>Since the condition is always true, this code will never stop unless you manually end it somehow</p>
        <p><challenge>Challenge: Using a while loop, repeatedly print the value of the variable x, starting at 10 and decreasing it by 0.5 each time. Do while x isn't negative.</challenge></p>`;
    } else if (lessonNumber == 5) {
        //&emsp; is a tab
        lessonSection.innerHTML =
            `<h2><img src="${logoLink}" height=30>Lesson 5: for loops</h2>
            <p>For loops are similar to a while loop, and can be written using a while loop. But since they're used so often, they often have their own specific thing. A good chunk of while loops look like this:</p>
            <div class="code"><div class="keyword">var</div> x = 0;<br>
            while (<div class="var">x</div> < 8) {<br>
            &emsp; //do something<br>
            &emsp; x = x + 1;<br>
            }</div>
            <p>This is essentially how a for loop will operate. A variable will be chosen as the counter variable, it'll be changed (usually by adding one) until it reaches the end value. The following code is essentially the same as earlier. Let's see how the for loop version works:</p>
            <div class="code"><div>for (var x = 0; x < 8; x = x + 1) {</div>
            <div>&emsp; //do something</div>
            <div>}</div></div>
            <p>The first statement is the define the variable, and what value it starts at. Statement 2 is to evaluate if it is true. If it is true, then the code inside the loop is run. After all the code inside the loop is run, then the last statement is run and the variable is changed.</p>
            <p>This specific loop, just like the first loop, will run whatever is inside the loop 8 times.</p>
            <p>Too simplify the code even further, there are simplifications you can do with +=, -=, ++, and --. These next lines of code are essentially the same.</p>
            <div class="code">x = x + 1;<br>
            x += 1;<br>
            x++;</div>
            <p>And the same with -= and --. So we can rewrite the for loop as</p>
            <div class="code">for(<div class="keyword">var</div> x = 0; x < 8; x++) {<br>
            &emsp; //do something<br>
            }</div>
            <p><challenge>Challenge: Using a for loop, and -=, repeatedly print the value of the variable x, starting at 10 and decreasing it by 0.5 each time. Do while x isn't negative.</challenge></p>`;

    } else if (lessonNumber == 6) {
        //&emsp; is a tab
        lessonSection.innerHTML =
            `<h2><img src="${logoLink}" height=30>Lesson 6: Functions</h2>
        <p>Functions in JavaScript are blocks of reusable code that are meant to perform some sort of task. This could be adding two numbers, reversing a string, or anything else. Functions always end with a return statement, which is the final output of the task. Here is a function that returns area of a triangle, given its base and height:</p>
        <div class="code">function triangleArea(base, height) {<br>
        &emsp; return base * height / 2;<br>
        }<br>
        <div class="class">console</div>.log(triangleArea(10, 12));<br>
        --> 60</div>
        <p>First we defined the function by naming it and giving it two parameters, which are the words inside the parentheses. Then we did a task with those parameters by multiplying them together and dividing by two. Finally we returned the area of the triangle in a return statement. These are all components you will need in functions.</p>
        <p>Logical operators are also very useful in functions and coding in general. There are three operators: && (and) || (or) ! (not). They are often used in conditional statements.</p>
        <div class="code">//x=6 and y=3<br>
        if (x < 10 && y == 3) //True<br>
        if (x == 5 || y == 5) //False<br>
        if !(x == y) //True</div>
        <p>If/else statements, while loops, for loops, and logical operators are often used within functions. They are very helpful for performing certain tasks. For example, if we wanted to check how many vowels were in a word, this is what it would look like:</p>
        <div class="code">function vowelCount(word) {<br>
        &emsp; <div class="keyword">var</div> count = 0;<br>
        &emsp; for (i=0; i < word.length; i++) {<br>
        &emsp; &emsp;if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {<br>
        &emsp; &emsp; &emsp;count += 1;<br>
        &emsp; &emsp;}<br>
        &emsp;}<br>
        &emsp;return count;<br>
        }</div></div>
        <p><challenge>Challenge: Create a function called temperatureCheck that checks if a temperature in Celsius is equal to a given temperature in Fahrenheit AND equal to a given temperature in Kelvin. There will be three parameters, Celsius, Fahrenheit, and Kelvin, in that order. The conversion from Celsius to Fahrenheit is: Celsius * 9/5 + 32. The conversion from Celsius to Kelvin is: Celsius + 273. If the Celsius value is equal to both the Fahrenheit and Kelvin values, then the function should return true. Otherwise, it should return false. Outside of the function, you should call it twice, first with the parameters: 35, 95, and 308. Then call it with the parameters: 20, 68, 423. Remember to see the output of your function in the console, you need to use console.log outside of your function calls.</challenge></p>`;
    } else if (lessonNumber == 7) {
        //&emsp; is a tab
        lessonSection.innerHTML =
            `<h2><img src="${logoLink}" height=30>Lesson 7: Data Type of Strings</h2>
        <p>So far we've learned about two different data types: numbers and strings. Data types are different types of values that are stored in variables. Now we will learn about strings, which are sets of zero or more characters written inside quotes. Let's create some strings:</p>
        <div class="code"><div class="keyword">var</div> name = "Adam Clark";<br>
        <div class="keyword">var</div> age = '35';<br>
        <div class="class">console</div>.log(name + ' is ' + age);<br>
        --> Adam Clark is 35</div>
        <p>Notice how we can use single or double quotes to create a string. We cannot change strings, but we can add strings to other strings, like in the example above:</p>
        <p>Strings have different methods, which let you do different things with strings. Methods always follow the end of a string and begin with a period. Here is a method that gives us the length of a string:
        <div class="code"><div class="keyword">var</div> string = 'supercalifragilisticexpialidocious';<br>
        <div class="class">console</div>.log(string.length);<br>
        --> 34</div>
        <p> There are various other methods such as .indexOf(), which gives us the index of a character within a string. An index is a number that represents a character's position in a string. Note that indices begin at 0, meaning the third index of a string, would be the fourth character of that string.</p>
        <div class="code"><div class="class">console</div>.log("helloworld".indexOf("w");<br>
        --> 5</div>
        <p>Another useful method is .split(), which splits a string, based on the portion of the string in the parentheses. For example, .split(" ") would remove all spaces from a string and replace those strings with commas.</p>
        <p><challenge>Challenge 1: Code a program that creates two string variables: name and city, and set them equal to Batman and the city he lives in: Gotham City. Then print a sentence to the console that states where Batman lives. You will need to include " lives in " in the middle of your console.log() statement.</challenge></p>
        <p><challenge>Challenge 2: Make a function that takes one parameter (sentence) and returns the third word in that sentence by using .split(). Then call this function using the sentence "My favorite color is purple" and print the output. Make sure you use the correct index.</challenge></p>`;
    } else if (lessonNumber == 8) {
        //&emsp; is a tab
        lessonSection.innerHTML = `<h2><img src="${logoLink}" height=30>Lesson 8: Arrays</h2>
        <p>Arrays in JavaScript are lists of elements that share the same data type. There are arrays of integers and arrays of strings but not a mix of both. Arrays are created with brackets and commas that separate each item.</p>
        <div class="code"><div><div class="keyword">var</div> array = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];</div>
        <div><div class="class">console</div>.log(array[4]);</div>
        <div>--> 'blue'</div></div>
        <p>Arrays have indices just like strings, except each index is a different item rather than characteter. We can do a lot of things with arrays, such as replace their items, add items, or find their length.</p>
        <div class="code"><div>array[2] = 'brown'; //replace 'yellow' with 'brown'</div>
        <div>array.push('white'); //add item to array</div>
        <div><div class="class">console</div>.log(array);</div>
        <div><div class="class">console</div>.log(array.length) //print length of array;</div>
        <div>--> ['red', 'orange', 'brown', 'green', 'blue', 'indigo', 'violet', 'white']</div>
        <div>--> 8</div></div>
        <p><challenge>Challenge: Create a function that takes an array of numbers as its parameter. For every number in the array, multiply it by 10 and replace the number in the array with that value. Print out the function with the following array: [18, 7, 1, 16, 5, 12, 4]</challenge></p>`;
    } else if (lessonNumber == 9) {
        //&emsp; is a tab
        lessonSection.innerHTML = `<h2><img src="${logoLink}" height=30>Lesson 9: Objects</h2>
        <p>We've already covered variables, and how they contain data like numbers or strings. Now we'll learn about objects, which can contain many values. For example, the code below.</p>
        <div class="code"><div class="keyword">var</div> person = {name: "Jane Doe", age: 35}</div>
        <p>This creates a person object, with a name of "Jane Doe" and an age of 35.</p>
        <p>The way to access these new values is to use <i>object.value</i> or <i>object["value"]</i>. The following codes both access the first name of the person object we created earlier.</p>
        <div class="code"><div>person.name;</div>
        <div>person["name"];</div></div>
        <p>Objects can also contain methods or functions. These do stuff to the object variables and is stored in a similar way to data.</p>
        <div class="code"><div><div class="keyword">var</div> person = { </div>
        <div>&emsp;firstName: "Jane", </div>
        <div>&emsp;lastName: "Doe", </div>
        <div>&emsp;fullName : function(){ </div>
        <div>&emsp;&emsp;return this.firstName + " " + this.lastName;</div>
        <div>&emsp;}</div>
        <div>};</div></div>
        <p>With this code, we have created an object method that uses the firstName and lastName variables inside the same object. <em>this</em> refers to the "owner" of the function, which would be the person object, and you would reference the object variables the same way. The way to access the object functions now is to call <i>object.methodName();</i> So for example:</p>
        <div class="code"><div class="keyword">var</div> fullname = person.fullName();</div>
        <p><challenge>Challenge: To practice, create a car object with these details. A brand of Toyota, year of 2002, plateNumber of 12345, color of blue, and a function called displayInfo to return a description of "This car is a <em>color</em> <em>brand</em> from <em>year</em> with a plate number of <em>plateNumber</em>. Then call the function and display the output.</challenge></p>`;
    } else if (lessonNumber == 10) {
        //&emsp; is a tab
        lessonSection.innerHTML = `<h2><img src="${logoLink}" height=30>Lesson 10: Classes</h2>
        <p>Classes are templates used to create objects in Javascript, which include variables and methods that are passed on to every object created by a class. You can initialize a class by using the class keyword:</p>
            <div class="code"><div>class Car {</div>
            <div>&emsp; constructor(name, year) {</div>
            <div>&emsp; &emsp; this.name = name;</div>
            <div>&emsp; &emsp; this.year = year;</div>
            <div>&emsp; }</div>
            <div>};</div></div>
        <p>In the above code, we create a new class that we call Car. Car has a constructor, which is the method used to create new objects that are based on the class. The constructor has two paramaters, which are name and year. Within the constructor, we make the objects properties of the two parameters: name and year. You can create a new object based on class car by using the new keyword, followed by the class name, and passing in the paramaters for the constructor to "construct" the new object which is an instance of the class. Here is an example:</p>
            <div class="code"><div>class Car {</div>
            <div>&emsp; constructor(name, year) {</div>
            <div>&emsp; &emsp; this.name = name;</div>
            <div>&emsp; &emsp; this.year = year;</div>
            <div>&emsp; }</div>
            <div>};</div>
            <div><div class="keyword">var</div> Ford = new Car("Ford Raptor", 2018);</div>
            <div><div class="class">console</div>.log(Ford.name);</div>
            <div><div class="class">console</div>.log(Ford.year);</div>
            <div>--> Ford Raptor</div>
            <div>--> 2018</div></div>
        <p>Much like objects, classes can also support methods, which are inherited and a part of all objects that are made as new instances of the class. Here is an alternative example to the previous one, the difference being that this one uses a method:</p>
        <div class="code"><div>class Car {</div>
            <div>&emsp; constructor(name, year) {</div>
            <div>&emsp; &emsp; this.name = name;</div>
            <div>&emsp; &emsp; this.year = year;</div>
            <div>&emsp; }</div>
            <div>&emsp; printValues() {</div>
            <div>&emsp; &emsp; <div class="class">console</div>.log(this.name);</div>
            <div>&emsp; &emsp; <div class="class">console</div>.log(this.year);</div>
            <div>&emsp; }</div>
            <div>};</div>
            <div><div class="keyword">var</div> Ford = new Car("Ford Raptor", 2018);</div>
            <div>Ford.printValues();</div>
            <div>--> Ford Raptor</div>
            <div>--> 2018</div></div>

        <p><challenge>In this challenge you will have to write a program that simulates a student at a school.
        <br>Create a class called Student that has 3 parameters for the constructor: name, grade, gpa.
        <br>Have the constructor set the local values name, grade, and gpa to the corresponding parameters 
        <br>Have a method called graduate that will increase the student's grade by one year 
        <br>Have a method called changeGPA that takes a number as a parameter, and changes the student's gpa to that number 
        <br>Have a method called rollCall that prints out the student's name, grade, and gpa on seperate lines (in that order)
        <br>Create a student called Arden. His name should be Arden, grade 10, and his gpa is 3.9
        <br>use Arden's graduate method.
        <br>use Arden's changeGPA method to make it 3.7
        <br>use Arden's rollCall method to print out the final results to the console.
        </challenge></p>
        `;
    } else if (lessonNumber > 10) {
        lessonSection.innerHTML = 
        `<div class="center-text">
        <h1>Congratulations!</h1>
        <img src="../js_icon.png" height=150>
        <h2>You are now an unofficial JavaScript master!</h2>
        </div>
        `;
        //document.getElementById("codeLandStuff").innerHTML = "";
        document.getElementById("next").style.display = "none";
    }
}
