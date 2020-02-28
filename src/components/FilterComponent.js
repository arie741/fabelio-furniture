import React from 'react';

//Checkbox filter component for furniture style checkboxes
class StylesCheckbox extends React.Component{
	constructor(props){
		super(props);
		this.state = {isClicked: false}

		this.onClickHandle = this.onClickHandle.bind(this);
	}

	onClickHandle(item){
		if (this.state.isClicked){
			this.setState({isClicked: false});
			this.props.checkBoxOnClick(item, "uncheck");
		} else {
			this.setState({isClicked: true});
			this.props.checkBoxOnClick(item, "check");
		}
	}

	render(){
		return (
				<div className="float-right custom-control custom-checkbox">
					<input onClick={(item) => this.onClickHandle(this.props.checkboxItem)} type="checkbox" className="custom-control-input form-check-input" id={"customCheck" + this.props.checkboxItem}/>
					<label className="custom-control-label" htmlFor={"customCheck" + this.props.checkboxItem}></label>
				</div>
			)
	}
}

//Checkbox filter component for delivery time checkboxes
class DeliveryTimeCheckbox extends React.Component{
	constructor(props){
		super(props);
		this.state = {isClicked: false}

		this.onClickHandle = this.onClickHandle.bind(this);
	}

	onClickHandle(item){
		if (this.state.isClicked){
			this.setState({isClicked: false});
			this.props.checkBoxOnClick(item, "uncheck");
		} else {
			this.setState({isClicked: true});
			this.props.checkBoxOnClick(item, "check");
		}
	}

	render(){
		return (
				<div className="float-right custom-control custom-checkbox">
					<input onClick={(item) => this.onClickHandle(this.props.checkboxItem)} id={"customCheck" + this.props.checkboxItem} type="checkbox" className="custom-control-input form-check-input"/>
					<label className="custom-control-label" htmlFor={"customCheck" + this.props.checkboxItem}></label>
				</div>
			)
	}
}

//Main body of filter component
class FilterComponent extends React.Component {
	constructor(props) {
	    super(props);
	    this.searchInputHandle = this.searchInputHandle.bind(this);
	    this.furnitureStyleHandle = this.furnitureStyleHandle.bind(this);
	    this.deliveryTimeHandle = this.deliveryTimeHandle.bind(this);
  	}

  	searchInputHandle(event){
  		this.props.onInputChange(event.target.value);
  	}

  	furnitureStyleHandle(item, event){
  		this.props.onFurnitureStylesChange(item, event);
  	}

  	deliveryTimeHandle(item, event){
  		this.props.onDeliveryTimeHandle(item, event);
  	}

	render(){
		const furniturestyles = this.props.styleslist;
		return (
				<form>
				  <div className="row">
				  	<div className="col-6">
				  		<div className="form-group">
					    	<input type="text" className="form-control" onChange={this.searchInputHandle} id="SearchFurnitureInput" placeholder="Search Furniture"/>
					  	</div>	
				  	</div>
				  </div>
				  <div className="row">
				  	<div className="col-6 dropdown-inputs">
				  		<div className="form-group dropdown" id="FurnitureStyleInputDropDown">
				  			<button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
							    Furniture Style
							</button>
						    <div className="dropdown-menu" id="FurnitureStyleInput">
						      {furniturestyles.map(item => (
						      	<a key={item} className="btn-dropdown dropdown-item">
						      		{item}
						      		<StylesCheckbox 
							      		checkBoxOnClick={(item, event) => this.furnitureStyleHandle(item, event)} 
							      		checkboxItem={item}
						      		/>
						      	</a>
						      	))}	
						    </div>
					  	</div>
				  	</div>
				  	<div className="col-6 dropdown-inputs">
				  		<div className="form-group dropdown" id="DeliveryTimeInputDropDown">
				  			<button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">
							    Delivery Time
							</button>
						    <div className="dropdown-menu" id="DeliveryTimeInput">
						      <a className="btn-dropdown dropdown-item">
						      	1 week
						      	<DeliveryTimeCheckbox 
							      	checkBoxOnClick={(item, event) => this.deliveryTimeHandle(item, event)} 
							      	checkboxItem={7}
						      	/>
						      </a>
						      <a className="btn-dropdown dropdown-item">
						      	2 week
						      	<DeliveryTimeCheckbox 
						      		checkBoxOnClick={(item, event) => this.deliveryTimeHandle(item, event)} 
						      		checkboxItem={14}
						      	/>
						      </a>
						      <a className="btn-dropdown dropdown-item">
						      	1 month
						     	<DeliveryTimeCheckbox 
						     		checkBoxOnClick={(item, event) => this.deliveryTimeHandle(item, event)} 
						     		checkboxItem={30}
						     	/>
						      </a>
						      <a className="btn-dropdown dropdown-item">
						      	> 1 month
						      	<DeliveryTimeCheckbox 
						     		checkBoxOnClick={(item, event) => this.deliveryTimeHandle(item, event)} 
						     		checkboxItem="DTmore"
						     	/>
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