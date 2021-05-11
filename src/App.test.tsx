import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders hello world', () => {
  const { getByText, getByRole } = render(<App />)
  const linkElement = screen.getByText(/hello react/i)
  expect(linkElement).toBeInTheDocument()
  const label = getByText("Current")
  expect(label).toBeInTheDocument()
  const counter = getByRole("counter")
  expect(counter).toHaveTextContent("0")
})
test('updates state when increment is called', () => {
  const { getByRole } = render(<App />)
  const counter = getByRole("counter")
  expect(counter).toHaveTextContent("0")
  userEvent.click(counter)
  expect(counter).toHaveTextContent("1")
})
test('updates state when increment is called with shift', () => {
  const { getByRole } = render(<App />)
  const counter = getByRole("counter")
  expect(counter).toHaveTextContent("0")
  userEvent.click(counter), { shiftKey: true }
  expect(counter).toHaveTextContent("10")
})

