export default function initFetchBitcoin() {
  const urlBitcoin = 'https://blockchain.info/ticker'

  fetch(urlBitcoin)
    .then(response => response.json())
    .then(bitcoin => {
      const btcPreco = document.querySelector('.btc-preco')
      btcPreco.innerText = (10000 / bitcoin.BRL.sell).toFixed(4)
      console.log(bitcoin.BRL.sell)
    }).catch(erro => {
      console.log(Error(erro))
    })
}
