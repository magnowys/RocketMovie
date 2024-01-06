import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";


import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");


    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Digite o titulo do filme")
        };

        if (!rating || rating < 0 || rating > 5) {
            return alert ("Dê uma nota entre 0 a 5 ao filme")
        };

        if (newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. clique para adicionar ou deixe o campo vazio")
        };

        await api.post("/movie", {
            title,
            rating,
            description,
            tags,
          });

        alert("Filme criado com sucesso");
        navigate("/");
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link onClick={() => navigate(-1)}>
                            <FiArrowLeft />
                            Voltar
                        </Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <MovieItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <MovieItem
                                isNew
                                placeholder="Novo marcador"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div>
                        <Button title="Excluir filme" onClick={() => navigate("/")}/>
                        <Button title="Salvar" onClick={handleNewMovie}/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}