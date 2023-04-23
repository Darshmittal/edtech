import {useState, createContext,useRef,useEffect } from 'react';

export const UserContext=createContext(null);

const UserProvider=({children})=>{

    const[selectedOption,setSelectedOption]=useState('');


    return(

        <UserContext.Provider value={{
            selectedOption,
            setSelectedOption
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;