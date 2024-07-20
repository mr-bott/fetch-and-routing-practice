// Write your JS code here
import {Component} from 'react'
import './index.css'
class BlogItemDetails extends Component {
  state = {
    itemdetails: {},
    isloaded: false,
  }
  componentDidMount() {
    this.itemdetails()
  }
  itemdetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const each = await response.json()
    console.log(each)
    const updatedData = {
      id: each.id,
      title: each.title,
      topic: each.topic,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      content: each.content,
    }
    this.setState({itemdetails: updatedData, isloaded: true})
  }

  render() {
    const {itemdetails} = this.state
    const {id, title, topic, author, avatarUrl, imageUrl, content} = itemdetails
    return (
      
      <div className="item-main">
        <h1 className="item-title">{title}</h1>

        <div className="item-profile-container">
          <img src={avatarUrl} alt="" className="item-profile" />
          <p className="content">{author}</p>
        </div>

        <img src={imageUrl} alt={title} className="item-img" />

        <div className="item-medium">
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }
}
export default BlogItemDetails
