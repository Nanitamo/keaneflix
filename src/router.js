import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';

import Filme from './pages/Filme';

import Header from './components/Header';

import Erro from './pages/Erro';
export default function RoutesApp() {

    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='/filme/:id' element={<Filme />}>Home</Route>


                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}