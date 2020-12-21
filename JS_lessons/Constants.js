const lessonSkipCodes =
    [
        "a3vi031", //0
        "91xk1ap",
        "krzdsxv", //2
        "ky7d5g4",
        "tfoys1h", //4
        "n7qmv4x",
        "07b2jqu", //6
        "ishqk9k",
        "t86zliq", //8
        "3icw2hsF",
        "kf53ia8r", //10
        "3c05d1le",
        "78ka1pow" //12
    ];
const desiredOutputs =
    [
        ["Hello, World!"], //0
        [7], //1
        [(9 / 5 * 17 + 32)], //2
        ["B"], //3
        ["10", "9.5", "9", "8.5", "8", "7.5", "7", "6.5", "6", "5.5", "5", "4.5", "4", "3.5", "3", "2.5", "2", "1.5", "1", "0.5", "0"], //4
        ["10", "9.5", "9", "8.5", "8", "7.5", "7", "6.5", "6", "5.5", "5", "4.5", "4", "3.5", "3", "2.5", "2", "1.5", "1", "0.5", "0"], //5
        [true, false], //6
        ["Batman lives in Gotham City"], //7
        ["insert_answer_here"], //8
        ["This car is a blue Toyota from 2002 with a plate number of 12345"], //9
        ["Arden", 11, 3.7] //10
    ];
const requiredKeywords =
    [
        ["console.log(", ";"], //0
        ["x", "y", "15", "8", "=", "var", "-", ";"], //1
        ["var", "C", "17", "*", "+", "32"], //2
        ["var", "/", "pointsReceived", "59", "totalPossiblePoints", "73", "if", "else", ";", ".899", ".799", ".699", ".599", "A", "B", "C", "D", "F", "{", "}"],//3
        ["var", "x", "while"], //4
        ["var", "x", "for", "-="],//5
        ["function temperatureCheck(", "temperatureCheck(35, 95, 308)", "temperatureCheck(20, 68, 423)", "&&", "return true", "return false", "if (", "else"], //6
        ["var", "name", "city", ";", " lives in ", "console.log(name", "+"],//7
        ["insert_keywords_here"], //8
        ["var", "car", "brand", "Toyota", "plateNumber", "12345", "color", "blue", "displayInfo", "function()", "console.log", "car.displayInfo()"],//9
        ["class", "Student", "constructor", "name", "grade", "gpa", "this.", "graduate", "changeGPA", "rollCall", "var", "Arden", "new", "10", "3.9", "3.7", ".graduate();", ".changeGPA(", ".rollCall();"] //10
    ];
