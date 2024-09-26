// const accessToken = 'EAAUKnu0SMvkBO1Ke0fjvEd9YaEv0nY34At7kZBXOUMC4bRsFzu70IaxUvhn9pJNuFH5lVQRaWlfxS7Ho59uJNvOcuM3JEPBHWEZAGRtwQZALlM3IYpZCDH20SAuzjF2exMMh6ee0ScFQM1Qq9JWOwQtZAZAazOLt5cQ4bZAVFZAudNw0potQ13sJkJDZA4TLXuZBYZCZBioMj3IqdeJgZCb9dNCrQ0PRLfDYyFFh6wLkzAHbTaNnjh9d8t9HJnZBV6IOe8fQZDZD';  // Reemplaza con tu token de acceso real

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = 'EAAF54ZA0iPJIBO8osPk3YOBjubymV6Uh80m9xnfqQEYXAbPE1E78ZCQ5FpNY7ZAeqXPpkSIePwZA6NcKZClIfgiDyaVpAD9EDHykATRxkZCWhjxwZC43KaZC0pDJdeDhsybdeDCZBgPAd260IrQcdBLtrfybWfZAFSj8tS4aFxdl77T75XdmpNH9FOKfygiAZCXVh6iCOuHC3nqvZCy5SOnovFb6XzfO3VF3m1LmeTmoKxyNGS8nhXFPI6GF';  // Reemplaza con tu token de acceso real

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;

      try {
        const response = await axios.get(url);
        setPosts(response.data.data.slice(0, 4)); // Últimas 4 publicaciones
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        console.log('URL:', url);  // Añadido para depuración
        if (error.response) {
          console.log('Error data:', error.response.data);
          console.log('Error status:', error.response.status);
          console.log('Error headers:', error.response.headers);
        }
      }
    };

    fetchInstagramPosts();
  }, [accessToken]);

  return (
    <div>
        <p>hola</p>
      {posts.map(post => (
        <div key={post.id}>
          {post.media_type === 'IMAGE' && <img src={post.media_url} alt={post.caption} />}
          {post.media_type === 'VIDEO' && <video controls src={post.media_url} />}
          <p>{post.caption}</p>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">Ver en Instagram</a>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
