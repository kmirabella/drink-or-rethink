
// This script changes the joinLine buttons on the homepage to the single joined line button
// when the user is currently in a bar line

// BACKGROUND COLOR OF THE 'IN LINE' BUTTON IS SET BELOW (NOT IN CSS FILE)

function renderInLineHomepage() {
    document.getElementById('bobsJoinLine').innerHTML = "";
    document.getElementById('goodfellowsJoinLine').innerHTML = "";
    document.getElementById('hesNotJoinLine').innerHTML = "";
    document.getElementById('laResJoinLine').innerHTML = "";
    document.getElementById('mawJoinLine').innerHTML = "";

    if (sessionStorage.getItem('currentBar') === 'bobs') {
        document.getElementById('bobsJoinLine').innerHTML = `
            <div class="joinLineButton" style="background-color: #DEE076;">
                <a class="joinLineLink" id="line" href="inLineWaitTime.html">In Line</a>
            </div>`;
    } else if (sessionStorage.getItem('currentBar') === 'goodfellows') {
        document.getElementById('goodfellowsJoinLine').innerHTML = `
            <div class="joinLineButton" style="background-color: #DEE076;">
                <a class="joinLineLink" id="line" href="inLineWaitTime.html">In Line</a>
            </div>`;
    } else if (sessionStorage.getItem('currentBar') === 'hesNot') {
        document.getElementById('hesNotJoinLine').innerHTML = `
            <div class="joinLineButton" style="background-color: #DEE076;">
                <a class="joinLineLink" id="line" href="inLineWaitTime.html">In Line</a>
            </div>`;
    } else if (sessionStorage.getItem('currentBar') === 'laRes') {
        document.getElementById('laResJoinLine').innerHTML = `
            <div class="joinLineButton" style="background-color: #DEE076;">
                <a class="joinLineLink" id="line" href="inLineWaitTime.html">In Line</a>
            </div>`;
    } else {
        document.getElementById('mawJoinLine').innerHTML = `
            <div class="joinLineButton" style="background-color: #DEE076;">
                <a class="joinLineLink" id="line" href="inLineWaitTime.html">In Line</a>
            </div>`;
    }
}