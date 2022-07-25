import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SxProps, Theme } from '@mui/material/styles';
import ThemeProvider from '@mui/system/ThemeProvider';

export default function PreviewPanel(props: {
	sx?: SxProps<Theme>,
	variant: "filled" | "outlined" | "standard",
	theme: Theme,
}) {
	return <div style={{
		backgroundColor: "white",
		flex: 3,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}}>
		<Box sx={{ flex: 1, margin: "40px", }}>
			<ThemeProvider theme={props.theme}>
				<Box sx={{ minWidth: 120 }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Test select</InputLabel>
						<Select
							defaultValue={""}
							variant={props.variant}
							sx={props.sx}
							label="Test select"
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</ThemeProvider>
		</Box>
	</div>
}