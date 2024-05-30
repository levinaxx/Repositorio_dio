import { Container } from "./styles";
import Input from "../components/input";
import gitlogo from "../assets/octocat.png";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositorio nao encontrado");
  };

  const handleRemoveRepo = (id) =>{
    // Ultilizar metodo Filter(ainda vou fazer, juro [30/05/2024])
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="Github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
