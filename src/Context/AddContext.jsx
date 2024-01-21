// // import React, { useState, createContext } from 'react';

// export const AddContext = createContext(null);

// const AddContextProvider = (props) => {
//   const [addYourAd, setAddYourAd] = useState(false);

//   const handleAddYourAd = () => {
//     setAddYourAd(!addYourAd);
//   };

//   const contextValue = {
//     handleAddYourAd,
//     setAddYourAd,
//   };

//   return (
//     <AddContext.Provider value={contextValue}>
//       {props.children}
//     </AddContext.Provider>
//   );
// };

// export default AddContextProvider;
import React, { useState, createContext } from 'react';

export const AddContext = createContext(null);

const AddContextProvider = (props) => {
  const [hide, setHide] = useState(true)
  const [addYourAd, setAddYourAd] = useState(false);

  const handleAddYourAd = () => {
    setAddYourAd(!addYourAd);
  };

  const contextValue = {
    handleAddYourAd,
    setAddYourAd,
    addYourAd
  };

  return (
    <AddContext.Provider value={contextValue}>
      {props.children}
    </AddContext.Provider>
  );
};

export default AddContextProvider;

