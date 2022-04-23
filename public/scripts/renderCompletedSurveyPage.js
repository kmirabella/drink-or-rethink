function renderCompletedSurveyPage() {
    document.getElementById("barForm").innerHTML = "Thank You For Your Feedback";

    //expands the other wait times after the survey has been completed
    if (sessionStorage.getItem("currentBar") === 'bobs') {
        document.getElementById("currentlyInLine").innerHTML = "Pantana Bob's";
        var currentWaitTime = sessionStorage.getItem('bobsWaitTime').substring(0, 2) + " minutes";

        // Check to see if the current wait is a single digit number, if it is, readjust the string to fit
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('bobsWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = 
            `<div class="expandedWait">
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/LaRes.png" height="85px" width="85px">
                        <strong><span id="laResWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/GoodFellows.png" height="85px" width="85px">
                        <br><strong><span id="goodfellowsWaitTime"></span></strong>
                    </div>
                </div>
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/HesNot.png" height="85px" width="85px">
                        <br><strong><span id="hesNotWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/MAW.png" height="85px" width="85px">
                        <br><strong><span id="mawWaitTime"></span></strong>
                    </div>
                </div>
            </div>`;

        // updates the expanted wait times to match what their current wait time is
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("goodfellowsWaitTime").innerHTML = sessionStorage.getItem("goodfellowsWaitTime");
        document.getElementById("hesNotWaitTime").innerHTML = sessionStorage.getItem("hesNotWaitTime");
        document.getElementById("mawWaitTime").innerHTML = sessionStorage.getItem("mawWaitTime");
        
    } else if (sessionStorage.getItem("currentBar") === 'goodfellows') {
        document.getElementById("currentlyInLine").innerHTML = "Goodfellows";
        var currentWaitTime = sessionStorage.getItem('goodfellowsWaitTime').substring(0, 2) + " minutes";
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('goodfellowsWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = 
        `
            <div class="expandedWait">
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/LaRes.png" height="85px" width="85px">
                        <strong><span id="laResWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/PantanaBobs.png" height="85px" width="85px">
                        <br><strong><span id="bobsWaitTime"></span></strong>
                    </div>
                </div>
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/HesNot.png" height="85px" width="85px">
                        <br><strong><span id="hesNotWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/MAW.png" height="85px" width="85px">
                        <br><strong><span id="mawWaitTime"></span></strong>
                    </div>
                </div>
            </div>
        
        `;
        // updates the other wait times to match what the current wait time is
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("bobsWaitTime").innerHTML = sessionStorage.getItem("bobsWaitTime");
        document.getElementById("hesNotWaitTime").innerHTML = sessionStorage.getItem("hesNotWaitTime");
        document.getElementById("mawWaitTime").innerHTML = sessionStorage.getItem("mawWaitTime");

    } else if (sessionStorage.getItem("currentBar") === 'hesNot') {
        document.getElementById("currentlyInLine").innerHTML = "He's Not Here";
        var currentWaitTime = sessionStorage.getItem('hesNotWaitTime').substring(0, 2) + " minutes";
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('hesNotWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = 
        `
            <div class="expandedWait">
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/LaRes.png" height="85px" width="85px">
                        <strong><span id="laResWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/GoodFellows.png" height="85px" width="85px">
                        <br><strong><span id="goodfellowsWaitTime"></span></strong>
                    </div>
                </div>
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/PantanaBobs.png" height="85px" width="85px">
                        <br><strong><span id="bobsWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/MAW.png" height="85px" width="85px">
                        <br><strong><span id="mawWaitTime"></span></strong>
                    </div>
                </div>
            </div>
        
        `;
        // updates the other wait times to match what the current wait time is
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("goodfellowsWaitTime").innerHTML = sessionStorage.getItem("goodfellowsWaitTime");
        document.getElementById("bobsWaitTime").innerHTML = sessionStorage.getItem("bobsWaitTime");
        document.getElementById("mawWaitTime").innerHTML = sessionStorage.getItem("mawWaitTime");

    } else if (sessionStorage.getItem("currentBar") === 'laRes') {
        document.getElementById("currentlyInLine").innerHTML = "La Residence";
        var currentWaitTime = sessionStorage.getItem('laResWaitTime').substring(0, 2) + " minutes";
        if (currentWaitTime[1] === 'm') {
            currentWaitTime = sessionStorage.getItem('laResWaitTime').substring(0, 1) + " minutes";
        }
        document.getElementById("currentWaitTime").innerHTML = currentWaitTime;

        document.getElementById("otherWait").innerHTML = 
        `
            <div class="expandedWait">
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/PantanaBobs.png" height="85px" width="85px">
                        <strong><span id="bobsWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/GoodFellows.png" height="85px" width="85px">
                        <br><strong><span id="goodfellowsWaitTime"></span></strong>
                    </div>
                </div>
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/HesNot.png" height="85px" width="85px">
                        <br><strong><span id="hesNotWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/MAW.png" height="85px" width="85px">
                        <br><strong><span id="mawWaitTime"></span></strong>
                    </div>
                </div>
            </div>
        
        `;
        // updates the other wait times to match what the current wait time is
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

        document.getElementById("otherWait").innerHTML = 
        `
            <div class="expandedWait">
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/LaRes.png" height="85px" width="85px">
                        <strong><span id="laResWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/GoodFellows.png" height="85px" width="85px">
                        <br><strong><span id="goodfellowsWaitTime"></span></strong>
                    </div>
                </div>
                <div class="rowExpanded">
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/HesNot.png" height="85px" width="85px">
                        <br><strong><span id="hesNotWaitTime"></span></strong>
                    </div>
                    <div class="columnExpand">
                        <img onclick="returnHome()" src="./images/PantanaBobs.png" height="85px" width="85px">
                        <br><strong><span id="bobsWaitTime"></span></strong>
                    </div>
                </div>
            </div>
        
        `;
        // updates the other wait times to match what the current wait time is
        document.getElementById("laResWaitTime").innerHTML = sessionStorage.getItem("laResWaitTime");
        document.getElementById("goodfellowsWaitTime").innerHTML = sessionStorage.getItem("goodfellowsWaitTime");
        document.getElementById("hesNotWaitTime").innerHTML = sessionStorage.getItem("hesNotWaitTime");
        document.getElementById("bobsWaitTime").innerHTML = sessionStorage.getItem("bobsWaitTime");

    }
    
}