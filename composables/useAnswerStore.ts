import Question from '@/data/Question'
import { defineStore } from 'pinia'

export const useAnswerStore = defineStore({
    id: 'answer-store',
    state: () => {
        return {
            a1: false as boolean,
            a2: false as boolean,
            a3: false as boolean,
            a4: false as boolean,
            current: null as Question,
            answered: false as boolean,
            correct: false as boolean,
        }
    },
    actions: {
        setQuestion(): void {
            this.current = useQuestionsStore().getRandomQuestion
            this.answered = false
        }
    },
    getters: {
        getAnswerString(): string {
            let answerString: string = ''
            if (this.a1) {
                answerString += 'a'
            }
            if (this.a2) {
                answerString += 'b'
            }
            if (this.a3) {
                answerString += 'c'
            }
            if (this.a4) {
                answerString += 'd'
            }
            return answerString
        }
    },
})