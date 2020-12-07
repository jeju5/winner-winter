import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplashClient from '../api/unsplash';

class App extends React.Component {

  state = {
    images: []
  }

  onSearchBarSubmit = async (term) => {
    const response = await unsplashClient.get(
      '/search/photos',
      {
        params: { query: term},
      }
    );

    this.setState({
      images: response.data.results
    });
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px'}}>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}


 
export default App;