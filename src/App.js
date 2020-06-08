import React, { Component } from 'react';


import './App.css';


class App extends Component {
  state = {
    topNews: [],
    isLoading: true
  };

  componentDidMount() {
    fetch('http://hackernews.gokhanarkan.com/api/top')
    .then(data => data.json())
    .then(news => {
      this.setState({
        topNews: news,
        isLoading: false
      });
    })
  };

 
  
  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h1>HACKERNEWS STORIES</h1> 
          <p>This site was created by using <a rel="noopener noreferrer" href="http://hackernews.gokhanarkan.com/api" target="_blank" style={{color: "white"}}>this api endpoint</a></p>
        </div>
        <div>
          <h2 style={{borderBottom:'1px solid black'}}>Best Stories on Hackernews</h2>
        </div>
        <h2>{isLoading ? 'Hacking best stories, please wait.' : ''}</h2>
        {
            !isLoading ? 
            this.state.topNews.map((news,idx) => 
             <div key={news._id} className="card">
               <h2 style={{color: '#ff6565'}}>{idx + 1}</h2>
               <h3>{news.title}</h3>
               <a rel="noopener noreferrer" href={news.url} target="_blank" style={{textDecoration:'border-bottom', color:"black"}}>Read more</a>
               <p><strong>Score: {news.score}</strong></p>
             </div>
          
           ) : null
        }
          <div className="App-footer">  
          <p>Created by Atakan Zengin with React</p>
          </div>
      </div>
    );
  }
}

export default App;
