import { Coordinate } from 'components/game/Game.interface'
import * as React from 'react'
import { StyleSheet, Text } from 'react-native'

const Food = ({ x, y }: Coordinate): JSX.Element => {
	return <Text style={{ ...styles.food, top: y * 10, left: x * 10 }}>🍎</Text>
}

const styles = StyleSheet.create({
	food: {
		width: 20,
		height: 20,
		borderRadius: 7,
		position: 'absolute'
	}
})

export { Food }
