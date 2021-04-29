import Header from "./components/Header";
import Form from "./components/Form";
function App() {
  const style = {
    fontFamily: "Georgia",
  };
  return (
    <div style={style}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
