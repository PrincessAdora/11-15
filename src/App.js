import React from "react";
// Be sure to uncomment the TableRow component import before using a TableRow
// import TableRow from './components/TableRow.js';
import TableHeader from "./components/TableHeader.js";
import Navbar from "./components/Navbar.js";
import TableRow from "./components/TableRow.js";
// Be sure to uncomment the line importing the data before using it!
import data from "./knicks-data.js";
import "./App.css";

console.log(data[0]);

function App() {
  let divStyle = {
    backgroundColor: "rgb(0, 0, 255)",
    minHeight: "100vh"
  };
  return (
    <div className="App" style={divStyle}>
      <Navbar />
      <TableHeader />
      <TableRow
        game={data[0].Game}
        opponent={data[0].Opponent}
        result={data[0].Result}
        location={data[0].Location}
        teamScore={data[0].TeamScore}
        opponentScore={data[0].OpponentScore}
        wins={data[0].W}
        losses={data[0].L}
      />
    </div>
  );
}

export default App;
