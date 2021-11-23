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
    const dragons = await response.json();
    console.log(dragons);

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
