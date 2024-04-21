import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import { faq } from "../data/Data";

const Faq = () => {
  return (
    <section className="p-5 md:p-20  bg-[#f1f1f1]">
      <div className="bg-white shadow-xl h-auto rounded-3xl p-5  md:px-10 md:py-10">
        <h1 className="font-bold text-3xl mb-5">Frequently Asked Questions</h1>
        {faq.map((question) => (
          <Accordion key={question.id}>
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "#008C7C" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="text-xl font-semibold text-[#008C7C]">
                {question.question}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-[#E91D63] text-xl">{question.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
