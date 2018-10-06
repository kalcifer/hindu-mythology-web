import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Baba, { BabaManager, CrossFadeMove } from "yubaba";
import styled from "styled-components";
import { State } from "react-powerplug";

const StyledCard = styled.div`
  width: auto;
  border: 2px solid #f6546a;
  height: auto;
  margin: 20px 0;
  padding: 20px;
`;

// TODO must be responsive
const MiddlePath = styled.div`
  padding: 0 20%;
`;

const Index = ({ data }) => {
  console.log(data);
  if (data && data.info && data.info.godses) {
    return (
      <ul>
        {data.info.godses.map(god => {
          const { name, stories } = god;
          const routeName = name.toLowerCase();
          return (
            <State initial={{ showPage: false }} key={name}>
              {({ state, setState }) => (
                <Fragment>
                  <BabaManager>
                    {() => (
                      <Fragment>
                        {state.showPage || (
                          <Baba name={routeName}>
                            <CrossFadeMove zIndex={999}>
                              {({ style, ref }) => (
                                <div style={style} ref={ref}>
                                  <button
                                    onClick={() => setState({ showPage: true })}
                                  >
                                    {name}
                                  </button>
                                </div>
                              )}
                            </CrossFadeMove>
                          </Baba>
                        )}

                        {state.showPage && (
                          <div>
                            <Baba name={routeName}>
                              <CrossFadeMove zIndex={1000}>
                                {({ style, ref }) => (
                                  <div ref={ref}>
                                    <h1
                                      style={style}
                                      onClick={() =>
                                        setState({ showPage: false })
                                      }
                                    >
                                      {name}
                                    </h1>
                                  </div>
                                )}
                              </CrossFadeMove>
                            </Baba>
                            <MiddlePath>
                              {stories.map(story => {
                                return <StyledCard>{story.title}</StyledCard>;
                              })}
                            </MiddlePath>
                          </div>
                        )}
                      </Fragment>
                    )}
                  </BabaManager>
                </Fragment>
              )}
            </State>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default Index;

export const query = graphql`
  query GodQuery {
    info {
      godses {
        gender
        name
        photo {
          url
        }
        stories {
          title
        }
      }
    }
  }
`;
