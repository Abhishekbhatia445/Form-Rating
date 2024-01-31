import React from 'react'
import "./Main.css"
import Heading from './Heading'
import Name from './Name'
import Employee from './Employee'
import Rating from './Rating'
import Rating1 from './Rating1'
import Dropdown from './Dropdown'
import Radio from './Radio'
import Textarea from './Textarea'
import Button from './Button'

function Main() {
  return (
    <div className='Main'>
      <br/>
      <div className='Main1'>
        <div className='Main2'>
            <Heading/>
            <Name/>
            <Employee/>
            <Rating1 />
            <Rating/>
            <Dropdown/>
            <Radio/>
            <Textarea />
            <Button />
        </div>
      </div>
      <br/>
    </div>
  )
}
export default Main
