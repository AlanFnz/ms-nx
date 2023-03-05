import { posters } from "../../data/posters";

export const transformPrintfulPostersResponse = (data: [any]) => {
  let transformedData = [];
  if (data) {
    data.forEach((poster) => {
      const posterData = getPosterData(poster.id);
      transformedData.push({
        id: poster.id,
        order: posterData.order,
        title: poster.name,
        printUrl: 'https://#',
        instagramUrl: 'https://instagram.com/mystery.skools',
        src: posterData.src,
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

/**
 *
 * @param id
 * @returns the poster itself
 * @description Im doing this until I figure out how to change the url provided by Printful
 */
const getPosterData = (id: number) => posters.find(poster => poster.id === id);
