import Piece from './piece'
import { drawPiece, drawBoard } from './draw'
import config from './config'

const { nbRows, nbColumns, refreshRate, blocks } = config

let piece
let time = new Date().getTime()
// let board = new Array(nbRows).fill(
//   new Array(nbColumns).fill(null)
// )
let board = new Array(nbRows)
for (let i = 0; i < nbColumns; ++i) board[i] = new Array(nbColumns).fill(null)

const render = () => {
  if (piece && piece.isCollided(board)) setPiece()
  if (!piece) piece = new Piece()
  drawBoard(board)
  drawPiece(piece)
}

/**
 * Main game loop
 */
const loop = () => {
  const now = new Date().getTime()
  const dt = now - (time || now)
  requestAnimationFrame(loop)
  if (dt > refreshRate) {
    time = now
    piece.move(0, 1)
  }
  render()
}

loop()

/**
 * Sets the piece on the board
 * Then it cannot be moved anymore
 */
const setPiece = () => {
  for (const [x, y] of blocks[piece.type][piece.rotation])
    board[piece.x + x][piece.y + y - 1] = piece.color
  piece = null
}

/**
 * Keyboard commands:
 * - Left arrow   -> move left
 * - Top arrow    -> rotate piece
 * - Right arrow  -> move right
 * - Bottom arrow -> move down faster
 */
document.addEventListener('keydown', event => {
  if (event.keyCode === 37) piece.move(-1, 0)
  else if (event.keyCode === 38) piece.rotate()
  else if (event.keyCode === 39) piece.move(1, 0)
  else if (event.keyCode === 40) piece.move(0, 1)
})
