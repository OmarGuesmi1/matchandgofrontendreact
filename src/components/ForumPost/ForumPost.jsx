import React, { useState } from 'react';
import './ForumPost.css';
import { FaRegThumbsUp, FaRegCommentDots, FaShare } from 'react-icons/fa';
import { posts as initialPosts } from '../../assets/assets';

const ForumPost = () => {
  // State pour gérer quels posts sont likés
  const [likedPosts, setLikedPosts] = useState({});

  // State pour afficher/masquer commentaires par post
  const [visibleComments, setVisibleComments] = useState({});

  // State pour les nouveaux commentaires tapés (par post)
  const [newComment, setNewComment] = useState({});

  // State pour stocker localement les posts avec commentaires modifiés
  const [posts, setPosts] = useState(initialPosts);

  // Toggle Like
  const toggleLike = (postId) => {
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  // Toggle affichage commentaires
  const toggleComments = (postId) => {
    setVisibleComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  // Changement dans l'input commentaire
  const handleCommentChange = (postId, value) => {
    setNewComment((prev) => ({ ...prev, [postId]: value }));
  };

  // Ajouter un nouveau commentaire au post
  const handleAddComment = (postId) => {
    const commentText = newComment[postId]?.trim();
    if (!commentText) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          // Création d'un nouveau commentaire avec id unique (timestamp)
          const newCmt = {
            id: Date.now(),
            author: "You",  // Tu peux changer ça selon ton système d'auth
            text: commentText,
          };
          return {
            ...post,
            commentsList: [...(post.commentsList || []), newCmt],
            comments: (post.comments || 0) + 1,
          };
        }
        return post;
      })
    );

    // Vider l'input après ajout
    setNewComment((prev) => ({ ...prev, [postId]: '' }));
  };

  return (
    <div className="forum-posts-container">
      {posts.map((post) => {
        const isLiked = likedPosts[post.id] || false;
        const likesCount = post.reactions + (isLiked ? 1 : 0);

        return (
          <div key={post.id} className="forum-post-card">
            <div className="post-header">
              <img src={post.avatar} alt="avatar" className="post-avatar" />
              <div>
                <h4 className="post-author">{post.name}</h4>
                <span className="post-date">{post.date}</span>
              </div>
            </div>

            <p className="post-content">{post.content}</p>

            {post.image && <img src={post.image} alt="post" className="post-media" />}
            {post.video && (
              <video controls className="post-media">
                <source src={post.video} type="video/mp4" />
              </video>
            )}

            <div className="post-stats">
              <span>{likesCount} Likes</span>
              <span>{post.comments} Comments</span>
            </div>

            <div className="post-actions">
              <button
                onClick={() => toggleLike(post.id)}
                className={isLiked ? 'liked' : ''}
                aria-label="Like post"
              >
                <FaRegThumbsUp /> Like
              </button>
              <button onClick={() => toggleComments(post.id)} aria-label="Toggle comments">
                <FaRegCommentDots /> Comment
              </button>
              <button aria-label="Share post"><FaShare /> Share</button>
            </div>

            {visibleComments[post.id] && (
              <div className="comment-section">
                <div className="comment-list">
                  {(post.commentsList || []).map((c) => (
                    <div key={c.id} className="comment-item">
                      <strong>{c.author}</strong>: {c.text}
                    </div>
                  ))}
                </div>

                <div className="comment-input">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment[post.id] || ''}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddComment(post.id);
                    }}
                    aria-label="Write a comment"
                  />
                  <button onClick={() => handleAddComment(post.id)}>Post</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ForumPost;
