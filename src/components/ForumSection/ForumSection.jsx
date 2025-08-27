import React, { useRef, useState, useEffect } from 'react';
import './ForumSection.css';
import { assets } from '../../assets/assets';

const ForumSection = () => {
  const containerRef = useRef(null);
  const [posts, setPosts] = useState([]);

  // Charger les posts depuis le backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:7001/api/users/getpostwithmanyreaction");
        const data = await res.json();
        setPosts(data); // 🔥 on stocke les vrais posts
      } catch (error) {
        console.error("Erreur fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="fs-forum-section">
      <div className="fs-forum-container">
        <img src={assets.quote} alt="quote" className="fs-quote-image" />
        <header className="fs-forum-header">
          <img src={assets.matchgorforum} alt="Forum Logo" className="fs-forum-brand" />
          <h2 className="fs-forum-title">Top Posts</h2>
        </header>

        <button className="fs-scroll-btn left" onClick={scrollLeft}>‹</button>
        <button className="fs-scroll-btn right" onClick={scrollRight}>›</button>

        <div className="fs-posts-wrapper" ref={containerRef}>
          <div className="fs-posts-container">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article className="fs-post-card" key={post._id}>
                  <div className="fs-user-info">
                    <img
                      src={
                        post.author.logo
                          ? `http://localhost:7001/images/${post.author.logo}`
                          : `http://localhost:7001/images/client.png`
                      }
                      alt={post.author.username}
                      className="fs-user-photo"
                      onError={(e) => { e.target.src = `http://localhost:7001/images/client.png`; }}
                    />
                    <div>
                      <h4 className="fs-user-name">{post.author.username}</h4>
                      <p className="fs-user-role">{post.author.role}</p>
                    </div>
                  </div>

                  <p className="fs-post-content">"{post.content}"</p>

                  <div className="fs-post-reactions">
                    <span>👍 {post.reactionsCount}</span>
                  </div>
                </article>
              ))
            ) : (
              <p className="fs-empty">Aucun post trouvé 😢</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
