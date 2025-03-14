import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, Camera, Plus, Search, Utensils } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function CalorieCounter() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <CardTitle>Nutrition Tracker</CardTitle>
              <CardDescription>Track your daily calorie and macronutrient intake</CardDescription>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-2">
              <Button variant="outline" className="flex items-center">
                <Camera className="w-4 h-4 mr-2" />
                Scan Food
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Meal
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="col-span-4 md:col-span-1">
              <div className="relative w-full h-48 md:h-full">
                <div className="absolute inset-0 rounded-lg border-8 border-gray-100 dark:border-gray-800"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500">1,248</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">of 2,000 cal</div>
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
                    className="text-green-500"
                    strokeWidth="8"
                    strokeDasharray={290}
                    strokeDashoffset={290 * (1 - 0.62)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="46"
                    cx="50"
                    cy="50"
                  />
                </svg>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Protein</div>
                  <div className="mt-1 flex justify-between items-center">
                    <div className="text-xl font-bold">78g</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">of 120g</div>
                  </div>
                  <Progress value={65} className="h-1 mt-2" />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Carbs</div>
                  <div className="mt-1 flex justify-between items-center">
                    <div className="text-xl font-bold">145g</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">of 250g</div>
                  </div>
                  <Progress value={58} className="h-1 mt-2" />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Fat</div>
                  <div className="mt-1 flex justify-between items-center">
                    <div className="text-xl font-bold">42g</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">of 65g</div>
                  </div>
                  <Progress value={64} className="h-1 mt-2" />
                </div>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search for food..." className="pl-10" />
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Breakfast</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Oatmeal with berries</p>
                      </div>
                    </div>
                    <span className="font-medium">320 cal</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Lunch</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Grilled chicken salad</p>
                      </div>
                    </div>
                    <span className="font-medium">450 cal</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Snack</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Greek yogurt with honey</p>
                      </div>
                    </div>
                    <span className="font-medium">180 cal</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 mr-3 text-gray-500" />
                      <div>
                        <p className="font-medium">Dinner</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Salmon with vegetables</p>
                      </div>
                    </div>
                    <span className="font-medium">298 cal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Meal Planner</CardTitle>
          <CardDescription>AI-generated meal suggestions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-green-100 bg-green-50 dark:bg-green-950 dark:border-green-900 rounded-lg">
              <h4 className="font-medium text-green-700 dark:text-green-300">Dinner Suggestion</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Based on your macronutrient goals and available ingredients, we recommend a quinoa bowl with roasted
                vegetables and grilled tofu.
              </p>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">420 calories</span>
                <span className="text-gray-500 dark:text-gray-400">P: 22g | C: 45g | F: 18g</span>
              </div>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Add to Today's Meals
              </Button>
            </div>

            <div className="p-4 border border-blue-100 bg-blue-50 dark:bg-blue-950 dark:border-blue-900 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300">Weekly Meal Plan</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Your personalized meal plan for the week is ready. It includes 21 meals balanced for your nutritional
                goals and preferences.
              </p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                View Meal Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nutrition Insights</CardTitle>
          <CardDescription>AI-powered recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-amber-100 bg-amber-50 dark:bg-amber-950 dark:border-amber-900 rounded-lg">
              <h4 className="font-medium text-amber-700 dark:text-amber-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Protein Intake
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Your protein intake has been below target for the past 3 days. Consider adding more lean protein sources
                like chicken, fish, or plant-based alternatives.
              </p>
            </div>
            <div className="p-4 border border-cyan-100 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-900 rounded-lg">
              <h4 className="font-medium text-cyan-700 dark:text-cyan-300 flex items-center">
                <BarChart className="w-4 h-4 mr-2" />
                Nutrient Analysis
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Based on your food logs, you might be low on vitamin D and omega-3 fatty acids. Consider adding fatty
                fish or supplements to your diet.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Weekly Calorie Average</span>
                <span className="font-medium">1,850/day</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

