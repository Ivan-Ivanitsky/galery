import { useState, useEffect } from "react";
import CardWrapper from "./components/CardsWrapper/CardsWrapper";
import Header from "./components/Header/Header";
import db from "./db/db";
import "./App.css";
import Card from "./components/Card/Card";
import CardList from "./pages/CardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const getElem = JSON.parse(localStorage.getItem("cadrElem"));
  const [data, setData] = useState(db);
  const [id, setId] = useState(getElem.id);
  // useEffect(() => {
  //   setData((data) => (data = db));
  // }, [data]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <CardWrapper>
          <Routes>
            <Route path="/" element={<Card data={data} setId={setId} />} />
            <Route path={`/id:${id}`} element={<CardList data={data[id]} />} />
            {/* <Route path="*" element={<>{"HEllow"}</>} /> */}
          </Routes>
        </CardWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
