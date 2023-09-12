import { atom, useAtom } from "jotai";
import "./App.css";
import { Section } from "./Section";

export const parentAtom = atom(0);

function App() {
	const [p] = useAtom(parentAtom);
	return (
		<div>
			<div>
				<div>parent: {p}</div>
			</div>
			<Section />
		</div>
	);
}

export default App;
