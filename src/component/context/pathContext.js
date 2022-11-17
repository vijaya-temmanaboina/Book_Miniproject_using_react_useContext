// import { createContext, useContext } from "react";
// import { useState } from "react";

// const PathContext = createContext(null);
// export const usePathComponent = () => {
//   const Path_a = useContext(PathContext);
//   if (Path_a === undefined) {
//     throw new Error("errorrrr!!!!!!");
//   }
//   return Path_a;
// };

// const PathContextProvider = () => {
//   const [mount, setMount] = useState();

//   const mountPath = (key) => {
//     setMount(key);
//   };

//   return (
//     <PathContext.Provider value={{ mountPath, mount }}></PathContext.Provider>
//   );
// };

// export default PathContextProvider;
