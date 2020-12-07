import React from 'react';

class SearchBar extends React.Component  {

  state = {
    term : ''
  }

  onInputClick() {
    // console.log("Clicked!");
  }

  onInputChange(event) {
    console.log("Changed!");
    console.log(event.target.value);
  }

  onFormSubmit = (event) => {
    event.preventDefault(); 
    this.props.onSearchBarSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onClick={this.onInputClick}
              onChange={ (e) => {
                this.setState({term: e.target.value})
              }  }/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;