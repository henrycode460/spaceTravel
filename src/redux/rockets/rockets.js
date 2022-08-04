const RETRIEVE = 'spaceTravel/Rockert/RETRIEVE';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

// Action creators
export const read = (rockerts) => ({
  type: RETRIEVE,
  payload: rockerts,
});

// Reducer
const rockertsReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE:
      return action.payload;
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

        });
      });
      dispatch(read(rockertsList));
      console.log('rockertsList',rockertsList);
    }));

};

export default rockertsReducer;
