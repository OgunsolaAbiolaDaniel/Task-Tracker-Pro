import Body from "./Sections/Body";
import Nav from "./components/Nav"
import {StoreContext} from './context/store-context'
function App() {
  return (
    <StoreContext.Provider value={[]}>
      <Nav />
      <Body />
    </StoreContext.Provider>
  );
}
export default App
