import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Colors } from 'mock'
import * as React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

interface HeaderProps {
	reloadGame: () => void
	pauseGame: () => void
	children: JSX.Element
	isPaused: boolean
}

const Header = ({
	children,
	reloadGame,
	pauseGame,
	isPaused
}: HeaderProps): JSX.Element => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={reloadGame}>
				<Ionicons name="reload-circle" size={35} color={Colors.primary} />
			</TouchableOpacity>

			<TouchableOpacity onPress={pauseGame}>
				<FontAwesome
					name={isPaused ? 'play-circle' : 'pause-circle'}
					size={35}
					color={Colors.primary}
				/>
			</TouchableOpacity>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 0.05,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 15,
		backgroundColor: Colors.background
	}
})

export { Header }
