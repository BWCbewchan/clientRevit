import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Archive from './pages/Archive/Archive';
import Calendar from './pages/Calendar/Calendar';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Main from './pages/Main';
import Manager from './pages/Manager/Manager';
import Map from './pages/Map/Map';
import Message from './pages/Message/Message';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/view" element={<Home />} />
                    <Route path="/manager" element={<Manager />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </Router>
        );
    }
}

export default App;
