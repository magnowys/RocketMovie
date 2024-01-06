import { FiPlus } from "react-icons/fi"

import { useState, useEffect } from "react";

import { Container, Content, NewMovie } from "./styles"

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movie?title=${search}`);
            setMovies(response.data);
        }

        fetchMovies(movies)
    }, [search]);

    return (
        <Container>
            <Header>
                <Input
                    placeholder="Pesquisar pelo Titulo" /*icon={FiSearch}*/
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>

            <main>
                <h2>Meus filmes</h2>

                <NewMovie to="New">
                    <FiPlus />
                    Adicionar filme
                </NewMovie>
            </main>

            <Content>
                {
                    movies.map(movie => (
                        <Movie
                            key={String(movie.id)}
                            data={movie}
                            onClick={() => handleDetails(movie.id)}
                        />
                    ))
                }
            </Content>

        </Container>
    )
}