// components/CardBlock.tsx
import { CardBlockProps } from '@/lib/types'
import React from 'react'

// Define the interface for a single card

const CardBlock: React.FC<CardBlockProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:items-start justify-center w-full p-6 bg-primary mb-0 md:mb-6 gap-1 hover:border-b hover:border-[#296F7F] hover-gradient-both"
        >
          <p className="font-bold text-[40px]">{card.numberValue}</p>
          <p className="text-lg font-medium">{card.content}</p>
        </div>
      ))}
    </div>
  )
}

export default CardBlock
