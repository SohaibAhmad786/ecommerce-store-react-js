import AuthView from '../views/auth/AuthView';
import MainView from '../views/MainView';
import ItemDetail from "../views/item_details/Item_Detail";
import Cart from '../views/cart/cart';



let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: MainView,
		layout: 'main',
	},
	{
		path: '/itemdetail',
		component: ItemDetail,
		layout: 'main',
	},
	{
		path: '/cart',
		component: Cart,
		layout: 'main',
	},
];
export default routes;