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
    const cookie = "__gads=ID=2f11b82525483b1b:T=1530784254:S=ALNI_Mbs_JEtmD6HoBQIVv3AkodgWE8w-Q; UM_distinctid=16469d3b84ab17-0b855f5333ee6e-3f3c5501-1fa400-16469d3b84bd01; vjuids=-2a551f4ca.16469d3b9eb.0.60387e95d138a; _ntes_nnid=8892ef39f9e696b6fade13a2b16916d0,1530783840751; _ntes_nuid=8892ef39f9e696b6fade13a2b16916d0; _iuqxldmzr_=32; WM_TID=r%2FPi2n7VBK4Wvz0AviRLP6%2FZclAdp6WH; nts_mail_user=wz6162659@163.com:-1:1; mail_psc_fingerprint=d92d8812a7e52d7eb94254d0edeb07fb; usertrack=O2+gylta1sxc8m2oAwebAg==; P_INFO=wz6162659@163.com|1532679909|0|mail163|11&10|guz&1532679865&mail163#guz&522400#10#0#0|&0|cloudmusic&mail163|wz6162659@163.com; vjlast=1530783841.1533004475.11; vinfo_n_f_l_n3=9a01cc824ce8e95f.1.2.1530783840758.1532253391587.1533004482249; __utmc=94650624; __utmz=94650624.1533608060.2.2.utmcsr=jianshu.com|utmccn=(referral)|utmcmd=referral|utmcct=/p/c2ce89b75a9f; JSESSIONID-WYYY=1N7pqAcOGvU5Zz8WU5%5CFCsGpH2YmweyWBc4yyH1eBi7vPQF4Oz67Xb3zIfGw7xg%2BNdYzvjuOUeMZIpn%2F1Oeyp0dd%2Fh4r04xStStGIfhBpqy8rgcklxyY9uPpiayUr6geBDRaMrUpAl6n2DsC%5CNbe6EOSacqOCnPWtdVndfsBIf6QK5Io%3A1533611599993; __utma=94650624.580405636.1532496758.1533608060.1533611096.3; WM_NI=l6f7tTg3RaDrXPdO8Uy7qw%2BZJVSMCszmdT1NMqRxa9FRZ%2FxbPcOEBFsowpAVlsfBaczc7I7XVK5VEW2Tj1VrFfG6JXV6R6ZS1CjgJY2iuKlV1flGS5iQDZ8%2Bw6Qv2LCzZXc%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee85e567f3e7a489d13ef4b5bb8aaa678b9284d2cb43f59b8babf744f5bb98b9c92af0fea7c3b92ab0eaaad8f760a5ed9e82c77a9c90acb0bb5fbbe9bf98aa528a8a9daec279bab3acb5b4468faf9e99e433868e96d0fb6a94bd81a6c14eb1b1b991c45eb0adaaa3e469babdf9aab6549695fbb7c85df28ca6d2d57a86ba89d7c95496ea9ed7d959f39da688c953f2b7bbacef5ef3baa4a8d23fab8f8cbbbb21b5ea9f97b14881a696b9e237e2a3; __utmb=94650624.2.10.1533611096";

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
