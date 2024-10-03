const rules = [
    { num: 3, output: "cat" },
    { num: 5, output: "kitty" },
    { num: 15, output: "catKitty" }
];

function catKitty(n) {
    function getOutput(num) {
        let output = "";
        for (const rule of rules) {
            if (num % rule.num === 0) {
                output += rule.output;
            }
        }
        return output || num.toString();
    }

    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(getOutput(i));
    }
    return result;
}

function addRule(num, output) {
    rules.push({ num, output });
    rules.sort((a, b) => b.num - a.num);
}

// Contoh penggunaan
console.log(catKitty(20).join(", "));

// Menambahkan aturan baru
addRule(13, "dog");
console.log(catKitty(20).join(", "));