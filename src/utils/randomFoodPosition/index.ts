import { Coordinate } from 'components/game/Game.interface'

const randomFoodPosition = (maxX: number, maxY: number): Coordinate => {
	return {
		x: Math.floor(Math.random() * maxX),
		y: Math.floor(Math.random() * maxY)
	}
}

export { randomFoodPosition }
