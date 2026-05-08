/* ALL THEMES */

const themes = [

  "",
  "sunset",
  "forest",
  "ice",
  "crimson",
  "gold",
  "midnight",
  "ocean",
  "rose",
  "matrix"

];

/* LOAD SAVED THEME */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

  document.body.classList.add(savedTheme);
}

/* CURRENT THEME INDEX */

let theme =
themes.indexOf(savedTheme);

if(theme < 0){

  theme = 0;
}

/* SWITCH THEME */

window.switchTheme = function(){

  theme++;

  if(theme >= themes.length){

    theme = 0;
  }

  document.body.classList.remove(

    "sunset",
    "forest",
    "ice",
    "crimson",
    "gold",
    "midnight",
    "ocean",
    "rose",
    "matrix"

  );

  const current =
  themes[theme];

  if(current){

    document.body.classList.add(current);
  }

  localStorage.setItem(
    "theme",
    current
  );
};

/* DISABLE IMAGE MENU */

document.addEventListener(
  "contextmenu",
  e => {

    if(
      e.target.tagName === "IMG"
    ){

      e.preventDefault();
    }
  }
);

/* SORT A-Z */

window.sortAZ = function(){

  const grid =
  document.getElementById(
    "creatorsGrid"
  );

  if(!grid) return;

  const items =
  Array.from(
    grid.getElementsByClassName(
      "creator"
    )
  );

  items.sort((a,b)=>
    a.innerText.localeCompare(
      b.innerText
    )
  );

  grid.innerHTML = "";

  items.forEach(item =>
    grid.appendChild(item)
  );
};

/* SORT Z-A */

window.sortZA = function(){

  const grid =
  document.getElementById(
    "creatorsGrid"
  );

  if(!grid) return;

  const items =
  Array.from(
    grid.getElementsByClassName(
      "creator"
    )
  );

  items.sort((a,b)=>
    b.innerText.localeCompare(
      a.innerText
    )
  );

  grid.innerHTML = "";

  items.forEach(item =>
    grid.appendChild(item)
  );
};
