import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import Layout from './layout/mainLayout/Layout';
import Error from './pages/error/Error';
import CardDetail from './pages/cardDetail/CardDetail';
import { PREFIX } from './api/API';
import axios from 'axios';
import AuthLayout from './layout/authLayout/AuthLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const Menu = lazy(() => import('./pages/menu/Menu'));
const Cart = lazy(() => import('./pages/cart/Cart'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
			},
			{
				path: '/cart',
				element: <Suspense fallback={<>Загрузка...</>}><Cart /></Suspense>
			},
			{
				path: '/product/:id',
				element: <CardDetail />,
				loader: async ({ params }) => {
					return defer({
						data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
					});
				}
			}

		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: '*',
		element: <Error />
	}
	
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
