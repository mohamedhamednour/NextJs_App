import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
    const [name , setname ] = useState('home')
  return (
    <div >
 <h1 >last   {name}</h1>
    </div>
  )
}
