var database =
  [
    { "name": "Alice", "seatNumber": 101 },
    { "name": "Bob", "seatNumber": 102 },
    { "name": "Charlie", "seatNumber": 103 },
    { "name": "Capt. PETER OLORUNMAYE (Rtd)", "seatNumber": 4 },
    { "name": "Mrs BANKE OLORUNMAYE", "seatNumber": 19 },
    { "name": "Pst. MOSES ENABULELE", "seatNumber": 8 },
    { "name": "Pst ELIZABETH ENABULELE", "seatNumber": 17 },
    { "name": "Mrs OZIGI", "seatNumber": 13 },
    { "name": "Dr. (Mrs.) ELIZABETH ELHASSAN", "seatNumber": 13 },
    { "name": "Mr FOLORUNSHO", "seatNumber": 5 },
    { "name": "Mrs FOLORUNSHO", "seatNumber": 17 },
    { "name": "Mrs AGNES EGURE", "seatNumber": 20 },
    { "name": "MAIMUNATU DAMISA", "seatNumber": 6 },
    { "name": "SUNDAY DAMISA", "seatNumber": 17 },
    { "name": "KABIRU DAMISA", "seatNumber": 1 },
    { "name": "GANIU DAMISA", "seatNumber": 10 },
    { "name": "JANET DAMISA", "seatNumber": 3 },
    { "name": "DANIEL DAMISA", "seatNumber": 18 },
    { "name": "ABDUL DAMISA", "seatNumber": 12 },
    { "name": "ILLIASU MUBARAK", "seatNumber": 2 },
    { "name": "SAFIYA ANTHONY", "seatNumber": 5 },
    { "name": "RUFAI OZIGI", "seatNumber": 10 },
    { "name": "JOHN OZIGI", "seatNumber": 2 },
    { "name": "NDUBISI CHIJIOKE", "seatNumber": 10 },
    { "name": "Mr FEMI OLORUNMAYE", "seatNumber": 1 },
    { "name": "SEUN MAYE", "seatNumber": 16 },
    { "name": "BISOLA", "seatNumber": 2 },
    { "name": "Mr. ISRAEL ONOJA", "seatNumber": 20 },
    { "name": "JACKSON", "seatNumber": 20 },
    { "name": "Barr. KABIRU", "seatNumber": 11 },
    { "name": "ILERIOLUWA OLORUNMAYE", "seatNumber": 8 },
    { "name": "OREOLUWA OLORUNMAYE (CHIEF BRIDESMAID)", "seatNumber": 9 },
    { "name": "WINNER MATTHEW (BRIDE'S MAID)", "seatNumber": 5 },
    { "name": "AUDU FAITH (BRIDE'S MAID/ PHOTOGRAPHER)", "seatNumber": 16 },
    { "name": "SALAMATU YAHAYA (BRIDE'S MAID)", "seatNumber": 16 },
    { "name": "FRANCISCA OPARA (BRIDE'S MAID/ MAKEUP ARTIST)", "seatNumber": 18 },
    { "name": "YAKUBU PRECIOUS (BRIDE'S MAID)", "seatNumber": 2 },
    { "name": "SUZIE NAMAS (BRIDE'S MAID)", "seatNumber": 9 },
    { "name": "BAKO FATIMA (BRIDE'S MAID)", "seatNumber": 14 },
    { "name": "RHODA AREH (BRIDE'S MAID)", "seatNumber": 12 },
    { "name": "REJOICE EDOM (BRIDE'S MAID)", "seatNumber": 20 },
    { "name": "FUNMI OYENIYI (BRIDE'S MAID)", "seatNumber": 17 },
    { "name": "CHRISTIANA FOLORUNSHO", "seatNumber": 14 },
    { "name": "DEENY", "seatNumber": 1 },
    { "name": "SOFIA", "seatNumber": 14 },
    { "name": "Mr GOKE", "seatNumber": 5 },
    { "name": "Mr GBEMIGA", "seatNumber": 13 },
    { "name": "Mrs ELIZABETH", "seatNumber": 12 },
    { "name": "Mr GBENGA ILORI", "seatNumber": 4 },
    { "name": "Mrs GRACE ILLORI", "seatNumber": 6 },
    { "name": "Mr SHERIFF", "seatNumber": 4 },
    { "name": "Mrs SHERIFF", "seatNumber": 7 },
    { "name": "Mrs CHRISTIAN", "seatNumber": 8 },
    { "name": "Mr BLINKS OCHECHE", "seatNumber": 1 },
    { "name": "Mr GODWIN OCHECHE", "seatNumber": 19 },
    { "name": "TAKU AZIMAZI", "seatNumber": 2 },
    { "name": "VICTOR EDOHSON", "seatNumber": 19 },
    { "name": "JUNIOR", "seatNumber": 19 },
    { "name": "ISAAC", "seatNumber": 15 },
    { "name": "Mr ISHAKU UMAR", "seatNumber": 7 },
    { "name": "AWWAL SALISU", "seatNumber": 1 },
    { "name": "Sis CHIDIMMA", "seatNumber": 5 },
    { "name": "Bro OSCAR", "seatNumber": 9 },
    { "name": "Sis PERPETUAL", "seatNumber": 11 },
    { "name": "Dr TOBA OLORUNFEMI", "seatNumber": 1 },
    { "name": "JONATHAN OJEKA", "seatNumber": 4 },
    { "name": "FAITH EGURE", "seatNumber": 5 },
    { "name": "BLESSING EGURE", "seatNumber": 16 },
    { "name": "RUTH BELLO", "seatNumber": 9 },
    { "name": "YETUNDE BADAMOSI", "seatNumber": 14 },
    { "name": "Mrs DEBORAH AYINLA", "seatNumber": 13 },
    { "name": "DAMILOLA INAWOLE", "seatNumber": 18 },
    { "name": "TOSIN MICHEAL", "seatNumber": 9 }
  ]
function ScannerInit() {

  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }

  function startScan() {
    alert("hello world")
  }

  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 300, height: 300 } },
    /* verbose= */ false);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
}



function EngineInit() {
  document.getElementById('searchBox').addEventListener('input', function () {
    var searchValue = this.value;
    updateTable(searchValue);
  });

  function updateTable(name) {
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    var hasResults = false;
    for (var key in list) {
      if (key.toLowerCase().includes(name.toLowerCase())) {
        var row = '<tr><td>' + key + '</td><td>' + list[key] + '</td></tr>';
        tableBody.innerHTML += row;
        hasResults = true;
      }
    }

    var resultDiv = document.getElementById('result');
    if (hasResults && name.trim() !== '') {
      resultDiv.style.display = 'block';
    } else {
      resultDiv.style.display = 'none';
    }
  }

}

EngineInit()
ScannerInit()