let start,
  move = [],
  letMove = false;

export const onMU = (e, chnl, setState, onTurn) => {
  letMove = false;
  let parent = e.currentTarget.parentNode;
  let pos = parent.getBoundingClientRect();
  let target = e.currentTarget.getBoundingClientRect();
  if (
    Math.abs(move[1]) >
    pos.right - pos.left - Math.abs(move[1]) - target.right + target.left
  ) {
    if (parent.style.justifyContent === "flex-start") {
      // parent.style.justifyContent = "flex-end";
      // e.currentTarget.classList.remove("enbl-btn");
      // e.currentTarget.classList.add("dsbl-btn");
      onTurn(false);
    } else {
      // parent.style.justifyContent = "flex-start";
      // e.currentTarget.classList.remove("dsbl-btn");
      // e.currentTarget.classList.add("enbl-btn");
      onTurn(true);
    }
    move = [chnl, 0];
    setState([chnl, 0]);
  } else {
    move = [chnl, 0];
    setState([chnl, 0]);
  }

  document.body.classList.remove("selectDisable");
};

export const onML = (setState) => {
  letMove = false;
  move = [move[0], 0];
  setState(move);
  document.body.classList.remove("selectDisable");
};

export const onMD = (e, chnl) => {
  start = e.screenX;
  letMove = true;
  document.body.classList.add("selectDisable");
};

export const onMM = (e, chnl, setState) => {
  if (letMove) {
    move = [chnl, move[1] + e.screenX - start];
    setState([chnl, move[1] + e.screenX - start]);
    start = e.screenX;
  }
};

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ); // jQuery
}

export const handleTouchStart = (evt, chnl) => {
  evt.preventDefault();
  const firstTouch = getTouches(evt)[0];
  start = firstTouch.clientX;
};

export const handleTouchMove = (evt, chnl, setState) => {
  //console.log(evt.touches);

  let xUp = evt.touches[0].clientX;

  let xDiff = xUp - start;

  move = [chnl, move[1] + xDiff];
  setState(move);

  /* reset values */
  start = xUp;
};

export const handleTouchEnd = (e, chnl, setState) => {
  let parent = e.currentTarget.parentNode;
  let pos = parent.getBoundingClientRect();
  let target = e.currentTarget.getBoundingClientRect();
  if (
    Math.abs(move[1]) >
    pos.right - pos.left - Math.abs(move[1]) - target.right + target.left
  ) {
    if (parent.style.justifyContent === "flex-start") {
      parent.style.justifyContent = "flex-end";
      e.currentTarget.classList.remove("enbl-btn");
      e.currentTarget.classList.add("dsbl-btn");
    } else {
      parent.style.justifyContent = "flex-start";
      e.currentTarget.classList.remove("dsbl-btn");
      e.currentTarget.classList.add("enbl-btn");
    }
    move = [chnl, 0];
    setState([chnl, 0]);
  } else {
    move = [chnl, 0];
    setState([chnl, 0]);
  }

  document.body.classList.remove("selectDisable");
};

export const getLongestWidth = (words) => {
  let w = [];
  words.forEach((x) => {
    let el = document.createElement("span");
    el.style.opacity = 0;
    el.innerHTML = x;
    el.className = "lead";
    el.style.position = "absolute";
    el.style.bottom = "-50px";
    document.body.appendChild(el);
    w.push(el.getBoundingClientRect().width);
    el.parentNode.removeChild(el);
  });
  return Math.max(...w);
};
