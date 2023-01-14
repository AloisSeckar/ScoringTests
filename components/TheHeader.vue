<template>
    <div>
        <img src="/logo.webp" alt="Czech Scorekeepers" />
        <h1>Czech Scorekeepers - online test</h1>
        <span>
            <a href="https://www.baseball.cz/"><img src="/cba.webp" alt="ČBA" /></a>
            <a href="https://softball.cz/"><img src="/csa.webp" alt="ČSA" /></a>
        </span> 
    </div>
</template>

<style scoped>
img {
    display: inline-block;
    vertical-align: middle;
    height: 100px;
}

span {
    position: absolute;
    right: 0px;
    margin: 5px;
}
span > a > img {
    height: 60px;
    border-radius: 50%;
    margin: 5px;
}
</style>