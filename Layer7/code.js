const _0x4af2db=_0x282f;function _0x3b6d(){const _0xc60b39=['702594wnaJgS','then','getElementById','style','country_name_official','2420328EglpAy','city','https://api.ipgeolocation.io/ipgeo?apiKey=a350ba986ed24876b5496ed3eb09eff8','36mdLmzP','innerHTML','isp','15483znsXtt','organization','616VtHmyl','img','5280190vqKNan','3479kWqvXW','log','display','1350tAGZvi','state_prov','50257541cf0d015ad24713d585454ed1','catch','2195ZwLqLJ','error','block','json','State:\x20','country','352066HNWdDo','forEach','description','Country:\x20','append','weather'];_0x3b6d=function(){return _0xc60b39;};return _0x3b6d();}(function(_0x29f97a,_0x1a7989){const _0x6d390e=_0x282f,_0x5506a1=_0x29f97a();while(!![]){try{const _0xa33a75=-parseInt(_0x6d390e(0x1a8))/0x1+-parseInt(_0x6d390e(0x18b))/0x2+parseInt(_0x6d390e(0x196))/0x3+-parseInt(_0x6d390e(0x190))/0x4+parseInt(_0x6d390e(0x1a2))/0x5*(-parseInt(_0x6d390e(0x19e))/0x6)+-parseInt(_0x6d390e(0x19b))/0x7*(parseInt(_0x6d390e(0x198))/0x8)+-parseInt(_0x6d390e(0x193))/0x9*(-parseInt(_0x6d390e(0x19a))/0xa);if(_0xa33a75===_0x1a7989)break;else _0x5506a1['push'](_0x5506a1['shift']());}catch(_0xa226aa){_0x5506a1['push'](_0x5506a1['shift']());}}}(_0x3b6d,0xa4004));const apiKey=_0x4af2db(0x1a0),country='Belize';let apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+country+'&appid='+apiKey,city,isp,weather,description,debounce=![],button=document[_0x4af2db(0x18d)]('revealBtn'),allImages=document['querySelectorAll'](_0x4af2db(0x199));function _0x282f(_0x4e0f73,_0x308601){const _0x3b6ddc=_0x3b6d();return _0x282f=function(_0x282fe0,_0x8ba72c){_0x282fe0=_0x282fe0-0x186;let _0x3b480a=_0x3b6ddc[_0x282fe0];return _0x3b480a;},_0x282f(_0x4e0f73,_0x308601);}function fetchweather(){const _0x35ed57=_0x4af2db;fetch(apiUrl)['then'](_0x34d905=>_0x34d905[_0x35ed57(0x1a5)]())[_0x35ed57(0x18c)](_0xe68874=>{const _0x2b95ba=_0x35ed57;document[_0x2b95ba(0x18d)](_0x2b95ba(0x18a))[_0x2b95ba(0x194)]=_0xe68874['weather'][0x0][_0x2b95ba(0x187)];})[_0x35ed57(0x1a1)](_0x38ff0c=>{const _0x1f96d2=_0x35ed57;console[_0x1f96d2(0x1a3)]('Error\x20fetching\x20weather\x20data:',_0x38ff0c);});}function fetchData(){const _0x256350=_0x4af2db;fetch(_0x256350(0x192))[_0x256350(0x18c)](_0x3f09c1=>_0x3f09c1[_0x256350(0x1a5)]())[_0x256350(0x18c)](_0xa3273b=>{const _0x55c098=_0x256350;document[_0x55c098(0x18d)](_0x55c098(0x195))[_0x55c098(0x194)]=_0xa3273b[_0x55c098(0x197)],document['getElementById'](_0x55c098(0x191))[_0x55c098(0x189)](_0xa3273b[_0x55c098(0x19f)]),document[_0x55c098(0x18d)](_0x55c098(0x1a7))[_0x55c098(0x189)](_0xa3273b[_0x55c098(0x18f)]);})[_0x256350(0x1a1)](_0x2928f9=>console[_0x256350(0x19c)](_0x2928f9));}function revealInformation(){const _0x31ff64=_0x4af2db;debounce==![]&&(button[_0x31ff64(0x194)]='Hide\x20Information',fetchData(),fetchweather(),allImages['forEach'](_0x56a39b=>{const _0x243254=_0x31ff64;_0x56a39b[_0x243254(0x18e)][_0x243254(0x19d)]='none';}),debounce=!![],setTimeout(()=>{const _0x3ae559=_0x31ff64;button[_0x3ae559(0x194)]='Reveal\x20Information',document[_0x3ae559(0x18d)]('isp')['innerHTML']='',document['getElementById']('city')['innerHTML']=_0x3ae559(0x1a6),document[_0x3ae559(0x18d)](_0x3ae559(0x1a7))[_0x3ae559(0x194)]=_0x3ae559(0x188),document[_0x3ae559(0x18d)](_0x3ae559(0x18a))[_0x3ae559(0x194)]='',allImages[_0x3ae559(0x186)](_0x3d1c80=>{const _0x35bfe6=_0x3ae559;_0x3d1c80['style'][_0x35bfe6(0x19d)]=_0x35bfe6(0x1a4);}),debounce=![];},0x7d0));}