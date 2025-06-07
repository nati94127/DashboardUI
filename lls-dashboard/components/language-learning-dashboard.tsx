"use client"
import {BookOpen , Clock , Star, ArrowRight } from "lucide-react"

interface Task {
    id: string
  title: string
  description?: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  completed: boolean
  language: string
}

interface DayTasks{
      day: string
  tasks: Task[]
}

const weeklyTasks: DayTasks[] =[
    {
        day: "Monday",
    tasks: [
      {
        id: "1",
        title: "Spanish Basics: Greetings",
        description: "Learn common Spanish greetings and introductions",
        duration: "15 min",
        difficulty: "Beginner",
        completed: false,
        language: "Spanish",
      },
      {
        id: "2",
        title: "Grammar: Present Tense",
        description: "Master the present tense conjugations",
        duration: "25 min",
        difficulty: "Intermediate",
        completed: true,
        language: "Spanish",
      },
    ],
    },
    {
    day: "Tuesday",
    tasks: [
      {
        id: "3",
        title: "French Pronunciation",
        description: "Practice French vowel sounds and accent marks",
        duration: "20 min",
        difficulty: "Beginner",
        completed: false,
        language: "French",
      },
      {
        id: "4",
        title: "Vocabulary: Food & Dining",
        description: "Learn essential food-related vocabulary",
        duration: "18 min",
        difficulty: "Intermediate",
        completed: false,
        language: "French",
      },
    ],
  },
  {
    day: "Wednesday",
    tasks: [
      {
        id: "5",
        title: "German Articles",
        description: "Understanding der, die, das and their usage",
        duration: "30 min",
        difficulty: "Intermediate",
        completed: false,
        language: "German",
      },
            {
        id: "7",
        title: "Cultural Context: Spain",
        description: "Learn about Spanish culture and customs",
        duration: "22 min",
        difficulty: "Beginner",
        completed: false,
        language: "Spanish",
      },
    ],
  },
  {
    day: "Thursday",
    tasks: [
      {
        id: "6",
        title: "Spanish Conversation",
        description: "Practice daily conversation scenarios",
        duration: "35 min",
        difficulty: "Advanced",
        completed: false,
        language: "Spanish",
      },
      {
        id: "7",
        title: "Cultural Context: Spain",
        description: "Learn about Spanish culture and customs",
        duration: "22 min",
        difficulty: "Beginner",
        completed: false,
        language: "Spanish",
      },
    ],
  },
  {
    day: "Friday",
    tasks: [
      {
        id: "8",
        title: "French Listening Practice",
        description: "Audio exercises with native speakers",
        duration: "28 min",
        difficulty: "Advanced",
        completed: false,
        language: "French",
      },
    ],
  },
  {
    day: "Saturday",
    tasks: [
      {
        id: "9",
        title: "German Vocabulary Review",
        description: "Review and practice this week's German words",
        duration: "20 min",
        difficulty: "Intermediate",
        completed: false,
        language: "German",
      },
      {
        id: "10",
        title: "Writing Exercise",
        description: "Write a short paragraph in German",
        duration: "25 min",
        difficulty: "Advanced",
        completed: false,
        language: "German",
      },
    ],
  },
  {
    day: "Sunday",
    tasks: [
      {
        id: "11",
        title: "Weekly Review Quiz",
        description: "Test your knowledge from this week's lessons",
        duration: "15 min",
        difficulty: "Intermediate",
        completed: false,
        language: "Mixed",
      },
    ],
  },
]
const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "badge-beginner"
    case "Intermediate":
      return "badge-intermediate"
    case "Advanced":
      return "badge-advanced"
    default:
      return ""
  }
}
const getLanguageClass = (language: string) => {
  switch (language) {
    case "Spanish":
      return "badge-spanish"
    case "French":
      return "badge-french"
    case "German":
      return "badge-german"
    default:
      return "badge-mixed"
  }
}

export function LanguageLearningDashboard(){
const handleGoToTutorial = (taskId: string, taskTitle: string) => {
    console.log(`Navigating to tutorial: ${taskTitle} (ID: ${taskId})`)
  }
  const completedTasks = weeklyTasks.reduce(
    (total, day) => total + day.tasks.filter((task) => task.completed).length,
    0,
  )
  const totalTasks = weeklyTasks.reduce((total, day) => total + day.tasks.length, 0)

return (
<div className="container space-y-6 py-4 ">
<div className="py-4">
    <h1 className="text-4xl font-bold text-gray-100 ">Task Dashboard</h1>
    <p className="text-lg text-gray-500 ">Track your weekly language learning progress</p>
        
</div>
      {/* Weekly Grid - Using auto-fill for responsive behavior */}
      <div className="dashboard-grid">
        {weeklyTasks.map((dayData) => (
          <div key={dayData.day} className="card">
            <div className="card-header pb-3">
              <h2 className="card-title text-lg font-semibold text-center">{dayData.day}</h2>
              <p className="card-description text-center">
                {dayData.tasks.length} {dayData.tasks.length === 1 ? "task" : "tasks"}
              </p>
            </div>
            <div className="card-content space-y-3">
              {dayData.tasks.length === 0 ? (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No tasks scheduled</p>
                </div>
              ) : (
                dayData.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`card task-card ${
                      task.completed ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : ""
                    }`}
                  >
                    <div className="p-4 space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3
                            className={`font-medium text-sm leading-tight ${
                              task.completed ? "line-through text-gray-500" : ""
                            }`}
                          >
                            {task.title}
                          </h3>
                          {task.completed && <Star className="h-4 w-4 text-green-500 flex-shrink-0" />}
                        </div>

                        {task.description && (
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{task.description}</p>
                        )}

                        <div className="flex flex-wrap gap-1">
                          <span className={`badge ${getDifficultyClass(task.difficulty)}`}>{task.difficulty}</span>
                          <span className={`badge ${getLanguageClass(task.language)}`}>{task.language}</span>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3" />
                          <span>{task.duration}</span>
                        </div>
                      </div>

                      <button
                        className={`button button-sm w-full ${
                          task.completed ? "button-secondary" : "button-primary"
                        } ${task.completed ? "button-disabled" : ""}`}
                        onClick={() => !task.completed && handleGoToTutorial(task.id, task.title)}
                        disabled={task.completed}
                      >
                        {task.completed ? (
                          "Completed"
                        ) : (
                          <>
                            Go to Tutorial
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
)
}

