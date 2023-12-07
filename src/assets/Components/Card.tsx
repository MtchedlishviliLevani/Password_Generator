import styled from "styled-components";
import ConfigurationCard from "./ConfigurationCard";
import { createContext } from "react";
import { useState } from "react";
import GeneratedPassword from "./GeneratedPassword";

interface contextValueType {
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeInteger: boolean;
  includeSymbols: boolean;
  charLength: string;
  setIncludeUpperCase: React.Dispatch<React.SetStateAction<boolean>>;
  setIncludeLowerCase: React.Dispatch<React.SetStateAction<boolean>>;
  setIncludeInteger: React.Dispatch<React.SetStateAction<boolean>>;
  setIncludeSymbol: React.Dispatch<React.SetStateAction<boolean>>;
  setCharLength: React.Dispatch<React.SetStateAction<string>>;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  newPassword: string;
  genertatedPassword: string;
}

export const myContext = createContext<contextValueType>({
  includeUpperCase: false,
  includeLowerCase: false,
  includeInteger: false,
  includeSymbols: false,
  charLength: "10",
  setIncludeUpperCase: () => {},
  setIncludeLowerCase: () => {},
  setIncludeInteger: () => {},
  setIncludeSymbol: () => {},
  setCharLength: () => {},
  genertatedPassword: "",
  setNewPassword: () => {},
  newPassword: "",
});

export default function Card() {
  const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(true);
  const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(true);
  const [includeInteger, setIncludeInteger] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbol] = useState<boolean>(false);
  const [charLength, setCharLength] = useState<string>("10");
  const [newPassword, setNewPassword] = useState("PTx1f5DaFX");

  let charSet = "";
  let generatedPassword = "";

  const charAmount: number = Number(charLength);
  if (includeUpperCase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeInteger) {
    charSet += "1234567890";
  }

  if (includeSymbols) {
    charSet += "!@#$%^&*()_+";
  }

  if (includeLowerCase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  for (let i = 0; i < charAmount; i++) {
    const index = Math.floor(Math.random() * charSet.length);
    generatedPassword += charSet.charAt(index);
  }
  const contextValue: contextValueType = {
    includeUpperCase: includeUpperCase,
    includeLowerCase: includeLowerCase,
    includeInteger: includeInteger,
    includeSymbols: includeSymbols,
    charLength: charLength,
    setIncludeUpperCase: setIncludeUpperCase,
    setIncludeLowerCase: setIncludeLowerCase,
    setIncludeInteger: setIncludeInteger,
    setIncludeSymbol: setIncludeSymbol,
    setCharLength: setCharLength,
    genertatedPassword: generatedPassword,
    newPassword: newPassword,
    setNewPassword: setNewPassword,
  };

  console.log(generatedPassword);
  return (
    <myContext.Provider value={contextValue}>
      <Wrapper>
        <GeneratedPassword />
        <ConfigurationCard />
      </Wrapper>
    </myContext.Provider>
  );
}

const Wrapper = styled.div`
  width: 540px;
  background-color: ${({ theme }) => theme.colors.basic.bodyBackgroundColor};
`;
