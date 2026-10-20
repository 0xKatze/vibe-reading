'use strict';

// Shared platform flags for Chrome/Edge/Safari Web Extension runtimes.
(function () {
  if (!globalThis.chrome && globalThis.browser) globalThis.chrome = globalThis.browser;

  const ua = (globalThis.navigator && navigator.userAgent) || '';
  const platform = (globalThis.navigator && navigator.platform) || '';
  const maxTouchPoints = (globalThis.navigator && navigator.maxTouchPoints) || 0;

  const isAppleMobileUA = /iPhone|iPad|iPod/i.test(ua);
  const isIpadOSDesktopUA = /Macintosh/i.test(ua) && maxTouchPoints > 1;
  const isIOS = isAppleMobileUA || isIpadOSDesktopUA || (/Mac/i.test(platform) && maxTouchPoints > 1);
  const isTouch = maxTouchPoints > 0 || ('ontouchstart' in globalThis);

  globalThis.VibePlatform = Object.freeze({
    isIOS,
    isTouch,
  });
})();
