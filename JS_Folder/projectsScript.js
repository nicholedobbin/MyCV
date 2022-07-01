/* ================================================ DESCRIPTION ================================================================

This is the JS scripting file for 'projects.html'.

The program uses the following commands and functions:
    (a) Interval Function, which repeatedly adds/removes heading underscores at a determined interval, i.e. shows 
        and hides underscore repeatedly).

Please see 'References.txt' for the list of sources I used in this project.

================================================================================================================================*/

$(document).ready(function() {
    // Interval Function. 
    setInterval(function () {
        // Projects Section: Name Title
        var myName = document.getElementById("projectsHomeText").getElementsByTagName("h1")[0];
        if (myName.innerHTML == "Nichole Dobbin_") {
            myName.innerHTML = "Nichole Dobbin";
        } else {
            myName.innerHTML = "Nichole Dobbin_";
        }

        // Projects Section: "Coming Soon" Title
        var comingSoon = document.getElementById("comingSoon").getElementsByTagName("h3")[0];
        if (comingSoon.innerHTML == "coming soon_") {
            comingSoon.innerHTML = "coming soon";
        } else {
            comingSoon.innerHTML = "coming soon_";
        }
    }, 700);

});