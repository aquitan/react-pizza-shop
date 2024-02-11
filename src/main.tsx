import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './pages/menu/Menu';
import Cart from './pages/cart/Cart';
import Layout from './layout/Layout';
import Error from './pages/error/Error';
import CardDetail from './pages/cardDetail/CardDetail';
import { PREFIX } from './api/API';
import axios from 'axios';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Menu />
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <CardDetail />,
				loader: async ({ params }) => {
					const data = await axios.get(`${PREFIX}/products/${params.id}`);
					return data;
				}
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
