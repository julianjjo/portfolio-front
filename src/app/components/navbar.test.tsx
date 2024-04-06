import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from './navbar'
 
describe('Navbar', () => {
  it('renders a link experience', () => {
    render(<Navbar pathUrl='/experience'/>)
 
    const navbar = screen.getByText(/About/)
 
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
})