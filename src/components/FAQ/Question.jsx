import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
export default function Question({ open, toggle, title, desc }) {
  return (
    <div className="pt-[10px]">
      <div
        className="bg-white py-[25px] px-32 flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold">{title}</p>
        <div className="text-[30px]">
          {open ? (
            <AiFillCaretUp></AiFillCaretUp>
          ) : (
            <AiFillCaretDown></AiFillCaretDown>
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </div>
  );
}
