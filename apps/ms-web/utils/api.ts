export const transformPrintfulPostersResponse = (data: [any]) => {
  let transformedData = [];
  if (data) {
    data.forEach((poster) => {
      transformedData.push({
        id: poster.id,
        order: 1,
        title: 'God is a system designer',
        printUrl: 'https://#',
        instagramUrl: 'https://instagram.com/mystery.skools',
        src: poster.thumbnail_url,
        visible: true,
        printable: true,
        downloadable: true,
        dateCreated: Date.now(),
        lastUpdate: Date.now(),
      });
    });
  }
  return transformedData;
};
