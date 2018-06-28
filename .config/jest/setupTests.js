import { configure, shallow, render, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson
