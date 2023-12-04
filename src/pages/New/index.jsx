import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { MovieItem } from "../../components/MovieItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <FiArrowLeft/>
                            Voltar
                        </Link>
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">
                        <div className="tags">
                            <MovieItem value="React"/>
                            <MovieItem isNew placeholder="Novo marcador" />
                        </div>
                    </Section>

                    <div>
                        <Button title="Excluir filme"/>
                        <Button title="Salvar"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}