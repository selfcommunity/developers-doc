/**
 * Server-side stub for `@lottiefiles/react-lottie-player`.
 *
 * The real package bundles lottie-web, which touches `document` while the
 * module is being evaluated. Docusaurus static site generation has no DOM, so
 * requiring it during SSR throws `ReferenceError: document is not defined`.
 * Components using it (`OnBoardingWidget` in `@selfcommunity/react-ui`) are
 * only ever rendered inside `<BrowserOnly>`, so the server never needs a real
 * player: it just needs the module to import cleanly.
 */
import React from 'react';

export function Player() {
  return null;
}

export function Controls() {
  return null;
}

export class Seeker extends React.Component {
  render() {
    return null;
  }
}

export const PlayerState = {
  Error: 'error',
  Frozen: 'frozen',
  Loading: 'loading',
  Paused: 'paused',
  Playing: 'playing',
  Stopped: 'stopped',
};

export const PlayerEvent = {
  Load: 'load',
  Error: 'error',
  Ready: 'ready',
  Play: 'play',
  Pause: 'pause',
  Stop: 'stop',
  Freeze: 'freeze',
  Loop: 'loop',
  Complete: 'complete',
  Frame: 'frame',
};

export function parseSrc(src) {
  return src;
}
