import Answer from '@/data/Answer'
import Question from '@/data/Question'
import questions from "@/data/sampleQuestions"
import { defineStore } from 'pinia'

export const useQuestionStore = defineStore({
  id: 'question-store',
  state: () => {
    return {
      questions: [] as Question[],
      current: {} as Question,
      answer: {} as Answer,
    }
  },
  actions: {
    loadQuestions() {
      this.questions = questions
    },
    setQuestion(): void {
      this.current = questions[Math.floor(Math.random() * questions.length)] as Question
      this.clearAnswer()
    },
    clearAnswer(): void {
      this.answer = {} as Answer
    }
  },
  getters: {
    getAnswerString(): string {
      let answerString: string = ''
      if (this.answer.a) {
        answerString += 'a'
      }
      if (this.answer.b) {
        answerString += 'b'
      }
      if (this.answer.c) {
        answerString += 'c'
      }
      if (this.answer.d) {
        answerString += 'd'
      }
      return answerString
    }
  },
})