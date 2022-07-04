import styles from './styles/Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import {Avatar} from './Avatar'

export const Sidebar = () => {
  
  return (
    <aside className={ styles.sidebar }>
      <img
        className={ styles.cover }
        alt="background"
        src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
      />
      
      <div className={ styles.profile }>
        <Avatar
          src="https://github.com/patriciasegantine.png"
          hasBorder
          alt="avatar"
        />
        <strong>Patricia Segantine</strong>
        <span>Front-end Developer</span>
      </div>
      
      <footer>
        <a href="#">
          <PencilLine/>
          Update profile
        </a>
      </footer>
    </aside>
  )
}