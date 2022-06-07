import React, { useEffect, useState } from "react";
import jQuery from "jquery";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = (props) =>{
    const[loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
          setLoading(false);
        },[2000])
    }, []);

    return(
        <>
            {loading ?
            <div className="sweet-loading">
            {/* <ClipLoader color={'#367DD7'} loading={loading} size={50} /> */}
                <div className="sweet-container">
                    <p>Loading...</p>
                    <h1>{props.name}</h1>
                    <span>
                        <small>{props.small}</small>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512"><rect width="512" height="341.326" y="85.337" fill="#ffda44"/><rect width="512" height="170.663" y="85.337" fill="#338af3"/></svg>
                    </span>
                    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" space="preserve">
                        <rect x="40" y="40" width="4" height="10" fill="#4200ff"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite" /></rect>
                        <rect x="50" y="40" width="4" height="10" fill="#4200ff"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite" /></rect>
                        <rect x="60" y="40" width="4" height="10" fill="#4200ff"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite" /></rect>
                    </svg>
                </div>
            </div>
            :
            <main>
            {props.children}
            </main>
            }
        </>
    );
}
export default Loading;