import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import { AccordionSection } from "../styled";
import "react-accessible-accordion/dist/minimal-example.css";

export default ({ pageContext: { scripture } }) => {
  return (
    <div>
      <h3>{scripture.name}</h3>
      <AccordionSection>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>Summary</AccordionItemTitle>
            <AccordionItemBody>The whole summary text</AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>More texts</AccordionItemTitle>
            <AccordionItemBody>Carousel of other texts</AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionSection>
    </div>
  );
};
