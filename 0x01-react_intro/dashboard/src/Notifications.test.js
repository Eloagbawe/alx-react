import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications/>', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const notifications = shallow(<Notifications/>);
    expect(notifications.find('li').length).toBe(3);
  });

  it('contains the string Here is the list of notifications', () => {
    const notifications = shallow(<Notifications/>);
    expect(notifications.text().includes('Here is the list of notifications')).toBe(true);
  });
});
