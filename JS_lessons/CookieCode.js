console.log("a change has been made");
var lessonNumber = 0; //The lesson page you are currently viewing
var highestLesson = 0; //The furthest lesson you have access to / went to
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var wantedLesson = getCookie("lesson");
    if (wantedLesson != "") {
        //We have a lesson cookie set, so we go to the cookie lesson saveds
        lessonNumber = wantedLesson;
        refreshLessonPage();
    } else {
        //Set the lesson equal to 0; they are new and not returning
        setCookie("lesson", 0, 365);
        refreshLessonPage();
    }
    highestLesson = wantedLesson;
}