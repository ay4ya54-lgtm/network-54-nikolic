"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { articles } from "@/lib/data"

// Mock contributions data
const mockContributions = [
  {
    id: "1",
    articleId: "guillermo-rauch",
    articleTitle: "Guillermo Rauch",
    sectionId: "career",
    sectionTitle: "Career",
    contributorName: "TechHistorian",
    content:
      "In 2020, Vercel raised $21 million in Series A funding led by Accel, with participation from GitHub's CEO Nat Friedman and other notable investors.",
    reference:
      "https://techcrunch.com/2020/04/21/vercel-raises-21m-series-a-for-its-next-js-based-front-end-development-platform/",
    status: "pending",
    createdAt: "2023-11-15T14:30:00Z",
  },
  {
    id: "2",
    articleId: "guillermo-rauch",
    articleTitle: "Guillermo Rauch",
    sectionId: "recognition",
    sectionTitle: "Recognition",
    contributorName: "DevFan42",
    content:
      "In 2022, Rauch was named one of the most influential people in web development by Web Developer Magazine.",
    reference: "https://example.com/web-dev-influencers-2022",
    status: "pending",
    createdAt: "2023-11-14T09:15:00Z",
  },
  {
    id: "3",
    articleId: "guillermo-rauch",
    articleTitle: "Guillermo Rauch",
    sectionId: "early-years",
    sectionTitle: "Primeros años y educación",
    contributorName: "CodeHistorian",
    content:
      "According to interviews, Rauch taught himself programming by watching YouTube tutorials and reading documentation.",
    reference: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
    status: "pending",
    createdAt: "2023-11-13T16:45:00Z",
  },
]

export default function AdminPage() {
  const [contributions, setContributions] = useState(mockContributions)

  const handleApprove = (id: string) => {
    setContributions((prev) =>
      prev.map((contribution) => (contribution.id === id ? { ...contribution, status: "approved" } : contribution)),
    )
  }

  const handleReject = (id: string) => {
    setContributions((prev) =>
      prev.map((contribution) => (contribution.id === id ? { ...contribution, status: "rejected" } : contribution)),
    )
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="mb-4">
          <TabsTrigger value="pending">
            Pending Contributions
            <Badge variant="secondary" className="ml-2">
              {contributions.filter((c) => c.status === "pending").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="articles">My Articles</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <div className="space-y-4">
            {contributions
              .filter((c) => c.status === "pending")
              .map((contribution) => (
                <Card key={contribution.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Contribution to "{contribution.articleTitle}"</CardTitle>
                        <CardDescription>
                          Section: {contribution.sectionTitle} • By: {contribution.contributorName} •
                          {new Date(contribution.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge>Pending</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Content:</h4>
                        <p className="bg-gray-50 p-3 rounded border">{contribution.content}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Reference:</h4>
                        <p className="text-blue-600 break-all">{contribution.reference}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => handleReject(contribution.id)}>
                      Reject
                    </Button>
                    <Button onClick={() => handleApprove(contribution.id)}>Approve</Button>
                  </CardFooter>
                </Card>
              ))}

            {contributions.filter((c) => c.status === "pending").length === 0 && (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  No pending contributions to review.
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="approved">
          <div className="space-y-4">
            {contributions
              .filter((c) => c.status === "approved")
              .map((contribution) => (
                <Card key={contribution.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Contribution to "{contribution.articleTitle}"</CardTitle>
                        <CardDescription>
                          Section: {contribution.sectionTitle} • By: {contribution.contributorName} •
                          {new Date(contribution.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge variant="success" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Approved
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Content:</h4>
                        <p className="bg-gray-50 p-3 rounded border">{contribution.content}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Reference:</h4>
                        <p className="text-blue-600 break-all">{contribution.reference}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {contributions.filter((c) => c.status === "approved").length === 0 && (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  No approved contributions yet.
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="rejected">
          <div className="space-y-4">
            {contributions
              .filter((c) => c.status === "rejected")
              .map((contribution) => (
                <Card key={contribution.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Contribution to "{contribution.articleTitle}"</CardTitle>
                        <CardDescription>
                          Section: {contribution.sectionTitle} • By: {contribution.contributorName} •
                          {new Date(contribution.createdAt).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge variant="destructive">Rejected</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Content:</h4>
                        <p className="bg-gray-50 p-3 rounded border">{contribution.content}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Reference:</h4>
                        <p className="text-blue-600 break-all">{contribution.reference}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {contributions.filter((c) => c.status === "rejected").length === 0 && (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">No rejected contributions.</CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="articles">
          <div className="space-y-4">
            {articles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2">{article.introduction.replace(/<[^>]*>/g, "")}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div>
                    <Badge variant="outline" className="mr-2">
                      {contributions.filter((c) => c.articleId === article.slug && c.status === "pending").length}{" "}
                      pending
                    </Badge>
                    <Badge variant="outline" className="bg-green-50">
                      {contributions.filter((c) => c.articleId === article.slug && c.status === "approved").length}{" "}
                      approved
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/articles/${article.slug}`}>View</Link>
                    </Button>
                    <Button variant="outline">Edit</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

