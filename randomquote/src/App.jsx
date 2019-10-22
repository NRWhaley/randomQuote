import React from 'react';
import { getRandomQuote } from './quotes';

const quoteBoxStyle = {
  display: 'flex-column',
  textAlign: 'center',
  contentAlign: 'center',
};

class App extends React.Component {
  state = getRandomQuote();

  changeQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.quote === this.state.quote);
    this.setState(newQuote);
  };

  getHref = () => {
    const base = 'https://twitter.com/intent/tweet?text=';
    const text = encodeURIComponent(`"${this.state.quote}" - ${this.state.author}`);
    return base + text;
  }

  render() {
    const {quote, author} = this.state;
    return (
      <div id="quote-box" style={quoteBoxStyle}>
        <p id="text">"{quote}"</p>
        <p id="author">{author}</p>
        <button id="new-quote" onClick={this.changeQuote}>
          New Quote
        </button>
        <a id="tweet-quote" href={this.getHref()}>Tweet Quote</a>
      </div>
    );
  }
}

export default App;
