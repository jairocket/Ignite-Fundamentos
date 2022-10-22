//@ts-ignore
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={"https://avatars.githubusercontent.com/u/71157451?v=4"}
          />
          <div className={styles.authorInfo}>
            <strong>Jailson Anjos</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Várias coisas escritas e ditas e interessantes para caramba nesse
          momento global e milenar. Inclusive, não sei o motivo pelo qual tudo
          isso aconteceu agora, pois o céu é seu.
        </p>
        <a href="">#novoprojeto</a> <a href="">#nlw</a>
      </div>
      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
