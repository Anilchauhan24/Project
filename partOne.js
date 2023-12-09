document.getElementById("header").style.color = "orange";
document.querySelector("span").style.color = "blue";
document.querySelector("nav").style.cssText = "background:skyblue; display:flex; justify-content:space-between; align-items:center; flex-direction:row; flex-wrap:wrap"
document.querySelector("ul").style.cssText = "list-style: none; display:flex; align-items:center;justify-content:center; font-size:30px";
// document.querySelector("ul").style = {
//     listStyle: "none",

// };
let navItems = document.getElementById("navItems");
let itemList = document.createElement("li");
const navItem = ["Home", "My Network", "Jobs", "Messaging", "Notification"]
itemList.innerHTML = navItem;
navItems.appendChild(itemList);

navItem.forEach(itemsRemoval);

function itemsRemoval() {

    if (navItem.length > 0 && navItem.includes(","))
        return navItem.splice(",")
    else {
        return navItem.splice(",")
    }
}

const data = itemsRemoval()
console.log(data);

//creating search and input methods 
const input = document.getElementById("input");
input.style.cssText = "text-align:center; "
const inputData = document.createElement("input");
inputData.setAttribute("type", "text");
inputData.setAttribute("placeholder", "Enter your text")
input.appendChild(inputData);
const search = document.createElement("button");
search.textContent = "Submit"
input.appendChild(search)

// create a line
input.appendChild(document.createElement("hr"))

//creating left and right content details-
const contentItems = document.querySelector(".content-items");
contentItems.style.cssText = "display:flex;flex-direction: row; flex-wrap: wrap; justify-content: space-between; align-items: stretch;"


const left = document.querySelector(".left");
left.style.cssText = "width:200px; height:500px; background:linear-gradient(yellow,red); text-align:center";
const leftChildDiv = document.createElement("div");
leftChildDiv.style.cssText = "width:80px; height:80px; border-radius:50%;background:linear-gradient(skyblue,blue); text-align:center;margin-left:50px";
leftChildDiv.textContent = "Anil Chauhan";
left.appendChild(leftChildDiv);
//creating h2 tag after profile icon

const profileName = document.createElement("h2");
profileName.textContent = "Anil kumar chauhan";
leftChildDiv.append(profileName);
profileName.style.cssText = "margin-top:50px; text-align:center"

left.appendChild(document.createElement("hr"));
const right = document.querySelector("#right");



//middle content

const middleContent = document.querySelector(".middle-content");
middleContent.style.cssText = "width:50%; height:50vh; background:skyblue;";
const middleContentIcon = document.createElement("div");
middleContentIcon.style.cssText = "width:80px; height:80px; border-radius:50%; background:linear-gradient(pink,blue)";
middleContent.appendChild(middleContentIcon)
const inputSecond = document.createElement("input");
middleContent.append(inputSecond);
inputSecond.setAttribute("type", "text");
inputSecond.setAttribute("placeholder", "Search your Query")
inputSecond.style.cssText = "width:70%; height:7vh; background:skyblue;text-align:center; color:red; border-radius:20px; position:relative; top:-66px;left:11vw "


//create profile 

const rightContent = document.querySelector(".right-content");
rightContent.textContent = "This is righ part"