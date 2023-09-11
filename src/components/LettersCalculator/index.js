import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  onTextInput = event => {
    this.setState({
      letterCount: event.target.value.length,
    })
  }

  render() {
    const {letterCount} = this.state

    return (
      <div className="bg-container">
        <div className="card1">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="inputText">Enter the phrase</label>
          <input
            id="inputText"
            onChange={this.onTextInput}
            placeholder="Enter the phrase"
          />
          <p className="button">No.of letters: {letterCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
