import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import { AccordionSection } from "../styled";

export default ({ pageContext: { god } }) => {
  return (
    <div>
      <h3>{god.name}</h3>
      <AccordionSection>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>Bio</AccordionItemTitle>
            <AccordionItemBody>Major stats</AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>Stories</AccordionItemTitle>
            <AccordionItemBody>Carousel of stories</AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionSection>
    </div>
  );
};
