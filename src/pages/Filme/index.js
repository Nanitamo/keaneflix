import { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

import API from '../../services/api'
import './filme.css'
export default function Filme() {

    const navigation = useNavigate();

    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadFilme() {

            await API.get(`/movie/${id}`, {
                params: {
                    api_key: "d50845d835a718097f921b3f2403254f",
                    language: "pt-PT",
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false) 
                }).catch(() => {
                    console.log("Filme não encontrado")
                    navigation("/", {replace: true})
                    return;
                })

        }
        loadFilme()

        return () =>{
            console.log("Componente foi desmontado");
        }
    }, [])
    if (loading) {
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }
    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src= {`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            
            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a target="_blank" rel="externaç" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )

}