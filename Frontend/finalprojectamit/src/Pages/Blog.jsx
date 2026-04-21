import React from 'react';
import { BLOG } from '../api/mockData';
import blogThumb from '../assets/kabab.png';

function Blog(){
  return (
    <div className="container" style={{padding:'36px 0'}}>
      <div className="kicker">Our Blog & Articles</div>
      <h1>Read All Articles</h1>
      <div className="blog-grid">
        {BLOG.map(b => (
          <div className="blog-card" key={b.id}>
            <img src={blogThumb} alt={b.title} />
            <div style={{padding:12}}>
              <div className="kicker">{b.date}</div>
              <h3 style={{margin:'6px 0'}}>{b.title}</h3>
              <a href="#" className="btn btn-ghost">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blog;