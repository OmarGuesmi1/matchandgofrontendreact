import React, { useState } from 'react';
import './ForumAdd.css';
import { FaPhotoVideo, FaVideo, FaFileAlt, FaPenFancy } from 'react-icons/fa';
import { assets } from '../../assets/assets'; // Remplace avec ton image par défaut

const ForumAdd = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  return (
    <div className="forum-card">
      <div className="forum-top">
        <img src={assets.auth} alt="Profile" className="forum-avatar" />
        <input
          type="text"
          placeholder="Start a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="forum-input"
        />
      </div>

      <div className="forum-bottom">
        <label className="forum-option">
          <FaPhotoVideo className="forum-icon photo" />
          <span>Photo</span>
          <input type="file" accept="image/*" hidden onChange={(e) => setImage(e.target.files[0])} />
        </label>

        <label className="forum-option">
          <FaVideo className="forum-icon video" />
          <span>Video</span>
          <input type="file" accept="video/*" hidden onChange={(e) => setVideo(e.target.files[0])} />
        </label>

        <div className="forum-option">
          <FaFileAlt className="forum-icon doc" />
          <span>Document</span>
        </div>

        <div className="forum-option">
          <FaPenFancy className="forum-icon article" />
          <span>Write Article</span>
        </div>
      </div>
    </div>
  );
};

export default ForumAdd;
