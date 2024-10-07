const videoSources = [
    {
        src: 'background/background-video1.mp4',
        text: 'Now playing: YOUNG MULTI - Power Up',
        text2: 'made by: swetiDev 💚',
        link: 'https://www.youtube.com/watch?v=HGg9rTtJSWg'
    },
    {
        src: 'background/background-video2.mp4',
        text: 'Now playing: KOX KUMPLE - ANDRYCHOWSKI GANGSTER',
        text2: 'made by: swetiDev 🤍',
        link: 'https://www.youtube.com/watch?v=nW0lLR8B2r4'
    },
    {
        src: 'background/background-video3.mp4',
        text: 'Now playing: KOX KUMPLE - MY TO KUMPLE',
        text2: 'made by: swetiDev 🧡',
        link: 'https://www.youtube.com/watch?v=DKdsrWRtfow'
    },
    {
        src: 'background/background-video4.mp4',
        text: 'Now playing: Lil Nigma - Monochrom',
        text2: 'made by: swetiDev 🩷',
        link: 'https://www.youtube.com/watch?v=hRQqa8k9law'
    },
    {
        src: 'background/background-video5.mp4',
        text: 'Now playing: chivas - noWy baTmAN',
        text2: 'made by: swetiDev 🖤',
        link: 'https://www.youtube.com/watch?v=fsCT6RdTvKo'
    }

];

// Function to get a random video source
function getRandomVideoSource() {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    return videoSources[randomIndex];
}

// Set the random video source and update the text
document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('background-video');
    const footerElement = document.querySelector('.text2'); // Select the paragraph with class text2
    const idkElement = document.getElementById('idk'); // Select the element with the id 'idk'

    const randomVideo = getRandomVideoSource();

    videoElement.src = randomVideo.src;
    footerElement.innerHTML = `<a href="${randomVideo.link}" target="_blank">${randomVideo.text}</a>`; // Update the footer text with link
    idkElement.textContent = randomVideo.text2; // Set the text2 content into the element with id 'idk'
});