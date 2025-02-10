const decButton = document.getElementById("decButton");
const resButton = document.getElementById("resButton");
const incButton = document.getElementById("incButton");
const countLabel = document.getElementById("countLabel");

let count;
count = Number(countLabel.textContent);


decButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}
incButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}