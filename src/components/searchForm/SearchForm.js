import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      carDetails: { carName: '', carAge: 0 },
      carList: []
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    
    e.preventDefault()
    //use axios here to perform serach and return list of cars which gets tagged onto state
  }

  handleChange(e) {
    this.setState({carDetails: {carName: e.target.value}})
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input value={this.state.car} type='text' placeholder='enter car name' onChange={this.handleChange} />
          <input  type='submit' />
        </form>
        <div>{this.state.carDetails.carName}</div>
      </div>
    )
  }
}


export default SearchForm;