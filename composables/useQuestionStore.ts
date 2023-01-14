import Answer from '@/data/Answer'
import Question from '@/data/Question'
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
    async loadQuestions() {
      const supabase = useSupabaseClient()
      const { data, error } = await supabase
        .from("questions")
        .select("id, question, answer1, answer2, answer3, answer4, solution")
        .eq("valid", true)

      if (data) {
          console.debug("'questions' loaded from Supabase")
          this.questions = data
          this.setQuestion()
      } else {
        console.error("failed to load 'questions' from Supabase")
        console.error(error)
      }
    },
    setQuestion(): void {
      this.current = this.questions[Math.floor(Math.random() * this.questions.length)] as Question
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