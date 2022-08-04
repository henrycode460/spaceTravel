import renderer from 'react-test-renderer';
import Missions from "../components/missions";
import { Provider } from 'react-redux';
import store from '../redux/store.js'

it('Testing missions component:', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});