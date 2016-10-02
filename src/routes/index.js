import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import PlayerRoute from './Player'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : PlayerRoute(store),
  childRoutes : []
})

export default createRoutes
