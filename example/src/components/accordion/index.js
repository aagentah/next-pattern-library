import React, { useState, useRef } from 'react'
// import Chevron from './Chevron'
export default function Accordion(props) {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion__icon')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  return (
    <div className='accordion__section'>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className='accordion__title'>{props.title}</p>
        <p className={`${setRotate}`} width={10} fill={'#777'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill={'#777'}
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z' />
          </svg>
        </p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className='accordion__content'
      >
        <div className='flex  flex-wrap  pv1  pa3'>
          <div className='col-4  t-primary  f6  bold'>Name</div>
          <div className='col-4  t-primary  f6  bold'>Default</div>
          <div className='col-4  t-primary  f6  bold'>Type</div>
          <div className='col-12  t-primary  f6  bold'>Description</div>
        </div>
        {props.content.map(row => {
          return (
            <div className='flex  flex-wrap  pv1  ph3  mb1  bb  bc-light-grey'>
              <div className='col-4  t-primary'>
                <code>{row.name || '-'}</code>
              </div>
              <div className='col-4  t-primary'>
                <span className='f6  black'>{row.default || '-'}</span>
              </div>
              <div className='col-4  t-primary'>
                <span className='f6  black'>&#123;{row.type || '-'}&#125;</span>
              </div>
              <div className='col-12  t-primary'>
                <span dangerouslySetInnerHTML={{__html: row.description || '-'}} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
