import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, logout, db } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Loading from '../../components/Loading';

function Dashboard() {

  const [user, loading] = useAuthState(auth);
  const [image , setImage] = useState("");
  const [url , setUrl] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const storage = getStorage();

  const fetchUserName = async () => {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    
  };
  
  const upload = ()=>{
    const storageRef = ref(storage, `usersAvatar/${image.name}`);

    if(image == null) return;
    uploadBytes(storageRef, image).then(() =>{
      getDownloadURL(storageRef).then((url) => {
        setUrl(url);
      })
    })
  }
    

  useEffect(() => {

    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  }, [user, loading]);
  
  return (
    <>
    <Loading name="Loading your account" time="800">
    <div className="page-container">
       <div className="content-center top-margin">
        Logged in as
         {/* <div>{user.displayName}</div> */}
         <div>{user?.email}</div>
         <button className="btn" onClick={logout}>Logout</button>
          <img src={url}/>
         <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
          <button onClick={upload}>Upload</button>
       </div>
     </div>
     </Loading>
    </>
    );
  
}
export default Dashboard;