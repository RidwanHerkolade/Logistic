
import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const AddContext = createContext(null);

const AddContextProvider = (props) => {
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [addYourAd, setAddYourAd] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // const [handleMenu, setHandleMenu] = useState(false)
  const [mobile, setMobile] = useState(false);
  


  const handleAddYourAd = () => {
    setAddYourAd(!addYourAd);
  };

  const handleSubmissionPage =() => {
     setSubmissionSuccessful(false)
  }
  const handleSubmissionError =() => {
    setSubmissionError(false)
 }

//   initiation of the popup authoriz
// const navigate = useNavigate()
 const handleClosePopup = () => {
   setIsPopupVisible(!isPopupVisible);
  
 };
 const handleClickPopup = () => {
  setIsPopupVisible(true);
 
};
 const handleMobile = () => {
  setMobile(false);
};
const handleNavClick =() => {
  setMobile(false)
}
const handleClick = () => {
  setMobile(!mobile);
};
//  Handlers 
  const contextValue = {
    handleAddYourAd,
    setAddYourAd,
    addYourAd,
    setAddYourAd,
    setSubmissionSuccessful,
    submissionSuccessful,
    submissionError,
    handleSubmissionPage ,
    handleSubmissionError ,
    setSubmissionError,
    handleClosePopup,
    handleClickPopup,
    isPopupVisible,
    setIsPopupVisible,
    mobile,
    setMobile,
    handleMobile,
    handleNavClick,
    handleClick,
    // handleLinkPopup
    
    
    // setLoading,
  };

  return (
    <AddContext.Provider value={contextValue}>
      {props.children}
    </AddContext.Provider>
  );
};

export default AddContextProvider;

