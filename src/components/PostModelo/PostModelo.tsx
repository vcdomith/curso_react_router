import styles from './PostModelo.module.css'

interface PostModeloProps {

    fotoCapa: string
    titulo: string
    children: React.ReactNode

}


const PostModelo = ({ fotoCapa, titulo, children }: PostModeloProps) => {
  return (
    <article className={styles.postModeloContainer}>
        <div 
            className={styles.fotoCapa}
            style={{ backgroundImage: `url(${fotoCapa})` }}
        >
        </div>
        
        <h2 className={styles.titulo}>
            {titulo}
        </h2>
        
        <div className={styles.postConteudoContainer}>
            {children}
        </div>


    </article>
  )
}

export default PostModelo