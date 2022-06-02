import React from 'react'
import PropTypes from 'prop-types'

function getCurrencySymbol(code) {
    if (code === "USD") {
        return "$";
    } else if (code === "EUR") {
        return "€";
    } 
    return "GBP ";
}

function getQuantityClassName(quantity) {
    if (quantity <= 10) {
        return "level-low";
    }
    if (quantity <= 20) {
        return "level-medium";

    }
    return "level-high";
}

function trimString(str, limit) {
    var result = str.substring(0, limit);
    if (str.length > limit) {
        result += "...";
    }

    return result;
}

function ListingItem({  state,
    url, 
    MainImage, 
    title, 
    currency_code, 
    price, 
    quantity
}) {

if (state !== "active") {
return null;
}

return (<div className="item">
{

MainImage && MainImage.url_570xN && url && (
    <div className="item-image">
        <a href={url}>
            <img src={MainImage.url_570xN} alt={title}/>
        </a>
    </div>
)
}
<div className="item-details">
{title && <p className="item-title">{trimString(title, 50)}</p>}
{price && <p className="item-price">{getCurrencySymbol(currency_code)}{price}</p>}
{quantity && <p className={"item-quantity " + getQuantityClassName(quantity)}>{quantity} left</p>}
</div>
</div>)
}

ListingItem.propTypes = {
    url : PropTypes.string,
    MainImage : PropTypes.object,
    title : PropTypes.string,
    currency_code : PropTypes.string,
    price : PropTypes.string,
    quantity : PropTypes.number
}

export default ListingItem