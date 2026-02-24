import GTAPeelYorkIndexPage from '@/components/location/GtaPeelYorkIndexPage';
import { useRouter } from 'next/router'
import React from 'react'

export default function LocationIndexPage() {
  const router = useRouter();
  console.log("router ", router);
  const { location } = router.query;
  return (
    <>
      {location == 'gta-peel-york' ? <GTAPeelYorkIndexPage location={location} /> : ''}
    </>
  )
}
