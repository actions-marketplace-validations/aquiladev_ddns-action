const updater = require('./updater');

updater.update(
  process.env.DEV_PKEY,
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
  'ddns-action.eth',
  'QmQYE8p9oRPs9nzS1tsrzNsZWmrkVmRqKvMqEXpx2HQgdp',
  true
)
  .then(x => {
    console.log('>>>', x);
    process.exit(0);
  })
  .catch(console.error);