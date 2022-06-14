import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import API from '../../services/api'
import './home.css'
//URL API: https://api.themoviedb.org/3/movie/550?api_key=d50845d835a718097f921b3f2403254f

export default function Home() {
    const [filmes,  setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes() {
            const response = await API.get("movie/now_playing", {
                params:{
                    api_key: "d50845d835a718097f921b3f2403254f",
                    language:"pt-PT",
                    page: 1,
                }
            })
            //console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }
        loadFilmes()
    }, [])

        if(loading){
            return(
                <div className="loading">
                    <h2>Carregando Filmes ...</h2>
                </div>
            )
        }
    return (

        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}