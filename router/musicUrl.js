// 获取音乐 url
module.exports = (req, res, createWebAPIRequest, request) => {
  const id = req.query.id;
  const br = req.query.br || 999000;
  const data = {
    ids: [id],
    br: br,
    csrf_token: ""
  };
    // const cookie = req.get("Cookie") ? req.get("Cookie") : "";
    const cookie = "JSESSIONID-WYYY=6bcWGsHPoGnh28y3kv3pg8Hd4v7hhSi0b%2FFfRpJgi8MgXG1vjFVJeaPT5rX7AmqZczJ7CRDPF0J7N3di0NaMiS70J0i3%2FXWY%2Fmy4Yh%5Ccdy08X8jQ7JoIMJvkVWBOhaint%2FQ9zbN29WRSoGcbItVk6bNg8k%2FHSasi%5CB5eWg0OicMT09s4%3A1534253277950; _iuqxldmzr_=32; _ntes_nnid=f82cee905ae5a056e734614061499ab2,1534251477999; _ntes_nuid=f82cee905ae5a056e734614061499ab2; __utma=94650624.1501797891.1534251478.1534251478.1534251478.1; __utmc=94650624; __utmz=94650624.1534251478.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; WM_NI=4PK5S8chHnrSQMdxxu1n6Mt43TKCd1IyYRBi6XT%2BGo1F2L7BLhuhmIkDC7CIXnThMfOFN5agg7EUrGIf89RBzFvxS4Dg9FCGZoeRXBgUQCjZrCKz0wQOxmfeP2sGh%2BTCMUQ%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eeaefc46f2bf88d1cc3cac99fbb7e641aae9a8a7cc6e9b8c9b90cf80f297a4d7cd2af0fea7c3b92af89085d6d234a1b8888ff1599393ac99fb7ff3b2faaef740f18c85a4e73b8ba797b3c163f6889cccc665f39afeadb64a90b8bb89f043a99c8dd8c2439cb29c89d06e8d9a82d6e46da5e98bb6f14d8bbaf8dad14aba9aba99d24088b9f7a7c24d9ab1abb3db4aa58b9fa4e952b29d859bb37d9391b88ee56f94eebda8eb21989d83b6d437e2a3; WM_TID=kZFBzFJvcQTADdBk3NNLG5uyMtQ33WoL; __utmb=94650624.2.10.1534251478";

    createWebAPIRequest(
    "music.163.com",
    "/weapi/song/enhance/player/url",
    "POST",
    data,
    cookie,
    music_req => {
      res.setHeader("Content-Type", "application/json");
      res.send(music_req);
    },
    err => {
      res.status(502).send("fetch error");
    }
  );
};
