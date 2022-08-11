import { useState } from "react";

function useStoneitySortHook(array) {
	const [elements,setElements] = useState(array);
	const setSorted = (param) => {
		setElements(param);
		
		
	};

 const addVal = (newVal) => {
	setElements([...array,newVal]);
	 
 };


	var flag = true;
	const mustArrLength = elements.length;
	const newArr = Array(elements.length); 
	const numAscending = [...elements].sort((a, b) => a - b);
	
	var j= 0;
	var z = 1;
	for(var i = 0; i< mustArrLength ; i++){
		if(flag === true){
		
			newArr[j] = numAscending.pop();
			j++;
			flag = !flag;
			continue;
		}
		
		newArr[mustArrLength-(z)] = numAscending.pop();
		flag = !flag;
		z++;
		
	}
	

  return [newArr,setSorted,addVal];
}
export default useStoneitySortHook;