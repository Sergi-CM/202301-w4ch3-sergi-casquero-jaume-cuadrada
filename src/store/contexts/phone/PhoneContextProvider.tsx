import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({ children }: PhoneContextProviderProps) => {
  return (
    <PhoneContext.Provider value={{ number: "3" }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
