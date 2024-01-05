import { shallow } from 'enzyme';
import App from './App'

describe('<App/>', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders a div with the class App-header', () => {
    const app = shallow(<App/>);
    expect(app.find('header').length).toBe(1);
    expect(app.find('.App-header').length).toBe(1);
    expect(app.find('header').hasClass('App-header')).toBe(true);
  });
})
