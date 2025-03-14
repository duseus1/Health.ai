import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, Calendar, Clock, Plus } from "lucide-react"

export default function SleepTracker() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Sleep Analysis</CardTitle>
            <CardDescription>Track your sleep patterns and quality</CardDescription>
          </div>
          <Tabs defaultValue="week" className="w-[200px]">
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full flex items-end justify-between gap-2">
            {[65, 45, 80, 72, 90, 55, 70].map((value, i) => (
              <div key={i} className="relative h-full flex flex-col justify-end items-center gap-2">
                <div
                  className="w-12 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-md"
                  style={{ height: `${value}%` }}
                ></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-500 dark:text-gray-400">Avg. Duration</span>
              <span className="text-xl font-bold mt-1">7h 24m</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-500 dark:text-gray-400">Deep Sleep</span>
              <span className="text-xl font-bold mt-1">1h 45m</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-sm text-gray-500 dark:text-gray-400">Sleep Score</span>
              <span className="text-xl font-bold mt-1">82/100</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sleep Schedule</CardTitle>
          <CardDescription>Set your sleep goals and reminders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyan-500" />
                <div>
                  <p className="font-medium">Bedtime</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">10:30 PM</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Calendar className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-cyan-500" />
                <div>
                  <p className="font-medium">Wake up</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">6:00 AM</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Calendar className="w-4 h-4" />
              </Button>
            </div>
            <Button className="w-full mt-2">
              <Plus className="w-4 h-4 mr-2" />
              Log Sleep Manually
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sleep Insights</CardTitle>
          <CardDescription>AI-powered recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-cyan-100 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 rounded-lg">
              <h4 className="font-medium text-cyan-700 dark:text-cyan-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Sleep Pattern Analysis
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Your sleep has been inconsistent this week. Try to maintain a regular sleep schedule, even on weekends,
                to improve your overall sleep quality.
              </p>
            </div>
            <div className="p-4 border border-blue-100 bg-blue-50 dark:bg-blue-950 dark:border-blue-900 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Recommendation
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Based on your activity level and sleep data, we recommend going to bed 30 minutes earlier to achieve
                optimal recovery.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

