"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Droplets, Heart, Home, Moon, PieChart, Plus, Settings } from "lucide-react"
import Header from "@/components/header"
import SleepTracker from "@/components/features/sleep-tracker"
import WaterIntake from "@/components/features/water-intake"
import CalorieCounter from "@/components/features/calorie-counter"
import WorkoutTracker from "@/components/features/workout-tracker"
import AiInsights from "@/components/features/ai-insights"
import MobileSidebar from "@/components/mobile-sidebar"
import { supabase } from "@/lib/supabase"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (user) {
          // Fetch user profile from profiles table
          const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

          setUser({
            ...user,
            profile: profile || { full_name: user.user_metadata?.full_name || "User" },
          })
        }
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const userName = user?.profile?.full_name?.split(" ")[0] || "User"

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar */}
      <MobileSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:dark:border-gray-800 lg:bg-white lg:dark:bg-gray-950">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Health.ai</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 dark:text-gray-400">
              <PieChart className="w-5 h-5 mr-3" />
              Nutrition
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 dark:text-gray-400">
              <Calendar className="w-5 h-5 mr-3" />
              Workouts
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 dark:text-gray-400">
              <Moon className="w-5 h-5 mr-3" />
              Sleep
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 dark:text-gray-400">
              <Droplets className="w-5 h-5 mr-3" />
              Hydration
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-600 dark:text-gray-400">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Button>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 lg:pl-64">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Good morning, {userName}</h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400">Here's your health summary for today</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Log Activity
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Sleep</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">7h 12m</div>
                    <Badge
                      variant="outline"
                      className="text-cyan-500 border-cyan-200 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-800"
                    >
                      +8%
                    </Badge>
                  </div>
                  <Progress value={80} className="h-1 mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Water</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">1.2L</div>
                    <Badge
                      variant="outline"
                      className="text-amber-500 border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800"
                    >
                      -15%
                    </Badge>
                  </div>
                  <Progress value={40} className="h-1 mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Calories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">1,248</div>
                    <Badge
                      variant="outline"
                      className="text-green-500 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800"
                    >
                      On track
                    </Badge>
                  </div>
                  <Progress value={62} className="h-1 mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">8,432</div>
                    <Badge
                      variant="outline"
                      className="text-green-500 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800"
                    >
                      +12%
                    </Badge>
                  </div>
                  <Progress value={70} className="h-1 mt-2" />
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="insights" className="w-full">
              <TabsList className="grid w-full grid-cols-5 md:w-auto">
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
                <TabsTrigger value="sleep">Sleep</TabsTrigger>
                <TabsTrigger value="water">Water</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                <TabsTrigger value="workouts">Workouts</TabsTrigger>
              </TabsList>
              <TabsContent value="insights" className="mt-6">
                <AiInsights />
              </TabsContent>
              <TabsContent value="sleep" className="mt-6">
                <SleepTracker />
              </TabsContent>
              <TabsContent value="water" className="mt-6">
                <WaterIntake />
              </TabsContent>
              <TabsContent value="nutrition" className="mt-6">
                <CalorieCounter />
              </TabsContent>
              <TabsContent value="workouts" className="mt-6">
                <WorkoutTracker />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

