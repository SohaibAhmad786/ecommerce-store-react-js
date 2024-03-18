import Header from '../component/header/Header'

const Main = props => {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
};

export default Main;
