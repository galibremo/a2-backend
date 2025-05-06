import NewsDetailsPageView from '@/modules/NewsDetailsPage/view/NewsDetailsPageView'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <NewsDetailsPageView slug={slug} />
}
