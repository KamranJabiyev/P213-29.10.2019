//JS SELECTORS

// let d = document.getElementById("test")
// d.innerHTML = "<p>Salam P213</p>"
// console.log(d)

// let allDiv = document.getElementsByClassName("test")
// let allDiv = document.getElementsByTagName("div")
// let d = document.querySelector(".test");
// let allDiv = document.querySelectorAll("div");
// console.log(d)



//CSS style with JS

let btnChangeColor = document.getElementById("changeColor");
let p = document.querySelector("#test p");
// console.log(btnColor)

// btnColor.onclick = function() {
//     alert("Salam P213")
// }

// btnColor.onclick = function() {
//     alert("Sagol P213")
// }

btnChangeColor.addEventListener("click", function() {
    p.classList.toggle("color")
        // p.style.color = "red";
        // p.style.backgroundColor = "yellow"
})



// btnColor.addEventListener("click", function() {
//     alert("Sagol P213")
// })

//Practice

// let txt = document.getElementById("txt");
// let btnAdd = document.getElementById("btnAdd");
// let ulParent = document.getElementById("ulParent");

// btnAdd.addEventListener("click", function() {
//     let text = txt.value;
//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     li.innerText = text;
//     ulParent.appendChild(li);
//     // ulParent.innerHTML += '<li class="list-group-item">' + text + '</li>';
//     txt.value = "";
// })

// let btnDeleteAll = document.querySelector("#btnDeleteAll");

// btnDeleteAll.addEventListener("click", function() {
//     ulParent.innerHTML = "";
//     // let allLi = document.querySelectorAll("#ulParent li");
//     // for (let li of allLi) {
//     //     li.remove()
//     // }
// })

// let btnDeleteLast = document.querySelector("#btnDeleteLast");

btnDeleteLast.addEventListener("click", function() {
    ulParent.lastChild.remove();
})

btnDeleteLast.onclick = () => ulParent.lastChild.remove();


// let p = document.querySelector("#test p");

// p.className = "Memmed"
// p.classList.replace("default", "Memmed")
// p.classList.replace("Elgiz", "5")
// console.log(p.classList.contains("c"))
// p.classList.toggle("Memmed")