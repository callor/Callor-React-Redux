import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Counter, Button, Option } from "./component";
import counterApp from "./reducers";

// redux를 사용하여 store 생성
const store = createStore(counterApp);

function App(props) {
  return (
    <>
      {/* 
      react-redux를 사용하여 Provider 선언하고
      reducers의 함수들을 store에 담아둔다
    */}
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Counter />
            <Option />
            <Button />
          </header>
        </div>
      </Provider>
    </>
  );
}

export default App;
