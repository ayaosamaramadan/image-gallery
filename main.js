let data = {
  img1: "./imgs/img1.png",
  img2: "./imgs/img2.png",
  img3: "./imgs/img3.png",
  img4: "./imgs/img4.png",
};

let title = {
  title1: "untold",
  title2: "story of",
  title3: "KLCC",
  title4: "Malaysia",
};

let contener = document.getElementById("d");
let div11 = document.createElement("div");
let div1 = document.createElement("div");
div1.setAttribute("id", "div1");
for (let i = 1; i <= 4; i++) {
  let p = document.createElement("p");
  p.setAttribute("id", `p${i}`);
  p.textContent = title[`title${i}`];
  div1.appendChild(p);
}
div11.appendChild(div1);

// contener.appendChild(div11);
let div12 = document.createElement("div");
div12.setAttribute("id", "div2");

let div22 = document.createElement("div");
div22.setAttribute("id", "div22");

let divpp = document.createElement("p");
divpp.setAttribute("id", "pp");
divpp.textContent =
  "We so opinion friends me message as delight. Whole front do ofplate heard oh ought. His defective nor convinced residence own.";
div22.appendChild(divpp);
div12.appendChild(div22);

let div3 = document.createElement("div");
div3.setAttribute("id", "div3");
let divp = document.createElement("p");
divp.setAttribute("id", "p");
divp.textContent = "Read more";
div3.appendChild(divp);
let imgReadmore = document.createElement("img");
imgReadmore.setAttribute("src", "./imgs/Vector 1.png");
div3.appendChild(imgReadmore);
div12.appendChild(div3);
div11.appendChild(div12);
contener.appendChild(div11);
let theDiv4 = document.createElement("div");
theDiv4.setAttribute("id", "div4");

contener.appendChild(theDiv4);

//ul def
let theUlid = document.getElementById("ull");

// full ul with li
let theUlCreated = document.createElement("ul");
theUlid.appendChild(theUlCreated);
for (let i = 1; i <= 4; i++) {
  let theLiCreated = document.createElement("li");
  theLiCreated.value = i;
  theLiCreated.setAttribute("class", `li${i}`);
  theLiCreated.textContent = i;
  theUlCreated.appendChild(theLiCreated);
}

// prev btn
let prev = document.createElement("span");
prev.innerHTML = "&#8249;";
theDiv4.appendChild(prev);

// img
let firstImg = document.createElement("img");
firstImg.setAttribute("src", data["img1"]);
let imgSrc = firstImg.getAttribute("src");
theDiv4.appendChild(firstImg);
console.log(imgSrc);

// next btn
let next = document.createElement("span");
next.innerHTML = "&#8250;";
theDiv4.appendChild(next);
console.log(theDiv4);

//prev&next click events
let theImg = document.querySelector("#div4 img");

function prevClick() {
  if (imgSrc === data["img1"]) {
    theImg.setAttribute("src", data["img4"]);
  } else if (imgSrc === data["img2"]) {
    theImg.setAttribute("src", data["img1"]);
  } else if (imgSrc === data["img3"]) {
    theImg.setAttribute("src", data["img2"]);
  } else if (imgSrc === data["img4"]) {
    theImg.setAttribute("src", data["img3"]);
  }
  imgSrc = theImg.getAttribute("src");
}

function nextClick() {
  if (imgSrc === data["img1"]) {
    theImg.setAttribute("src", data["img2"]);
  } else if (imgSrc === data["img2"]) {
    theImg.setAttribute("src", data["img3"]);
  } else if (imgSrc === data["img3"]) {
    theImg.setAttribute("src", data["img4"]);
  } else if (imgSrc === data["img4"]) {
    theImg.setAttribute("src", data["img1"]);
  }
  imgSrc = theImg.getAttribute("src");
}

prev.addEventListener("click", prevClick);
next.addEventListener("click", nextClick);

// auto slide
let intervalId = setInterval(() => {
  nextClick();
}, 3000);

// remove auto slide on hover
theImg.addEventListener("mouseover", () => {
  clearInterval(intervalId);
});

// add auto slide on mouseout
theImg.addEventListener("mouseout", () => {
  intervalId = setInterval(nextClick, 5000);
});
