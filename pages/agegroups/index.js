import AgeBanner from '@/components/AgeBanner';
import BookingTab from '@/components/BookingTab';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import React from 'react'
// import Filter from './Filter';

function index() {

  // const {id} = useParams();
  // const showAgeGroupDetail = (id) => {
    
  // } 
  const features = [
        {
            "image": "/resourceImg.png",
            "category": "Parenting",
            "title": "5 Simple Ways to Strengthen",
            "description": "Discover easy, everyday strategies to build trust, improve listening, and create stronger bonds with your child."
        },
        {
            "image": "/resourceImg.png",
            "category": "Parenting",
            "title": "5 Simple Ways to Strengthen",
            "description": "Discover easy, everyday strategies to build trust, improve listening, and create stronger bonds with your child."
        },
        {
            "image": "/resourceImg.png",
            "category": "Parenting",
            "title": "5 Simple Ways to Strengthen",
            "description": "Discover easy, everyday strategies to build trust, improve listening, and create stronger bonds with your child."
        },
    ]
  return (
    <Layout>
      <div className='bg-[#F7F4F0]'>
        <AgeBanner title={"0-6 (Early Years)"} />
        {/* <Filter/> */}
        <div className='container mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-10 md:mt-4 md:mb-8">
                    {features?.map((item, index) => (
                        <ServiceCard item={item} idx={index} />
                    ))}
                </div>
        <BookingTab/>
      </div>
      </div>
    </Layout>
  )
}

export default index;