import React, { useRef } from 'react';
import './ForumSection.css';
import { assets, forumPosts } from '../../assets/assets';

const ForumSection = () => {
  const containerRef = useRef(null);

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
        {forumPosts.map((post) => (
          <article className="fs-post-card" key={post.id}>
            <div className="fs-user-info">
              <img src={post.userPhoto} alt={`${post.firstName} ${post.lastName}`} className="fs-user-photo" />
              <div>
                <h4 className="fs-user-name">{post.firstName} {post.lastName}</h4>
                <p className="fs-user-role">{post.role}</p>
              </div>
            </div>
            <p className="fs-post-content">"{post.content}"</p>
            <div className="fs-post-reactions">
              <span>👍 {post.likes}</span>
              <span>💬 {post.comments}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default ForumSection;
