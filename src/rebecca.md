# Debugging Data Loader

```js
const forecast = FileAttachment("./data/loadPlays.json").json();
```

```js
display(forecast);
```

```js
  function countByGenre(data) {
    const genreCounts = {};
    data.forEach(play => {
      const genre = play.genre || "Unknown";
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
    return Object.entries(genreCounts).map(([genre, count]) => ({ genre, count }));
  };

  function genrePlot(data) {
    return Plot.plot({
      title: "Number of Plays by Genre",
      width: 600,
      height: 400,
      x: { label: "Genre" },
      y: { label: "Count" },
      marks: [
        Plot.barY(countByGenre(data), { x: "genre", y: "count", fill: "steelblue" })
      ]
    });
  };
  ```

  ```js
  genrePlot(forecast)
  ```

