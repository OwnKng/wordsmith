import React from 'react';
import './App.css';
import SearchWords from '../../utils/SearchWords';
import Search from '../Search/Search';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words: {}
    }
    this.searchWords = this.searchWords.bind(this);
    this.cleanResults = this.cleanResults.bind(this);
  }

  searchWords(word){
    SearchWords.GetWords(word).then((response) => this.cleanResults(response))
  }

  cleanResults(words){
    
    let wordsArray = [];
    
    // extract only elements that have tags
    words.forEach(word => {
      if(word.tags){
        wordsArray.push(word)
      }
    })

    // keep the words that are synonyms only 
    const synonyms = wordsArray.filter(word => {
      return word.tags.some(tag => tag === 'syn');
    })

    // get the top 20 synonyms
    const topSynonyms = synonyms.slice(0, 20);

    // set the words state
    this.setState({
      words: topSynonyms
    })

  }
  
  render(){
    return (
      <div className="App">
        <h4>Hello World</h4>
        <Search getSeachTerm={this.searchWords}/>
      </div>
    );
  }
}

export default App;
