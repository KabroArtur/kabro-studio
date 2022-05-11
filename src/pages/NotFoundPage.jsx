import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return(
            <div className="page-container">
    <section className="resent-projects top-margin">
<div className="content-center">
    <div className="full-title-box col-12">
        <span className="font_14_regular">404</span>
        <h3 className="font_40_medium mt-10">Go ho сука</h3>
    </div>

    <Link to='/'><button className='btn btn-fill'>Go Home</button></Link>

            
  </div>
  
</section>

       </div>
        )
        ;
    }
}
export default NotFoundPage;