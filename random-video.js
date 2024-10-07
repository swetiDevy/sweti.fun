const videoSources = [
    {
        src: 'background/background-video1.mp4',
        text: 'Now playing: YOUNG MULTI - Power Up',
        link: 'https://www.youtube.com/watch?v=HGg9rTtJSWg'
    },
    {
        src: 'background/background-video2.mp4',
        text: 'Now playing: KOX KUMPLE - ANDRYCHOWSKI GANGSTER',
        link: 'https://www.youtube.com/watch?v=nW0lLR8B2r4&list=PL5H6_SWPbBWkwDsa81IkEV0qpURxKf-0u&index=13'
    },
    {
        src: 'background/background-video3.mp4',
        text: 'Now playing: KOX KUMPLE - MY TO KUMPLE',
        link: 'https://www.youtube.com/watch?v=DKdsrWRtfow&list=PL5H6_SWPbBWkwDsa81IkEV0qpURxKf-0u&index=9'
    },
    {
        src: 'background/background-video4.mp4',
        text: 'Now playing: Lil Nigma - Monochrom',
        link: 'https://www.youtube.com/watch?v=hRQqa8k9law&list=PL5H6_SWPbBWkwDsa81IkEV0qpURxKf-0u&index=27'
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

    const randomVideo = getRandomVideoSource();

    videoElement.src = randomVideo.src;
    footerElement.innerHTML = `<a href="${randomVideo.link}" target="_blank">${randomVideo.text}</a>`; // Update the footer text with link
});