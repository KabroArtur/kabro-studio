import React,{useState, useEffect} from 'react';
import PaypalCheckout from '../../components/PaypalCheckout';
import { doc, getDoc } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';
import {db} from '../../firebase';
import StickyBox from "react-sticky-box";
import {motion, useAnimation} from 'framer-motion';
import Loading from '../../components/Loading';

import Talk from '../../components/Footer/Talk';
import Button from '../../components/Button/Button';
import './product.scss';


const ProductPage = () => {
    const product ={
        description: 'Product 1',
        price: 301
    }

    const { postsid } = useParams();
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {

        const getPosts = async () => {
            const blogRef= doc(db, "posts", postsid)
            const data = await getDoc(blogRef);
            if (data.exists()) {
                setPosts(data.data())
            }
        }
        getPosts();
       }, [])


   return(
       <>
       <Loading name="Loading..." time="800">
       <section className='product-section'>
        <div className="page-container"> 
            <div className='page-row product-content'>
                <div className="left-gallery col-6">
                    <div className="item-gallery">
                        <img src={posts.url} alt=""/>
                    </div>
                    <div className="item-gallery">
                        <img src={posts.url} alt=""/>
                    </div>
                    <div className="item-gallery">
                        <img src={posts.url} alt=""/>
                    </div>
                </div>
                <StickyBox offsetBottom={140} offsetTop={140} className="right-inform col-6">
                    <motion.div
                        animate={{y: 0}} 
                        initial={{y: 120}}  
                        transition = {{ type: "spring", stiffness: 260, damping: 60}}
                        exit={{y: 0}}
                        className="fixed-block">
                        <div className="full-title-box col-12">
                            <span className="font_16_regular category_link"><Link to="/shop">{posts.category}</Link></span>
                            <h3 className="font_32_bold mt-10">{posts.title}</h3>
                        </div>
                            <p className='font_18_regular price_text'>{posts.price}</p>
                            <p className='font_16_regular'>{posts.text}</p>
                            <hr />
                            <div className="paypal-button-container">
                                <PaypalCheckout product={product} />
                            </div>
                    </motion.div>
                </StickyBox> 
            </div>  
        </div>  
    </section>
    <Talk/>
    </Loading>
    </>
   );

}
export default ProductPage;