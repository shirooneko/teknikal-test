## catKitty

soal 1 `catKitty` menghasilkan array string berdasarkan aturan yang diberikan.
Setiap angka dari 1 hingga `n` diperiksa sesuai dengan aturan, dan output yang sesuai dihasilkan.

### Penggunaan

```javascript
node catKitty.js
```

```javascript
console.log(catKitty(20).join(", "));
```

### Menambahkan Aturan

Anda dapat menambahkan aturan baru menggunakan fungsi addrule:

```javascript
addRule(13, "dog");
console.log(catKitty(20).join(", "));
```

Ini akan menambahkan aturan baru di mana angka yang dapat dibagi dengan 13 akan menghasilkan "dog".


## Palindrome

Soal 2 `Palindrome` memeriksa apakah input yang diberikan adalah palindrom.

### Penggunaan

```javascript
node palindrome.js
```

```javascript
console.log(isPalindrome(121)); // true
```

Ini akan memeriksa apakah angka 121 adalah palindrom dan mengembalikan `true`.
