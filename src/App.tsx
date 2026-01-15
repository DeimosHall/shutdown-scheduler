import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Button, TextField, Typography } from "@mui/material";
import { MainContainer } from "./components/layout/MainContainer";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main>
      {/*<TextField
        value={name}
        onChange={e => setName(e.target.value)}>  
      </TextField>
      <Button variant="contained" onClick={greet}>Click me!</Button>
      <Typography>{greetMsg}</Typography>*/}
      <MainContainer />
    </main>
  );
}

export default App;
