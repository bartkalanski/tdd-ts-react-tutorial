import React from 'react'
import { fireEvent, render } from "@testing-library/react"

import Counter from './Counter'

test("should render a label and counter", () => {
    const handler = jest.fn()
    const { getByText, getByRole } = render(<Counter count={0} onCounterIncrease={handler}/>)
    const label = getByText("Count")
    expect(label).toBeInTheDocument()
    const counter = getByRole("counter")
    expect(counter).toBeInTheDocument()
})
test("should render a counter with a custom label", () => {
    const handler = jest.fn()
    const { getByText, getByRole } = render(<Counter label="Current" count={0} onCounterIncrease={handler}/>)
    const label = getByText("Current")
    expect(label).toBeInTheDocument()
    const counter = getByRole("counter")
    expect(counter).toBeInTheDocument()
})
test("should increment the incrementer", () => {
    const handler = jest.fn()
    const { getByRole } = render(<Counter count={0} onCounterIncrease={handler}/>)
    const counter = getByRole("counter")
    fireEvent.click(counter)
    expect(handler).toBeCalledWith(false)
})