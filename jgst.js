/**
 * jgst.js
 * Modul pemetaan Aksara Jawa (Unicode A980 - A9DF) ke sistem Latin JGST.
 * Berdasarkan dokumen "The Javanese General System of Transliteration (JGST)".
 */

const jgstMap = {
  '\uA980': 'm',    // Candrabindu
  '\uA981': 'ŋ',    // Anusvara
  '\uA982': 'r',    // Repha
  '\uA983': 'ḥ',    // Visarga
  '\uA984': 'a',    // a
  '\uA985': 'i',    // i kawi
  '\uA986': 'i',    // i
  '\uA987': 'ī',    // ii
  '\uA988': 'u',    // u
  '\uA989': 'rě',   // vocalic r
  '\uA98A': 'lě',   // vocalic l
  '\uA98B': 'lö',   // vocalic ll
  '\uA98C': 'é',    // e
  '\uA98D': 'ay',   // ai
  '\uA98E': 'o',    // o
  '\uA98F': 'ka',   // ka
  '\uA990': 'qa',   // ka sasak qa
  '\uA991': 'kha',  // ka murda kha
  '\uA992': 'ga',   // ga
  '\uA993': 'gha',  // ga murda gha
  '\uA994': 'nga',  // nga
  '\uA995': 'ca',   // ca
  '\uA996': 'cha',  // ca murda cha
  '\uA997': 'ja',   // ja
  '\uA998': 'jña',  // nya murda jnya
  '\uA999': 'jha',  // ja mahaprana jha
  '\uA99A': 'ña',   // nya
  '\uA99B': 'ṭa',   // tta
  '\uA99C': 'ṭha',  // tta mahaprana ttha
  '\uA99D': 'ḍa',   // dda
  '\uA99E': 'ḍha',  // dda mahaprana ddha
  '\uA99F': 'ṇa',   // na murda nna
  '\uA9A0': 'ta',   // ta
  '\uA9A1': 'tha',  // ta murda tha
  '\uA9A2': 'da',   // da
  '\uA9A3': 'dha',  // da mahaprana dha
  '\uA9A4': 'na',   // na
  '\uA9A5': 'pa',   // pa
  '\uA9A6': 'pha',  // pa murda pha
  '\uA9A7': 'ba',   // ba
  '\uA9A8': 'bha',  // ba murda bha
  '\uA9A9': 'ma',   // ma
  '\uA9AA': 'ya',   // ya
  '\uA9AB': 'ra',   // ra
  '\uA9AC': 'ra',   // ra agung
  '\uA9AD': 'la',   // la
  '\uA9AE': 'wa',   // wa
  '\uA9AF': 'śa',   // sa murda sha
  '\uA9B0': 'ṣa',   // sa mahaprana ssa
  '\uA9B1': 'sa',   // sa
  '\uA9B2': 'ha',   // ha
  '\uA9B3': '',     // cecak telu / nukta (biasanya modifier, pelatinan kosong)
  '\uA9B4': 'ā',    // tarung
  '\uA9B5': 'o',    // tolong varian glyph
  '\uA9B6': 'i',    // wulu
  '\uA9B7': 'ī',    // wulu melik
  '\uA9B8': 'u',    // suku
  '\uA9B9': 'ū',    // suku mendut
  '\uA9BA': 'é',    // taling
  '\uA9BB': 'ay',   // dirga mure
  '\uA9BC': 'ě',    // pepet
  '\uA9BD': 'rě',   // keret
  '\uA9BE': 'y',    // pengkal (medial ya)
  '\uA9BF': 'ŕ',    // cakra (medial ra)
  '\uA9C0': '/',    // pangkon / virama
  
  // Angka Jawa
  '\uA9D0': '0',
  '\uA9D1': '1',
  '\uA9D2': '2',
  '\uA9D3': '3',
  '\uA9D4': '4',
  '\uA9D5': '5',
  '\uA9D6': '6',
  '\uA9D7': '7',
  '\uA9D8': '8',
  '\uA9D9': '9'
};

/**
 * Mencocokkan aksara Jawa dan menuliskan Latin JGST di belakangnya.
 * Contoh Input: "ꦏꦮꦶ"
 * Contoh Output: "ꦏ[ka]ꦮ[wa]ꦶ[i]"
 * 
 * @param {string} text - Teks beraksara Jawa murni
 * @returns {string} Teks aksara Jawa dengan pelatinan JGST yang mengikutinya
 */
function appendJGST(text) {
  let result = "";
  for (let char of text) {
    if (jgstMap[char] !== undefined) {
      // Menyisipkan transliterasi dalam kurung siku di belakang aksara
      result += char + "[" + jgstMap[char] + "]";
    } else {
      // Mengabaikan karakter yang bukan aksara Jawa (spasi, tanda baca Latin, dll)
      result += char; 
    }
  }
  return result;
}

/**
 * Mengganti keseluruhan aksara Jawa menjadi teks Latin JGST murni.
 * Catatan: Pemetaan ini bersifat karakter-per-karakter dasar. 
 * Untuk akurasi tata bahasa penuh (sandhi, penghilangan vokal), dibutuhkan rule parser tambahan.
 * 
 * @param {string} text - Teks beraksara Jawa murni
 * @returns {string} Teks transliterasi Latin JGST
 */
function transliterateToJGST(text) {
  let result = "";
  for (let char of text) {
    if (jgstMap[char] !== undefined) {
      result += jgstMap[char];
    } else {
      result += char;
    }
  }
  return result;
}

// Mengekspor fungsi dan mapping agar bisa di-import oleh aplikasi lain
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { jgstMap, appendJGST, transliterateToJGST };
} else {
  // Untuk penggunaan langsung di browser (ES6)
  window.jgstMap = jgstMap;
  window.appendJGST = appendJGST;
  window.transliterateToJGST = transliterateToJGST;
}
