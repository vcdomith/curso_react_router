import styles from './Inicio.module.css'

import postsData from '../../json/posts.json'
import Post from "../../components/Post/Post"
import { PostData } from "../../Interfaces/Post"


const posts: PostData[] = postsData as PostData[]

const Inicio = () => {
  return (
    <main>

      <ul className={styles.posts}>
        {posts.map((post: PostData) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </ul>

    </main>
  )
}

export default Inicio