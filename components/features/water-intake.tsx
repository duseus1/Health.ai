import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Droplets, Plus } from "lucide-react"

export default function WaterIntake() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Water Intake Tracker</CardTitle>
          <CardDescription>Track your daily hydration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 mb-6">
              <div className="absolute inset-0 rounded-full border-8 border-gray-100 dark:border-gray-800"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-500">1.2L</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">of 3L goal</div>
                </div>
              </div>
              <svg className="absolute inset-0 w-full h-full rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-gray-100 dark:text-gray-800"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="46"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-cyan-500"
                  strokeWidth="8"
                  strokeDasharray={290}
                  strokeDashoffset={290 * (1 - 0.4)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="46"
                  cx="50"
                  cy="50"
                />
              </svg>
            </div>

            <div className="grid grid-cols-4 gap-4 w-full max-w-md">
              <Button variant="outline" className="flex flex-col h-auto py-3">
                <Droplets className="w-5 h-5 mb-1 text-cyan-500" />
                <span className="text-xs">100ml</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-3">
                <Droplets className="w-5 h-5 mb-1 text-cyan-500" />
                <span className="text-xs">200ml</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-3">
                <Droplets className="w-5 h-5 mb-1 text-cyan-500" />
                <span className="text-xs">300ml</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-auto py-3">
                <Plus className="w-5 h-5 mb-1" />
                <span className="text-xs">Custom</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today's Log</CardTitle>
          <CardDescription>Your water intake history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "8:30 AM", amount: "300ml" },
              { time: "10:15 AM", amount: "200ml" },
              { time: "12:45 PM", amount: "500ml" },
              { time: "3:20 PM", amount: "200ml" },
            ].map((entry, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center">
                  <Droplets className="w-5 h-5 mr-3 text-cyan-500" />
                  <span>{entry.time}</span>
                </div>
                <span className="font-medium">{entry.amount}</span>
              </div>
            ))}
            <Button className="w-full mt-2">
              <Plus className="w-4 h-4 mr-2" />
              Add Water Intake
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hydration Insights</CardTitle>
          <CardDescription>AI-powered recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-cyan-100 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 rounded-lg">
              <h4 className="font-medium text-cyan-700 dark:text-cyan-300">Current Status</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                You're currently 40% of the way to your daily hydration goal. Based on your activity level, you should
                increase your water intake.
              </p>
            </div>
            <div className="p-4 border border-amber-100 bg-amber-50 dark:bg-amber-950 dark:border-amber-900 rounded-lg">
              <h4 className="font-medium text-amber-700 dark:text-amber-300">Recommendation</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Try to drink at least 500ml of water in the next 2 hours to stay on track with your hydration goals.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Weekly Average</span>
                <span className="font-medium">2.4L/day</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

