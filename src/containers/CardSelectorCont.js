import { connect } from "react-redux";
import CardSelector from "../components/CardSelector";
import {
  loadCards
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    LoadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  };
}

function mapStateToProps(state) {
  return {
    spades: state.cardsUnicode["Spades"],
    clubs: state.cardsUnicode["Clubs"],
    diamonds: state.cardsUnicode["Diamonds"],
    hearts: state.cardsUnicode["Hearts"]
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CardSelector);
