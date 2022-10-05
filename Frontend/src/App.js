import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const IndexContext = createContext();
export const ResultPageContext = createContext();
export const HasValueContext = createContext();
export const ThemeContext = createContext();
function App() {
  const [index, setIndex] = useState(0);
  const [resultPage, setResultPage] = useState(false);
  const [hasValue, setHasValue] = useState(true);
  const [design, setDesign] = useState(false);

  const handleDesign = () => {
    if (design) {
      setDesign(false);
    } else {
      setDesign(true);
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ design, setDesign: handleDesign }}>
        <IndexContext.Provider value={{ index, setIndex }}>
          <ResultPageContext.Provider value={{ resultPage, setResultPage }}>
            <HasValueContext.Provider value={{ hasValue, setHasValue }}>
              <Outlet />
            </HasValueContext.Provider>
          </ResultPageContext.Provider>
        </IndexContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
