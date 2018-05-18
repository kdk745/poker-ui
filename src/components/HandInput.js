import React from "react";
import PropTypes from "prop-types";

class HandComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      hand: []
    };
  }

  componentWillMount() {
    this.props.IsAuthenticated();
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

  logout() {
    this.props.Logout();
  }

  render() {
    const error = this.props.inputError === true ? "please fix input" : "";
    return (
      <div>
        <div>
          <p>Input Cards Below</p>
          <div className={"tooltip"}>See example
            <span className={"tooltiptext"}>
              {"As 4h 3d 5c 2c"}
            </span>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.state.hand.length === 5) {
              this.props.ProcessHand(this.state.hand);
            } else {
              this.props.TriggerInputError();
            }
          }}>
            <div>
              <input maxLength="14" onChange={(e) => {
                const input = e.target.value;
                this.updateCards(input);
              }} />
            </div>
            <button>Process</button>
          </form>
          <button onClick={this.logout.bind(this)} >
            Logout
          </button>
          <p>{error}</p>
        </div>
      </div>
    );
  }
}
HandComponent.propTypes = {
  ProcessHand: PropTypes.func.isRequired,
  TriggerInputError: PropTypes.func.isRequired,
  inputError: PropTypes.bool.isRequired,
  IsAuthenticated: PropTypes.func.isRequired,
  Logout: PropTypes.func.isRequired
};
export default HandComponent;
