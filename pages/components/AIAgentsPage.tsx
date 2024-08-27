import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FileText, BarChart2, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const agents = [
    {
      title: "公文写作助手",
      description: "",
      icon: <FileText className="h-6 w-6" />,
      url: "https://aiagent.marsyoo.com/chat/v4QNQ2576IQpq0Ja"
    },
    {
      title: "数据分析大师",
      description: "",
      icon: <BarChart2 className="h-6 w-6" />,
      url: "https://aiagent.marsyoo.com/chat/ghKWbCmDNKdM0SXb"
    },
    {
      title: "小红书智能文案",
      description: "",
      icon: <MessageSquare className="h-6 w-6" />,
      url: "https://aiagent.marsyoo.com/chat/OPc3cuEhCaWfO04j"
    }
  ]

  return (
    <div className="bg-gradient-to-r from-background to-background/80 py-8 px-7 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-16">
        <div className="flex flex-col space-y-4">
          {agents.map((agent, index) => (
            <Link href={agent.url} key={index} className="transform transition duration-300 hover:translate-x-2">
              <Card className="flex items-center bg-card hover:bg-card/90 shadow-sm hover:shadow transition-all duration-300">
                <div className="rounded-full bg-primary p-3 text-primary-foreground m-4">
                  {agent.icon}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{agent.title}</CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}