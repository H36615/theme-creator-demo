import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PreviewPanel from './PreviewPanel';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { grey, purple, yellow } from '@mui/material/colors';

enum Variant {
	outlined = "outlined",
	filled = "filled",
	standard = "standard",
}

export default function SelectionPanel() {

	const [variant, setVariant] = useState<Variant>(Variant.outlined);
	const [borderRadius, setBorderRadius] = useState<string>("");
	const [themeOptions, setThemeOptions] = useState({
		palette: {
			primary: {
				main: grey[500] as string,
			},
			secondary: {
				main: grey[500] as string,
			},
		},
	});
	const [theme, setTheme] = useState(createTheme(themeOptions));

	return <div
		style={{
			backgroundColor: "#e9e9e9",
			width: "100%",
			display: "flex",
			flexDirection: "row",
		}}>
		<Box style={{flex: 2, display: "flex", margin: "40px", flexDirection: "column", gap: "20px", }} >
			<Box sx={{ minWidth: 120, }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Variant</InputLabel>
					<Select
						defaultValue={Variant.filled}
						label="Variant"
						onChange={event => {
							setVariant(event.target.value as Variant);
						}}
					>
					<MenuItem value={Variant.filled}>filled</MenuItem>
					<MenuItem value={Variant.outlined}>outlined</MenuItem>
					<MenuItem value={Variant.standard}>standard</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Box sx={{ minWidth: 120, }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Border</InputLabel>
					<Select
						defaultValue={""}
						label="Variant"
						onChange={event => {
							setBorderRadius(event.target.value as string);
						}}
					>
					<MenuItem value={""}>default</MenuItem>
					<MenuItem value={"0"}>none</MenuItem>
					<MenuItem value={"6px"}>round</MenuItem>
					<MenuItem value={"20px"}>mega round</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Box sx={{ minWidth: 120, }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Theme</InputLabel>
					<Select
						defaultValue={"gray"}
						label="Variant"
						onChange={event => {
							const value = event.target.value as string;
							const _themeOptions = themeOptions;

							if (value === "gray")
								_themeOptions.palette.primary.main = grey[500];
							
							if (value === "yellow")
								_themeOptions.palette.primary.main = yellow[500];

							if (value === "purple")
								_themeOptions.palette.primary.main = purple[500];

							setThemeOptions(_themeOptions);
							setTheme(createTheme(themeOptions));
						}}
					>
					<MenuItem value={"gray"}>gray</MenuItem>
					<MenuItem value={"yellow"}>yellow</MenuItem>
					<MenuItem value={"purple"}>purple</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Box>
		<PreviewPanel variant={variant} sx={{borderRadius,}} theme={theme}/>
	</div>
}