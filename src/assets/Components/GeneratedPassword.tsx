import styled from "styled-components";

import { useContext, useState } from "react";
import { myContext } from "./Card";
import { ReactSVG } from "react-svg";
import copyIcon from "../images/copy-icon.svg";

function GeneratedPassword() {
  const context = useContext(myContext);
  const [clicked, setClicked] = useState(false);

  const handlePhotoClick = () => {
    navigator.clipboard
      .writeText(context.newPassword)
      .then(() => {
        console.log("Password copied to clipboard");
        setClicked((clicked) => !clicked);
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <Wrapper>
      <span>{context.newPassword}</span>
      <ClipboardWrapper>
        <span>{clicked ? "COPIED" : ""}</span>
        <ReactSVG
          style={{ cursor: "pointer" }}
          src={copyIcon}
          onClick={handlePhotoClick}
        />
      </ClipboardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.basic.cardsBackgroundColor};

  padding: 19.5px 32px;

  & > span {
    font-size: ${({ theme }) => theme.typography.fontSize.large};
    color: ${({ theme }) => theme.colors.basic.primaryTextColor};
  }

  & > svg {
    cursor: pointer;
  }
`;

const ClipboardWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  & > span {
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    color: ${({ theme }) => theme.colors.basic.green};
  }
`;

export default GeneratedPassword;
