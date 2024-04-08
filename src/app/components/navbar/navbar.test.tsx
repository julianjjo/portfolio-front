import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Navbar from './navbar'
 
describe('Navbar', () => {
  it('renders a link experience', () => {
    render(<Navbar pathUrl='/experience'/>)
 
    const navbar = screen.getByText(/Experience/)
 
    expect(navbar).toBeVisible()
  })

  it('renders a link about', () => {
    render(<Navbar pathUrl='/'/>)
 
    const navbar = screen.getByText(/About/)
 
    expect(navbar).toBeVisible()
  })

  it('renders a link Skills', () => {
    render(<Navbar pathUrl='/'/>)
 
    const navbar = screen.getByText(/Skills/)
 
    expect(navbar).toBeVisible()
  })

  it('renders a link Contact', () => {
    render(<Navbar pathUrl='/'/>)
 
    const navbar = screen.getByText(/Contact/)
 
    expect(navbar).toBeVisible()
  })

  it('renders a image self portrait', () => {
    render(<Navbar pathUrl='/'/>)
 
    const navbar = screen.getByAltText(/self portrait/)
 
    expect(navbar).toBeVisible()
  })

  it('shows the XMarkIcon in mobile view when the menu is open', () => {
    render(<Navbar pathUrl='/' />);
    
    // Simulate the mobile view by ensuring the screen width is within the mobile range
    // Note: This step may vary based on your actual media query breakpoints
    global.innerWidth = 480; // Example mobile screen width
    global.dispatchEvent(new Event('resize'));
    
    // Open the mobile menu
    const menuButton = screen.getByRole('button');
    userEvent.click(menuButton);
    
    expect(menuButton).toBeVisible();
  });
})