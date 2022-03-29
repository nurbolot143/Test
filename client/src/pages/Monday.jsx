import React, { useState } from "react";
import Day from "../components/Day";
const navItems = document.getElementsByClassName("nav__percent");

const Monday = () => {
  const [item, setItem] = useState([]);
  const [check, setCheck] = useState(0);

  const addItem = (inputText) => {
    setItem((prevItems) => [...prevItems, inputText]);
  };

  const deleteItem = (id) => {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  };

  const checkItem = (c) => {
    setCheck(check + c);
  };

  const percent = item.length > 0 ? (check * 100) / item.length : 0;

  if (navItems[0] !== undefined) {
    navItems[0].style.width = `${percent}%`;
  }
  return (
    <Day items={item} add={addItem} delete={deleteItem} check={checkItem} />
  );
};

export default Monday;
