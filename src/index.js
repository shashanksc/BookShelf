import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import Shelf from "./pages/Shelf/Shelf";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

ReactDOM.render(
  <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  </AppProvider>,
  document.getElementById('root')
);
