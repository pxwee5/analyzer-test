/**
 * The IF statement tests for feature availability.
 * If not available, push the dynamic import into polyfills array.
 * Chunk named "poly" because short filenames rocks.
 *
 * @returns Array - Usage in Promise.all()
 */
const getPolyfills = function() {
  let polyfills = [];

  if (
    !(
      'forEach' in NodeList.prototype &&
      'startsWith' in String.prototype &&
      'endsWith' in String.prototype &&
      'includes' in String.prototype &&
      'includes' in Array.prototype &&
      'assign' in Object &&
      'entries' in Object &&
      'keys' in Object
    )
  ) {
    polyfills.push(
      import(/* webpackChunkName: "poly-babel" */ '@babel/polyfill')
    );

    /**
     * IE9-Edge12, Safari 5.1-6, and UCWeb 11 do not support referencing external files via <use xlink:href>
     * Loaded together because it's the above browsers are likely to not support ES6.
     *
     * @see https://caniuse.com/#feat=svg
     */
    polyfills.push(import(/* webpackChunkName: "poly-svgxuse" */ 'svgxuse'));
  }

  if (!('fetch' in window)) {
    polyfills.push(import(/* webpackChunkName: "poly-fetch" */ 'whatwg-fetch'));
  }

  if (!(typeof window.URL === 'function')) {
    polyfills.push(import(/* webpackChunkName: "poly-url" */ 'url-polyfill'));
  }

  if (!('IntersectionObserver' in window)) {
    polyfills.push(
      import(/* webpackChunkName: "poly-intersection" */ 'intersection-observer')
    );
  }

  if (!('scrollBehavior' in document.documentElement.style)) {
    polyfills.push(
      import(/* webpackChunkName: "poly-smoothscroll" */ 'smoothscroll-polyfill').then(
        smoothscroll => {
          smoothscroll.polyfill();
        }
      )
    );
  }

  return polyfills;
};

/**
 * The actual app that runs after polyfill is loaded.
 */
const app = function() {
  console.dir('test')
};

/**
 * https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
 * With better importing method using Promise.all(), which takes an array of polyfills.
 */
const polyfills = getPolyfills();

Promise.all(polyfills)
  .then(app)
  .catch(err => {
    console.error(err);
  });
