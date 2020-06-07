import React from 'react';
import TextField from '@material-ui/core/TextField';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.updateTerm = this.updateTerm.bind(this);
    }

    handleSearch(){
        this.props.getSeachTerm(this.state.searchTerm);
    }

    updateTerm(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={(e) => {e.preventDefault(); this.handleSearch()}}>
                <TextField placeholder="search" onChange={this.updateTerm} />
                </form>
            </div>
        )
    }
}

export default Search;
