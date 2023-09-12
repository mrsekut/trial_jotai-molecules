import { atom, useAtom, useSetAtom } from "jotai";
import { parentAtom } from "./App";
import { molecule, useMolecule } from "jotai-molecules";
import { Scope } from "./Section";

const idMolecule = molecule((_, getScope) => {
	getScope(Scope);
	return atom<number>(0);
});

export const Child: React.FC = () => {
	const idAtom = useMolecule(idMolecule);
	const [value, setValue] = useAtom(idAtom);
	const setParent = useSetAtom(parentAtom);

	return (
		<div>
			<div>{value}</div>
			<button onClick={() => setValue((value) => value + 1)}>value++</button>
			<button onClick={() => setParent((value) => value + 1)}>parent++</button>
		</div>
	);
};
