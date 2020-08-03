document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    strings: ["^1000less^1700","^1000more^1700"],
   // strings: ["Business^1500","^1000Startup^1500","^1000Charity^1500","^1000School^1500","^1000Idea^1500"],
	stringsElement: null,
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 0,
    loop: true,
    loopCount: Infinity,
    onComplete: function(self) { prettyLog('onComplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) }
  });

});

function prettyLog(str) {
  console.log('%c ' + str, '');
}
