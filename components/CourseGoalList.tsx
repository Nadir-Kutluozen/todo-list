import CourseGoal from "./CourseGoal";
import {type GoalType } from "@/pages/index";
import InfoBox from "./Infobox";
import { ReactNode } from "react";

type CourseListType = {
 goals: GoalType []
 onDeleteGoal: (id:number)=>void; 
};


export default function CourseGoalList({goals,onDeleteGoal}:CourseListType ) {
    //if 0 then bring the info box with the prop type mode hint.
    // else if it is bigger then the 4 , then warning type mode. 
    // we check the goals array that type goalType! 
    
    let warningBox : ReactNode;
    if (goals.length === 0){
        return(<>
        <InfoBox mode = 'hint'>add more stuff</InfoBox> 
        </>);
    }
    else if (goals.length > 2){
        warningBox =  <InfoBox mode = 'warning'>you added so many stuff , thats impossible!</InfoBox>
    }

    return(
            <>
            {warningBox}
            <div className="list">
                  { goals.map((goal)=>(
            <li className="li">
            <CourseGoal id={goal.id} title= {goal.title} onDelete={onDeleteGoal} >
              {goal.description}
            </CourseGoal>
          </li>
        ))}
            </div>
            </>
        
    );
}

