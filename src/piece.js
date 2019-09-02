
import config from './config'
const { nbRows, nbColumns, colors, blocks } = config

/**
 * Returning a random item from an array
 *
 * @param  {Array} array  an array
 * @return {item}         a random item from the array
 */
const pickRandom = (array) => array[Math.floor(Math.random() * array.length)]

export default class Piece {
  constructor () {
    this.x = nbRows / 2
    this.y = 0
    this.rotation = 0
    this.type = pickRandom(Object.keys(blocks))
    this.color = colors[this.type]
    this.isActive = true
  }

  move (x = 0, y = 0) {
    this.x += x
    this.y += y
  }

  rotate () {
    if (blocks[this.type][this.rotation + 1]) this.rotation++
    else this.rotation = 0
  }

  isCollided (board) {
    if (this.y > nbColumns - 7) return true
    for (const [blockX, blockY] of blocks[this.type][this.rotation])
      if (!board[this.x + blockX] || board[this.x + blockX][this.y + blockY]) return true
    return false
  }

}
