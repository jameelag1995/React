import React from 'react'
import Father from './Father'
import { useGift } from '../context/GiftContext/GiftContext'

export default function GrandFather() {
    const {gifts}= useGift()
    const newArr = ['apple','orange','banana','peach','grapes'] 
  return (
    <Father/>
  )
}
