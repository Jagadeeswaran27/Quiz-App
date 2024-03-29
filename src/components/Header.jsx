import { useState, useRef } from "react";
export default function Header() {
  const input = useRef();
  const [name, setName] = useState(null);
  function handleSetName() {
    console.log(input.current.value.length);
    if (input.current.value.length > 1) {
      setName(input.current.value);
      input.current.className = undefined;
      input.current.value = "";
    } else {
      input.current.className = "error";
      setTimeout(() => {
        input.current.className = "";
      }, 2000);
      return;
    }
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSetName();
    }
  }
  return (
    <header>
      <h1>Welcome to Quiz</h1>
      <p>Lets test your knowledge...All the best!</p>
      {name !== null ? (
        <p>Candidate : {name}</p>
      ) : (
        <p>Enter the Candidate Name</p>
      )}
      <input
        type="text"
        ref={input}
        defaultValue={name}
        onKeyDown={handleKeyPress}
      />
      <button type="submit" className="setName" onClick={handleSetName}>
        Set Name
      </button>
    </header>
  );
}
