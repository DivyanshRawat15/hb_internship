// 1. Create a Node.js program that analyzes a large text file and finds the top 5 most frequently used words.

const fs = require('fs');
const inputFile = 'sample.txt'; // Ensure this file exists
const wordMap = new Map();
// Requirement: Use fs.createReadStream to handle large files [cite: 3]
const readStream = fs.createReadStream(inputFile, { encoding: 'utf8' });
readStream.on('data', (chunk) => {
    // Requirement: Case insensitive and ignore punctuation [cite: 4]
    const words = chunk
        .toLowerCase()
        .replace(/[.,!?]/g, '')
        .split(/\s+/);

    for (const word of words) {
        if (word) {
            wordMap.set(word, (wordMap.get(word) || 0) + 1);
        }
    }
});
readStream.on('end', () => {
    // Sort by frequency and get top 5 [cite: 8]
    const sortedWords = [...wordMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    console.log('Top 5 Most Frequent Words:');
    sortedWords.forEach(([word, count]) => {
        console.log(`${word}: ${count}`);
    });
});
readStream.on('error', (err) => {
    console.error('Error reading file:', err.message);
});