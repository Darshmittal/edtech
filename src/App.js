import {Routes,Route} from "react-router-dom";
import React, { useState } from 'react';
import Homepage from "./components/Homepage";
import InstructorPage from "./components/Instructor";
import ModulePage from "./components/Modulepage";
import Header from "./components/header";
import { UserContext } from "./components/context/programprovider";


function App() {

  const [selectedOption, setSelectedOption] = useState('Beginner');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  return (

    <>
    <div className="container">
    <UserContext.Provider value={{ selectedOption,handleOptionClick }}>
        <Header />
      </UserContext.Provider>
      <div className="main">
          <Routes>
          <Route path="/" element={<UserContext.Provider value={{ selectedOption }}><Homepage /></UserContext.Provider>} />
              <Route path="/page2" element={<ModulePage/>} />
              <Route path="/page3" element={<InstructorPage />} />
          </Routes>
      </div>
    </div>
    
    
    
    
    
    
    </>
    
  );
}

export default App;
