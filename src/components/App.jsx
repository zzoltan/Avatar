import React from "react";
import Elements from "./Elements";
import emoji from "../emojipedia";

function getElemek(elements) {
  return (
    <Elements
      key={elements.id}
      image={elements.emoji}
      name={elements.name}
      description={elements.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emoji.map(getElemek)}</dl>
    </div>
  );
}

export default App;
