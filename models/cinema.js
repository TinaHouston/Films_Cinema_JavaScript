const Cinema = function (films) {
  this.films = films;
  this.titles = [];
};



Cinema.prototype.filmTitles = function(){
  const results = this.films.map((film) => {
    return film.title;
  })
  return results;
}

module.exports = Cinema;