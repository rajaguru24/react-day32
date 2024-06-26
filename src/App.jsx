import { Provider } from "react-redux";
import "./App.css";
import Cart from "./Components/Cart";
import { CartStore } from "./Redux/CartStore";


function App() {
  return (
    <>
      <Provider store={CartStore}>
      <Cart />
      </Provider>
    </>
  );
}

export default App;