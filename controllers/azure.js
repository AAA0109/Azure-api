const arp = require("azure-retail-prices");

exports.getRetailPrices = async (req, res) => {
  const filter = req.body.filter || {};
  // without currencyCode option (It will return USD)
  try {
    let retailPrices = await arp.default(filter);
    console.log(retailPrices);
    res.send({ success: true, data: retailPrices });
  } catch (ex) {
    console.log('error', ex);
    res.send({ success: false, error: ex });
  }
  // let retailPrices = await arp.default({
  //   serviceName: "Virtual Machines",
  //   location: "US North Central",
  //   priceType: "Reservation",
  //   armSkuName: "Standard_E4_v3"
  // });
  // console.dir(retailPrices);

  // // with currencyCode option
  // retailPrices = await arp.default(
  //   {
  //     serviceName: "Virtual Machines",
  //     location: "EU West",
  //     priceType: "Reservation",
  //   },
  //   "JPY"
  // );
  // console.dir(retailPrices);
}

exports.getRetailPricesWithSku = async (req, res) => {
  const filter = req.body.filter || {};
  const skus = req.body.skus || [];
  // without currencyCode option (It will return USD)
  let ret = [];
  for (let i = 0; i < skus.length; i ++) {
    try {
      filter.armSkuName = skus[i];
      let retailPrices = await arp.default(filter);
      console.log(retailPrices);
      ret.push(...retailPrices);
    }
    catch (ex) {
      console.log('error', ex);
    }
    res.send({ success: true, data: ret });
  }
}