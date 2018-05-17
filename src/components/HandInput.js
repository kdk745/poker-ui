import React from "react";
import PropTypes from "prop-types";

class HandComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      hand: []
    };
  }

  isLength(card) {
    return card.length === 2;
  }

  updateCards(input) {
    const cardsArray = input.split(" ");
    if (cardsArray.length === 5 && cardsArray.every(this.isLength)) {
      let hand = this.state.hand;
      hand = cardsArray.map((card) => {
        return ({
          rank: card[0],
          suit: card[1]
        });
      });
      this.setState({
        hand
      });
    }
  }


  render() {
    const error = this.props.inputError === true ? "please fix input" : "";
    return (
      <div>
        <div>
          <p>Input Hand Below</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.state.hand.length === 5) {
              this.props.ProcessHand(this.state.hand);
            } else {
              this.props.TriggerInputError();
            }
          }}>
            <div>
              Cards: <input maxLength="14" onChange={(e) => {
                const input = e.target.value;
                this.updateCards(input);
              }} />
            </div>
            <button>Process</button>
          </form>
          <p>{error}</p>
        </div>
      </div>
    );
  }
}
HandComponent.propTypes = {
  ProcessHand: PropTypes.func.isRequired,
  TriggerInputError: PropTypes.func.isRequired,
  inputError: PropTypes.bool.isRequired
};
export default HandComponent;