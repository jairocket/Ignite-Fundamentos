import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="Diego Fernandes" content="conteudo do post" />
      <Post author="Jai Anjos" content="conteudo do post" />
      <Post />
    </div>
  );
}
