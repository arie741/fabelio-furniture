import React from 'react';

//Operator function
function filterCheck(filterArray, itemArray){
	var i;
	var checker = false;
	for(i=0; i < filterArray.length; i++){
		if((filterArray[i] === "DTmore") && parseInt(itemArray) > 30){
			checker = true;
		} else if(itemArray.indexOf(filterArray[i]) !== -1) {
			checker = true;
		}
	}
	return checker;
}

//this function format the price into an IDR currency format 
function ItemPrice(props){
	const priceNum = new Intl.NumberFormat(['ban', 'id']).format(props.price);
	return <p className="card-text price-text float-right">RP. {priceNum}</p>			
}

//this function is for limiting product description to max 114 characters
function trimDescText(str){
	if (str.length >= 114){
		return str.substring(0, 114) + "...";
	} else {
		return str;
	}
}

//main product list component
class ProductList extends React.Component {
	constructor(props) {
	    super(props);
  	}

	render(){
		const searchFilter = this.props.productFilter.searchInput;
		const styleFilter = this.props.productFilter.furnitureStyles;
		const deliveryTimeFilter = this.props.productFilter.deliveryTime;

		var filteredData = this.props.contents;

		//filter by search text
		if(searchFilter.length > 0){
			filteredData = filteredData.filter(function(item){//data filter function
				const itemStr = item.name.toUpperCase();
				if (itemStr.search(searchFilter.toUpperCase()) >= 0){//filter condition
				    return true;
				    }
			})
		}

		//filter by furniture styles
		if(styleFilter.length > 0){
			filteredData = filteredData.filter(function(item){
				const stylesArray = item.furniture_style; 
				if (filterCheck(styleFilter, stylesArray)) {
					return true;
				}
			})
		}

		//filter by delivery time
		if(deliveryTimeFilter.length > 0){
			filteredData = filteredData.filter(function(item){
				const deliveryTimeArray = item.delivery_time; 
				if (filterCheck(deliveryTimeFilter, deliveryTimeArray)){
					return true;
				}
			})
		}

		return (
				<div className="row">
					{filteredData.map(item => (
					  <div className="col-lg-6" key={item.name}>
					  	<div className="card product-item">
					  		<div className="card-body">
					  			<div className="row">
					  				<div className="col-12">
					  					<h4 className="card-title float-left name-text"><b>{item.name}</b></h4>
					  					<ItemPrice price={item.price}/>
					  				</div>
					  			</div>					  			
					  			<div className="row">
					  				<div className="col-12 desc-text">
					  					<p className="card-text">{trimDescText(item.description)}</p>
					  				</div>
					  			</div>
					  			<br/>
					  			<div className="row">
					  				<div className="col-12 furniture-style-text">
					  					<p>
					  					{item.furniture_style.map(style => (
					  						<span key={style}>{style}  </span>
					  					))}
					  					</p>
					  				</div>
					  			</div>
					  			<div className="row">
					  				<div className="col-12">
					  					<p className="card-link dt-days float-right">{item.delivery_time} Days</p>
					  				</div>
					  			</div>
					  		</div>
					  	</div>
					  	<br/>
					  </div>
		            ))}
				</div>
				);
	}
}

export default ProductList;