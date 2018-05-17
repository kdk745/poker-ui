export const PROCESS_HAND = "PROCESS_HAND";

export function processHand(hand) {
  const reqBody = {
    hand
  };
  return (dispatch) => {
    // request triggers hand processing
    fetch("/cards", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(reqBody)
    }).then((res) => {
      return res.text();
    }).then((data) => {
      dispatch(processHandSuccess(data));
    });
    dispatch({
      type: PROCESS_HAND
    });
  };
}

export const PROCESS_HAND_SUCCESS = "PROCESS_HAND_SUCCESS";

export function processHandSuccess(hand) {
  return {
    type: PROCESS_HAND_SUCCESS,
    value: hand
  };
}

export const PROCESS_HAND_FAIL = "PROCESS_HAND_FAIL";

export function processHandFail() {
  return {
    type: PROCESS_HAND_FAIL,
  };
}

export const INPUT_ERROR = "INPUT_ERROR";

export function triggerInputError() {
  return {
    type: INPUT_ERROR
  };
}
