import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { App } from './App'
import { MyNotes } from './routes/MyNotes/MyNotes';
import { Account } from './routes/Account/Account';
import { Settings } from './routes/Settings/Settings';
import { Trash } from './routes/Trash/Trash';
import './index.scss'
import { Home } from './routes/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='notes' element={<MyNotes />} />
                <Route path='account' element={<Account />}/>
                <Route path='settings' element={<Settings />} />
                <Route path='trash' element={<Trash />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
);