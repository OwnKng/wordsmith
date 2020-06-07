import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { styles } from './styles.js';

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
          main: 'rgb(227, 87, 96)'
      } 
    },
  });
  

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
                <ThemeProvider theme={darkTheme}>
                    <form onSubmit={(e) => {e.preventDefault(); this.handleSearch()}}>
                        <TextField placeholder="Find synonym" onChange={this.updateTerm} inputProps={{ style: styles }}/>
                    </form>
                </ThemeProvider>
            </div>
        )
    }
}

export default Search;
