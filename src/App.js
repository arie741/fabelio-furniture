import React from 'react';
import ProductList from './components/ProductList.js';
import FilterComponent from './components/FilterComponent.js';

const fabAPi = "http://www.mocky.io/v2/5c9105cb330000112b649af8";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
          searchInput: ""
      },
      data: {
          error: null,
          isLoaded: false,//this state will change to true if the api is loaded
          items: [],
          furnitureStylesList: []
      }
    };

    this.onSearchInputChangeHandle = this.onSearchInputChangeHandle.bind(this);
  }

  componentDidMount() {
    //Calling the fabelio API 
    fetch(fabAPi)
      .then(res => res.json())
      .then(
        (content) => {
          this.setState({
            isLoaded: true,
            data: {items: content.products,
                   furnitureStylesList: content.furniture_styles},
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  onSearchInputChangeHandle(event){
    this.setState({filter: {searchInput: event}});
  }

  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {//Will send error message if it failed to connect to API.
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {//Will render a 'loading' component if it hasn't connected to the api yet.
      return <div>Loading...</div>;
    } else {//if API connection is succesful
      return (
        <div className="container">
          <div className="card">
            <div className="card-header" id="InputComponents">
              <FilterComponent 
                styleslist={this.state.data.furnitureStylesList}
                onInputChange={this.onSearchInputChangeHandle}
                />
            </div>
            <div className="card-body">
              <ProductList contents={this.state.data.items} productFilter={this.state.filter}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
