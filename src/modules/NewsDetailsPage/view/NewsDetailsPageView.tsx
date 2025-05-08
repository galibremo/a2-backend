'use client'

import NewsHero from '@/modules/GLOBAL/NewsDetails/NewsHero'
import { RichText } from '@payloadcms/richtext-lexical/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../css/richtext-styles.css'

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

  console.log(data)

  return (
    <div>
      <NewsHero />
      {data?.Richtext && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="richtext-content">
            <RichText data={data.Richtext} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.statsBlock }} />
        </div>
      )}
    </div>
  )
}

export default NewsDetailsPageView
