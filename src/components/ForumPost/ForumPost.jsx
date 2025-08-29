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
  const [reactions, setReactions] = useState({}); // { postId: [liste réactions] }

  // 🔹 Récupération des posts
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

  // 🔹 Ajouter / retirer une réaction
  const handleReaction = async (postId, type) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:7001/api/users/posts/${postId}/reactions`,
        { type },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // 🔄 Recharge les posts
      const updatedPosts = await axios.get("http://localhost:7001/api/users/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(updatedPosts.data);
      setShowReactions(null);
    } catch (err) {
      console.error("Erreur lors de la réaction :", err.response?.data || err);
    }
  };

  // 🔹 Charger les réactions d’un post
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

  if (loading) return <p>Chargement des posts...</p>;

  return (
    <div className="forum-posts">
      {posts.length === 0 ? (
        <p>Aucun post disponible.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            {/* 🔹 Auteur */}
            <div className="post-author">
              <img
                src={`http://localhost:7001/images/${post.author.logo || "default.png"}`}
                alt="user"
                className="author-logo"
              />
              <div>
                <h4>{post.author.username}</h4>
                <small>{post.author.role}</small>
              </div>
            </div>

            {/* 🔹 Contenu */}
            <p className="post-content">{post.content}</p>

            {/* 🔹 Media */}
            {(post.photo || post.document) && (
              <div className="post-media">
                {post.photo && post.photo !== "client.png" && (
                  <img src={`http://localhost:7001${post.photo}`} alt="post" />
                )}
                {post.document && post.document !== "client.png" && (
                  <>
                    {post.document.endsWith(".pdf") ? (
                      <iframe
                        src={`http://localhost:7001${post.document}`}
                        width="100%"
                        height="250px"
                        title="Document Preview"
                      ></iframe>
                    ) : (
                      <img src={`http://localhost:7001${post.document}`} alt="document" />
                    )}
                  </>
                )}
              </div>
            )}

            {/* 🔹 Réactions + commentaires */}
            <div className="post-stats">
              {/* Bouton principal (ouvre le menu de réactions) */}
              <span
                className="reaction-btn"
                onClick={() => {
                  setShowReactions(showReactions === post._id ? null : post._id);
                  fetchReactions(post._id); // 👉 charge les réactions regroupées
                }}
              >
                <FaRegThumbsUp /> {post.reactionsCount || 0}
              </span>

              {/* Menu de réactions */}
              {showReactions === post._id && (
                <div className="reaction-menu">
                  {/* 👉 Options pour ajouter une réaction */}
                  {Object.entries(reactionsMap).map(([type, emoji]) => (
                    <span
                      key={type}
                      className="reaction-option"
                      onClick={() => handleReaction(post._id, type)}
                    >
                      {emoji}
                    </span>
                  ))}

                  {/* 👉 Liste des réactions existantes */}
                  <div className="reaction-list">
                    {reactions[post._id] ? (
                      Object.entries(reactions[post._id]).map(([type, data]) => (
                        <div key={type} className="reaction-group">
                          <span className="reaction-type">
                            {reactionsMap[type]} {data.count}
                          </span>
                          <div className="reaction-users">
                            {data.users.map((user) => (
                              <div key={user._id} className="reaction-user">
                                <img
                                  src={`http://localhost:7001/images/${user.logo || "default.png"}`}
                                  alt={user.username}
                                  className="reaction-user-logo"
                                />
                                <span>{user.username}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Aucune réaction</p>
                    )}
                  </div>
                </div>
              )}

              <span>
                <FaRegComment /> {post.commentsCount || 0}
              </span>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default ForumPost;
