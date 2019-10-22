const quotes = [
  { quote: 'We have nothing to fear, but fear itself.', author: 'Franklin D. Roosevelt' },
  { quote: 'We have done the impossible, and that makes us mighty.', author: 'Joss Whedon' },
  { quote: 'Justice rains from above!', author: 'Pharah' },
  { quote: 'Battle not with monsters lest ye become a monster.', author: 'Friedrich Nietsche' },
  { quote: 'Nobody\'s perfect, I gotta work it again and again til I get it right.', author: 'Miley Cyrus' },
  { quote: 'I have the heart of a child. I keep it in a jar on my shelf.', author: 'Robert Bloch' },
];

export const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
