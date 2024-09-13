const { fetchAllArtworks } = require('./artworkService');
const { sortArtworksByDateEnd, transformArtworks } = require('./sortAndTransform');
const { writeToExcel } = require('./writeExcel');

const fetchDataAndWriteToExcel = async () => {
  const allArtworks = await fetchAllArtworks();
  const sortedArtworks = sortArtworksByDateEnd(allArtworks);
  const transformedArtworks = transformArtworks(sortedArtworks);
  writeToExcel(transformedArtworks);
};

fetchDataAndWriteToExcel();
