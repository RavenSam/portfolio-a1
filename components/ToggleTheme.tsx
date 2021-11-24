import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	// Change the mode if light turn it dark, if dark turn it light
	const toggleMode = () => setTheme(currentTheme === "dark" ? "light" : "dark");

	// Change the icon on the button
	const ToggleIcon = currentTheme === "dark" ? HiSun : HiMoon;

	return (
		<button
			onClick={toggleMode}
			className="absolute z-10 top-2 text-center text-2xl left-2 w-10 h-10 rounded-full text-black dark:text-white bg-gray-400 dark:bg-gray-200 bg-opacity-30 dark:bg-opacity-30"
		>
			<ToggleIcon className="mx-auto" />
		</button>
	);
}
