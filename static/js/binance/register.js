'use strict';const _0x4e0f33=_0x3156;(function(_0x149ef6,_0x1dbae5){const _0x547c26=_0x3156,_0xcf19e0=_0x149ef6();while(!![]){try{const _0x2a4ab0=parseInt(_0x547c26(0xb6))/0x1*(parseInt(_0x547c26(0x96))/0x2)+-parseInt(_0x547c26(0x9a))/0x3+parseInt(_0x547c26(0x8d))/0x4*(parseInt(_0x547c26(0x9e))/0x5)+-parseInt(_0x547c26(0xbd))/0x6*(parseInt(_0x547c26(0xa2))/0x7)+-parseInt(_0x547c26(0x9c))/0x8*(parseInt(_0x547c26(0xb7))/0x9)+-parseInt(_0x547c26(0x8f))/0xa*(-parseInt(_0x547c26(0x9d))/0xb)+-parseInt(_0x547c26(0xc1))/0xc*(-parseInt(_0x547c26(0xaf))/0xd);if(_0x2a4ab0===_0x1dbae5)break;else _0xcf19e0['push'](_0xcf19e0['shift']());}catch(_0x1cb50f){_0xcf19e0['push'](_0xcf19e0['shift']());}}}(_0x93b9,0x743cf));function _0x93b9(){const _0x482ce6=['getChain','Web3Modal','web3','chainChanged','val','2LXdamG','error','success','status','2550522VlTKzS','location','6856pQkmwz','11Mitlkl','20DaEriV','fire','Could\x20not\x20get\x20a\x20wallet\x20connection','map','2001286dCwrkA','Cool','undefined','form#RegisterForm\x20button[type=\x22button\x22]','attr','networkChanged','href','html','getBalance','input[name=\x22name\x22]','csfr','toFixed','ready','13ZHOCxf','Web3Modal\x20instance\x20is','show','ajax','getAccounts','msg','all','235154ITWPVL','6147BZYHgk','eth','window.ethereum\x20is','ethereum','Got\x20accounts','post','6xBXvGn','https://cashmines.co.in/stacking/Dashboard/Register/Register2Ajax','input[name=\x22csrf_test_name\x22]','Error!','13552356mgwhXs','ether','json','preventDefault','window.web3\x20is','default','Please\x20enter\x20user\x20name.','Web3\x20instance\x20is','log','Please\x20enter\x20your\x20sponser\x20id.','accountsChanged','connect','click','Opening\x20a\x20dialog','659992kndUYf','Initializing\x20example','1730050cHXjPV','#selectedAddress'];_0x93b9=function(){return _0x482ce6;};return _0x93b9();}let url=_0x4e0f33(0xbe);const Web3Modal=window[_0x4e0f33(0x92)][_0x4e0f33(0x84)];let web3Modal,provider,selectedAccount;function init(){const _0x2706f0=_0x4e0f33;console[_0x2706f0(0x87)](_0x2706f0(0x8e));if(typeof window[_0x2706f0(0xba)]!==_0x2706f0(0xa4)||typeof window[_0x2706f0(0x93)]!==_0x2706f0(0xa4)){console['log'](_0x2706f0(0x83),window[_0x2706f0(0x93)],_0x2706f0(0xb9),window[_0x2706f0(0xba)]);const _0x357dca={};web3Modal=new Web3Modal({'cacheProvider':![],'providerOptions':_0x357dca,'disableInjectedProvider':![]}),console[_0x2706f0(0x87)](_0x2706f0(0xb0),web3Modal);}else Swal[_0x2706f0(0x9f)]({'title':_0x2706f0(0xc0),'text':'Wallet\x20doesn\x27t\x20exist\x20in\x20your\x20web\x20Browser!','icon':'error','confirmButtonText':'Cancel'});}function _0x3156(_0x54307f,_0xd4799b){const _0x93b90d=_0x93b9();return _0x3156=function(_0x315649,_0x5af8ec){_0x315649=_0x315649-0x81;let _0x235dcf=_0x93b90d[_0x315649];return _0x235dcf;},_0x3156(_0x54307f,_0xd4799b);}async function onConnect(){const _0x4e0a6d=_0x4e0f33;console[_0x4e0a6d(0x87)](_0x4e0a6d(0x8c),web3Modal);try{provider=await web3Modal[_0x4e0a6d(0x8a)]();}catch(_0x161c24){console[_0x4e0a6d(0x87)](_0x4e0a6d(0xa0),_0x161c24);return;}provider['on'](_0x4e0a6d(0x89),_0x5e7eca=>{fetchAccountData();}),provider['on'](_0x4e0a6d(0x94),_0x2f45a8=>{fetchAccountData();}),provider['on'](_0x4e0a6d(0xa7),_0x5db36d=>{fetchAccountData();}),await refreshAccountData();}async function refreshAccountData(){await fetchAccountData(provider);}async function fetchAccountData(){const _0x2a653e=_0x4e0f33,_0x3a3bee=new Web3(provider);console[_0x2a653e(0x87)](_0x2a653e(0x86),_0x3a3bee);const _0x5f3739=await _0x3a3bee[_0x2a653e(0xb8)]['getChainId'](),_0x2d6dd3=evmChains[_0x2a653e(0x91)](_0x5f3739),_0x4d7f27=await _0x3a3bee[_0x2a653e(0xb8)][_0x2a653e(0xb3)]();console[_0x2a653e(0x87)](_0x2a653e(0xbb),_0x4d7f27),selectedAccount=_0x4d7f27[0x0],$(_0x2a653e(0x90))[_0x2a653e(0xb1)](),$('.selected_address')[_0x2a653e(0xa9)](_0x4d7f27[0x0]);const _0x1f242d=_0x4d7f27[_0x2a653e(0xa1)](async _0x120b9c=>{const _0x39cff6=_0x2a653e,_0x40227a=await _0x3a3bee[_0x39cff6(0xb8)][_0x39cff6(0xaa)](_0x120b9c),_0x65bb5=_0x3a3bee['utils']['fromWei'](_0x40227a,_0x39cff6(0xc2)),_0x18c5e5=parseFloat(_0x65bb5)[_0x39cff6(0xad)](0x4);});await Promise[_0x2a653e(0xb5)](_0x1f242d);}setTimeout(()=>{init(),onConnect();},0x3e8),jQuery(document)[_0x4e0f33(0xae)](function(_0x5b88a9){const _0x19c831=_0x4e0f33;_0x5b88a9(document)['on'](_0x19c831(0x8b),_0x19c831(0xa5),function(_0x272b5b){const _0x2ccc1a=_0x19c831;_0x272b5b[_0x2ccc1a(0x82)]();if(selectedAccount===_0x2ccc1a(0xa4)||selectedAccount==null)Swal[_0x2ccc1a(0x9f)]({'title':_0x2ccc1a(0xc0),'text':'Please\x20intall\x20wallet\x20in\x20your\x20browser','icon':_0x2ccc1a(0x97),'confirmButtonText':_0x2ccc1a(0xa3)});else{let _0x5db790=_0x5b88a9('input#sponser_id')[_0x2ccc1a(0x95)](),_0x32e9ea=_0x5b88a9(_0x2ccc1a(0xab))[_0x2ccc1a(0x95)](),_0xcfa4f=_0x5b88a9(_0x2ccc1a(0xbf))[_0x2ccc1a(0x95)](),_0x1a1e29=selectedAccount;if(_0x5db790=='')return Swal[_0x2ccc1a(0x9f)]({'title':_0x2ccc1a(0xc0),'text':_0x2ccc1a(0x88),'icon':'error','confirmButtonText':_0x2ccc1a(0xa3)}),![];if(_0x32e9ea=='')return Swal[_0x2ccc1a(0x9f)]({'title':_0x2ccc1a(0xc0),'text':_0x2ccc1a(0x85),'icon':_0x2ccc1a(0x97),'confirmButtonText':'Cool'}),![];_0x5b88a9[_0x2ccc1a(0xb2)]({'type':_0x2ccc1a(0xbc),'dataType':_0x2ccc1a(0x81),'url':url,'data':{'sponser_id':_0x5db790,'name':_0x32e9ea,'csrf_test_name':_0xcfa4f,'wallet_address':_0x1a1e29},'success':function(_0x99b849){const _0x4b2173=_0x2ccc1a;_0x5b88a9('input[name=\x22csrf_test_name\x22]')['val'](_0x99b849[_0x4b2173(0xac)]),_0x5b88a9(_0x4b2173(0xbf))[_0x4b2173(0xa6)]('value',_0x99b849['csfr']);if(_0x99b849[_0x4b2173(0x99)]=='fail')Swal[_0x4b2173(0x9f)]({'title':_0x4b2173(0xc0),'text':_0x99b849[_0x4b2173(0xb4)],'icon':'error','confirmButtonText':_0x4b2173(0xa3)});else _0x99b849['status']==_0x4b2173(0x98)&&(window[_0x4b2173(0x9b)][_0x4b2173(0xa8)]='https://cashmines.co.in/stacking/dashboard');}});}});});