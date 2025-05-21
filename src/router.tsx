import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Game from "./Pages/Game/Game";
import NotFound from "./Pages/NotFound/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "login", element: <Login /> },
			{ path: "game", element: <Game /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);
export default router;
