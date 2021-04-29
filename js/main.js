const API_KEY = 'Q2cGQjxVrHZx0s6I7emW0BS2kGQURRJC';
const URL = 'https://api.giphy.com/v1/gifs/';

const button = document.getElementById("sendButton");
const main = document.getElementById("main");
const inputElement = document.getElementById("search");


button.addEventListener("click", ()=>{
    searchGif(inputElement.value);
});
function searchGif(wordToSearch){
    const fetchPromise = fetch(`${URL}search?api_key=${API_KEY}&q=${wordToSearch}&limit=25&offset=0&rating=g&lang=en`)
    
    fetchPromise.then(response=> {
        console.log('result', response);
        return response.json();
    }).then(result => {
        console.log('data', result.data);
        madeGrid(result.data);
    }).catch(err => {
        console.log('error pa!', err);
    });

    function madeGrid(data){
    //const images = data.map(anchor => `<li><a href="${anchor.bitly_url}" target="_blank">${anchor.title}</a></li>`).join("\n");
        const images = data.map(img => `<li><img src="${img.images.downsized.url}" /></li>`).join("\n");
        console.log('images html', images);
    main.innerHTML = `<ul>${images}</ul>`
    }
}
