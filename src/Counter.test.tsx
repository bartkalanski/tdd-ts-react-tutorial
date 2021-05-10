import React from 'react'
import { render } from "@testing-library/react"

import Counter from './Counter'

test("should render a label and counter", () => {
    const { getByText, getByRole } = render(<Counter/>)
    const label = getByText("Count")
    expect(label).toBeInTheDocument()
    const counter = getByRole("counter")
    expect(counter).toBeInTheDocument()
})
test("should render a counter with a custom label", () => {
    const { getByText, getByRole } = render(<Counter label="Current"/>)
    const label = getByText("Current")
    expect(label).toBeInTheDocument()
    const counter = getByRole("counter")
    expect(counter).toBeInTheDocument()
})