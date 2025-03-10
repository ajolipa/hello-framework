import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/plays.json');

export async function load() {
  try {
    // console.log("🟢 Running loadPlays.js...");

    // Read the JSON file
    const data = await fs.readFile(filePath, 'utf-8');
    // console.log("📂 Successfully read file.");

    const plays = JSON.parse(data).plays;
    // console.log("📊 Parsed Play Data (First 5 Records):", plays.slice(0, 5)); // Show only first 5 plays

    // Extract title, author, and genre
    const formattedPlays = plays.map(play => ({
      title: play.title,
      author: play.author,
      genre: play.genre
    }));

    // console.log("✅ Formatted Plays (First 5 Records):", formattedPlays.slice(0, 5));
    return formattedPlays;
  } catch (error) {
    console.error("❌ Error loading plays:", error);
    return [];
  }
}

const plays = await load();

// Run the function for manual testing
process.stdout.write(JSON.stringify(plays));
