import axios from "axios";
import { useState } from "react";

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) {
      return setError("please fill the file");
    }
    setError("");
    axios
      .post("http://localhost:3004/tasks", { text, status: "unstarted" })
      .then((response) => {
        onAdd(response.data);
        setText("");
      });
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>AddTask</p>

      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
