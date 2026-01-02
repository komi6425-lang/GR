
const feed = document.getElementById('feed');
const citySelect = document.getElementById('citySelect');

function loadVideos() {
  feed.innerHTML = '';
  db.collection('videos')
    .where('city', '==', citySelect.value)
    .orderBy('created', 'desc')
    .limit(10)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        const v = doc.data();
        const video = document.createElement('video');
        video.src = v.url;
        video.controls = true;
        feed.appendChild(video);
      });
    });
}

citySelect.onchange = loadVideos;
loadVideos();
