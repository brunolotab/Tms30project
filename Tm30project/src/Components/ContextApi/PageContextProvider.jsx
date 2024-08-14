import React, { Children, createContext, useState } from 'react'


export const PagesContext = createContext()

function PageContext() {

    const[currentpage, setCurrentpage] = useState(1);
    const[postperpage, setPostperpage] = useState(5);
  
    const lastpostindex = currentpage * postperpage
    const firstpostindex = lastpostindex - postperpage;

  return (
    <PagesContext.Provider value={{postperpage,setCurrentpage, currentpage, firstpostindex, lastpostindex}}>
        {Children}
    </PagesContext.Provider>
  )
}

export default PageContext


// postperpage={postperpage}
// setCurrentpage ={setCurrentpage}
// currentpage = {currentpage}
// data ={DataMerchants}
// />
// </div>