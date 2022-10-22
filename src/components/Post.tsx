//@ts-ignore
import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

interface PostType {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  content: string;
}

export function Post(props: PostType) {
  const [comments, setComments] = useState(["Post muito bacana, hein?"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtFormatted = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedAtRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = function () {
    event?.preventDefault();
    //const element = event?.target as HTMLFormElement;
    //const newComment = element.comment.value;
    setComments([...comments, newCommentText]);
    setNewCommentText("");
    //element.comment.value = "";
    //console.log(newComment);
  };

  const handleNewCommentChange = function () {
    const element = event?.target as HTMLTextAreaElement;
    setNewCommentText(element.value);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time
          title={publishedAtFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedAtRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {props.content} <a href="">#novoprojeto</a> <a href="">#nlw</a>
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article>
  );
}
