export function captureFrame(vdoFile, time = 0) {
  return new Promise((resolve) => {
    const vdo = document.createElement('video');
    vdo.currentTime = time;
    vdo.muted = true;
    vdo.autoplay = true;
    vdo.src = URL.createObjectURL(vdoFile);
    vdo.oncanplay = () => {
      const cvs = document.createElement('canvas');
      cvs.width = vdo.videoWidth;
      cvs.height = vdo.videoHeight;
      const ctx = cvs.getContext('2d');
      ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height);
      cvs.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        resolve({
          blob,
          url,
        });
      });
    };
  });
}
