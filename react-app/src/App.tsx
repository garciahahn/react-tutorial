import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import React, { useState } from "react";

const handleLaugh = (id: String, event: React.MouseEvent) => {
  console.log("You laughed like:", event.currentTarget.textContent);
};

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => setShowAlert(!showAlert);

  let items = ["Cobblestone", "Stone", "Spaceship", "Potato", "Motorbike"];
  // Pay attention that the "call" for the function acting as ListGroup
  // is passed the arguments it will use as attributes of an HTML tag.
  // How many or how these attributes would look like is defined at the interface
  // because there you define the shape that the object would have.
  return (
    <div>
      <>
        {false ? (
          <ListGroup
            items={items}
            heading="Cities"
            onSelectItem={handleSelectItem}
          />
        ) : (
          ""
        )}
        {showAlert && <Alert onClose={closeAlert}>Hello Mars</Alert>}
        <Button color="danger" id="laugh" onClickButton={handleClick}>
          Jeje
        </Button>
      </>
    </div>
  );
}

export default App;
