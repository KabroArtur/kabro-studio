import React,{useState, useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import {db} from '../firebase';
import {motion} from 'framer-motion';

import Loading from '../components/Loading';
import Cards from '../components/Cards/Cards';
import Talk from '../components/Footer/Talk';

function Shop(){

    const [posts, setPosts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const postsCollectionRef = collection(db , "posts");

    const menuItems = [...new Set(posts.map((Val) => Val.category))];

    useEffect(() => {
       
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            const posts = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setPosts(posts);
            setFiltered(posts);
          }
        
        getPosts();
       }, [])
   
    // filter function  
    const filterItem = (category) => {
        
        const newItem = posts.filter(newVal =>  newVal.category === category);
        setFiltered(newItem);
    };
  

    return(
        <>
        <Loading name="Loading products..." time="800">
            <section className="resent-projects mt-100">
            <div className="page-container">
                <div className="content-center flex-center">
                    <motion.div
                    animate={{y: 0}} 
                    initial={{y: 100}} 
                    exit={{y:0}}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 50
                      }}
                    className="full-title-box col-12">
                        <h3 className="font_70_bold mt-10">Better design for your digital products.</h3>
                        <p className='font_16_regular mt-30'>We are a creative studio specializing in UI/UX design, developmentand strategy. Let’s create something together</p>
                    </motion.div>
                </div>

                <motion.div
                    animate={{y: 0}} 
                    initial={{y:100}} 
                    exit={{y:0}}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 80}} 
                    className="category_shop flex-center mt-100">
                <ul>   
                <li  onClick={()=> setFiltered(posts)}><a>All</a><span></span></li>
                {
                menuItems.map((Val, id)=>{
                    return <li key={id} onClick={()=> filterItem(Val)}><a>{Val}</a><span></span></li>
                })
                }     
                </ul>
                </motion.div>

                <div className="container-galary mt-10">
                    <motion.div
                    animate={{y: 0}} 
                    initial={{y:100}} 
                    exit={{y:0}}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 100}} 
                    className="gallery-row">
                    {
                    filtered.map((posts, i) => {
                        return( <Link key={i} to={'/product/' + posts.id}><Cards p='font_16_regular mt-6' h4='font_40_medium' src={posts.url} title={posts.title} text={posts.miniText}/></Link>)
                    })
                    }                    
                    </motion.div>
                </div>
            </div>
            </section>
            <Talk/>
            </Loading>
            </>
    );
}
export default Shop;