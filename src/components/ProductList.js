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
					  			<h5 className="card-title">{item.name}</h5>
					  			<p className="card-text">{item.description}</p>
					  			<p className="card-text">{item.price}</p>
					  			<a href="" className="card-link">{item.furniture_style}</a>
					  			<a href="" className="card-link">{item.delivery_time} Days</a>
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