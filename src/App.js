import { createContext, useContext, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export const MyContext=createContext()
function App() {
  const [prodsInCart,setProdsInCart]=useState([])
  const [counter,setCounter]=useState(0)
  const [price,setPrice]=useState("125.00")
  return (
    <div className="App">
      <MyContext.Provider value={[counter,setCounter,price,setPrice,prodsInCart,setProdsInCart]}>
        <Navbar/>
        <Main/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
