import React from 'react'
import './table_styles.css'

export default function Table1() {
  return (
    <>
    <div className ="table1_wrapper">
    <div class="winner hide"></div>
    <div class="play-again hide">Loading...</div>
    <div class="table-grid">
        
        <div class="seat">
            <div class="player-name">Player 1</div>
            <div class="chip-count">2000</div>
            <div class="chip-deduction hide">-75</div>
            <div class="chip-addition hide">+300</div>
            <div class="bust-text hide">BUST!</div>
            <div class="score"></div>
            <div class="bust-ele red hide"></div>
            <div class="btn-container hide">
                <div class="hit-btn game-btn">Hit</div>
                <div class="stay-btn game-btn">Stay</div>
            </div>
            <div class="player">
                    <div class="hand">
                    </div>
            </div>
        </div>
        <div class="seat">
            <div class="player-name">Player 2</div>
            <div class="chip-count">2000</div>
            <div class="chip-deduction hide">-75</div>
            <div class="chip-addition hide">+300</div>
            <div class="bust-text hide">BUST!</div>
            <div class="score"></div>
            <div class="bust-ele red hide"></div>
            <div class="btn-container hide">
                <div class="hit-btn game-btn">Hit</div>
                <div class="stay-btn game-btn">Stay</div>
            </div>
            <div class="player">
                    <div class="hand">
                    </div>
            </div>
        </div>
        <div class="seat">
            <div class="player-name">Player 3 </div>
            <div class="chip-count">2000</div>
            <div class="chip-deduction hide">-75</div>
            <div class="chip-addition hide">+300</div>
            <div class="bust-text hide">BUST!</div>
            <div class="score"></div>
            <div class="bust-ele red hide"></div>
            <div class="btn-container hide">
                <div class="hit-btn game-btn">Hit</div>
                <div class="stay-btn game-btn">Stay</div>
            </div>
            <div class="player">
                    <div class="hand">
                        
                    </div>
            </div>
        </div>
        <div class="seat">
            <div class="player-name">Player 4</div>
            <div class="chip-count">2000</div>
            <div class="chip-deduction hide">-75</div>
            <div class="chip-addition hide">+300</div>
            <div class="bust-text hide">BUST!</div>
            <div class="score"></div>
            <div class="bust-ele red hide"></div>
            <div class="btn-container hide">
                <div class="hit-btn game-btn">Hit</div>
                <div class="stay-btn game-btn">Stay</div>
            </div>
            <div class="player">
                    <div class="hand">
                    </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
