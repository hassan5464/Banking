"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCountUp = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'><CountUp end={amount} 
    decimal=","
    prefix="$"
    decimals={2}
    /></div>
  )
}

export default AnimatedCountUp