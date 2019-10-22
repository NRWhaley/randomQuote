import React from 'react';

const quoteBoxStyle = {
  display: 'flex-column',
  textAlign: 'center',
  contentAlign : 'center'

}

class App extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        quotes : [
          {quote: '"We have nothing to fear, but fear itself."',
          author: 'Franklin D. Roosevelt'},
          {quote: '"We have done the impossible, and that makes us mighty."',
          author: 'Joss Whedon'},
          {quote: '"Justice rains from above!"',
          author: 'Pharah'},
          {quote: '"Battle not with monsters lest ye become a monster"',
          author: 'Friedrich Nietsche'},
          {quote: '"Nobody\'s perfect, I gotta work it again and again til I get it right"',
          author: 'Miley Cyrus'}
        ],
        currentQuote: '',
        currentAuthor: ''
      }
      this.handleClick = this.handleClick.bind(this)


    }



    handleClick(e){
      const random = Math.floor(Math.random() * 5)
      if(e.target.id === 'new-quote'){

        this.setState({currentQuote: this.state.quotes[random].quote,
        currentAuthor: this.state.quotes[random].author})
      } else {
        console.log('sending tweet')
      }
    }

    render(){


      const content = {
        quote: this.state.currentQuote,
        author: this.state.currentAuthor
      }


      return (

        <div id="quote-box" style={quoteBoxStyle}>
          <p id="text" >{content.quote}</p>
          <p id="author">{content.author}</p>
          <button id="new-quote" onClick={this.handleClick}>New Quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" onClick={this.handleClick}>Tweet Quote</a>
        </div>

      )
    }


}






export default App;


