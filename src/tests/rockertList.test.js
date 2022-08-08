/* eslint-disable no-undef */
import TestRenderer from 'react-test-renderer';
import RockertList from '../components/rockertList.js';
import { Provider } from 'react-redux';
import store from '../redux/store.js'

it('Testing rockert component:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <RockertList />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});