import { type ReactNode } from "react";
import  Styles  from "./TodoList.module.css";

type PropType = {
        id:number;
        title: String;
        children: ReactNode;
        onDelete: (id:number)=>void;
    }

export default function CourseGoal({title,children,onDelete,id} :PropType )
    {
    return (
        <>
        <div className="card">
            <h2>{title}</h2>
            <p> {children}</p>
            <button className="btn"onClick={()=>onDelete(id)} type="button">Delete</button>
        </div>
        </>
    );
}