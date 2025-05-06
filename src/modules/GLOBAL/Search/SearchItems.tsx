'use client'
import { Separator } from '@/components/ui/separator'
import React, { useEffect, useState } from 'react'
import SearchCard from '../Common/SearchCard'
import Pagination from '../Common/Pagination'
import axios from 'axios'

const SearchItems = () => {
  const [data, setData] = useState([])
  // const data = [
  //   {
  //     id: 1,
  //     date: 'Nov 20, 2024',
  //     title: 'Connecting diversity with a square pointers ...',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy1.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 2,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy2.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 3,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy3.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 4,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy4.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 5,
  //     date: 'Nov 20, 2024',
  //     title: 'Connecting diversity with a square pointers ...',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy1.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 6,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy2.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 7,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy3.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 8,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy4.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 9,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy3.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  //   {
  //     id: 10,
  //     title: 'Connecting diversity with a square pointers ...',
  //     date: 'Nov 20, 2024',
  //     description:
  //       "Enjoy the read? I'm doing a couple of these roundups a week! My aim is to keep ahead of the curve on issues affecting indie.....",
  //     image: '/casestudy4.jpg',
  //     link: '/case-study/adapting-and-thriving-in-a-changing-world',
  //   },
  // ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/blogs')
        setData(res.data.docs)
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <span>Showing 1-10 of 6024 results</span>
        <Separator className="my-3 bg-[#CDCDCD66]" />
        {data?.map((item, index) => (
          <div key={index} className="mt-14">
            <SearchCard key={index} item={item} />
            <Separator className="my-12.5 bg-[#CDCDCD66]" />
          </div>
        ))}
      </div>
      <div className="mt-16">
        <Pagination
          totalPages={10}
          initialPage={1}
          onPageChange={(page) => console.log(`Page changed to ${page}`)}
        />
      </div>
    </section>
  )
}

export default SearchItems
