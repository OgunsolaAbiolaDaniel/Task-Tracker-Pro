import Body from "./Sections/Body";
import Nav from "./components/Nav";
import StoreContextProvider from './context/store-context'



function App() {
  return (
    <StoreContextProvider>
      <Nav />
      <Body />
    </StoreContextProvider>
  );
}
export default App;
