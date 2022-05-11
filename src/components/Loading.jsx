import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = (props) =>{
    const[loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        },[props.time])
    }, []);

    return(
        <>
            {loading ?
            <div className="sweet-loading">
            <ClipLoader color={'#367DD7'} loading={loading} size={50} />
            <p>{props.name}</p>
            </div>
            :
            <div>
            {props.children}
            </div>
            }
        </>
    );
}
export default Loading;