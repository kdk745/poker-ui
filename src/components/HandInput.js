import React from "react";
import PropTypes from "prop-types";
import CardSelector from "../containers/CardSelectorCont";

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

  addCard(card) {
    let value = document.getElementById("cardInput").value;
    if (value === "") {
      value = card;
    } else {
      value += ` ${card}`;
    }
    document.getElementById("cardInput").value = value;
    this.updateCards(value);
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
          <CardSelector AddCard={(card) => this.addCard(card)} />
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.state.hand.length === 5) {
              this.props.ProcessHand(this.state.hand);
            } else {
              this.props.TriggerInputError();
            }
          }}>
            <div>
              <input id="cardInput" maxLength="14" onChange={(e) => {
                const input = e.target.value;
                this.updateCards(input);
              }} />
            </div>
            <button className="normal">Process</button>
          </form>
          <button className="normal" onClick={this.logout.bind(this)} >
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
