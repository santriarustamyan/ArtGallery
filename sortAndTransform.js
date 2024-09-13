const sortArtworksByDateEnd = (artworks) => {
    return artworks.sort((a, b) => {
      const yearA = a.date_end || 9999;
      const yearB = b.date_end || 9999;
      return yearA - yearB;
    });
  };
  
  const transformArtworks = (artworks) => {
    return artworks.map(artwork => ({
      "порядковый номер": artwork.main_reference_number,
      "id картины": artwork.id,
      "название картины": artwork.title,
      "годы вывешивание": artwork.date_display,
      "автор картины": artwork.artist_display,
      "ссылка": artwork.api_link
    }));
  };
  
  module.exports = { sortArtworksByDateEnd, transformArtworks };
  