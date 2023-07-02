// モーダル表示ボタンの要素を取得
var btns = document.getElementsByClassName("openModal");

// モーダル表示ボタンにクリックイベントを追加
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var modalId = this.getAttribute("data-modal");
    openModal(modalId);
  });
}

// モーダルを開く関数
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  var modalContent = modal.querySelector(".modal-content");

  // モーダルが既に開いている場合は閉じてから再度開く
  if (modal.classList.contains("open")) {
    closeModal(modal);
    setTimeout(function () {
      modal.style.display = "block";
      setTimeout(function () {
        modal.classList.add("open");
      }, 50); // 適切な遅延を設定してください
    }, 300); // 適切な遅延を設定してください
  } else {
    modal.style.display = "block";
    setTimeout(function () {
      modal.classList.add("open");
    }, 50); // 適切な遅延を設定してください
  }

  // クローズボタンにクリックイベントを追加
  var closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    closeModal(modal);
  });

  // 背景をクリックしてモーダルを閉じる
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal(modal);
    }
  });

  // モーダル内のリンククリック時にモーダルを閉じない
  var modalLinks = modal.querySelectorAll("a");
  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  // モーダルが開かれた状態でブラウザの戻るボタンが押された場合にモーダルを閉じる
  window.addEventListener("popstate", function () {
    closeModal(modal);
  });

  // モーダルが閉じられた後にブラウザの履歴を元に戻す
  history.pushState(null, null, window.location.pathname);

  // 背景のスクロールを禁止
  document.body.classList.add("modal-open");
}

// モーダルを閉じる関数
function closeModal(modal) {
  modal.classList.remove("open"); // openクラスを削除
  setTimeout(function () {
    modal.style.display = "none";
  }, 300); // 適切な遅延を設定してください

  // モーダルが閉じられた後にブラウザの履歴を元に戻す
  history.pushState(null, null, window.location.pathname);

// 背景のスクロールを有効化
document.body.classList.remove("modal-open");
}

// モーダルが開かれた状態でキーボードのEscキーが押された場合にモーダルを閉じる
window.addEventListener("keydown", function (event) {
var openModals = document.getElementsByClassName("modal open");
if (openModals.length > 0 && event.key === "Escape") {
var modal = openModals[0];
closeModal(modal);
}
});