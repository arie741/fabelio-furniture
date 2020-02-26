import React from 'react';

class FilterComponent extends React.Component {
	constructor(props) {
	    super(props);
  	}
	render(){
		const contentData = this.props.contents;
		const furniturestyles = this.props.styleslist;
		return (
				<form>
				  <div className="row">
				  	<div className="col-6">
				  		<div className="form-group">
					    	<input type="text" className="form-control" id="SearchFurnitureInput" placeholder="Search Furniture"/>
					  	</div>	
				  	</div>
				  </div>
				  <div className="row">
				  	<div className="col-6">
				  		<div className="form-group dropdown" id="FurnitureStyleInputDropDown">
				  			<button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
							    Furniture Style
							</button>
						    <div className="dropdown-menu" id="FurnitureStyleInput">
						      {furniturestyles.map(item => (
						      	<a key={item} className="btn-dropdown dropdown-item">
						      		{item}
						      		<div className="float-right"><input type="checkbox" className="form-check-input"/></div>
						      	</a>
						      	))}	
						    </div>
					  	</div>
				  	</div>
				  	<div className="col-6">
				  		<div className="form-group dropdown" id="DeliveryTimeInputDropDown">
				  			<button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
							    Delivery Time
							</button>
						    <div className="dropdown-menu" id="DeliveryTimeInput">
						      <a className="btn-dropdown dropdown-item">
						      	1 week
						      	<div className="float-right"><input type="checkbox" className="form-check-input"/></div>
						      </a>
						      <a className="btn-dropdown dropdown-item">
						      	2 week
						      	<div className="float-right"><input type="checkbox" className="form-check-input"/></div>
						      </a>
						      <a className="btn-dropdown dropdown-item">
						      	1 month
						     	<div className="float-right"><input type="checkbox" className="form-check-input"/></div>
						      </a>
						      <a className="btn-dropdown dropdown-item">
						      	more
						      	<div className="float-right"><input type="checkbox" className="form-check-input"/></div>
						      </a>
						    </div>
					  	</div>
				  	</div>
				  </div>
				</form>
				);
	}
}

export default FilterComponent;