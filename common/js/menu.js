// ハンバーガーメニュー要素を取得します
const hamburgerMenu = document.querySelector('.hamburger-menu');

// nav要素を取得します
const navElement = document.querySelector('nav');

// menu-show要素を取得します
const menuShowElements = document.querySelectorAll('.menu-show');

// gnav-navi-1のli要素を取得します
const gnavNavi1Items = document.querySelectorAll('.gnav-navi-1 a');

// スクロール位置が最上部かどうかを判定する関数を定義します
function isScrollAtTop() {
  return window.pageYOffset <= 100;
}

// スクロールイベントを監視します
window.addEventListener('scroll', function() {
  if (isScrollAtTop()) {
    hamburgerMenu.classList.add('none');
  } else {
    hamburgerMenu.classList.remove('none');
  }
});

// ハンバーガーメニューをクリックした際の処理を定義します
hamburgerMenu.addEventListener('click', function(event) {
  event.stopPropagation(); // クリックイベントの伝播を停止します

  hamburgerMenu.classList.toggle('active');
  navElement.classList.toggle('active');
  menuShowElements.forEach(function(menuShowElement) {
    menuShowElement.classList.toggle('active');
  });

  // body要素にクラスを追加してoverflow: hidden;スタイルを適用します
  document.body.classList.toggle('menu-open');

  if (document.body.classList.contains('menu-open')) {
    // メニューが開かれたらスクロールを禁止します
    document.body.style.overflow = 'hidden';
  } else {
    // メニューが閉じられたらスクロールを有効にします
    document.body.style.overflow = '';
  }
});

// gnav-navi-1のli要素をクリックした際の処理を定義します
gnavNavi1Items.forEach(function(item) {
  item.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
    navElement.classList.remove('active');
    menuShowElements.forEach(function(menuShowElement) {
      menuShowElement.classList.remove('active');
    });
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  });
});

// ドキュメント全体のクリックイベントを監視します
document.addEventListener('click', function(event) {
  const isMenuShowElementClicked = event.target.closest('.menu-show');
  const isHamburgerMenuClicked = event.target.closest('.hamburger-menu');
  const isNavElementClicked = event.target.closest('nav');

  if (!isMenuShowElementClicked && !isHamburgerMenuClicked && !isNavElementClicked) {
    hamburgerMenu.classList.remove('active');
    navElement.classList.remove('active');
    menuShowElements.forEach(function(menuShowElement) {
      menuShowElement.classList.remove('active');
    });
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  }
});
