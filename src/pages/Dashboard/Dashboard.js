import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, logout, db } from "../../firebase";

import Loading from '../../components/Loading';
import Cards from '../../components/Cards/Cards';


import './dashboard.scss';

function Dashboard() {

  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([0]);
  const [visible, setVisible] = useState(2);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const postsCollectionRef = collection(db , "posts");

  const fetchUserName = async () => {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      setName(user.displayName);
  };


    useEffect(() => {


        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        
        getPosts();
       })

  useEffect(() => {

    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  }, [user, loading]);
  
  return (
    <>
    <Loading name="My account" small="#STOP UKRAINE WAR">
  <section className="info-users">
    <div className="page-container">
      <div className="content-left content-info-users">
        <div className="ava-users">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"/>
        <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"/>
        </svg>
        </div>
          <div className="full-title-box col-12">
              <span className="font_16_regular sec-color">Welcome, guy</span>
              <h3 className="font_40_medium w-400 mt-10">
              {name}</h3>
              <p>{user?.email}</p>
          </div>
          <button className="btn btn-stroke main-btn" onClick={logout}>
            Logout
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"/>
            <path d="M4.56141 11.2498L6.63141 9.17984C6.78141 9.02984 6.85141 8.83984 6.85141 8.64984C6.85141 8.45984 6.78141 8.25984 6.63141 8.11984C6.34141 7.82984 5.86141 7.82984 5.57141 8.11984L2.22141 11.4698C1.93141 11.7598 1.93141 12.2398 2.22141 12.5298L5.57141 15.8798C5.86141 16.1698 6.34141 16.1698 6.63141 15.8798C6.92141 15.5898 6.92141 15.1098 6.63141 14.8198L4.56141 12.7498H9.00141V11.2498H4.56141Z"/>
            </svg>
            </button>
      </div>
      <div className="purchases-contant mt-100">
      <div className="purchases-box">
        <span className="font_16_regular sec-color">Your purchases</span>
        <h3 className="font_32_bold w-400 mt-10">Purchased items</h3>
        <hr/>
      </div>
      <div className="gallery-column">  
                {
                  (!posts) ? 
                    posts.slice(0,visible).map((posts, i) => {
                    return (
                    <Link className="item-purchases" key={i} to={'/product/' + posts.id}>
                      <div className="item-content-purchases">
                        <img src={posts.url} />
                        <div className="item-title-purchases">
                          <h2>{posts.title}</h2>
                          <p>{posts.miniText}</p>
                          <p className="font_18_regular">{posts.price}</p>
                        </div>
                        <button className="btn btn-stroke main-btn" onClick={logout}>
                        Download
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.47 10.98C8.76 10.69 9.24 10.69 9.53 10.98L11.25 12.7V6.51C11.25 6.1 11.59 5.76 12 5.76C12.41 5.76 12.75 6.1 12.75 6.51V12.7L14.47 10.98C14.76 10.69 15.24 10.69 15.53 10.98C15.82 11.27 15.82 11.75 15.53 12.04L12.53 15.04C12.46 15.11 12.38 15.16 12.29 15.2C12.2 15.24 12.1 15.26 12 15.26C11.9 15.26 11.81 15.24 11.71 15.2C11.62 15.16 11.54 15.11 11.47 15.04L8.47 12.04C8.18 11.75 8.18 11.28 8.47 10.98ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"/>
                        </svg>
                        </button>
                      </div>
                    </Link> 
                    )   
                    })
                  
                  :
                  <p className="font_14_regular">You don`t have any purchases</p>
                }    
            </div>
      </div>
    </div>
  </section>
  </Loading>
    </>
    );
  
}
export default Dashboard;