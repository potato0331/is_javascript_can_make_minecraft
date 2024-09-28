var mode = 1;
var count = 0;
function toggle() {
  var target = document.querySelector("body").style;
  var alist = document.querySelectorAll("a");
  if (mode === 1) {
    target.backgroundColor = "black";
    target.color = "white";
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.color = "powderblue";
    }
  } else {
    target.backgroundColor = "white";
    target.color = "black";
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.color = "blue";
    }
  }
  mode = (mode + 1) % 2;
}
function day() {
  var target = document.querySelector("body").style;
  var alist = document.querySelectorAll("a");
  target.backgroundColor = "white";
  target.color = "black";
  for (var i = 0; i < alist.length; i++) {
    alist[i].style.color = "blue";
  }
  mode = 1;
}
function night() {
  var target = document.querySelector("body").style;
  var alist = document.querySelectorAll("a");
  target.backgroundColor = "black";
  target.color = "white";
  for (var i = 0; i < alist.length; i++) {
    alist[i].style.color = "powderblue";
  }
  mode = 0;
}
function rainbow(here) {
  var target = document.querySelector("body").style;
  var alist = document.querySelectorAll("a");
  var valuelist = ["무", "지", "개", "색", "총", "공", "격", "이", "다"];
  var BGcolorlist = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "black",
  ];
  count = (count + 1) % 9;
  target.backgroundColor = BGcolorlist[count];
  here.value = valuelist[count];
  if ([0, 2, 3].includes(count)) {
    target.color = "black";
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.color = "blue";
    }
  } else {
    target.color = "white";
    for (var i = 0; i < alist.length; i++) {
      alist[i].style.color = "powderblue";
    }
  }
  if (count == 8) {
    mode = 0;
  } else if (count == 0) {
    mode = 1;
  }
}
