var bookmarkNameInput=document.getElementById('bookmarkName');
var bookmarkURLInput=document.getElementById('bookmarkURL');
let bookmarkList = [];

  
function addBookmark() {
    let bookmark = {
      siteName: bookmarkNameInput.value,
      siteURL: bookmarkURLInput.value,
    };
    localStorage.setItem("bookmarks",JSON.s)

    
    bookmarkList.push(bookmark);
    console.log(bookmarkList)
    clearform()
    displayBookmarks()
    visitWebsite(i)
    deleteBookmark(i)
  
}

function clearform() {
    bookmarkNameInput.value=null;
    bookmarkURLInput.value=null;
    
}

function displayBookmarks() {
    let tableContent = ``;
    for (let i = 0; i < bookmarkList.length; i++) {
      tableContent += `
      <tr>
        <td>${i + 1}</td>
        <td>${bookmarkList[i].siteName}</td>
        <td><button class="btn btn-outline-main" onclick="visitWebsite(${i});"><i class="fa-solid fa-eye"></i> Visit</button></td>
        <td><button class="btn btn-outline-main" onclick="deleteBookmark(${i});"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
      </tr>
          `;
    }
  
    document.getElementById("bookmarkContent").innerHTML = tableContent;
    
}

function visitWebsite(i) {
    var httpRegEx = /^https?:\/\//;
    if (httpRegEx.test(bookmarkList[i].siteURL)) {
      window.open(bookmarkList[i].siteURL);
    } else {
      window.open(`https://${bookmarkList[i].siteURL}`);
    }
  }

  function deleteBookmark(i) {
    bookmarkList.splice(i, 1);
    displayBookmarks(bookmarkList);
  }
  