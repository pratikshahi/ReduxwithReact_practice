import "./App.css";
import Navbar from "./Navbar";
import Items from "./Items";
import cartReducer from "./cartReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
function App() {
  const store = createStore(cartReducer); //telling that cartReducer is our store
  //component inside provider can use data in cartReducer
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Items />
      </Provider>
    </div>
  );
}

export default App;
