import { toast } from 'react-hot-toast';
import logo from '../assets/Logo.svg';
import {Link} from "react-router-dom";

function Navbar(props) {

    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;

    return ( 
        <div className=' absolute top-0 left-0 right-0 flex justify-evenly pt-4 max-xs:flex-col max-xs:items-center max-xs:gap-2'>
            <div>
                <Link to='/'>
                <img alt='logo' width={160} height={32} loading="lazy" src={logo}></img>
                </Link>
            </div>
            <nav>
                <ul  className='flex gap-3 text-white'> 
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='./about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex ml-5 mr-3 gap-3 text-white'>
                {   !isLoggedIn &&
                    <Link to='./login'>
                        <button className='py-1 px-4 bg-yellow-500 hover:bg-yellow-600'>Login</button>
                    </Link>
                }
                {   !isLoggedIn &&
                    <Link to='./signup'>
                        <button className='py-1 px-4 bg-yellow-500 hover:bg-yellow-600'>Signup</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to='./dashboard'>
                        <button className='py-1 px-4 bg-yellow-500 hover:bg-yellow-600'>Dashboard</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to='./'>
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }} className='py-1 px-4 bg-yellow-500 hover:bg-yellow-600'>Logout</button>
                    </Link>
                }
            </div>
        </div>
     );
}

export default Navbar;