const bgMusic = document.getElementById('bgMusic');
const webVideo = document.getElementById('webVideo');

// 视频播放时，暂停背景音乐
webVideo.addEventListener('play', () => {
  bgMusic.pause();
});

// 视频暂停/结束时，恢复背景音乐（可选）
webVideo.addEventListener('pause', () => {
  bgMusic.play();
});
webVideo.addEventListener('ended', () => {
  bgMusic.play();
});