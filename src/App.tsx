import { useState } from "react"
import "./App.css"
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { Login } from "./components/Login"
import { Sample } from "./components/Sample"

function App() {
	const [isLogin, setIsLogin] = useState(false)
	const redirectIfNotLoggedIn = async () => {
		if (!isLogin) {
			throw redirect("/login")
		}
		return null
	}
	const redirectIfLoggedIn = async () => {
		if (isLogin) {
			throw redirect("/dashboard")
		}
		return null
	}

	const router = createBrowserRouter([
		{
			path: "/",
			loader: redirectIfNotLoggedIn,
			element: <Dashboard />,
		},
		{
			path: "/login",
			loader: redirectIfLoggedIn,
			element: <Login isLogin={isLogin} setIsLogin={setIsLogin} />,
		},
		{
			path: "/sample",
			loader: redirectIfNotLoggedIn,
			element: <Sample />,
		},
	])

	return <RouterProvider router={router} />
}

export default App
