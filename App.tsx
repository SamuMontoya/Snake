import { Game } from 'components/game'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = (): JSX.Element => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Game />
		</GestureHandlerRootView>
	)
}

export default App
