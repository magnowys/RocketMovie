import { useState, useEffect } from "react";

import { Container, Content } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Rating } from "../../components/Rating"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Details() {
  const [data, setData] = useState(null);

  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();

  const navigate = useNavigate();

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover?")

    if (confirm) {
      await api.delete(`/movie/${params.id}`);
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, [])

  return (
    <Container>
      <Header />

      {
        data && 
        <main>
          <div>
            <Link onClick={() => navigate(-1)}>
              <FiArrowLeft />
              Voltar
            </Link>
            <ButtonText title="Excluir Filme" onClick={handleRemove}/>
          </div>
          <Content>

            <div>
              <div>
                <h1>
                  {data.title}
                </h1>

                <Rating grade={data.rating} isBigSize={false} />
              </div>

              <div>
                <span>
                  <img
                    src={avatarUrl}
                    alt={user.name}
                  />
                  Por {user.name}
                </span>
                <span>
                  <CiClock2 />
                  {data.updated_at}
                </span>
              </div>

              {
                data.tags &&
                <footer>
                    {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }

            </div>

            <p>
              {data.description}
            </p>
          </Content>
        </main>
      }
    </Container>
  )
}