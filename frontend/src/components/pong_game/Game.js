import React from 'react'

export default function Game() {
  return (
    <>
    <div className="score">
        <div id="player-score">0</div>
        <div id="computer-score">0</div>
    </div>
    <div className="ball" id="ball"></div>
    <div class="paddle_left" id="player-paddle"></div>
    <div class="paddle_right" id="computer-paddle"></div>
  </>
  )
}
