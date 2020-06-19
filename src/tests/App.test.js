import React from 'react';
import { render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from '../components/App';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

const initialState = {developer:[]};
const mockStore = configureStore();
let store,container,fetchSpy;
beforeEach(()=>{
  store = mockStore(initialState);
  container = document.createElement("div");
  fetchSpy = jest.spyOn(global,"fetch");
  
})

afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
}
)
test('renders learn react link', () => {
  const { getByText } = render(<App store={store}/>,container);
  const linkElement = getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});

test('fetch called with corret url', async()=>{
     await act(async() => {
       render(<App store={store} />, container);
     });

     expect(fetchSpy).toBeCalledWith('https://tech-services-1000201953.uc.r.appspot.com/developers');
})