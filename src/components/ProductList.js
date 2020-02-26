import React from 'react';

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
					  	<div className="card">
					  		<div className="card-body">
					  			<div className="row name-price">
					  				<h5 className="card-title float-left">{item.name}</h5>
					  				<p className="card-text float-right">{item.price}</p>
					  			</div>					  			
					  			<div className="row desc">
					  				<p className="card-text">{item.description}</p>
						  			<a href="" className="card-link">{item.furniture_style}</a>
						  			<a href="" className="card-link dt-days">{item.delivery_time} Days</a>
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