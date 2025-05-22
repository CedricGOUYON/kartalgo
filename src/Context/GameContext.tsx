import { type ReactNode, createContext, useContext, useState } from "react";

const dataBase = [
	{
		id: 1,
		question: "What is the capital of France?",
		options: ["Marseille", "Nantes", "Grenoble", "Paris"],
		answer: "Paris",
	},
];

type GameContextType = {
	currentQuestion: (typeof dataBase)[0];
	setCurrentQuestion: React.Dispatch<
		React.SetStateAction<(typeof dataBase)[0]>
	>;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
	const [currentQuestion, setCurrentQuestion] = useState(dataBase[0]);

	return (
		<GameContext.Provider value={{ currentQuestion, setCurrentQuestion }}>
			{children}
		</GameContext.Provider>
	);
}

export const useGame = () => {
	const value = useContext(GameContext);

	if (value == null) {
		throw new Error("useGame has to be used within <GameProvider>");
	}

	return value;
};
