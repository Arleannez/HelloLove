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

// Handle the initial No button click
noBtn.addEventListener('click', () => {
    response.innerHTML = "Are you sure?"; // Change response message
    sadCat.style.display = 'block'; // Show the crying cat
    officialImage.style.display = 'none'; // Hide the official image if it's visible
    yesBtn.style.display = 'none'; // Hide the Yes button
    noBtn.style.display = 'none'; // Hide the No button
    areYouSureBtn.style.display = 'inline'; // Show the Are You Sure button
});

 // Set the volume to low (0.1 is low, 1 is max)
 const audioPlayer = document.getElementById('audioPlayer');
 audioPlayer.volume = 0.1; // Set volume to 10%