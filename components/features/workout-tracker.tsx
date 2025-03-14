import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Calendar, ChevronRight, Clock, Dumbbell, Play, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WorkoutTracker() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <CardTitle>Workout History</CardTitle>
              <CardDescription>Track your fitness progress</CardDescription>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Start Workout
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="plans">Plans</TabsTrigger>
            </TabsList>
            <TabsContent value="history" className="mt-6">
              <div className="space-y-4">
                {[
                  {
                    date: "Today",
                    workout: "Upper Body Strength",
                    duration: "45 min",
                    calories: "320",
                    completed: true,
                  },
                  {
                    date: "Yesterday",
                    workout: "HIIT Cardio",
                    duration: "30 min",
                    calories: "280",
                    completed: true,
                  },
                  {
                    date: "Mar 10",
                    workout: "Lower Body Focus",
                    duration: "50 min",
                    calories: "350",
                    completed: true,
                  },
                  {
                    date: "Mar 8",
                    workout: "Core & Flexibility",
                    duration: "40 min",
                    calories: "220",
                    completed: true,
                  },
                ].map((workout, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mr-4">
                        <Dumbbell className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">{workout.workout}</p>
                          {workout.completed && (
                            <Badge
                              variant="outline"
                              className="ml-2 text-green-500 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800"
                            >
                              Completed
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{workout.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end">
                        <Clock className="w-4 h-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{workout.duration}</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{workout.calories} cal</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="stats" className="mt-6">
              <div className="h-[250px] w-full flex items-end justify-between gap-2">
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
                  <span className="text-sm text-gray-500 dark:text-gray-400">Workouts</span>
                  <span className="text-xl font-bold mt-1">12</span>
                  <span className="text-xs text-green-500">+3 this week</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Avg. Duration</span>
                  <span className="text-xl font-bold mt-1">42m</span>
                  <span className="text-xs text-green-500">+5m from last week</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Calories</span>
                  <span className="text-xl font-bold mt-1">3,240</span>
                  <span className="text-xs text-green-500">+15% from last week</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="plans" className="mt-6">
              <div className="space-y-4">
                {[
                  {
                    name: "4-Week Strength Builder",
                    level: "Intermediate",
                    workouts: 16,
                    progress: 25,
                  },
                  {
                    name: "HIIT Cardio Challenge",
                    level: "Advanced",
                    workouts: 12,
                    progress: 50,
                  },
                  {
                    name: "Beginner Full Body",
                    level: "Beginner",
                    workouts: 12,
                    progress: 0,
                  },
                ].map((plan, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                        <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium">{plan.name}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <span>{plan.level}</span>
                          <span className="mx-2">•</span>
                          <span>{plan.workouts} workouts</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {plan.progress > 0 ? (
                        <span className="mr-3 text-sm">{plan.progress}%</span>
                      ) : (
                        <Button size="sm" variant="outline" className="mr-3">
                          <Play className="w-3 h-3 mr-1" />
                          Start
                        </Button>
                      )}
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today's Workout</CardTitle>
          <CardDescription>Upper Body Strength</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { exercise: "Bench Press", sets: "3 sets x 10 reps", weight: "135 lbs" },
              { exercise: "Shoulder Press", sets: "3 sets x 12 reps", weight: "80 lbs" },
              { exercise: "Lat Pulldown", sets: "3 sets x 12 reps", weight: "120 lbs" },
              { exercise: "Bicep Curls", sets: "3 sets x 15 reps", weight: "25 lbs" },
              { exercise: "Tricep Extensions", sets: "3 sets x 15 reps", weight: "30 lbs" },
            ].map((exercise, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium">{exercise.exercise}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exercise.sets}</p>
                </div>
                <div className="text-right">
                  <span className="font-medium">{exercise.weight}</span>
                </div>
              </div>
            ))}
            <div className="flex space-x-3 mt-4">
              <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Play className="w-4 h-4 mr-2" />
                Start Workout
              </Button>
              <Button variant="outline" className="flex-1">
                Edit Workout
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workout Insights</CardTitle>
          <CardDescription>AI-powered recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-blue-100 bg-blue-50 dark:bg-blue-950 dark:border-blue-900 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Performance Analysis
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Your bench press strength has increased by 10% over the past month. Consider increasing weight by 5-10
                lbs for your next workout.
              </p>
            </div>
            <div className="p-4 border border-cyan-100 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 rounded-lg">
              <h4 className="font-medium text-cyan-700 dark:text-cyan-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Recovery Status
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Based on your sleep data and previous workouts, your upper body is 85% recovered. You're good to proceed
                with today's workout.
              </p>
            </div>
            <div className="p-4 border border-green-100 bg-green-50 dark:bg-green-950 dark:border-green-900 rounded-lg">
              <h4 className="font-medium text-green-700 dark:text-green-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Suggested Workout
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                For tomorrow, we recommend a cardio session to balance your training and improve overall fitness.
              </p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                View Suggestion
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

