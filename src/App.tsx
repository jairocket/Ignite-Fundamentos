import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
//@ts-ignore
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/71157451?v=4",
      name: "Jailson Anjos",
      role: "Web developer",
    },
    publishedAt: new Date("2022-10-21 19:45:12"),
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque dui. Praesent non arcu dignissim, luctus mi mollis, consequat dolor. Aliquam rutrum nibh sit amet pulvinar consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis libero condimentum, lobortis justo vitae, venenatis ante. Proin sem leo, rhoncus in luctus id, fringilla vel sem. Sed viverra erat sed ipsum sodales, id gravida risus laoreet. Fusce nec convallis tellus.",
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/71157451?v=4",
      name: "Alter Ego",
      role: "Public servant",
    },
    publishedAt: new Date("2022-10-21 20:00:45"),
    content:
      "Maecenas tempor fringilla nibh, eu vulputate libero. Nam blandit tincidunt risus, ut dignissim odio rhoncus in. Nullam vestibulum, orci ac fermentum mollis, erat sem consectetur lectus, eget pretium nisl magna id augue. Fusce imperdiet, purus sed pharetra efficitur, mi diam vestibulum purus, eget vulputate erat ligula eu eros. Nam et ex in mi faucibus scelerisque. Vivamus nec ex ut leo mollis finibus. Aenean interdum dolor nec purus volutpat mattis. Donec dignissim mi eros, eu mattis dui varius eu.",
  },

  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/71157451?v=4",
      name: "Another Alter Ego",
      role: "Cashier",
    },
    publishedAt: new Date("2022-10-22 10:15:45"),
    content:
      "Suspendisse varius eros sed dignissim cursus. Fusce nibh nibh, sodales vitae felis quis, molestie aliquet enim. Mauris quam erat, mattis vitae venenatis in, molestie eget mauris. Praesent eu magna non dui efficitur suscipit non id eros. Vivamus suscipit orci eget leo convallis, quis euismod lacus pretium. Aliquam sagittis volutpat quam. Nam ut enim eget mi commodo placerat venenatis quis tortor. Aliquam gravida libero vitae nulla tempus, ut facilisis mi auctor. Proin varius mi id turpis posuere, id elementum ex condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porttitor non sem vel pharetra.",
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
