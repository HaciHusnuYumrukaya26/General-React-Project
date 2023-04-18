import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contant from "./pages/Contant";
import Fetch from "./pages/Fetch";
import Effect from "./pages/Effect";
import Home from "./pages/Home";
import RouterNav from "./components/RouterNav";
import Found404 from "./components/Found404";
import SignUp from "./pages/SignUp";
import MemoCallback from "./pages/MemoCallback";
import Context from "./pages/Context";
import Colors from "./pages/Colors";
import CardProduct from "./pages/CardProduct";
import Filter from "./pages/Filter";
import RandomNumber from "./pages/RandomNumber";
import Shopping from "./pages/Shopping";
import XOX from "./pages/XOX";
import ScrollBar from "./pages/ScrollBar";
import GalleryFilter from "./pages/GalleryFilter";
import IncomeTracker from "./pages/IncomeTracker";
import TicTacToe from "./pages/TicTacToe";
import TodoReact from "./pages/TodoReact";
import ReactDersleriContext from "./pages/ReactDersleriContext";
import TodoContext from "./pages/TodoContext";
import Money from "./pages/Money";
import Animation from "./pages/Animation";
import TodoFark from "./pages/TodoFark";

function App() {
  return (
    <div>
      <Router>
        <RouterNav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contant" element={<Contant />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/memocallback" element={<MemoCallback />} />
          <Route path="/context" element={<Context />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/cardproduct" element={<CardProduct />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/randomnumber" element={<RandomNumber />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/xox" element={<XOX />} />
          <Route path="/scroll" element={<ScrollBar />} />
          <Route path="/galleryfilter" element={<GalleryFilter />} />
          <Route path="/incometracker" element={<IncomeTracker />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/todoreact" element={<TodoReact />} />
          <Route path="/reactderslericontext" element={<ReactDersleriContext />} />
          <Route path="/todocontext" element={<TodoContext />} />
          <Route path="/money" element={<Money />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/todofark" element={<TodoFark />} />
          <Route path="/*" element={<Found404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
