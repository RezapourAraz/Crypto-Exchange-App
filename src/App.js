import { Routes, Route } from "react-router-dom";
// Components
import Landing from "./pages/Landing";
import CoinsList from "./pages/CoinsList";
// Context
import CoinContextProvider from "./context/CoinContextProvider";

function App() {
  return (
    <CoinContextProvider>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/coins" element={<CoinsList/>} />
      </Routes>
    </CoinContextProvider>
  );
}

export default App;
