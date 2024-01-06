import { shallow } from 'enzyme';
import App from './App'

describe('<App/>', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders a div with the class App-header', () => {
    const app = shallow(<App/>);
    expect(app.find('.App-header').length).toBe(1);
    expect(app.find('div').at(1).hasClass('App-header')).toBe(true);
  });
  it('renders a div with the class App-body', () => {
    const app = shallow(<App/>);
    expect(app.find('.App-body').length).toBe(1);
    expect(app.find('div').at(2).hasClass('App-body')).toBe(true);
  });
  it('renders a div with the class App-footer', () => {
    const app = shallow(<App/>);
    expect(app.find('.App-footer').length).toBe(1);
    expect(app.find('div').at(3).hasClass('App-footer')).toBe(true);
  });
})
