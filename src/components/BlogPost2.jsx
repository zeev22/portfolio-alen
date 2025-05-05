import React from 'react';

// Import the temporary image from the assets folder
import d1 from '../assets/Day1-7/D1h.jpg';
import d2 from '../assets/Day1-7/D2p.jpg';
import d3 from '../assets/Day1-7/D3i.jpg';
import d4 from '../assets/Day1-7/D4f.jpg';
import d5 from '../assets/Day1-7/D5.jpg';
import d6 from '../assets/Day1-7/D6a.jpg';
import d7 from '../assets/Day1-7/D6a.jpg';
// Import the consolidated CSS
import '../BlogPost2.css';

const BlogPost2 = () => {
  // Sample data for blog posts using the temporary image
  const blogData = [
    { day: 'Day 1: A Journey Through Manila', location: 'Intramuros, Fort Santiago, Rizal Park, Manila Cathedral, San Agustin Church, Mall of Asia', date: 'April 7, 2025', image: d1, link: 'https://eductourblog.netlify.app/event/1' },
    { day: 'Day 2: Vessel traffic Managment System, SBECC', location: 'Subic Bay, Olongapo', date: 'April 8, 2025', image: d2 },
    { day: 'Day 3: Museum Visit', location: 'National Museum of Natural History, and Museo ni Manuel Quezon', date: 'May 6, 2025', image: d3 },
    { day: 'Day 4: Discovering Bangko Sentral & HYTEC Power Inc."', location: 'Bangko Sentral & HYTECH Power Inc.', date: 'April 9, 2025', image: d4 },
    { day: 'Day 5: Navigating Manila', location: 'LRT2 and MMDA', date: 'May 8, 2025', image: d5 },
    { day: 'Day 6: Exploring Baguio', location: 'PMA, Strawberry Farm, Bell Church, Mines View Park & The Mansion', date: 'April 10, 2025', image: d6 },
    { day: 'Day 7: Exploring Baguio D-2', location: 'Baguio Public Market, Burnham Park', date: 'May 11, 2025', image: d7 },
  ];

  return (
    <section className="blogpost2-container">
      <div className="section-topBlur" />
      <div className="section-bottomBlur" />
      <div className="intro-container">
        <h2 className="intro-title">INDUSTRIAL VISIT</h2>
        <p className="intro-description">
          Our industrial visit was a great mix of hands-on learning and exploration. It gave us a closer look at real-world work environments, sparked new ideas, and offered experiences that were both inspiring and unforgettable.
        </p>
      </div>

      <div className="blogpost2-grid-container">
        <h3 className="section-title">TOUR HIGHLIGHTS</h3>
        <div className="blogpost2-grid">
          {blogData.map((post, index) => (
            // Check if the link exists for a specific post, else use default
            <a
              href={post.link || `https://your-blog-website.com/day-${index + 1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card-link"
              key={index}
            >
              <div className="blog-card">
                <img src={post.image} alt={post.day} className="blog-image" onError={(e) => { e.target.src = '/fallback-image.jpg'; }} />
                <div className="blog-info">
                  <h3 className="blog-day">{post.day}</h3>
                  <p className="blog-location">{post.location}</p>
                  <p className="blog-date">{post.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost2;
