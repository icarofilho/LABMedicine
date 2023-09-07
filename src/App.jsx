import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state);
  console.log(user);
  return <h1>Hello World</h1>;
}

export default App;
