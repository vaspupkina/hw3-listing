import React from 'react'
import PropTypes from 'prop-types'
import ListingItem from './ListingItem';

function Listing({items = []}) {
    return (
      <div className="item-list">
          {
              items.map((item) => {
                  return <ListingItem key={item.listing_id} {...item}/>;
              })
          }
      </div>
    )
  }
  
  Listing.propTypes = {
      items : PropTypes.arrayOf(PropTypes.object)
  }
  
  export default Listing