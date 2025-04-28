const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const sadCat = document.getElementById('sadCat'); // Get the sad cat element
const officialImage = document.getElementById('officialImage'); // Get the official image element
const areYouSureBtn = document.getElementById('areYouSureBtn'); // Get the Are You Sure button

// Handle the initial Yes button click
yesBtn.addEventListener('click', () => {
    officialImage.style.display = 'block'; // Show the official image
    sadCat.style.display = 'none'; // Hide the sad cat if it's visible
    yesBtn.style.display = 'none'; // Hide the Yes button
    noBtn.style.display = 'none'; // Hide the No button
    response.textContent = "WOAH! YIPPEE O__o"; // Response for Yes
});
noBtn.addEventListener('click', () => {
    response.innerHTML = "😭 You broke my heart... <br> I'll just be crying alone forever... 🎻💔";
    sadCat.style.display = 'block';
    officialImage.style.display = 'none';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    areYouSureBtn.style.display = 'none';
});

 // Set the volume to low (0.1 is low, 1 is max)
 const audioPlayer = document.getElementById('audioPlayer');
 audioPlayer.volume = 0.1; // Set volume to 10%