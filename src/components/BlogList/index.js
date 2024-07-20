import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    bloglist: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      topic: each.topic,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
    }))
    this.setState({bloglist: updatedData, isLoading: false})
  }

  render() {
    const {bloglist, isLoading} = this.state
    return (
      <ul className="ul">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bff" height={50} width={50} />
          </div>
         
        ) : (
           bloglist.map(each => <BlogItem details={each} key={each.id} />)
        )}
      </ul>
    )
  }
}

export default BlogList
