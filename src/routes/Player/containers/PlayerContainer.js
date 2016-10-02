import { connect } from 'react-redux'
import { play } from '../modules/player'
import Player from '../components/Player'

const mapDispatchToProps = {
  play
}

const mapStateToProps = (state) => ({
  status : state.status
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)
