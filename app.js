"use strict";
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

const shortUrl = function () {
  let urlnput = document.getElementById("input_url").value;
  if (urlnput === "") {
    document.querySelector("#input_url").placeholder = `can't be empty`;
    document.querySelector("#input_url").style.border = "solid";
    document.querySelector("#input_url").style.borderColor = "red";
  } else {
    document.querySelector("#input_url").placeholder = `Shorten a link here`;
    document.querySelector("#input_url").style.border = "none";
    document.querySelector("#input_url").style.borderColor = "transparent";
  }

  fetch(`https://api.shrtco.de/v2/shorten?url=${urlnput}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.ok) {
        result1.innerText = data.result.full_short_link;
        result2.innerText = data.result.full_short_link2;
        result3.innerText = data.result.full_short_link3;
        input1.innerText = urlnput.slice(0, 50) + "...";
        input2.innerText = urlnput.slice(0, 50) + "...";
        input3.innerText = urlnput.slice(0, 50) + "...";
        document.getElementById("opacity1").style.opacity = "1";
        document.getElementById("opacity2").style.opacity = "1";
        document.getElementById("opacity3").style.opacity = "1";
      } else throw new Error(`${data.error}`);
    })
    .catch((err) => {
      console.log(err);

      document.querySelector("#input_url").placeholder = `${err}`;
      document.querySelector("#input_url").style.border = "solid";
      document.querySelector("#input_url").style.borderColor = "red";
    });
};
const changeFunction = function () {
  document.querySelector("#input_url").placeholder = `Shorten a link here`;
  document.querySelector("#input_url").style.border = "none";
  document.querySelector("#input_url").style.borderColor = "transparent";
};
