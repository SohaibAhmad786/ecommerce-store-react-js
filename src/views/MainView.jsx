import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import '../assets/css/style.css'
import ProductCard from "../component/home/ProductCard";
import { getProduct } from '../store/actions/ProductAction';


const AdminView = props => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProduct());
	}, []);


	let itemsList = useSelector(state => state.product.productItems)
	return (
		<>
			<div className='grid grid-cols-12 items-center justify-center gap-8 m-5'>
				{
					itemsList.map((item, index) => {
						return (
							<ProductCard key={item.id} data={item} />
						);
					})
				}
			</div>
		</>
	);
};

export default AdminView;
