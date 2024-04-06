import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Experience from './page'
 
describe('Page', () => {
  it('renders a main', () => {
    render(<Experience />)
 
    const main = screen.queryByRole('main')
 
    expect(main).toBeInTheDocument()
  })
})