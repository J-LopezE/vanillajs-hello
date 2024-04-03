function excusasfun() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying",];

  let randuno = Math.floor(4*Math.random()*who.length);
  let randdos = Math.floor(4*Math.random()*action);
  let randtres = Math.floor(Math.random()*what);
  let randcuatro = Math.floor(Math.random()*when);

  document.getElementById("excusa").innerHTML = who[randuno]+action[randdos]+what[randtres]+when[randcuatro];
}


