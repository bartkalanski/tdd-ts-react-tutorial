import React, { Component } from 'react'

export type CounterProps = {
  label?: string
  count: number
  onCounterIncrease: (event: React.MouseEvent<HTMLElement>) => void
}

const Counter = ({
  label = 'Count',
  count,
  onCounterIncrease,
}: CounterProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey)
  }

  return (
    <div>
      <span aria-label='counter'>{label}</span>
      <span id='counter' role='counter' onClick={handleClick}>
        {count}
      </span>
    </div>
  )
}

export default Counter
