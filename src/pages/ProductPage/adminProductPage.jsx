import React,{useState, useEffect} from 'react';
import { doc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import StickyBox from "react-sticky-box";

import Talk from '../../components/Footer/Talk';
import { useParams, Link } from 'react-router-dom';
import {db} from '../../firebase';

const ProductPage = () => {

    const { postsidAdmin } = useParams();
    const [posts, setPosts] = useState([]);

    const deletePosts = async (id) => {
        const postsDoc = doc(db, "posts", id);
        await deleteDoc(postsDoc);
    };

    useEffect(() => {

        const getPosts = async () => {
            const blogRef= doc(db, "posts", postsidAdmin)
            const data = await getDoc(blogRef);
            if (data.exists()) {
                setPosts(data.data())
            }
        }
        getPosts();
       }, [])

       const confirmDelete = (id) =>{
        const modal = confirmModal("Удалить пост?", deletePosts(id))
        
      }

      function confirmModal(modalText, func){
          if(window.confirm(modalText)){
              return  func;
          }
    }


   return(
    <>

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
                    <div className="fixed-block">
                        <div className="full-title-box col-12">
                            <span className="font_16_regular category_link"><Link to="/shop">{posts.category}</Link></span>
                            <h3 className="font_32_bold mt-10">{posts.title}</h3>
                        </div>
                            <p className='font_18_regular price_text'>{posts.price}</p>
                            <p className='font_16_regular'>{posts.text}</p>
                            <hr />
                            <button className="btn btn-black">Buy with Pay Pal</button>
                            <button className='btn btn-stroke main-btn' onClick={() => {confirmDelete(postsidAdmin)}}>Delete</button>
                        </div>
                </StickyBox> 
            </div>  
        </div>  
    </section>
    <Talk/>
 </>    
   );

}
export default ProductPage;