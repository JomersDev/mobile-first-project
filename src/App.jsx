import { useState } from 'react'
import Header from './Components/Header'
import Hero from "./Components/Hero"
import BlogList from "./Components/BlogList"
import Footer from "./Components/Footer"
import './App.css'
import { blogData } from "./blogData"

function App() {

  const blogElements = blogData.map(blog => 
    <BlogList 
      key={blog.id}
      title={blog.title} 
      description={blog.description} 
      image={blog.img} 
      date={blog.date} 
    />
  )

  return (
    <div className="app">
      <Header />
      <Hero />
      {blogElements}
      <p className="view-more">View More</p>
      <Footer />
    </div>
  )
}

export default App
