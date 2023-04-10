export interface HeaderProps {
	reloadGame: () => void
	pauseGame: () => void
	isPaused: boolean
	children: JSX.Element
}
