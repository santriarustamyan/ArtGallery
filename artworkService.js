

const fetchAllArtworks = async () => {

  const fetch = (await import('node-fetch')).default;
  let allArtworks = [];
  let from = 0;

  while (from < 5) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=oil,painting,oil%20painting&fields=id,title,artist_display,date_display,main_reference_number,api_link,date_start,date_end&from=${from}&size=100`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sort: [{ date_start: { order: "desc" } }],
          from: from * 100,
          size: 100
        })
      });

      const data = await response.json();
      allArtworks = allArtworks.concat(data.data);
      from++;
    } catch (error) {
      console.error('Error fetching artworks on page', from, ':', error);
      break;
    }
  }

  return allArtworks;
};

module.exports = { fetchAllArtworks };
