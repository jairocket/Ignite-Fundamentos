import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
//@ts-ignore
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="conteudo do post" />
          <Post author="Jai Anjos" content="conteudo do post" />
        </main>
      </div>

      <Post />
    </div>
  );
}
