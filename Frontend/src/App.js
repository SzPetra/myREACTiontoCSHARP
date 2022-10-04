import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
function App() {
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
        <Outlet />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
