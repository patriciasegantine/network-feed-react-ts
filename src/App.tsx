import './global.css'
import {Header} from './components/Header'
import {Post} from './components/Post'
import {Sidebar} from './components/Sidebar'
import styles from './App.module.css'
import { posts } from './api/posts'


export const App = () => {
  
  return (
    <>
      <Header/>
      <div className={ styles.wrapper }>
        <Sidebar/>
        <main>
          { posts.map( post => {
            return (
              <Post
                key={ post.id }
                author={ post.author }
                publishedAt={ post.publishedAt }
                contentInfo={ post.contentInfo }
              />
            )
          } ) }
        </main>
      </div>
    </>
  )
}
