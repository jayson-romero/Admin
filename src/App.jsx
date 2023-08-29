import Layout from "./layout/Layout"
import HomeLayout from "./pages/Home/HomeLayout"
import UserListLayout from "./pages/UserList/UserListLayout"
import UserLayout from "./pages/User/UserLayout"
import User from "./pages/User/User"
import Other2 from "./pages/other/Other2"
import NotFound from "./pages/NotFound"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Layout />}>
					<Route path="" index element={<HomeLayout />} />
					<Route path="userlist" element={<UserListLayout />} />
					<Route path="user/:userId" element={<UserLayout />} />
					<Route path="other" index element={<Other2 />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</>
		)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
