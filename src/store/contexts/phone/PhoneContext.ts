import { createContext } from "react";

interface PhoneContextStructure {
  number: string;
}

const PhoneContext = createContext({} as PhoneContextStructure);

export default PhoneContext;
