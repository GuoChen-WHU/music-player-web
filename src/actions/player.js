export const TOGGLE_PAUSED = 'TOGGLE_PAUSED';
export const togglePaused = paused => ({
  type: TOGGLE_PAUSED,
  paused
});

export const SET_TIME = 'SET_TIME';
export const setTime = time => ({
  type: SET_TIME,
  time
});

export const SET_TOTALTIME = 'SET_TOTALTIME';
export const setTotalTime = time => ({
  type: SET_TOTALTIME,
  time
});

export const SET_SONGINFO = 'SET_SONGINFO';
export const setSongInfo = info => ({
  type: SET_SONGINFO,
  info
});

export const SET_MODE = 'SET_MODE';
export const setMode = mode => ({
  type: SET_MODE,
  mode
});
