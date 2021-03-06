import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })
// import '@testing-library/jest-dom/extend-expect';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}))