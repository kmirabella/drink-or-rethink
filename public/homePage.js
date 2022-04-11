

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/*

let barList =
[
  {
    img: "images/bobs.jpg",
    name: "Pantana Bobs"

  }
];

export const renderPlayerCard = function(bar) {
    let string = `
    <img width="20%" height="20%" src="${bar.img}"></img>
 <h3 style="color: black"> ${bar.name}</h3>
 
<br>
 
 `;
return string;
};


export const loadBarsIntoDOM = function(bars) {
    const $root = $('#root');
    bars.forEach(bar => {
        $root.append(renderPlayerCard(bar));

    });

}

$(function() {
    loadBarsIntoDOM(barList);
    console.log(barList);
})

*/

