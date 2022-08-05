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
  await fetch(baseURL)
    .then((res) => res.json())
    .then((missions) => {
      const missionsList = [];
      Object.keys(missions).map((key) => {
        missionsList.push({
          mission_id: missions[key].mission_id,
          mission_name: missions[key].mission_name,
          description: missions[key].description,
        });
      });
      dispatch(read(missionsList));
      console.log('fetched missions',missionsList);
    });
};

export default missionsReducer;
