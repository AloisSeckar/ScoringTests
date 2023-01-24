import Answer from '@/data/Answer'
import Question from '@/data/Question'
import { defineStore } from 'pinia'

export const useQuestionStore = defineStore({
  id: 'question-store',
  state: () => {
    return {
      questions: [] as Question[],
      answers: [] as Answer[],
      totalQuestions: useRuntimeConfig().public.testLength,
      current: 0,
      finished: false,
      correctAnswers: 0,
    }
  },
  actions: {
    async loadQuestions() {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase
        .from("questions")
        .select("id, question, answer1, answer2, answer3, answer4, solution")
        .eq("valid", true)
        .limit(this.totalQuestions)

      if (data) {
        console.debug("'questions' loaded from Supabase")
        this.questions = data
        for (let i = 0; i < this.totalQuestions; i++ ) {
          this.answers.push(getEmptyAnswer())
        }
      } else {
        console.error("failed to load 'questions' from Supabase")
        console.error(error)
      }
    },
    previousQuestion(): void {
      if (this.current > 0) {
        this.current--
      }
    },
    nextQuestion(): void {
      if (this.current < useRuntimeConfig().public.testLength - 1) {
        this.current++
      }
    },
    markAnswer(index: number): void {
      if (0 <= index && index < 5) {
        this.answers[index].marked = true
      }
    },
    resetAnswer(index: number): void {
      if (0 <= index && index < 5) {
        this.answers[index] = getEmptyAnswer()
      }
    },
    evaluateTest() {
      // TODO check for unanswered (here or in component?)
      for (let i = 0; i < this.totalQuestions; i++) {
        this.answers[i].correct = this.questions[i].solution === this.getAnswerString(i)
        if (this.answers[i].correct) {
          this.correctAnswers++
        }
      }
      this.finished = true
    },
    async resetTest() {
      await this.loadQuestions()
      this.current = 0
      this.finished = false
      this.correctAnswers = 0
    }
  },
  getters: {
    getCurrentQuestion: (state): Question => state.questions[state.current],
    getCurrentAnswer: (state): Answer => state.answers[state.current],
    getAnswerString: (state) => {
      return (index: number): string => {
        const answer = state.answers[index]
        let answerString: string = ''
        if (answer.a) {
          answerString += 'a'
        }
        if (answer.b) {
          answerString += 'b'
        }
        if (answer.c) {
          answerString += 'c'
        }
        if (answer.d) {
          answerString += 'd'
        }
        return answerString
      }
    },
  }
})

export function getEmptyAnswer(): Answer {
  return {
    a: false,
    b: false,
    c: false,
    d: false,
    marked: false,
    correct: false
  }
}