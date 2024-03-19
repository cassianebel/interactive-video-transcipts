const player = videojs('my-video');
const spans = document.querySelectorAll('span');

spans.forEach(span => {
   span.addEventListener('click', function () {
      player.currentTime(this.dataset.start);
   });
});

// Get the current time of the video player
player.on('timeupdate', function () {
   let currentTime = player.currentTime();
   //console.log("Current Time of the Video Player: ", currentTime)
    spans.forEach(span => {
        if (currentTime >= span.dataset.start && currentTime <= span.dataset.end) {
          span.classList.add('highlight');
          span.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        } else {
          span.classList.remove('highlight');
        }
    });
});