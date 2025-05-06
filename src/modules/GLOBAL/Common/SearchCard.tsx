import { SearchCardType } from '@/lib/types'
import dayjs from 'dayjs'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typography } from './Typography'

const SearchCard = ({ item }: { item: SearchCardType }) => {
  return (
    <div className="flex justify-between gap-6.5">
      <Image
        src={item.url}
        width={197}
        height={129}
        alt="case-study"
        className="h-[129px] w-[197px] object-cover"
      />
      <div className="flex-1">
        <div className="text-secondary-foreground opacity-60 text-sm mb-1 uppercase">
          {dayjs(item.Date).format('MMM D, YYYY')}
        </div>
        <Typography variant="title7" className="mb-2">
          {item.Title}
        </Typography>

        <Typography variant="body2" className="text-primary-foreground opacity-60">
          {item.Textarea.length > 100 ? `${item.Textarea.slice(0, 150)}...` : item.Textarea}
        </Typography>
      </div>
      <div className="flex-shrink-0 hidden md:block">
        <Link
          href={`/news-details/${item.id}`}
          className="inline-block bg-secondary-foreground p-3.5 text-black hover:bg-[#a9d6cb] transition-colors"
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  )
}

export default SearchCard
