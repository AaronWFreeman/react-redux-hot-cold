import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }

  generateAuralUpdate() {
    const { guesses, feedback } = this.state;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }


    this.setState({ auralStatus });
  }

  render() {
    const { feedback, guesses, auralStatus } = this.state;
    const guessCount = guesses.length;

    return (
      // 1. a div is always rendered
      // 2. the rendered div contains everything else that
      // gets rendered
      <div>
      // 3. a Header is always rendered
      // 4. the rendered Header receives two props
        <Header
      // 5. when onRestartGame is called, restartGame() is triggered
          onRestartGame={() => this.restartGame()}
      // 6. when onGenerateAuralUpdate is called, generateAuralUpdate() is triggered
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
      // 7. A Main element is always rendered inside the rendered div
      // 8. a GuessSection is always rendered (inside rendered main element)
      // 9. the rendered GuessSection contains three props
          <GuessSection
        // jsx curly brace is not destructured, rather it is equivalent to es6's ${}
            feedback={feedback}
            guessCount={guessCount}
      // 10. when onMakeGuess is called, makeGuess() is triggered
            onMakeGuess={guess => this.makeGuess(guess)}
          />
      // 11. a StatusSection is always rendered (inside rendered main element)
      // 12. rendered StatusSection always contains two props
          <StatusSection guesses={guesses}
            auralStatus={auralStatus}
          />
      // 13. an InfoSection is always rendered (inside rendered main element)
          <InfoSection />
        </main>
      </div>
    );
  }
}
