function printDate() {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    document.write(cMonth + "/" + cDay + "/" + cYear);
}


window.userAddress = "0xd8F89eD994d61bD8bB602CBe76c48A1092269689";
window.onload = getOpenseaItems;
  
async function getOpenseaItems() {
  if (!window.userAddress) { return }

  let currentDate = new Date();
  let cDay = currentDate.getDate()
  let cMonth = currentDate.getMonth() + 1
  let cYear = currentDate.getFullYear()






  const osContainer = document.getElementById('openseaItems')

  const items = await fetch(`https://api.opensea.io/api/v1/assets?owner=${window.userAddress}&order_direction=desc&offset=0&limit=50`)
    .then((res) => res.json())
    .then((res) => {
      return res.assets
    })
    .catch((e) => {
      console.error(e)
      console.error('Could not talk to OpenSea')
      return null
    })

  if (items.length === 0) { return }

  items.forEach((nft) => {
    const { name, image_url, description, permalink } = nft

    const newElement = document.createElement('div')
    newElement.innerHTML = `
      <!-- Opensea listing item-->
      <a href='${permalink}' target="_blank">
        <div class='flex flex-col'>
          <img
            src='${image_url}'
            class='img' alt=${name} style="display:block;
margin-left: auto;
margin-right: auto;
width:80%;"/>
          <div class='flex-col w-full space-y-1'>
            <h3 class='text-gray-800 text-lg'>${name}</h3>
            <h5 class='text-gray-500 text-xs word-wrap'>${description ?? ''}</h5>
          </div>
        </div>
      </a>
      <!-- End Opensea listing item-->
    `

    osContainer.appendChild(newElement)
  })
}