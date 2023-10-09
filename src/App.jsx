import { useState, useEffect } from "react";
import CardWrapper from "./components/CardsWrapper/CardsWrapper";
import Header from "./components/Header/Header";
import db from "./db/db";
import "./App.css";
import Card from "./components/Card/Card";
import CardList from "./pages/CardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState(db);
  const [id, setId] = useState(data.id);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <CardWrapper>
          <Routes>
            <Route path="/" element={<Card data={data} setId={setId} />} />
            <Route path={`/Card`} element={<CardList data={data[id]} />} />
            <Route
              path="*"
              element={
                <>
                  {"Sorry page not found"}
                  <a href="/">Назад</a>
                </>
              }
            />
          </Routes>
        </CardWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
