const loadingElements = document.getElementsByClassName("loading");
setTimeout(() => {
  for (let i = 0; i < loadingElements.length; i++) {
    loadingElements[i].style.width = "30px";
    loadingElements[i].style.height = "30px";
  }
}, 20);
setTimeout(() => {
  for (let i = 0; i < loadingElements.length; i++) {
    loadingElements[i].style.width = "50px";
    loadingElements[i].style.height = "0px";
  }
}, 20);
