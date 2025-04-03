import React from 'react';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
  return (
    <div className = "app__social">
      <div>
        <a href="https://x.com/CodeBase_x" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>
      <div>
        <a href="https://youtube.com/@codebase-tv?si=DZWK0Q3iBHQZAevE" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
      </div>
      <div>
       <a href="https://www.linkedin.com/in/codebase-inc/" target="_blank" rel="noreferrer">
         <FaLinkedin />
       </a>
      </div>
    </div>
  )
}

export default SocialMedia
