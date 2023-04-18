
import Header from "./Header";

import { useTheme } from "../context/ThemeContext";
import Profile from "./Profile";
import ButtonContext from "./ButtonContext";

function Container() {
	const { theme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Header />
			<hr />
			<ButtonContext />

			<hr />
			<Profile />
		</div>
	);
}

export default Container;