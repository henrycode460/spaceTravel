/* eslint-disable no-undef */
import TestRenderer from 'react-test-renderer';
import Missions from "../components/missions";
import { Provider } from 'react-redux';
import store from '../redux/store.js'

it('Testing missions component:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});