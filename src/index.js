import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import Shelf from "./pages/Shelf/Shelf";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "shelf" element = {<Shelf />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);