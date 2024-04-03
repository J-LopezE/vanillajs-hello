/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excusasfun() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randuno = Math.floor(Math.random() * who.length);
  let randdos = Math.floor(Math.random() * action.length);
  let randtres = Math.floor(Math.random() * what.length);
  let randcuatro = Math.floor(Math.random() * when.length);

  return (
    who[randuno] +
    " " +
    action[randdos] +
    " " +
    what[randtres] +
    " " +
    when[randcuatro]
  );
}

window.onload = function() {
  //write your code here
  document.getElementById("excusa").innerHTML = excusasfun();
  console.log(excusasfun());
};
