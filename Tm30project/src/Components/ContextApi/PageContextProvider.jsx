// import React, { createContext, useState } from 'react'


// export const ContextAPI = createContext()

// function PageContextProvider ( {Children}) {

//     const[currentpage, setCurrentpage] = useState(1);
//     const[postperpage, setPostperpage] = useState(5);
  
//     const lastpostindex = currentpage * postperpage
//     const firstpostindex = lastpostindex - postperpage;
//     console.log(firstpostindex);
//     console.log(currentpage);
//     console.log(lastpostindex);

//   return (
//     <ContextAPI.Provider value={{postperpage, setCurrentpage, currentpage, firstpostindex, lastpostindex}}>
//         {Children}
//     </ContextAPI.Provider>
//   )
// }

// export default PageContextProvider


// // postperpage={postperpage}
// // setCurrentpage ={setCurrentpage}
// // currentpage = {currentpage}
// // data ={DataMerchants}
// // />
// // </div>