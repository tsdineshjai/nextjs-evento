import { useContext } from "react";
import { createContext } from "react";


//created a conetxt using creatContex from react. 
//create a provideer to the children 

//where and all you need this. export it and wrap it around them.
//once you wrap it , the childrent can access them.
//then childrent compoents can make use of useContext to extract the value. 
//you can pass entire fucntions, values , objects and state for data tranjmisisione
//from one place tothe another. 


const ValueContext = createContext({ id: 33 });

export function All({ children }: { children: React.ReactNode }) {
	return (
		<ValueContext.Provider value={{ id: 32 }}>{children}</ValueContext.Provider>
	);
}

export default All;

function SelectiveChild() {
	const value = useContext(ValueContext);

	const { id } = value;

	return (
		<>
			<All>
				<div>The almights needs this {id}</div>
			</All>
		</>
	);
}
