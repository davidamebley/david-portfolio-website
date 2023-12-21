import React from 'react';


const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
          aria-label={item} // Added aria-label for accessibility
        />
      ))}
    </div>
  )
}

export default NavigationDots