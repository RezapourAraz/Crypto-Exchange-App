// Components
import Landing from "./components/Landing";
// Context
import CoinContextProvider from "./context/CoinContextProvider";

function App() {
  return (
    <CoinContextProvider>
      <Landing />
    </CoinContextProvider>
  );
}

export default App;
