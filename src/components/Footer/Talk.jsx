import React from 'react';
import Button from '../Button/Button';

const Talk = () =>{
    return(
        <>
        <section className="talk dark-section">
            <div className="page-container">
                <div className="talk-content">
                    <div className="talk-top">
                        <div className="talk-title">
                            <span className="font_16_regular">LET’S TALK</span>
                            <h3 className="font_50_bold">Got a project?</h3>
                        </div>
                        <Button className="btn btn-stroke white-btn">Let's Talk</Button>
                        </div>
                    <hr/>
                        <p className="font_16_regular op-8">Great ideas aren’t industry specific. We work with clients of all scopes and sectors to create better experiences through design. Whether an adventurous startup or established global presence, the same level of detail and quality is delivered.</p>
                </div>
            </div>
    </section>
    </>
    );
}
export default Talk;