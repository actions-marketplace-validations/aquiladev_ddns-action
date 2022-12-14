# ddns-action
DDNS(Distributed Domain Name System) update action. Currently it supports ENS, CNS and UNS.

**WARNING**: The action supports only L1(Ethereum) UNS(including CNS) domains. More information about [L1/L2](https://docs.unstoppabledomains.com/polygon-l2-network/l1-ethereum-vs-l2-polygon-comparison)

<p align="center">
  <img width="400" src="assets/ddns-action.png" alt="ddns action">
</p>

## Inputs
Parameter     |Required |Description
---           |---      |---
`mnemonic`    |Yes      |Mnemonic phrase for wallet recovery. Plain PrivateKey can be used as well.
`rpc`         |Yes      |Url of RPC APIs.
`name`        |Yes      |Distributed domain name. Currently it supports ENS(.eth), CNS(.crypto), UNS(.coin, .wallet, .bitcoin, .x, .888, .nft, .dao, .blockchain) names. (eg `ddns-action.eth`, `ddns-action.crypto`)
`contentHash` |Yes      |Hash of content..
`contentType` |No       |Type of content. Supported types [`ipfs-ns`, `swarm-ns`]. Default `ipfs-ns`
`dryRun`      |No       |Execution emulation without setting new content hash. Default `false`
`verbose`     |No       |Level of verbosity [`false` - quiet, `true` - verbose]. Default `false`

## Content type support
Provider  |ipfs-ns  |swarm-ns
---       |---      |---
ENS       |Yes      |Yes
CNS       |Yes      |No
UNS       |Yes      |No

## Network support
Provider  |Network
---       |---
ENS       |Ethereum Mainnet, Ropsten, Rinkeby, Goerli
CNS       |Ethereum Mainnet, Rinkeby, Goerli, Polygon Mainnet, Mumbai
UNS       |Ethereum Mainnet, Rinkeby, Goerli, Polygon Mainnet, Mumbai

## Example usage

```
uses: aquiladev/ddns-action@v1
with:
  mnemonic: ${{ secrets.MNEMONIC }}
  rpc: ${{ secrets.RPC }}
  name: ddns-action.eth
  contentHash: ${{ steps.upload.outputs.hash }}
```

## [>> Documentation](https://github.com/aquiladev/ddns-action/wiki)
Take a look [DApps Delivery Guide](https://dapps-delivery-guide.readthedocs.io/)