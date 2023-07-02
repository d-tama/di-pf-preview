// スクロールイベントの監視
window.addEventListener('scroll', function() {
    // 要素の表示状態を判断する関数
    function isElementVisible(element) {
      var rect = element.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      return rect.top <= windowHeight * 1.0;
    }
  
    // 表示状態を判断してクラスを追加または削除する関数
    function handleElementVisibility(element, className) {
      if (isElementVisible(element)) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
  
    // .text-show要素の表示状態を判断してactiveクラスを追加または削除
    var textShowElements = document.getElementsByClassName('text-show');
    for (var i = 0; i < textShowElements.length; i++) {
      handleElementVisibility(textShowElements[i], 'active');
    }
  
    // .bgLRextendTrigger要素の表示状態を判断してbgLRextendクラスを追加または削除
    var bgLRextendTriggerElements = document.getElementsByClassName('bgLRextendTrigger');
    for (var i = 0; i < bgLRextendTriggerElements.length; i++) {
      handleElementVisibility(bgLRextendTriggerElements[i], 'bgLRextend');
    }
  
    // .bgappearTrigger要素の表示状態を判断してbgappearクラスを追加または削除
    var bgAppearTriggerElements = document.getElementsByClassName('bgappearTrigger');
    for (var i = 0; i < bgAppearTriggerElements.length; i++) {
      handleElementVisibility(bgAppearTriggerElements[i], 'bgappear');
    }
  });
  