

const url = 'https://api.quotable.io/random';


const btnEl = document.querySelector('button');
const quote = document.querySelector('h1');
const author = document.querySelector('h2');

btnEl.addEventListener('click',async()=>{
    try
    {
    quote.textContent = 'Loading...';
    author.textContent = 'Loading...'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    quote.textContent= data.content;
    author.textContent=data.author
    }
    catch(error)
    {
        quote.textContent = 'Please check your connection!';
        author.textContent='';
    }
})


