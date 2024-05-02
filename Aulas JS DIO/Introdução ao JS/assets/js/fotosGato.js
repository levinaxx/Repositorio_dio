const BASE_URL = 'https://api.thecatapi.com/v1/images/search/'
const catBtn = document.getElementById('change-cat')
const catImg = document.getElementById('cat')

const getCats = async () => {

    const json = await fetch(BASE_URL)
        .then(res => res.json())
        .catch(e => console.log(e))

    return json[0].url
}

const loading = async () => {
    const catImg = document.getElementById('cat')
    catImg.src = await getCats()
}
catBtn.addEventListener('click', loading)

loading()