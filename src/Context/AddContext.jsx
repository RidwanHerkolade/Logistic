
import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const AddContext = createContext(null);

const AddContextProvider = (props) => {
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [addYourAd, setAddYourAd] = useState(false);
  

  const handleAddYourAd = () => {
    setAddYourAd(!addYourAd);
  };
 
  const handleSubmissionPage =() => {
     setSubmissionSuccessful(false)
  }
  const handleSubmissionError =() => {
    setSubmissionError(false)
 }

  const contextValue = {
    handleAddYourAd,
    setAddYourAd,
    addYourAd,
    setSubmissionSuccessful,
    submissionSuccessful,
    submissionError,
    handleSubmissionPage ,
    handleSubmissionError ,
    setSubmissionError
    // setLoading,
  };

  return (
    <AddContext.Provider value={contextValue}>
      {props.children}
    </AddContext.Provider>
  );
};

export default AddContextProvider;

