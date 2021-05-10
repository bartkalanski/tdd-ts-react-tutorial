import React, { Component } from 'react'

export type CounterProps = {label?: string}
class Counter extends Component<CounterProps> {
    render() {
        const { label = "Count" } = this.props
        return (
            <div>
                <span aria-label="counter">{label}</span>
                <span id="counter" role="counter">1</span>
            </div>
        )
    }
}

export default Counter