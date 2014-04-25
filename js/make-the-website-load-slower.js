$(function() {
  $('img[data-src]').each(function() {
    this.src = this.getAttribute('data-src');
  });

  var t = document.querySelectorAll('.scrollTarget');
  if (t && t.length == 1 && t[0].scrollIntoView) {
    t[0].scrollIntoView(true);
    document.body.scrollTop -= 200;
  }
  if (/background_speakers/.test(document.body.className)) {
    setTheStage('.background_speakers', document.getElementById('speakers_map').src);
    return;
  }
  (function() {
    var map = document.getElementById('speaker_map');
    if (!map) {
      return
    }
    var target = setTheStage('.tags_speaker', map.getAttribute('src'));
    if (target) {
      target.onclick = function(e) {
        if (e.target == target) {
          window.open(map.parentNode.href);
        }
      }
    }
  })();
  if (/background/.test(document.body.className)) {
    return;
  }
  var numberOfBackgrounds = 0;
  var rules = document.styleSheets[1].cssRules;
  for (var i = 0; i < rules.length; i++) {
    if (/\.background\d+/.test(rules[i].cssText)) {
      numberOfBackgrounds++;
    }
  }
  $('link[rel=canonical]').each(function() {
    var sum = 0;
    for (var i = 0; i < this.href.length; i++) {
      sum += this.href.charCodeAt(i);
    }
    $(document.body).addClass('background' + (sum % numberOfBackgrounds));
  });
});

function setTheStage(bodyClass, url) {
  var stage = document.querySelector(bodyClass + ' .stage');
  if (stage) {
    document.body.className += ' background_programmatic';
    stage.style.backgroundImage = 'url(' + url + ')';
  }
  return stage;
}