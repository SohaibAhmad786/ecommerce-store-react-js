import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/css/style.css'
import ProductCard from "../component/home/ProductCard";
import { getCategories, getProduct } from '../store/actions/ProductAction';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const AdminView = props => {
	const dispatch = useDispatch();
	const history = useHistory()
	const [selectedCategory, setCategoryValue] = useState('');
	useEffect(() => {
		dispatch(getProduct());
		dispatch(getCategories());
	}, []);



	let itemsList = useSelector(state => state.product.productItems)
	let categoriesList = useSelector(state => state.product.categoriesItems)

	const handleClicked = (item) => {
		history.push("/itemdetail", { item })
	}
	return (
		<>
			<div className='mx-5 mt-5 overflow-x-auto whitespace-nowrap ScrollBar'>
				{categoriesList.length > 0 && <button onClick={() => setCategoryValue('all')} type="button" class={`${selectedCategory === "all" ? 'text-black' : 'text-gray-500'} ${selectedCategory === "all" ? 'bg-[#ffcaa6]' : 'bg-white'} border border-gray-300 focus:outline-none  focus:ring-0 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}>all</button>}
				{
					categoriesList.map((category) => {
						return (
							<button onClick={() => setCategoryValue(category)} type="button" className={`${selectedCategory === category ? 'text-black' : 'text-gray-500'} ${selectedCategory === category ? 'bg-[#ffcaa6]' : 'bg-white'} border border-gray-300 focus:outline-none  focus:ring-0 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}>{category}</button>
						);
					})
				}
			</div>
			<div className='grid grid-cols-12 items-center justify-center gap-8 m-5'>
				{
					!selectedCategory || selectedCategory === 'all' ?
						itemsList
							.map((item, index) => {
								return (
									<ProductCard key={index} data={item} clickEvent={() => handleClicked(item)} />
								);
							}) :
						itemsList
							.filter(e => e.category === selectedCategory)
							.map((item, index) => {
								return (
									<ProductCard key={index} data={item} clickEvent={() => handleClicked(item)} />
								);
							})
				}
			</div>
		</>
	);
};

export default AdminView;
