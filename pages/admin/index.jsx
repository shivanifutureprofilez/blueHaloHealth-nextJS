import React, { useEffect, useMemo, useState } from 'react'
import { FaMoneyBillWave } from "react-icons/fa";
import { MdPaid, MdWallet } from "react-icons/md";
import { MdRequestQuote } from "react-icons/md";
import Loading from '@/components/Loading';
import AuthLayout from './layout/AuthLayout';
import ServicesBox from './service/ServicesBox';

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const stats = useMemo(
    () =>[
    {
      label: "Total Podcasts",
      value: data?.podcastCount || "N/A",
      icon: <FaMoneyBillWave className="w-6 h-6 text-white" />,
    },
    {
      label: "Total Episodes",
      value: data?.fileCount || "N/A",
      icon: <MdWallet className="w-6 h-6 text-white" />,
    },
    {
      label: "Average Episode Duration",
      value: data?.averageDuration || "N/A",
      icon: <MdRequestQuote className="w-6 h-6 text-white" />,
    },
    {
      label: "Total Guides",
      value: "N/A",
      icon: <MdPaid className="w-6 h-6 text-white" />,
    },
  ],
    [data]
  );

  return (
    <AuthLayout>
      {loading ? <Loading/> : 
      <>
      <ServicesBox />
      </>
      }
    </AuthLayout>
  )
}
