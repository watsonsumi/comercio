import { createBrowserRouter, BrowserRouter,  Routes, Route, Navigate } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import HomePage from '../pages/HomePage';
import SolicitudPage from '../pages/SolicitudPage';
import NavBarLayout from '../layouts/NavBarLayout';
import LoginPage from '../pages/LoginPage';
import { useSelector } from 'react-redux';
const estado = localStorage.getItem('user');
JSON.parse(localStorage.getItem('user'));
console.log(estado);
// const { isAuthenticated } = useSelector(store => store.Auth);
// console.log(isAuthenticated);
// export const router = createBrowserRouter([
// 	{
// 		element: <PrivateRoutes />,
// 		children: [
// 			{
// 				element: <NavBarLayout />,
// 				children: [
// 					{
// 						path: '/home',
// 						element: <HomePage />,
// 					},
// 					{
// 						path: '/service',
// 						element: <SolicitudPage />,
						
// 					},
// 					{
// 						path: '/settings',
// 					},
// 					{
// 						path: '*',
// 						element: <Navigate to='/home' />,
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		element: <PublicRoutes />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <LoginPage />,
// 			},
// 		],
// 	},
// ]);
 function RoutesP() {
	const { isAuthenticated } = useSelector(store => store.Auth);
	console.log(isAuthenticated);
<BrowserRouter>
<Routes>
	<Route
		path='/'
		element={ <LoginPage />}
	/>

</Routes>
</BrowserRouter>
}
export default RoutesP;
