import { atom, useAtom } from "jotai";
import { Child } from "./Child";
import { ScopeProvider, createScope } from "jotai-molecules";

export const Scope = createScope(0);

export const Section: React.FC = () => {
	const { fieldIds, add } = useFields();

	return (
		<div className="grid gap-4">
			{fieldIds.map((id) => (
				<ScopeProvider key={id} scope={Scope} value={id}>
					<Child />
				</ScopeProvider>
			))}

			<div className="grid justify-center">
				<button onClick={add}>+</button>
			</div>
		</div>
	);
};

type FieldId = number;

const fieldIdsAtom = atom<FieldId[]>([0]);

const useFields = () => {
	const [fieldIds, setFieldIds] = useAtom(fieldIdsAtom);

	const add = () => {
		setFieldIds((ids) => [...ids, ids.length]);
	};

	const remove = (id: FieldId) => {
		setFieldIds((ids) => ids.filter((i) => i !== id));
	};

	return {
		fieldIds,
		add,
		remove,
	};
};
