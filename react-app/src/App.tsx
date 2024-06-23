import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["Tokyo", "Kanazawa", "Kyoto", "Hiroshima", "Osaka"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading={"Cities I have been to!"}
          onSelectItem={handleSelectItem}
        ></ListGroup>

        <Alert>
          Hello, <span>World!</span>
        </Alert>
      </div>
    </>
  );
}

export default App;
