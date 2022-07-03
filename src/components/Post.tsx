import styles from './Post.module.css';
import {Comment} from './Comment';
import {Avatar} from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import {format, formatDistanceToNow} from 'date-fns';
import {enGB} from 'date-fns/esm/locale';

interface Post {
  author: {
    name: string,
    role: string,
    avatarUrl: string,
  }
  content: [
    {
      type: 'paragraph' | 'link';
      content: {
        text: string,
        url?: string,
      }
    }
  ]
  publishedAt: Date,
}

export const Post = ({author, content, publishedAt}: Post) => {
  const [comments, setComments] = useState(['Well done, congratulations!! 👏']);
  const [newCommentText, setNewCommentText] = useState(['']);
  
  const publishedDateFormatted = format(publishedAt, 'PPPp', {
    locale: enGB
  });
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });
  
  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    // @ts-ignore
    setNewCommentText('');
    
  };
  
  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };
  
  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement> ) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  };
  
  const deleteComment = (commentToDelete: string) => {
    const commentWithOutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(commentWithOutDeletedOne);
  };
  
  const isNewCommentEmpty = newCommentText.length === 0;
  
  return (
    
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            hasBorder={true}
          />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span> {author.role} </span>
          </div>
        </div>
        
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      
      </header>
      
      <div className={styles.content}>
        
        {content.map(line => {
            if (line.type === 'paragraph')
              return <p key={line.content.text}> {line.content.text} </p>;
            
            if (line.type === 'link')
              return (
                <p key={line.content.text}>
                  <a
                    href={line.content.url}
                    target="_blank">{line.content.text}
                  </a>
                </p>
              );
          }
        )}
      
      </div>
      
      <form name="commentForm" onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Add a comment..."
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <div className={styles.footer}>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Post
          </button>
        </div>
      </form>
      
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment} D
            />);
        })}
      </div>
    
    </article>
  );
};