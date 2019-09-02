import config from './config'

const { bgColor, blocks, size } = config

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

/**
 * Draws a single square block
 *
 * @param {Integer} x      X position
 * @param {Integer} y      Y position
 * @param {String}  color  Color
 */
const drawBlock = (x, y, color) => {
  ctx.beginPath()
  ctx.rect(x * size, y * size, size, size)
  ctx.fillStyle = color || bgColor
  ctx.fill()
  ctx.closePath()
}

/**
 * Draws the board composed of background and fixed pieces
 *
 * @param {Array} board  Board matrix
 */
export const drawBoard = board => {
  for (const x in board)
    for (const y in board[x])
      drawBlock(x, y, board[x][y])
}

/**
 * Draws a piece
 *
 * @param {Piece} piece Piece object
 */
export const drawPiece = piece => {
  for (const [x, y] of blocks[piece.type][piece.rotation])
    drawBlock(piece.x + x, piece.y + y, piece.color)
}
