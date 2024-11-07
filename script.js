
// Change the text of the paragraph
function changeText() {
    const textElement = document.getElementById("text");
    textElement.innerText = "The text has been changed!";
}

// Toggle the background color of the content div
function toggleBackgroundColor() {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.toggle("highlight");
}

// Add a new item to the list
function addListItem() {
    const itemList = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.innerText = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
    
}

// remove the last item from the list
function removeListItem() {
    const itemList = document.getElementById("itemList");
    
}

//Change the whole page
function changeWholePage(aName)
{
    let bodyNode = document.getElementById("text").innerHTML=`<h3>New Content ${aName}</h3>`;
}
