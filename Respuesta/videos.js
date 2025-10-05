  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video1');
    document.getElementById('play-btn1').onclick = () => video.play();
    document.getElementById('repeat-btn1').onclick = () => {
      video.currentTime = 0;
      video.play();
    };
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video1');
    const playBtn = document.getElementById('play-btn1');
    const playIcon = playBtn.querySelector('i');

    playBtn.onclick = function() {
      if (video.paused) {
        video.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
      } else {
        video.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
      }
    };

    video.addEventListener('play', function() {
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    });

    video.addEventListener('pause', function() {
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
    });

    document.getElementById('repeat-btn1').onclick = function() {
      video.currentTime = 0;
      video.play();
    };
  });


  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video2');
    document.getElementById('play-btn2').onclick = () => video.play();
    document.getElementById('repeat-btn2').onclick = () => {
      video.currentTime = 0;
      video.play();
    };
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video2');
    const playBtn = document.getElementById('play-btn2');
    const playIcon = playBtn.querySelector('i');

    playBtn.onclick = function() {
      if (video.paused) {
        video.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
      } else {
        video.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
      }
    };

    video.addEventListener('play', function() {
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    });

    video.addEventListener('pause', function() {
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
    });

    document.getElementById('repeat-btn2').onclick = function() {
      video.currentTime = 0;
      video.play();
    };
  });

  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video3');
    const playBtn = document.getElementById('play-btn3');
    const playIcon = playBtn.querySelector('i');

    playBtn.onclick = function() {
      if (video.paused) {
        video.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
      } else {
        video.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
      }
    };

    video.addEventListener('play', function() {
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    });

    video.addEventListener('pause', function() {
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
    });

    document.getElementById('repeat-btn3').onclick = function() {
      video.currentTime = 0;
      video.play();
    };
  });