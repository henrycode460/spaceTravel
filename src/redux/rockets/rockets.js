const RETRIEVE = 'spaceTravel/Rockert/RETRIEVE';
const RESERVE = 'spaceTravel/Rockert/RESERVE';
const REMOVE = 'spaceTravel/Rockert/REMOVE';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

// Action creators
export const read = (rockerts) => ({
  type: RETRIEVE,
  payload: rockerts,
});

export const reserve = (id) => ({
  type: RESERVE,
  payload: id,
});

export const remove = (id) => ({
  type: REMOVE,
  payload: id,
});

// Reducer
const rockertsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case RETRIEVE:
      return action.payload;
    case RESERVE:
      newState = state.map((item) => {
        if (item.rockerts_id !== action.payload) return item;
        return { ...item, reserved: true };
      });
      return newState;
    case REMOVE:
      newState = state.map((item) => {
        if (item.rockerts_id !== action.payload) return item;
        return { ...item, reserved: false };
      });
      return newState;
    default:
      return state;
  }
};

export const recieveRockerts = () => async (dispatch) => {
  await fetch(baseURL)
    .then((res) => res.json())
    .then((rockerts => {
      const rockertsList = [];
      Object.keys(rockerts).map((key) => {
        rockertsList.push({
          rockerts_id: rockerts[key].id,
          rockerts_name: rockerts[key].rocket_name,
          description: rockerts[key].description,
          image: rockerts[key].flickr_images[0],
          reserved: false,
        });
      });
      dispatch(read(rockertsList));
    }));

};

export default rockertsReducer;