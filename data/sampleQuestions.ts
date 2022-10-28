import Question from "@/data/Question"

const questions: Question[] = [
    {
        id: 1,
        question: 'Máte rádi softball?',
        answer1: 'Ano',
        answer2: '<strong>Hodně ano</strong>',
        answer3: '<div style="color: blue;">Ano v barvách</strong>',
        answer4: 'Ne',
        multiple: true,
        solution: 'abc',
    },
    {
        id: 2,
        question: 'Umíte zapisovat?',
        answer1: 'Ano',
        answer2: 'Ne',
        answer3: '<div style="color: green;">Ne v barvách</strong>',
        answer4: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/No-Symbol.png" style="height: 50px;">',
        multiple: false,
        solution: 'a',
    }
]

export default questions