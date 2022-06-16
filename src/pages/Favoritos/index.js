import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './favoritos.css'

import {toast} from 'react-toastify';

export default function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        
        const myList = localStorage.getItem("@keaneflix");
        setFilmes(JSON.parse(myList) || []);
    }, []);

    function deleteMovie(id) {
            let filtroFilmes = filmes.filter((movie)=>{
                return(movie.id !== id)
            })
            setFilmes(filtroFilmes)
            localStorage.setItem("@keaneflix", JSON.stringify(filtroFilmes))
            toast.success("Filme removido com sucesso!")
    }

    return (
        <div className='my-movies'>
            <h1 >
                Minha Lista de Filmes
            </h1>
            {filmes.length === 0 && <span>Nenhum filme salvo</span>}
            <ul>
                {filmes.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/filme/${movie.id}`}>ver detalhes</Link>
                                <button onClick={()=> deleteMovie(movie.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )

}