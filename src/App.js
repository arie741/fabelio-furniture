import React from 'react';
import ProductList from './components/ProductList.js';
import FilterComponent from './components/FilterComponent.js';

const fabAPi = "http://www.mocky.io/v2/5c9105cb330000112b649af8";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
          searchInput: "",
          furnitureStyles: [],
          deliveryTime: []
      },
      data: {
          error: null,
          isLoaded: false,//this state will change to true if the api is loaded
          items: [],
          furnitureStylesList: []
      }
    };

    this.onSearchInputChangeHandle = this.onSearchInputChangeHandle.bind(this);
    this.onFurnitureStylesChangeHandle = this.onFurnitureStylesChangeHandle.bind(this);
    this.onDeliveryTimeChangeHandle = this.onDeliveryTimeChangeHandle.bind(this);
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
    this.setState({filter: {
                            searchInput: event,
                            furnitureStyles: this.state.filter.furnitureStyles,
                            deliveryTime: this.state.filter.deliveryTime
                            }});
  }

  onFurnitureStylesChangeHandle(item, event){
    if(event === "check"){//if a style filter is check, it will add a style filter
      const furnitureStylesFilter = this.state.filter.furnitureStyles;
      furnitureStylesFilter.push(item);
      this.setState({filter: {
                              searchInput: this.state.filter.searchInput,
                              furnitureStyles: furnitureStylesFilter,
                              deliveryTime: this.state.filter.deliveryTime
                              }});
    } else {//if a style filter is unchecked, it will REMOVE a style filter
      const furnitureStylesFilter = this.state.filter.furnitureStyles;
      furnitureStylesFilter.splice( furnitureStylesFilter.indexOf(item), 1 );
      this.setState({filter: {
                              searchInput: this.state.filter.searchInput,
                              furnitureStyles: furnitureStylesFilter,
                              deliveryTime: this.state.filter.deliveryTime
                              }});
    }
  }

  onDeliveryTimeChangeHandle(item, event){
    var deliveryTimeFilter = [];
    switch(event) {
      case "check":///if a delivery time filter is check, it will add a delivery time filter
        deliveryTimeFilter = this.state.filter.deliveryTime;
        deliveryTimeFilter.push(item);
        this.setState({filter: {
                                searchInput: this.state.filter.searchInput,
                                furnitureStyles: this.state.filter.furnitureStyles,
                                deliveryTime: deliveryTimeFilter
                                }});
        break;

      case "uncheck":///if a delivery time filter is check, it will REMOVE a delivery time filter
        deliveryTimeFilter = this.state.filter.deliveryTime;
        deliveryTimeFilter.splice( deliveryTimeFilter.indexOf(item), 1 );
        this.setState({filter: {
                                searchInput: this.state.filter.searchInput,
                                furnitureStyles: this.state.filter.furnitureStyles,
                                deliveryTime: deliveryTimeFilter
                                }});
        break;
      default:
        // code block
    }  
  }

  render(){
    const { error, isLoaded } = this.state;
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
                onFurnitureStylesChange={(item, event) => this.onFurnitureStylesChangeHandle(item, event)}
                onDeliveryTimeHandle={(item, event) => this.onDeliveryTimeChangeHandle(item, event)}
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
