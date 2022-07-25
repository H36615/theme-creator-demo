import SelectionPanel from "./SelectionPanel";

export default function MainContent() {
	return (<div style={{
		display: "flex",
		flexDirection: "row",
		height: "100vh",
	}}>
		<SelectionPanel/>
	</div>);
}
