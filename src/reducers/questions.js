import {
  RECEIVE_QUESTIONS,
  SAVE_ANSWER,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    // case SAVE_ANSWER:
    //   return {
    //     ...state,
    //   };
    // case ADD_QUESTION:
    //   const { question } = action;
    //   return {
    //     ...state,
    //     [action.question.id]: action.question,
    //   };
    default:
      return state;
  }
}
