import React from 'react'
import './Player.scss'
import Sound from 'react-sound'

const icon = (status) => status === Sound.status.PAUSED ? "icon-play" : "icon-pause"

export const Player = (props) => (
  <div>
      <span className="start">
          <span className={icon(props.status)} onClick={() => {props.play(props.status)}} />
      </span>
      <Sound
          url="https://s3.eu-central-1.amazonaws.com/seebe/1.mp3"
          playStatus={props.status}
          // playFromPosition={300 /* in milliseconds */}
          // onLoading={this.handleSongLoading}
          // onPlaying={this.handleSongPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying} 
      />
    </div>
)

Player.propTypes = {
  status     : React.PropTypes.string.isRequired,
  play       : React.PropTypes.func.isRequired
}

export default Player
