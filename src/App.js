import Header from "./component/Header";
import {useRoutes} from 'react-router-dom';
import routes from "./router";

function App() {
  let route=useRoutes(routes)
  return (
    <div className="App">
      <Header></Header>
      {route}
    </div>
  );
}

export default App;
