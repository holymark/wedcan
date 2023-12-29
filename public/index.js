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
    { "name": "TOSIN MICHEAL", "seatNumber": 9 },
    { "name": "'Twas brillig", "seatNumber": 119 }
  ]

function findSeatNumberByName(nameToSearch) {
  const matchingEntry = database.find(entry => Object.values(entry).includes(nameToSearch));
  return matchingEntry ? matchingEntry.seatNumber : undefined;
}

function onScanSuccess(decodedText) {
  const seatNumber = findSeatNumberByName(decodedText);

  Swal.fire({
    title: "AUTHORIZED",
    html: `<p>Name: ${decodedText}<br/>Seat Number: ${seatNumber}</p><button>Check In?</button>`,
    icon: "success",
    confirmButtonText: "Save",
  }).then((result) => {
    if (result.isConfirmed) {

      try {
        saveScanned(decodedText, seatNumber)
        Swal.fire("Saved!", "", "success");
      } catch (e) {
        Swal.fire("Unable to save!", "", "error");

      }
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });

  console.log(`Code matched = ${decodedText},\n seat Number is: ${seatNumber}`);
}

function onScanFailure(error) {
  console.warn(`Code scan error = ${error}`);
}

function startScan() {
  alert("hello world");
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: { width: 300, height: 300 } },
  false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);


async function saveScanned(name, seatNumber) {
  await fetch("https://3000-holymark-wedcan-n1twsqj9jr9.ws-eu107.gitpod.io/api/data",
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: { name, seatNumber, scanned: true }
    }).then(response => response.json())
    .then(data => {
      console.log('Data added successfully:', data);
    })
    .catch(error => console.error('Error adding data:', error));

}
async function getScanned(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Re-throw the error to handle it further if needed
  }
}

function formatMongoDBTimestamp(timestamp, includeDate = false) {
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  if (includeDate) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } else {
    return `${hours}:${minutes}:${seconds}`;
  }
}

function removeScanned(button) {
  // Get the parent <li> element
  const listItem = button.parentNode;

  // Remove the <li> element
  listItem.parentNode.removeChild(listItem);
}

getScanned("https://3000-holymark-wedcan-n1twsqj9jr9.ws-eu107.gitpod.io/api/data")
  .then(d => {
    var html = ``
    html += `<ol class="list-decimal">`;
    d.forEach(d => {
      if (d && d.scanned == true) {
        html += `<li class="mb-4 border-l-4 border-blue-500 pl-4 py-2 pr-[134px] bg-blue-100 rounded-md relative">${d.name} (${d.seatNumber}), ${formatMongoDBTimestamp(d.updatedAt)}
        <button class="absolute top-0 right-0 p-2 text-white bg-red-500 hover:bg-red-700" onclick="removeScanned(this)">Remove</button>
      </li>`
        html += `<ol>`;
      }
    })
    document.getElementById("list-ps-in").innerHTML = html
  }
  ).catch(e => {
    console.log(e)
  })