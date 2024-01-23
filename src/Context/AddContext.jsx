
import React, { useState, createContext } from 'react';
export const AddContext = createContext(null);

const AddContextProvider = (props) => {
  // const [loading, setLoading] = useState(false)
  const [addYourAd, setAddYourAd] = useState(false);

  const handleAddYourAd = () => {
    setAddYourAd(!addYourAd);
  };

  const contextValue = {
    handleAddYourAd,
    setAddYourAd,
    addYourAd,
    // setLoading,
  };

  return (
    <AddContext.Provider value={contextValue}>
      {props.children}
    </AddContext.Provider>
  );
};

export default AddContextProvider;

