import React from 'react';
import Loading from '../components/Loading';
import jQuery from 'jquery';



const About = () => {

    function slideFaq(){
        jQuery('.item_question .title_question').click(function(){
            var toggle = jQuery(this).next('div.answer_faq');
            jQuery(toggle).slideToggle("medium");
        });
        jQuery('.inactive').click(function(){
            jQuery(this).toggleClass('inactive actived');
        });
    }

    return(
        <Loading name="About..." time="600">

<main>
    <section className="hero-about">
    </section>
        
    <section className="about-info">
        <div className="page-container">
            <div className="page-row">

                <div className="block-resource col-6">
                    <div className="block-container">
                        <div className="block-content">
                            <div className="res-title">
                                <span className="font_16_regular sec-color">CAPABILITIES</span>
                                <h3 className="font_40_medium">Putting our focus on changing the way people think of mobile experience.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block-resource col-6">
                    <div className="block-container">
                    <div className="faq_cotainer_question">

                        <div className="item_question">
                            <div className="title_question inactive">
                                <span></span>
                                <h4 className="font_16_bold">Web Apps & Corporate Site</h4>
                            </div>
                            <div className="answer_faq">
                                <p className="">We team up with marketing departments of companies & startups to deliver user-centered websites.</p>
                            </div>
                        </div>

                        <div className="item_question">
                            <div className="title_question inactive">
                                <span></span>
                                <h4 className="font_16_bold">Web Apps & Corporate Site</h4>
                            </div>
                            <div className="answer_faq">
                                <p className="">We team up with marketing departments of companies & startups to deliver user-centered websites.</p>
                            </div>
                        </div>

                        <div className="item_question">
                            <div className="title_question inactive">
                                <span></span>
                                <h4 className="font_16_bold">Web Apps & Corporate Site</h4>
                            </div>
                            <div className="answer_faq">
                                <p className="">We team up with marketing departments of companies & startups to deliver user-centered websites.</p>
                            </div>
                        </div>
                        </div>     
                    </div>
                </div>

            </div>
        </div>
    </section>
</main>

        </Loading>
    );
}
export default About;