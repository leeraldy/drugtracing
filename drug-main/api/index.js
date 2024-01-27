const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
// const Drugs = require('./drugs');

app.use(cors());

// app.get('/', async (req, res) => {
//   const { q } = req.query;
//   console.log('Here is the query: ....' + q);
//   let endpoints = [
//     `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}`,
//     `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}`,
//     `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}`,
//     `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}`,
//     // 'https://api.publicapis.org/entries',
//     // 'https://api.publicapis.org/entries',
//     // 'https://api.publicapis.org/entries',
//     // 'https://api.publicapis.org/entries',
//     // 'https://api.publicapis.org/entries',
//     // 'https://api.publicapis.org/entries',
//     // 'https://api.publicapis.org/entries',
//   ];

//   const allData = await axios.all(
//     endpoints.map((endpoint) => axios.get(endpoint))
//   );

//   console.log('This is 1st');
//   console.log(allData[0].data);
//   console.log('This is 2nd');
//   console.log(allData[1].data);
//   console.log('This is 3rd');
//   console.log(allData[2].data);
//   console.log('This is 4th');
//   console.log(allData[3].data);
//   const data = [];
//   data.push(allData[0].data);
//   data.push(allData[1].data);
//   data.push(allData[2].data);
//   data.push(allData[3].data);
//   // return res.send(allData[3].data);
//   return res.send(data);
// });
app.post('/', async (req, res) => {
  const { q } = req.query;
  console.log('Here is the query: ....' + q);
  let endpoints = [
    `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}&limit=1`,
    // `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}&limit=1`,
    // `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}&limit=1`,
    // `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}&limit=1`,
  ];

  const allData = await axios.all(
    endpoints.map((endpoint) => axios.get(endpoint))
  );

  // console.log('This is 1st');
  // console.log(allData[0].data);
  // console.log('This is 2nd');
  // console.log(allData[1].data);
  // console.log('This is 3rd');
  // console.log(allData[2].data);
  // console.log('This is 4th');
  // console.log(allData[3].data);
  const data = [];
  let productNdc = '';
  let productId = '';
  // data.push({
  //   generic_name: allData[0].data['results'][0]['generic_name'],
  //   product_ndc: allData[0].data['results'][0]['product_ndc'],
  //   id: allData[0].data['results'][0]['product_id'],
  //   labeler_name: allData[1].data['results'][0]['labeler_name'],
  //   product_type: allData[2].data['results'][0]['product_type'],
  //   active_ingredients: allData[3].data['results'][0]['active_ingredients'],
  // });
  productNdc = allData[0].data['results'][0]['product_ndc'];
  productId = allData[0].data['results'][0]['spl_id'];
  console.log('This is the query for productNdc' + productNdc);
  console.log('This is the query for productId ......' + productId);
  // data.push({ labeler_name: allData[1].data['results'][0]['labeler_name'] });
  // data.push({ product_type: allData[2].data['results'][0]['product_type'] });
  // data.push({
  //   active_ingredients: allData[3].data['results'][0]['active_ingredients'],
  // });
  // return res.send(allData[3].data);
  // return res.send(data);
  console.log('==============DATA==================');
  // console.log(data);

  let endpoints2 = [
    // `https://rxnav.nlm.nih.gov/REST/relatedndc.json?relation=product&ndc=${productNdc}`,
    `https://api.fda.gov/drug/label.json?search=id:${productId}`,
    // `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}&limit=1`,
    // `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}&limit=1`,
    // `https://api.fda.gov/drug/ndc.json?search=brand_name:${q}&limit=1`,
  ];

  const allData2 = await axios.all(
    endpoints2.map((endpoint) => axios.get(endpoint))
  );

  console.log(allData2[0].data['results']);

  const data2 = [];
  // data2.push({
  //   generic_name: allData2[0].data['results'][0]['generic_name'],
  //   product_ndc: allData2[0].data['results'][0]['product_ndc'],
  //   id: allData2[0].data['results'][0]['product_id'],
  //   labeler_name: allData2[1].data['results'][0]['labeler_name'],
  //   product_type: allData2[2].data['results'][0]['product_type'],
  //   active_ingredients: allData2[3].data['results'][0]['active_ingredients'],
  // });
  console.log('==============DATA2==================');
  // console.log(allData2);

  data.push({
    generic_name: allData[0].data['results'][0]['generic_name'],
    product_ndc: allData[0].data['results'][0]['product_ndc'],
    id: allData[0].data['results'][0]['product_id'],
    spl_id: allData[0].data['results'][0]['spl_id'],
    labeler_name: allData[0].data['results'][0]['labeler_name'],
    product_type: allData[0].data['results'][0]['product_type'],
    active_ingredients: allData[0].data['results'][0]['active_ingredients'],
    drug_purpose: allData2[0].data['results'][0]['purpose'],
    drug_indications_and_usage:
      allData2[0].data['results'][0]['indications_and_usage'],
    drug_warnings: allData2[0].data['results'][0]['warnings'],
    drug_do_not_use: allData2[0].data['results'][0]['do_not_use'],
    drug_ask_doctor: allData2[0].data['results'][0]['ask_doctor'],
    drug_active_ingredient: allData2[0].data['results'][0]['active_ingredient'],
    drug_when_using: allData2[0].data['results'][0]['when_using'],
    drug_stop_use: allData2[0].data['results'][0]['stop_use'],
    drug_pregnancy_or_breast_feeding:
      allData2[0].data['results'][0]['pregnancy_or_breast_feeding'],
    drug_keep_out_of_reach_of_children:
      allData2[0].data['results'][0]['keep_out_of_reach_of_children'],
    drug_keep_dosage_and_administration:
      allData2[0].data['results'][0]['dosage_and_administration'],
    drug_keep_storage_and_handling:
      allData2[0].data['results'][0]['storage_and_handling'],
    drug_keep_package_label_principal_display_panel:
      allData2[0].data['results'][0]['package_label_principal_display_panel'],
    drug_inactive_ingredient:
      allData2[0].data['results'][0]['inactive_ingredient'],
    drug_questions: allData2[0].data['results'][0]['questions'],
    drug_effective_time: allData2[0].data['results'][0]['effective_time'],
  });

  console.log(data);

  return res.json(data);
});

app.listen(5000, () => console.log('API is working'));
