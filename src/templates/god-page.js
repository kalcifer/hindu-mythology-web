import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import { AccordionSection } from "../styled";
import Carousel from "../components/carousel";

export default ({
  pageContext: {
    god: { stories, name }
  }
}) => {
  console.log(stories);
  return (
    <div>
      <h3>{name}</h3>
      <AccordionSection>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>Bio</AccordionItemTitle>
            <AccordionItemBody>Major stats</AccordionItemBody>
          </AccordionItem>
          <AccordionItem expanded>
            <AccordionItemTitle>Stories</AccordionItemTitle>
            <AccordionItemBody>
              <Carousel>
                {stories.map(story => (
                  <div
                    key={story.id}
                    style={{
                      width: "60px",
                      height: "80px",
                      border: "1px solid"
                    }}
                  >
                    {story.title}
                  </div>
                ))}
              </Carousel>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionSection>
    </div>
  );
};
