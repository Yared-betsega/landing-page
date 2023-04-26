import React, { useState } from "react";
import Mission from "../features/Mission";
import Question from "./Question";
import { accordionData } from "./question_and_answer";

export default function FAQ() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="mb-40">
      <Mission
        headerText={"Frequently asked Questions"}
        descriptionText={
          "Explore some of the most common questions we received from users. "
        }
      ></Mission>

      {accordionData.map((data, index) => {
        return (
          <Question
            key={index}
            open={index === open}
            title={data.title}
            desc={data.desc}
            toggle={() => toggle(index)}
          ></Question>
        );
      })}
    </div>
  );
}
