

// This code is setting the current Bar Line and current Wait at the top of the screen
// It also displays the other wait times accordingly


function renderBeforeSurvey() {
    if (sessionStorage.getItem('currentBar') === 'bobs') {
        document.getElementById("currentlyInLine").innerHTML = "Pantana Bob's";
        var currentWaitTime = sessionStorage.getItem('bobsWaitTime').substring(0, 2) + " minutes";

        // Check to see if the current wait is a single digit number, if it is, readjust the string to fit
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('bobsWaitTime').substring(0, 1) + " minutes";
        }
        
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = `
            <div class="row">
                <div class="column">
                    <img onclick="returnHome()" src="./images/LaRes.png" height="40px" width="40px">
                    <strong><span id="laResWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/GoodFellows.png" height="40px" width="40px">
                    <strong><span id="goodfellowsWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/HesNot.png" height="40px" width="40px">
                    <strong><span id="hesNotWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/MAW.png" height="40px" width="40px">
                    <strong><span id="mawWaitTime"></span></strong>
                </div>
            </div>
        `
        // updates the other wait times to match what the current wait time is
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("goodfellowsWaitTime").innerHTML = sessionStorage.getItem("goodfellowsWaitTime");
        document.getElementById("hesNotWaitTime").innerHTML = sessionStorage.getItem("hesNotWaitTime");
        document.getElementById("mawWaitTime").innerHTML = sessionStorage.getItem("mawWaitTime");


    } else if (sessionStorage.getItem('currentBar') === 'goodfellows') {
        document.getElementById("currentlyInLine").innerHTML = "Goodfellows";
        var currentWaitTime = sessionStorage.getItem('goodfellowsWaitTime').substring(0, 2) + " minutes";
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('goodfellowsWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = `
            <div class="row">
                <div class="column">
                    <img onclick="returnHome()" src="./images/LaRes.png" height="40px" width="40px">
                    <strong><span id="laResWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/PantanaBobs.png" height="40px" width="40px">
                    <strong><span id="bobsWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/HesNot.png" height="40px" width="40px">
                    <strong><span id="hesNotWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/MAW.png" height="40px" width="40px">
                    <strong><span id="mawWaitTime"></span></strong>
                </div>
            </div>
        `
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("bobsWaitTime").innerHTML = sessionStorage.getItem("bobsWaitTime");
        document.getElementById("hesNotWaitTime").innerHTML = sessionStorage.getItem("hesNotWaitTime");
        document.getElementById("mawWaitTime").innerHTML = sessionStorage.getItem("mawWaitTime");


    } else if (sessionStorage.getItem('currentBar') === 'hesNot') {
        document.getElementById("currentlyInLine").innerHTML = "He's Not Here";
        var currentWaitTime = sessionStorage.getItem('hesNotWaitTime').substring(0, 2) + " minutes";
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('hesNotWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = `
            <div class="row">
                <div class="column">
                    <img onclick="returnHome()" src="./images/LaRes.png" height="40px" width="40px">
                    <strong><span id="laResWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/GoodFellows.png" height="40px" width="40px">
                    <strong><span id="goodfellowsWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/PantanaBobs.png" height="40px" width="40px">
                    <strong><span id="bobsWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/MAW.png" height="40px" width="40px">
                    <strong><span id="mawWaitTime"></span></strong>
                </div>
            </div>
        `
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("goodfellowsWaitTime").innerHTML = sessionStorage.getItem("goodfellowsWaitTime");
        document.getElementById("bobsWaitTime").innerHTML = sessionStorage.getItem("bobsWaitTime");
        document.getElementById("mawWaitTime").innerHTML = sessionStorage.getItem("mawWaitTime");


    } else if (sessionStorage.getItem('currentBar') === 'laRes') {
        document.getElementById("currentlyInLine").innerHTML = "La Residence";
        var currentWaitTime = sessionStorage.getItem('laResWaitTime').substring(0, 2) + " minutes";
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('laResWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = `
            <div class="row">
                <div class="column">
                    <img onclick="returnHome()" src="./images/PantanaBobs.png" height="40px" width="40px">
                    <strong><span id="bobsWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/GoodFellows.png" height="40px" width="40px">
                    <strong><span id="goodfellowsWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/HesNot.png" height="40px" width="40px">
                    <strong><span id="hesNotWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/MAW.png" height="40px" width="40px">
                    <strong><span id="mawWaitTime"></span></strong>
                </div>
            </div>
        `
        document.getElementById("bobsWaitTime").innerHTML = sessionStorage.getItem("bobsWaitTime");
        document.getElementById("goodfellowsWaitTime").innerHTML = sessionStorage.getItem("goodfellowsWaitTime");
        document.getElementById("hesNotWaitTime").innerHTML = sessionStorage.getItem("hesNotWaitTime");
        document.getElementById("mawWaitTime").innerHTML = sessionStorage.getItem("mawWaitTime");


    } else {
        document.getElementById("currentlyInLine").innerHTML = "Might As Well";
        var currentWaitTime = sessionStorage.getItem('mawWaitTime').substring(0, 2) + " minutes";
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('mawWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = `
            <div class="row">
                <div class="column">
                    <img onclick="returnHome()" src="./images/LaRes.png" height="40px" width="40px">
                    <strong><span id="laResWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/GoodFellows.png" height="40px" width="40px">
                    <strong><span id="goodfellowsWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/HesNot.png" height="40px" width="40px">
                    <strong><span id="hesNotWaitTime"></span></strong>
                </div>
                <div class="column">
                    <img onclick="returnHome()" src="./images/PantanaBobs.png" height="40px" width="40px">
                    <strong><span id="bobsWaitTime"></span></strong>
                </div>
            </div>
        `
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("goodfellowsWaitTime").innerHTML = sessionStorage.getItem("goodfellowsWaitTime");
        document.getElementById("hesNotWaitTime").innerHTML = sessionStorage.getItem("hesNotWaitTime");
        document.getElementById("bobsWaitTime").innerHTML = sessionStorage.getItem("bobsWaitTime");
    }
}

    