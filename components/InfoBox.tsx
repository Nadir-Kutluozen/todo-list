import { Children , type ReactNode } from "react"; //info , warning

type InfoBox = {
    mode?:'hint'| 'warning'; // it could be hint or waring in the props when they pass it 
    children: ReactNode;

}
export default function InfoBox({mode, children}:InfoBox){

    if (mode === 'hint'){
        return (
            <aside className="bg-white">
                <p>{children}</p>
            </aside>);
    }
    return(        
        <aside className="bg-red">
            <h2>Warning!</h2>
            <p>{children}</p>
        </aside>);

}