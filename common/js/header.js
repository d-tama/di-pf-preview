// 画面の高さ以上Scrollしたらheaderを表示
(function () {
    const fh = document.getElementById("fixed-header");
    const windowHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > windowHeight) {
        fh.classList.add("is-show");
      } else {
        fh.classList.remove("is-show");
      }
    });
  })();