import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

//const solidHeart = <FontAwesomeIcon icon={["fa","heart"]}  size="2x" />;
// const hollowHeart = <FontAwesomeIcon icon={["fas","plus"]} className="hollow-heart" />;
//^ THIS SHIT DOESNT FUCKING WORK

class FavouriteBtn extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFavourite: props.favourite
    };
  }

    toggleFavouriteHandler = () => {
      const isFavourite = this.state.isFavourite;
      this.setState({isFavourite: !isFavourite});
      //will need more functionality here
    }
    

    render(){
      return(
        <div className="fav-plan-btn-container"  onClick={this.toggleFavouriteHandler}> 
          <FontAwesomeIcon 
            icon="heart" 
            size="2x" 
            className= {this.state.isFavourite ? "fav-icon-red" : "fav-icon-grey" }/> 
        </div>
      );
    }
    
}

FavouriteBtn.propTypes = {
  favourite: PropTypes.bool.isRequired,

};

export default FavouriteBtn;