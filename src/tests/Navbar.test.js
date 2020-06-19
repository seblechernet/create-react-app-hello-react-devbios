import React from 'react';
import { render } from '@testing-library/react';
import { exportAllDeclaration } from '@babel/types';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import Navbar from '../components/Navbar';
test('renders Home link',() => {
    const { getByText } = render(<Router ><Navbar /></Router>);
    const linkElement = getByText(/Home/);
    expect(linkElement).toBeInTheDocument();
});
test('Home points to the correct route', ()=>{
    const component = render(<Router > <Navbar /></Router>);
    const homeLink = component.getByText(/Home/);
    expect(homeLink.getAttribute("href")).toBe("/");

})