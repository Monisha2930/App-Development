import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
//import Checkout from './components/Checkout'

function App() {
  return (
      <BrowserRouter>
    <div >
      <Routes> 
        <Route exact path="/" element={<><Header/><Home/></>} />
        <Route exact path="/products" element={<><Header/><Product/></>} />
        <Route exact path="/products/:id" element={<><Header/><ProductDetail/></>} />
        <Route exact path="/cart" element={<><Header/><Cart/></>} />
        {/* <Route exact path="/checkout" element={<><Header/><Checkout/></>} /> */}
        <Route exact path="/about" element={<><Header/><About/></>} />
        <Route exact path="/contact" element={<><Header/><Contact/></>} /> 
      </Routes>
      <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;







// import React , {useState} from 'react';
// import Navbar from './components/Navbar';
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';
// import '../src/assets/Amazon.css'

// const App = () => {
// 	const [show, setShow] = useState(true);
// 	const [cart , setCart] = useState([]);
// 	const [warning, setWarning] = useState(false);

// 	const handleClick = (item)=>{
// 		let isPresent = false;
// 		cart.forEach((product)=>{
// 			if (item.id === product.id)
// 			isPresent = true;
// 		})
// 		if (isPresent){
// 			setWarning(true);
// 			setTimeout(()=>{
// 				setWarning(false);
// 			}, 2000);
// 			return ;
// 		}
// 		setCart([...cart, item]);
// 	}

// 	const handleChange = (item, d) =>{
// 		let ind = -1;
// 		cart.forEach((data, index)=>{
// 			if (data.id === item.id)
// 				ind = index;
// 		});
// 		const tempArr = cart;
// 		tempArr[ind].amount += d;
		
// 		if (tempArr[ind].amount === 0)
// 			tempArr[ind].amount = 1;
// 		setCart([...tempArr])
// 	}

//   return (
// 	<React.Fragment>
// 		<Navbar size={cart.length} setShow={setShow} />
// 		{
// 			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
// 		}
// 		{
// 			warning && <div className='warning'>Item is already added to your cart</div>
// 		}
// 	</React.Fragment>
//   )
// }

// export default App