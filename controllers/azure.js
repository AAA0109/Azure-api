const arp = require("azure-retail-prices");

exports.getRetailPrices = async (req, res) => {
  const filter = req.filter || {};
  // without currencyCode option (It will return USD)
  let retailPrices = await arp.default(req.filter);
  console.log(retailPrices);
  res.send({ data: retailPrices });
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