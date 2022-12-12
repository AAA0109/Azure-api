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