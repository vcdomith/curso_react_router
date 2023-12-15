import { Route, Routes, useParams } from "react-router-dom"
import posts from '../../json/posts.json'
import PostModelo from "../../components/PostModelo/PostModelo"
import ReactMarkdown from "react-markdown"
import './Post.css'
import NaoEncontrada from "../NaoEncontrada/NaoEncontrada"
import PaginaPadrao from "../../components/PaginaPadrao/PaginaPadrao"
import PostCard from "../../components/PostCard/PostCard"
import { PostData } from "../../Interfaces/Post"
// import Banner from "../../components/Banner/Banner"

interface parametrosProps {

    id?: string

}

const Post = () => {

    function range(start: number, stop: number, step: number = 1): number[] {
        if (typeof stop == 'undefined') {
            // one param defined
            stop = start;
            start = 0;
        }

        if (typeof step == 'undefined') {
            step = 1;
        }

        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }

        const result = [];
        for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }

        return result;
    }

    const parametros: parametrosProps = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    const getRelevantPosts = (posts: PostData[]): number[] => {

        let relevantPostsId: number[] = []
        const idArray: number[] = range(1, posts.length+1)
        const idAtual = Number(parametros.id)

        switch (idAtual) {

            case 1:
                relevantPostsId = [
                    idAtual+1,
                    idAtual+2,
                    idAtual+3,
                    idAtual+4,

                ]
                break;

            case 2:
                relevantPostsId = [
                    idAtual-1,
                    idAtual+1,
                    idAtual+2,
                    idAtual+3,

                ]
                break;

            case idArray.at(-1):

                relevantPostsId = [
                    idAtual-1,
                    idAtual-2,
                    idAtual-3,
                    idAtual-4,

                ]
                break;
            case idArray.at(-2):

                relevantPostsId = [
                    idAtual-3,
                    idAtual-2,
                    idAtual-1,
                    idAtual+1,

                ]
                break;

            default:
                relevantPostsId = [
                    idAtual-2,
                    idAtual-1,
                    idAtual+1,
                    idAtual+2,

                ]
                break;
        }

        console.log(relevantPostsId);

        return relevantPostsId

    }

    const relevantPostIds = getRelevantPosts(posts)
    const relevantPosts = posts.filter( post => relevantPostIds.includes(post.id))


    // posts.map( post => console.log(post.id, posts.length) )

  return (

    post?
    <Routes >
        <Route path="*" element={<PaginaPadrao />}>

            <Route index element={

                <PostModelo
                fotoCapa={`/posts/${post.id}/capa.png`}
                titulo={post.titulo}
                >

                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className="posts-relevantes-titulo">Outros posts que você pode gostar:</h2>

                <div className="posts-relevantes">

                    {relevantPosts.map( post =>
                    
                        <PostCard  
                            key={post.titulo} 
                            post={post}
                        />

                    )}

                </div>

                </PostModelo>

            }/>

        </Route>
    </Routes >
    // <>
    // <Banner />
    // <PostModelo
    //     fotoCapa={`/posts/${post.id}/capa.png`}
    //     titulo={post.titulo}
    //     >
    //     <div className="post-markdown-container">
    //         <ReactMarkdown>
    //             {post.texto}
    //         </ReactMarkdown>
    //     </div>

    // </PostModelo>
    // </>

    : <NaoEncontrada />
  )
}

export default Post