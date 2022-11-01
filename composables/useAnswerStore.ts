import Question from '@/data/Question'
import { defineStore } from 'pinia'

export const useAnswerStore = defineStore({
    id: 'answer-store',
    state: () => {
        return {
            a: false as boolean,
            b: false as boolean,
            c: false as boolean,
            d: false as boolean,
            current: {} as Question,
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
            if (this.a) {
                answerString += 'a'
            }
            if (this.b) {
                answerString += 'b'
            }
            if (this.c) {
                answerString += 'c'
            }
            if (this.d) {
                answerString += 'd'
            }
            return answerString
        }
    },
})