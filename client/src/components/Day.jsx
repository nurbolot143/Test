import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

const Day = (props) => {
  return (
    <div className="day">
      <InputArea onAdd={props.add} />
      <ol className="day__list">
        {props.items.map((toDoItem, index) => {
          return (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={props.delete}
              onCheck={props.check}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Day;
