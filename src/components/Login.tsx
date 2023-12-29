import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Login: React.FC<{
	isLogin: boolean
	setIsLogin: React.Dispatch<boolean>
}> = ({ isLogin, setIsLogin }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		setIsLogin(true)
	}
	useEffect(() => {
		navigate("/") // ここをログイン画面に遷移してくる前のURLにしたい
	}, [isLogin])
	return <button onClick={handleClick}>Login</button>
}
