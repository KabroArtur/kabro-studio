import React from 'react';
import {motion} from 'framer-motion';

class Cards extends React.Component{

    render(){
        return(
            <>
            <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
             layout 
             className="item-g">
                <div className="img-item">
                    <img src={this.props.src} alt="image"/>
                </div>
                <div className="title-item">
                    <h4 className={this.props.h4}>{this.props.title}</h4>
                    <p className={this.props.p}>{this.props.text}</p>
                </div>
            </motion.div>
            </>
        );
    }
}
export default Cards;