"use strict";
const div = document.querySelectorAll("div");
let checked = [];
const checkbox = document.querySelectorAll("input[type=checkbox]");
window.addEventListener("load", function (e) {
  if (localStorage.getItem("checked")) {
    checked = JSON.parse(localStorage.getItem("checked"));
    checkbox.forEach((item) => {
      checked.forEach((ele) => {
        if (item.getAttribute("id") === ele) {
          item.setAttribute("checked", "true");
        }
      });
    });
  } else {
    localStorage.setItem("checked", JSON.stringify(checked));
  }
});

checkbox.forEach((ele, i) => {
  ele.addEventListener("change", function (e) {
    if (ele.checked) {
      if (!checked.includes(ele.getAttribute("id"))) {
        ele.setAttribute("checked", "true");
        checked.push(ele.getAttribute("id"));
      }
    } else if (!ele.checked) {
      ele.removeAttribute("checked");

      checked.splice(checked.indexOf(ele.getAttribute("id")), 1);
    }
    localStorage.setItem("checked", JSON.stringify(checked));
  });
});

div.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    const checkInput = ele.querySelector("input");
    console.log(checkInput);
    if (!checkInput.checked) {
      if (!checked.includes(checkInput.getAttribute("id"))) {
        checkInput.setAttribute("checked", "true");
        checked.push(checkInput.getAttribute("id"));
      }
    } else if (checkInput.checked) {
      checkInput.removeAttribute("checked");

      checked.splice(checked.indexOf(checkInput.getAttribute("id")), 1);
    }
    localStorage.setItem("checked", JSON.stringify(checked));
  });
});
