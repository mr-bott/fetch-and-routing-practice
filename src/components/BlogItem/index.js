// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
class BlogItem extends Component {
  render() {
    const {details} = this.props
    const {id, title, topic, author, avatarUrl, imageUrl} = details
    return (
      <Link to={`/blogs/${id}`} className="link">
        <li className="li">
          <img src={imageUrl} alt={title} className="main-img" />
          <div className="medium">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="profile-container">
              <img src={avatarUrl} alt="" className="profile" />
              <p className="topic">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
