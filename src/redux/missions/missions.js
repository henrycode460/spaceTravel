// Action types
const READ = 'spaceTravel/missions/READ';

const baseURL = 'https://api.spacexdata.com/v3/missions';

// Action creators
export const read = (missions) => ({
  type: READ,
  payload: missions,
});

export const recieveMissions = () => async () => {
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
      // dispatch(read(bookList));
      console.log(missionsList);
    });
};
