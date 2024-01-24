
import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const AddContext = createContext(null);

const AddContextProvider = (props) => {
  const [isShow, setIsShow] = useState(false)
  const [addYourAd, setAddYourAd] = useState(false);
  

  const handleAddYourAd = () => {
    setAddYourAd(!addYourAd);
  };
 
  const handleSuccessPage =() => {
     setIsShow(false)
  }

  const contextValue = {
    handleAddYourAd,
    setAddYourAd,
    addYourAd,
    setIsShow,
    isShow,
    handleSuccessPage,
    // setLoading,
  };

  return (
    <AddContext.Provider value={contextValue}>
      {props.children}
    </AddContext.Provider>
  );
};

export default AddContextProvider;

