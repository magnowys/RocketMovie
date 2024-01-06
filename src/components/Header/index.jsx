import { RiShutDownLine } from "react-icons/ri"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logout } from "./styles";

export function Header({children}) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>

            <h1>RocketMovies</h1>

            {children}

            <Profile >
                <div>
                    <strong>{user.name}</strong>

                    <Logout onClick={handleSignOut}>
                        sair
                    </Logout>
                </div>

                <Link to="/profile">
                    <img src={avatarUrl}
                        alt={user.name}
                    />
                </Link>
            </Profile>

        </Container>
    )
}