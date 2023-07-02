window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded-end');

  const body = document.querySelector('body');
  body.classList.remove('loading-scroll');
}



document.getElementById("page-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// キャッシュを残さないためのコード
var now = new Date();
document.getElementById("now").innerText = (now.getMonth() + 1) + "/" + (now.getDate());
