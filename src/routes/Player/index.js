import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '/',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Player = require('./containers/PlayerContainer').default
      const reducer = require('./modules/player').default
      injectReducer(store, { key: 'status', reducer })
      cb(null, Player)
    }, 'player')
  }
})
