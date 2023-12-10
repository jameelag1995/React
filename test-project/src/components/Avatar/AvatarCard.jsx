import React from 'react'

export default function AvatarCard({img,name}) {
  return (
    <div className='AvatarCard'>
        <img src={img.medium} alt='user picture' />
        <h3>{`${name.first} ${name.last}`}</h3>
    </div>
  )
}
