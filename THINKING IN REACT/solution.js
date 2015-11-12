import React from 'react';

export const FilterableProductTable = React.createClass({
    render () {
        return (
            <SearchBar/>
        );
    }
});

export const SearchBar = React.createClass({
    render () {
        return (
            <form>
                <input type="text" placeholder="Search..."/>
                <label>
                    <input type="checkbox"/> Only show products in stock
                </label>
            </form>
        );
    }
});

module.exports.FilterableProductTable = FilterableProductTable;
module.exports.SearchBar = SearchBar;
