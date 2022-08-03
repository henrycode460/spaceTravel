// Action types
const READ = 'spaceTravel/missions/READ';

const baseURL = 'https://api.spacexdata.com/v3/missions';

// Action creators
export const read = (missions) => ({
  type: READ,
  payload: missions,
});

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return action.payload;
    default:
      return state;
  }
};

export const recieveMissions = () => async (dispatch) => {
  console.log('called');
  await fetch(baseURL)
    .then((res) => res.json())
    .then((missions) => {
      console.log('fetching');
      const missionsList = missions;
      // Object.keys(missions).map((key) => {
      //   missionsList.push({
      //   });
      // });
      dispatch(read(missionsList));
      console.log(missionsList);
    });
};

export default missionsReducer;
