import EasternOntarioPage from '@/components/location/EasternOntarioIndexPage';
import GTAPeelYorkIndexPage from '@/components/location/GtaPeelYorkIndexPage';
import HamiltonNiagaraIndexPage from '@/components/location/HamiltonNiagaraIndexPage';
import OttawaPage from '@/components/location/OttawaIndexPage';
import { useRouter } from 'next/router'
import React from 'react'

export default function LocationIndexPage() {
  const router = useRouter();
  console.log("router ", router);
  const { location } = router.query;
  return (
    <>
      {location == 'gta-peel-york' ? <GTAPeelYorkIndexPage location={location} /> : ''}
      {location == 'hamilton-niagara' ? <HamiltonNiagaraIndexPage location={location} /> : ''}
      {location == 'ottawa' ? <OttawaPage location={location} /> : ''}
      {location == 'eastern-ontario' ? <EasternOntarioPage location={location} /> : ''}
    </>
  )
}
