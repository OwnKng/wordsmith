import React from 'react';
import './App.css';
import SearchWords from '../../utils/SearchWords';
import Search from '../Search/Search';

import { Results } from '../Results/Results';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words: {},
      searched: false
    }
    this.searchWords = this.searchWords.bind(this);
    this.cleanResults = this.cleanResults.bind(this);
  }

  searchWords(word){
    this.setState({
      words: {}, 
      searched: true
    });
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

  renderResults(){
    if(this.state.searched){
      return (
        <Results words={this.state.words}/>
      )
    }
  }
  
  render(){
    return (
        <div>
          <div className="header">
            <h1>Synonymizer</h1>
          </div>
          <div className="grid">
            <div className="searchBox">
              <Search getSeachTerm={this.searchWords}/>
            </div>
            <div>
              {this.renderResults()}
            </div>
          </div>
          <div className="Footer">
            <p>Powered by the datamuse API. Built with React</p>
          </div>
        </div>
    );
  }
}

export default App;
