const text = document.querySelector('p')


function getChrono(){


    const now = new Date().getTime();
    const countdownDate = new Date ('September 30, 2022').getTime();

    const distanceBase = countdownDate - now

    const days = Math.floor(distanceBase / (1000*60*60*24)); 
    const hours = Math.floor((distanceBase % (1000*60*60*24)) / (1000 *60*60))
    const minutes = Math.floor((distanceBase % (1000*60*60))/(1000 * 60))
    const seconds = Math.floor((distanceBase % (1000*60))/1000)

    text.innerText =`${days}j ${hours}h ${minutes}m ${seconds}s`;

}

getChrono()

const countdownInterval = setInterval(() => {
    getChrono
}, 1000);
