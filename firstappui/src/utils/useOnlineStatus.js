import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setisOnline]=useState(true);
  // check if the user is online or offline
    useEffect(()=>{
        window.addEventListener("offline", () => {
            setisOnline(false);
        });
        window.addEventListener("online", () => { setisOnline(true) } );
    },[]);

  // boolean
    return isOnline;
};

export default useOnlineStatus;

