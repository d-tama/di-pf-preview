const scrollbarContainer = document.getElementById("scrollbar-container");
const scrollbarThumb = document.getElementById("scrollbar-thumb");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const currentPosition = window.pageYOffset;
  const newPosition =
    (currentPosition / totalHeight) *
    (scrollbarContainer.clientHeight - scrollbarThumb.clientHeight);

  scrollbarThumb.style.top = newPosition + "px";
});

window.onscroll = function () {
  var header = document.getElementById("target");
  var scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (scrollPos === 0) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
};