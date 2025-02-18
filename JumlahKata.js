function countWords(sentence) {
    const words = sentence.split(/\s+/);
    let count = 0;
    for(let word of words){
            if(!word.match(/[^a-zA-Z0-9\s](?=\S)/g)){
                count++;
            }
    }
    return count;
}

const testCases = [
    { input: "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.", expected: 5 },
    { input: "Berapa u(mur minimal[ untuk !mengurus ktp?", expected: 3 },
    { input: "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.", expected: 4},
    { input: "Kelinci Tertidur di poho*n", expected: 3 }
];

testCases.forEach(({ input, expected }, index) => {
    const result = countWords(input);
    console.log(`Test Case ${index + 1}: ${result} (Expected: ${expected})`);
});
