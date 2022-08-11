import { useState } from "react";
import "./App.css";
import  useStoneitySortHook  from "./hooks/useStoneitySortHook";


function App() {
  const [array,setArray] = useState([""]);
  const [addValue,setAddValue] = useState();
  const [sorted,setSorted,addVal] = useStoneitySortHook(array);
 

  const createInputArray = (input , separator = ",") => {
	const resultArr = Array(input.split(separator).length);
	for(var i = 0;i < input.split(separator).length ; i++){
		resultArr[i] = Number(input.split(separator)[i]);
		
	}
	setArray(resultArr);
    
  }
  
 
  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label >Array Input Field</label>
        {
          <div  className="page">
            <div className="first-division">
              <input
			  type = "text"
         	  onChange={(e) => createInputArray(e.target.value)}
              required
              />
			  *Please enter the array in the input field with comma between the numbers. Do not put spaces at the beginning or end of the array.
            	<div className="sort">
				{array &&
          		(
				<button
			    type="button"
			    onClick={() => setSorted(array)}
			    className="sort-btn"
				>
			    <span>Sort</span>
				</button>
		  		)}
     			 </div>
				<input
			  	type = "text"
         	  	onChange={(e) => setAddValue(e.target.value)}
              	required
                />
	 			 <div className="add">
        		{array &&
          		(
				<button
			    type="button"
			    onClick={() => addVal(addValue)}
			    className="add-btn"
			    >
			    <span>Add</span>
				</button>
		  		)}
      			</div>
				
      			<div className="output">
        		<h2>Output</h2>

				{sorted.map((sorted) =>
    			<span>{sorted}{sorted ? ", " : ""}</span>
)}
     			 </div>
            </div>
           
          </div>
        }
      </div>
	 
    </form>
  );
}

export default App;
