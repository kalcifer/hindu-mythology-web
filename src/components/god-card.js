import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Img = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
`;

const ImgWrapper = styled.div`
  position: relative;
  min-width: 150px;
  height: 120px;
  display: inline-block;
  overflow: hidden;
  margin: 0;
`;

const Name = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const NameSecond = styled.div`
  position: relative;
  left: -50%;
  font-size: 30px;
  background: beige;
  padding: 0 5px;
  border-radius: 10px;
`;

export default ({ photo, name, id }) => {
  return (
    <Link to={`/gods/${name}`}>
      <ImgWrapper>
        <Img src={photo.url} />
        <Name>
          <NameSecond>{name}</NameSecond>
        </Name>
      </ImgWrapper>
    </Link>
  );
};
