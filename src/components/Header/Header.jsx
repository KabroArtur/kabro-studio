import React from "react";
import { Link } from "react-router-dom";
import jQuery from 'jquery';


import './header.scss';

class Header extends React.Component{

    componentDidMount(){

        userMenu();
        function userMenu(){
            const btnMenu =  jQuery('.button_menu-header');
            const btnRemove =  jQuery('.remove');
            const menuUs =  jQuery('.menu_user-header');
            btnMenu.click(function(){
                menuUs.toggleClass('open');
            }); 
            btnRemove.click(function(){
                menuUs.removeClass('open');
            }); 
        }
    }
render(){
return(
    <header>
    <div className="content-center">
        <div className="page-container">
            <div className="page-row">
                <div className="logo_nav col-3"><Link to="/" className="remove">Kabro Studio</Link></div>
                <div className="links_nav col-9">
                    <ul className="nav_list">
                        <li><Link className="remove" to="/shop"><span>Shop products</span></Link></li>
                        <li><Link className="remove" to="/about-us"><span>About us</span></Link></li>
                        <li><Link className="remove" to="/contact"><span>Contact</span></Link></li>
                    </ul>
                    <div className="button_menu-header"><a><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.71 12.71C16.6904 11.9387 17.406 10.8809 17.7572 9.68394C18.1085 8.48697 18.0779 7.21027 17.6698 6.03147C17.2617 4.85267 16.4963 3.83039 15.4801 3.10686C14.4639 2.38332 13.2474 1.99451 12 1.99451C10.7525 1.99451 9.53611 2.38332 8.51993 3.10686C7.50374 3.83039 6.73834 4.85267 6.33021 6.03147C5.92208 7.21027 5.89151 8.48697 6.24276 9.68394C6.59401 10.8809 7.3096 11.9387 8.29 12.71C6.61007 13.383 5.14428 14.4994 4.04889 15.9399C2.95349 17.3805 2.26956 19.0913 2.07 20.89C2.05555 21.0213 2.06711 21.1542 2.10402 21.2811C2.14093 21.4079 2.20246 21.5263 2.28511 21.6293C2.45202 21.8375 2.69478 21.9708 2.96 22C3.22521 22.0292 3.49116 21.9518 3.69932 21.7849C3.90749 21.618 4.04082 21.3752 4.07 21.11C4.28958 19.1552 5.22168 17.3498 6.68822 16.0388C8.15475 14.7278 10.0529 14.003 12.02 14.003C13.9871 14.003 15.8852 14.7278 17.3518 16.0388C18.8183 17.3498 19.7504 19.1552 19.97 21.11C19.9972 21.3557 20.1144 21.5827 20.2991 21.747C20.4838 21.9114 20.7228 22.0015 20.97 22H21.08C21.3421 21.9698 21.5817 21.8373 21.7466 21.6313C21.9114 21.4252 21.9881 21.1624 21.96 20.9C21.7595 19.0962 21.0719 17.381 19.9708 15.9382C18.8698 14.4954 17.3969 13.3795 15.71 12.71ZM12 12C11.2089 12 10.4355 11.7654 9.77772 11.3259C9.11992 10.8864 8.60723 10.2616 8.30448 9.53074C8.00173 8.79983 7.92251 7.99557 8.07686 7.21964C8.2312 6.44372 8.61216 5.73099 9.17157 5.17158C9.73098 4.61217 10.4437 4.2312 11.2196 4.07686C11.9956 3.92252 12.7998 4.00173 13.5307 4.30448C14.2616 4.60724 14.8863 5.11993 15.3259 5.77772C15.7654 6.43552 16 7.20888 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12Z" fill="black"/></svg></a></div>
                    
                    <div className="menu_user-header">
                        <div className="block_menu-header">

                            <ul className="signOut-menu">
                                <li className="main_li_menu remove"><Link to="/signup">Sign up</Link></li>
                                <li className="remove"><Link to="/login">Login</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
);
}
}

export default Header;