import { RiShutDownLine } from "react-icons/ri"
import { Link } from "react-router-dom";

import { Input } from "../Input";

import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo Titulo" /*icon={FiSearch}*//>

            <Profile >
                    <div>
                        <strong>Magno Marques</strong>

                        <Logout>
                            sair
                        </Logout>
                    </div>
                    
                    <Link to="/profile">
                        <img src="https://github.com/magnowys.png" 
                        alt="Foto do usuario"
                        />
                    </Link>
            </Profile>

        </Container>
    )
}