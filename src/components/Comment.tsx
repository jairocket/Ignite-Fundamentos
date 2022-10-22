//@ts-ignore
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProp {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment(props: CommentProp) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = function () {
    props.onDeleteComment(props.content);
  };

  const handleLikeComment = function () {
    setLikeCount((state) => state + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src={"https://avatars.githubusercontent.com/u/71157451?v=4"}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jailson Anjos</strong>
              <time title="11 de maio às 8:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          {props.content}
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
