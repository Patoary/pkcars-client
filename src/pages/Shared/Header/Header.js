import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../CustomLink/CustomLink';
import auth from '../../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
           <nav className='navbar sticky-top'>
               <h3 className='logo'>PKCARS</h3>
               <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick={()=> setIsMobile(false)}               
               >
                   <CustomLink to='/' className='home'>Home</CustomLink>
                   {
                       user ? <CustomLink to='/manageInventory' className='manageInventory'>Manage Inventory</CustomLink> : ''
                   }
                   {
                       user ? <CustomLink to='/addInventory' className='addInventory'>Add Inventory</CustomLink> : ''
                   }
                   
                   
                   <CustomLink to='/blogs' className='blogs'>Blogs</CustomLink>
                   <CustomLink to='/aboutus' className='aboutus'>About</CustomLink>
                {
                    user? <CustomLink to='/login' className='logout' onClick={()=> signOut(auth)}>Logout</CustomLink>
                    :
                    <CustomLink to='/login' className='login'>Login</CustomLink>
                    

                }
               </ul>
               <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? (<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>)
                        :
                        (<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>)}

                </button>
           </nav>
           <Outlet />
        </>
    );
};

export default Header;