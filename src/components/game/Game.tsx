import { Food } from 'components/food/Food'
import { Header } from 'components/header'
import Snake from 'components/snake/Snake'
import {
	Colors,
	FOOD_INITIAL_POSITION,
	GAME_BOUNDS,
	MOVE_INTERVAL,
	SNAKE_INITIAL_POSITION,
	SOCORE_INCREMENT
} from 'mock'
import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { checkGameOver } from 'utils'
import { checkEatsFood } from 'utils/checkEatsFood'
import { randomFoodPosition } from 'utils/randomFoodPosition'
import { Coordinate, Direction, GestureEventType } from './Game.interface'

const Game = (): JSX.Element => {
	const [direction, setDirection] = React.useState<Direction>(Direction.Right)
	const [isGameOver, setIsGameOver] = React.useState<boolean>(false)
	const [isPaused, setIsPaused] = React.useState<boolean>(false)
	const [snake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITIAL_POSITION)
	const [food, setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION)
	const [score, setScore] = React.useState<number>(0)

	React.useEffect(() => {
		if (!isGameOver) {
			const intervalID = setInterval(() => {
				if (!isPaused) {
					moveSnake()
				}
			}, MOVE_INTERVAL)
			return () => clearInterval(intervalID)
		}
		return undefined
	}, [isGameOver, snake, isPaused])

	const moveSnake = (): void => {
		const snakeHead = snake[0]
		const newHead = { ...snakeHead }

		if (checkGameOver(snakeHead, GAME_BOUNDS)) {
			setIsGameOver(prev => !prev)
			return
		}

		switch (direction) {
			case Direction.Up:
				newHead.y -= 1
				break
			case Direction.Down:
				newHead.y += 1
				break
			case Direction.Left:
				newHead.x -= 1
				break
			case Direction.Right:
				newHead.x += 1
				break
			default:
				break
		}

		if (checkEatsFood(newHead, food, 2)) {
			setSnake([newHead, ...snake])
			setFood(randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax))
			setScore(score + SOCORE_INCREMENT)
		} else {
			setSnake([newHead, ...snake.slice(0, -1)])
		}
	}

	const handleGesture = (event: GestureEventType): void => {
		const { translationX, translationY } = event.nativeEvent
		if (Math.abs(translationX) > Math.abs(translationY)) {
			setDirection(translationX > 0 ? Direction.Right : Direction.Left)
		} else {
			setDirection(translationY > 0 ? Direction.Down : Direction.Up)
		}
	}

	const reloadGame = (): void => {
		setSnake(SNAKE_INITIAL_POSITION)
		setFood(FOOD_INITIAL_POSITION)
		setIsGameOver(false)
		setScore(0)
		setDirection(Direction.Right)
		setIsPaused(false)
	}

	const pauseGame = (): void => {
		setIsPaused(!isPaused)
	}

	return (
		<PanGestureHandler onGestureEvent={handleGesture}>
			<SafeAreaView style={styles.container}>
				<View style={styles.boundaries}>
					<Header
						reloadGame={reloadGame}
						pauseGame={pauseGame}
						isPaused={isPaused}
					>
						<Text>{score}</Text>
					</Header>
					<Snake snake={snake} />
					<Food x={food.x} y={food.y} />
				</View>
			</SafeAreaView>
		</PanGestureHandler>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: Colors.primary
	},
	boundaries: {
		flex: 1,
		borderWidth: 12,
		borderColor: Colors.primary,
		borderRadius: 30,
		backgroundColor: Colors.background
	}
})

export { Game }
