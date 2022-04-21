import Web3 from 'web3'

export const web3 = new Web3(
    new Web3.providers.WebsocketProvider(
        'wss://speedy-nodes-nyc.moralis.io/9350000a43e8c70ad1fe86db/eth/mainnet/ws',
        { timeout: 10000 }
    )
)