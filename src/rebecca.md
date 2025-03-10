# Debugging Data Loader

```js
const plays = FileAttachment("./data/loadPlays.json").json();
```

```js
view(Inputs.table(plays));
```

```js
  function countByGenre(data, cutoff = 10) {
    const genreCounts = {};
    data.forEach(play => {
      const genre = play.genre || "Unknown";
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
    return Object.entries(genreCounts).map(([genre, count]) => ({ genre, count })).filter((genre) => (genre.count >= cutoff));
  };

  function genrePlot(data, cutoff = 10) {
    return Plot.plot({
      title: "Number of Plays by Genre",
      width: 600,
      height: 400,
      x: { label: "Genre" },
      y: { label: "Count" },
      marks: [
        Plot.barY(countByGenre(data, cutoff), { x: "genre", y: "count", fill: "steelblue", tip: true, sort: {x: '-y'} })
      ]
    });
  };
  ```

  ```js
  const cutoff = 3;
  ```

  The following graph shows the number of plays by genre for all genres that applied to at least ${cutoff} plays in the dataset.

  ```js
  genrePlot(plays, cutoff)
  ```

