import React, { Component } from "react";
import PropTypes from "prop-types";
class CardSelector extends Component {

  constructor() {
    super();
    this.state = {
      ranks: [],
      suits: []
    };
  }

  cardRow(list, color, suit) {
    const rank = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
    return (
      list.map((card, index) => {
        return (
          <td key={`${list}${index}`}>
            <button
              onClick={(e) => {
                const value = e.target.value;
                this.props.AddCard(value);
              }}
              value={`${rank[index]}${suit}`}
              className="card" style={{color: `${color}`}}>
              {card}
            </button>
          </td>
        );
      })
    );
  }

  render() {
    const spades = this.cardRow(this.props.spades, "black", "s");
    const clubs = this.cardRow(this.props.clubs, "black", "c");
    const hearts = this.cardRow(this.props.hearts, "red", "h");
    const diamonds = this.cardRow(this.props.diamonds, "red", "d");
    return (
      <div>
        <div>
          <div>
            <table>
              <tbody>
                <tr>
                  {spades}
                </tr>
                <tr>
                  {hearts}
                </tr>
                <tr>
                  {clubs}
                </tr>
                <tr>
                  {diamonds}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
CardSelector.propTypes = {
  LoadCards: PropTypes.func.isRequired,
  spades: PropTypes.array.isRequired,
  hearts: PropTypes.array.isRequired,
  clubs: PropTypes.array.isRequired,
  diamonds: PropTypes.array.isRequired,
  AddCard: PropTypes.func.isRequired
};
export default CardSelector;
