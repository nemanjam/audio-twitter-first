import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";

import NavBar from "./components/NavBar/NavBar";
import Microphone from "./components/Microphone/Microphone";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

import "./App.css";

function App() {
  const [files, setFiles] = useState([null]);

  const pushFile = file => {
    setFiles([...files, file]);
  };

  return (
    <>
      <NavBar />
      <Microphone pushFile={pushFile} />
      <Grid container direction="column" spacing={3}>
        {files.map((file, index) => (
          <Grid key={index} item>
            <AudioPlayer file={file} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
