// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// const jsonFilePath = path.resolve(__dirname, 'IDP1.json');

// app.post('/update-json', (req, res) => {
//   const newData = req.body;
//   fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).send(err);
//     }

//     const jsonObject = JSON.parse(data);
//     jsonObject.rows = newData;

//     fs.writeFile(jsonFilePath, JSON.stringify(jsonObject, null, 2), 'utf8', (err) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       res.status(200).send('JSON updated successfully');
//     });
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
