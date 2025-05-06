'use client'

import NewsHero from '@/modules/GLOBAL/NewsDetails/NewsHero'
import { RichText } from '@payloadcms/richtext-lexical/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewsDetailsPageView = ({ slug }: { slug: string }) => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/blogs/${slug}`)
        setData(res.data)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, [slug])

  return (
    <div>
      <NewsHero />
      {data?.Richtext ? <RichText data={data.Richtext} /> : <p>Loading content...</p>}
    </div>
  )
}

export default NewsDetailsPageView
