"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Droplets, Heart, Home, Moon, PieChart, Settings, X } from "lucide-react"

interface MobileSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function MobileSidebar({ open, setOpen }: MobileSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-950 transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Health.ai</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
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
    </>
  )
}

