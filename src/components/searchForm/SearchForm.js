import React from 'react';
import axios from 'axios';
import ImageList from '../imageList/ImageList'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageName: '',
      imageList: []
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(e) {

    e.preventDefault()
    let response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: this.state.imageName,
      },
      headers: {
        Authorization: 'Client-ID 6DcvGsPFyLWRx-FyMCs97yMfP3iAa7GdIRmOGXFk-js',
      }
    });
    this.setState({imageList: response.data.results})
  }


  handleChange(e) {
    this.setState({imageName: e.target.value})
  }

  render() {
    return(
      <div className='ui segment'>
        <form className ='ui form' onSubmit = {this.handleSubmit}>
          <label>Image Search</label>
          <div className='field'>
            <input value={this.state.imageName} type='text' placeholder='enter car name' onChange={this.handleChange} />
          </div>
          <input  type='submit' />
        </form>
        <ImageList imageList = {this.state.imageList}/>
      </div>
    )
  }
}


export default SearchForm;