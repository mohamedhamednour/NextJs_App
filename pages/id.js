
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function Home() {
    const [name , setname ] = useState('hamed')
    const router = useRouter()
    const add = router.query.newsid

  return (
    <div >
 <h1 >nes id   {add}</h1>
    </div>
  )
}
