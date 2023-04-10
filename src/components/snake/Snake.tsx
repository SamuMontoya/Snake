import { Colors } from 'mock'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { SnakeProps } from './Snake.interface'

const Snake = ({ snake }: SnakeProps): JSX.Element => {
	return (
		<>
			{snake.map((segment: { x: number; y: number }, index: number) => {
				const segmentStyle = {
					left: segment.x * 10,
					top: segment.y * 10
				}
				return <View key={index} style={[styles.snake, segmentStyle]} />
			})}
		</>
	)
}

const styles = StyleSheet.create({
	snake: {
		backgroundColor: Colors.primary,
		width: 15,
		height: 15,
		borderRadius: 8,
		position: 'absolute'
	}
})

export default Snake
