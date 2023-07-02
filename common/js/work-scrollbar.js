// スクロールバーのためのjs
// スクロールが可能な時はactiveを追加し、不可の場合は外される
// work-imgクラスが複数ある場合はactiveが追加される
// 複数なければactiveが外される

const scrollbarContainer = document.getElementById("scrollbar-container");
const scrollbarThumb = document.getElementById("scrollbar-thumb");
const header = document.getElementById("target");
const workImages = document.getElementsByClassName("work-img");

function updateScroll() {
  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const currentPosition = window.pageYOffset;
  const newPosition =
    (currentPosition / totalHeight) *
    (scrollbarContainer.clientHeight - scrollbarThumb.clientHeight);

  scrollbarThumb.style.top = newPosition + "px";

  if (totalHeight > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  // work-imgの数が0または1つの場合にactiveクラスを設定/削除
  if (workImages.length <= 1) {
    for (const workImage of workImages) {
      workImage.classList.remove("active");
    }
  } else {
    for (const workImage of workImages) {
      workImage.classList.add("active");
    }
  }
}

// ページがロードされた時にupdateScrollを呼び出す
window.addEventListener("load", updateScroll);

// スクロールとリサイズのイベントリスナーの設定
window.addEventListener("scroll", updateScroll);
window.addEventListener("resize", updateScroll);
