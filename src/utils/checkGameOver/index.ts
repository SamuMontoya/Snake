import { Coordinate } from 'components/game/Game.interface'
import { Boundaries } from './checkGameOver.interface'

const checkGameOver = (
	snakeHead: Coordinate,
	boundaries: Boundaries
): boolean => {
	return (
		snakeHead.x < boundaries.xMin ||
		snakeHead.x > boundaries.xMax ||
		snakeHead.y < boundaries.yMin ||
		snakeHead.y > boundaries.yMax
	)
}

export { checkGameOver }
