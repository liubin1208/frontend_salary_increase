function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export async function getVideos(page, size) {
  await delay(500);
  return Array.from({ length: size }, (_, i) => ({
    id: (page - 1) * size + i + 1,
    cover: `https://picsum.photos/seed/${(page - 1) * size + i + 1}/200/300`,
  }));
}
