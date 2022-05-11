import React,{useState, useEffect} from 'react';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc} from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


import {db} from '../../firebase';
 
import './add.scss';

function Add(){

    const postsCollectionRef = collection(db , "posts");

    const [posts, setPosts] = useState([]);
    const [image , setImage] = useState("");
    const [url , setUrl] = useState("");
    const storage = getStorage();

    const [newTitle, setNewTitle] = useState("");
    const [newtext, setNewText] = useState("");
    const [newMinitext, setNewMiniText] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [category, setCategory] = useState("");


    const addPosts = async () => {
        await addDoc(postsCollectionRef, { title: newTitle, text: newtext, url: url, category: category, miniText: newMinitext, price: newPrice});
      };


      //upload function
      const upload = ()=>{
        const storageRef = ref(storage, `images/${posts.category}/${posts.title}/${image.name}`);

        if(image == null) return;
        uploadBytes(storageRef, image).then(() =>{
          getDownloadURL(storageRef).then((url) => {
            setUrl(url);
          })
        })
      }
   
      useEffect(() => {
       
        // get posts
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };

      getPosts();
      }, []);

  const confirmPost = () =>{
    confirmModal("Создать новый пост?", addPosts(), upload())
  }
  
  function confirmModal(modalText, func){
      if(window.confirm(modalText)){
          return  func;
      }
}
    


return(
    <>
    <div className="page-container">
    <section className="resent-projects top-margin">
      <div className="form-container">
        <div className="form-block">
          <div className="left-block">
            <div className="form">
                  <div className="header-form">
                    <h2>Create new product</h2>
                  </div>
              <hr/>
              <select name="select" onChange={(e) => setCategory(e.target.value)}>
                <option value="select" selected>Выбери категорию</option>
                <option value="Web sites">Web site</option>
                <option value="2D Illustration">2D Illustration</option>
                <option value="3D Illustration">3D Modal</option>
              </select>
              <hr/>
              <input name='title' type="text" className="light" onChange={(e) => setNewTitle(e.target.value)} placeholder="First title" />
              <hr/>
              <textarea cols="30" rows="10" onChange={(e) => setNewText(e.target.value)}></textarea>
              <hr/>
              <input type="text" className="light" onChange={(e) => setNewMiniText(e.target.value)} placeholder="Mini text" />
              <hr/>
              <input name='images' type="file" className="light" onChange={(e)=>{setImage(e.target.files[0])}}/>
              <hr/>
              <input type="text" className="light" onChange={(e) => setNewPrice(e.target.value)} placeholder="Price"/>
             {/* {
               // ошибкы с галиреей
               error && <div className='error'>{error}</div>
             } */}

              <button className="btn btn-fill" onClick={confirmPost}>
                Add new products
              </button>
              </div>
            </div>

            <div className="right-block">
            {posts.map((posts, i) => {
            return (
                  <Link key={i} to={'/productAdmin/' + posts.id} className="btn btn-link"> 
                    <p>Id products - "{posts.id}"</p>
                    <p>Title product - "{posts.title}"</p>
                  </Link>
            )
            })}       
            </div>
            </div>
          </div>
    </section>
    </div>
    </>
);
}

export default Add;
