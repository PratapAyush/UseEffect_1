import React from "react";
import './App.css';
import Todos from "./components/Todos";

// function App() {
//   const [count1, setCount1] = useState(0)
//   const [count2, setCount2] = useState(0)

//   useEffect(() => {
//     console.log("inside 1",count1,count2)
  

//   }, [])
  







//   return (
//     <>
//         <div className="App" onClick={()=>setCount1(count1+1)}>
//      Hello :{count1}

      
//     </div>
//         <div className="App" onClick={()=>setCount2(count2+1)}>
//         Hello :{count2}
   
         
//        </div>
    
//     </>

//   );
// }



// fetching data from local server

function App() {

  return (
    <>
        <div className="App">
          
      <Todos/>
    </div>

    
    </>

  );
}








export default App;
