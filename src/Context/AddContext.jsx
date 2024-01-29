
import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const AddContext = createContext(null);

const AddContextProvider = (props) => {
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [addYourAd, setAddYourAd] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [handleInput, setHandleInput] = useState("")
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

// 
const handleChange = (event) => {
    const {value} = event.target
    setHandleInput(value)
}
//  Handlers 
  const contextValue = {
    handleAddYourAd,
    setAddYourAd,
    addYourAd,
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
    handleChange
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

