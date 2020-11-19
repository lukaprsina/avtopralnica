import { Typography, Switch } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [S1, setS1] = useState(false);
  const [S2, setS2] = useState(false);
  const [S3, setS3] = useState(false);
  const [S4, setS4] = useState(false);
  const [S5, setS5] = useState(false);
  return (
    <div className="background">
      <Typography id="title" variant="h1">Avtopralnica</Typography>
      <div className="container">
        <div className="input">
          <Typography variant="body1">Senzor za zaznavanje avta</Typography>
          <Switch checked={S1} onChange={() => setS1(!S1)} />
          <br />

          <Typography variant="body1">Gumb za prižig avtopralnice</Typography>
          <Switch checked={S2} onChange={() => setS2(!S2)} />
          <br />

          <Typography variant="body1">Zasilna ustavitev</Typography>
          <Switch checked={S3} onChange={() => setS3(!S3)} />
          <br />

          <Typography variant="body1">Senzor črpalka pod minimum</Typography>
          <Switch checked={S4} onChange={() => setS4(!S4)} />
          <br />

          <Typography variant="body1">Senzor črpalka nad maksimum</Typography>
          <Switch checked={S5} onChange={() => setS5(!S5)} />

        </div>
        <Output S1={S1} S2={S2} S3={S3} S4={S4} S5={S5} />
      </div>
    </div>
  );
}

function Output(props) {
  return (
    <div className="output">
      <Typography variant="body1">Motor</Typography>
      <Switch disabled checked={props.S1 && props.S2 && !props.S3} />
      <br />

      <Typography variant="body1">Črpalka</Typography>
      <Switch
        disabled
        checked={props.S1 && props.S2 && !props.S3 && !props.S4}
      />
      <br />

      <Typography variant="body1">Alarm</Typography>
      <Switch disabled checked={props.S4 || props.S5} />
      <br />
    </div>
  );
}
