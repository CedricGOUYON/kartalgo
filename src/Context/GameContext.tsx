import { type ReactNode, createContext, useContext, useState } from "react";

const dataBase = [
  {
    id: 1,
    question: "Combien vaut 2 + 2 ?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    id: 2,
    question: "Que fait une boucle 'for' ?",
    options: ["Elle répète des actions", "Elle dort", "Elle supprime du texte", "Elle envoie un e-mail"],
    answer: "Elle répète des actions",
  },
  {
    id: 3,
    question: "Quelle est la bonne façon d'écrire une condition ?",
    options: ["si (age > 10)", "if age > 10", "condition > 10", "check(age)"],
    answer: "si (age > 10)",
  },
  {
    id: 4,
    question: "Comment s’appelle une liste d’objets comme [1, 2, 3] ?",
    options: ["Chaîne", "Nombre", "Tableau", "Texte"],
    answer: "Tableau",
  },
  {
    id: 5,
    question: "Si x = 3, que vaut x + 2 ?",
    options: ["6", "5", "4", "3"],
    answer: "5",
  },
  {
    id: 6,
    question: "À quoi sert une fonction ?",
    options: ["À dessiner", "À éviter d’écrire plusieurs fois le même code", "À décorer la page", "À manger des cookies"],
    answer: "À éviter d’écrire plusieurs fois le même code",
  },
  {
    id: 7,
    question: "Quelle commande permet de montrer quelque chose à l’écran ?",
    options: ["console.log()", "montrer()", "affiche()", "voir()"],
    answer: "console.log()",
  },
  {
    id: 8,
    question: "Si un robot doit faire 5 pas, que faut-il utiliser ?",
    options: ["Une boucle", "Une voiture", "Un tableau", "Une souris"],
    answer: "Une boucle",
  },
  {
    id: 9,
    question: "Quelle est la valeur de : 10 - 3 ?",
    options: ["6", "7", "8", "5"],
    answer: "7",
  },
  {
    id: 10,
    question: "Qu’est-ce qu’un algorithme ?",
    options: ["Une recette avec des étapes", "Une machine", "Un dessin", "Un robot magique"],
    answer: "Une recette avec des étapes",
  },
];

type GameContextType = {
  currentQuestion: (typeof dataBase)[0];
  setCurrentQuestion: React.Dispatch<React.SetStateAction<(typeof dataBase)[0]>>;
  allQuestions: typeof dataBase;
  setAllQuestions: React.Dispatch<React.SetStateAction<typeof dataBase>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [currentQuestion, setCurrentQuestion] = useState(dataBase[0]);
  const [allQuestions, setAllQuestions] = useState(dataBase);
  const [score, setScore] = useState(0);

  return <GameContext.Provider value={{ currentQuestion, setCurrentQuestion, allQuestions, setAllQuestions, score, setScore }}>{children}</GameContext.Provider>;
}

export const useGame = () => {
  const value = useContext(GameContext);

  if (value == null) {
    throw new Error("useGame has to be used within <GameProvider>");
  }

  return value;
};
