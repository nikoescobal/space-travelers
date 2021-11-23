const LOAD_DRAGONS = 'LOAD_DRAGONS';
const RESERVE_DRAGONS = 'RESERVE_DRAGONS';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const LOAD_FAILED = 'LOAD_FAILED';
const url = 'https://api.spacexdata.com/v3/dragons';

const initialState = {
  dragons: [],
};

const loadDragons = (dragons) => ({
  type: LOAD_DRAGONS,
  payload: dragons,
});

export const reserveDragons = (id) => ({
  type: RESERVE_DRAGONS,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

const loadFailed = (err) => ({
  type: LOAD_FAILED,
  payload: err,
});

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const dragons = response.json();

    dispatch(
      loadDragons(
        dragons.map((dragon) => {
          const {
            id, name, type, flickr_images: images,
          } = dragon;
          return {
            id,
            name,
            type,
            images,
          };
        }),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred. Please try again later.';
    dispatch(loadFailed(err.description));
  }
};

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DRAGONS:
      return {
        ...state,
        dragons: action.payload,
      };
    case LOAD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      break;
  }
};

export default dragonReducer;
