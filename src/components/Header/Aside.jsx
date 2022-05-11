import React from 'react';
import jQuery from 'jquery';

import './header.scss';

class Aside extends React.Component{

    componentDidMount(){

        window.onscroll = function scrollFunction(){
            var scroll = jQuery(window).scrollTop();
            if (scroll >= 400) {
                jQuery(".clb-scroll-top").addClass("active");
            } else {
                jQuery(".clb-scroll-top").removeClass("active");
            }
        }
        
        jQuery('.clb-scroll-top').click(function(){
            jQuery("html, body").animate({scrollTop: 0}, 1000);
        });
        
     
    }

render(){
    return(
        <aside className="aside-left"> 
        <div className="acide-container">
            <div className="acide-content">
                <div className="center_nav">
                    <a className="clb-scroll-top">
                        <div className="clb-scroll-top-bar"></div>
                        <div className="clb-scroll-top-span">
                            <p className="font_16_bold">Scroll to top</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </aside>
    );
}
}
export default Aside;



