module.exports = {
  //   ProcessSendCryptoProvider: function ProcessSendCryptoProvider(key, coin, amount, email, claveGoogle, callback) {
  //     fetch('https://gntapi.com:200/api/intra/crypto/sendcryptoprovider/', {
  //       "method": "POST",
  //       "headers": {
  //         'Content-Type': 'application/json',
  //         'Totp': key
  //       },
  //       // "body": '{"payload":{"coin":"' + coin + '","amount":"' + amount + '","email":"' + email + '","totp":"' + claveGoogle + '"}}'
  //       "body": JSON.stringify({
  //         "coin": coin,
  //         "amount": amount,
  //         "email": email,
  //         "otp": key,
  //         "totp": claveGoogle
  //       })
  //     })
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         callback(responseJson)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   },
}
