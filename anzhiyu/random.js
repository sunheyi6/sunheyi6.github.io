var posts=["posts/3441213557/","posts/3088998601/","posts/867279821/","posts/2864247415/","posts/782118306/","posts/3041119952/","posts/3081390851/","posts/1645673060/","posts/3571835313/","posts/4079009569/","posts/171657660/","posts/2782423641/","posts/1372806157/","posts/4124822084/","posts/354370734/","posts/2504375410/","posts/2177978687/","posts/1580086704/","posts/1368285564/","posts/3078373004/","posts/4257409245/","posts/3398514521/","posts/423546907/","posts/4168057682/","posts/2efb9f75/","posts/3750237992/","posts/2692604028/","posts/2238481670/","posts/3513846333/","posts/2310251744/","posts/345102264/","posts/364974771/","posts/3640054253/","posts/1027016161/","posts/584054310/","posts/2789195984/","posts/3948463409/","posts/2486957536/","posts/1895910490/","posts/1181292247/","posts/1202068288/","posts/3892716853/","posts/63534/","posts/3631682412/","posts/3560590924/","posts/3588975288/","posts/3707414788/","posts/2793461167/","posts/288284699/","posts/1048239581/","posts/2157337050/","posts/2101472463/","posts/1798854186/","posts/19189241/","posts/4202801640/","posts/4266433718/","posts/3324693535/","posts/3653065266/","posts/1557219409/","posts/2345277840/","posts/3919390837/","posts/2964921422/","posts/2124357006/","posts/2321636764/","posts/1320368156/","posts/2819424305/","posts/4113357341/","posts/4049607742/","posts/2367700560/","posts/4110889468/","posts/1733864390/","posts/3668139362/","posts/1823279601/","posts/3738225211/","posts/1548706080/","posts/1935562632/","posts/3773597826/","posts/2065787451/","posts/1284776411/","posts/4285113589/","posts/4171019779/","posts/2316692063/","posts/4257638701/","posts/3956989639/","posts/4257140255/","posts/269142751/","posts/1857813313/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };