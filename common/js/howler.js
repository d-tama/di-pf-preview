document.addEventListener("DOMContentLoaded", function () {
  // 音のパス
  const bgms = ["./common/sound/VSQSE_1189_wave_35.mp3"];
  const clickSE = ["./common/sound/notification.wav"];
  const hoverSE = [
    "./common/sound/type_01.wav",
    "./common/sound/type_02.wav",
    "./common/sound/type_03.wav",
    "./common/sound/type_04.wav",
    "./common/sound/type_05.wav"
  ];
  const clickSEItem = [
    "./common/sound/maou_se_sound_paper01.mp3",
    // "./common/sound/swipe_02.wav",
    // "./common/sound/swipe_03.wav",
    // "./common/sound/swipe_04.wav",
    // "./common/sound/swipe_05.wav"
  ];
  const clickSEOpen = [
    "./common/sound/transition_up.wav"
  ];
  const clickSEClose = [
    "./common/sound/transition_down.wav"
  ];

  // BGMの初期設定
  const bgm = new Howl({
    src: bgms,
    loop: true,
    volume: 0.2,
    mute: true, // 初期状態はミュートにする
  });

// クリック時のSEを設定
const clickSound = new Howl({
  src: clickSE,
  volume: 0.5, // 音量を0.0から1.0の間で指定します
});

// メニュー開く時のSEを設定
const clickSoundOpen = new Howl({
  src: clickSEOpen,
  volume: 0.5, // 音量を0.0から1.0の間で指定します
});

// メニュー閉じる時のSEを設定
const clickSoundClose = new Howl({
  src: clickSEClose,
  volume: 0.5, // 音量を0.0から1.0の間で指定します
});


  // ミュートボタンをクリックした時の処理
  const muteButton = document.querySelector(".audio_button");
  muteButton.addEventListener("click", function () {
    if (bgm.mute()) {
      bgm.mute(false);
      muteButton.classList.remove("mute");
      // ミュートが解除された場合はBGMを再生する
      bgm.play();
    } else {
      bgm.mute(true);
      muteButton.classList.add("mute");
      // ミュートされた場合はBGMを停止する
      bgm.pause();
    }
  });

// ホバー時のSE再生
const hoverElements = document.querySelectorAll(
  "a, button, .close, .audio_button, .hamburger-menu"
);
hoverElements.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    if (!bgm.mute()) {
      // ホバーの音量設定
      const randomHoverSound = new Howl({
        src: [getRandomSoundPath(hoverSE)],
        volume: 1.0
      });
      randomHoverSound.play();
    }
  });
});

 
  // クリック時のSE再生
  const clickElements = document.querySelectorAll("#page-top, .audio_button,.nav-item a,.works-nav-item a");
  clickElements.forEach(function (element) {
    element.addEventListener("click", function () {
      if (!bgm.mute()) {
        clickSound.play();
      }
    });
  });

// 作品のクリック時のSE再生
const clickElementsItem = document.querySelectorAll(".item");
clickElementsItem.forEach(function (element) {
  element.addEventListener("click", function () {
    if (!bgm.mute()) {
      // .itemをクリックしたときの音量設定
      const randomClickSoundItem = new Howl({
        src: [getRandomSoundPath(clickSEItem)],
        volume: 0.3
      });
      randomClickSoundItem.play();
    }
  });
});


  // メニュー開閉時のSE再生
  const clickElementsOpen = document.querySelectorAll(".hamburger-menu");
  clickElementsOpen.forEach(function (element) {
    element.addEventListener("click", function () {
      if (!bgm.mute()) {
        if (element.classList.contains("active")) {
          clickSoundOpen.play();
        } else {
          clickSoundClose.play();
        }
      }
    });
  });

  // ユーザーのインタラクションがあった場合に再生を開始する
  document.addEventListener("click", function (event) {
    if (bgm.mute() && event.target.matches("#audio_button")) {
      bgm.mute(false);
      muteButton.classList.remove("mute");
      bgm.play();
    }
    if (event.target.matches("#page-top")) {
      if (!bgm.playing()) {
        bgm.play();
      }
    }
  });

  // ランダムな音のパスを取得するヘルパー関数
  function getRandomSoundPath(soundArray) {
    const randomIndex = Math.floor(Math.random() * soundArray.length);
    return soundArray[randomIndex];
  }

  // 初期状態がミュートの場合はミュートボタンに .mute クラスを付ける
  if (bgm.mute()) {
    muteButton.classList.add("mute");
  }
});
