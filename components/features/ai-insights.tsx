import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Brain, Calendar, Droplets, Moon, Utensils } from "lucide-react"

export default function AiInsights() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-cyan-500" />
            <CardTitle>AI Health Assistant</CardTitle>
          </div>
          <CardDescription>Personalized insights based on your health data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 border border-cyan-100 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Good morning, Alex!</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Based on your recent health data, here are some personalized insights and recommendations to help you
              reach your goals:
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <Moon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Sleep Pattern</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Your sleep has been inconsistent this week. Try to maintain a regular sleep schedule, even on
                    weekends, to improve your overall sleep quality.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mr-4">
                  <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Hydration</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    You're currently 40% of the way to your daily hydration goal. Based on your activity level, you
                    should increase your water intake by at least 500ml in the next few hours.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
                  <Utensils className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Nutrition</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Your protein intake has been below target for the past 3 days. For dinner today, consider a
                    protein-rich meal like grilled chicken with quinoa and vegetables.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                View Detailed Analysis
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
          <CardDescription>Your health journey at a glance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <Moon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span>Sleep Quality</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">75/100</span>
                <Badge
                  variant="outline"
                  className="text-amber-500 border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800"
                >
                  +2
                </Badge>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mr-3">
                  <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span>Hydration</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">60/100</span>
                <Badge
                  variant="outline"
                  className="text-red-500 border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800"
                >
                  -5
                </Badge>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                  <Utensils className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span>Nutrition</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">85/100</span>
                <Badge
                  variant="outline"
                  className="text-green-500 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800"
                >
                  +8
                </Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-2 flex items-center justify-center">
              <Calendar className="w-4 h-4 mr-2" />
              View Monthly Trends
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>Personalized suggestions for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-blue-100 bg-blue-50 dark:bg-blue-950 dark:border-blue-900 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 flex items-center">
                <Moon className="w-4 h-4 mr-2" />
                Sleep Improvement
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Try going to bed 30 minutes earlier tonight to help regulate your sleep cycle. Avoid screens 1 hour
                before bedtime.
              </p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Set Bedtime Reminder
              </Button>
            </div>

            <div className="p-4 border border-cyan-100 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 rounded-lg">
              <h4 className="font-medium text-cyan-700 dark:text-cyan-300 flex items-center">
                <Droplets className="w-4 h-4 mr-2" />
                Hydration Goal
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Drink at least 500ml of water in the next 2 hours to stay on track with your hydration goals.
              </p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Set Water Reminder
              </Button>
            </div>

            <div className="p-4 border border-green-100 bg-green-50 dark:bg-green-950 dark:border-green-900 rounded-lg">
              <h4 className="font-medium text-green-700 dark:text-green-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Workout Suggestion
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Based on your recovery status, today is ideal for an upper body strength workout. We've prepared a
                routine for you.
              </p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                View Workout
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

