import React from 'react'
import './styles.css';
import './Ball.js'
// import './script.js'
import './Paddle.js'


export default function Game() {
  return (
    <>
    <div className="game_wrapper">
    <div className="score">
        <div id="player-score">0</div>
        <div id="computer-score">0</div>
    </div>
    <div className="ball" id="ball"></div>
    <div class="paddle_left" id="player-paddle"></div>
    <div class="paddle_right" id="computer-paddle"></div>
    </div>
  </>
  )
}
