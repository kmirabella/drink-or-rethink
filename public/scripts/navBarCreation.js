
// This function determines which wait time screen the nav bar should redirect to
// (either waitTime.html or inLineWaitTime.html)
function createNavBar() {
    if (sessionStorage.getItem('inLine') === "true") {
        document.getElementById("navigation").innerHTML = `
            <a href="homePage.html"><i class="fa-solid fa-home"></i></a>
            <a href="inLineWaitTime.html"><i class="fa fa-hourglass"></i></a>
            <a href="calendar.html"><i class="fa-solid fa-calendar-week"></i></a>
            `;
    } else {
        document.getElementById("navigation").innerHTML = `
        <a href="homePage.html"><i class="fa-solid fa-home"></i></a>
        <a href="waitTime.html"><i class="fa fa-hourglass"></i></a>
        <a href="calendar.html"><i class="fa-solid fa-calendar-week"></i></a>`;
    }  
}