import styles from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react';
import {Avatar} from './Avatar';
import {useState} from 'react';


export const Comment = ({content, onDeleteComment}) => {
  
  const [likeCount, setLikeCount] = useState(0);
  
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };
  
  const handleLikeComment = () => {
    setLikeCount(state => state + 1);
  };
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="avatar"/>
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong className={styles.author}> Devon Lane </strong>
              <time title="11th may 2022" dateTime="2022-05-11"> about 1 hour ago</time>
            </div>
            
            <button
              title="delete"
              onClick={handleDeleteComment}
            >
              <Trash size={20}/>
            </button>
          
          </header>
          
          
          <p>{content}</p>
        
        </div>
        
        <footer className={styles.footer}>
          <button
            type="submit"
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20}/> Like
            <span>{likeCount}</span>
          </button>
        
        </footer>
      </div>
    
    </div>
  );
};