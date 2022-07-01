/* ================================================ DESCRIPTION ================================================================

This is the JS scripting file for 'projects.html'.

The program uses the following commands and functions:
    (a) Interval Function, which repeatedly adds/removes heading underscores at a determined interval, i.e. shows 
        and hides underscore repeatedly).
    (b) Contact Form Submit Function, which alerts user when contact information is submitted.

Please see 'References.txt' for the list of sources I used in this project.

================================================================================================================================*/

$(document).ready(function() {
    // Interval Function.
    setInterval(function () {
        // Home Section: Name Title
        var myName = document.getElementById("homeText").getElementsByTagName("h1")[0];
        if (myName.innerHTML == "Nichole Dobbin_") {
            myName.innerHTML = "Nichole Dobbin";
        } else {
            myName.innerHTML = "Nichole Dobbin_";
        }

        // About Section: "About Me" Title
        var aboutMe = document.getElementById("aboutMe").getElementsByTagName("h3")[0];
        if (aboutMe.innerHTML == "about me_") {
            aboutMe.innerHTML = "about me";
        } else {
            aboutMe.innerHTML = "about me_";
        }

        // About Section: "Experience" Title
        var experience = document.getElementById("experience").getElementsByTagName("h3")[0];
        if (experience.innerHTML == "experience_") {
            experience.innerHTML = "experience";
        } else {
            experience.innerHTML = "experience_";
        }

        // Education Section: "Teacher" Title
        var teacherEducation = document.getElementById("teacherEducation").getElementsByTagName("h3")[0];
        if (teacherEducation.innerHTML == "teacher_") {
            teacherEducation.innerHTML = "teacher";
        } else {
            teacherEducation.innerHTML = "teacher_";
        }

        // Education Section: "Developer" Title
        var developerEducation = document.getElementById("developerEducation").getElementsByTagName("h3")[0];
        if (developerEducation.innerHTML == "developer_") {
            developerEducation.innerHTML = "developer";
        } else {
            developerEducation.innerHTML = "developer_";
        }

        // Contact Section: "Contact Me Here" Title
        var contactMe = document.getElementById("contactMe").getElementsByTagName("h3")[0];
        if (contactMe.innerHTML == "contact me here_") {
            contactMe.innerHTML = "contact me here";
        } else {
            contactMe.innerHTML = "contact me here_";
        }
    }, 700);


    //Contact Form Submit Function. 
    $("#contactButton").click(function(){
        alert("Thanks for getting in touch!");
    });
});

