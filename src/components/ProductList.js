import React from 'react';

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
		const contentData = this.props.contents;
		return (
				<div className="row">
					{contentData.map(item => (
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