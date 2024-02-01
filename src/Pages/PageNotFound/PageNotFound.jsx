import React from 'react'
import './notFound.css'
import notFound from '../../Assets/NotFound/6363147.jpg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <div className="notFound-section">
        <img src={notFound} alt="notFound" />
        <div className="notFound-info">
        <h1>Page Not Found</h1>
        <span>Oops! It seems like the page you are looking for has taken a detour. The digital trail might have gotten a bit tangled</span>

        <h2>What you can do:</h2>
        <ol>
            <li>Double-check the web address for any typos.</li>
            <li>Return to the <Link to='/'> home page </Link> and navigate from there</li>
            <li>If you clicked on a link, it might be outdated or pointing to a page that no longer exists</li>
        </ol>
        <Link to='/'>
        <button className="btn" >Go to Home</button></Link>
        </div>

        
        
    </div>
    </>
  )
}

export default PageNotFound