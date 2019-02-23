import React from 'react';

import './SearchBar.css';


const sortByOptions = {
  "Best Match": "best_match"
  , "Highest Rated": "rating"
  , "Most Reviewed": "review_count"
};

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {term: '', location: '', sortby: 'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map( sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return (
          <li key={sortByOptionValue} 
          className={this.getSortByClass(sortByOptionValue)} 
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}
          </li>
        );
    });
  }

  getSortByClass(sortByOption){
    return (this.state.sortby === sortByOption)?'active':'';
  }

  handleSortByChange(sortByOption){
    this.setState({sortby: sortByOption});
  }

  handleTermChange(e){
    this.setState({term: e.target.value});
  }

  handleLocationChange(e){
    this.setState({location: e.target.value});
  }

  handleSearch(e){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortby);
    e.preventDefault();
  }

  render(){
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" required/>
          <input onChange={this.handleLocationChange} placeholder="Where?" required/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;
