import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import "./ForumPost.css";

const reactionsMap = {
  like: "👍",
  celebrate: "🎉",
  support: "❤️",
  insightful: "💡",
  curious: "🤔",
};

const ForumPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReactions, setShowReactions] = useState(null);
  const [reactions, setReactions] = useState({});
  const [showComments, setShowComments] = useState(null);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const [replies, setReplies] = useState({});
  const [replyText, setReplyText] = useState({});
  const [showReplies, setShowReplies] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:7001/api/users/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(res.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des posts :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // 🔹 Fonction pour calculer le total des réactions
  const getTotalReactions = (postId) => {
    if (!reactions[postId]) return 0;
    return Object.values(reactions[postId]).reduce(
      (sum, r) => sum + r.count,
      0
    );
  };

  // 🔹 Handle reaction
  const handleReaction = async (postId, type) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:7001/api/users/posts/${postId}/reactions`,
        { type },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchReactions(postId); // mise à jour après réaction
    } catch (err) {
      console.error("Erreur lors de la réaction :", err.response?.data || err);
    }
  };

  // 🔹 Fetch reactions
  const fetchReactions = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:7001/api/users/posts/${postId}/reactions`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReactions((prev) => ({ ...prev, [postId]: res.data }));
    } catch (err) {
      console.error("Erreur lors de la récupération des réactions :", err);
    }
  };

  // 🔹 Fetch comments
  const fetchComments = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:7001/api/users/posts/${postId}/comments`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments((prev) => ({ ...prev, [postId]: res.data.comments }));
    } catch (err) {
      console.error("Erreur lors de la récupération des commentaires :", err);
    }
  };

  // 🔹 Fetch replies
  const fetchReplies = async (commentId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `http://localhost:7001/api/users/comments/${commentId}/replies`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReplies((prev) => ({ ...prev, [commentId]: res.data.replies }));
    } catch (err) {
      console.error(
        "Erreur lors de la récupération des replies :",
        err.response?.data || err
      );
    }
  };

  // 🔹 Add comment
  const handleComment = async (postId) => {
    if (!commentText[postId] || commentText[postId].trim() === "") return;
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:7001/api/users/posts/${postId}/comments`,
        { content: commentText[postId] },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCommentText((prev) => ({ ...prev, [postId]: "" }));
      fetchComments(postId);
    } catch (err) {
      console.error(
        "Erreur lors de l'ajout du commentaire :",
        err.response?.data || err
      );
    }
  };

  // 🔹 Add reply
  const handleReply = async (commentId) => {
    if (!replyText[commentId] || replyText[commentId].trim() === "") return;
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:7001/api/users/comments/${commentId}/replies`,
        { content: replyText[commentId] },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setReplyText((prev) => ({ ...prev, [commentId]: "" }));
      fetchReplies(commentId);
    } catch (err) {
      console.error(
        "Erreur lors de l'ajout de la reply :",
        err.response?.data || err
      );
    }
  };

  if (loading) return <p>Chargement des posts...</p>;

  return (
    <div className="forum-posts">
      {posts.length === 0 ? (
        <p>Aucun post disponible.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            {/* Author */}
            <div className="post-author">
              <img
                src={`http://localhost:7001/images/${post.author.logo || "default.png"
                  }`}
                alt={post.author.username}
                className="author-logo"
              />
              <div>
                <h4>{post.author.username}</h4>
                <small>{post.author.role}</small>
              </div>
            </div>

            {/* Content */}
            <p className="post-content">{post.content}</p>

            {/* Media */}
            {(post.photo || post.document) && (
              <div className="post-media">
                {post.photo && post.photo !== "client.png" && (
                  <img
                    src={`http://localhost:7001${post.photo}`}
                    alt="post"
                  />
                )}
                {post.document && post.document !== "client.png" && (
                  <>
                    {post.document.endsWith(".pdf") ? (
                      <a
                        href={`http://localhost:7001${post.document}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pdf-preview"
                      >
                        
                        <p style={{ fontSize: "14px", textAlign: "center", marginTop: "5px" }}>
                          {post.document.split("/").pop()}
                        </p>
                      </a>
                    ) : (
                      <img
                        src={`http://localhost:7001${post.document}`}
                        alt="document"
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                      />
                    )}

                  </>
                )}
              </div>
            )}

            {/* Reactions + Comments */}
            <div className="post-stats">
              <span
                className="reaction-btn"
                onClick={() => {
                  setShowReactions(
                    showReactions === post._id ? null : post._id
                  );
                  fetchReactions(post._id);
                }}
              >
                <FaRegThumbsUp /> {getTotalReactions(post._id)}
              </span>

              <span
                className="comment-btn"
                onClick={() => {
                  const postId = post._id;
                  setShowComments(showComments === postId ? null : postId);
                  fetchComments(postId);
                }}
              >
                <FaRegComment /> {post.commentsCount || 0}
              </span>
            </div>

            {/* Reaction menu */}
            {showReactions === post._id && reactions[post._id] && (
              <div className="reaction-menu">
                {Object.entries(reactionsMap).map(([type, emoji]) => (
                  <span
                    key={type}
                    className="reaction-option"
                    onClick={() => handleReaction(post._id, type)}
                  >
                    {emoji}
                  </span>
                ))}
                <div className="reaction-list">
                  {Object.entries(reactions[post._id]).map(
                    ([type, data]) => (
                      <div key={type} className="reaction-group">
                        <span className="reaction-type">
                          {reactionsMap[type]} {data.count}
                        </span>
                        <div className="reaction-users">
                          {data.users.map((user) => (
                            <div
                              key={user._id}
                              className="reaction-user"
                            >
                              <img
                                src={`http://localhost:7001/images/${user.logo || "default.png"
                                  }`}
                                alt={user.username}
                                className="reaction-user-logo"
                              />
                              <span>{user.username}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Comment list */}
            {showComments === post._id && comments[post._id] && (
              <div className="comment-list">
                {comments[post._id].length > 0 ? (
                  comments[post._id].map((comment) => (
                    <div key={comment._id} className="comment-item">
                      <img
                        src={`http://localhost:7001/images/${comment.author.logo || "default.png"
                          }`}
                        alt={comment.author.username}
                        className="comment-user-logo"
                      />
                      <div className="comment-content">
                        <span>
                          <strong>{comment.author.username}</strong> (
                          {comment.author.role}) : {comment.content}
                        </span>
                        <small className="comment-date">
                          {new Date(
                            comment.createdAt
                          ).toLocaleString()}
                        </small>

                        {/* Toggle replies */}
                        <button
                          className="toggles-replies-btn"
                          onClick={() => {
                            setShowReplies((prev) => ({
                              ...prev,
                              [comment._id]: !prev[comment._id],
                            }));
                            if (!replies[comment._id])
                              fetchReplies(comment._id);
                          }}
                        >
                          {showReplies[comment._id]
                            ? "Hide the answers"
                            : "view responses"}
                        </button>

                        {/* Replies list */}
                        {showReplies[comment._id] &&
                          replies[comment._id]?.map((reply) => (
                            <div
                              key={reply._id}
                              className="reply-item"
                            >
                              <img
                                src={`http://localhost:7001/images/${reply.author.logo || "default.png"
                                  }`}
                                alt={reply.author.username}
                                className="reply-user-logo"
                              />
                              <span>
                                <strong>{reply.author.username}</strong> (
                                {reply.author.role}) : {reply.content}
                              </span>
                              <small>
                                {new Date(
                                  reply.createdAt
                                ).toLocaleString()}
                              </small>
                            </div>
                          ))}

                        {/* Add reply */}
                        <input
                          type="text"
                          placeholder="answer..."
                          value={replyText[comment._id] || ""}
                          onChange={(e) =>
                            setReplyText((prev) => ({
                              ...prev,
                              [comment._id]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleReply(comment._id)
                          }
                        />
                        <button onClick={() => handleReply(comment._id)}>
                          Répondre
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Aucun commentaire</p>
                )}
              </div>
            )}

            {/* Add comment */}
            <div className="post-comment">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText[post._id] || ""}
                onChange={(e) =>
                  setCommentText((prev) => ({
                    ...prev,
                    [post._id]: e.target.value,
                  }))
                }
                onKeyDown={(e) =>
                  e.key === "Enter" && handleComment(post._id)
                }
              />
              <button onClick={() => handleComment(post._id)}>
                Comment
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ForumPost;
