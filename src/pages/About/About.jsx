import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Welcome to BookWanderer</h2>
            <p className='fs-17'>BookWanderer is a passion project created by Shashank Saurabh with the goal of providing book lovers with an intuitive and enjoyable way to explore and discover new books.</p>
            <p className='fs-22'>Our Mission</p>
            <p className='fs-17'>At BookWanderer, our mission is to make the world of literature more accessible and exciting for everyone. Whether you're a seasoned bookworm or just starting your reading journey, we're here to help you find your next great read.</p>
            <p className='fs-22'>What We Offer</p>
            <p className='fs-17'>Book Search: Search for books by title, author, or genre using the Open Library API.<br />
            Book Details: View detailed information about each book, including summaries, publication details, and cover images.<br/>
            Save Favorites: Save your favorite books to local storage for easy access and future reference.</p>
            
            <p className='fs-22'>Get in Touch</p>
            <p className='fs-17'>I'd love to hear from you! If you have any questions, suggestions, or feedback about BookWanderer, please don't hesitate to reach out to me at fvyrtyler@gmail.com or connect with me on social media https://www.linkedin.com/in/shashank-saurabh-a42816190/.</p>
            <p className='fs-22'>Thank You</p>
            <p className='fs-17'>Thank you for joining me on this literary adventure! I hope you enjoy using BookWanderer as much as I enjoyed creating it.</p>
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
