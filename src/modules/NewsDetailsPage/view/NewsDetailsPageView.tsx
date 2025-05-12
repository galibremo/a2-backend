'use client'
import NewsHero from '@/modules/GLOBAL/NewsDetails/NewsHero'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../css/richtext-styles.css'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import CardBlock from '@/modules/GLOBAL/Common/CardBlock'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    cardBlock: ({ node }: any) => <CardBlock className="col-start-2 mb-4" {...node.fields} />,
  },
})

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
            <RichText converters={jsxConverters} data={data.Richtext} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.statsBlock }} />
        </div>
      )}
    </div>
  )
}

export default NewsDetailsPageView
