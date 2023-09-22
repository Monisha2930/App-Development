import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from '../redux/userSlice'

const Header = () => {
    const user = useSelector(selectUser);
    return (
       <div className='header123'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">
                        ZEN MART
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div>
                            {user != null ? (<div className='nav-lrc'><p>{user.username}</p><CartBtn/></div> ) : (<div className='nav-lrc'>
                                <Login/>
                    <Signup/>
                    
                            </div>)}
                        </div>
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Header



// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import CartBtn from './buttons/CartBtn'
// import Login from './buttons/Login'
// import Signup from './buttons/Signup'

// const Header = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid py-2">
                    
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/products">Product</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/about">About</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                             </li>
                            
                            
//                         </ul>
//                     <NavLink className="navbar-brand mx-auto fw-bold" to="/">GIFT SHOP</NavLink>
//                     <Login/>
//                     <Signup/>
//                     <CartBtn/>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Header