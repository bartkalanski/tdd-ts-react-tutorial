import { render, screen } from '@testing-library/react'
import App from './App'

test('renders hello world', () => {
  const { getByText } = render(<App />)
  const linkElement = screen.getByText(/hello react/i)
  expect(linkElement).toBeInTheDocument()
  const label = getByText("Current")
  expect(label).toBeInTheDocument()
})
