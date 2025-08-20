"use client";
import { useState } from "react";
import Header from "@/components/Header";
import CourseGoalList from "@/components/CourseGoalList";
import NewGoal from "@/components/NewGoal";

export type GoalType = {
  title: string;
  description: string;
  id: number;
};

export default function Home() {
  const [goals, setGoals] = useState<GoalType[]> ([]);

  function handleAddGoal(goal: string, summary: string){
      const newGoal : GoalType = {
        id : Math.random(),
        title : goal,
        description :summary,
      }
      setGoals( (prevGoals) => { return [...prevGoals,newGoal];} );
    }


    function handleDeleteGoal(id:number){
          setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id !== id))
    }

    return (
    <>
       <Header  image = {{src: "/nyc.svg", alt:"logo image"}}>
          <h1 className=" " >NYC</h1>
        </Header>
      <div className="container">
        <NewGoal onAddGoal={handleAddGoal}></NewGoal>
        <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals}></CourseGoalList>
      </div>
    </>
  );
}
