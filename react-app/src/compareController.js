import React, {useContext, useState} from 'react';


export const CompareContext = React.createContext([]);

export const CompareProvider = (props) => {
  const [compare, setCompare] = useState([]);
  return (
    <CompareContext.Provider value={{compare, setCompare}}>
      {props.children}
    </CompareContext.Provider>
  )
};

export const compareController = () => {
  const {compare, setCompare} = useContext(CompareContext);
  return {
    compare,
    addCompare: (item) => setCompare( prevCompare => {
      if(prevCompare.length === 3) return prevCompare;
      return [...prevCompare, item];
    }),
    removeCompare: (index) => setCompare( prevCompare => {
      const newCompare = [...prevCompare];
      newCompare.splice(index, 1);
      return newCompare
    }),
    clearCompare: () => setCompare([])
  }
};
