import { render, screen } from '@testing-library/react'
import { Heading } from './Heading'
 
test('render heading', () => {
  const { getByText } = render(<Heading />)
  const linkElement = getByText(/hello react/i)
  expect(linkElement).toBeInTheDocument()
})
test('render heading with a prop', () => {
  const { getByText } = render(<Heading name='World' />)
  const linkElement = getByText(/hello world/i)
  expect(linkElement).toBeInTheDocument()
})
