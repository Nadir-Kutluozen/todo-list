import { type Children, type ReactNode } from "react";


type HeaderType = {
        image: {
            src:string;
            alt:string;
        };
        children: ReactNode;
    }

export default function Header ({image,children} : HeaderType)
 {
    return (
        <>
        <header className="navbar " >
           
            {children}
        </header>
        </>
        
    );
}