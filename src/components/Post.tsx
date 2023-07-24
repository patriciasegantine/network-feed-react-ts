import styles from './styles/Post.module.css';
import {Comment} from './Comment';
import {Avatar} from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import {format, formatDistanceToNow} from 'date-fns';
import {enGB} from 'date-fns/esm/locale';

interface PostProps {
  author: {
    name: string,
    role: string,
    avatarUrl: string,
  }
  contentInfo: {
    type: string, content: {text: string, url?: undefined | string}
  }[]
  publishedAt: Date,
}

export const Post = ({author, contentInfo, publishedAt}: PostProps) => {
  const [comments, setComments] = useState<string[]>(['Well done, congratulations!! 👏']);
  const [newCommentText, setNewCommentText] = useState('');
  
  const publishedDateFormatted = format(publishedAt, 'PPPp', {
    locale: enGB
  });
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enGB,
    addSuffix: true,
  });
  
  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };
  
  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };
  
  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement> ) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  };
  
  const handleDeleteComment = (commentToDelete: string) => {
    const newComment = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(newComment);
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
        
        {contentInfo?.map(line => {
            if (line.type === 'paragraph')
              return <p key={line?.content.text}> {line?.content.text} </p>;
            
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
              onDeleteComment={handleDeleteComment}
            />);
        })}
      </div>
    
    </article>
  );
};
