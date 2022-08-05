// Action types
const READ = 'spaceTravel/missions/READ';
const BOOK = 'spaceTravel/missions/BOOK';
const LEAVE = 'spaceTravel/missions/LEAVE';

const baseURL = 'https://api.spacexdata.com/v3/missions';

// Action creators
export const read = (missions) => ({
  type: READ,
  payload: missions,
});

export const book = (id) => ({
  type: BOOK,
  payload: id,
});

export const leave = (id) => ({
  type: LEAVE,
  payload: id,
});

// Reducer
const missionsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case READ:
      return action.payload;
    case BOOK:
      newState = state.map((item) => {
        if (item.mission_id !== action.payload) return item;
        return { ...item, reserved: true };
      });
      return newState;
    case LEAVE:
      newState = state.map((item) => {
        if (item.mission_id !== action.payload) return item;
        return { ...item, reserved: false };
      });
      return newState;
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
          reserved: false,         
        });
      });
      dispatch(read(missionsList));
      console.log('fetched missions',missionsList);
    });
};

export default missionsReducer;
