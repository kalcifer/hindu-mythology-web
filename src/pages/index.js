import React, { Fragment } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { State } from "react-powerplug";

import { Transition, Spring, config } from "react-spring";

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

const Grid = styled.div`
  display: grid;
`;

const Card = styled.div`
  width: 300px;
  height: 150px;
  cursor: pointer;
  border: 1px solid;
  margin: 20px;
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 80px;
  margin-right: 20px;
  cursor: pointer;
  transform: scale(${props => props.scale});
  ${props => (props.showPage ? `position: absolute; top: 20px` : ``)};
`;

const Flex = styled.div`
  display: flex;
  padding: 10px;
`;

const Name = styled.h3`
  margin-top: 0;
`;

const Index = ({ data }) => {
  if (data && data.info && data.info.godses) {
    return (
      <Grid>
        <State initial={{ showPage: false, godName: undefined }}>
          {({ state, setState }) => {
            return data.info.godses.map(god => {
              const {
                name,
                stories,
                photo: { url }
              } = god;
              const routeName = name.toLowerCase();
              if (state.godName && state.godName !== name) return null;
              return (
                <Fragment>
                  <Spring
                    from={{ scale: 1, fontSize: 16, margin: 0 }}
                    to={{
                      scale: state.showPage ? 1.4 : 1,
                      fontSize: state.showPage ? 24 : 16,
                      margin: "20px"
                    }}
                    key={routeName}
                    config={config.wobbly}
                  >
                    {({ scale, fontSize, margin }) => {
                      return (
                        <div>
                          <Flex>
                            <ProfileImage
                              src={url}
                              scale={scale}
                              showPage={state.showPage}
                              onClick={() =>
                                setState({
                                  showPage: !state.showPage,
                                  godName: state.showPage ? undefined : name
                                })
                              }
                            />
                            <Name style={{ fontSize, margin }}>{name}</Name>
                            {state.showPage && (
                              <MiddlePath>
                                {stories.map(story => {
                                  return <StyledCard>{story.title}</StyledCard>;
                                })}
                              </MiddlePath>
                            )}
                          </Flex>
                        </div>
                      );
                    }}
                  </Spring>
                </Fragment>
              );
            });
          }}
        </State>
      </Grid>
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
        devotion
        popularity
        vehicle
      }
    }
  }
`;
