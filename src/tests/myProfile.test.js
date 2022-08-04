import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import MyProfile from "../components/myProfile";

it('Testing my profile component:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});