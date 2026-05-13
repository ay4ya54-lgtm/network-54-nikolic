"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ArticleViewer from "@/components/article-viewer"
import ContributionForm from "@/components/contribution-form"
import { articles } from "@/lib/data"

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const [article, setArticle] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    const foundArticle = articles.find((a) => a.slug === slug)
    setArticle(foundArticle)
    setLoading(false)
  }, [slug])

  if (loading) {
    return <div className="container mx-auto py-10">Loading article...</div>
  }

  if (!article) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Button asChild className="mt-4">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Article: {article.title}</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>

      <Tabs defaultValue="view">
        <TabsList className="mb-4">
          <TabsTrigger value="view">View Article</TabsTrigger>
          <TabsTrigger value="contribute">Contribute</TabsTrigger>
        </TabsList>

        <TabsContent value="view">
          <div className="bg-white p-6 rounded-lg border">
            <ArticleViewer article={article} />
          </div>
        </TabsContent>

        <TabsContent value="contribute">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Current Article</h2>
              <div className="max-h-[600px] overflow-y-auto pr-4">
                <ArticleViewer article={article} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Add Your Contribution</h2>
              <ContributionForm articleId={article.id} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

