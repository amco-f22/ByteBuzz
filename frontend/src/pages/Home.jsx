import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api';
import PostCard from '../components/PostCard';
import { HiPlus } from 'react-icons/hi';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
      </div>
    );
  }

  return (
    <div>
      <div className="home-header">
        <h1>Welcome to ByteBuzz ⚡</h1>
        <p>Where ideas take shape. Share your stories, insights, and perspectives.</p>
        <div className="vibe-tags">
          <span className="vibe-tag">📝 Stories</span>
          <span className="vibe-tag">💡 Ideas</span>
          <span className="vibe-tag">🌍 Perspectives</span>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-emoji">📝</div>
          <h3>No posts yet</h3>
          <p>Be the first to publish your thoughts</p>
          <Link to="/create" className="btn btn-primary">
            <HiPlus size={18} />
            Write something
          </Link>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
