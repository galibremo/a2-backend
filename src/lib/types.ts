export interface CardData {
  id: number
  title: string
  image: string
  category: string
  views: string
  comments: string
}
export interface NewsCardType {
  id: number
  title: string
  image: string
  category: string
  views: string
  date: string
  comments: string
}

export interface SearchCardType {
  id: number
  Title: string
  url: string
  Textarea: string
  Date: string
}

export interface CaseStudyCardType {
  id: number
  title: string
  image: string
  description: string
}

export interface Card {
  numberValue: string
  content: string
}

// Define the props interface for the component
export interface CardBlockProps {
  cards: Card[]
}
