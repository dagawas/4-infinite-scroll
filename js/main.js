console.log("warsztat - infinite scroll");

let endOfPage = 0;

const getData = () => {
  fetch(`https://akademia108.pl/api/ajax/get-users.php`)
    .then((res) => res.json())
    .then((data) => {


      let body = document.body;

      let hr = document.createElement('hr');
      body.appendChild(hr);

      for (let user of data) {
        let pId = document.createElement('p');
        let pName = document.createElement('p');
        let pWebsite = document.createElement('p');

        pId.innerText = `User ID: ${user.id}`;
        pName.innerText = `User Name: ${user.name}`;
        pWebsite.innerHTML = `User URL: ${user.pWebsite}<br />--------`;
      }

    

      body.appendChild(pId);
      body.appendChild(pName);
      body.appendChild(pWebsite);

      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const scrollToEndOfPage = () => {
  let d = document.documentElement;

  // height of an element's content, including
  // not visible on the screen
  let scrollHeight = d.scrollHeight;

  // no. of pixels that an element's content is scrolled vertically;
  let scrollTop = d.scrollTop;

  // inner height of an element in pixels;
  let clientHeight = d.clientHeight;

  // aby zabezpieczyc przed wyswietlaniem dziwnych ulamkow przy podawaniu pixeli - math.ceil
  let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

  console.log(`scrollHeight: ${scrollHeight}`);
  console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
  console.log(`scrollTop: ${scrollTop}`);
  console.log(`clientHeight: ${clientHeight}`);
  console.log(`========`);

  if (sumScrollTopClientHeight >= scrollHeight) {
    endOfPage += 1;
    console.log(`scrolled to the end of page: ${endOfPage}`);
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
