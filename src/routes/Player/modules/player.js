import Sound from 'react-sound'

// ------------------------------------
// Constants
// ------------------------------------
export const PLAY = 'PLAY'

// ------------------------------------
// Actions
// ------------------------------------
export function play (value) {
  console.log(value)
  return {
    type    : PLAY,
    payload : value
  }
}

export const actions = {
  play
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PLAY] : (state, action) => {
    return action.payload === Sound.status.PAUSED ? Sound.status.PLAYING : Sound.status.PAUSED
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Sound.status.PAUSED
export default function playerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
