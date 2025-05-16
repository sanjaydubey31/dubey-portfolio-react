import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import { marked } from "marked";

// Vite-specific dynamic import for markdown files
const postFiles = import.meta.glob("../../blogs/*.md", { as: "raw" });

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      const entries = Object.entries(postFiles);
      const posts = await Promise.all(
        entries.map(async ([path, loader]) => {
          const content = await loader();
          // Extract filename for title
          const match = path.match(/([^/\\]+)\.md$/);
          const title = match ? match[1] : "Untitled";
          return {
            title,
            content,
          };
        })
      );
      setBlogPosts(posts);
    }
    loadPosts();
  }, []);

  if (selectedPost) {
    return (
      <div className={styles.blogContainer}>
        <br/><br/>
        <button className={styles.backBtn} onClick={() => setSelectedPost(null)}>&larr; Back to all posts</button>
        <div className={styles.postCard}>
          <h2 className={styles.postTitle}>{selectedPost.title}</h2>
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: marked.parse(selectedPost.content) }} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogContainer}>
        <br/><br/>
      <h1>Blog</h1>
      {blogPosts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <ul className={styles.postsList}>
          {blogPosts.map((post, idx) => (
            <li key={idx} className={styles.postListItem}>
              <button className={styles.postLink} onClick={() => setSelectedPost(post)}>
                {post.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}; 