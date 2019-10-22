import React from 'react';



class App extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        quotes = [
          {quote: 'We have nothing to fear, but fear itself.',
          author: 'Franklin D. Roosevelt'},
          {quote: 'We have done the impossible, and that makes us mighty.',
          author: 'Joss Whedon'},
          {quote: 'Justice rains from above!',
          author: 'Pharah'},
          {quote: 'Battle not with monsters lest ye become a monster',
          author: 'Friedrich Nietsche'},
          {quote: 'Nobody\'s perfect, I gotta work it again and again til I get it right',
          author: 'Miley Cyrus'}
        ]
      }


    }


    handleClick(){
      console.log('hi')
    }

    render(){
      return (

        <div id="quote-box">
          <p id="text">quote</p>
          <p id="author">author</p>
          <button id="new-quote">New Quote</button>
          <a id="tweet-quote" onClick={this.handleClick}>Tweet Quote</a>
        </div>

      )
    }


}






export default App;


