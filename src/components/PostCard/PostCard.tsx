import { Link } from 'react-router-dom'
import { PostData } from '../../Interfaces/Post'
import styles from './PostCard.module.css'
import BotaoPrincipal from '../BotaoPrincipal/BotaoPrincipal'


interface PostProps {

    post: PostData

}

const PostCard = ({ post }: PostProps) => {
  return (
    <Link to={`/posts/${post.id}`}>
    <div className={styles.post}>
        <img 
            className={styles.capa}
            src={`/posts/${post.id}/capa.png`} 
            alt="Imagem de capa do post" 
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal >
          Ler
        </BotaoPrincipal >
    </div>
    </Link>
  )
}

export default PostCard