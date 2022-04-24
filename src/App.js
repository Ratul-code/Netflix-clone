import "./App.css";
import React from "react";
import Row from "./components/Row";
import request from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        isLarge
        fetchurl={request.fetchDocumentaries}
      />
      <Row title="Trending" fetchurl={request.fetchTrending} />
      <Row title="TopRated" fetchurl={request.fetchTopRated} />
      <Row title="Action" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy" fetchurl={request.fetchComedyMovies} />
      <Row title="Romance" fetchurl={request.fetchRomanceMovies} />
      <Row title="Horror" fetchurl={request.fetchHorroMovies} />
      {/* <Row title="Documentary" fetchurl={request.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
