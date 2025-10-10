import { useRouter } from 'next/router'
import React from 'react'

export default function Index(props) {

    const router = useRouter()
    const { pid } = router?.query 

  return (
    <div>Services { pid }</div>
  )
}
