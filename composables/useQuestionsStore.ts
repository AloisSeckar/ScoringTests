import Question from '@/data/Question'
import questions from "@/data/sampleQuestions"
import { defineStore } from 'pinia'

export const useQuestionsStore = defineStore({
  id: 'questions-store',
  state: () => {
    return {
      questions: [] as Question[],
      selected: null as Question
    }
  },
  actions: {
    loadQuestions() {
      this.questions = questions
    }
  },
  getters: {
    getRandomQuestion(): Question {
      return this.questions[Math.floor(Math.random() * this.questions.length)]
    }
  },
})