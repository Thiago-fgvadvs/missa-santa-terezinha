var ro=Object.defineProperty,mo=Object.defineProperties;var io=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var uo=Object.prototype.hasOwnProperty,to=Object.prototype.propertyIsEnumerable;var Z=(o,e,a)=>e in o?ro(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,b=(o,e)=>{for(var a in e||(e={}))uo.call(e,a)&&Z(o,a,e[a]);if(_)for(var a of _(e))to.call(e,a)&&Z(o,a,e[a]);return o},F=(o,e)=>mo(o,io(e));const{useState,useEffect,useMemo,useRef,useCallback}=React,_ic=o=>e=>(e=e||{},React.createElement("svg",{width:e.size||22,height:e.size||22,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:e.className,style:e.style,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:o}})),Music=_ic('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'),Search=_ic('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),Calendar=_ic('<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>'),Users=_ic('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),Settings=_ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),Play=_ic('<polygon points="6 3 20 12 6 21 6 3"/>'),Plus=_ic('<path d="M5 12h14"/><path d="M12 5v14"/>'),Trash2=_ic('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>'),Pencil=_ic('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>'),ChevronLeft=_ic('<path d="m15 18-6-6 6-6"/>'),ChevronRight=_ic('<path d="m9 18 6-6-6-6"/>'),ChevronDown=_ic('<path d="m6 9 6 6 6-6"/>'),ChevronUp=_ic('<path d="m18 15-6-6-6 6"/>'),Save=_ic('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>'),X=_ic('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),ExternalLink=_ic('<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),Minus=_ic('<path d="M5 12h14"/>'),Type=_ic('<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>'),Pause=_ic('<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>'),ArrowUp=_ic('<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>'),ArrowDown=_ic('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),ListMusic=_ic('<path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/>'),RefreshCw=_ic('<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>'),FileText=_ic('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>'),Check=_ic('<path d="M20 6 9 17l-5-5"/>'),Lock=_ic('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),Unlock=_ic('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'),Youtube=_ic('<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>'),Upload=_ic('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),SB=window.supabase.createClient(window.SUPA_URL,window.SUPA_KEY),C={bg:"#120c1e",card:"#1d1530",card2:"#271a40",line:"#3a2a5c",txt:"#f3eefb",mut:"#a99ec4",gold:"#f4c95d",rose:"#e87a9c",violet:"#a87bf0",green:"#43d6a0",danger:"#ff6b8a",blue:"#6ea8fe"},MOMENTOS=["Entrada","Ato Penitencial","Gl\xF3ria","Salmo","Aclama\xE7\xE3o","Ofert\xF3rio","Santo","Cordeiro","Comunh\xE3o","A\xE7\xE3o de Gra\xE7as","Final","Nossa Senhora / Santos","Tempo (Natal/Advento)","Geral"],MOMENTO_COR={Entrada:C.green,"Ato Penitencial":C.blue,Gl\u00F3ria:C.gold,Salmo:C.violet,Aclama\u00E7\u00E3o:C.gold,Ofert\u00F3rio:C.rose,Santo:C.gold,Cordeiro:C.blue,Comunh\u00E3o:C.rose,"A\xE7\xE3o de Gra\xE7as":C.green,Final:C.green,"Nossa Senhora / Santos":C.rose,"Tempo (Natal/Advento)":C.blue,Geral:C.mut},SLOTS_DOW={0:["07:00","09:00","11:00","17:00"],1:["19:30"],2:["19:30"],3:["19:30"],4:["19:30"],5:["19:30"],6:["16:00"]},DOW_NOME=["Domingo","Segunda","Ter\xE7a","Quarta","Quinta","Sexta","S\xE1bado"],DEFAULT_TEAMS=[{id:"t_ceciliua",name:"Equipe Santa Cec\xEDlia",color:C.rose},{id:"t_jovem",name:"Minist\xE9rio Jovem",color:C.violet},{id:"t_familia",name:"Pastoral Familiar",color:C.green}],SEED_VERSION=1,SEED_SONGS=[{id:"lv1",n:1,t:"MEU SENHOR E MEU DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0001-meu-senhor-e-meu-deus.pdf"},{id:"lv4",n:4,t:"ALELUIA, GL\xD3RIA AO SENHOR",tom:"Mi Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0004-aleluia-gloria-ao-senhor.pdf"},{id:"lv14",n:14,t:"A N\xD3S DESCEI, DIVINA LUZ",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0014-a-nos-descei-divina-luz.pdf"},{id:"lv20",n:20,t:"A MINH'ALMA TEM SEDE DE DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0020-a-minh-alma-tem-sede-de-deus.pdf"},{id:"lv39",n:39,t:"DIA E NOITE",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0039-dia-e-noite.pdf"},{id:"lv42",n:42,t:"\xC9 IMPOSS\xCDVEL",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0042-e-impossivel.pdf"},{id:"lv47",n:47,t:"EU CANTO A ALEGRIA, SENHOR",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0047-eu-canto-a-alegria-senhor.pdf"},{id:"lv58",n:58,t:"GL\xD3RIA A DEUS NA IMENSID\xC3O",tom:"Sol Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0058-gloria-a-deus-na-imensidao.pdf"},{id:"lv60",n:60,t:"GRA\xC7AS, PELA MANHA TAO LINDA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0060-gracas-pela-manha-tao-linda.pdf"},{id:"lv61",n:61,t:"GL\xD3RIA, GL\xD3RIA, ALELUIA",tom:"Sol Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0061-gloria-gloria-aleluia.pdf"},{id:"lv66",n:66,t:"JESUS \xC9 MARAVILHOSO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0066-jesus-e-maravilhoso.pdf"},{id:"lv67",n:67,t:"LOUVADO SEJA O MEU SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0067-louvado-seja-o-meu-senhor.pdf"},{id:"lv69",n:69,t:"LOUVAI O CRIADOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0069-louvai-o-criador.pdf"},{id:"lv71",n:71,t:"SIM, EU QUERO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0071-sim-eu-quero.pdf"},{id:"lv73",n:73,t:"LOUVAI DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0073-louvai-deus.pdf"},{id:"lv74",n:74,t:"O SENHOR FEZ EM MIM MARAVILHAS",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0074-o-senhor-fez-em-mim-maravilhas.pdf"},{id:"lv75",n:75,t:"MAGNIFICAT, MAGNIFICAT",tom:"R\xE9\xB7Maior (D.R.)",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0075-magnificat-magnificat.pdf"},{id:"lv76",n:76,t:"MAE DE TODOS OS HOMENS",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0076-mae-de-todos-os-homens.pdf"},{id:"lv77",n:77,t:"PELAS ESTRADAS DA VIDA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0077-pelas-estradas-da-vida.pdf"},{id:"lv78",n:78,t:"NO TEU ALTAR, SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0078-no-teu-altar-senhor.pdf"},{id:"lv81",n:81,t:"OFERTAMOS AO SENHOR",tom:"R\xE9 Maior",m:"Ofert\xF3rio",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0081-ofertamos-ao-senhor.pdf"},{id:"lv84",n:84,t:"ORA\xC7AO DE SAO FRANCISCO",tom:"Si menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0084-oracao-de-sao-francisco.pdf"},{id:"lv89",n:89,t:"PAI, PAI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0089-pai-pai.pdf"},{id:"lv91",n:91,t:"PERMANECEI EM MIM",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0091-permanecei-em-mim.pdf"},{id:"lv92",n:92,t:"QUANDO TU, SENHOR",tom:"Mi Menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0092-quando-tu-senhor.pdf"},{id:"lv93",n:93,t:"QUANDO O ESP\xCDRITO DO SENHOR SE MOVE EM MIM",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0093-quando-o-espirito-do-senhor-se-move-em-mim.pdf"},{id:"lv94",n:94,t:"QUANDO JESUS PASSAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0094-quando-jesus-passar.pdf"},{id:"lv95",n:95,t:"SAI DA TUA TERRA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0095-sai-da-tua-terra.pdf"},{id:"lv101",n:101,t:"SEGURA NA MAO DE DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0101-segura-na-mao-de-deus.pdf"},{id:"lv103",n:103,t:"SALVE RAINHA",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0103-salve-rainha.pdf"},{id:"lv105",n:105,t:"O CEU, -A TERRA, O MAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0105-o-ceu-a-terra-o-mar.pdf"},{id:"lv113",n:113,t:"VAI FALAR NO EVANGELHO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0113-vai-falar-no-evangelho.pdf"},{id:"lv115",n:115,t:"VIT\xD3RIA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0115-vitoria.pdf"},{id:"lv118",n:118,t:"VEM, E EU MOSTRAREI",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0118-vem-e-eu-mostrarei.pdf"},{id:"lv120",n:120,t:"JESUS CRISTO \xC9 O SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0120-jesus-cristo-e-o-senhor.pdf"},{id:"lv121",n:121,t:"ESTE \xC9 O DIA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0121-este-e-o-dia.pdf"},{id:"lv122",n:122,t:"JESUS CRISTO NAO VAI PASSAR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0122-jesus-cristo-nao-vai-passar.pdf"},{id:"lv127",n:127,t:"POE TUA MAO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0127-poe-tua-mao.pdf"},{id:"lv128",n:128,t:"BASTA QUE ME TOQUES",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0128-basta-que-me-toques.pdf"},{id:"lv129",n:129,t:"SENHOR, QUEM ENTRAR\xC1",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0129-senhor-quem-entrara.pdf"},{id:"lv130",n:130,t:"\xD3 SENHOR, ACEITA O LOUVOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0130-o-senhor-aceita-o-louvor.pdf"},{id:"lv131",n:131,t:"EU LOUVAREI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0131-eu-louvarei.pdf"},{id:"lv132",n:132,t:"CRISTO TEM PODER",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0132-cristo-tem-poder.pdf"},{id:"lv133",n:133,t:"LIVRE, ME DEIXASTE LIVRE",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0133-livre-me-deixaste-livre.pdf"},{id:"lv134",n:134,t:"JESUS DE NAZAR\xC9",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0134-jesus-de-nazare.pdf"},{id:"lv137",n:137,t:"BUSCAI PRIMEIRO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0137-buscai-primeiro.pdf"},{id:"lv138",n:138,t:"AO ORARMOS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0138-ao-orarmos.pdf"},{id:"lv140",n:140,t:"MINHA PAZ VOS DOU",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0140-minha-paz-vos-dou.pdf"},{id:"lv141",n:141,t:"PAI DE AMOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0141-pai-de-amor.pdf"},{id:"lv142",n:142,t:"FAZ-ME CHEGAR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0142-faz-me-chegar.pdf"},{id:"lv143",n:143,t:"CANTAI AO SENHOR",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0143-cantai-ao-senhor.pdf"},{id:"lv148",n:148,t:"CRISTO ROMPE AS CADEIAS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0148-cristo-rompe-as-cadeias.pdf"},{id:"lv150",n:150,t:"DA MINHA VIDA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0150-da-minha-vida.pdf"},{id:"lv151",n:151,t:"DEMOS GRA\xC7AS AO SENHOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0151-demos-gracas-ao-senhor.pdf"},{id:"lv153",n:153,t:"ESTAMOS EM FESTA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0153-estamos-em-festa.pdf"},{id:"lv155",n:155,t:"EU TE DIGO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0155-eu-te-digo.pdf"},{id:"lv157",n:157,t:"EU TENHO UM AMIGO QUE ME AMA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0157-eu-tenho-um-amigo-que-me-ama.pdf"},{id:"lv161",n:161,t:"OURO E PRATA NAO TENHO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0161-ouro-e-prata-nao-tenho.pdf"},{id:"lv162",n:162,t:"PASSA POR AQUI",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0162-passa-por-aqui.pdf"},{id:"lv164",n:164,t:"RESSUSCITOU",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0164-ressuscitou.pdf"},{id:"lv166",n:166,t:"SENHOR, EU QUERO",tom:"",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0166-senhor-eu-quero.pdf"},{id:"lv167",n:167,t:"SENHOR, MEU DEUS",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0167-senhor-meu-deus.pdf"},{id:"lv170",n:170,t:"SOU TESTEMUNHA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0170-sou-testemunha.pdf"},{id:"lv171",n:171,t:"T\xC3O GRANDE \xC9S, MEU DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0171-tao-grande-es-meu-deus.pdf"},{id:"lv173",n:173,t:"SALMO 138, TU ME CONHECES",tom:"R\xE9 menor",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0173-salmo-138-tu-me-conheces.pdf"},{id:"lv174",n:174,t:"N\xC3O H\xC1 DEUS T\xC3O GRANDE",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0174-nao-ha-deus-tao-grande.pdf"},{id:"lv176",n:176,t:"IRMAO SOL COM IRMA LUZ",tom:"Sol menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0176-irmao-sol-com-irma-luz.pdf"},{id:"lv177",n:177,t:"MARIA DE NAZAR\xC9",tom:"Mi Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0177-maria-de-nazare.pdf"},{id:"lv185",n:185,t:"SEDUZISTE-ME, SENHOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0185-seduziste-me-senhor.pdf"},{id:"lv188",n:188,t:"\xD3 M\xC3E, NESTE DIA",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0188-o-mae-neste-dia-2.pdf"},{id:"lv188",n:188,t:"\xD3 M\xC3E, NESTE DIA (2)",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0188-o-mae-neste-dia-2.pdf"},{id:"lv189",n:189,t:"SABES, SENHOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0189-sabes-senhor.pdf"},{id:"lv192",n:192,t:"EU S\xD3 CONFIO NO SENHOR!",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0192-eu-so-confio-no-senhor.pdf"},{id:"lv194",n:194,t:"O NOME DE JESUS \xC9 DOCE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0194-o-nome-de-jesus-e-doce.pdf"},{id:"lv195",n:195,t:"DE UM SORRISO SO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0195-de-um-sorriso-so.pdf"},{id:"lv199",n:199,t:"ELE VIVE",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0199-ele-vive.pdf"},{id:"lv200",n:200,t:"ABEN\xC7OA-NOS, SENHOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0200-abencoa-nos-senhor.pdf"},{id:"lv204",n:204,t:"EIS QUE ESTOU \xC0 PORTA E BATO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0204-eis-que-estou-a-porta-e-bato.pdf"},{id:"lv206",n:206,t:"ABARCA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0206-abarca.pdf"},{id:"lv207",n:207,t:"ESTAREMOS AQLTI REUNIDOS",tom:"F\xE1 Maior",m:"Entrada",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0207-estaremos-aqlti-reunidos.pdf"},{id:"lv209",n:209,t:"SOBE A JERUSAL\xC9M",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0209-sobe-a-jerusalem.pdf"},{id:"lv210",n:210,t:"QUE PODEREI RETRIBUIR AO SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0210-que-poderei-retribuir-ao-senhor.pdf"},{id:"lv212",n:212,t:"COMEI, TOMAI",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0212-comei-tomai.pdf"},{id:"lv213",n:213,t:"CANTAREI AO MEU SENHOR",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0213-cantarei-ao-meu-senhor.pdf"},{id:"lv215",n:215,t:"CRISTO RESSUSCITOU",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0215-cristo-ressuscitou.pdf"},{id:"lv218",n:218,t:"ES, MARIA, A VIRGEM QUE SABE OUVIR",tom:"R\xE9 menor",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0218-es-maria-a-virgem-que-sabe-ouvir.pdf"},{id:"lv219",n:219,t:"ENSINA TEU POVO A REZAR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0219-ensina-teu-povo-a-rezar.pdf"},{id:"lv220",n:220,t:"O SENHOR NECESSITOU DE BRA\xC7OS",tom:"Si menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0220-o-senhor-necessitou-de-bracos.pdf"},{id:"lv221",n:221,t:"O SENHOR ME CHAMOU",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0221-o-senhor-me-chamou.pdf"},{id:"lv223",n:223,t:"EU CREIO EM DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0223-eu-creio-em-deus.pdf"},{id:"lv224",n:224,t:"MINHA VIDA TEM SENTIDO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0224-minha-vida-tem-sentido.pdf"},{id:"lv225",n:225,t:"MINHA ALEGRIA \xC9 ESTAR PERTO DE DEUS",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0225-minha-alegria-e-estar-perto-de-deus.pdf"},{id:"lv227",n:227,t:"PERDAO, SENHOR",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0227-perdao-senhor.pdf"},{id:"lv229",n:229,t:"GL\xD3RIA AO SENHOR",tom:"D\xF3 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0229-gloria-ao-senhor.pdf"},{id:"lv232",n:232,t:"ETERNO SEU AMOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0232-eterno-seu-amor.pdf"},{id:"lv235",n:235,t:"VALOR DO HOMEM (Salmo 8)",tom:"D\xF3 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0235-valor-do-homem-salmo-8.pdf"},{id:"lv244",n:244,t:"SENHOR, QUE VIESTE SALVAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0244-senhor-que-vieste-salvar.pdf"},{id:"lv247",n:247,t:"CREIO EM TI",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0247-creio-em-ti.pdf"},{id:"lv248",n:248,t:"DIVINO ESP\xCDRITO QUE SOIS AMIGO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0248-divino-espirito-que-sois-amigo.pdf"},{id:"lv252",n:252,t:"LIBERA., SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0252-libera-senhor.pdf"},{id:"lv253",n:253,t:"QUANDO TEU PAI REVELOU",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0253-quando-teu-pai-revelou.pdf"},{id:"lv255",n:255,t:"AVE, MARIA",tom:"Mi Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0255-ave-maria.pdf"},{id:"lv257",n:257,t:"DEUS AMOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0257-deus-amor.pdf"},{id:"lv258",n:258,t:"QUERO OUVIR TEU APELO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0258-quero-ouvir-teu-apelo.pdf"},{id:"lv262",n:262,t:"\xC9 BOM ESTARMOS JUNTOS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0262-e-bom-estarmos-juntos.pdf"},{id:"lv263",n:263,t:"O SENHOR \xC9 A MINHA LUZ",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0263-o-senhor-e-a-minha-luz.pdf"},{id:"lv266",n:266,t:"GLORIA PARA SEMPRE",tom:"F\xE1 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0266-gloria-para-sempre.pdf"},{id:"lv267",n:267,t:"O SENHOR \xC9 BOM (SI 99)",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0267-o-senhor-e-bom-si-99.pdf"},{id:"lv268",n:268,t:"O SENHOR QUE ME CONDUZ",tom:"L\xE1 Menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0268-o-senhor-que-me-conduz.pdf"},{id:"lv279",n:279,t:"SALMO 145",tom:"F\xE1 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0279-salmo-145.pdf"},{id:"lv283",n:283,t:"BENDIREI AO SENHOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0283-bendirei-ao-senhor.pdf"},{id:"lv284",n:284,t:"SEU NOME \xC9 MARAVILHOSO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0284-seu-nome-e-maravilhoso.pdf"},{id:"lv285",n:285,t:"EU DIGO SIM",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0285-eu-digo-sim.pdf"},{id:"lv286",n:286,t:"COMO DOCE A COMUNH\xC3O",tom:"R\xE9 Maior",m:"Comunh\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0286-como-doce-a-comunhao.pdf"},{id:"lv288",n:288,t:"PREPARAI O CAMINHO (Isa\xEDas 40,3)",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0288-preparai-o-caminho-isaias-40-3.pdf"},{id:"lv289",n:289,t:"DEIXA A LUZ DO C\xC9U ENTRAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0289-deixa-a-luz-do-ceu-entrar.pdf"},{id:"lv291",n:291,t:"NAO PODE SER TRISTE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0291-nao-pode-ser-triste.pdf"},{id:"lv292",n:292,t:"EU VENHO TE ADORAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0292-eu-venho-te-adorar.pdf"},{id:"lv293",n:293,t:"DE MAOS ESTENDIDAS",tom:"R\xE9 Menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0293-de-maos-estendidas.pdf"},{id:"lv295",n:295,t:"EU TE LOUVO DE CORA\xC7AO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0295-eu-te-louvo-de-coracao.pdf"},{id:"lv296",n:296,t:"QUANDO DIGO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0296-quando-digo.pdf"},{id:"lv297",n:297,t:"SANTO ESP\xCDRITO ENCHE A MINHA VIDA",tom:"D\xF3 Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0297-santo-espirito-enche-a-minha-vida.pdf"},{id:"lv298",n:298,t:"NOVA CRIATURA SOU",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0298-nova-criatura-sou.pdf"},{id:"lv300",n:300,t:"A TUA PRESEN\xC7A",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0300-a-tua-presenca.pdf"},{id:"lv301",n:301,t:"FELIZ COM JESUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0301-feliz-com-jesus.pdf"},{id:"lv304",n:304,t:"VOU SEGUIR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0304-vou-seguir.pdf"},{id:"lv306",n:306,t:"QUERO TER AMOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0306-quero-ter-amor.pdf"},{id:"lv311",n:311,t:"UM DEUS APAIXONADO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0311-um-deus-apaixonado.pdf"},{id:"lv312",n:312,t:"SOU BOM PASTOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0312-sou-bom-pastor.pdf"},{id:"lv313",n:313,t:"ALELUIA, COMO O PAI ME AMOU",tom:"L\xE1 Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0313-aleluia-como-o-pai-me-amou.pdf"},{id:"lv314",n:314,t:"ESTE PRANTO EM MINHAS MAOS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0314-este-pranto-em-minhas-maos.pdf"},{id:"lv315",n:315,t:"PROCURO ABRIGO NOS CORA\xC7OES",tom:"R\xE9 Menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0315-procuro-abrigo-nos-coracoes.pdf"},{id:"lv316",n:316,t:"NAO TRATES CORA\xC7AO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0316-nao-trates-coracao.pdf"},{id:"lv317",n:317,t:"QU\xC3O GRANDE \xC9S TU",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0317-quao-grande-es-tu.pdf"},{id:"lv318",n:318,t:"DELXA A GL\xD3RIA DE DEUS BRILHAR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0318-delxa-a-gloria-de-deus-brilhar.pdf"},{id:"lv334",n:334,t:"JESUS, \xC9S TUDO PARA MIM",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0334-jesus-es-tudo-para-mim.pdf"},{id:"lv337",n:337,t:"TODA A BIBLIA COMUNICA\xC7AO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0337-toda-a-biblia-comunicacao.pdf"},{id:"lv340",n:340,t:"VASO NOVO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0340-vaso-novo.pdf"},{id:"lv344",n:344,t:"TUDO \xC9 POSSIVEL",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0344-tudo-e-possivel.pdf"},{id:"lv345",n:345,t:"MEU CORA\xC7AO TRANSBORDA DE AMOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0345-meu-coracao-transborda-de-amor.pdf"},{id:"lv346",n:346,t:"OLHAR SOMENTE A TI",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0346-olhar-somente-a-ti.pdf"},{id:"lv349",n:349,t:"AUS\xCANCIA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0349-ausencia.pdf"},{id:"lv350",n:350,t:"FAZ-ME FIEL",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0350-faz-me-fiel.pdf"},{id:"lv356",n:356,t:"AO SENHOR LOUVAI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0356-ao-senhor-louvai.pdf"},{id:"lv357",n:357,t:"PAI AMADO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0357-pai-amado.pdf"},{id:"lv359",n:359,t:"INUNDA MEU SER",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0359-inunda-meu-ser.pdf"},{id:"lv360",n:360,t:"REUNIMO-NOS AQUI",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0360-reunimo-nos-aqui.pdf"},{id:"lv361",n:361,t:"COMO DEUS \xC9 BOM",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0361-como-deus-e-bom.pdf"},{id:"lv362",n:362,t:"PODE A TRISTEZA DURAR",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0362-pode-a-tristeza-durar.pdf"},{id:"lv364",n:364,t:"TU ES DIGNO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0364-tu-es-digno.pdf"},{id:"lv365",n:365,t:"LOUCO DE AMOR POR JESUS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0365-louco-de-amor-por-jesus.pdf"},{id:"lv366",n:366,t:"EU VIM PARA ESCUTAR",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0366-eu-vim-para-escutar.pdf"},{id:"lv367",n:367,t:"EU TE QUERO ADORAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0367-eu-te-quero-adorar.pdf"},{id:"lv369",n:369,t:"ENT\xC3O SE VER\xC1",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0369-entao-se-vera.pdf"},{id:"lv370",n:370,t:"N\xC3O SABEIS, SOIS O TEMPLO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0370-nao-sabeis-sois-o-templo.pdf"},{id:"lv371",n:371,t:"JESUS CRISTO \xC9 TUDO PRA MIM",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0371-jesus-cristo-e-tudo-pra-mim.pdf"},{id:"lv372",n:372,t:"AO TEU LADO QUERO ANDAR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0372-ao-teu-lado-quero-andar.pdf"},{id:"lv373",n:373,t:"VAMOS ADORAR A DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0373-vamos-adorar-a-deus.pdf"},{id:"lv374",n:374,t:"QUANDO ME BUSCARDES",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0374-quando-me-buscardes.pdf"},{id:"lv375",n:375,t:"ESP\xCDRITO SANTO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0375-espirito-santo.pdf"},{id:"lv378",n:378,t:"AO QUE EST\xC1 SENTADO NO TRONO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0378-ao-que-esta-sentado-no-trono.pdf"},{id:"lv379",n:379,t:"EU TENHO UM TESOURO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0379-eu-tenho-um-tesouro.pdf"},{id:"lv380",n:380,t:"CAMINHANDO EU VOU",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0380-caminhando-eu-vou.pdf"},{id:"lv381",n:381,t:"ENCHEI-VOS DO ESP\xCDRITO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0381-enchei-vos-do-espirito.pdf"},{id:"lv385",n:385,t:"SEU NOME \xC9 JESUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0385-seu-nome-e-jesus.pdf"},{id:"lv388",n:388,t:"MAS SIM, O SENHOR BOM",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0388-mas-sim-o-senhor-bom.pdf"},{id:"lv391",n:391,t:"EU TENHO PAZ COMO UM RIO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0391-eu-tenho-paz-como-um-rio.pdf"},{id:"lv393",n:393,t:"A PAZ DO SENHOR JESUS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0393-a-paz-do-senhor-jesus.pdf"},{id:"lv406",n:406,t:"MOSTRA-ME, SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0406-mostra-me-senhor.pdf"},{id:"lv407",n:407,t:"EU SOU O PAO DA VIDA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0407-eu-sou-o-pao-da-vida.pdf"},{id:"lv409",n:409,t:"GL\xD3RIA A DEUS",tom:"R\xE9 menor",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0409-gloria-a-deus.pdf"},{id:"lv410",n:410,t:"OVELHA PERDIDA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0410-ovelha-perdida.pdf"},{id:"lv413",n:413,t:"VEM, MARIA VEM",tom:"L\xE1 menor",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0413-vem-maria-vem.pdf"},{id:"lv415",n:415,t:"HOSANA HEI",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0415-hosana-hei.pdf"},{id:"lv416",n:416,t:"MAOS ABERTAS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0416-maos-abertas.pdf"},{id:"lv420",n:420,t:"FICA AQUI, SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0420-fica-aqui-senhor.pdf"},{id:"lv421",n:421,t:"TAO PERTO DE MIM",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0421-tao-perto-de-mim.pdf"},{id:"lv422",n:422,t:"TEU SOU",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0422-teu-sou.pdf"},{id:"lv424",n:424,t:"MEU PENTECOSTES",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0424-meu-pentecostes.pdf"},{id:"lv429",n:429,t:"IDA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0429-ida.pdf"},{id:"lv430",n:430,t:"A VIAGEM",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0430-a-viagem.pdf"},{id:"lv431",n:431,t:"COMO SAO BELOS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0431-como-sao-belos.pdf"},{id:"lv433",n:433,t:"SALMOS DE LOUVOR",tom:"D\xF3 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0433-salmos-de-louvor.pdf"},{id:"lv434",n:434,t:"HOSANA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0434-hosana.pdf"},{id:"lv436",n:436,t:"BATIZA-ME, SENHOR",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0436-batiza-me-senhor.pdf"},{id:"lv440",n:440,t:"A EDIFICAR A IGREJA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0440-a-edificar-a-igreja.pdf"},{id:"lv442",n:442,t:"O AMOR DE DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0442-o-amor-de-deus.pdf"},{id:"lv446",n:446,t:"CHEGOU A BRISA",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0446-chegou-a-brisa.pdf"},{id:"lv447",n:447,t:"O MEU SENHOR TEM MUITOS FILHOS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0447-o-meu-senhor-tem-muitos-filhos.pdf"},{id:"lv453",n:453,t:"ISA\xCDAS 49",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0453-isaias-49.pdf"},{id:"lv454",n:454,t:"ANUNCIA-ME (VOCA\xC7\xC3O DO PROFETA)",tom:"Si menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0454-anuncia-me-vocacao-do-profeta.pdf"},{id:"lv455",n:455,t:"MARIA",tom:"Mi menor",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0455-maria.pdf"},{id:"lv457",n:457,t:"CAN\xC7\xC3O DO ESP\xCDRITO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0457-cancao-do-espirito.pdf"},{id:"lv458",n:458,t:"QUERO LOUVAR-TE",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0458-quero-louvar-te.pdf"},{id:"lv460",n:460,t:"EU SOU FELIZ",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0460-eu-sou-feliz.pdf"},{id:"lv461",n:461,t:"PORQUE ELE VIVE",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0461-porque-ele-vive.pdf"},{id:"lv464",n:464,t:"SALMO 90 - AQUELE QUE HABITA",tom:"D\xF3 menor",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0464-salmo-90-aquele-que-habita.pdf"},{id:"lv465",n:465,t:"SANTO, SANTO",tom:"L\xE1 Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0465-santo-santo.pdf"},{id:"lv466",n:466,t:"ALELVIA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0466-alelvia.pdf"},{id:"lv468",n:468,t:"EXALTAR-TE-EI",tom:"D\xF3 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0468-exaltar-te-ei.pdf"},{id:"lv470",n:470,t:"CANTO DE MARIA",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0470-canto-de-maria.pdf"},{id:"lv473",n:473,t:"SALMO SO",tom:"Mi Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0473-salmo-so.pdf"},{id:"lv474",n:474,t:"SALMO 115",tom:"D\xF3 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0474-salmo-115.pdf"},{id:"lv475",n:475,t:"QUE SABEDORIA \xC9 ESTA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0475-que-sabedoria-e-esta.pdf"},{id:"lv476",n:476,t:"EU TENHO UM BARCO",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0476-eu-tenho-um-barco.pdf"},{id:"lv477",n:477,t:"CANTO DE COMUNHAO",tom:"R\xE9 Maior",m:"Comunh\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0477-canto-de-comunhao.pdf"},{id:"lv479",n:479,t:"A ALEGRIA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0479-a-alegria.pdf"},{id:"lv480",n:480,t:"POSSO PISAR NUMA TROPA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0480-posso-pisar-numa-tropa.pdf"},{id:"lv481",n:481,t:"ESP\xCDRITO SANTO, VEM, VEM",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0481-espirito-santo-vem-vem.pdf"},{id:"lv482",n:482,t:"HOJE E TEMPO DE LOUVAR A DEUS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0482-hoje-e-tempo-de-louvar-a-deus.pdf"},{id:"lv483",n:483,t:"ES O DEUS DE ISRAEL",tom:"D\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0483-es-o-deus-de-israel.pdf"},{id:"lv484",n:484,t:"VENHO A TI",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0484-venho-a-ti.pdf"},{id:"lv486",n:486,t:"OBRIGADO, SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0486-obrigado-senhor.pdf"},{id:"lv487",n:487,t:"O POVO DE DEUS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0487-o-povo-de-deus.pdf"},{id:"lv494",n:494,t:"CRISTO AMIGO",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0494-cristo-amigo.pdf"},{id:"lv495",n:495,t:"GRA\xC7AS EU DOU",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0495-gracas-eu-dou.pdf"},{id:"lv496",n:496,t:"O ESP\xCDRITO DE DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0496-o-espirito-de-deus.pdf"},{id:"lv497",n:497,t:"MEXE E REMEXE",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0497-mexe-e-remexe.pdf"},{id:"lv498",n:498,t:"REI SENHOR",tom:"",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0498-rei-senhor.pdf"},{id:"lv499",n:499,t:"PORQUE DEUS \xC9 GRANDE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0499-porque-deus-e-grande.pdf"},{id:"lv500",n:500,t:"MARIA NOSSA MAE",tom:"L\xE1 menor",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0500-maria-nossa-mae.pdf"},{id:"lv501",n:501,t:"DESDE O NASCER AO P\xD4R-DO-SOL",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0501-desde-o-nascer-ao-por-do-sol.pdf"},{id:"lv502",n:502,t:"CANTE AO SENHOR",tom:"L\xE1 maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0502-cante-ao-senhor.pdf"},{id:"lv505",n:505,t:"EU QUERO UM RIO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0505-eu-quero-um-rio.pdf"},{id:"lv507",n:507,t:"ESTAS ENTRE NOS",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0507-estas-entre-nos.pdf"},{id:"lv509",n:509,t:"A ESCOLHIDA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0509-a-escolhida.pdf"},{id:"lv510",n:510,t:"VEM ESPIRITO DE DEUS",tom:"Sol menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0510-vem-espirito-de-deus.pdf"},{id:"lv511",n:511,t:"TU \xC9S A VIDA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0511-tu-es-a-vida.pdf"},{id:"lv513",n:513,t:"RETRATO DE MULHER",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0513-retrato-de-mulher.pdf"},{id:"lv514",n:514,t:"CAMINHADA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0514-caminhada.pdf"},{id:"lv515",n:515,t:"CAN\xC7\xC3O DAS BEM-AVENTURAN\xC7AS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0515-cancao-das-bem-aventurancas.pdf"},{id:"lv518",n:518,t:"A TUA GRA\xC7A",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0518-a-tua-graca.pdf"},{id:"lv520",n:520,t:"UM CORA\xC7AO PARA AMAR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0520-um-coracao-para-amar.pdf"},{id:"lv528",n:528,t:"MEU DEUS EST\xC1 VIVO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0528-meu-deus-esta-vivo.pdf"},{id:"lv529",n:529,t:"EST\xC1S ASSENTADO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0529-estas-assentado.pdf"},{id:"lv530",n:530,t:"TOMADO PELA MAO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0530-tomado-pela-mao.pdf"},{id:"lv532",n:532,t:"ISA\xCDAS 40,31",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0532-isaias-40-31.pdf"},{id:"lv533",n:533,t:"CANTAI, POIS, QUE A VIT\xD3RIA \xC9 GANHA",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0533-cantai-pois-que-a-vitoria-e-ganha.pdf"},{id:"lv535",n:535,t:"EU CELEBRAREI",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0535-eu-celebrarei.pdf"},{id:"lv538",n:538,t:"DAI GL\xD3RIA A DEUS!",tom:"Mi Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0538-dai-gloria-a-deus.pdf"},{id:"lv540",n:540,t:"SE DEUS E POR NOS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0540-se-deus-e-por-nos.pdf"},{id:"lv541",n:541,t:"QUEM NOS SEPARA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0541-quem-nos-separa.pdf"},{id:"lv542",n:542,t:"CURA-ME, JESUS",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0542-cura-me-jesus.pdf"},{id:"lv550",n:550,t:"MINH'ALMA ENGRANDECE AO SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0550-minh-alma-engrandece-ao-senhor.pdf"},{id:"lv552",n:552,t:"LOUVORES DAREI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0552-louvores-darei.pdf"},{id:"lv553",n:553,t:"ALEGRES EM PRECE",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0553-alegres-em-prece.pdf"},{id:"lv554",n:554,t:"IMACULADA MARIA DE DEUS",tom:"Sol Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0554-imaculada-maria-de-deus.pdf"},{id:"lv555",n:555,t:"PALMAS PARA JESUS",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0555-palmas-para-jesus.pdf"},{id:"lv556",n:556,t:"TU \xC9S O SOL",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0556-tu-es-o-sol.pdf"},{id:"lv560",n:560,t:"QUEM \xC9 ESTE POVO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0560-quem-e-este-povo.pdf"},{id:"lv563",n:563,t:"ESPIRITO DE DEUS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0563-espirito-de-deus.pdf"},{id:"lv564",n:564,t:"ESPIRITO SANTO",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0564-espirito-santo.pdf"},{id:"lv565",n:565,t:"ALELUIA",tom:"L\xE1 Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0565-aleluia.pdf"},{id:"lv566",n:566,t:"CONHECI UM GRANDE AMIGO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0566-conheci-um-grande-amigo.pdf"},{id:"lv568",n:568,t:"SENHOR ME QUEIMA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0568-senhor-me-queima.pdf"},{id:"lv569",n:569,t:"S\xD3 EM TI VIVER",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0569-so-em-ti-viver.pdf"},{id:"lv570",n:570,t:"SENHOR, POE TEUS ANJOS AQUI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0570-senhor-poe-teus-anjos-aqui.pdf"},{id:"lv571",n:571,t:"EU NAVEGAREI",tom:"L\xE1 Menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0571-eu-navegarei.pdf"},{id:"lv576",n:576,t:"REUNIDOS AQUI",tom:"Sol Maior",m:"Entrada",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0576-reunidos-aqui.pdf"},{id:"lv577",n:577,t:"MEU DEUS \xC9 BOM PRA MIM",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0577-meu-deus-e-bom-pra-mim.pdf"},{id:"lv578",n:578,t:"ALELUIA",tom:"Sol Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0578-aleluia.pdf"},{id:"lv579",n:579,t:"ORAI SEM CESSAR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0579-orai-sem-cessar.pdf"},{id:"lv580",n:580,t:"SENHOR, TU ES O MEU DEUS FORTE",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0580-senhor-tu-es-o-meu-deus-forte.pdf"},{id:"lv581",n:581,t:"QUERO DIZER MEU SIM",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0581-quero-dizer-meu-sim.pdf"},{id:"lv582",n:582,t:"EU TE LOUVAREI",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0582-eu-te-louvarei.pdf"},{id:"lv583",n:583,t:"N\xC3O D\xC1 MAIS PRA VOLTAR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0583-nao-da-mais-pra-voltar.pdf"},{id:"lv584",n:584,t:"TE ENCONTREI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0584-te-encontrei.pdf"},{id:"lv585",n:585,t:"COMPROMISSO",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0585-compromisso.pdf"},{id:"lv587",n:587,t:"UM NOVO CAMINHO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0587-um-novo-caminho.pdf"},{id:"lv591",n:591,t:"DEUS PRECISA DE TI",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0591-deus-precisa-de-ti.pdf"},{id:"lv592",n:592,t:"GUARDA DE ISRAEL",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0592-guarda-de-israel.pdf"},{id:"lv593",n:593,t:"SALMO 22 - PELOS PRADOS",tom:"R\xE9 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0593-salmo-22-pelos-prados.pdf"},{id:"lv595",n:595,t:"TU \xC9S O CAMINHO",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0595-tu-es-o-caminho.pdf"},{id:"lv601",n:601,t:"QUANDO ELE RESSURGIU",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0601-quando-ele-ressurgiu.pdf"},{id:"lv602",n:602,t:"ACLAMEMOS AO SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0602-aclamemos-ao-senhor.pdf"},{id:"lv605",n:605,t:"GL\xD3RIA A DEUS",tom:"R\xE9 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0605-gloria-a-deus.pdf"},{id:"lv611",n:611,t:"CANTAI AO SENHOR UM CANTO DE LOUVOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0611-cantai-ao-senhor-um-canto-de-louvor.pdf"},{id:"lv613",n:613,t:"NO TEU SANTU\xC1RIO, SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0613-no-teu-santuario-senhor.pdf"},{id:"lv620",n:620,t:"EU TE LOUVAREI, SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0620-eu-te-louvarei-senhor.pdf"},{id:"lv621",n:621,t:"UMA COISA ESTOU SENTINDO AQUI AGORA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0621-uma-coisa-estou-sentindo-aqui-agora.pdf"},{id:"lv630",n:630,t:"NOSSO DEUS SOBERANO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0630-nosso-deus-soberano.pdf"},{id:"lv633",n:633,t:"LE\xC3O DA TRIBO DE JUD\xC1",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0633-leao-da-tribo-de-juda.pdf"},{id:"lv635",n:635,t:"VEM, AMIGO, VEM",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0635-vem-amigo-vem.pdf"},{id:"lv636",n:636,t:"DEUS HABITA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0636-deus-habita.pdf"},{id:"lv637",n:637,t:"PERDAO, SENHOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0637-perdao-senhor.pdf"},{id:"lv638",n:638,t:"SANTO",tom:"L\xE1 Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0638-santo.pdf"},{id:"lv639",n:639,t:"ALELUIA, QUANDO ESTAMOS UNIDOS",tom:"Mi Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0639-aleluia-quando-estamos-unidos.pdf"},{id:"lv642",n:642,t:"PAZ EM DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0642-paz-em-deus.pdf"},{id:"lv643",n:643,t:"FONTE DA VIDA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0643-fonte-da-vida.pdf"},{id:"lv645",n:645,t:"GL\xD3RIA",tom:"Mi menor",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0645-gloria.pdf"},{id:"lv647",n:647,t:"MEU CORA\xC7\xC3O PARA TI",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0647-meu-coracao-para-ti.pdf"},{id:"lv648",n:648,t:"VAMOS CELEBRAR COM J\xDABILO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0648-vamos-celebrar-com-jubilo.pdf"},{id:"lv650",n:650,t:"S\xD3 PODIA SER JESUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0650-so-podia-ser-jesus.pdf"},{id:"lv652",n:652,t:"CANTAI A DEUS COM ALEGRIA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0652-cantai-a-deus-com-alegria.pdf"},{id:"lv653",n:653,t:"ISRAEL, EIS O QUE DIZ O SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0653-israel-eis-o-que-diz-o-senhor.pdf"},{id:"lv654",n:654,t:"TAO SUBLIME SACRAMENTO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0654-tao-sublime-sacramento.pdf"},{id:"lv655",n:655,t:"AM\xC9M, ISSO MESMO AM\xC9M",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0655-amem-isso-mesmo-amem.pdf"},{id:"lv663",n:663,t:"QUERO TRANSFORMAR NUMA CAN\xC7AO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0663-quero-transformar-numa-cancao.pdf"},{id:"lv664",n:664,t:", BEN\xC7AO SOBRE BEN\xC7AO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0664-bencao-sobre-bencao.pdf"},{id:"lv666",n:666,t:"FOI NAS BODAS DE CAN\xC1",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0666-foi-nas-bodas-de-cana.pdf"},{id:"lv667",n:667,t:"COMO A COR\xC7A",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0667-como-a-corca.pdf"},{id:"lv668",n:668,t:"A TI, SENHOR",tom:"Mi maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0668-a-ti-senhor.pdf"},{id:"lv669",n:669,t:"\xC9S \xC1GUA VIVA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0669-es-agua-viva.pdf"},{id:"lv670",n:670,t:"QUERO MERGULHAR NAS PROFUNDEZAS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0670-quero-mergulhar-nas-profundezas.pdf"},{id:"lv671",n:671,t:"QUERO TE DAR A PAZ",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0671-quero-te-dar-a-paz.pdf"},{id:"lv672",n:672,t:"JESUS AMADO, TOCA EM MIM",tom:"D\xF3 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0672-jesus-amado-toca-em-mim.pdf"},{id:"lv674",n:674,t:"SERENA TEU NOME",tom:"F\xE1 #: menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0674-serena-teu-nome.pdf"},{id:"lv675",n:675,t:"AINDA QUE EU FALE A L\xCDNGUA DOS HOMENS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0675-ainda-que-eu-fale-a-lingua-dos-homens.pdf"},{id:"lv677",n:677,t:"VEM, ESP\xCDRITO SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0677-vem-espirito-senhor.pdf"},{id:"lv678",n:678,t:"EIS-ME AQUI, SENHOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0678-eis-me-aqui-senhor.pdf"},{id:"lv680",n:680,t:"AL\xC9M DO RIO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0680-alem-do-rio.pdf"},{id:"lv683",n:683,t:"PRESEN\xC7A DE JESUS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0683-presenca-de-jesus.pdf"},{id:"lv684",n:684,t:"SEM CORA\xC7AO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0684-sem-coracao.pdf"},{id:"lv685",n:685,t:"TE AMAREI",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0685-te-amarei.pdf"},{id:"lv686",n:686,t:"DOCE \xC9 SENTIR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0686-doce-e-sentir.pdf"},{id:"lv687",n:687,t:"CAN\xC7\xC3O \xC0 M\xC3E DE DEUS E NOSSA M\xC3E",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0687-cancao-a-mae-de-deus-e-nossa-mae.pdf"},{id:"lv688",n:688,t:"TU QUE RENOVAS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0688-tu-que-renovas.pdf"},{id:"lv689",n:689,t:"TRANSFIGURA\xC7AO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0689-transfiguracao.pdf"},{id:"lv690",n:690,t:"NOSSA SENHORA IMPLORA",tom:"Mi Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0690-nossa-senhora-implora.pdf"},{id:"lv691",n:691,t:"SALMO 22",tom:"Sol Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0691-salmo-22.pdf"},{id:"lv692",n:692,t:"JESUS O REI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0692-jesus-o-rei.pdf"},{id:"lv693",n:693,t:"NADA ME PERTURBE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0693-nada-me-perturbe.pdf"},{id:"lv694",n:694,t:"PAI DE MISERIC\xD3RDIA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0694-pai-de-misericordia.pdf"},{id:"lv695",n:695,t:"DEIXA QUE O SENHOR TE CURE",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0695-deixa-que-o-senhor-te-cure.pdf"},{id:"lv696",n:696,t:"\xD4, GL\xD3RIA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0696-o-gloria.pdf"},{id:"lv697",n:697,t:"LOUVADO SEJA SEMPRE O SENHOR JESUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0697-louvado-seja-sempre-o-senhor-jesus.pdf"},{id:"lv698",n:698,t:"GL\xD3RIA A JESUS NA H\xD3STIA SANTA",tom:"R\xE9 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0698-gloria-a-jesus-na-hostia-santa.pdf"},{id:"lv699",n:699,t:"VIVA A MAE DE DEUS E NOSSA",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0699-viva-a-mae-de-deus-e-nossa.pdf"},{id:"lv700",n:700,t:"CONSAGRA\xC7\xC3O \xC0 NOSSA SENHORA",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0700-consagracao-a-nossa-senhora.pdf"},{id:"lv701",n:701,t:"FA\xC7O NOVAS TODAS AS COISAS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0701-faco-novas-todas-as-coisas.pdf"},{id:"lv702",n:702,t:"FLUIR\xC1 COMO UM RIO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0702-fluira-como-um-rio.pdf"},{id:"lv703",n:703,t:"FLUI EM MIM",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0703-flui-em-mim.pdf"},{id:"lv704",n:704,t:"ESTENDO AS MAOS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0704-estendo-as-maos.pdf"},{id:"lv707",n:707,t:"S\xC3O JOS\xC9",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0707-sao-jose.pdf"},{id:"lv708",n:708,t:"MARIA, EXEMPLO DE AMOR",tom:"L\xE1 menor",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0708-maria-exemplo-de-amor.pdf"},{id:"lv709",n:709,t:"UMA ESTRELA IR\xC1 BRILHAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0709-uma-estrela-ira-brilhar.pdf"},{id:"lv710",n:710,t:"FONTE DE \xC1GUA VIVA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0710-fonte-de-agua-viva.pdf"},{id:"lv711",n:711,t:"PAO E VINHO, PAI, POREMOS",tom:"F\xE1 Maior",m:"Ofert\xF3rio",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0711-pao-e-vinho-pai-poremos.pdf"},{id:"lv712",n:712,t:"SENHOR, VEM DAR-NOS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0712-senhor-vem-dar-nos.pdf"},{id:"lv713",n:713,t:"SANTO",tom:"Sol Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0713-santo.pdf"},{id:"lv714",n:714,t:"CORDEIRO DE DEUS",tom:"Sol Maior",m:"Cordeiro",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0714-cordeiro-de-deus.pdf"},{id:"lv715",n:715,t:"PODES REINAR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0715-podes-reinar.pdf"},{id:"lv718",n:718,t:"DEUS \xC9 A SOLU\xC7\xC3O",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0718-deus-e-a-solucao.pdf"},{id:"lv719",n:719,t:"VIDA TRANSFORMADA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0719-vida-transformada.pdf"},{id:"lv720",n:720,t:"BENDITO, LOUVADO SEJA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0720-bendito-louvado-seja.pdf"},{id:"lv722",n:722,t:"CANTO DE PAZ",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0722-canto-de-paz.pdf"},{id:"lv723",n:723,t:"LOUVADO SEJA O TEU NOME",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0723-louvado-seja-o-teu-nome.pdf"},{id:"lv724",n:724,t:"QUEM \xC9 ESTA QUE AVAN\xC7A",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0724-quem-e-esta-que-avanca.pdf"},{id:"lv725",n:725,t:"DEUS TRINO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0725-deus-trino.pdf"},{id:"lv726",n:726,t:"ABRE BEM OS TEUS BRA\xC7OS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0726-abre-bem-os-teus-bracos.pdf"},{id:"lv727",n:727,t:"H\xC1 AMOR EM MIM",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0727-ha-amor-em-mim.pdf"},{id:"lv728",n:728,t:"SONHO DE PAZ",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0728-sonho-de-paz.pdf"},{id:"lv729",n:729,t:"NINGU\xC9M TE AMA COMO EU",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0729-ninguem-te-ama-como-eu.pdf"},{id:"lv730",n:730,t:"RENOVA-ME",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0730-renova-me.pdf"},{id:"lv731",n:731,t:"CAN\xC7AO DA UNIDADE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0731-cancao-da-unidade.pdf"},{id:"lv732",n:732,t:"VENCEREI EU",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0732-vencerei-eu.pdf"},{id:"lv734",n:734,t:"SOPRA EM MIM",tom:"",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0734-sopra-em-mim.pdf"},{id:"lv735",n:735,t:"AMAR-TE MAIS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0735-amar-te-mais.pdf"},{id:"lv736",n:736,t:"MEU DEUS, MEU TUDO",tom:"",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0736-meu-deus-meu-tudo.pdf"},{id:"lv737",n:737,t:"ENCONTREI A LUZ",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0737-encontrei-a-luz.pdf"},{id:"lv738",n:738,t:"SALMO 120",tom:"R\xE9 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0738-salmo-120.pdf"},{id:"lv740",n:740,t:"ENTREGA-TE A JESUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0740-entrega-te-a-jesus.pdf"},{id:"lv741",n:741,t:"ESTA A GENTE QUE LOUVA O SENHOR",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0741-esta-a-gente-que-louva-o-senhor.pdf"},{id:"lv742",n:742,t:"AER\xD3BICA DO SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0742-aerobica-do-senhor.pdf"},{id:"lv743",n:743,t:"SENTIMENTOS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0743-sentimentos.pdf"},{id:"lv744",n:744,t:"CANTAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0744-cantar.pdf"},{id:"lv745",n:745,t:"EVANGELIZAR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0745-evangelizar.pdf"},{id:"lv747",n:747,t:"TARDE TE AMEI",tom:"D\xF3 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0747-tarde-te-amei.pdf"},{id:"lv748",n:748,t:"ANUNCIA\xC7AO DE MARIA",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0748-anunciacao-de-maria.pdf"},{id:"lv749",n:749,t:"MESTRE",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0749-mestre.pdf"},{id:"lv750",n:750,t:"CONHE\xC7O UM CORA\xC7A\xDC",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0750-conheco-um-coracau.pdf"},{id:"lv751",n:751,t:"ESTOU VOLTANDO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0751-estou-voltando.pdf"},{id:"lv752",n:752,t:"ORA\xC7AO DE CURA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0752-oracao-de-cura.pdf"},{id:"lv753",n:753,t:"ESTOU COM TUDO",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0753-estou-com-tudo.pdf"},{id:"lv754",n:754,t:"DEUS DE AMOR",tom:"Sol menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0754-deus-de-amor.pdf"},{id:"lv755",n:755,t:"TEMPO DE RECOME\xC7AR",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0755-tempo-de-recomecar.pdf"},{id:"lv757",n:757,t:"SOLDADO DO AMOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0757-soldado-do-amor.pdf"},{id:"lv758",n:758,t:"TOQUEM AS TROMBETAS",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0758-toquem-as-trombetas.pdf"},{id:"lv759",n:759,t:"FALA EM NOSSOS CORA\xC7OES",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0759-fala-em-nossos-coracoes.pdf"},{id:"lv760",n:760,t:"JOAO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0760-joao.pdf"},{id:"lv761",n:761,t:"SEU NOME JESUS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0761-seu-nome-jesus.pdf"},{id:"lv762",n:762,t:"HEY VOC\xCA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0762-hey-voce.pdf"},{id:"lv763",n:763,t:"ELE E JESUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0763-ele-e-jesus.pdf"},{id:"lv764",n:764,t:"VIRGEM DO SIL\xCANCIO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0764-virgem-do-silencio.pdf"},{id:"lv765",n:765,t:"TEU EVANGELHO, MEU CANTO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0765-teu-evangelho-meu-canto.pdf"},{id:"lv766",n:766,t:"DO POVO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0766-do-povo.pdf"},{id:"lv767",n:767,t:"SANTO ANJO",tom:"R\xE9 Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0767-santo-anjo.pdf"},{id:"lv768",n:768,t:"SANTO",tom:"Sol menor",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0768-santo.pdf"},{id:"lv769",n:769,t:"GL\xD3RIA",tom:"D\xF3 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0769-gloria.pdf"},{id:"lv770",n:770,t:"SANTO",tom:"D\xF3 Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0770-santo.pdf"},{id:"lv771",n:771,t:"A B\xCDBLIA A PALAVRA DE DEUS",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0771-a-biblia-a-palavra-de-deus.pdf"},{id:"lv772",n:772,t:"NO PRINC\xCDPIO ERA A PALAVRA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0772-no-principio-era-a-palavra.pdf"},{id:"lv773",n:773,t:"NUMA TERRA DISTANTE DAQUI",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0773-numa-terra-distante-daqui.pdf"},{id:"lv774",n:774,t:"FELIZ O HOMEM QUE AMA O SENHOR",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0774-feliz-o-homem-que-ama-o-senhor.pdf"},{id:"lv775",n:775,t:"DOU GRA\xC7AS AO SENHOR PORQUE ELE BOM",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0775-dou-gracas-ao-senhor-porque-ele-bom.pdf"},{id:"lv776",n:776,t:"N\xC3O H\xC1 MEDO, INCERTEZA OU CANSA\xC7O",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0776-nao-ha-medo-incerteza-ou-cansaco.pdf"},{id:"lv777",n:777,t:"VINDE ESP\xCDRITO DE DEUS",tom:"D\xF3 Maior",m:"Entrada",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0777-vinde-espirito-de-deus.pdf"},{id:"lv778",n:778,t:"O MEU ESP\xCDRITO CONDUZ",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0778-o-meu-espirito-conduz.pdf"},{id:"lv779",n:779,t:"\xD3 PAI, QUE PELO ESP\xCDRITO",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0779-o-pai-que-pelo-espirito.pdf"},{id:"lv780",n:780,t:"CANTAR A BELEZA DA VIDA",tom:"Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0780-cantar-a-beleza-da-vida.pdf"},{id:"lv781",n:781,t:"OS PANOS DOBRADOS NO CHAO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0781-os-panos-dobrados-no-chao.pdf"},{id:"lv782",n:782,t:"\xD3 SENHOR, N\xD3S ESTAMOS AQUI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0782-o-senhor-nos-estamos-aqui.pdf"},{id:"lv783",n:783,t:"A VOSSA PALAVRA, SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0783-a-vossa-palavra-senhor.pdf"},{id:"lv784",n:784,t:"E PROVA DE AMOR",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0784-e-prova-de-amor.pdf"},{id:"lv785",n:785,t:"NA MESA SAGRADA",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0785-na-mesa-sagrada.pdf"},{id:"lv786",n:786,t:"JUNTOS VAMOS PARA A LUTA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0786-juntos-vamos-para-a-luta.pdf"},{id:"lv787",n:787,t:"SABE QUANTO CUSTA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0787-sabe-quanto-custa.pdf"},{id:"lv788",n:788,t:"CONVITE GENTIL",tom:"Si menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0788-convite-gentil.pdf"},{id:"lv789",n:789,t:"MINHA REDE TAO VAZIA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0789-minha-rede-tao-vazia.pdf"},{id:"lv790",n:790,t:"ELA MUITO AMOU",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0790-ela-muito-amou.pdf"},{id:"lv791",n:791,t:"O MEU REINO TEM MUITO A DIZER",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0791-o-meu-reino-tem-muito-a-dizer.pdf"},{id:"lv792",n:792,t:"O AMOR DE DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0792-o-amor-de-deus.pdf"},{id:"lv793",n:793,t:"BOM TER FAM\xCDLIA",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0793-bom-ter-familia.pdf"},{id:"lv794",n:794,t:"ORA\xC7\xC3O PELA FAM\xCDLIA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0794-oracao-pela-familia.pdf"},{id:"lv795",n:795,t:"MEIGO OLHAR",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0795-meigo-olhar.pdf"},{id:"lv796",n:796,t:"TU \xC9S A RAZ\xC3O DA JORNADA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0796-tu-es-a-razao-da-jornada.pdf"},{id:"lv797",n:797,t:"TEMPO DE VOLTAR",tom:"",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0797-tempo-de-voltar.pdf"},{id:"lv798",n:798,t:"CONVERSAO",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0798-conversao.pdf"},{id:"lv799",n:799,t:"VEM, SANTO ESP\xCDRITO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0799-vem-santo-espirito.pdf"},{id:"lv800",n:800,t:"EU PRECISO DE VOC\xCA",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0800-eu-preciso-de-voce.pdf"},{id:"lv802",n:802,t:"EU TE LOUVAREI",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0802-eu-te-louvarei.pdf"},{id:"lv803",n:803,t:"SANTO ANJO DO SENHOR",tom:"Mi Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0803-santo-anjo-do-senhor.pdf"},{id:"lv804",n:804,t:"C\xC2NTICO DE DANIEL",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0804-cantico-de-daniel.pdf"},{id:"lv805",n:805,t:"ERGUEI AS MAOS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0805-erguei-as-maos.pdf"},{id:"lv806",n:806,t:"ALELUIA",tom:"R\xE9 menor",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0806-aleluia.pdf"},{id:"lv807",n:807,t:"CONSAGRA\xC7\xC0O \xC0 N. SRA. APARECIDA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0807-consagracao-a-n-sra-aparecida.pdf"},{id:"lv808",n:808,t:"VENHO A TI, SENHOR JESUS!",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0808-venho-a-ti-senhor-jesus.pdf"},{id:"lv809",n:809,t:"PROCISS\xC3O DA B\xCDBLIA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0809-procissao-da-biblia.pdf"},{id:"lv812",n:812,t:"VENTO DO ESP\xCDRITO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0812-vento-do-espirito.pdf"},{id:"lv813",n:813,t:"TENDA DO SENHOR",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0813-tenda-do-senhor.pdf"},{id:"lv814",n:814,t:"VEM, VEM LOUVAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0814-vem-vem-louvar.pdf"},{id:"lv815",n:815,t:"EU TE EXALTAREI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0815-eu-te-exaltarei.pdf"},{id:"lv816",n:816,t:"EU QUISERA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0816-eu-quisera.pdf"},{id:"lv817",n:817,t:"SEGREDO DE MAE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0817-segredo-de-mae.pdf"},{id:"lv818",n:818,t:"VOU CANTAR TEU AMOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0818-vou-cantar-teu-amor.pdf"},{id:"lv819",n:819,t:"CAN\xC7AO DE EXALTA\xC7AO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0819-cancao-de-exaltacao.pdf"},{id:"lv820",n:820,t:"POR QUE AMO MARIA",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0820-por-que-amo-maria.pdf"},{id:"lv821",n:821,t:"CAMINHANDO COM MARIA",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0821-caminhando-com-maria.pdf"},{id:"lv822",n:822,t:"O SENHOR REI",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0822-o-senhor-rei.pdf"},{id:"lv823",n:823,t:"VIA SACRA",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0823-via-sacra.pdf"},{id:"lv824",n:824,t:"SALMO 68 - DEUS SE LEVANTA",tom:"R\xE9 menor",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0824-salmo-68-deus-se-levanta.pdf"},{id:"lv825",n:825,t:"BEN\xC7\xC3O",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0825-bencao.pdf"},{id:"lv826",n:826,t:"VEM, ESPIRITO SANTO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0826-vem-espirito-santo.pdf"},{id:"lv827",n:827,t:"CONFIA NO SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0827-confia-no-senhor.pdf"},{id:"lv829",n:829,t:"MAE DO CEU MORENA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0829-mae-do-ceu-morena.pdf"},{id:"lv830",n:830,t:"NOVA GERA\xC7\xC3O",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0830-nova-geracao.pdf"},{id:"lv831",n:831,t:"SEU NOME E JESUS CRISTO",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0831-seu-nome-e-jesus-cristo.pdf"},{id:"lv832",n:832,t:"O VIAJANTE",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0832-o-viajante.pdf"},{id:"lv833",n:833,t:"NA FOR\xC7A DA ORA\xC7\xC3O",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0833-na-forca-da-oracao.pdf"},{id:"lv834",n:834,t:"A TI, MEU DEUS (Salmo 25)",tom:"F\xE1 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0834-a-ti-meu-deus-salmo-25.pdf"},{id:"lv835",n:835,t:"VOU CANTAR (Salmo 65)",tom:"",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0835-vou-cantar-salmo-65.pdf"},{id:"lv836",n:836,t:"KAIROS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0836-kairos.pdf"},{id:"lv837",n:837,t:"LOUVAI A DEUS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0837-louvai-a-deus.pdf"},{id:"lv838",n:838,t:"P\xC3O DA VIDA",tom:"Sol Maior",m:"Comunh\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0838-pao-da-vida.pdf"},{id:"lv839",n:839,t:"EU E MINHA CASA SERVIREMOS AO SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0839-eu-e-minha-casa-serviremos-ao-senhor.pdf"},{id:"lv840",n:840,t:"MORREU POR VOC\xCA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0840-morreu-por-voce.pdf"},{id:"lv841",n:841,t:"EU PRECISO DE VOC\xCA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0841-eu-preciso-de-voce.pdf"},{id:"lv842",n:842,t:"AMOR MAIOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0842-amor-maior.pdf"},{id:"lv843",n:843,t:"MAE DO NOVO HOMEM",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0843-mae-do-novo-homem.pdf"},{id:"lv844",n:844,t:"AMIGO CERTO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0844-amigo-certo.pdf"},{id:"lv845",n:845,t:"A MESA SANTA QUE PREPARAMOS",tom:"Si bemol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0845-a-mesa-santa-que-preparamos.pdf"},{id:"lv846",n:846,t:"ORA\xC7AO PELA PAZ",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0846-oracao-pela-paz.pdf"},{id:"lv847",n:847,t:"MARIA NAS BODAS DE CAN\xC1",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0847-maria-nas-bodas-de-cana.pdf"},{id:"lv848",n:848,t:"AONDE IREMOS NOS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0848-aonde-iremos-nos.pdf"},{id:"lv849",n:849,t:"LEVANTO AS MAOS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0849-levanto-as-maos.pdf"},{id:"lv850",n:850,t:"MEU CORA\xC7AO PERTENCE A TI",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0850-meu-coracao-pertence-a-ti.pdf"},{id:"lv851",n:851,t:"SEI DE ALGU\xC9M",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0851-sei-de-alguem.pdf"},{id:"lv852",n:852,t:"SALMO DO MATRIM\xD4NIO",tom:"Sol Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0852-salmo-do-matrimonio.pdf"},{id:"lv853",n:853,t:"SE VOC\xCA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0853-se-voce.pdf"},{id:"lv854",n:854,t:"GRAVA-ME",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0854-grava-me.pdf"},{id:"lv855",n:855,t:"TU ES A FONTE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0855-tu-es-a-fonte.pdf"},{id:"lv856",n:856,t:"MARIA, MINHA MAE",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0856-maria-minha-mae.pdf"},{id:"lv857",n:857,t:"RAINHA DA PAZ",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0857-rainha-da-paz.pdf"},{id:"lv858",n:858,t:"ABRE O CORA\xC7AO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0858-abre-o-coracao.pdf"},{id:"lv859",n:859,t:"O PERDAO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0859-o-perdao.pdf"},{id:"lv860",n:860,t:"LOUVAR, CANTAR, DAN\xC7AR E BENDIZER",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0860-louvar-cantar-dancar-e-bendizer.pdf"},{id:"lv861",n:861,t:"RECADO DE DEUS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0861-recado-de-deus.pdf"},{id:"lv862",n:862,t:"CURA-ME, SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0862-cura-me-senhor.pdf"},{id:"lv863",n:863,t:"ELE \xC9 FIEL",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0863-ele-e-fiel.pdf"},{id:"lv864",n:864,t:"ALEGRAI-VOS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0864-alegrai-vos.pdf"},{id:"lv865",n:865,t:"SANT\xCDSSIMO SACRAMENTO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0865-santissimo-sacramento.pdf"},{id:"lv866",n:866,t:"O SENHOR NOS TEM AMADO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0866-o-senhor-nos-tem-amado.pdf"},{id:"lv868",n:868,t:"MARIA, MINHA MAE, MARIA",tom:"Mi menor",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0868-maria-minha-mae-maria.pdf"},{id:"lv871",n:871,t:"OLHAI POR N\xD3S",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0871-olhai-por-nos.pdf"},{id:"lv872",n:872,t:"NOSSA SENHORA",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0872-nossa-senhora.pdf"},{id:"lv873",n:873,t:"ABEN\xC7OA, JESUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0873-abencoa-jesus.pdf"},{id:"lv874",n:874,t:"LIBERTA-ME",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0874-liberta-me.pdf"},{id:"lv875",n:875,t:"CURA, SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0875-cura-senhor.pdf"},{id:"lv876",n:876,t:"UM GRANDE CORA\xC7AO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0876-um-grande-coracao.pdf"},{id:"lv877",n:877,t:"GL\xD3RIA AO NOSSO DEUS",tom:"L\xE1 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0877-gloria-ao-nosso-deus.pdf"},{id:"lv878",n:878,t:"VEM, ESP\xCDRITO SANTO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0878-vem-espirito-santo.pdf"},{id:"lv879",n:879,t:"BEM AVENTURADA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0879-bem-aventurada.pdf"},{id:"lv880",n:880,t:"VENHO, SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0880-venho-senhor.pdf"},{id:"lv881",n:881,t:"QUEM N\xC3O TE LOUVAR\xC1",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0881-quem-nao-te-louvara.pdf"},{id:"lv882",n:882,t:"OBRA NOVA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0882-obra-nova.pdf"},{id:"lv883",n:883,t:"DE CORA\xC7AO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0883-de-coracao.pdf"},{id:"lv884",n:884,t:"VINDE, ESPIRITO SANTO",tom:"D\xF3 Maior",m:"Entrada",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0884-vinde-espirito-santo.pdf"},{id:"lv885",n:885,t:"BLUES DO SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0885-blues-do-senhor.pdf"},{id:"lv886",n:886,t:"EU TE CHAMO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0886-eu-te-chamo.pdf"},{id:"lv887",n:887,t:"ALGUM TEMPO ATR\xC1S",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0887-algum-tempo-atras.pdf"},{id:"lv889",n:889,t:"QUERO TE AMAR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0889-quero-te-amar.pdf"},{id:"lv890",n:890,t:"M\xC3E DA PROVID\xCANCIA",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0890-mae-da-providencia.pdf"},{id:"lv891",n:891,t:"SUBLIME AMOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0891-sublime-amor.pdf"},{id:"lv892",n:892,t:"TUDO SABES DE MIM",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0892-tudo-sabes-de-mim.pdf"},{id:"lv893",n:893,t:"DEUS EXISTE",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0893-deus-existe.pdf"},{id:"lv894",n:894,t:"DEUS EST\xC1 COM SAUDADES DE VOC\xCA",tom:"F\xE1 # menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0894-deus-esta-com-saudades-de-voce.pdf"},{id:"lv895",n:895,t:"PRECE MARIA",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0895-prece-maria.pdf"},{id:"lv896",n:896,t:"NAO TEMAS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0896-nao-temas.pdf"},{id:"lv897",n:897,t:"TEU OLHAR",tom:"D\xF3 Menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0897-teu-olhar.pdf"},{id:"lv898",n:898,t:"VOU REPOUSAR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0898-vou-repousar.pdf"},{id:"lv900",n:900,t:"D\xCA UM SORRISO",tom:"Si menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0900-de-um-sorriso.pdf"},{id:"lv901",n:901,t:"DEUS DE DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0901-deus-de-deus.pdf"},{id:"lv902",n:902,t:"TEU CORA\xC7AO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0902-teu-coracao.pdf"},{id:"lv903",n:903,t:"SALMO 147",tom:"Sol Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0903-salmo-147.pdf"},{id:"lv904",n:904,t:"CREIO EM TI, SENHOR",tom:"D\xF3Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0904-creio-em-ti-senhor.pdf"},{id:"lv907",n:907,t:"NAS MAOS DO OLEIRO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0907-nas-maos-do-oleiro.pdf"},{id:"lv908",n:908,t:"SEMPRE MARIA",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0908-sempre-maria.pdf"},{id:"lv909",n:909,t:"TENHO ORADO COM MARIA",tom:"Mi Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0909-tenho-orado-com-maria.pdf"},{id:"lv910",n:910,t:"TODAS AS GERA\xC7OES",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0910-todas-as-geracoes.pdf"},{id:"lv911",n:911,t:"VOSSA PROTE\xC7\xC3O",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0911-vossa-protecao.pdf"},{id:"lv912",n:912,t:"MARIA",tom:"Sol Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0912-maria.pdf"},{id:"lv913",n:913,t:"M\xC3EZINHA DO C\xC9U",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0913-maezinha-do-ceu.pdf"},{id:"lv914",n:914,t:"V\xD3S SOIS MEU PASTOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0914-vos-sois-meu-pastor.pdf"},{id:"lv915",n:915,t:"PROVA DE AMOR",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0915-prova-de-amor.pdf"},{id:"lv916",n:916,t:"CORA\xC7\xC3O SANTO, TU REINAR\xC1S",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0916-coracao-santo-tu-reinaras.pdf"},{id:"lv917",n:917,t:"COM MINHA MAE ESTAREI",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0917-com-minha-mae-estarei.pdf"},{id:"lv918",n:918,t:"CANTEMOS A JESUS SACRAMENTADO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0918-cantemos-a-jesus-sacramentado.pdf"},{id:"lv919",n:919,t:"BENDITA E LOUVADA SEJA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0919-bendita-e-louvada-seja.pdf"},{id:"lv920",n:920,t:"LOUVANDO MARIA",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0920-louvando-maria.pdf"},{id:"lv921",n:921,t:"SIL\xCANCIO",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0921-silencio.pdf"},{id:"lv922",n:922,t:"LENTA E CALMA SOBRE A TERRA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0922-lenta-e-calma-sobre-a-terra.pdf"},{id:"lv923",n:923,t:"AVE MARIA",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0923-ave-maria.pdf"},{id:"lv924",n:924,t:"ESTRELA MARIA",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0924-estrela-maria.pdf"},{id:"lv925",n:925,t:"GL\xD3RIA AO TRINO DEUS",tom:"Sol Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0925-gloria-ao-trino-deus.pdf"},{id:"lv926",n:926,t:"O CHAMADO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0926-o-chamado.pdf"},{id:"lv927",n:927,t:"QUERO TE LOUVAR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0927-quero-te-louvar.pdf"},{id:"lv928",n:928,t:"VEM, SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0928-vem-senhor.pdf"},{id:"lv929",n:929,t:"PENTECOSTES",tom:"F\xE1 # menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0929-pentecostes.pdf"},{id:"lv930",n:930,t:"PRINC\xEDPIO E FIM",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0930-principio-e-fim.pdf"},{id:"lv931",n:931,t:"LIVRA-ME, SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0931-livra-me-senhor.pdf"},{id:"lv932",n:932,t:"CONVITE PAZ",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0932-convite-paz.pdf"},{id:"lv933",n:933,t:"NAO FIQUE ASSIM",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0933-nao-fique-assim.pdf"},{id:"lv934",n:934,t:"BEM AVENTURADOS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0934-bem-aventurados.pdf"},{id:"lv935",n:935,t:"MENSAGEIRO DA PAZ",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0935-mensageiro-da-paz.pdf"},{id:"lv936",n:936,t:"NO TEU SANTU\xC1RIO",tom:"F\xE1 # menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0936-no-teu-santuario.pdf"},{id:"lv937",n:937,t:"MAE PEREGRINA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0937-mae-peregrina.pdf"},{id:"lv938",n:938,t:"QUEM \xC9 ESTA SENHORA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0938-quem-e-esta-senhora.pdf"},{id:"lv940",n:940,t:"FARISEU E PUBLICANO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0940-fariseu-e-publicano.pdf"},{id:"lv941",n:941,t:"PALAVRA DE SALVA\xC7AO",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0941-palavra-de-salvacao.pdf"},{id:"lv942",n:942,t:"DAQUI DO MEU LUGAR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0942-daqui-do-meu-lugar.pdf"},{id:"lv943",n:943,t:"EU NAO SOU DIGNO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0943-eu-nao-sou-digno.pdf"},{id:"lv944",n:944,t:"FAM\xCDLIAS DO BRASIL",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0944-familias-do-brasil.pdf"},{id:"lv945",n:945,t:"PERFEITO E QUEM TE CRIOU",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0945-perfeito-e-quem-te-criou.pdf"},{id:"lv946",n:946,t:"PRESEN\xC7A E VIDA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0946-presenca-e-vida.pdf"},{id:"lv947",n:947,t:"AMOR ETERNO",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0947-amor-eterno.pdf"},{id:"lv948",n:948,t:"OBRA NOVA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0948-obra-nova.pdf"},{id:"lv949",n:949,t:"OBRIGADO, SENHOR",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0949-obrigado-senhor.pdf"},{id:"lv950",n:950,t:"FORTE E PODEROSO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0950-forte-e-poderoso.pdf"},{id:"lv951",n:951,t:"AT\xC9 QUANDO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0951-ate-quando.pdf"},{id:"lv952",n:952,t:"MEU ESCUDO, MEU ROCHEDO",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0952-meu-escudo-meu-rochedo.pdf"},{id:"lv954",n:954,t:"BEM AVENTURADOS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0954-bem-aventurados.pdf"},{id:"lv955",n:955,t:"CRIA\xC7AO",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0955-criacao.pdf"},{id:"lv956",n:956,t:"FOGO SANTO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0956-fogo-santo.pdf"},{id:"lv957",n:957,t:"AMOR PERDIDO",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0957-amor-perdido.pdf"},{id:"lv958",n:958,t:"SONDA-ME",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0958-sonda-me.pdf"},{id:"lv959",n:959,t:"C\xC9U NA TERRA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0959-ceu-na-terra.pdf"},{id:"lv960",n:960,t:"VEM LOUVAR",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0960-vem-louvar.pdf"},{id:"lv961",n:961,t:"PERDOA-ME, SENHOR",tom:"Sol Maior",m:"Ato Penitencial",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0961-perdoa-me-senhor.pdf"},{id:"lv962",n:962,t:"MARIA, MAE DA FE",tom:"Mi Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0962-maria-mae-da-fe.pdf"},{id:"lv963",n:963,t:"CANTE EM PAZ",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0963-cante-em-paz.pdf"},{id:"lv965",n:965,t:"\xC9 BOM LOUVAR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0965-e-bom-louvar.pdf"},{id:"lv966",n:966,t:"SOBERANO SENHOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0966-soberano-senhor.pdf"},{id:"lv967",n:967,t:"SALVE RAINHA",tom:"Sol Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0967-salve-rainha.pdf"},{id:"lv968",n:968,t:"DIVINO PASTOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0968-divino-pastor.pdf"},{id:"lv969",n:969,t:"GL\xD3RIA",tom:"L\xE1 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0969-gloria.pdf"},{id:"lv970",n:970,t:"DIZEI UMA PALAVRA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0970-dizei-uma-palavra.pdf"},{id:"lv971",n:971,t:"NOVA PESSOA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0971-nova-pessoa.pdf"},{id:"lv972",n:972,t:"CANTE AO SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0972-cante-ao-senhor.pdf"},{id:"lv973",n:973,t:"O PODER DO LOUVOR",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0973-o-poder-do-louvor.pdf"},{id:"lv974",n:974,t:"UM GRANDE LOUVOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0974-um-grande-louvor.pdf"},{id:"lv975",n:975,t:"SANT\xCDSSIMA TRINDADE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0975-santissima-trindade.pdf"},{id:"lv976",n:976,t:"NA TUA PRESEN\xC7A",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0976-na-tua-presenca.pdf"},{id:"lv977",n:977,t:"OS MISTERIOS DO TER\xC7O",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0977-os-misterios-do-terco.pdf"},{id:"lv978",n:978,t:"QUEM ME TOCOU",tom:"Si menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0978-quem-me-tocou.pdf"},{id:"lv980",n:980,t:"CANTE CONOSCO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0980-cante-conosco.pdf"},{id:"lv981",n:981,t:"AH, SE O POVO DE DEUS",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0981-ah-se-o-povo-de-deus.pdf"},{id:"lv982",n:982,t:"MAE AMOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0982-mae-amor.pdf"},{id:"lv983",n:983,t:"TU \xC9S A SOLU\xC7\xC3O",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0983-tu-es-a-solucao.pdf"},{id:"lv984",n:984,t:"BRA\xC7OS ABERTOS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0984-bracos-abertos.pdf"},{id:"lv985",n:985,t:"S\xD3 JESUS",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0985-so-jesus.pdf"},{id:"lv986",n:986,t:"PRA TE LOUVAR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0986-pra-te-louvar.pdf"},{id:"lv987",n:987,t:"O PO\xC7O",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0987-o-poco.pdf"},{id:"lv988",n:988,t:"ALELUIA, DANCE",tom:"L\xE1 menor",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0988-aleluia-dance.pdf"},{id:"lv989",n:989,t:"IMENSO AMOR",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0989-imenso-amor.pdf"},{id:"lv990",n:990,t:"VINDE A MIM",tom:"L\xE1 Maior",m:"Entrada",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0990-vinde-a-mim.pdf"},{id:"lv991",n:991,t:"CALMARIA",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0991-calmaria.pdf"},{id:"lv992",n:992,t:"CHEIA DE GRA\xC7A",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0992-cheia-de-graca.pdf"},{id:"lv993",n:993,t:"ME D\xC1 TEU CORA\xC7\xC3O",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0993-me-da-teu-coracao.pdf"},{id:"lv995",n:995,t:"DEUS, QUERO LOUVAR-TE",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0995-deus-quero-louvar-te.pdf"},{id:"lv996",n:996,t:"CELEBRA A VIT\xD3RIA",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0996-celebra-a-vitoria.pdf"},{id:"lv997",n:997,t:"COMO \xC9S LINDO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0997-como-es-lindo.pdf"},{id:"lv998",n:998,t:"DECLARAMOS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0998-declaramos.pdf"},{id:"lv999",n:999,t:"JESUS \xC9 O SENHOR!",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/0999-jesus-e-o-senhor.pdf"},{id:"lv1000",n:1e3,t:"SEDE SANTOS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1000-sede-santos.pdf"},{id:"lv1001",n:1001,t:"ETERNAMENTE",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1001-eternamente.pdf"},{id:"lv1002",n:1002,t:"PROFETA DO AMOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1002-profeta-do-amor.pdf"},{id:"lv1003",n:1003,t:"LEVANTA-ME, SENHOR JESUS!",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1003-levanta-me-senhor-jesus.pdf"},{id:"lv1004",n:1004,t:"TODO TEU",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1004-todo-teu.pdf"},{id:"lv1005",n:1005,t:"EXALTAI, BENDIZEI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1005-exaltai-bendizei.pdf"},{id:"lv1006",n:1006,t:"CALOR DE PAI",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1006-calor-de-pai.pdf"},{id:"lv1007",n:1007,t:"HINO AO AMOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1007-hino-ao-amor.pdf"},{id:"lv1008",n:1008,t:"CRISTO \xC9 MINHA VIDA",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1008-cristo-e-minha-vida.pdf"},{id:"lv1009",n:1009,t:"S\xD3 EM DEUS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1009-so-em-deus.pdf"},{id:"lv1010",n:1010,t:"DESPERTA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1010-desperta.pdf"},{id:"lv1011",n:1011,t:"MINH'ALMA RENASCEU",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1011-minh-alma-renasceu.pdf"},{id:"lv1012",n:1012,t:"VEM PRA CRISTO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1012-vem-pra-cristo.pdf"},{id:"lv1013",n:1013,t:"VENHO, SENHOR, OFERECER",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1013-venho-senhor-oferecer.pdf"},{id:"lv1014",n:1014,t:"ESP\xCDRITO SANTO DE DEUS",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1014-espirito-santo-de-deus.pdf"},{id:"lv1015",n:1015,t:"EU CREIO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1015-eu-creio.pdf"},{id:"lv1016",n:1016,t:"ORA\xC7\xC3O DE SANTO IN\xC1CIO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1016-oracao-de-santo-inacio.pdf"},{id:"lv1017",n:1017,t:"VAMOS TODOS LOUVAR",tom:"F\xE1 # menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1017-vamos-todos-louvar.pdf"},{id:"lv1018",n:1018,t:"NOVA VIDA, NOVO TEMPO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1018-nova-vida-novo-tempo.pdf"},{id:"lv1019",n:1019,t:"CAN\xC7\xC3O DO ESP\xCDRITO SANTO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1019-cancao-do-espirito-santo.pdf"},{id:"lv1020",n:1020,t:"ESTRELA DA MANHA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1020-estrela-da-manha.pdf"},{id:"lv1021",n:1021,t:"UM TAL JESUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1021-um-tal-jesus.pdf"},{id:"lv1022",n:1022,t:"DEIXA DEUS FAZER",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1022-deixa-deus-fazer.pdf"},{id:"lv1023",n:1023,t:"MARIA DE DEUS, SENHORA DA PAZ",tom:"Sol Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1023-maria-de-deus-senhora-da-paz.pdf"},{id:"lv1024",n:1024,t:"VEM, ESP\xCDRITO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1024-vem-espirito.pdf"},{id:"lv1025",n:1025,t:"SENHORA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1025-senhora.pdf"},{id:"lv1026",n:1026,t:"ALEGRAI-VOS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1026-alegrai-vos.pdf"},{id:"lv1027",n:1027,t:"FICA COMIGO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1027-fica-comigo.pdf"},{id:"lv1028",n:1028,t:"SALMO 132",tom:"D\xF3 Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1028-salmo-132.pdf"},{id:"lv1029",n:1029,t:"SHALOM",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1029-shalom.pdf"},{id:"lv1030",n:1030,t:"FEITO PARA AMAR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1030-feito-para-amar.pdf"},{id:"lv1031",n:1031,t:"QUERO E PRECISO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1031-quero-e-preciso.pdf"},{id:"lv1032",n:1032,t:"EU N\xC3O QUERO S\xD3 DIZER AM\xC9M",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1032-eu-nao-quero-so-dizer-amem.pdf"},{id:"lv1033",n:1033,t:"INUNDA MEU SER",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1033-inunda-meu-ser.pdf"},{id:"lv1034",n:1034,t:"NA CRUZ COM CRISTO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1034-na-cruz-com-cristo.pdf"},{id:"lv1035",n:1035,t:"DE MAOS UNIDAS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1035-de-maos-unidas.pdf"},{id:"lv1036",n:1036,t:"TUDO PODE SER MUDADO PELA ORA\xC7AO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1036-tudo-pode-ser-mudado-pela-oracao.pdf"},{id:"lv1037",n:1037,t:"PAO DA VIDA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1037-pao-da-vida.pdf"},{id:"lv1038",n:1038,t:"QUE SANTIDADE DE VIDA!",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1038-que-santidade-de-vida.pdf"},{id:"lv1039",n:1039,t:"COMO LINDA A NOSSA FAM\xCDLIA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1039-como-linda-a-nossa-familia.pdf"},{id:"lv1040",n:1040,t:"CINCO PEDRINHAS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1040-cinco-pedrinhas.pdf"},{id:"lv1041",n:1041,t:"OU SANTOS OU NADA",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1041-ou-santos-ou-nada.pdf"},{id:"lv1042",n:1042,t:"A TUA PALAVRA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1042-a-tua-palavra.pdf"},{id:"lv1043",n:1043,t:"MOTIVO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1043-motivo.pdf"},{id:"lv1044",n:1044,t:"\xC0 TI, SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1044-a-ti-senhor.pdf"},{id:"lv1045",n:1045,t:"FOGO SUAVE",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1045-fogo-suave.pdf"},{id:"lv1046",n:1046,t:"CONSTRUTORES DE ALEGRIA",tom:"D\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1046-construtores-de-alegria.pdf"},{id:"lv1047",n:1047,t:"ILUMINA, ILUMINA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1047-ilumina-ilumina.pdf"},{id:"lv1048",n:1048,t:"D\xC1-ME DE BEBER",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1048-da-me-de-beber.pdf"},{id:"lv1049",n:1049,t:"SE \xC9S A MINHA M\xC3E",tom:"D\xF3 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1049-se-es-a-minha-mae.pdf"},{id:"lv1050",n:1050,t:"MARIA DE AMOR",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1050-maria-de-amor.pdf"},{id:"lv1051",n:1051,t:"RUMO AO NOVO MIL\xCANIO",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1051-rumo-ao-novo-milenio.pdf"},{id:"lv1052",n:1052,t:"DISC\xCDPULO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1052-discipulo.pdf"},{id:"lv1053",n:1053,t:"MINHA VIDA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1053-minha-vida.pdf"},{id:"lv1054",n:1054,t:"SALMO 50",tom:"Mi Maior",m:"Salmo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1054-salmo-50.pdf"},{id:"lv1055",n:1055,t:"SANTO",tom:"R\xE9 Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1055-santo.pdf"},{id:"lv1056",n:1056,t:"ESP\xCDRITO SANTO DE DEUS",tom:"M Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1056-espirito-santo-de-deus.pdf"},{id:"lv1057",n:1057,t:"OBRIGADO, SENHOR",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1057-obrigado-senhor.pdf"},{id:"lv1058",n:1058,t:"GRITO DE ALERTA",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1058-grito-de-alerta.pdf"},{id:"lv1059",n:1059,t:"LIVRE",tom:"Sol menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1059-livre.pdf"},{id:"lv1060",n:1060,t:"SOBRE O MADEIRO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1060-sobre-o-madeiro.pdf"},{id:"lv1061",n:1061,t:"O SENHOR, MISERICORDIA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1061-o-senhor-misericordia.pdf"},{id:"lv1062",n:1062,t:"FARDO LEVE",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1062-fardo-leve.pdf"},{id:"lv1063",n:1063,t:"UMA NOVA UN\xC7AO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1063-uma-nova-uncao.pdf"},{id:"lv1064",n:1064,t:"MIL VEZES ADMIR\xC1VEL MARIA",tom:"F\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1064-mil-vezes-admiravel-maria.pdf"},{id:"lv1065",n:1065,t:"MEU SENHOR, J tIEU AMOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1065-meu-senhor-j-tieu-amor.pdf"},{id:"lv1066",n:1066,t:"ME FAZ NOVO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1066-me-faz-novo.pdf"},{id:"lv1067",n:1067,t:"NADA E MAIOR QUE DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1067-nada-e-maior-que-deus.pdf"},{id:"lv1068",n:1068,t:"DEUS \xC9 AMOR",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1068-deus-e-amor.pdf"},{id:"lv1069",n:1069,t:"GRANDE O SENHOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1069-grande-o-senhor.pdf"},{id:"lv1070",n:1070,t:"SENHOR, EU QUERO TE SEGUIR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1070-senhor-eu-quero-te-seguir.pdf"},{id:"lv1071",n:1071,t:"MARIA DO SIM",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1071-maria-do-sim.pdf"},{id:"lv1072",n:1072,t:"MARIA FIEL",tom:"L\xE1 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1072-maria-fiel.pdf"},{id:"lv1073",n:1073,t:"SHALOM, TE AMO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1073-shalom-te-amo.pdf"},{id:"lv1074",n:1074,t:"FESTA DO SENHOR",tom:"F\xE1 # menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1074-festa-do-senhor.pdf"},{id:"lv1075",n:1075,t:"ORA\xC7AO DE PERDAO",tom:"",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1075-oracao-de-perdao.pdf"},{id:"lv1076",n:1076,t:"TEMPO DE DESPERTAR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1076-tempo-de-despertar.pdf"},{id:"lv1077",n:1077,t:"CORDEIRO IMOLADO",tom:"Sol Maior",m:"Cordeiro",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1077-cordeiro-imolado.pdf"},{id:"lv1078",n:1078,t:"CANTAMOS A VIT\xD3RIA DE DEUS",tom:"F\xE1 # menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1078-cantamos-a-vitoria-de-deus.pdf"},{id:"lv1079",n:1079,t:"\xC9 CERTO TUA PRESEN\xC7A",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1079-e-certo-tua-presenca.pdf"},{id:"lv1080",n:1080,t:"UTOPIA",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1080-utopia.pdf"},{id:"lv1081",n:1081,t:"LOUVOR DA CRIA\xC7AO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1081-louvor-da-criacao.pdf"},{id:"lv1082",n:1082,t:"ACREDITAR NO CORA\xC7AO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1082-acreditar-no-coracao.pdf"},{id:"lv1083",n:1083,t:"TEU MISSION\xC1RIO",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1083-teu-missionario.pdf"},{id:"lv1084",n:1084,t:"ACONTECEU EM NAZAR\xC9",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1084-aconteceu-em-nazare.pdf"},{id:"lv1085",n:1085,t:"DESCANSO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1085-descanso.pdf"},{id:"lv1086",n:1086,t:"VEM LOUVAR COMIGO, IRMAO!",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1086-vem-louvar-comigo-irmao.pdf"},{id:"lv1087",n:1087,t:"PIEDADE, SENHOR, ME PERDOA",tom:"D\xF3 Maior",m:"Ato Penitencial",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1087-piedade-senhor-me-perdoa.pdf"},{id:"lv1088",n:1088,t:"GLORIA A DEUS, AMEM!!!",tom:"D\xF3 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1088-gloria-a-deus-amem.pdf"},{id:"lv1089",n:1089,t:"CONFIO EM DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1089-confio-em-deus.pdf"},{id:"lv1090",n:1090,t:"ALELUIA! A PALAVRA DO SENHOR!",tom:"F\xE1 Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1090-aleluia-a-palavra-do-senhor.pdf"},{id:"lv1091",n:1091,t:"EU CREIO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1091-eu-creio.pdf"},{id:"lv1092",n:1092,t:"ESCUTA NOSSA PRECE, SENHOR",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1092-escuta-nossa-prece-senhor.pdf"},{id:"lv1093",n:1093,t:"EU TE OFERE\xC7O",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1093-eu-te-ofereco.pdf"},{id:"lv1094",n:1094,t:"SANTO, SENHOR DEUS DO UNIVERSO",tom:"Sol Maior",m:"Santo",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1094-santo-senhor-deus-do-universo.pdf"},{id:"lv1095",n:1095,t:"OH! ALELUIA! EST\xC1 VIVO O MEU SENHOR!",tom:"D\xF3 Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1095-oh-aleluia-esta-vivo-o-meu-senhor.pdf"},{id:"lv1096",n:1096,t:"PAI NOSSO, MEU PAI",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1096-pai-nosso-meu-pai.pdf"},{id:"lv1097",n:1097,t:"A PAZ DO SENHOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1097-a-paz-do-senhor.pdf"},{id:"lv1098",n:1098,t:"CORDEIRO DE DEUS",tom:"F\xE1 Maior",m:"Cordeiro",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1098-cordeiro-de-deus.pdf"},{id:"lv1099",n:1099,t:"TEMPO DE COMUNH\xC3O",tom:"R\xE9 Maior",m:"Comunh\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1099-tempo-de-comunhao.pdf"},{id:"lv1100",n:1100,t:"OBRIGADO, MEU SENHOR",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1100-obrigado-meu-senhor.pdf"},{id:"lv1101",n:1101,t:"CONVITE",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1101-convite.pdf"},{id:"lv1102",n:1102,t:"CORA\xC7AO FERIDO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1102-coracao-ferido.pdf"},{id:"lv1103",n:1103,t:"CRUZ DA UNIDADE",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1103-cruz-da-unidade.pdf"},{id:"lv1104",n:1104,t:"O TER\xC7O",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1104-o-terco.pdf"},{id:"lv1105",n:1105,t:"NO MAR DE MARIA",tom:"Si menor",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1105-no-mar-de-maria.pdf"},{id:"lv1106",n:1106,t:"NOSSA SENHORA DO BRASIL",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1106-nossa-senhora-do-brasil.pdf"},{id:"lv1107",n:1107,t:"AVE MARIA CONSOLADORA",tom:"Mi Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1107-ave-maria-consoladora.pdf"},{id:"lv1108",n:1108,t:"CRISTO ME FAZ VENCER",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1108-cristo-me-faz-vencer.pdf"},{id:"lv1109",n:1109,t:"VIDA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1109-vida.pdf"},{id:"lv1110",n:1110,t:"VIT\xD3RIA DO AMOR",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1110-vitoria-do-amor.pdf"},{id:"lv1111",n:1111,t:"MANSO, HUMILDE E SERENO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1111-manso-humilde-e-sereno.pdf"},{id:"lv1112",n:1112,t:"DEPENDENTE",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1112-dependente.pdf"},{id:"lv1113",n:1113,t:"IRMAO CAMINHONEIRO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1113-irmao-caminhoneiro.pdf"},{id:"lv1114",n:1114,t:"ALGO EM COMUM",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1114-algo-em-comum.pdf"},{id:"lv1115",n:1115,t:"QUE DEUS DO C\xC9U ABEN\xC7OE",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1115-que-deus-do-ceu-abencoe.pdf"},{id:"lv1116",n:1116,t:"ESTOU PORTA E PE\xC7O ENTRADA",tom:"Sol Maior",m:"Entrada",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1116-estou-porta-e-peco-entrada.pdf"},{id:"lv1117",n:1117,t:"EM TUA PRESEN\xC7A",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1117-em-tua-presenca.pdf"},{id:"lv1118",n:1118,t:"ANJOS DE DEUS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1118-anjos-de-deus.pdf"},{id:"lv1119",n:1119,t:"BENDITAS S\xC3O AS L\xC1GRIMAS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1119-benditas-sao-as-lagrimas.pdf"},{id:"lv1120",n:1120,t:"TUDO MAIS PASSAR\xC1",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1120-tudo-mais-passara.pdf"},{id:"lv1121",n:1121,t:"TER JESUS \xC9 LINDO",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1121-ter-jesus-e-lindo.pdf"},{id:"lv1122",n:1122,t:"JESUS, A SOLU\xC7\xC3O",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1122-jesus-a-solucao.pdf"},{id:"lv1123",n:1123,t:"SUBLIME VOCA\xC7AO",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1123-sublime-vocacao.pdf"},{id:"lv1124",n:1124,t:"CANTAR PARA DEUS",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1124-cantar-para-deus.pdf"},{id:"lv1125",n:1125,t:"VEM",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1125-vem.pdf"},{id:"lv1126",n:1126,t:"MESTRE AMIGO",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1126-mestre-amigo.pdf"},{id:"lv1127",n:1127,t:"FOGO DO C\xC9U",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1127-fogo-do-ceu.pdf"},{id:"lv1128",n:1128,t:"PAZ NA TERRA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1128-paz-na-terra.pdf"},{id:"lv1129",n:1129,t:"ESP\xCDRITO SANTO DE DEUS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1129-espirito-santo-de-deus.pdf"},{id:"lv1130",n:1130,t:"ELEVO AS MAOS",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1130-elevo-as-maos.pdf"},{id:"lv1131",n:1131,t:"O SENHOR MEU PASTOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1131-o-senhor-meu-pastor.pdf"},{id:"lv1132",n:1132,t:"PRIMEIRA CRISTA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1132-primeira-crista.pdf"},{id:"lv1133",n:1133,t:"AMAR\xC1S, AMAR\xC1S",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1133-amaras-amaras.pdf"},{id:"lv1134",n:1134,t:"ROUXINOL",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1134-rouxinol.pdf"},{id:"lv1135",n:1135,t:"EU OREI POR VOC\xCA",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1135-eu-orei-por-voce.pdf"},{id:"lv1136",n:1136,t:"RESTAURA\xC7AO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1136-restauracao.pdf"},{id:"lv1137",n:1137,t:"TRONO DE GRA\xC7A",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1137-trono-de-graca.pdf"},{id:"lv1138",n:1138,t:"DEUS \xC9",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1138-deus-e.pdf"},{id:"lv1139",n:1139,t:"TUDO POSSO NAQUELE QUE ME FORTALECE",tom:"R\xE9 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1139-tudo-posso-naquele-que-me-fortalece.pdf"},{id:"lv1140",n:1140,t:"JESUS, JESUS",tom:"F\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1140-jesus-jesus.pdf"},{id:"lv1141",n:1141,t:"O LOUVOR",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1141-o-louvor.pdf"},{id:"lv1142",n:1142,t:"CAT\xD3LICO",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1142-catolico.pdf"},{id:"lv1143",n:1143,t:"BEM AVENTURADA MARIA",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1143-bem-aventurada-maria.pdf"},{id:"lv1144",n:1144,t:"LUZ DO MEU SER",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1144-luz-do-meu-ser.pdf"},{id:"lv1145",n:1145,t:"ALELUIA, ALELUIA",tom:"F\xE1 Maior",m:"Aclama\xE7\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1145-aleluia-aleluia.pdf"},{id:"lv1146",n:1146,t:"CELEBRAREI",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1146-celebrarei.pdf"},{id:"lv1147",n:1147,t:"DEUS TRINDADE",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1147-deus-trindade.pdf"},{id:"lv1148",n:1148,t:"ALEM DO CEU",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1148-alem-do-ceu.pdf"},{id:"lv1149",n:1149,t:"AVE MARIA",tom:"R\xE9 Maior",m:"Nossa Senhora / Santos",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1149-ave-maria.pdf"},{id:"lv1150",n:1150,t:"GRA\xC7AS, PAI",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1150-gracas-pai.pdf"},{id:"lv1151",n:1151,t:"TE LOUVO EM VERDADE",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1151-te-louvo-em-verdade.pdf"},{id:"lv1152",n:1152,t:"ALGU\xC9M TE AMA",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1152-alguem-te-ama.pdf"},{id:"lv1153",n:1153,t:"DOM DA VIDA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1153-dom-da-vida.pdf"},{id:"lv1154",n:1154,t:"LOUVOR E GL\xD3RIA",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1154-louvor-e-gloria.pdf"},{id:"lv1155",n:1155,t:"EM NOME DO PAI",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1155-em-nome-do-pai.pdf"},{id:"lv1156",n:1156,t:"AMOR SEM FIM",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1156-amor-sem-fim.pdf"},{id:"lv1158",n:1158,t:"NASCER DE NOVO",tom:"L\xE1 menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1158-nascer-de-novo.pdf"},{id:"lv1159",n:1159,t:"EU CREIO NAS PROMESSAS DE DEUS",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1159-eu-creio-nas-promessas-de-deus.pdf"},{id:"lv1160",n:1160,t:"SUAVE BRISA",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1160-suave-brisa.pdf"},{id:"lv1161",n:1161,t:"CHEIA DE GRA\xC7A",tom:"R\xE9 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1161-cheia-de-graca.pdf"},{id:"lv1162",n:1162,t:"LOUVOR SERTANEJO",tom:"Mi Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1162-louvor-sertanejo.pdf"},{id:"lv1163",n:1163,t:"TEU CORPO SANTO",tom:"L\xE1 menor",m:"Comunh\xE3o",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1163-teu-corpo-santo.pdf"},{id:"lv1164",n:1164,t:"PERDOAR AMAR",tom:"L\xE1 Maior",m:"Ato Penitencial",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1164-perdoar-amar.pdf"},{id:"lv1165",n:1165,t:"RAIO DE LUZ",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1165-raio-de-luz.pdf"},{id:"lv1167",n:1167,t:"GL\xD3RIA",tom:"L\xE1 Maior",m:"Gl\xF3ria",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1167-gloria.pdf"},{id:"lv1168",n:1168,t:"S\xD3 JESUS",tom:"L\xE1 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1168-so-jesus.pdf"},{id:"lv1169",n:1169,t:"VAMOS ADORAR O SENHOR",tom:"Mi menor",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1169-vamos-adorar-o-senhor.pdf"},{id:"lv1170",n:1170,t:"BUSQUEI O AMOR DE DEUS",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1170-busquei-o-amor-de-deus.pdf"},{id:"lv1171",n:1171,t:"SENHOR, SALVA-ME!",tom:"D\xF3 Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1171-senhor-salva-me.pdf"},{id:"lv1172",n:1172,t:"BASTA QUERER",tom:"Sol Maior",m:"Geral",src:"Louvemos o Senhor",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1172-basta-querer.pdf"},{id:"d1",t:"A CASA \xC9 SUA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Jig8g9e_7TI18jvJeVzEz_MK112G96SM.pdf",cifra:`A  CASA   \xC9  SUA

      G
Voc\xEA \xE9 bem-vindo aqui
     Em7
A casa \xE9 sua, pode entrar
       C9
Me esvazio de mim
       G C/G
Me esvazio de mim

      G
Sopra o Teu vento aqui
      Em7
Toma o Teu trono, vem reinar
         C9
N\xF3s queremos Te ouvir
         G C/G G
N\xF3s queremos Te ouvir

C9
Essa casa \xE9 Sua casa
          D4  Em7  Bm7
N\xF3s deixamos ela pra Voc\xEA, Jesus
C9
Essa casa \xE9 Sua casa
          D4  Em7  Bm7
N\xF3s deixamos ela pra Voc\xEA, Jesus

  C9
Apare\xE7a
        Am7
Que o Teu nome cres\xE7a
      G
Enche este lugar
      Bm7
Enche este lugar
  C9
Apare\xE7a
        Am7
Que o Teu nome cres\xE7a
      G
Vem me incendiar
      Bm7
Vem me incendiar`},{id:"d2",t:"A Paz que eu sempre quis",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1mZ1z8yv5LocTH6hBotadLIBpTQE_75dx.pdf",cifra:`A  Paz   que   eu   sempre     quis   \u2013  Vida   Reluz

E G#m

Confuso   estava  o meu  cora\xE7\xE3o

A G#m   B7
Quando   eu  cheguei  aqui.

E G#m
N\xE3o  estava  em  sintonia com   o Senhor,

A G#m   B7

Mas  ao  desenrolar  do dia eu  pude  perceber
A Abm/A   E  E7

A paz  que  eu sempre   quis,
A Abm/A   E  E7

Estava  no sil\xEAncio que  eu  nunca  fiz.

A Abm/A   G#m   C#m
E de  repente  uma  brisa mansa

F#m  Gm   G#m
Abriu meu   cora\xE7\xE3o,

B7
Mergulhei  nesse   amor

E

De  Deus!`},{id:"d3",t:"A T\xED, meu Deus",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1gdtM__Ku7pj3vxCAfcA4a8G9oHalwY_Z.pdf",cifra:`A T\xED, Meu  Deus

B7     E               F#m

A Ti meu Deus, elevo meu cora\xE7\xE3o
            B        B7      E  B7

Elevo as minhas m\xE3os, meu olhar minha voz

       E      E7       A                E

A Ti meu Deus, eu quero oferecer meus passos e meu viver

      B         E   B7

Meus caminhos meu sofrer

  E             A              E

A tua ternura, Senhor, vem me abra\xE7ar

                C#          A

E a tua bondade infinita, me perdoar.

    Am                   E          C#

Vou ser o teu seguidor, e te dar o meu cora\xE7\xE3o

   F#m           B7         E   (B7)
Eu quero sentir o calor de tuas m\xE3os

         E                      F#m

A Ti meu Deus, que \xE9s bom e que tens amor

               B       B7     E   B7

Ao pobre e ao sofredor vou servir te esperar.

       E      E7         A
Em Ti, Senhor, humildes se alegrar\xE3o.

               E       B       E   B7

Cantando a nova can\xE7\xE3o de esperan\xE7a e de paz.`},{id:"d4",t:"A VIDA \xC9 CAMINHAR Am",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/13bIHGJf1zCqEg5e5iv7ag8W2rdxfkq6b.pdf",cifra:`A  VIDA    \xC9 CAMINHAR

G        Em

A vida  \xE9  caminhar
C     D7         G

Sou  peregrino    do  amor.
    Em     C     D7

Vou  semear    a  esperan\xE7a

     G            Em
Deste   mundo    que   h\xE1 de  vir.

C         D7         G

Eu  n\xE3o  me   canso   de  cantar

( Em    C  D7   )

C   D7    G       Em

mundo     novo    vem   a\xED,
C         D7         G   (G7)

gente   de coragem     vai  lutar.

C   D7    G     Em
A verdade    vencer\xE1,

  A               D7

Quem    \xE9 da  verdade    saber\xE1.
 D7                 G

Eu  n\xE3o  me   canso   de  cantar.`},{id:"d5",t:"ABBA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/16Di0QLt2f0S727gpcYddE9BbiDAV8B2x.pdf",cifra:`ABBA

F       F4  F

Num  quarto escuro
F      F4  F     Bb
Quando  ningu\xE9m  pode  me ver
Bb               F

Os Teus olhos est\xE3o sobre mim

F   F4  F
Diagn\xF3stico

F    F4  F    Bb
N\xE3o \xE9 a palavra final
Bb            F
A Tua m\xE3o  est\xE1 sobre mim

     Bb
Se eu clamar
  C   Am     Dm

Abba, meu  Pai, Abba
           Bb          C
Inclina os Teus ouvidos pra me escutar
        Am          Dm

Estende a Tua m\xE3o  pra me  alcan\xE7ar
   Gm        C
N\xE3o haver\xE1  imposs\xEDvel
     F

Se eu clamar
 F
Abba`},{id:"d6",t:"Abra\xE7o de Pai",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1jerGkX82ZyQ1iUWKuFFfDiGe7TtRmPZ-.pdf",cifra:`Abra\xE7o de Pai \u2013 Anjos

A    A9
Quanto eu esperei!
F#m      C#m
Ansioso queria te ver
 Bm      C#m  D
E te falar o que h\xE1 em mim
Bm   Bm/A (E/G# E D/F# E/G# D/F# E/G#)
J\xE1 n\xE3o podia me conter

  A    A9
Me decidi, Senhor
F#m      C#m
Hoje quero rasgar meu viver
 Bm       C#m D
E te mostrar meu cora__\xE7\xE3o
Bm   Bm/A G  D/F# (E/G# E D/F# E/G#)
Tudo que tenho e sou

A               F#m
E por mais que me falem, n\xE3o vou desistir!
Bm              E
Eu sei que nada sou, por isso estou aqui
  A                F#m
Mas eu sei que o amor que o Senhor tem por mim

 Bm      Bm/A  E        A (D/F# E/G#)
\xC9 muito mais que o meu, sou gota derramada no mar

     A         F#m
Quanto tempo tamb\xE9m o Senhor me esperou
  Bm        E
Nas tardes encontrou saudade em meu lugar
 A               F#m
Mas ao me ver na estrada ao longe voltar
Bm      Bm/A  E        A  E
Num salto se alegrou e foi correndo me encontrar

   A           F#m
E n\xE3o me perguntou nem por onde eu andei
 Bm             E
Dos bens que eu gastei, mais nada me restou

    A            F#m
Mas olhando em meus olhos somente me amou
C#m   D (A/C# Bm) Bm/A E/G# E
E ao me beijar,  me acolheu
E/F# F#m E/F# F#m
num abra\xE7o de pai`},{id:"d7",t:"Abra\xE7o Eterno",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1zMwUADdu_F0Ti4rM4FQaVDYW1cmOmRwT.pdf",cifra:`Abra\xE7o  Eterno

F            C9 Dm7   Am7  Bb  F    Gm    C7
Amor t\xE3o grande, amor t\xE3o forte, amor suave, amor sem fim
F       C9     Dm7    Am7

Que a pr\xF3pria morte transforma em vida
Bb     F   Dm7   Gm  C7
Abra\xE7o eterno de Deus em mim

F                  C9
Nem as tor...rentes das grandes \xE1guas,

F     Bb   Dm7    Gm7  C7
Conseguir\xE3o apagar esse amor
 Bb C9 Dm7   F    C9
Pois suas chamas s\xE3o fogo ardente

F    Bb   Dm7   Gm7     C7
Mais do que a morte \xE9 t\xE3o forte esse a...mor

 Dm7    C#\xBA F         G
De abra\xE7o esmagante, de aus\xEAncia torturante
 Bb    Dm7    Gm7    C7

De noite e luz \xE9 feito esse amor
 Dm7    C#\xBA F       G
De dor incompar\xE1vel, consolo inestim\xE1vel

 Bb      Dm7   Gm7   C7
De vida e cruz \xE9 feito esse a...mor

   F#        C#9
Nem as torrentes das grandes \xE1guas,
  F# B9  Ebm  G#m7    C#7

Consegui...r\xE3o apagar esse amor
B  C#9 Ebm   F#     C#9
Pois suas chamas s\xE3o fogo ardente
    F# B9     Ebm    G#m7 C#7

mais do que a morte \xE9 t\xE3o forte esse a...mor`},{id:"d8",t:"Acalma minha tempestade",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1WGXkEszjYsnIO1YjIMFfVGAZsG0KfNfs.pdf",cifra:`Acalma     minha    tempestade

A
Quando estou em alto mar
                     D
E as ondas v\xEAm me agitar

Minha f\xE9 come\xE7a a fraquejar
                       A
O medo se instala no lugar

A
Esque\xE7o da Sua promessa
                      D
De que sempre est\xE1s comigo

Posso ouvir a Tua voz

Me dizendo

F#m                D
Por que tendes medo?
                 A
Por que tendes medo?
                 E
Por que tendes medo?

A
Acalma minha tempestade
 F#m
Acalma o meu cora\xE7\xE3o
 D                             E
Devolve a paz que vem de Ti,Senhor
              A     E

Aumenta minha f\xE9 em Ti
                   F#m     E
N\xE3o me deixa fraquejar jamais
              A
Ao som da Tua voz
          E
Tudo vai calar
           F#m     D
S\xF3 preciso esperar
         E           A    E
A tempestade vai acalmar`},{id:"d9",t:"Acreditar no amor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1GU01fTidnrvRLMfsD-rl9g_cL-VrN0qm.pdf",cifra:`Acreditar no amor

       A7+       D7+
Quantas vezes voc\xEA insistiu falar

A7+      D7+
"Minha vida bem podia ser melhor."
A7+      D7+
Conviv\xEAncia com os outros, nem pensar.

A7+        D7+     A/C#
Se afastava pra n\xE3o se decepcionar.
Bm        C#m

S\xF3 n\xE3o imaginou que tudo que se encontra,
     Bm
Nem sempre \xE9 um caminho a mais

     C#m
Pra realmente ser feliz.

Bm         C#m

Quero lhe contar que a chave do segredo
D7+  A/C# Bm  E
Que o leva em frente \xE9 o amor.

     Bm
Acreditar no amor
              C#m

S\xF3 o teu amor, s\xF3, s\xF3 o teu amor muda a minha vida.
Bm           C#m
S\xF3 o teu amor s\xF3, s\xF3 o teu amor (Faz eu ser melhor)

Bm              C#m
S\xF3 o teu amor, s\xF3, s\xF3 o teu amor muda tudo ao meu redor.
D7+ A/C# Bm E

S\xF3 o teu amor, Senhor.

     A7+  D7+
Acreditar no amor.

Dentro de voc\xEA existe algo bom.
Contagia todo mundo ao seu redor.

Ser feliz tamb\xE9m implica ser melhor.
Tem que ser do interior pro exterior.
S\xF3 n\xE3o imaginou..`},{id:"d10",t:"Aleluia (Hallelujah)",tom:"",m:"Aclama\xE7\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1WkfBaSFtaStjORDD73jLOECmXdpTQ91t.pdf",cifra:`Aleluia  (Hallelujah)

C      Am
Pai eu quero te amar
C      Am
Tocar o teu cora\xE7\xE3o
F   G     C G9
E me derramar aos teus p\xE9s

C        F  G
Mais perto eu quero estar Senhor
 Am        F
E te adorar com tudo que eu sou
 G    E7   Am
E te render gl\xF3ria e aleluia

F     Am   F   C   G  C
Aleluia, Aleluia, Aleluia, Alelu -uu uu uu iaa

C         Am
Quando lutas vierem me derrubar
C       Am

Firmado em ti eu estarei
F    G      C G9
Pois tu \xE9s o meu ref\xFAgio oh Deus

C       F
E n\xE3o importa onde estiver
Am        F
No vale ou no monte adorarei

 G    E7   Am
A ti eu canto gl\xF3ria e aleluia

Refr\xE3o

( C Am C Am C D )
D      Bm

Senhor preciso do teu olhar
D       Bm
Ouvir as batidas do teu cora\xE7\xE3o
G       A     D A
Me esconder nos teus bra\xE7os oh pai
D        G A
Toda minha alma deseja a ti
Bm        G

Junto com os anjos cantarei
A      F#7  Bm
Tu \xE9s Santo, exaltado, Aleluia

G    Bm  G    D   A   D
Aleluia, Aleluia, Aleluia, Alelu -uu uu uu ia`},{id:"d11",t:"Aleluia - Pentecotes",tom:"",m:"Aclama\xE7\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ZsTz3wc1rC6JwuS_r8sIAJnoWRgNhhWb.pdf",cifra:`Aleluia - Pentecotes

 F  G  C   F    G
Aleluia,  aleluia!

Em    Am  F   G  C

Aleluia,  aleluia,

C         D#F      Am       Am#G

Vinde,  Esp\xEDrito  Divino,
   F                    Dm
e enchei  com  vossos  dons
      G

os cora\xE7\xF5es   dos fi\xE9is
   F                 G              C    Em     Am
E acendei  neles  o  amor como  um  fogo abrasador!
   F                 G              F      G      C
E acendei  neles  o  amor como  um  fogo abrasador!

F  G  C   F    G

Aleluia,  aleluia!

Em    Am  F   G  C
Aleluia,  aleluia,`},{id:"d12",t:"ALELUIA CN",tom:"",m:"Aclama\xE7\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1kDmex_HEpPMY2RRIYnj9fAd_Y6P22SGS.pdf",cifra:`ALELUIA        CN

G      D   Am       C    Em       D

Aleluuuuuia   , Aaaleluuuuia   , Aleluia ,
      C

Aleeeluuuuiiiaaa.
   G   D   Am      C     Em       D

Aleluuuuuia   , Aaaleluuuuia   , Aleluia ,
     C
Aleeeluuuuiiiaaa.

Am        Bm      C

O homem    n\xE3o  vive somente   de  p\xE3o,
Am            G/B     C           D

mas  de toda  palavra  da  boca  de Deus`},{id:"d13",t:"ALELUIA MINH\u2019ALMA ABRIREI",tom:"",m:"Aclama\xE7\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ECSfzuqo3iAm2_kbC7be642646e6_X8u.pdf",cifra:`ALELUIA     MINH\u2019ALMA         ABRIREI

C9  Em7     F  C9   F C/E   Dm7    Bb9  F/G

Aleluia,  aleluia, a minh'alma     abrirei.

C9  Em7     F  C9   F    F/G     C9  A7

Aleluia,  aleluia, Cristo  \xE9 meu   Rei!

D9  F#m7     G  D9    G D/F#    Em7   C9  A7

Aleluia,  aleluia, a minh'alma     abrirei.

D9  F#m7     G  D9    G     A7    D9   A/B

Aleluia,  aleluia, Cristo  \xE9 meu   Rei!

E9 G#m7      A  E9   A  E/G#   F#m7    D9  A/B

Aleluia,  aleluia, a minh'alma     abrirei.

E9 G#m7      A  E9   A    A/B      E9

Aleluia,  aleluia, Cristo  \xE9 meu   Rei`},{id:"d14",t:"Aleluia Quando Estamos Unidos",tom:"",m:"Aclama\xE7\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1fOdP2sr9OU-PWBf9xLldToHQxC-M6CHz.pdf",cifra:`Aleluia Quando    Estamos   Unidos

D   A   Bm  F#m    G D  A  A7

Aleluia, aleluia, aleluia

D   A   Bm  F#m    G D  A  A7

Aleluia, aleluia, aleluia

D   A   Bm  F#m    G D  A  A7

Quando  estamos  unidos, est\xE1s entre n\xF3s

D   A   Bm  F#m    G D  A  A7

E nos falar\xE1s da Tua vida

D   A   Bm  F#m    G D  A  A7

Aleluia, aleluia, aleluia

D   A   Bm  F#m    G D  A  A7

Aleluia, aleluia, aleluia

D   A   Bm  F#m    G D  A  A7

Este nosso mundo   sentido ter\xE1

D   A   Bm  F#m    G D  A  A7

Se Tua palavra renovar`},{id:"d15",t:"ALELUIA \u2013 CORAL CN (G)",tom:"",m:"Aclama\xE7\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1s3EO1o3F1rGSiKaybBj3Jn_eJ2Qr1ESq.pdf",cifra:`ALELUIA   \u2013 CORAL    CN (G)

G      D   Am       C    Em       D
Aleluuuuuia   , Aaaleluuuuia   , Aleluia ,

      C
Aleeeluuuuiiiaaa.
   G   D   Am      C     Em       D

Aleluuuuuia   , Aaaleluuuuia   , Aleluia ,
     C

Aleeeluuuuiiiaaa.`},{id:"d16",t:"Aleluia, Algu\xE9m do Povo",tom:"",m:"Aclama\xE7\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1r-HFX8FU9aMh79hnaS2jpTO4xLXe74yX.pdf",cifra:`Aleluia, Algu\xE9m do Povo

G  C   D7 G Em Am  D7  G

Aleluia, Aleluia, Aleluia, Aleluia,
   C  D7 G  Em Am  D7 G D7
Aleluia, Aleluia, Aleluia, Aleluia

  G                        C          G
Algu\xE9m do povo exclama: \u201CComo \xE9 grande, \xD3h Senhor!
     Em      A7   D7    G
Quem te gerou e alimentou.\u201D Jesus responde ; \u201C\xD3h! Mulher,
   C     G       Em         A7        D7      G    G7
pra mim \xE9 feliz, quem soube ouvir a voz de Deus e tudo guardou.\u201D

     G                  C              G
\u201CNem todo que me diz 'Senhor,Senhor!' chega ao c\xE9u
   Em        A7    D7    G                    C
Mas s\xF3 quem obedece ao Pai.\u201D Jesus se a Igreja louva, a tua M\xE3e

      G     Em          A7       D7       G  G7
louva a Ti e espera que a conduzas pela estrada aonde vai.`},{id:"d17",t:"ALEULUIA CORAL CN",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1JakkyRP-OwgNcHZ8JLDVgv_EIZkLwMVG.pdf",cifra:`ALEULUIA         CORAL       CN

G      D    Am        C      Em       D

Aleluuuuuia     , Aaaleluuuuia    , Aleluia   ,

       C
Aleeeluuuuiiiaaa.

   G   D    Am        C      Em       D
Aleluuuuuia     , Aaaleluuuuia    , Aleluia   ,

     C

Aleeeluuuuiiiaaa.

Am         Bm       C           Am
O  homem     n\xE3o  vive  somente    de  p\xE3o,  mas   de

toda
G/B      C

 palavra   da  boca

  D
de  Deus`},{id:"d18",t:"ALFA E OMEGA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1CmOQRjEanA3wOK0ryO9M6gOQH6QnRw7d.pdf",cifra:`ALFA    E  OMEGA

                     Am7 D7        C G
Tu que  estas  assentado     no trono

           Am7  Bm7    C C#m7(b5)
Sempre  reinando   soberano
          Am    D7              C   G
Anjos  cantando,   homens   louvando
         Am7  Bm7            C C#m7(b5)  D   D7

Deus  reunido,    com  o seu  povo

           G      B7
 Oh,  oh  Alfa,   \xD4mega
Em       Dm     G7

Cristo,  filho
          C    Cm Bm7     A#\xB0
Oh, oh,  vem,  oh, oh  vem
          Am      D7      G    D7

Oh, oh,  vem,  Senhor  Jesus

          Am7  D7         C   G
Ansioso  espero    a  sua volta

           Am7  Bm7    C C#m7(b5)   D D7
O grande  dia  em que  tu viras

           Am    D7              C    G

Ent\xE3o  subiremos,    contigo  estaremos
      Am7 Bm7   C C#m7(b5)   D  D7
Para  sempre,  aleluia

       G        B7
 Maranata,     Cristo
Em       Dm     G7
Filho,  Mestre

         C    Cm Bm7     A#\xB0
Oh, oh,  vem,  oh, oh  vem
          Am      D7      G    D7
Oh, oh,  vem,  Senhor  Jesus`},{id:"d19",t:"Al\xE9m do V\xE9u",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1vW9f0EG19ubg9c33hmsBXao6kNKX78l-.pdf",cifra:`Al\xE9m  do  V\xE9u

   C
Quando o Teu olhar me envolve
   F
Quando estou bem junto a Ti
  G/B        F
E Tuas asas me escondem, e n\xE3o h\xE1 como fugir

   C       C/E
Quando estou em Tua presen\xE7a
   Fmaj7
Quando eu vou al\xE9m do v\xE9u
 G/B          F
E adentro os Teus \xE1trios, e eu vejo quem Tu \xE9s

   Am
Quando abra\xE7as minha alma
   Fmaj7
Quando eu sinto o Teu poder
  Am          Fmaj7
E as palavras j\xE1 n\xE3o bastam, pra dizer tudo o que \xE9s

C G/B Am F6 C

Santo, Santo \xE9 o Senhor
   G/B      Am
For\xE7a e poder, gl\xF3ria e louvor
Am/G   F C|C G|F|//|Am|G|F|FG|
\xC0quele que \xE9 (2x)`},{id:"d20",t:"Al\xF4 Meu Deus",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1SDHlHLOH30EiLgYluDyMzZB5980kBslf.pdf",cifra:`Al\xF4 Meu  Deus

       G          Am            D7       G   D7
Al\xF4 meu Deus, fazia tanto tempo que eu n\xE3o mais te procurava.
        G              Am     D7        G

Al\xF4 meu Deus, senti saudades tuas e acabei voltando aqui.
  G7        C      Cm        G       Em        Am
Andei por mil caminhos e, como as andorinhas, eu vim fazer meu ninho
      D7       G

em tua casa e repousar
  G7          C      Cm       G       Em      Am
Embora eu me afastasse e andasse desligado, meu cora\xE7\xE3o cansado
   D7    G

resolveu voltar.

G             Am    D7         G
Eu n\xE3o me acostumei nas terras onde andei. (2X)

       G          Am            D7       G   D7
Al\xF4 meu Deus, fazia tanto tempo que eu n\xE3o mais te procurava.
        G              Am     D7        G

Al\xF4 meu Deus, senti saudades tuas e acabei voltando aqui.
  G7        C      Cm        G       Em        Am
Gastei a minha heran\xE7a, comprando s\xF3 mat\xE9ria, restou-me a esperan\xE7a
      D7       G
de outra vez te encontrar

  G7       C     Cm       G     Em       Am
Voltei arrependido, de cora\xE7\xE3o ferido, e volto convencido
        D7    G
que este \xE9 o meu lugar.

G             Am    D7         G
Eu n\xE3o me acostumei nas terras onde andei. (2X)`},{id:"d21",t:"Amigos pela F\xE9",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1PWvQpNhDVWaBiEYGokYaigWBxfRvpEZW.pdf",cifra:`Amigos  pela F\xE9 \u2013 Anjos

G  D/F# Em D   C

Quem me dar\xE1 um ombro amigo
    D
Quando eu precisar ?
G D/F# Em   D C
E se eu cair, se eu vacilar,
     D
Quem vai me levantar ?

 Am      G
Sou eu, quem vai ouvir voc\xEA
   C    Am     D
Quando o mundo n\xE3o puder te entender
  Am      G
Foi deus, quem te escolheu pra ser
  C    Am    D
O melhor amigo que eu pudesse ter

G D/F# Em
Amigos, pra sempre
  C         D
Bons amigos que nasceram pela f\xE9
G D/F# Em
Amigos, pra sempre
  C     D    G

Para sempre amigos sim, se Deus quiser

G D/F# Em  D  C
Quem \xE9 que vai me acolher,
    D
Na minha indecis\xE3o
G  D/F# Em D  C
Se eu me perder pelo caminho

    D
Quem me dar\xE1 a m\xE3o

  Am      G
Foi deus, quem consagrou voc\xEA e eu
  C    Am       D
Para sermos bons amigos, num s\xF3 cora\xE7\xE3o
 Am     G

Por isso eu estarei aqui
   C   Am    D
Quando tudo parecer sem solu\xE7\xE3o

Bb       F
Pe\xE7o a Deus que te guarde
(que te guarde, aben\xE7\xF4e e mostre a sua face)
Bb     D
E te d\xEA a sua paz.

G D/F# Em D

Amigos, pra sempre
  C         D
Dois amigos que nasceram pela f\xE9
G D/F# Em D
Amigos, pra sempre
  C     D    G
Para sempre amigos sim, se Deus quiser`},{id:"d22",t:"Amor Ciumento",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1r1QnSX8Oz5w_QO6gA13UNPKfTkb57w8_.pdf",cifra:`Amor  Ciumento

Intro: A A9 A A9  D D9  D D9

 A     A9
Te descobrir no simples

       A                  D
Te encontrar em cada passo que eu dou
        D9

Te reconhecer a cada instante

         Bm7           F#m
E me abandonar pra Te encontrar
       D                  E

Em Teus bra\xE7os desejar tudo o que tens para mim

        A   A9            D9
Amor ciumento, Amor abrasador
              F#m
Amor que me constrange

             E
Amor que \xE9 t\xE3o grande
         F#m              D

Amor devorador, Amor que nunca tive
               Bm     E     A
Transforma a minha vida com Teu amor

Solo: A F#m D

   F#m    E     D9

Seduzido por Ti vou at\xE9 o fim
   F#m     E       D9
Para tudo, Senhor, conquistar.

   F#m    E     D9
Seduzido por Ti vou at\xE9 o fim
   F#m     E       D9
Para tudo, Senhor, conquistar.`},{id:"d23",t:"Anjos de Resgate",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1FVWwBv6nXWVRDtl8e40JbtiTIsmk5bUf.pdf",cifra:`Anjos de Resgate \u2013 Anjos

    G  C/G    G D/F# Em       C       D
Manda teus anjos sobre n\xF3s e aben\xE7oa a todos que esperam em v\xF3s.
     G  C/G      G Em      Am D7  G  C/G    REFR.
Manda teus anjos pra nos ensinar a te louvar e glorificar.

  G     C      D   G
Envia tamb\xE9m Teu Esp\xEDrito de paz e amor.
  Bm     Em Am     D7

O meu cora\xE7\xE3o tem sede do meu Criador.
  G       C       D  G
Envia Senhor os teus anjos pra nos resgatar.
    Bm    Em     Am    D   G
Pra nos proteger de todo o mal, para nos guiar, Senhor.

             C       D  G
   Quando acordo olho o c\xE9u e canto o meu louvor.
      Bm   Em   Am    D
   De todas as manh\xE3s Tu \xE9s o meu Senhor.
      G      C       D  G
   Levantai-nos \xF3 meu Deus e estende Tuas m\xE3os.

     Bm    Em   Am     D    G
   Tu \xE9s o meu ref\xFAgio nas minhas opress\xF5es, Senhor.

  C     D     G/B   C D
Confio em v\xF3s , revele Tua face para n\xF3s.
 C    D      G/B   C  G/B Am D    G
Levanta-te e p\xF5e o Teu escudo sobre n\xF3s. Manda teus anjos

SOLO:  C D C Bm Em  Am D G E

     A  D/A   A E/G# F#m       D       E

Manda teus anjos sobre n\xF3s e aben\xE7oa a todos que esperam em v\xF3s.
     A  D/A      A F#m    Bm  E  A  D/A   BIS
Manda teus anjos pra nos ensinar a te louvar e glorificar.

F#m  Bm E7 E ( A D/A A )
A te louvar e te amar.`},{id:"d24",t:"Ao Teu Encontro A",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1I0WVI7dy9X03b76g_GcDDs_sPsxJHMYm.pdf",cifra:`Ao  Teu   Encontro     \u2013 Eliana   Ribeiro

A            A/F#       E                A

O meu  cora\xE7\xE3o tem  sede em Te  amar
                 A/F#       E                  A    G   A

Vim  ao teu encontro ansiosa em Te adorar (2X)

      D         C#        F#m       F#m/E         D

Meu  Deus, eu creio e adoro, espero e Te amo

C#m     Bm      D/E              A

Por aqueles que n\xE3o Te  amam

D         C#               F#m      F#m/E         D
O C\xE9u  se faz presente aqui e olhas para mim

C#m             Bm     D/E      A
Por que me  amas sem  igual.`},{id:"d25",t:"Ao Teu Encontro (C)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Lh6NLiuiv4snq9RECAyr9iSHkfq0BKsW.pdf",cifra:`Ao  Teu  Encontro

C            C/A       G                C
O meu  cora\xE7\xE3o tem  sede em Te  amar

                 C/A       G                   C   Bb   C

Vim  ao teu encontro ansiosa em Te adorar (2X)

      F        E        Am       Am/G          F
Meu  Deus, eu creio e adoro, espero e Te amo

Em     Dm      F/G             C

Por aqueles que n\xE3o Te  amam

F         E               Am      Am/G         F

O C\xE9u  se faz presente aqui e olhas para mim

Em            Dm      F/G      C

Por que me  amas sem  igual.`},{id:"d26",t:"AO TEU ENCONTRO D",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/10In0NK2ysOFd8-cgvwG2RQbcoTuoqj6s.pdf",cifra:`AO  TEU  ENCONTRO

[Intro]  D Bm  G/A D  Bm G  G/A D  G/D

D9        D9/B       A4   A    D9
O meu  cora\xE7\xE3o  tem  sede de  amar
D9             D9/B     A4         A       D9

Vim ao  teu encontro   ansiosa  em  Te adorar
D9        D9/B     A4     A    D9
O meu  cora\xE7\xE3o  tem  sede de  amar
D9             D9/B       A4        A      D9
Vim ao  teu encontro   ansiosa  em  Te adorar

    Gmaj7       F#       Bm      Bm/A       Gmaj7
Meu Deus,  eu  creio  e adoro,  espero  e  Te amo

F#m         Em     G/A          D9       D7
      Por aqueles  que  n\xE3o  Te amam
Gmaj7      F#               Bm      Bm/A     Gmaj7
O C\xE9u  se faz  presente  aqui  e olhas  para  mim
F#m             Em     G/A    D9

   Por  que me  amas  sem igual

( D9   Bm  A4   A )

REPETE

( D9   C#m7   Bm  A   Gmaj7   F#   Em  D9  )

    Gmaj7       F#       Bm      Bm/A       Gmaj7

Meu Deus,  eu  creio  e adoro,  espero  e  Te amo
F#m         Em     G/A          D9       D7
      Por aqueles  que  n\xE3o  Te amam
Gmaj7      F#               Bm      Bm/A     Gmaj7
O C\xE9u  se faz  presente  aqui  e olhas  para  mim

F#m             Em     G/A    D9
   Por  que me  amas  sem igual`},{id:"d27",t:"AS MURALHAS \u2013 AMOR E ADORA\xC7\xC3O (F)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ljRJ52wYkrbTLX4TV-W3PgePnnEoFlR2.pdf",cifra:`AS   MURALHAS            \u2013 AMOR       E

                 ADORA\xC7\xC3O           (F)

C        G
A cidade est\xE1 murada
        A#
J\xE1 n\xE3o encontro mais a entrada
      F

Para a vida plena
C            G
Os problemas me sufocam
          A#
J\xE1 n\xE3o consigo achar uma sa\xEDda
       F
As barreiras s\xE3o t\xE3o altas
Dm            F
Mais eu n\xE3o vou desanimar
           Am
Preciso ouvir a voz de Deus
      G

Me p\xF4r a caminho
F             G
E elevar o meu clamor ao c\xE9u

Am        F       C      G
As muralhas n\xE3o resistir\xE3o \xE0 a\xE7\xE3o de Deus
Am        F       C   G
E ao clamor do povo escolhido
Am        F      C      G
As barreiras cair\xE3o, as correntes quebrar\xE3o
Dm         F      G
Ao clamar o santo nome do senhor

F      Am
Jesus, Jesus, Jesus, Jesus!
F      G
Jesus, Jesus, Jesus, Jesus!`},{id:"d28",t:"At\xE9 quando",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1PpPEEeh4oDq6CAVkriWMW0vIqb5fQ_jf.pdf",cifra:`At\xE9 quando

       D G/D
At\xE9 quando seu cora\xE7\xE3o

D G
Ficar\xE1 t\xE3o fechado a Cristo
D G/D
Insistindo em dizer n\xE3o

G
Que orgulho \xE9 esse, amigo?

D G/D
O seu \xF3dio, sua solid\xE3o

D G
N\xE3o o deixa ver o caminho
D G/D
Que conduz para salva\xE7\xE3o

D G
E se perde por entre espinhos

Bm A D/F# G
Deus \xE9 a paz que voc\xEA procura
C Bm

N\xE3o importa sua situa\xE7\xE3o
A D/F# G
Ele o chama a toda hora

C Bm
D\xEA ao menos uma reposta`},{id:"d29",t:"AUGUSTA RAINHA",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1qlLlzK4yk5I4ZLSNvI9Heqpma8GLncDO.pdf",cifra:`AUGUSTA      RAINHA

  D       A        G
\xD4 Augusta Rainha do c\xE9u soberana dos anjos
  D        A     G
Recebeste de Deus o poder e a miss\xE3o
  Bm7       A/C#   D/F#      G
De pisar a cabe\xE7a do mau e por isso rogamos a v\xF3s
   Em7        A        G   G/B  A/C#
Que envieis o ex\xE9rcito celeste para nos ajudar
                                                 2
D   A/D   D/F#      G
Salve Maria, Augusta Rainha do c\xE9u
    Bm7       A        G  G/B A/C#
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o
D   A/D  D/F#       G
Salve Maria, Augusta Rainha do c\xE9u
    Bm7       A        G
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o
   A          Bm7
Perseguindo os dem\xF4nios combatendo todos eles
  G            A
Reprimindo sua aud\xE1cia precipitando o abismo

D   A/D  D/F#       G
Salve Maria, Augusta Rainha do c\xE9u
    Bm7       A        G
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o
D   A/D  D/F#       G
Salve Maria, Augusta Rainha do c\xE9u
    Bm7       A/C#      D   Em7 D/F# G  A
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o
D   A/D  D/F#       G
Salve Maria, Augusta Rainha do c\xE9u
    Bm7      F#m7        G  G/B A/C#
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o
D   A/D  D/F#  A     G
Salve Maria, Augusta Rainha do c\xE9u
    Bm7        A/C#      G
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o
    Bm7        A/C#  D    G
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o
   Bm7        A/C#  D    G
Ao teu comando os anjos batalhar\xE3o e vencer\xE3o`},{id:"d30",t:"AVE MARIA \u2013 COLO DE DEUS",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1TnHZ8cjFe5rNInl8ndjPRlhsHkwjskSd.pdf",cifra:`AVE   MARIA    \u2013 COLO    DE  DEUS

      G/D
Existe uma rainha aqui
    G/B
Coroada de estrelas
        G/D
A Lua embaixo dos seus p\xE9s
     G/B
Adornada pelos anjos

D9/F#     G
Seu nome \xE9 Maria
       D9
Seu nome \xE9 Maria

      G
Seu nome \xE9 Maria
       D9    A
Seu nome \xE9 Maria

D9
N\xE3o existe nada que n\xE3o passe por ela

Tudo o que tenho eu consagro a ela
 Em                     G
Quando eu chamo  Maria eu chamo  tamb\xE9m  Jesus
D9
N\xE3o existe nada que n\xE3o passe por ela

Tudo o que tenho eu consagro a ela
 Em                     G
Quando eu chamo  Maria eu chamo  tamb\xE9m  Jesus

D9                               D9
Ave Maria                       Gratia plena

Em7    G                        Em7   G
Dominus tecum                   Ave Maria
 D9                             D9
Gratia plena                    Ave Maria
Em7   G                         Em7     G
Ave Maria                       Dominus tecum
D9                               D9
Ave Maria                       Gratia plena
Em7     G                       Em7   G
Dominus tecum                   Ave Maria`},{id:"d31",t:"Barco a Vela",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1h3V7wpUkKk9g0mgU7OyVmIPzWP4sgXPC.pdf",cifra:`Barco a vela

         C    G/B     F
Insisto em persistir em meus desejos

 C     G/B     Am
Insisto em s\xF3 fazer do meu jeito
 F     G      Am
Me perco querendo ser Deus de mim

 C  G/B     Am   Am
Escolhe mal quem escolhe s\xF3
 C    G/B     Am   F

Quem deixa Deus ser Deus, v\xEA melhor
 F     G      Am
Aquilo que os olhos n\xE3o podem ver

 Fm           Am
Por isso deixo aqui meu querer
 Fm          G   G7
Por isso deixo aqui meu querer

(coro)
 C  G/B     F

Guia-me Senhor por onde aprouver
 C  G/B       F
Calo meu querer para ouvir o que Deus quer
 Am     G    F

Barco \xE0 vela solto pelo mar
 Am     G    F
Vou para onde o vento do Senhor levar

 C  G/B     F
Guia-me Senhor por onde aprouver

 C  G/B       F
Calo meu querer para ouvir o que Deus quer
 Am     G    F
Barco \xE0 vela solto pelo mar

 Am     G    F

Vou para onde o vento do Senhor levar`},{id:"d32",t:"Bel\xEDssimo Esposo",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1O8ltQP1x7RF5RTs64cNI-XWGBECeqb7u.pdf",cifra:`Bel\xEDssimo Esposo

Em   D G/B     C        Em

Beijo a Tua paix\xE3o que me liberta das minhas paix\xF5es
  D    C9    Am   C   D4    D
Beijo a Tua cruz que condena e esmaga o pecado em mim

Em   D G/B     C        Em
Beijo Teus cravos, Tuas m\xE3os que apaga o castigo do mal
  D   C9    Am   C    D4   D

Beijo Tua ferida que curou a ferida do meu cora\xE7\xE3o
  C       D/C   Bm    Em D C9
Eu Te beijo Senhor e a Tua paix\xE3o \xE9 o Meu Tudo!

   G
\xC9s Meu Tudo, Jesus
 C D   G  Em C

Amado de minh?alma

G      D

Oh Bel\xEDssimo Esposo!
     Am       C  D    G
Mais belo que todos os homens! Santo, santo \xE9s Tu!
     D

Bel\xEDssimo Esposo!
      Am        C  D   Em
Esconde-me em Teu lado aberto! Em Tua chaga de Amor...

D   C
de Amor!

Em   D G/B     C        Em
Beijo a lan\xE7a que abriu a fonte do Amor imortal, a
  D    C9    Am   C   D4    D

fonte do Amor sem fim Que pagou o que eu n\xE3o poderia pagar
Em   D G/B     C        Em
Beijo o Teu lado aberto jorrando rios de vida e de paz

  D   C9    Am   C    D4   D
Fazendo brotar em mim Um canto novo, um hino esponsal
  C       D/C   Bm    Em D C9

Beijo Tuas vestes que esconderam minhas mis\xE9rias
   G
Vergonha n\xE3o h\xE1
 C D   G  Em C

Me adornas com Amor!

(Refr\xE3o)

Em   D G/B     C        Em
Beijo os len\xE7\xF3is que envolveram o Teu corpo ferido de Amor
  D    C9    Am   C   D4    D

E cobriram meu cora\xE7\xE3o revestiram-me de realeza
Em   D G/B     C        Em
Beijo o Teu Santo Sepulcro testemunha da Ressurrei\xE7\xE3o

  D   C9    Am   C    D4   D
Quero ressuscitar tamb\xE9m e encerrar-me dentro de Ti
  C       D/C   Bm    Em D C9
Quero em Ti mergulhar

   G
E ent\xE3o renascer na Tua chaga criadora
 C D   G  Em C

Descansar a minh?alma em Teu cora\xE7\xE3o!

(Refr\xE3o)`},{id:"d33",t:"Bom Demais",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1SwLGRCh3rKlAD3TsUU2n9juRfFPgCQQz.pdf",cifra:`Bom Demais

       E             B A       E
Bom demais, Jesus \xE9 demais. Ele \xE9 bom demais. (2x)

Instrum: C#m B C#m A B C#m (2X) B

E           A         E          B
Bom demais da conta, s\xF4, \xE9 viver com Cristo, minha confian\xE7a e abrigo.

E             A              E   B    E
Deus se faz presente em mim mesmo que eu n\xE3o creia, porque Ele \xE9 bom demais(2x)

C#m       B    C#m A        B
Quem confia no amor de Deus pode ver que \xE9 bom demais.`},{id:"d34",t:"Bom \xE9 louvar",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1DMhUnQHZPF-CKyX-d8BQiYWAb-bLKgeH.pdf",cifra:`Bom \xE9 louvar

       D            G
Bom \xE9 louvar o nosso Deus

    A        D
Bom \xE9 louvar Bom \xE9 louvar

             G

E quando Ele vem vem vem
     A       D
O teu Esp\xEDrito fica aqui

               G
E quando Ele vem vem vem
          A      D

Nos enche de alegria amor e paz

  G    A    Bm
Ai ai ai ...

  G    A    Bm
Ai ai ai ...`},{id:"d35",t:"Busque o alto",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/16oXPy4qsM6a_6OofET63cw2T4_-W2QuX.pdf",cifra:`Busque o alto

Intro : G, Am7, C, D

 G              Bm
Uma vida nova em Cristo venha experimentar
  C            D

E de cora\xE7\xE3o rendido, dia a dia se entregar
  G           Bm
Com os olhos para o alto daqui menos depender
   C

Para o mundo estamos mortos
  C#\xBA        D
Nossa vida escondida est\xE1 em Deus

Nasci pro c\xE9u...
G      Am7      C      D
Olhe, olhe mais longe, al\xE9m do mundo, voe pro c\xE9u

G       Am7       C
Busque, busque o alto, p\xF4r sobre a vida
  Cm        G   Am7, C, D

Veja o trono, onde est\xE1 Deus!

(Al\xE7ando v\xF4o se lan\xE7ar)

   G           Bm
Vem do c\xE9u essa alegria que me faz compreender
  C        D
Vejo al\xE9m da agonia \xE9 certo eu vou vencer

 G             Bm
Se levante para Cristo, n\xE3o se arraste mais ao ch\xE3o
  C          C#\xBA

Meu irm\xE3o cabe\xE7a erguida, Ele tr\xE1s a nova vida
 D
O amor e o perd\xE3o, olhe pro c\xE9u...
 C        D   Bm      E7

Se portanto ressuscitastes, buscai tudo que est\xE1 no alto
Am7     D       C    Cm   G  Am7, C, D

Onde Cristo \xE9 tudo em todos, vem \xE0 vida nova se lan\xE7ar.`},{id:"d36",t:"Cada Dia",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1SCi1H2ukcjNlLlSlY4lRCAetoMbnvROA.pdf",cifra:`Cada Dia \u2013 Davison  Silva

(intro 2x) C G/B Am D7(9) G/B

 C     G/B   C     G/B
Recebe essa alian\xE7a, sinal do meu amor.
 C       D        G  Em
Sinal do amor de Deus que nos escolheu
   C       D  G/B    (G)
E nos entregou um ao outro (2x)

 G  D/F# Em
Recebe essa alian\xE7a
 Am      G/B
Sinal de Deus conosco
 C      D
Sinal de que ser\xE1 pra sempre
 G  D/F# Em
Recebe essa alian\xE7a

 Am      G/B
Sinal de Deus conosco
 C       D        (Em C  G/B  D)(2X)
Sinal de que estar\xE1 pra sempre entre n\xF3s.

( F G ) (3x)

( E4 E )

 A     E/G#  A     E/G#
Recebe essa alian\xE7a, sinal do meu amor.
 A       B        E C#m
Sinal do amor de Deus que nos escolheu
   A      B     (E)
E nos entregou um ao outro (2X)

 E  B/D# C#m

Recebe essa alian\xE7a
 F#m     E/G#
Sinal de Deus conosco
 A      B
Sinal de que ser\xE1 pra sempre
 E  B/D# C#m
Recebe essa alian\xE7a
 F#m     E/G#
Sinal de Deus conosco
 A      B          C
Sinal de que estar\xE1 pra sempre entre n\xF3s.

 F  C/E Dm
Recebe essa alian\xE7a
 Gm      F/A
Sinal de Deus conosco
 Bb     C
Sinal de que ser\xE1 pra sempre
 F  C/E  Dm
Recebe essa alian\xE7a
 Gm      F/A
Sinal de Deus conosco
 Bb      C         F
Sinal de que estar\xE1 pra sempre entre n\xF3s.`},{id:"d37",t:"Caminho Seguro",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BmUVsKRACW5w09ANXwp_EoZcVql7SrB8.pdf",cifra:`Caminho    Seguro  \u2013 Dunga

E       G#m       A

Quando o cora\xE7\xE3o se entristece
       B          E  G#m  A B
Clamo a Deus que me consola
 E       G#m        A

Me aponta ent\xE3o o seu caminho
      B        E G#m  A  B
Brilha a luz do meu viver
  E         G#m        A
E sinto em minha vida a brisa mansa

     B          E  G#m  A B
E uma paz que \xE9 verdadeira
  E        G#m       A
Creio: Deus me ama e cuidar\xE1 de mim

   F#m    B    E G#m A
N\xE3o tenho o que temer

 B  E G#m A   B
S\xF3 Jesus,  Jesus
    E     G#m       A    B
Com Ele vou viver a vida inteira assim

    E     G#m     A
Com Ele eu caminho seguro
 B C#m  G#m F#m
Sou feliz,

      B     E  G#m A
Jesus \xE9 tudo pra mim
      B     E  G#m A
Jesus \xE9 tudo pra mim
      B

Jesus \xE9 tudo

  E       G#m
Quando o cora\xE7\xE3o...`},{id:"d38",t:"CANTIGA DE MATRIM\xD4NIO",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1uwWi7eaY9VdBJU0vpgxZ9eZnLhzb6BG7.pdf",cifra:`CANTIGA     DE   MATRIM\xD4NIO

       A           E
Eu te Agrade\xE7o tanto, por esse amor bonito, Que entrou na minha vida
       D        A
Entrou e foi ficando e me envolveu
                     E
Me trouxe um novo encanto, Mostrou-me o infinito
                D       A  A7
E aquela dor do\xEDda, a dor da solid\xE3o, N\xE3o mais doeu

        D    D#\xBA        A
Eu disse aonde eu ia, Contei-te os sonhos meus
  F#      F#/Bb   Bm  Bm7+    F#
Disseste que era teu o meu cami - in - inho
  F#      F#/Bb  Bm   Bm7+   F#
Encheste a minha vida de cari - in - inho
  Bm      E      A
Disseste que tamb\xE9m buscavas Deus!

       A          E
Eu te agrade\xE7o tanto, por este matrim\xF4nio, Que se tornou meu sonho
         D       A
Que \xE9 muito mais bonito que eu pensei, \xC9 grande, \xE9 puro, \xE9 santo
       E
\xC9 cheio de lembran\xE7as, \xC9 feito de esperan\xE7as
      D       A A7
Te amo e pra sempre te amarei

         D     D#\xBA     A
Com Deus por testemunha, Eu juro neste altar
  F#     F#/Bb     Bm   Bm7+  F#
Que venha o que vier em nossos di__________as
    F#    F#/Bb    Bm  Bm7+  F#
Por entre mil tristezas e alegri__________as
  Bm        E      A
Pra sempre, sempre, sempre vou te amar`},{id:"d39",t:"Can\xE7\xE3o de Pedro",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1qfnFaWzBuEkaHNHNR9aWox2rMkQLAoV9.pdf",cifra:`Can\xE7\xE3o   de  Pedro

Intro: A F#m D A/C# Bm E

A  F#m
Pescador fixo meu olhar
   D Bm
No horizonte desse imenso mar
G      E

Sei que n\xE3o posso mais voltar
A   F#m
Sigo assim certo da miss\xE3o
   D     Bm
que tenho que cumprir ,continuar
 G   D/F# E
os passos do meu Senhor

Refr\xE3o:
A        D C#m      F#m
Eu vou jogar minhas redes onde o Senhor me mandar
D       Bm   G   D/F# E
Certo de que vou enche-las de almas pro reino de Deus

A   F#m

Sim senhor eu te amo de
  D    Bm
todo o cora\xE7\xE3o n\xE3o vou te negar
G     E
Vou cuidar dos teus
A    F#m
Vou falar sem medo a toda a alma
 D   Bm

que encontrar vou remar
 G  D/F# E
Pra dentro desse mar

Refr\xE3o:
A       D C#m      F#m
Eu vou jogar minhas redes onde o Senhor me mandar
D       Bm   G   D/F# E

Certo de que vou enche-las de almas pro reino de Deus

D E   A E/Ab  F#m
Eu um simples Pedro um pescador
D       Dm
Chamado por Deus a buscar outro mar...

Solo: A E/Ab G F#m F A Bm G E

Refr\xE3o:
A        D C#m      F#m
Eu vou jogar minhas redes onde o Senhor me mandar
D       Bm   G   D/F# E

Certo de que vou enche-las de almas pro reino de Deus ...(2x)

D E   A E/Ab  F#m
Eu um simples Pedro um pescador
D       Dm
Chamado por Deus a buscar outro mar...

( A Asus )`},{id:"d40",t:"Celebra a vit\xF3ria",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1R8mbjv6LhEHfN4i9jzwvJzscd2fn1qBc.pdf",cifra:`Celebra      a  vit\xF3ria

Intro: Em  Em9/D   C Am   Bm  (Bm9)

Em  Em9/D          C

V\xEA! Quem    te elegeu, te ungiu  e consagrou

Am   Bm     Em        Em9/D
N\xE3o  temas!  Nos  l\xE1bios santos  teu  nome   ressoou

Em         Em9/D

N\xE3o  te chamou   como   um   servo qualquer

C

Mas  com   carinho, um   filho seu

Em         Em9/D

Te capacitou,  toda  for\xE7a te deu

C
Amparou    e acolheu

Em          Em9/D           C

Ergue-te,  pois, Deus  te fez um  vencedor!

      G

Celebra  a vit\xF3ria!

 D/F#            Em   C

O Senhor   Jesus regressando    est\xE1

G     D/F#      Em      C
Vit\xF3ria? Canta  com   un\xE7\xE3o  tua vida!

Em       Em9/D        C

Cr\xEA! O  tempo   \xE9 curto e nao  da para  esperar

Am  Bm      Em       Em9/D        C

tu n\xE3o  v\xEAs! O tentador   so proucura   te enganar!  ...`},{id:"d41",t:"Celebrai",tom:"F#",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1JrgxqmAZBUssaUzj0WxQBWp9K3fqgiYj.pdf",cifra:`Celebrai      a  Cristo

Tom: F#

E Abm  A   B    E      A B
Celebrai a Cristo, Celebrai.

E Abm  A   B    E      A B

Celebrai a Cristo, Celebrai.
E Abm  A   B    E      A B

Celebrai a Cristo, Celebrai.

E Abm  A   B    E      A B
Celebrai a Cristo, Celebrai.

B      C#m         B      C#m

Ressucitou, Ressucitou. Ele vive para sempre.

B      C#m         B      C#m
Ressucitou, Ressucitou. Ele vive para sempre.

B         A Bb B

E vamos  celebrar
B         A Bb B

Vamos  celebrar

B
Vamos  celebrar

A      B    E

Ressucitou meu  Senhor`},{id:"d42",t:"Cheiro de Rosas",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1yUHJoVo4x4BHSYHf03XPPlMzmE5y6F-Z.pdf",cifra:`Cheiro    de  Rosas

Em7             D/F#               C9

     Est\xE1s     aqui,     agraciada

Em7                 D/F#              C9
     Posso     sentir     teu    perfume

Em7                 D/F#                   C9

     Est\xE1s     aqui,     m\xE3e   do   meu    Senhor

Em7                       D/F#         C9
     Vem   ficar     perto     de   mim

                  G                 D/F#
Cheiro     de   rosas     nesse     lugar

     C9              D/F#

Maria,     aqui     est\xE1

           Em                  C                D/F#
E  o  Espirito       de   Deus     descer\xE1

                  G                    D/F#

Cheiro     de   rosas     nesse     lugar
      C9               D/F#

A  rainha      presente       est\xE1

          Em                   C       D/F#

Pentecostes         acontecer\xE1`},{id:"d43",t:"Chuva de Gra\xE7a",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18cN2N0oNAP_z2W8F9IABq6p9Elhlz6J0.pdf",cifra:`Chuva    de  Gra\xE7a    \u2013 Eros   Biondini

E                  B

H\xE1  uma  chuva  de  gra\xE7a aqui

C#m                   A

Est\xE1 chovendo    sobre todos  n\xF3s
E

E quem   mais  se entregar

C#m          A

Mais  se molhar\xE1
E                  B

H\xE1  uma  semente   pra germinar

C#m                   A

E muitos  frutos a se produzir

E            B
Na  terra do cora\xE7\xE3o

          C#m   B7

Derrama   tua gra\xE7a

      E             B

Chuva   de  gra\xE7a   pedimos   a Ti

C#m                    A

Chuva   de  gra\xE7a  derrama    em  n\xF3s
      E           B

Chuva   de  gra\xE7a  neste  lugar

 C#m      A

Derrama!`},{id:"d44",t:"CIFRAS MISSA DOM BOSCO 31 JAN 25",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/10k_EEXUKlP3jZeko86ouSouZ-_lnX7ky.pdf",cifra:`LEMBRAN\xC7AS

C    F/ C C

Eu te vejo andando   nas ruas
F/C  C
com  aquele sorriso de pai.
F    Em   Am

Eu te vejo vagando  nas pra\xE7as,
Om   G    C
levando o amor  e a paz.

Eu te vejo brincando nos p\xE1tios
G    Am
com aqueles que  vivem sem  p\xE3o.
F    G    Arts

Eu teu vejo bem perto dos jovens
     C
com aquela  presen\xE7a de irm\xE3o.

C7   F  G/ F  Em
Eu quero   aprender     o teu   jeito de amar
Am   Dra  G   C
e hoje  viver como   soubeste   viver.

C7   F    G/ FEm
Eu quero   seguir  o caminho    do Pai
Am   Dm   G   C
e ser  para  os  jovens      um   instrumento     de

paz.

E te vejo sonhando futuro

E buscando  um mundo   melhor

Eu te vejo rompendo os muros

pra levar a mensagem  de amor.

Eu te vejo naquela alegria

que nos mostra o caminho de Deus.

Eu te vejo cantando a Maria

e vivendo para os jovens seus.

            CORA\xC7\xC3O           INQUIETO

   Am            Dm

Senhor,  venho  pedir  perd\xE3o
      Am       E

 Pois pequei  contra  v\xF3s
Am            Dm

E com  meu   cora\xE7\xE3o  inquieto
Am     E  Am
Resolvi voltar

A7                 Dm
E mesmo    sem  saber  como   expressar-me

  Am      E    Am
Pe\xE7o  vossa  miseric\xF3rdia

A7          Dm
Senhor,  miseric\xF3rdia

G          C
Cristo, miseric\xF3rdia

Am        Dm
Senhor,  miseric\xF3rdia

   E      Am
Meu  Pai resolvi voltar

   A7     Dm
Senhor,  miseric\xF3rdia

G      C
Cristo, miseric\xF3rdia

 Am        Dm
Senhor,  miseric\xF3rdia

   E         Am
Meu  Pai resolvi... vou voltar

           Gl\xF3ria    a Deus    nas   Alturas

   D         C
   Gl\xF3ria a Deus nas alturas

    G                 D
   E paz na terra aos homens por Ele amados
     D    C       G          D
   Senhor Deus, Rei dos c\xE9us, Deus Pai todo poderoso
         Am D
   N\xF3s vos louvamos
          Am D
   N\xF3s vos bendizemos
         Am D

   N\xF3s vos adoramos
          Am D
   N\xF3s vos glorificamos
           C      G       D
   N\xF3s vos damos gra\xE7as, por vossa imensa gl\xF3ria.
    D      C  G     D
   Senhor Jesus Cristo, Filho Unig\xEAnito
    D        C      G        D
   Senhor Deus, Cordeiro de Deus, Filho de Deus Pai
   Am        G        C         D

   V\xF3s que tirais o pecado do mundo, tende piedade de n\xF3s
   Am        G
   V\xF3s que tirais o pecado do mundo
   C        D
   Acolhei a nossa s\xFAplica
   Am         G
   V\xF3s que estais \xE0 direita do Pai
   C         D
   Tende piedade de n\xF3s
         Am D

   S\xF3 v\xF3s sois Santo
          Am D
   S\xF3 v\xF3s sois o Senhor
         C       D
   S\xF3 v\xF3s o Alt\xEDssimo, Jesus Cristo
   E       A
   Com o Esp\xEDrito Santo
            G   D
   na gl\xF3ria de Deus Pai. Am\xE9m!

            SENHOR       TUA     PALAVRA

E           B                E

Senhor  a tua  Palavra nos  faz lembrar  Maria
   A      E        B        E   E7
N\xE3o  s\xF3 a meditava   / mas  sempre   a cumpria.

    A   B   E  C#m    F#m      B7   E

Aleluia,  aleluia,  a - le - lui - a
    A   B   E  C#m    F#m       B7    E

Aleluia,  aleluia,  a - le  - lui - a

E           B                E

Dom   Bosco  dela fala com   f\xE9 e gratid\xE3o
   A      E        B        E   E7

Foi ela quem   fez tudo na  sua congrega\xE7\xE3o.

E           B                E
Agora  ela ensina  pra quem   \xE9 aprendiz
   A      E        B        E   E7

Jesus \xE9 plena  vida fazei o que  vos  diz.

    O   SENHOR         COLOCOU-NOS               NO
                       MUNDO

    Gm            F            Gm
O Senhor  colocou-nos   no  mundo
          Cm   F        Bb   D7
Para  os outros,  meu  amigo

        Gm            F         Bb   F  Gm
Quem  demora  em se  dar nessa  vi_da_aa
         D7         G   C   G
Corre  grande  perigo

                Em                      A7
Nesta  hora,  Senhor,  na alegria   do ter
                   D    B7

Quero  a vida  te dar
                Em           C       G
Dar a  m\xE3o ao  menor  e me  comprometer
       D7         G    C  G

Na coragem   de amar

   Gm             F           Gm
\xC9 feliz  quem  a Ele  se entrega

       Cm  F            Bb   D7
Desde  cedo,  quando  jovem
      Gm        F         Bb   F   Gm
Muito  fruto  depois  colher\xE1-a-a

      D7              G   C   G
Como  o filho  do homem

[Refr\xE3o]

                Em                      A7
Nesta  hora,  Senhor,  na alegria   do ter
                    D   B7
Quero  a vida  te dar

                Em           C       G
Dar a  m\xE3o ao  menor  e me  comprometer
       D7         G    C  G

Na coragem   de amar
     SANTO       2  - AMOR      E  ADORA\xC7\xC3O

 G        D/F#      C         D

Santo    santo    san....anto
 G       D/F#            D/C     C   D/C    C

Senhor   Deus   do  universo

F                     C                   G

C\xE9us  e  terra   proclamam    a  vossa   gl\xF3ria
F         C          D
Hosana   nas  alturas

F                 C                 G
Bendito   o  que  vem   em  nome  do  Senhor

F         C         D
Hosana   nas  alturas

         CORDEIRO              DE     DEUS

  G                          Bm7            C9   D4

D
Cordeiro  de Deus   que tirais o pecado  do

  C9           D4       D
mundo,   tende  piedade

   G                         Bm7            C9   D4
D
Cordeiro  de Deus   que tirais o pecado  do

  C9           D4       D
mundo,   tende  piedade

Em                        Bm                       C    D

Cordeiro  de Deus   que tirais o pecado  do  mundo
            G   D/F#         C9   D
Dai-nos  a paz, dai-nos  a paz

            G   D/F#         C9   D
Dai-nos  a vossa  paz, dai-nos  a  paz

               CORPO       SANTO       (F)

F                   C/E  Dm7
  Quando vou ao Teu encon_tro
Bb9   Gm7         C4    C   F
  Receber Teu corpo San___to
                C/E     Dm7
Sinto forte Tua presen\xE7a em mim
Bb9     Gm7        C4 C
    Teu amor a me tocar

F              C/E    Dm7
 Podes tocar em mim, Senhor
       Dm7/C     Bb9
Podes curar a minha dor
       Gm7       C4  C
Podes viver em mim, Senhor
Dm7       Dm7/C        Bb9
   Podes tocar em mim, Senhor
       F/A       Gm7
Podes curar a minha dor
       Bb9          C4
Podes viver em mim, Senhor

Bb9    C    Bb/F F   C/E     Dm7
  Teu corpo San___to a  me tocar
          Dm7/C       Bb
Com o Teu poder a me curar
         Gm          C
Toda minha vida transformar
Bb9    C    Bb/F F   C/E     Dm7
   Teu corpo San__to a  me tocar
          Dm7/C       Bb
Com o Teu poder a me curar
         Gm          C4   C
Toda minha vida transformar

F                 C/E Dm7
  Algo invade o meu cora\xE7\xE3o
Bb9           Gm7       C4    C
   Teu corpo e Sangue me curan___do
F                    C/E   Dm7
  Sinto, j\xE1 n\xE3o sou igual
Bb9           Gm       C
   Todo o meu ser se renovando
                   P\xD5E    TUA     M\xC3O
C               F
Nossa Senhora Auxiliadora
Dm               F    G
Por tuas m\xE3os aqui estamos n\xF3s
C9                  C/E
Caminhas sempre ao nosso lado
F                G
O teu amor de m\xE3e sempre nos guiou
C/E             Em
De Dom Bosco e Mazzarello
F               G
Foste sempre intercessora
F   G         C G  Am
Na miss\xE3o de evange-li-zar
     F          G        C    Gm11
E as suas vidas aos jovens dedicar

 G11+ F           G
P\xF5e Tua m\xE3o,  minha Rainha
      C  G          Am   C/G
P\xF5e tua m\xE3o  antes da minha
  F               G
\xC9s nossa M\xE3e Auxiliadora
        C  Gm11
Ora por n\xF3\xF3s
   G11+ F          G
P\xF5e tua m\xE3o, minha Rainha
      C  G          Am  C/G
P\xF5e tua m\xE3o antes da minha
  F                G
\xC9s nossa M\xE3e Auxiliadora
        C   F  G
Roga por n\xF3s
C                F
Nossa Senhora Auxiliadora
Dm            F G5
\xC9s a nossa m\xE3e e mestra
C               Am
Foste Tu quem tudo sempre fez
F                G
E a teu filho sempre nos levou
C/E             Em
De Dom Bosco e Mazzarello
F                G
Foste sempre intercessora
F    G         C G Am
Na miss\xE3o de evange-li-zar
F               G5      C    Gm11
E as suas vidas aos jovens dedicar
                     DOM    BOSCO
G                       Bm    Em
Viveu,  trabalhou,   sofreu,  se alegrou
C                         Am          C/D
N\xE3o perdeu   tempo e  com a  vida  evangelizou
G                       Bm    Em
Viveu,  trabalhou,   sofreu,  se alegrou

C                         Am          C/D
N\xE3o perdeu   tempo e  com a  vida  evangelizou

Em                D/E

Dai-me  almas  e ficai  com  o resto
  C/E                          C/D
O que  importa  \xE9 a  juventude  santa
Cmaj7              Bm

Dai-me  almas  e ficai  com  o resto
Am                               C/D
O que  importa  \xE9 a  juventude  santa

G                       Bm    Em
Fiel  ao Senhor,  Dom  Bosco  se gastou
C                         Am          C/D

N\xE3o perdeu   tempo e  com a  vida  evangelizou
G                       Bm    Em
Fiel  ao Senhor,  Dom  Bosco  se gastou
C                         Am          C/D

N\xE3o perdeu   tempo e  com a  vida  evangelizou

Em                D/E
Dai-me  almas  e ficai  com  o resto

  C/E                          C/D
O que  importa  \xE9 a  juventude  santa
Cmaj7              Bm
Dai-me  almas  e ficai  com  o resto

Am                               C/D
O que  importa  \xE9 a  juventude  santa`},{id:"d45",t:"Colo da M\xE3e",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1O9Y2JKp7OajJ6lvj3qNEWnlgl5mdYn5J.pdf",cifra:`Colo da M\xE3e

Intro: E A Am/E E C#m F#m A B

E    A
Ave cheia de gra\xE7a
Am/E E
Bendita sejas M\xE3e
E      A
Te amo com amor eterno
 Am/E  E

Singelo de cora\xE7\xE3o
E     A
Quero ent\xE3o colocar
Am/E   E
Minha vida em tuas m\xE3os
E      A
Sentir que podes ninar-me
Am/E     E

M\xE3ezinha com tua prote\xE7\xE3o

    C#m7      A
Eu quero deixar que teu plano em mim
   F#m     B
Possa realizar sem limita\xE7\xF5es
   C#m      A
E quero tentar sem por\xE9m saber

   F#m      D  B
Ser um pouquinho do que tu \xE9s

(refr\xE3o 2x)

(repete tudo)

Solo: C#m A F#m B C#m

(refr\xE3o) (2x)

E    A     Am   E
Ave Cheia de Gra\xE7a..........Uh Uh Uh Uh`},{id:"d46",t:"Com Muito Louvor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1FLCvi2jdVgVk2y-sYVc2ofFg7KHT_HG-.pdf",cifra:`Com   Muito  Louvor   \u2013 Cassiane  (gospel)

A                         D D4 D
Deus n\xE3o rejeita ora\xE7\xE3o, ora\xE7\xE3o \xE9 alimento
Bm                E                  A A4
Nunca vi um justo sem resposta, ou ficar no sofrimento
A                          D D4 D
Basta somente esperar o que Deus ir\xE1 fazer
Bm                E            A
Quando Ele estende suas m\xE3os \xE9 a hora de vencer
Ent\xE3o louve, simplesmente louve
        D
T\xE1 chorando louve, precisando louve
        E

T\xE1 sofrendo louve, n\xE3o importa louve
            A  A4
Teu louvor invade o c\xE9u...
A
Deus vai na frente abrindo caminho
 F#m
Quebrando as correntes, tirando os espinhos
 D
Ordena aos anjos pra contigo lutar
 E
Ele abre as portas pra ningu\xE9m mais fechar
A
Ele trabalha pra o que nele confia
 F#m
Caminha contigo de noite ou de dia
 D
Erga suas m\xE3os sua b\xEAn\xE7\xE3o chegou

 E                 A
Comece a cantar com muito louvor
       F#m          D
Com muito louvor, com muito louvor
      E4 E
Com muito louvor
A                               D D4 D
A gente precisa entender, o que Deus est\xE1 falando
 Bm           E                      A A4
Quando Ele fica em sil\xEAncio, \xE9 porque est\xE1 trabalhando
A                          D D4 D
Basta somente esperar o que Deus ir\xE1 fazer
Bm                E            A
Quando Ele estende suas m\xE3os \xE9 a hora de vencer`},{id:"d47",t:"Com tua M\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1WLRIzPE8sLvThI_PxRiYKNTPVRQ1mJIA.pdf",cifra:`Com  tua M\xE3o

A    E/G#     F#m7
Com  Tua m\xE3o, \xF3 meu Senhor,

    E/D D    A/E
Segura a mi..nha

      C#m7        D7+
Pois n\xE3o me atrevo a um passo s\xF3

      Dm6         E4 E Bb
Sem teu amparo,..... sem teu apoio

A    E/G#     F#m7

Com  Tua m\xE3o, \xF3 meu Senhor,
    E/D D    A/E

Segura a mi..nha
      C#m7        D7+

Pois n\xE3o me atrevo a um passo s\xF3
      Dm6         E4 E

Sem teu amparo,..... sem teu apoio

REFR\xC3O
    A9      E/G#   F#m7

Eu n\xE3o darei, eu s\xF3 iria fraquejar
   F#m7/E    D7+

Eu andaria a vacilar
    E       A  E/G#

Sem tua m\xE3o a me sustentar
F#m      F#m/E    D7+

 Mas se tua m\xE3o me segurar
  E   F#m    F#m/E

Eu correrei at\xE9 voar
D7+      E    A

 Subirei apoiado em ti`},{id:"d48",t:"Como s\xE3o Belos",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1QoQYIm8kUX74ps7V-Xq1TQ-e3Ern82yL.pdf",cifra:`Como  s\xE3o Belos

Introdu\xE7\xE3o: C C7
C7    F   G     C G/B(Am)  Dm  G C (C7)
...Como s\xE3o belos os p\xE9s do mensageiro que anuncia a paz
    F   G     C  (A7)  Dm  G7   C (C7)
Como s\xE3o belos os p\xE9s do mensageiro que anuncia o Senhor

 F  F#\xBA  C G/B (Am) Dm G C (C7)
Ele vive, Ele reina, Ele \xE9 Deus e Senhor
 F  F#\xBA  C G/B (Am) Dm G C (C7)
Ele vive, Ele reina, Ele \xE9 Deus e Senhor

    F   G     C G/B Am    Dm G    C (C7)
O meu Senhor chegou com toda Gl\xF3ria, vivo Ele est\xE1, Ele est\xE1
     F    G     C    Am     Dm G   C (C7)
Bem junto a n\xF3s, Seu Corpo Santo a nos tocar. E vivo eu sei, Ele est\xE1

 F  F#\xBA  C G/B (Am) Dm G  C (C7)
Ele vive, Ele reina, Ele \xE9 Deus e Senhor
 F  F#\xBA  C G/B (Am) Dm G  C (C7)
Ele vive, Ele reina, Ele \xE9 Deus e Senhor`},{id:"d49",t:"Como \xE9s lindo",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1-1sjOD7gtQh7JV6xt7Dc9LMWToTueOXp.pdf",cifra:`Como      \xE9s  lindo   \u2013  Vida   Reluz

D                  F#m7        Bm    Bm/A

Que  bom   Senhor,  ir ao teu encontro

G                       A7      D      A7
Poder  chegar  e adentrar  \xE0 tua  casa

Bm             F#m7        G       A7
Sentar-me   contigo  e partilhar da mesma    mesa

D   F#m7     Bm   F#m7

Te olhar, Te  tocar
G                  A7               D    A7

E te dizer: meu  Deus,  como   \xE9s lindo
Bm    F#m  Bm     F#m

Te olhar, Te  tocar

G                 A7                D    A7
E te dizer: meu  Deus,  como   \xE9s lindo

D                F#m7               Bm  Bm/A
\xD3 meu   senhor,  sei que  n\xE3o sou  nada

G                   A7            D            A7
Sem   merecer  fizeste em  mim   tua morada

Bm        F#m7        G              A7

Mas   ao receber-te  perfeita comunh\xE3o     se cria
D   F#m7      Bm    F#m7

Sou  em  ti, \xE9s em mim
G                       A7              D   A7

Minh'alma   diz: Meu  Deus  como   \xE9s lindo`},{id:"d50",t:"Compaix\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/14sHRAJurXt8PL1gAykD3v6I4jW4CTgdv.pdf",cifra:`Compaix\xE3o   \u2013 Dunga

F          C     Bb                F
 Compaix\xE3o \xE9 um jeito profundo de amar
          C   Bb                F
Penetrando a dor que n\xE3o deixa gritar
          C       Bb       C

Sente tudo e n\xE3o precisa explicar

F              C        Bb         F
 Existe algu\xE9m que me conhece muito bem

          C         Bb      F
Me ouviu quando eu falei sozinho
           C    Bb          C
Na solid\xE3o aquela l\xE1grima enxugou

       F       Bb        F
Compaix\xE3o, alegria e salva\xE7\xE3o
 Bb                F

Deus me conhece irm\xE3o
      Bb         C
Vive perto do cora\xE7\xE3o
      Dm   C  Bb                F

Vivo o c\xE9u, por\xE9m com os p\xE9s no ch\xE3o
       Bb                F
Meu passado encontrou perd\xE3o
    Gm               Bb            F
Me mostra o caminho e me estende a m\xE3o

    Gm              F/A
Me d\xE1  o direito de sofrer e calar
       Bb                                C

Soube me esperar quando eu n\xE3o queria chegar
  Bb          C  Bb                       C
Soube interpretar quando eu n\xE3o sabia o que falar`},{id:"d51",t:"COMPROMISSO",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1NY1asGWOkvG866bsoC4pEHA8abSMVHdX.pdf",cifra:`COMPROMISSO

G                Bm7          C9
  Nas montanhas resplandece a gl\xF3ria de Deus,

          C/D
a gl\xF3ria de Deus.
G                Bm7                  C9
  O sol brilha nas colinas, meu cora\xE7\xE3o tamb\xE9m brilha
            C/D
de amor por Jesus.

Gm7
  Como um p\xE1ssaro,
F/G                 Gm7
  pousar nas m\xE3os do Senhor.
          F/G               Gm7
Pequeno p\xE1ssaro, sempre cantar Seu louvor,
     F/G          G
Aleluia, aleluia, aleluia.

G                        Bm7
  Minha vida, Jesus, entreguei a Ti,
          C9            C/D

e me comprometi a entregar por amor.
G                         Bm7
  Vem, Senhor, confirmar esta decis\xE3o
             C9         C/D
de morrer pelo irm\xE3o, se preciso for.

REFR\xC3O

G                   Bm7
  D\xE1-me a gra\xE7a da fidelidade!
               C9               C/D
Que eu caminhe na verdade, com amor no cora\xE7\xE3o.
G               Bm7
  Assumindo o compromisso
               C9               C/D
que eu fiz com Jesus Cristo e com meus irm\xE3os.

REFR\xC3O`},{id:"d52",t:"Confia em mim",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1sz8IbtyZPWA91_wi-bdi-2yBgC5Bvw8i.pdf",cifra:`Confia    em   mim    \u2013  Vida   Reluz

C9             F        F/G     C9

Vem, que a tempestade j\xE1 n\xE3o pode te abalar,
     F           F/G    E/G# Am           F         Dm7
a seguran\xE7a em meu barco encontrar\xE1s, confia em mim, o meu
F/G

amor te abrigar\xE1.

C9          F      F/G         C9
Sei que angustiado o cora\xE7\xE3o se endureceu,

        F          F/G      Am         F        Dm7
Mas eu entendo tudo o que te aconteceu, ainda \xE9 tempo de voltar
F/G
para o teu Deus.

          C9                E7                  Am
N\xE3o tenhas medo, pois eu estou aqui! \xC9 o teu Senhor quem diz
 F7+    Dm7   F/G   G   C9            E7
Quero guiar os passos teus. Vem entrega-te ent\xE3o,

                 Am      F/G
Farei morada em teu cora\xE7\xE3o.

   C9        F     C9             F

E quando anoitecer, cansado eu te encontrar.
    Am   Am7+/G#   Am7/G     Am6/F#   C9          Fm7
No sil\xEAncio teu  eu irei te consolar, nos bra\xE7os meus
descansar\xE1s.

 C9   E7  Am  Am/F#  C9  G  F7+ F/G   (C9)
For\xE7as te darei,    for\xE7as te darei.`},{id:"d53",t:"Consagrado para amar - Eliana Ribeiro",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1bRo9407cw0uEHxHfUKfK2lIiqADG2FMz.pdf",cifra:`Consagrado     para  amar

F       C/E      F

Venho Senhor me ofertar,
      C/E      Dm  Dm/C
A minha vida consagrar.
Bb               C/Bb

Quero renovar o meu sim,
    Am          Dm
Que tua vontade se fa\xE7a em mim
  Gm    Bb/C          F  Bb/C

Renova Senhor minha voca\xE7\xE3o.

F           C/E
Um consagrado para amar,
F           C/E

Um consagrado pra se doar,
Bb/D             F/C
Um amor que tudo suporta,
    G/B        G      Bb/C

Um amor que n\xE3o d\xE1 pra improvisar.
F            C/E
Um consagrado para amar,
F           C/E

Um consagrado pra se doar,
    Bb                F/A
Um amor que n\xE3o busca interesses seus,
Gm          Bb/C          F

\xC9 o mais puro amor, o amor de Deus!`},{id:"d54",t:"Cora\xE7\xE3o Adorador",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1pbk3Oc0QW7DPxw21ZfUn779zC7YBIdsN.pdf",cifra:`Cora\xE7\xE3o   Adorador

   E   A   E   A
Derrama sobre mim
     E A    A/C#
Teu Esp\xEDrito Senhor
        F#m     G#m
Vem preencher meu cora\xE7\xE3o
      A   E/G#
Faz-me forte e fiel
F#m    B4  B
Um servo Teu
          A B   E
Tua m\xE3o desceu sobre mim

       A     B  E
E me retirou da escurid\xE3o
            A B    A  E/G#
Deu-me m\xE3os e voz de profeta
      F#m       B4  B
Deu-me um cora\xE7\xE3o adorador
          A B   E
Tua m\xE3o desceu sobre mim
       A     B  E
E me retirou da escurid\xE3o
            A B    A  E/G#
Deu-me m\xE3os e voz de profeta
      F#m   B     E  A
Deu-me um cora\xE7\xE3o adorador

   E   A  E   A
Derramo sobre ti

     E A    A/C#
Meu Esp\xEDrito de amor
       F#m    G#m
Vou preencher teu cora\xE7\xE3o
      A   E/G#
Te fa\xE7o forte e fiel
   F#m  B4 B
Um amigo meu
           A  B  E
Minha m\xE3o desceu sobre ti
      A     B E
E te retirei da escurid\xE3o
           A B  A  E/G#
Dei-te m\xE3os e voz de profeta
    F#m   B      E
Dei-te um cora\xE7\xE3o adorador`},{id:"d55",t:"Cora\xE7\xE3o Inquieto Am.doc",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1933mo6xCXKx_OA--DNxaRPR8fIfxSrnk.pdf",cifra:`CORA\xC7\xC3O      INQUIETO

  Am         F/A    G/B   C

Senhor,  venho   pedir perd\xE3o
     F   G  Em    Am   Dm    E7

Pois pequei  contra  v\xF3s
  Am       F/A    G/B   C
E com  meu   cora\xE7\xE3o  inquieto

   F   G   C
Resolvi  voltar

  A/C#                  Dm
E mesmo    sem  saber  como   expressar-me

    Am     E7(5+)    E7  Am   Bm7/A     E7
Pe\xE7o  vossa  miseric\xF3rdia

  A7        Dm
Senhor,   miseric\xF3rdia

 G       G/B   C
Cristo,  miseric\xF3rdia

  F        Bb7M
Senhor,   miseric\xF3rdia

    E7               Am
Meu   Pai  resolvi

 F    G    F       G  Am
Vou  voltar,  vou  voltar`},{id:"d56",t:"Cora\xE7\xE3o Inquieto Am",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Fi0sWzYQzPUg3yPTxG-xop432lC-sZUq.pdf",cifra:`Cora\xE7\xE3o    Inquieto

  Am        Dm

Senhor, venho pedir perd\xE3o
    Am     E

 Pois pequei contra v\xF3s
Am        Dm

E com meu cora\xE7\xE3o inquieto
Am   E Am

Resolvi voltar
A7            Dm

E mesmo sem  saber como expressar-me
 Am    E   Am

Pe\xE7o vossa miseric\xF3rdia

A7       Dm
Senhor, miseric\xF3rdia

G       C
Cristo, miseric\xF3rdia

Am     Dm
Senhor, miseric\xF3rdia

  E    Am
Meu Pai resolvi voltar

  A7   Dm

Senhor, miseric\xF3rdia
G    C

Cristo, miseric\xF3rdia
 Am     Dm

Senhor, miseric\xF3rdia
  E      Am

Meu Pai resolvi... vou voltar`},{id:"d57",t:"Cora\xE7\xE3o Inquieto (F)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1PkBRanO6vvp87T00qDhUD5JcWB1Y-4HZ.pdf",cifra:`Cora\xE7\xE3o         Inquieto

 Dm            Bb/D      C/E  F

Senhor,   venho   pedir  perd\xE3o

Bb       C  Am   Dm   Gm    A7

Pois pequei    contra  v\xF3s

  Dm           Bb/D      C/E  F

E com   meu   cora\xE7\xE3o    inquieto

     Bb  C  F

Resolvi  voltar

D/F#                              Gm

E mesmo     sem   saber  como    expressar-me

     Dm        A7   Dm

Pe\xE7o  vossa   miseric\xF3rdia

   D7          Gm

Senhor,   miseric\xF3rdia

 C            F

Cristo, miseric\xF3rdia

   Bb        Em7(b5)

Senhor,   miseric\xF3rdia

     A7           Dm

Meu   Pai  resolvi voltar`},{id:"d58",t:"Cordeiro de Deus - Shallon",tom:"",m:"Cordeiro",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1MKU3i1jFLA0Q3IcPRhDZXq5fUX2v8ox0.pdf",cifra:`Cordeiro      de  Deus    \u2013  Shallon

  G                       Bm7           C9  D4      D

Cordeiro  de  Deus  que  tirais o pecado  do

  C9          D4      D

mundo,   tende  piedade

  G                       Bm7           C9   D4      D

Cordeiro  de  Deus  que  tirais o pecado  do

  C9          D4      D

mundo,   tende  piedade

Em                        Bm                     C   D

Cordeiro  de  Deus  que  tirais o pecado  do mundo

           G   D/F#        C9  D

Dai-nos  a paz, dai-nos  a paz

            G   D/F#        C9  D

Dai-nos  a vossa  paz, dai-nos  a  paz`},{id:"d59",t:"CORDEIRO DE DEUS \u2013 PE MARCELO",tom:"",m:"Cordeiro",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18bL9sCEOyC76u8R6wuLaMh5T5ocRfyvX.pdf",cifra:`CORDEIRO     DE DEUS   \u2013 PE  MARCELO

Em
Cordeiro de Deus
   G             Am B7

que tirais o pecado do mundo
Em   Am
tende piedade

D7   G Em
tende piedade
    Am
tende piedade

 B7   Em B7
piedade de nos

 Em
Cordeiro de Deus
   G              Am B7

que tirais o pecado do mundo
Em   Am
tende piedade

D7   G Em
tende piedade
    Am

tende piedade
 B7   Em B7
piedade de nos

 Em
Cordeiro de Deus
   G              Am  B7

que tirais o pecado do mundo
Em    Am
dai-nos a paz

D7   G Em
dai-nos a paz
    Am

dai-nos a paz senhor
 B7 Em
a vossa paz`},{id:"d60",t:"CORPO SANTO A",tom:"",m:"Comunh\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1H3XY_9pTQMjUP0wfyGJx45LKxbCMZuR-.pdf",cifra:`CORPO    SANTO   (A)

A          E/G# F#m7
 Quando vou ao Teu encon_tro
D9  Bm7      E4  E  A
 Receber Teu corpo San___to
        E/G#   F#m7
Sinto forte Tua presen\xE7a em mim
D9   Bm7     E4 E
  Teu amor a me tocar

A        E/G#  F#m7
 Podes tocar em mim, Senhor
    F#m7/E   D9
Podes curar a minha dor
    Bm7     E4 E
Podes viver em mim, Senhor
A        E/G#  F#m7
 Podes tocar em mim, Senhor
    F#m7/E   D9
Podes curar a minha dor
    Bm7     E4 E
Podes viver em mim, Senhor

D9   E  D/A A  E/G#   F#m7
 Teu corpo San___to a me tocar
      F#m7/E    D
Com o Teu poder a me curar
     Bm       E
Toda minha vida transformar

D9   E  D/A A  E/G#   F#m7
  Teu corpo San__to a me tocar
      F#m7/E    D
Com o Teu poder a me curar
     Bm       E4  E
Toda minha vida transformar
A         E/G# F#m7
 Algo invade o meu cora\xE7\xE3o
D9      Bm7     E4  E
  Teu corpo e Sangue me curan___do
A          E/G#  F#m7
 Sinto, j\xE1 n\xE3o sou igual
D9      Bm     E
  Todo o meu ser se renovando`},{id:"d61",t:"CORPO SANTO F",tom:"",m:"Comunh\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/13Zd_GLER23eltZp8We96mrS-Hs7mKgQj.pdf",cifra:`CORPO    SANTO   (F)

F          C/E Dm7
 Quando vou ao Teu encon_tro
Bb9  Gm7      C4  C  F
 Receber Teu corpo San___to
        C/E   Dm7
Sinto forte Tua presen\xE7a em mim
Bb9   Gm7     C4 C
  Teu amor a me tocar

F        C/E  Dm7
 Podes tocar em mim, Senhor
    Dm7/C    Bb9
Podes curar a minha dor
    Gm7     C4 C
Podes viver em mim, Senhor
Dm7     Dm7/C      Bb9
  Podes tocar em mim, Senhor
    F/A    Gm7
Podes curar a minha dor
    Bb9      C4
Podes viver em mim, Senhor

Bb9   C  Bb/F F  C/E   Dm7
 Teu corpo San___to a me tocar
      Dm7/C    Bb
Com o Teu poder a me curar
     Gm       C
Toda minha vida transformar

Bb9   C  Bb/F F  C/E   Dm7
  Teu corpo San__to a me tocar
      Dm7/C     Bb
Com o Teu poder a me curar
     Gm       C4  C
Toda minha vida transformar

F         C/E Dm7
 Algo invade o meu cora\xE7\xE3o
Bb9      Gm7     C4  C
  Teu corpo e Sangue me curan___do
F          C/E  Dm7
 Sinto, j\xE1 n\xE3o sou igual
Bb9      Gm     C
  Todo o meu ser se renovando`},{id:"d62",t:"Cristo tem poder",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18Cp98mJLkAMLnxX562Ft24nOvqnlOxTw.pdf",cifra:`Cristo tem poder

Am         F          G        Am
Cristo tem poder, Cristo tem poder, Cristo tem poder aleluia tem poder.
Am         F           G

Cristo tem poder, Cristo tem poder, Jesus Cristo \xE9 poderoso
    Am
Jesus Cristo tem poder.

  Am           F                G
Na B\xEDblia est\xE1 escrito, no Novo Testamento, que em Can\xE1 na Galil\xE9ia Jesus
Am                                 F
foi a um casamento, transformando \xE1gua em vinho e dando o povo pra beber

  G           Am
mostrando sua gl\xF3ria sua for\xE7a e seu poder.
   Am

Na cidade de naim...`},{id:"d63",t:"Crist\xE3os vinde todos",tom:"",m:"Entrada",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1R3_q75cSJ59Egdb3zk4yR7fQtA8RJS0Y.pdf",cifra:`Crist\xE3os, vinde todos

 E     B7  E   A   E B7         E     B7  E    A   E B7
Crist\xE3os, vinde todos, com alegres Nasceu em pobreza, repouzando em
cantos.                         palhas
 C#m F#   B7 E  B7 F# B7        C#m F# B7 E   B7 F# B7
Oh! Vin__de, oh! vin_de, at\xE9 Be_l\xE9m. O nos__so afe__to lhe va_mos dar
E F#m B7 E G#7  C#m B4/6        E  F#m B7 E G#7      C#m
Vede nasci__do, vosso Rei eterno. B4/6
E4/6   E                        Tanto amou-nos! Quem n\xE3o h\xE1 de

Oh! Vinde Adoremos.             am\xE1-Lo!
 C#m A  F#9 B7                  E4/6    E
Oh! Vinde Adore__mos.           Oh! Vinde Adoremos.
F#m A F#7 B7 E A  E B7 E        C#m A  F#9 B7
Oh! Vinde Ado__re___mos. o      Oh! Vinde Adore__mos.
Salva_dor                       F#m A F#7 B7 E A E  B7 E
                                Oh! Vinde Ado__re___mos. o
 E     B7  E     A  E B7        Salva_dor
Humildes pastores deixam o seu
rebanho                          E     B7   E   A   E B7
C#m F#  B7 E    B7 F# B7        A estrela do Oriente, conduziu os
E ale___gres acor_rem ao Rei do C\xE9u magos
E F#m  B7 E G#7   C#m  B4/6     C#m F#  B7 E   B7  F# B7
N\xF3s, igual_mente, cheios de ale___gria E a es___te Mist\xE9__rio envolve em luz
 E4/6   E                       E F#m B7 E G#7   C#m B4/6
Oh! Vinde Adoremos.             Tal clari_da_de, tamb\xE9m, seguiremos.
 C#m A  F#9 B7                  E4/6    E

Oh! Vinde Adore__mos.           Oh! Vinde Adoremos.
F#m A F#7 B7 E A  E B7 E        C#m  A  F#9 B7
Oh! Vinde Ado__re___mos. o      Oh! Vinde Adore__mos.
Salva_dor                        F#m A F#7 B7 E A E  B7 E
                                  Oh! Vinde Ado__re___mos. o
 E     B7  E   A     E B7
                                Salva_dor
O Deus invis\xEDvel de eternal grandeza
 C#m F#   B7 E   B7 F# B7
Sob v\xE9us de humilda_de, pode_mos ver
E  F#m B7 E G#7   C#m  B4/6
Deus pequeni__no, Deus envolto em
faixas!
 E4/6   E
Oh! Vinde Adoremos.
 C#m A  F#9 B7
Oh! Vinde Adore__mos.
 F#m A F#7 B7 E A E B7 E
Oh! Vinde Ado__re___mos. o
Salva_dor`},{id:"d64",t:"Cura Senhor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1hT3dZta5UIOAp-dS6gafv-adhY1Xjr7m.pdf",cifra:`Cura  Senhor  \u2013 Pe. Antonio  Maria

E             B       C#m  E7
VAMOS, JESUS, PASSEAR NA MINHA VIDA
A               B             Bm E7
QUERO VOLTAR AOS LUGARES EM QUE FIQUEI S\xD3
A              B

QUERO VOLTAR L\xC1 CONTIGO
Bm              F#m C#7
VENDO QUE ESTAVAS COMIGO
F#m             B        E  E7
QUERO SENTIR TEU AMOR A ME EMBALAR .

 A                B
CURA, SENHOR, ONDE D\xD3I
Bm               C#7
CURA, SENHOR, BEM AQUI
F#m               B
CURA, SENHOR, ONDE EU
         (Bm E7 ) (E B7)
N\xC3O POSSO IR .

 E                 B      C#m   E7
QUANDO A LEMBRAN\xC7A ME FAZ ADORMECER
A                B            Bm E7
SABES QUE A ESPADA DA DOR ENTRA EM MEU SER
A               B
TU ME CARREGAS NOS BRA\xC7OS
G#m          Bm  E7
LEVA-ME COM TEU ABRA...\xC7O
A                B        E  E7
SINTO MINH \u2019ALMA E CHORAR JUNTO DE TI .

 E               B        C#m  E7
TANTAS LEMBRAN\xC7AS EU QUERO ESQUECER
 A                B           Bm E7
DEIXAM UM VAZIO EM MINH \u2019ALMA E EM MEU VIVER
A              B
TOMA, SENHOR, MEU ESPA\xC7O
G#m             Bm  E7
TE ENTREGO TODO O CANSA...\xC7O
A                  B         E  E7
QUERO ACORDAR COM  TUA PAZ A ME AQUECER`},{id:"d65",t:"Cura-me",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/14om0-V1RYjjpQDWkKUWOapSAABPLButG.pdf",cifra:`Cura-me  \u2013 Anjos

 G    Cm/G        G      Cm/G       G
Senhor, estou neste momento aqui, por Tuas chagas vou pedir:

D/F#  Em7 Em/D C#m5-/7
Cura-me, cura-me.
  Am7                   C/D
E lava o meu passado com o Teu sangue derramado.

 G     Cm/G        G    Cm/G       G
Senhor, ainda d\xF3i dentro de mim, os erros que eu cometi.
D/F#  Em7 Em/D C#m5-/7
Cura-me, cura-me
 Am7                     C/D

E lava o meu passado com o Teu sangue derramado.
 Bm7           Em7
Vem ser a voz que me aconselha.
 Am7          D9

Vem ser o ar que eu respiro.
 Bm7          Em7         Am7         D9
Pois Tu \xE9s o p\xE3o que me sustenta, tu \xE9s o Deus que me alimenta.
G   D/F#    C9    D/C     G/B

Cura-me, Senhor! Cura-me, Senhor!
 A4/7         A    F    C/D
E enxuga as minhas l\xE1grimas de dor.
G   D/F#    C9    D/C     G/B

Cura-me, Senhor! Cura-me, Senhor!
Am7       C/D      G       Cm/G
E me devolve a vida com o Teu amor.
 G     Cm/G        G     Cm/G       G

Senhor, ferido estou diante de Ti e de joelhos vou pedir.
D/F#  Em7 Em/D C#m5-/7  C/D G D/F# C9 D/C G/B A4/7 A C/D
Cura-me, cura-me`},{id:"d66",t:"C\xE2ntico de Adora\xE7\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/113wkcI-3W3rHIRopgU6jcHCwEM2JJ_ov.pdf",cifra:`C\xE2ntico     de  Adora\xE7\xE3o

        Dm                 Bb

Pra te adorar  foi que eu nasci,

          Gm7          A4  A

Para exaltar  a Ti Senhor!
         Dm                   C

A minha   alma  tem  sede de  Ti,

           Dm                  C   A4  A

O meu   esp\xEDrito necessita de  Ti!`},{id:"d67",t:"Dai-nos a Ben\xE7\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/12gKsEceYz_qos8QcSC2mHmda9EqWBD1G.pdf",cifra:`Dai-nos  a Ben\xE7\xE3o

 D            A
Dai-nos a b\xEAn\xE7\xE3o/ \xF3 m\xE3e querida!

          D
Nossa Senhora/ Aparecida

D7             G
Dai-nos a b\xEAn\xE7\xE3o/ \xF3 m\xE3e querida!

 A7        D
Nossa Senhora/ Aparecida

 D    Bm         Em

1.sob esse manto/ do azul do c\xE9u
  A7             D

Guardai-nos sempre/ no amor de Deus

 D     Bm        Em

2. Eu me consagro/ ao vosso amor
    A7       D

\xD3 M\xE3e querida do Salvador

 D    Bm          Em

3. Sois nossa vida/ sois nossa luz

    A7       D
\xD3 M\xE3e querida do meu jesus`},{id:"d68",t:"Decididamente",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Ivn_UhXnM3bUpd60PS6YM7FcryK8U5DJ.pdf",cifra:`Decididamente

  G9       D/F#    Em
H\xE1 um lugar que atrai meu cora\xE7\xE3o
 Am7       C/G       D4 D
E faz meus p\xE9s mudarem sempre a dire\xE7\xE3o
  G      B/D#     Em7

Se ali estou, me lan\xE7o, me derramo em adora\xE7\xE3o
  Am7 G/B D4 D
Na sala do trono

  G9       D/F#    Em
Ali eu sei, fortalecido estou
 Am7       C/G       D4 D
E ao descer do monte, agraciado eu vou

  G      B/D#     Em7
O santo altar, a realeza, a presen\xE7a do Senhor
  Am7  G/B D4 D C/E
Me levam a ir al\xE9m

D/F# G9          Em
 Eu vou e quem me impedir\xE1

          C9       D4  D
Se ao meu lado est\xE1 o Autor da minha f\xE9?
D/F# G          C9 G/B       Am7 Am/G D4 D
 Eu vou! A for\xE7a Ele me d\xE1, coragem pra enfrentar o que vier
  G/D       Em7        C9          D  F#m7(11)
Eu vou e crendo levarei a salva\xE7\xE3o aos meus, \xE0 minha fam\xEDlia
 B7    Em  G/D         C9
E j\xE1 n\xE3o importa o grau a que eu cheguei

G/B     Am7  Dsus4(7)      G4 G C/E D4 D Am Em C9
Eu vou seguir decididamente o Amado Rei

  G9       D/F#    Em
Ali eu sei, fortalecido estou
 Am7       C/G       D4 D
E ao descer do monte, agraciado eu vou
  G      B/D#     Em7

O santo altar, a realeza, a presen\xE7a do Senhor
  Am7  G/B D4 D C/E
Me levam a ir al\xE9m

Refr\xE3o`},{id:"d69",t:"Declaramos",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1GlSJUeuwTzECB7WZZTNDETgrm9K1Jhkp.pdf",cifra:`Declaramos        \u2013  Vida   Reluz

D9            D5+/9        D9 D5+/9

Declaramos:  Jesus \xE9 o Senhor.
D9                 D5+/9     Em7  A4/7  A7

Pois com grande  amor  veio salvar.
     Em7       F#m        Bm7  Bm/A  G7+  D/F#
Aos povos  ra\xE7a e na\xE7\xF5es veio ensinar

Em7          G/A            D9  D5+/9
que na vida outro Deus n\xE3o h\xE1.

D9            D5+/9        D9 D5+/9
Declaramos:  Jesus \xE9 o Senhor.
D9                 D5+/9     Em7  A4/7  A7

Pois com grande  amor  veio salvar.
     Em7       F#m        Bm7  Bm/A  G7+  D/F#

Aos povos  ra\xE7a e na\xE7\xF5es veio ensinar
Em7          G/A            D9 A7

que na vida outro Deus n\xE3o h\xE1.

   Bm  F#m  A7   Bm  F#m     G          Em        A4/7 A7
Alelu  ia!    Alelu   ia! Aquele que governa  para

sempre!
    Bm  F#m  A7     Bm  F#m  G          Em    A7    (D9
D5+/9)

Alelu   ia!     Alelu  ia! Declaramos: Jesus  \xE9 o Senhor!`},{id:"d70",t:"DEIXA A LUZ DO C\xC9U ENTRAR",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1iNLqjygxl24YxreFF5adCqf2Gvhvvhk7.pdf",cifra:`DEIXA   A LUZ  DO  C\xC9U   ENTRAR

      D        Bm    Em   A
Tu anseias, eu bem sei, por salva\xE7\xE3o

      Em      A7      D
Tens desejo de banir a escurid\xE3o
      D            D7   G Gm

Abre, pois, de par em par teu cora\xE7\xE3o
   D   Bm  Em  A7  D
E deixa a luz do c\xE9u entrar

D               A7
Deixa a luz do c\xE9u entrar

Em          A7   D
Deixa a luz do c\xE9u entrar
            D7         G Gm
Abre bem as portas do teu cora\xE7\xE3o

 D   Bm   Em  A7  D
E deixa a luz do c\xE9u entrar

      D        Bm    Em   A
Cristo, a luz do c\xE9u em ti, quer habitar
      Em      A7      D

Para as trevas do pecado dissipar
      D         D7  G  Gm
Teu caminho e cora\xE7\xE3o iluminar

   D   Bm  Em  A7  D
E deixa a luz do c\xE9u entrar

REFR\xC3O

      D        Bm    Em   A

Que alegria andar ao brilho dessa luz
      Em      A7      D
Vida eterna e paz no cora\xE7\xE3o produz
      D          D7   G Gm

Oh! Aceita agora o Salvador Jesus
   D   Bm  Em  A7  D
E deixa a luz do c\xE9u entrar`},{id:"d71",t:"DEIXA DEUS SONHAR EM TI G",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1NlNaCva-v725T9eIdlhHgrgSp46qV-5T.pdf",cifra:`DEIXA   DEUS   SONHAR    EM   TI

Bm                       G    A

Deixa Deus sonhar  em  ti, deixa!
            Bm

Deixa Deus sonhar  em  ti

           G  A                   Bm
N\xE3o tenhas  medo  \xE9 Deus  quem  te segura

( G A Bm  )

      G A              Bm

Segue al\xE9m,  segue al\xE9m

      G A              Bm
Segue al\xE9m,  segue al\xE9m

             G             A
Ver\xE1s um  caminho  dif\xEDcil demais

                   D      A/C#    Bm

Ver\xE1s tempestades   que te assustar\xE3o
                   G                A

Mas  quando  o sonho \xE9 de Deus  ningu\xE9m  destruir\xE1

                  D    A/C#     Bm

Se Ele prometeu  tamb\xE9m   cumprir\xE1
         G          A                       D

Tenha  paci\xEAncia e saiba esperar o melhor de Deus  vir\xE1

      G A              Bm

Segue al\xE9m,  segue al\xE9m

      G A              Bm
Segue al\xE9m,  segue al\xE9m`},{id:"d72",t:"Derrama o seu amor aqui",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18xYhEn3POGzX853orFs-TN3EvTb1cNh0.pdf",cifra:`Derrama   o seu amor  aqui

 G         D   Em     C

Senhor, eu quero obedecer a Tua voz
G         D     Em         C

Derrama o Teu Esp\xEDrito (uh, uh) sobre todos n\xF3s
G          D    Em       C

 Senhor, eu quero mergulhar, me comprometer
G         D   Em        C

 Entrar na intimida----de do Teu cora\xE7\xE3o
      D     G

Derrama em n\xF3s Tua un\xE7\xE3o

           D

Derrama o teu amor aqui
          Em

Derrama o teu amor aqui
         C

Faz chover sobre n\xF3s \xC1gua Viva
G            D

 Derrama o teu amor aqui
          Em

Derrama o teu amor aqui
         C      C D G/B C Am G/B C D

Faz chover sobre n\xF3s \xC1gua Viva

(C Em)        D

   Uma  Igreja renovada
Em         D

 Povo santo reunido
Em        D

Fam\xEDlias restauradas
Em            C

 Pelo poder do Teu Esp\xEDrito`},{id:"d73",t:"Deus de Promessas",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ZfhpQvCpoRc9chxXucqBFJNsj78in5Kz.pdf",cifra:`Deus  de Promessas \u2013 Minist\xE9rio Apascentar

Dm          G
Sei que os Seus olhos

      C                  F
Sempre atentos permanecem em mim
Dm       G
E os Teus ouvidos
      C               F
Est\xE3o sens\xEDveis para ouvir meu clamor
      Dm   G
Posso at\xE9 chorar
      C G    Am
Mas alegria vem de manh\xE3.
F        C Dm    G
\xC9s Deus de perto e n\xE3o de longe
Dm   C
Nunca mudastes
Dm  Bb  F  G
Tu \xE9s fiel!

         C
   Deus de alian\xE7a,
          Am
   Deus de promessas
             Dm         G
   Deus que n\xE3o \xE9 homem pra mentir
         C          Am
   Tudo pode passar, tudo pode mudar,
          Dm          G
   Mas Tua palavra vai se cumprir.

Am      G    F
Posso enfrentar o que for,
         G   Am
Eu sei Quem luta por mim
         G      F        G
Seus planos n\xE3o podem ser frustrados
Am     G   F
Minha esperan\xE7a est\xE1
         G      Am
Nas m\xE3os do Grande Eu Sou.
        G     Bb      F
Meus olhos v\xE3o ver o imposs\xEDvel
G

Acontecer...`},{id:"d74",t:"DEUS EXISTE",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/19R9g_wXxaqTzDJYkkwK7MCQazKtQl2mr.pdf",cifra:`DEUS  EXISTE

C             F
Quero saber por que n\xE3o acreditas

C            F
Quero saber por que n\xE3o o tens como teu Senhor.

C
Porque n\xE3o aceitas que existe

F                  C
Uma for\xE7a que move-nos para o bem.

      B/C         C
Que f\xE9 voc\xEA tem? A f\xE9 que conv\xE9m!

         F                     G/F
Mas n\xE3o \xE9 de conveni\xEAncia que vive o crist\xE3o.

      F                        G
Sua viv\xEAncia est\xE1 Naquele que morreu por n\xF3s irm\xE3o.

F     G C          F         G
Deus existe e Ele est\xE1 no meio de n\xF3s

   E/G#        Am7
E por n\xF3s se deu numa cruz

   F
Pra pagar os nossos pecados

   G
de incr\xE9dulos crist\xE3os.

F  G C      F            G
Deus existe e eu o posso tocar,

  E/G#    Am7   Am/G

Se a Ele entregar o meu cora\xE7\xE3o.
      F            G           C

Pois e Nele que se encontra a Salva\xE7\xE3o.`},{id:"d75",t:"Deus Imenso",tom:"D",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1lHPM8Wrd8HDGZlX2fW8qsP7GdMR1A_6d.pdf",cifra:`Deus    Imenso

Tom: D

A9      F#m

N\xE3o sou  nada, eu bem  sei

Bm   Bm/A          D/E        E
T\xE3o pequeno,  um  gr\xE3o de areia em  tuas m\xE3os

A9      F#m

Barco \xE0 vela, que se abandona
D    Bm         E      E7

Segue o rumo  e vai buscando  o alto mar

A9         F#m
Assim me  encontro, diante de Ti

D     Bm        D/E      E7/G#

Um  Deus imenso  que  por amor  se deixa alcan\xE7ar

A9            F#m

Te adorarei, meu  Deus, enquanto  eu existir

D    Bm       G       E7
Proclamarei as maravilhas  que fizeste em mim

A9            F#m

O teu calor me envolve, o teu olhar me  acalma
D     Bm        G        E7

E em teus bra\xE7os o teu amor  / Inflama minha  alma

A9          F#m             D Dm/G
Que  posso mais dizer, se o cora\xE7\xE3o j\xE1 disse!

  A9  F#m   D/E  E7   A7+/9

Te amo
Configura\xE7\xF5es mover minimizar norma l grande fixar player fechar`},{id:"d76",t:"Deus quero louvar-te",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1bTn8E9-C95iHkVN-JO92JlkY6qMGl_72.pdf",cifra:`Deus     quero     louvar-te

        E       C#m

Deus quero  louvar-te

     E    C#m
Quero  adorar-te

        A          B

Quero  te servir, quero transmitir

         E      B
Deus quero  louvar-te

         E       C#m

Deus quero  louvar-te
     E     C#m

Quero  adorar-te

        A
Sempre  ao cantar

       B           E (E E/Eb C#m)

Eu s\xF3 quero dar gl\xF3rias ao meu Deus

C#m       A    C#m       A

Eu vou caminhando,   vivendo o amor

C#m           A            B ( B C C#m )
Erguendo  os meus  bra\xE7os, eu louvo ao Senhor

C#m       B    C#m       B

Quero  proclam\xE1-lo    no dia a dia
C#m      A          B

Sempre  cantando  gl\xF3ria, aleluia!

B     B7 B

A-l\xEA-lu-i a...

Deus Quero  Louvar-Te.....`},{id:"d77",t:"Deus te v\xEA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17epR3oZoAgsnPxoAuRzASj8Lvk4To5cL.pdf",cifra:`Deus    te v\xEA  \u2013  Eliana    Ribeiro

C               F    G             Am

Deus te v\xEA, n\xE3o \xE9 indiferente a tua dor.
          F            G              C

Deus te entende, quer te envolver de amor.

     G            C               G                   Am
Ele quer te fazer feliz, tem muitos planos e sonhos pra ti,

       F             G               C

Basta confiar, saber esperar e Ele agir\xE1`},{id:"d78",t:"DEUS \xC9 MAIOR",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Wqm2xQR4Rsr-wEOpQ_FjYnlMNl4nKSLd.pdf",cifra:`DEUS  \xC9 MAIOR

C#m     E
N\xE3o n\xE3o h\xE1 , N\xE3o n\xE3o h\xE1

     B    F#m      C#m
N\xE3o h\xE1 mal que possa me vencer (BIS)

E/G#   A    B/A     E B/D# C#m
Pois tudo posso naquele que me fortalece
E/G# A    B    C#m
Tudo posso em Jesus Cristo

  C#m        E
Nenhum problema, Nem meus pecados
   B    F#m      C#m
Poder\xE3o superar o amor de Deus (BIS)

E/G#   A    B/A    E B/D# C#m
Deus \xE9 maior que tudo que me acontece

E/G# A     B   C#m
Deus \xE9 grande Supremo Rei

  C#m        E
Nem a tristeza nem mesmo a dor
   B    F#m     C#m
poder\xE1 superar o Amor de Deus

REFR\xC3O

Solo | F#m C#m | D6 C#4 C#/B | F#/A# E/G# | B/F# E | A Dm/F C/E

  Dm      F
Nem a vingan\xE7a nem mesmo o \xF3dio

   C   Gm       Dm
poder\xE1 superar o Amor de Deus (Bis)

F/A   Bb   C       F C Dm
Deus \xE9 maior que tudo que me acontece
F/A   Bb    C  Dm
Deus \xE9 grande Supremo Rei`},{id:"d79",t:"DEUS \xC9 PAPAI",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1eLhZ-UJ-dVddWmZQTxdt2nzgzsZ-UTWJ.pdf",cifra:`DEUS   \xC9 PAPAI

[Intro] Bm  A G

   Bm        A              G
N\xE3o \xE9 porque  eu mere\xE7o, n\xE3o \xE9 porque  sou melhor
       Bm         A       G

\xC9 porque o papai \xE9 bom, o meu  papai \xE9 bom
   Bm        A              G
N\xE3o \xE9 porque  eu mere\xE7o, n\xE3o \xE9 porque  sou bom
      Bm       A         G

\xC9 porque ele \xE9 \xE9 \xE9 o general de amor
      Bm       A       G
\xC9 porque ele \xE9 \xE9 \xE9 o general de amor

[Ponte]

   Bm         A        G

E ele vem, sobre os montes ele vem
   Bm         A       G
E ele vem, em meu  socorro ele vem
   Bm        A      G

E ele vem, sem demora  ele vem

[Refr\xE3o]

         Bm          A          G
O meu  Deus   \xE9 lindo, maravilhoso,  \xE9 o meu  papai
          Bm          A         G

O meu  Deus   \xE9 lindo, maravilhoso,  \xE9 o meu  papai`},{id:"d80",t:"Deus \xE9 Capaz Nome Santo",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1sW1U8nJmvOC-xU1KSekSlh7u0s0SnCh7.pdf",cifra:`Deus    \xC9  Capaz     / Nome     Santo

G                    D/G

Deus  \xE9 capaz  de fazer
       Em                C
O que  prometeu  que  faria   (4x)

G         D       Em         C
Deus  \xE9 capaz!    Deus  \xE9 capaz!
G         D    Bm        Em          D              C
Deus  \xE9 capaz     pra  fazer  o que  disse  que faria.

G   D/G        Em    C         G D/G        Em    C
\xC9 capaz!  \xC9 capaz!        \xC9  capaz!    \xC9 capaz!

 Em                C9

Eu sei  que ao  invocar.
           D9
Teu Santo  Nome
          Em

Me escutar\xE1s.    (4x)

C9 D9  Em     C9 D9  Em
Je....sus,    Je....sus
C9 D9  Em          C9       D9      Em

Je....sus,  Jesus  Cristo   \xE9 o Senhor.`},{id:"d81",t:"Deus \xE9 capaz",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/10qSbAyLXkTSlxUWB94a3Tyita1I6hAVb.pdf",cifra:`Deus    \xE9  capaz    \u2013  Vida   Reluz

        D9                Gmaj7          Em7

Deus  \xE9 capaz de transformar tua vida o imposs\xEDvel Ele far\xE1
   G/A                  D9      A/C#   Bm7

Porque \xE9s precioso aos  seus olhos e se tiveres a coragem
F#m
e a loucura de acreditar

   Gmaj7      Em7       G/A            A

Ent\xE3o ir\xE1s provar que Ele pode muito mais
          D     A/C#  Bm7       F#m   G             Em7

Deus  \xE9 capaz de trocar reinos por ti abre mares pra que
G/A     A
possas atravessar

  Em7              F#m            Gmaj7    D/F#       Em7

E se preciso fosse daria novamente a vida por ti.   Deus
G/A    D           Gmaj7

s\xF3 n\xE3o \xE9 capaz de deixar de te amar

          D9             G7+            Em7           G/A

\xC9 preciso crer e se entregar sem medo, Ele nunca vai tirar
D9

a tua liberdade, se n\xE3o queres
A/C#        Bm7                  F#m
Mas  se te entregas em reservas tua vida se transformar\xE1,

Gmaj7      Em7
ent\xE3o ir\xE1s provar que

     G/A          A
Ele pode muito mais

          D
Deus  \xE9 capaz...

          D9

\xC9 preciso crer e se entregar...`},{id:"d82",t:"DIA DE FESTA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1tR7WmWkw76Qa4UC-kvFWzg2sjkrB4HhH.pdf",cifra:`DIA  DE  FESTA

D      G     D    G
 Hoje \xE9 dia de celebra\xE7\xE3o!

      D    G   C    A
Vamos  cantar aleluia, aleluia!
D      G     D     G        D

 Hoje \xE9 dia de celebra\xE7\xE3o, \xE9 dia de festa
  G        Em   A      D  Bm   A
O c\xE9u inteiro est\xE1 orando por n\xF3s
D      G     D    G

 Hoje \xE9 dia de celebra\xE7\xE3o!
      D    G   C    A
Vamos  cantar aleluia, aleluia!
D      G     D     G        D

 Hoje \xE9 dia de celebra\xE7\xE3o, \xE9 dia de festa
  G        Em   A      D  Bm   A
O c\xE9u inteiro est\xE1 orando por n\xF3s

F#m          G
  Alegrei-me quando  me disseram
Em             D/F#   G
Vamos  para a casa do Senhor,

            G#\xBA  A4   A
pois ele nos espera

Bm         Bm7+        Bm7       E7

De bra\xE7os abertos com  uma  ben\xE7\xE3o especial pra n\xF3s
G              D/F#  Em
 Ent\xE3o derrama  sobre n\xF3s
           A4  A

o teu Esp\xEDrito Senhor
G
 Ent\xE3o derrama  sobre este lugar

D/F#     Em        A  G
a tua un\xE7\xE3o e o teu poder`},{id:"d83",t:"Diante do Rei",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1kcUh1Tk-iBh3EngSvOgITjQitlMOHOBW.pdf",cifra:`Diante do  Rei

A          E/G#        F#m                  C#m
Vem Senhor Jesus. O cora\xE7\xE3o j\xE1 bate forte ao te ver.
      D            Bm       C#m
A tua gra\xE7a hoje eu quero receber

      Bm                    E
Sem a ben\xE7\xE3o do Senhor n\xE3o sei viver
A          E/G#          F#m                        C#m
Vem Senhor Jesus. Olhar o povo ao teu redor me faz lembrar
       D           Bm          C#m

A multid\xE3o l\xE1 no caminho a te esperar
       Bm              E              E4     E
Vem oh santo de Israel. Passar tamb\xE9m neste lugar
     D        E/D

\xC9 o Rei a nossa frente est\xE1
   C#m           F#m
\xC9 feliz quem o adorar
    D          E/D

\xC9 Jesus o nosso mestre e rei
      C#m           F#m
Bem aqui t\xE3o perto se deixa encontrar
      Bm       D              E            A

Diante do Rei dos reis todo o joelho se dobrar\xE1`},{id:"d84",t:"Em Santidade",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/15EvpewyqNY7QqPBD3vZ7HZDLWa-JqQwk.pdf",cifra:`Em Santidade

Intro: C9 Em7 C9 C6

   G D/F#  Em Em9   C     G/B C   D Dsus4 D

Em santidade, em santidade, em santidade sobre a Terra eu devo andar
   G D/F#  Em G/D  C9   Am  C/G  D
Em santidade, em santidade, em santidade, Tua gra\xE7a posso alcan\xE7ar
      C9
E romper com as trevas

Cmaj7   D/C   Bm7        Em
Como posso eu querer que a b\xEAn\xE7\xE3o venha sobre minha casa?

Cmaj7   D/C   Bm7         Cmaj7
Como posso esperar que meus sonhos e meus planos aconte\xE7am?
Am      D D/C
Como irei compreender?

   G    D/F# Em
Se minha vida passa longe da verdade que eu ouvi
     C9    Am7  Cmaj7    D

Se os meus passos, j\xE1 n\xE3o tocam os caminhos que aprendi
   G    Bm    Em
Meu argumento me empobrece e me faz pensar assim
     C9   Am7    Cmaj7   D
Que estou t\xE3o certo e \xE9 perfeito, o meu jeito de servir

   G    D/F#  Em     Em7
Digo que amo minha Igreja e o chamado que atendi

    C   Am7    Cmaj7    D
Mas j\xE1 n\xE3o ou\xE7o os conselhos e a Palavra que h\xE1 em mim
     G  Bm/F#  Em
Sonho que um dia a Boa Nova se espalhe at\xE9 os confins
    C9   G/B Am7  Cmaj7    D
Mas sem santidade, sem fidelidade, toda obra ruma ao fim

   G D/F# Em  Em9   C9   G/B C    D D4 D

Em santidade, em santidade, em santidade sobre a Terra eu devo andar
   G D/F#  Em G/D  C9    Am  C/G  D
Em santidade, em santidade, em santidade, Tua gra\xE7a posso alcan\xE7ar
      C9
E romper com as trevas

Cmaj7   D/C   Bm7        Em
Como posso eu querer que a b\xEAn\xE7\xE3o venha sobre minha casa?

Cmaj7   D/C   Bm7         Cmaj7
Como posso esperar que meus sonhos e meus planos aconte\xE7am?
Am      D/C C D/C C D/C
Como irei compreender?`},{id:"d85",t:"EM TEU ALTAR (A)",tom:"",m:"Ofert\xF3rio",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1coO7K7ItxSVoBCqCLicmlqLThWKNlgv6.pdf",cifra:`EM    TEU      ALTAR         (A)

A       C#m7           D
Diante de tua presen\xE7a me encontro, Senhor
   F#m   E
Deus infini-to
A         C#m        D
O teu olhar me acompanha e sabes quem sou
A          C#m7        D
Ao enxergar tua grandeza e minha pequenez
   F#m  E
Eu reconhe-\xE7o
A          C#m       D
Que minha hist\xF3ria \xE9 nada sem o teu amor

   C#m     F#m
Por isso venho te buscar
     Bm/D
Porque eu preciso, meu Deus
     E
Em teus bra\xE7os estar
 C#m      F#m
Morar em teu cora\xE7\xE3o
   D         F#m  E
E entregar-me a ti, inteiramente

[Refr\xE3o]

  C#m    D  E   A
Me abandonarei em ti, Senhor
C#m     D
Em ti repousarei
 C#m   D    E A
A tua ternura me acolhe
C#m         D
Um ref\xFAgio seguro encontrei

 C#m    D     E   A
O meu cora\xE7\xE3o venho a ti render
 C#m        D
Toma meu ser, meu querer
C#m     D    E A
Recebe, Senhor, minha vida
   C#m      D
Como prova viva de amor
    F#m  E. A
Em teu altar, Senhor`},{id:"d86",t:"EM TEU ALTAR (E)",tom:"",m:"Ofert\xF3rio",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Kw4YNPTm8FUpWOw8SuBNeqRXWodV0Q5v.pdf",cifra:`EM     TEU     ALTAR         (E)

E       G#m7           A
Diante de tua presen\xE7a me encontro, Senhor
   C#m   B
Deus infini-to
E         G#m        A
O teu olhar me acompanha e sabes quem sou
E          G#m7        A
Ao enxergar tua grandeza e minha pequenez
   C#m  B
Eu reconhe-\xE7o
E          G#m       A
Que minha hist\xF3ria \xE9 nada sem o teu amor

   G#m     C#m
Por isso venho te buscar
     F#m/A
Porque eu preciso, meu Deus
     B
Em teus bra\xE7os estar
 G#m      C#m
Morar em teu cora\xE7\xE3o
   A         C#m  B
E entregar-me a ti, inteiramente

  G#m    A  B   E
Me abandonarei em ti, Senhor
G#m     A
Em ti repousarei
 G#m   A    B E
A tua ternura me acolhe
G#m         A
Um ref\xFAgio seguro encontrei

 G#m    A     B   E
O meu cora\xE7\xE3o venho a ti render
 G#m        A
Toma meu ser, meu querer
G#m     A    B  E
Recebe, Senhor, minha vida
   G#m      A
Como prova viva de amor
    C#m   B. E
Em teu altar, Senhor`},{id:"d87",t:"EM TEU ALTAR (G)",tom:"",m:"Ofert\xF3rio",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1u2EfCUtvLvWaJgo6b7UXkC3w5e-GDmn4.pdf",cifra:`EM    TEU      ALTAR         (G)

G       Bm7           C
Diante de tua presen\xE7a me encontro, Senhor
   Em   D
Deus infini-to
G         Bm        C
O teu olhar me acompanha e sabes quem sou
G          Bm7        C
Ao enxergar tua grandeza e minha pequenez
   Em  D
Eu reconhe-\xE7o
G          Bm       C
Que minha hist\xF3ria \xE9 nada sem o teu amor

   Bm    Em
Por isso venho te buscar
     Am/C
Porque eu preciso, meu Deus
     D
Em teus bra\xE7os estar
 Bm     Em
Morar em teu cora\xE7\xE3o
   C         Em  D
E entregar-me a ti, inteiramente

[Refr\xE3o]

  Bm    C  D   G
Me abandonarei em ti, Senhor
Bm     C
Em ti repousarei
 Bm   C    D G
A tua ternura me acolhe
Bm        C
Um ref\xFAgio seguro encontrei

 Bm    C     D   G
O meu cora\xE7\xE3o venho a ti render
 Bm       C
Toma meu ser, meu querer
Bm     C    D G
Recebe, Senhor, minha vida
   Bm     C
Como prova viva de amor
    Em  D. G
Em teu altar, Senhor`},{id:"d88",t:"EM TUA PRESEN\xC7A E",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1l5yGWgTgNRW-qkg32yfaUOF21hTxZlmy.pdf",cifra:`EM   TUA   PRESEN\xC7A

        E             A
\xC9 teu este momento de adora\xE7\xE3o
 F#m       B7           E

N\xE3o tenho nem palavras para me expressar
 E                     A

No brilho dessa luz que vem do teu olhar
 F#m       B7      E    B7
Encontro meu abrigo meu lugar

 E                   A
E quando estamos juntos entre n\xF3s est\xE1s

 F#m        B7         E  B7
Passando em nosso meio a nos aben\xE7oar

 E                A
E tocas com ternura com a tua m\xE3o
 F#m       B7        E   B7

A cada um que abre o cora\xE7\xE3o

 E        C#m   F#m      A   B7
Minhas m\xE3os se elevam/minha voz te louva
  E     C#7     F#m           B7   A   E

O meu ser se alegra quando estou em tua presen\xE7a Senhor.`},{id:"d89",t:"Em Tua Presen\xE7a (G)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17GpVEN7CkPnXjChTIaXTyn7_M8SgIaXB.pdf",cifra:`Em   Tua Presen\xE7a   (G)

     G            Am
   \xC9 teu este momento de adora\xE7\xE3o

    Bm7                Am
   N\xE3o tenho nem  palavras para me expressar

    G                    Am
   No brilho dessa luz que vem do teu olhar

    C      D      G   D
   Encontro meu abrigo meu lugar

     G              Am

   E quando estamos juntos entre n\xF3s est\xE1s
    Bm7                Am

   Passando em  nosso meio a nos aben\xE7oar
    G               Am

   E tocas com ternura com a tua m\xE3o
    C     D        G  D

   A cada um que  abre o cora\xE7\xE3o

G  D/F#    Em7  Em/D

Minhas m\xE3os se elevam
Am  Am/G  D D/C

Minha voz te louva
Bm   E4 E7

O meu ser se alegra
Am Am/G                  D    G

Quando estou em  tua presen\xE7a Senhor.`},{id:"d90",t:"Ent\xE3o Natal",tom:"",m:"Tempo (Natal/Advento)",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/12qih8Ubt53vDTNFkKIPqot6ckyHX8HZl.pdf",cifra:`Ent\xE3o  Natal

                                      A/E       D
A                     Bm        Do velho e do novo, do amor como um
Ent\xE3o \xE9 Natal... e o que o que voc\xEA fez? todo
   E/B E        A                    G         A
O ano termina e nasce outra vez Ent\xE3o, bom Natal, e um Ano Novo
    D          Em               Tamb\xE9m
Ent\xE3o \xE9 Natal... a festa crist\xE3     Em   G        D
      A/E A                     Que seja feliz quem... souber o que \xE9 o
Do velho e do novo              bem
       D                            Em
Do amor como um todo            Hare rama a quem ama
     G         A                A   D
Ent\xE3o, bom Natal e um Ano Novo  Hare rama j\xE1!
tamb\xE9m
    Em   G         D A          Ent\xE3o \xE9 Natal (Hi--ro--shi--ma...)
Que seja feliz quem... souber o que \xE9 o Em

bem                             E o que voc\xEA fez (Na--ga--sa--ki...)
               Bm                  A/E   A
E ent\xE3o \xE9 Natal... pro enfermo e pro s\xE3o O ano termina (Mu--ru--ro--a...)
      E/B E       A                   D
Pro rico e pro pobre num s\xF3     E nasce outra vez
cora\xE7\xE3o
      D           Em            Hi--ro--shi--ma...
Ent\xE3o, bom Natal pro branco e pro Em
negro                           Na--ga--sa--ki...
     A/E A      D               A/E A
Amarelo e vermelho... pra paz afinal Mu--ru--ro--a...
     G         A                D
Ent\xE3o, bom Natal e um Ano Novo  Ahh...
tamb\xE9m
    Em   G         D A          Hi--ro--shi--ma... (\xC9 Natal!)
Que seja feliz quem... souber o que \xE9 o Em

bem                             Na--ga--sa--ki... (\xC9 Natal!)
               Bm               A/E A
Ent\xE3o \xE9 Natal... e o que a gente fez? Mu--ru--ro--a... (\xC9 Natal!)
   E/B E        A               D
O ano termina e come\xE7a outra vez Ahh...
     D       Em
E ent\xE3o \xE9 Natal, a festa crist\xE3`},{id:"d91",t:"Enviai E",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1aETbfrA2V-YRIPygEkmlycfH8au4X1M1.pdf",cifra:`Enviai

        E      B
1-Vem Esp\xEDrito de Amor,
C#m        A

Acender a chama que se apagou,
E   B       C#m         A
Reinflamar os cora\xE7\xF5es com l\xEDnguas de fogo.

  E      B
2-Vem Esp\xEDrito de Amor,
C#m        A

Recriar o que o mundo destruiu
E    B     C#m   A
Reavivar em n\xF3s o primeiro amor,
F#m    G#m    A       B

Como em Pentecostes vem viver em n\xF3s,
F#m      G#m  A     B
Nos unindo a cria\xE7\xE3o a Deus clamaremos!

Refr\xE3o:
E  B      C#m   A
Enviai teu Santo Esp\xEDrito Senhor
E  B      C#m  A

Renovai a face da terra (2x)
2\xC2\xAAparte e Refr\xE3o 4 x`},{id:"d92",t:"Enviai",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1x2tH27uQvaUjpwfqbmzqUxIIGArbGHqS.pdf",cifra:`Enviai

G      D

Vem  esp\xEDrito  de amor,

 Em        C

Reacender   a chama   que  se apagou

G     D       Em           C
Reinflamar   os cora\xE7\xF5es  com   l\xEDnguas de  fogo

G      D

Vem  esp\xEDrito  de amor,

 Em          C

Recriar o que  o mundo    destruiu

G    D        Em      C

Reavivar  em  n\xF3s  o primeiro  amor

Am       G/B       C

Como   em  pentecostes   vem   viver em  n\xF3s

Am        G/B      C        C/D

Nos  unindo  \xE0 cria\xE7\xE3o. \xC0  Deus  clamaremos

G   D         Em      C

Enviai teu santo  esp\xEDrito, Senhor

 G   D        C

e renovai  a face da Terra.`},{id:"d93",t:"ESCOLHIDA G",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1XURUTV6JyZYR203W2MM69-z69bvv9p3v.pdf",cifra:`ESCOLHIDA

G            D

Uma  entre todas foi a escolhida

Em             Bm
Foste tu Maria a serva preferida

C       G

M\xE3e  do meu  Senhor
A         D D7

M\xE3e  do meu  Salvador

G Em   C    D       G Em

Maria, cheia de gra\xE7a e consolo

C      D      G  Em
Venha  caminhar  com  teu povo

C      D    G  D

Nossa m\xE3e   sempre  ser\xE1

G            D

Roga pelos pecadores  desta Terra

Em               Bm
Roga pelo povo  que em  seu Deus  espera

C       G

M\xE3e  do meu  Senhor
A         D

M\xE3e  do meu  Salvador`},{id:"d94",t:"ESCOLHIDA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1kJpREvf_FLQXkdLQ79t8rillmpWPyI1k.pdf",cifra:`ESCOLHIDA

G                            D

Uma  entre   todas   foi  a  escolhida
 Em                             Bm
Foste   tu  Maria   a serva   preferida

 C                  G
M\xE3e  do  meu  Senhor

 A                   D   D7
M\xE3e  do  meu  salvador

    G       C           D            G

Maria,   cheia   de  gra\xE7a   e  consolo
 C        D7                    G
Venha   caminhar    com  teu  povo

 C            D           G   D
Nossa   m\xE3e  sempre   ser\xE1

 G                           D
Roga  pelos   pecadores     desta  Terra

 Em                               Bm
Roga  pelo   povo   que  em  seu  Deus   espera
 C                  G

M\xE3e  do  meu  Senhor
 A                   D   D7

M\xE3e  do  meu  salvador

REFR\xC3O

[Final]   G   C   G   E
          A   C   D

          G   D   G`},{id:"d95",t:"Espirito Santo Repousa",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BW7pawCPNnCOz7VkdPVvneoTo9j_Yum3.pdf",cifra:`Espirito Santo  Repousa

   C                 Gm7 Dm7                     F   G
Esp\xEDrito Santo repousa,      Esp\xEDrito Santo repousa
     C                 Gm7 Dm7                      F  G
Esp\xEDrito Santo repousa,      Esp\xEDrito Santo repousa

 F7M             C7M                 Dm7    F      G
Sobre n\xF3s, sobre todos n\xF3s Esp\xEDrito Santo repousa
 F7M              C7M                Dm7        F     G
Sobre n\xF3s, sobre todos n\xF3s Esp\xEDrito Santo repousa sobre

C                   Gm7 Dm7                     F   G
Esp\xEDrito Santo repousa,      Esp\xEDrito Santo repousa
C                    Gm7 Dm7                      F  G
Esp\xEDrito Santo repousa,      Esp\xEDrito Santo repousa

F7M          C7M                     Dm7    F      G
Traz un\xE7\xE3o, traz un\xE7\xE3o a n\xF3s Esp\xEDrito Santo repousa
F7M          C7M                Dm7       F          G   F
Vem curar nossos cora\xE7\xF5es Esp\xEDrito Santo repousa sobre n\xF3s.
C          Dm7    F    G     F    C
Esp\xEDrito Santo repousa sobre n\xF3s.
          Dm7     F    G    F    C
Esp\xEDrito Santo repousa sobre n\xF3s.
         Dm7       F    G      F   Fm  C
Esp\xEDrito Santo repousa sobre n\xF3s.`},{id:"d96",t:"Esse pranto em minhas m\xE3os",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1vYHlYfXbfRA6qKfBllxn9gJWMRibVLbh.pdf",cifra:`Esse  pranto  em   minhas   m\xE3os

D     A         Bm                 G     Em           A
Muito alegre eu te pedi o que era meu parti, um sonho t\xE3o normal.
D    A              Bm               G      A          D
Dissipei meus bens e o cora\xE7\xE3o tamb\xE9m, no fim meu mundo era irreal

G    A     D/F#      Bm   G     A      D   D7
Confiei no teu amor e voltei sim, aqui \xE9 meu lugar!
G     A             F#m     Bm  Em    A             D
Eu gastei teus bens, \xF3 Pai, e te dou este pranto em minhas m\xE3os

D   A         Bm               G    Em         A
Mil amigos conheci, disseram: adeus caiu a solid\xE3o em mim
D    A          Bm                 G        A            D
Um patr\xE3o cruel levou-me a refletir: meu Pai n\xE3o trata um servo
assim

Refr\xE3o

D     A         Bm                 G      Em
A
Nem deixaste-me falar da ingratid\xE3o morreu no abra\xE7o o mal que eu
fiz
D      A         Bm                      G    A         D
Festa, roupa nova, anel, sand\xE1lia aos p\xE9s, voltei \xE0 vida sou feliz!

Refr\xE3o

G    A       D/F#      Bm   G     A      D D7
Confiei no teu amor e voltei sim, aqui \xE9 meu lugar!
G    A             F#m      Bm Em    A              G Gm
D
Eu gastei teus bens, \xF3 Pai, e te dou este pranto em minhas m\xE3os

A|---| m\xE9m!   A---m\xE9m!`},{id:"d97",t:"ESTAR EM TUAS M\xC3OS",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1F187_106phEddL0Y_T00c5wSS_AcKwl6.pdf",cifra:`ESTAR   EM  TUAS   M\xC3OS

[Intro] F#m7  D7M  A9  E

F#m7                  D7M       A9       C#4  C#7
    M\xE3o na terra e o cora\xE7\xE3o al\xE9m deste c\xE9u
F#m7                  D7M        A9            E

    E a semente que brota \xE9 um germem de eternidade
      F#m7         D/F#         A/E   E
Vai brotando, crescendo, esperando
     F#m7      D/F#     A/E    E
\xC9 a vida que vem despontar
         D      A/C#      Bm       Bm/A  E
Este trigo maduro, a colheita o    recolher\xE1

              A      B/A  D/A              A     E/G#
Estar em tuas m\xE3os, \xF3 Pai,       e a vida ofertar
    F#m7     F#m/E       D  A/C# Bm  Bm/A      E
No p\xE3o e no vinho a Ti,         e o c\xE9u se abrir\xE1
               A      B/A  D/A              A     E/G#
Estar em tuas m\xE3os, Senhor,      e a vida entregar
   F#m7     F#m/E  D7+  A/C# Bm     Bm/A    E
A minha obla\xE7\xE3o em ti               se perder\xE1

          F#m7     D7M   A      E
Frutificar\xE1\xE1\xE1\xE1\xE1\xE1aa\xE1\xE1, frutificar\xE1\xE1\xE1

F#m7   E   D  A6/C#  D           A      E
Fru----ti-fi-ca-----r\xE1\xE1\xE1\xE1\xE1\xE1aa\xE1\xE1, frutificar\xE1\xE1\xE1

F#m7               D7M         A9      C#4  C#7
    Da videira a flor n\xE3o restar\xE1, passar\xE1
F#m7             D7M       A9      E
   E o fruto da terra surgir\xE1, brotar\xE1
      F#m7    D/F#       A/E    E
Pela for\xE7a do vento, da chuva
      F#m7         D/F#     A/E    E
E do sol que traz vida e calor
      D       A/C#         Bm      Bm/A     E
Cada dia, crescendo e aprendendo    a recome\xE7ar`},{id:"d98",t:"ESTAS ENTRE N\xD3S (Dm)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1s9m797MFfsaAn6ZQUHFnDVtSGugsxjKs.pdf",cifra:`ESTAS       ENTRE        N\xD3S      (Dm)

Dm     Bb  C        F C
Tu \xE9s minha vida, outro Deus n\xE3o h\xE1
Dm      Bb  C     F C
Tu \xE9s minha estrada, a minha verdade
Gm    C  F    Dm
Em tua palavra eu caminharei
Bb      C    F     A7
Enquanto eu viver e at\xE9 quando tu quiseres
Gm     C     F    Dm
J\xE1 n\xE3o sentirei temor, pois est\xE1s aqui
Bb     C   Dm
Tu est\xE1s no meio de n\xF3s
 Dm      Bb C     F C
Creio em ti, Senhor, vindo de Maria
Dm       Bb  C    F
Filho eterno e santo, homem como n\xF3s
Gm     C    F      Dm
Tu morreste por amor; vivo est\xE1s em n\xF3s
Bb   C      F    A7
Unidade Trina com o Esp\xEDrito e o Pai
Gm    C      F    Dm
E, um dia, eu bem sei: tu retornar\xE1s
Bb     C    Dm
E abrir\xE1s o reino dos c\xE9us
Dm     Bb  C       F
Tu \xE9s minha for\xE7a, outro Deus n\xE3o h\xE1
Dm     Bb  C    F
Tu \xE9s minha paz, minha liberdade
Gm     C  F    Dm
Nada nesta vida nos separar\xE1
Bb      C     F   A7
Em tuas m\xE3os seguras minha vida guardar\xE1s
Gm     C    F     Dm
Eu n\xE3o temerei o mal, tu me livrar\xE1s
Bb     C   Dm
E no teu perd\xE3o viverei
Dm     Bb   C      F
\xD3, Senhor da Vida, creio sempre em ti
Dm     Bb C      F
Filho salvador, eu espero em ti
Gm     C     F     Dm
Santo Esp\xEDrito de amor, desce sobre n\xF3s
Bb     C      F    A7
Tu, de mil caminhos, nos conduzes a uma f\xE9
Gm      C F       Dm
E por mil estradas onde andarmos n\xF3s
Bb     C   Dm
Qual semente nos levar\xE1s`},{id:"d99",t:"Este lugar vai tremer",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1HnM8zNUZbShfGYxOu1gEAO5C8oa-A9VD.pdf",cifra:`Este lugar vai tremer

Em7         C
Este lugar vai tremer,

     D9
Vai tremer
Em7           C9  D9
Porque Jesus presente aqui est\xE1.

Em7         C9
Este lugar vai tremer,
     D9

Vai tremer
Em7        C9    D9 B/D# Em7 C9 Em7 (C D)
Porque aqui se encontra o povo do Senhor.

C9       D9        G     D/F#   Em7
Fomos escolhidos para orar e anunciar a todos a palavra do Senhor,
 C9          D9             C9 D9      Am7 G/B

Milagres e prod\xEDgios ir\xE3o acontecer, o nosso Deus far\xE1, o nosso Deus far\xE1.
       C9 D9 B7(#5) Em7
O nosso Deus far\xE1 este lugar tremer.`},{id:"d100",t:"Estou a Porta e Pe\xE7o Entrada",tom:"",m:"Entrada",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1H2s3MSi347HtEz7jp6dt2nfn00fysfBT.pdf",cifra:`Estou a Porta e Pe\xE7o Entrada

Intr: G D/F# Em7 Em/D Am C D

    G      D/F#     Em7    Am              G
Eu te vejo procurar muitos caminhos, \xE9 sincera tua busca eu bem sei
    C      D7      G Em   C        Am      D
Tu anseias um alento, um abrigo, nos afetos que procuras conquistar
      G      D/F#   C       D         D7     G
Nos teus olhos eu percebo a tristeza, um vazio que ningu\xE9m pode suprir
    C        D7          G Em
Eu te amo e quero ser teu grande amigo
      C      AM     D  D7
Se me acolhes, vida nova te darei.

       G        D/F#      Em
Cheguei agora, estou \xE0 porta e pe\xE7o entrada
      Am       C       D D7

Vim pra ficar na tua casa, estou aqui
           G    D/F#    Em       Am                D D7
Sentar-me \xE0 mesa, partilhar a nossa vida, na intimidade revelar meu cora\xE7\xE3o
         G    D/F#      Em
Por muito tempo esperei por esse dia
           Am        C        D D7
Vem pros meus bra\xE7os neste abra\xE7o de perd\xE3o
         G    D/F#       Em
N\xE3o me importa se tu tens as m\xE3os vazias
      Am         C       G
Eu sou Jesus e quero estar junto de ti.

      G        D/F#   Em      Am          G
Eu te chamo e quero ouvir tua resposta, te respeito nesta tua decis\xE3o
      C     D7     G Em    C      AM   D   D7

Tens a vida e a morte a tua frente, tu \xE9s livre para agora escolher
    G        D/F#     C      D      D7        G
Se tu vens comigo assumo o teu fardo, tua dor ser\xE1 tamb\xE9m a minha dor
     C      D7         G Em    C       AM   D   D7
Eu te amo com amor que n\xE3o se acaba, sou Jesus e quero estar junto de ti.`},{id:"d101",t:"Estou aqui",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1VyeknNoYQxPS9Ot2gJZn3dpGpjKQcOY6.pdf",cifra:`Estou aqui \u2013 Anjos

         G              D/G
ESTOU  AQUI PRA  SER AMADO   E TE AMAR.

                  C            Am       D4           D
E TE OLHAR  NOS OLHOS   E DEIXAR-ME  APAIXONAR!

            G             D/G
DIANTE DE  TI PRA ME RENDER  AO  TEU AMOR

         C                     Am              D4      D
E CONFESSAR   MINHAS  FRAQUEZAS:   SOU  PECADOR!

     Am7                      Em         D/E
TAMB\xC9M   ESTOU  AQUI PRA PEDIR  PERD\xC3O

       Am                  C                    D4
D
PELAS ALMAS   QUE AINDA  N\xC3O BUSCAM   O TEU  CORA\xC7\xC3O

      G  D/G                      C
TE  A M A R  POR  QUEM  N\xC3O  TE AMA

     G/B   Am  C/G                     F    D
TE  A D O R A R  POR  QUEM  N\xC3O  TE ADORA

      G  D/G                      C           G/B
E S P E R A R POR  QUEM  N\xC3O  ESPERA  EM  TI

         Am                  D4  D           G
E PELOS  QUE N\xC3O  CR\xCAEM:  EU ESTOU  AQUI!`},{id:"d102",t:"EST\xC1S ASSENTADO E",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1_8DBfsONw70DRGo27NoiiH1vE2d0mJeO.pdf",cifra:`EST\xC1S   ASSENTADO

E      F#m7    B  A/E  E B/D#   C#m
Est\xE1s assentado no trono

      F#7     A7M   B7
Sempre  reinando,Soberano!

E      F#m7    B      A/E  E  B/D#   C#m
Anjos cantando, homens  louvando
     F#7       A7M   B7
Deus reunido com  seu povo !

A/B  A/E  E   G#7    C#m      Bm7   E7
Oh!oh!  Alfa, \xD4mega!   Cristo, Filho
   A  A#\xB0    E  B/D#   C#m    F\xB0 F#m7     B7     E

\xD3 \xF3 vem,  \xD3 \xF3 vem,       \xD3  \xF3 vem  Senhor  Jesus

E     F#m7    B    A/E  E  B/D#  C#m
Ansioso espero a Tua volta

      F#7      A7M   B7
O grande dia em  que Tu vir\xE1s

E      F#m7    B        A/E  E  B/D#  C#m

Ent\xE3o subiremos, Contigo  estaremos
      F#7       A7M   B7
Pra todo o sempre Aleluia!

A/B  A/E  E    G#7     C#m      Bm7   E7
Ma  ra  natha,  Cristo, Filho, Mestre
   A  A#\xB0    E  B/D#   C#m    F\xB0 F#m7     B7     E

\xD3 \xF3 vem,  \xD3 \xF3 vem,       \xD3  \xF3 vem  Senhor  Jesus`},{id:"d103",t:"Est\xE1s entre n\xF3s",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BdLasg9W7p7N2fF3J06xoDrbF4QSwn3h.pdf",cifra:`Est\xE1s entre n\xF3s
Dm    Bb/D C/E  F  C/E

Tu \xE9s minha vida outro Deus n\xE3o h\xE1
Dm     Bb C C/E F D/F#
Tu \xE9s minha estrada a minha verdade
Gm   C  F C/E Dm

Em Tua palavra eu caminharei
Bb   C/Bb   F/A E\xBA D  D/F#
Enquanto eu viver e at\xE9 quando Tu quiseres

Gm    C  F   C/E Dm
J\xE1 n\xE3o sentirei temor pois est\xE1s aqui
Bb   C  Am D

Tu est\xE1s no meio de n\xF3s.

Creio em Ti Senhor, vindo de Maria
Filho eterno e santo, homem como n\xF3s

Tu morreste por amor, vivo est\xE1s em n\xF3s
Unidade Trina com o Esp\xEDrito e o Pai
E um dia eu bem sei Tu retornar\xE1s

E abrir\xE1s o Reino do C\xE9u

Tu \xE9s minha for\xE7a outro Deus n\xE3o h\xE1
Tu \xE9s minha paz, minha liberdade

Nada nesta vida nos separar\xE1
Em Tuas m\xE3os seguras minha vida guardar\xE1s
Eu n\xE3o temerei o mal Tu me livrar\xE1s

Bb  C    G/B
E no Teu perd\xE3o viverei.
Fm    Db/F Eb/G  Ab

\xD3 Senhor da vida creio sempre em Ti
Fm    Db Eb Eb/G Ab F/A
Filho Salvador eu espero em Ti

Bbm   Eb   Ab  Eb/G Fm
Santo Esp\xEDrito de amor desce sobre n\xF3s
Db   Eb/Db  Ab/C G\xBA F/A

Tu de mil caminhos nos conduzes a uma f\xE9
Bbm   Eb  Ab Eb/G Fm
E por mil estradas onde andarmos n\xF3s
Db    Eb Cm  Fm

Qual semente nos levar\xE1.`},{id:"d104",t:"Eternamente",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/19rtWamSQPLtKfaEZgIcIhFhCRvGhUmf7.pdf",cifra:`Eternamente

Intro: Bb F/A Gm7 Bb/D Eb/F

    G   C              G             D
Vou te contemplar no teu santu\xE1rio para te dizer como \xE9 bom sentir
  G        C     G    C D
O teu amor, Senhor, o teu amor, Senhor

    G      C              G             D
Vou te adorar em esp\xEDrito e em verdade com o meu viver, vou testemunhar
  G      C      G      G7

O teu amor, Senhor, o teu amor, Senhor
          C  Cm           Bm    F E
Eu vivo s\xF3 pra te adorar em esp\xEDrito e em verdade

         C        D           G G7
Eternamente vou te amar, tu \xE9s Senhor digno de louvor.
        C7+ C#*         Bm   E5+
Eu vivo s\xF3 pra te adorar em esp\xEDrito e em verdade

       Am7 Bm   G7+   A7   G7+ D/F# Em Bm C7+
Eternamente vou te amar, tu \xE9s Senhor digno de louvor. C/D`},{id:"d105",t:"Eu celebrarei",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1EQJnZIR6412rf3nLTuirKPD-wtcxniwe.pdf",cifra:`Eu celebrarei

INTRO: Dm Bb A7

Dm       Bb         C7     Dm
Eu celebrarei cantando ao Senhor e s\xF3 Nele me alegrarei

Dm       Bb         C7     Dm
Eu celebrarei cantando ao Senhor e s\xF3 Nele me alegrarei
Dm      Bb  Gm         A7 Dm      Bb

Eu o louvo e adoro porque tens triunfado Eu o louvo e adoro
Gm         A7

porque tens triunfado
Dm                C
Santo \xE9 o Senhor, Rei do Universo Santo \xE9 o Senhor, Rei do

    Dm                A7  Gm    A7
Universo Santo \xE9 o Senhor, Rei do Universo Porque Grande \xE9

      Dm            C
\xD4o... Hosana nas alturas. \xD4o... Hosana nas alturas. \xD4o...
Dm         A7  Gm   A7    Dm

Hosana nas alturas.Porque Santo \xE9s \xD4o... Hosana nas alturas.
   C           Dm         A7

\xD4o... Hosana nas alturas. \xD4o... Hosana nas alturas.Porque
Gm   A7
Santo \xE9s

Dm              C
Bendito \xE9, bendito o que vem. Bendito \xE9, bendito o que vem

Dm              A7  Gm   A7
Bendito \xE9, bendito o que vem. Porque Santo \xE9.
      Dm            C

\xD4o... Hosana nas alturas. \xD4o... Hosana nas alturas. \xD4o...
Dm         A7  Gm   A7    Dm

Hosana nas alturas.Porque Santo \xE9s \xD4o... Hosana nas alturas.
   C           Dm         A7

\xD4o... Hosana nas alturas. \xD4o... Hosana nas alturas.Porque
Gm   A7  A7   Gm   A7 Dm
Santo \xE9s... Por que Santo \xE9s....`},{id:"d106",t:"EU CREIO NAS PROMESSAS DE DEUS C",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18WV-pfoSD5YTJQGj5-qw-2A_uCbOa_X7.pdf",cifra:`EU  CREIO  NAS PROMESSAS     DE DEUS

        C9        G/B                   Am7
Eu creio  nas  promessas  de  Deus,  eu creio  nas

G
promessas  de  Deus,
      F           G                  C9
Eu creio  nas  promessas  do  meu  Senhor.

       G/B     Am7       Em          F          C9
Se sou         fiel  no pouco,  Ele  me confiar\xE1
mais,
      G/B     Am7         Dm          F
Se sou        fiel no  pouco,  meus  passos

G     C9
guiar\xE1.
      C9           G/B                      Am7
Eu creio  nas  miseric\xF3rdia   de Deus,  eu  creio

           G
nas miseric\xF3rdia   de  Deus,
      F               G                 C9
Eu creio  nas  miseric\xF3rdia   do meu  Senhor.
       G/B     Am7        Em        F

Se sou          fiel  no pouco,  Ele  me confiar\xE1
C9
 mais,
      G/B     Am7         Dm          F

Se sou          fiel  no pouco,  meus  passos
G     C9
guiar\xE1.
        C9            G/B       Am7          G
Eu creio  no  amor de  Deus,  eu creio  no  amor  de

 Deus,
    F          G              C9
Eu creio  no  amor do  meu  Senhor.
       G/B     Am7          Em       F

Se sou           fiel  no pouco,   Ele me  confiar\xE1
 C9
 mais,
        G/B      Am7      Dm          F       G
Se sou          fiel  no pouco,  meus  passos

    C9
guiar\xE1.`},{id:"d107",t:"EU CREIO NAS PROMESSAS DE DEUS D",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Lfmzv24KBwBOavUPaviH6AZm0bXQ_FRa.pdf",cifra:`EU CREIO  NAS PROMESSAS   DE DEUS

 D9     A/C#                 Bm7      A

Eu creio nas promessas de Deus, eu creio nas promessas de Deus,
  G     G/A      D9
Eu creio nas promessas do meu Senhor.

A/C# Bm   F#m     G     D9
Se sou fiel no pouco, Ele me confiar\xE1 mais,
 A/C# Bm  Em     G   A D9

Se sou fiel no pouco, meus passos guiar\xE1.

 D9       A/C#       Bm7      A

Eu creio na miseric\xF3rdia de Deus, eu creio na miseric\xF3rdia de Deus,
D/F# G     G/A      D9 (2x)
Eu creio na miseric\xF3rdia do meu Senhor.

REFR\xC3O

 D9     A/C#     Bm7   A
Eu creio no amor de Deus, eu creio no amor de Deus,
D/F# G   G/A    D9 (2x)

Eu creio no amor do meu Senhor.

REFR\xC3O  G/D D G/D B7

 E9      B/D#      C#m7    B      E/G#
Eu creio nas promessas de Deus, eu creio nas promessas de Deus,
 A9      A/B      E9 (2x)

Eu creio nas promessas do meu Senhor.

B/D# C#m   G#m     A    E B/D# C#m F#m A B7 E

Se sou fiel no pouco, Ele me confiar\xE1 mais ....`},{id:"d108",t:"EU LAN\xC7AREI AS REDES (EROS BIONDINI)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1gzCWbB1ohGSW1D9v1o60aqt8BNzUJjjc.pdf",cifra:`EU LAN\xC7AREI   AS REDES   (EROS BIONDINI)

   G          Am7
\xC0s vezes eu penso que n\xE3o  conseguirei
  D        C7M        G  G/B

\xC0s vezes eu sinto que fracassarei
C7M          D/C       Bm7     Em7
Tu vens ao meu  encontro antes de eu desanimar
  Am7        G/B       C7M       D7   D/F#

Tua palavra me  encoraja, me d\xE1 for\xE7a pra lutar

   G          Am7

\xC0s vezes eu penso que n\xE3o  conseguirei
  D         G         G/B
\xC0s vezes eu sinto que fracassarei
C7M          D/C       Bm7     Em7

Tu vens ao meu  encontro antes de eu desanimar
  Am7        G/B       C7M       D7
Tua palavra me  encoraja, me d\xE1 for\xE7a pra lutar

      G7M              D7
Eu lan\xE7arei  as redes mais  uma  vez

    Am7         D7     G7M
Tua  palavra \xE9 viva e tem  poder
         Gsus4     G/B     C7M   Cm7
N\xE3o  importa  quantas  vezes  eu j\xE1 tentei

   Bm7     Em7         Am7        D7
Tua  palavra \xE9 viva, Tua palavra  me  anima
    G7M   D
Eu lan\xE7arei`},{id:"d109",t:"Eu navegarei",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/11eF51sRBchJwB3uxElB5z2MpPfYcLMuB.pdf",cifra:`Eu  navegarei

     Am                                     G

Eu  navegarei    no  oceano   do  Esp\xEDrito
                F
E ali   adorarei

Dm                    E
ao  Deus  do  meu   amor

                 Am
Esp\xEDrito,    Esp\xEDrito

                     G
Que  desce   como   fogo

                        F       Dm
Vem  como   em  pentecostes
                    E

E enche-me    de  novo

            Am                        G
Eu  adorarei    ao  Deus  da  minha   vida

                     F   Dm
Que  me  compreendeu
                          E

Sem  nenhuma    explica\xE7\xE3o

Refr\xE3o

     Am                      G
Eu  servirei    ao  meu  Deus   fiel,

           F
ao  meu  Libertador,

              E
Aquele   que  venceu.`},{id:"d110",t:"Eu preciso de ti - Pe. Cleidimar",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1jdTnG3zt_BENT9eVALXbAEhhRw_dXjPX.pdf",cifra:`Eu preciso  de  ti \u2013 Pe. Cleidimar

   G   D/F#   Em    E7/G#  Am  Am/G   D4/F# D
   Eu preciso de ti, meu Senhor, eu preciso de ti
    C    D/C   G/B     Em       Am
   Quero caminhar contigo e n\xE3o mais andar sozinho,

      D    G    C/E D
   eu preciso de Ti (bis)

   Eb7+  Dm7   Gm7     Eb7+  F    G
   Vem, Esp\xEDrito Santo, \xF3 vem, Esp\xEDrito Santo (bis)

      Cm7   F    F/A
   V\xEAm  curar as minhas feridas,
      Bb   F/A   G

   fecundar-me com nova vida
     Cm7         Cm/Bb
   Inundar-me com o Teu amor
                 A\xBA   D/F#

e fazer-me crescer em tua gra\xE7a, Senhor.`},{id:"d111",t:"Eu Quero Ser de Deus",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1FSQnAlPVMvNb0MxGDvUCy3iLa8CvKnOt.pdf",cifra:`Eu Quero   Ser de  Deus

INTRO: D9  D7+/9  Em7  G9

D9      D7+/9

Uma  vida de gra\xE7a e vit\xF3ria
Em7             G9

\xC9 o que Deus tem  pra te dar

D9        D7+/9
A condi\xE7\xE3o pra voc\xEA  receb\xEA-la

Em7          G9

\xC9 a busca da Santidade (2x)

D       A/C#

Lutar contra todo pecado

Em         G9
Que  te separa de Deus

D      A/C#

Romper  com  todas cadeias
Em       G9    G/A

Ser livre e ter a mente de Deus

D9

Eu quero ser de Deus

D7+/9                Em7

Eu quero ser de Deus
   G9    G/A     D9

Eu quero viver esse amor`},{id:"d112",t:"Eu Quisera",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1-dLH2FhSLY23mzWI5Nb4RcxMbL8Y7oNn.pdf",cifra:`Eu  Quisera

E             F#m
Eu quisera, Jesus adorado
        B7                E
Teu sacr\xE1rio de amor rodear
           C#7            F#m Am
De almas puras ,florinhas mimosas
     E        B7           E  B7
Perfumando o teu santo altar

    E                F#m
O desejo de ver-te adorado
        B7           E  E7
Tanto invade o meu cora\xE7\xE3o
         A          E  C#7
Que eu quisera estar noite e dia
   A           B7       E
A teus p\xE9s em humilde ora\xE7\xE3o

 E            F#m
Pelas almas, as mais pecadoras
     B7              E
Eu te pe\xE7o, Jesus, o perd\xE3o
      C#7         F#m Am
D\xE1-lhes todo amor e carinho
      E      B7     E  B7
Todo afeto do teu cora\xE7\xE3o

E                  F#m
Pelas almas que n\xE3o te conhecem
     B7                E
Eu quisera, Jesus, s\xF3 te amar
        C#7           F#m  Am
E daqueles que de ti se esquecem
      E       B7     E  B7
As loucuras tamb\xE9m reparar

 E            F#m
E se um dia, meu Jesus amado
     B7          E
Meu desejo se realizar
        C#7          F#m  Am
Hei de amar-te por todos aqueles
       E         B7     E   B7
Que, Jesus, n\xE3o te querem amar`},{id:"d113",t:"EU SEGUIREI",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1VreYlbBrYjiVVBmqZSDEA_Wp3UIPq701.pdf",cifra:`EU SEGUIREI

 E   D
Eu vou deixar-me guiar
 D          E
E me abandonar no teu querer

 D
Preciso fazer a Tua vontade
    E

Em minha vida

     F#m  A9

Para onde eu irei?
      E
Em quem me apoiarei?

     F#m  A9
Para onde eu irei?
      E

Em quem me apoiarei?

   B9    A9       E
Eu seguirei, eu irei aonde fores Senhor
   B9    A9       E
Eu seguirei, eu irei aonde fores Senhor

     F#m  A9
Tua gra\xE7a me basta

       E
Teu amor me sustenta
     F#m  A9

Tua gra\xE7a me basta
       E
Teu amor me sustenta

     A9      C#m
Eu te seguirei, Eu te seguirei
     B9

Eu te seguirei`},{id:"d114",t:"Eu Sou o P\xE3o da Vida (Eu Ressucitarei)",tom:"",m:"Comunh\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Jvg8ZwWW3s2O005HphIBwEPigw4BCZyp.pdf",cifra:`Eu   Sou     o  P\xE3o    da   Vida

G             Bm        C                D
Eu sou o p\xE3o da vida, o que vem a mim n\xE3o ter\xE1 fome
     G     Bm         C
O que cr\xEA em mim n\xE3o ter\xE1 sede
G      Bm   Em       C    Am      D7
Ningu\xE9m vem a mim se meu Pai n\xE3o o atrair
[Refr\xE3o]

       G    D  Em   G7
Eu o ressus...citarei
       C    A7 D    D7
Eu o ressus...citarei
       G    G7  C   Cm  G  D7  G
Eu o ressus...citarei no di__a final

G             Bm        C                 D
Eu sou o p\xE3o da vida que se prova e n\xE3o se sente fome
     G       Bm       C
O que sempre beber do meu sangue
G  Bm   Em     C        D7
viver\xE1 em mim e ter\xE1 a vida eterna

[Refr\xE3o]

G            Bm      C                D
O p\xE3o que eu darei \xE9 meu corpo, vida para o mundo
     G       Bm         C
O que sempre comer de minha carne
G  Bm   Em      C        D7
viver\xE1 em mim como eu vivo no Pai

[Refr\xE3o]

G                Bm         C              D
Sim, meu Senhor, eu creio que vieste ao mundo para redimi-lo
      G   Bm      C
Que tu \xE9s o Filho de Deus
G      Bm  Em        C         D7
E que est\xE1s aqui alimentando nossas vidas

[Refr\xE3o]`},{id:"d115",t:"Eu te Adoro",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1JEnQeD42y67klrTIJSbOB3Vh8Ac0Afvi.pdf",cifra:`Eu  te Adoro

  C     C7+   F

Quando  olho tua santidade,

     C        C7+      F    F9
Quando  venho  ao teu altar Senhor,

   C      G/B   F          Bb     G4   G7
Tua luz invade dissipando a sombra  em  mim...

     C        C7+     F
Que alegria \xE9 contemplar tua gl\xF3ria,

    C       C7+     F     F9

E exaltar o teu imenso amor,
   C                   G/B      F            Bb   Gm7  C7

Teu poder me  invade transformando  todo meu  ser...

       F G            Em7    Am7
Eu te adoro,      eu te adoro,

      Dm7   G7          C   Gm7    C7
pra sempre       te adorarei...(2x)`},{id:"d116",t:"Eu te amo tanto - L\xE1zaro",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1QGAxOLr3R-X3lYkADufKcMLNuEEglal4.pdf",cifra:`Eu te amo  tanto - L\xE1zaro

Intro: G C G D G C G D

       G
Por que me resgatou?
        D
Por que me trouxe aqui?
        B    Em
Por que me queres Deus tanto assim?
       G        D
Se contra o c\xE9u pequei,e contra ti tamb\xE9m.
      B    Em
Minha vida destru\xED,como errei...
      D
Por que me queres tanto assim?

       G (Passagem r\xE1pida Am G/B G)
 Filho eu quero tanto
       C      G
 Enxugar teu pranto te fazer s\xF3 meu.
       D
 Filho eu quero ser teu Deus
      G   (Passagem r\xE1pida Am G/B)
                   C
 Eu te amo tanto,tanto,tanto,tanto
       G       D
 Filho vem ser meu,filho eu quero ser teu
 Deus
 Porque me queres tanto assim??

  Am
Eu quero te envolver em meus mist\xE9rios
  Em
No manto da minha Gl\xF3ria
  Am
Eu vou desenrolar o rolo santo
 Em
Mudar a tua hist\xF3ria
  Am            G/B
Eu vou fazer de ti vaso de honra
  C
Eu vou envergonhar os que te zombam
  D
Vou te dar vit\xF3ria
Por que me queres tanto assim ???

Refr\xE3o 2X

Por que eu te amo !!!`},{id:"d117",t:"EU TE CHAMO JESUS",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1oCOcUv2yrfNDp11n0wzdhSigDtZS1kBO.pdf",cifra:`EU  TE CHAMO    JESUS

  A       F#m
Queria poder dizer
   Bm7             D/E
Em  palavras o que sinto agora

  D7+        D#\xB0
Queria poder dizer
   A/E        F#m
Para todos que o Senhor

    Bm7         D/E
\xC9 meu  amigo mais querido
            A Em7   G/A
Minha  hist\xF3ria de amor

     D7+        E/D
E quando  ou\xE7o a Tua voz
   C#m        F#m

Me chamando   pelo nome
      Bm7    A/C#
Eu sinto uma saudade
 D7+     D#\xB0     D/E

Uma  vontade de viver

      A       E/G#
E eu Te  chamo  Jesus

      F#m
Venhas  viver junto  a mim
      Bm7    A/C#   D

Venha  me  dar essa  vontade
 D#\xB0    D/E
Essa alegria  de viver`},{id:"d118",t:"EU TE LEVANTAREI",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1debtuzez9k0VM1P8RyPS33WeVRF9PSNO.pdf",cifra:`EU  TE LEVANTAREI

F

Eu te levantarei

Dm7

Eu te levantarei

     Bb9  Gm7         C9

Filho amado,     filho querido

F

Eu te levantarei

Dm7

Eu te levantarei

    Bb9   Gm7         C9

Filho amado,     filho querido

    Bb9      C4
Restituirei tuas for\xE7as

     Bb9     C4

E te atrairei a mim

    Bb9      C4         Bb9   C4

E te darei novas  vestes,  filho amado

F/A      Bb9      C4

  Restituirei tuas  for\xE7as

     Bb/D    C/E
E te atrairei a mim

F/A      Bb9      C4        Bb9   C4

  E te darei novas   vestes, filho amado`},{id:"d119",t:"Fala Senhor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/16y0j1CoMIoJZ_EuUY1T1ROitllcTQbns.pdf",cifra:`Fala Senhor \u2013 Marcio Todeschini

D             F#m     G
Deus  quer falar  comigo
                       Em7
em coisas  t\xE3o  pequenas,

G                  A4   A
nas coisas  simples.   (2X)

G                            D
  E eu  quero  ouvir  Sua voz...

G                     D
  Preciso  estar  atento
G                        Em7
   a  todo movimento   do C\xE9u

      G             A
   em  dire\xE7\xE3o  a mim.

            G       A

Fala  Senhor,  preciso  ouvir  Tua  voz,
D         F#m             Bm7
   Eis  aqui  o Teu  servo...
                 Em7                  G

Fala  no irm\xE3o,  na  Palavra,  Senhor,
      A            D
e no meu cora\xE7\xE3o.`},{id:"d120",t:"FAM\xCDLIA DO C\xC9U",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1758b7AesQpU8__8Lz-7NmI71Jgw5Q5p0.pdf",cifra:`FAM\xCDLIA     DO   C\xC9U

Em       D         C
Quem   poder\xE1   nos separar  do  amor  de  Deus?

Em          D      C
Nada  nem   ningu\xE9m   poder\xE1

Em        D        C
Pois em  Jesus  somos  mais  que  vencedores
Em       D      C

Ele por  n\xF3s lutar\xE1

    G            D     Em           B
Eu  protejo  a  minha   fam\xEDlia,  eu  rezo  por  ela

C/E                G/D
A maior   vit\xF3ria  que  podemos     conquistar

      A/C#                  D7
\xC9 ser  Fam\xEDlia   do c\xE9u   aqui  na  terra

    G            D     Em           B
Eu  protejo  a  minha   fam\xEDlia,  eu  rezo  por  ela

C/E                G/D
A maior   vit\xF3ria  que  podemos     conquistar

 A/C#                 C  D   G
Fam\xEDlia   do c\xE9u   aqui  na  te_____rra

( C  D  C   D )

       C   Em      D
N\xE3o  vou  de\u2014sis\u2014tir

       C D    Em
Nem   de\u2014sa\u2014ni\u2014mar

     C    Em    D
A nossa  a\u2014li___an\xE7a

Am       C        D7
Foi consagrada    no altar`},{id:"d121",t:"Faz um milagre em mim",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1nXYNoC9t_jWeIvVhqHN68yauA-I085bD.pdf",cifra:`Faz   um    milagre    em   mim    \u2013  Regis    Danese

G       D/F#             Em

Como  Zaqueu,  Eu Quero  Subir
     C      D       G/B

O Mais Alto Que  Eu Puder
         D/F#            Em
S\xF3 Pra Te Ver, Olhar Para Ti

   C/E         D          G/B
E Chamar  Sua  Aten\xE7\xE3o  Para Mim

             C           G/B          C
Eu Preciso De Ti Senhor  , Eu Preciso De Ti Oh Pai

G/B              Am     Am/G          F
Sou Pequeno   Demais, Me  D\xE1  A Tua Paz
   C/E           D        G

Largo Tudo  Pra Te Seguir

             D/F#                 Em
Entra Na Minha  Casa Entra Na  Minha Vida

                   C
Mexe  Com  Minha  Estrutura
D            G/B

Sara Todas  As Feridas
                    D/F#

Me Ensina  A Ter Santidade
                     Em
Quero Amar  Somente   A Ti

                                C
Porque O  Senhor  \xC9 O Meu  Bem  Maior

     Cm6            G
Faz Um  Milagre Em  Mim`},{id:"d122",t:"Festa do Rei Jesus",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1kYs8km2qq2fWUiQkmZSdDO8kbtgzrNDu.pdf",cifra:`Festa do Rei Jesus (Pe Leo)

D                            G/A
Vamos celebrar com J\xFAbilo a festa do Rei Jesus
   D        D7/C     G/B  Gm/Bb D/A     G/A   D  G/A
Os homens com gl\xF3ria, as mulheres aleluia, vamos celebrar ao Rei!
D                            G/A
Vamos celebrar com J\xFAbilo a festa do Rei Jesus
   D        D7/C     G/B  Gm/Bb D/A     G/A   D  G/A
Os homens com gl\xF3ria, as mulheres aleluia, vamos celebrar ao Rei!

G             D/F# G             D/F#
Vamos todos nos amar que sua gl\xF3ria vai brilhar.
G     A/G   F#m    Bm E7/9  E/G#  G/A
Em cada face, em cada cora\xE7\xE3o, esta \xE9 a festa do Rei Senhor Jesus.

D                            G/A
Vamos celebrar com J\xFAbilo a festa do Rei Jesus
   D        D7/C     G/B  Gm/Bb D/A     G/A   D  G/A
Os homens com gl\xF3ria, as mulheres aleluia, vamos celebrar ao Rei!

G          D/F# G         D/F#
O perd\xE3o ir\xE1 fluir, o Amor vai nos unir.
G       A/G   F#m    Bm  E7/9  E/G#  G/A
Em um s\xF3 corpo, em um s\xF3 cora\xE7\xE3o, esta \xE9 a festa do Rei Senhor Jesus.

D                            G/A
Vamos celebrar com J\xFAbilo a festa do Rei Jesus
   D        D7/C     G/B  Gm/Bb D/A     G/A   D  G/A
Os homens com gl\xF3ria, as mulheres aleluia, vamos celebrar ao Rei!

G              D/F# G              D/F#
Os seus anjos v\xE3o cantar, com as trombetas proclamar
G    A/G   F#m     Bm E7/9  E/G#   G/A
A sua gl\xF3ria e a nossa salva\xE7\xE3o, esta \xE9 a festa do Rei Senhor Jesus.

D                            G/A
Vamos celebrar com J\xFAbilo a festa do Rei Jesus
   D        D7/C     G/B  Gm/Bb D/A     G/A   D
Os homens com gl\xF3ria, as mulheres aleluia, vamos celebrar ao Rei!`},{id:"d123",t:"Fica Senhor, Comigo",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Yz2WjI723seIpc0yNKVy7Or7cu5amR9b.pdf",cifra:`Fica   Senhor,     Comigo

A          Bm/A
Fica Senhor comigo
   D          E/D     Bm7  E    A
Preciso de Tua presen\xE7a para n\xE3o te ofender
            Bm/A      D         E/D
Sabes qu\xE3o facilmente, sou fraco e Te abandono
        Bm7    E   A
Preciso de Ti para n\xE3o cair
F#m        Bm7
Fica Senhor comigo
    E           A9  E/G#
Se queres que eu te seja fiel
F#m         Bm7
Seja-me aquele abrigo
D             D#\xB0 Bm7        A/C#
Pois embora, minha alma, muito pobrezinha
D     E4(6) E
Deseja ser para Ti
  A        Bm/A   D        A
Lugar de consola\xE7\xE3o, carinho e adora\xE7\xE3o
              Bm/A   Dm             E4 A
Um ninho de amor ent\xE3o, quietude e profunda o....ra\xE7\xE3o
   F#m         Bm7
N\xE3o pe\xE7o o que n\xE3o mere\xE7o
    E           A
Mas Tua presen\xE7a \xF3h Deus quero ter
F#m        Bm7 D
Fica Senhor comigo
         D#\xB0   Bm7 Bm7/A G E4 E
Para que eu ou\xE7a a Tua voz
A          Bm/A D           A
Fica Senhor comigo, fica meu grande amigo
A          Bm/A D           A
Fica Senhor comigo, fica meu grande amigo
   F#m         Bm7
N\xE3o pe\xE7o o que n\xE3o mere\xE7o
   E           A
Mas Tua presen\xE7a \xF3h Deus quero ter
F#m       Bm7  D
Fica Senhor comigo
         D#\xB0   Bm7    Bm7/A G E4 E
Para que eu ou\xE7a a Tua voz
F#m7  C#m7     D  E        A E/G#
Tu \xE9s minha luz, sem Ti ando nas trevas
F#m7 C#m7  D       B            G  E4 E
Fica Senhor, para me dar a conhecer Tua vontade
A         Bm/A D             A
Fica Senhor comigo, fica meu grande amigo
A              Bm/A   Dm           A
Minha alma \xE9 t\xE3o pobrezinha, seja meu \xFAnico abrigo
A         Bm/A D            A
Quero Sua companhia muito preciso ouvir-te Senhor
A          Bm/A
Tanto desejo amar-te
Dm           A Bm/A E4 E A
Fica meu grande amor`},{id:"d124",t:"Filho de Davi - Dunga",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1oEsRh1DFJsCWXm-Km5BovUWImF2fOvb0.pdf",cifra:`Filho de Davi

 F              Gm7      Am7 D7
Nem todos os maus momentos da minha vida
       Gm7   C7            F
foram o bastante, n\xE3o me levaram ao fracasso.
   Gm7           F9
Mas n\xE3o posso negar, nesses momentos
        Eb    Bb       C7
eu pude entender quem sou e como estou.

 F              Gm7      Am7 D7
Como ovelha ferida e sem pastor, voltei,

       Gm7   C7            F
como um filho pr\xF3digo, errante eu me comparei.
     Bb         F       Bb
Senhor, errei, consci\xEAncia tomei, ao h\xFAmus cheguei,
F               Eb    Bb
C7

caminho encontrei. E no Seu amor, eu sei, eu seguirei.

        Bb         Am7
Filho de Da..vi, olha para mim,
D7/4    Gm7   C         F
v\xEA como estou e onde eu cheguei.
 F7           Bb7+      Am7       D7
Eu grito pa.....ra me ouvir, \xE9 porque sei que est\xE1s aqui,
     Gm7      C7        F
 escolheste este lugar pra que eu volte.

        Bb         Am7
Filho de Da..vi, olha para mim,
D7/4    Gm7   C         F
v\xEA como estou e onde eu cheguei.
 F7           Bb7+      Am7       D7
Eu grito pa.....ra me ouvir, \xE9 porque sei que est\xE1s aqui,
     Gm7      C7        F
 escolheste este lugar pra que eu volte.
     Gm7    C       F
Pra que eu volte a enxergar.

h`},{id:"d125",t:"Filho de Davi - Tony Allyson",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1vw1Ruo-ors4KoTjIwsMBP1duJG89KVjr.pdf",cifra:`Filho de Davi

  D        A
Me contaram que o Senhor ia passar
  Em         A
E que havia uma chance de eu poder enxergar
  D      A
Me disseram que tinhas poder
 Em        A
Pra ressuscitar e fazer o paral\xEDtico andar

Bm        A G
Renasceu dentro de mim a f\xE9

        A
Que h\xE1 muito eu j\xE1 n\xE3o tinha
Bm      A  G
Eu senti meu cora\xE7\xE3o arder
        A
E eu gritei para o Senhor me responder:

D      A Bm
Jesus, filho de Davi, me cura
 G     D
\xC9s o Santo de Israel
       A Bm
Diante de Ti a tempestade se cala
   G    D
Meu Deus honra a minha f\xE9
D      A Bm
Jesus, filho de Davi, me cura
 G     D
\xC9s o Santo de Israel
       A Bm
Diante de Ti a tempestade se cala
    A   G
Meu Deus honra a minha f\xE9

G     A
Eu sei o que o Senhor tem pra mim
  G           A F#
Tuas promessas n\xE3o v\xE3o deixar de se cumprir
Bm       E

Eu sei, Teu Esp\xEDrito est\xE1 agindo em mim
G A
Jesus

D      A Bm
Jesus, filho de Davi, me cura
 G     D
\xC9s o Santo de Israel
       A Bm
Diante de Ti a tempestade se cala
   G    D
Meu Deus honra a minha f\xE9 (2x)`},{id:"d126",t:"Fogo Abrasador",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1nPLawgfoygyse_siGcw7prSXx6sb7yJU.pdf",cifra:`Fogo  Abrasador

D     A/C#     Bm

Se tu inflamas o meu cora\xE7\xE3o    E  B/Eb       C#m
   Am D        G                Seja adorado pra sempre \xF3 Senhor
Se tu somente \xE9 a minha raz\xE3o       Bm E       A
  D/F# Em A                     Quero te amar como amado eu sou
De viver e amar                  E/G# F#m B
D    A/C#     Bm                Em louvor me darei
 Em tuas m\xE3os minha vida esta   E   B/Eb      C#m
   Am D        G                 Tua vontade a minha uma s\xF3
Teu cora\xE7\xE3o \xE9 onde quero morar     Bm E       A
 D/F#    Em                     Teu cora\xE7\xE3o e o meu sejam s\xF3
E unir-me em amor                E/G#    F#m
                                Movimento de amor
    A  D/F#  G
Como um fogo abrasador              B E/G#  A
 D/F#                           Como um fogo abrasador
Inflama                          E/G#

   Em   A   D/F#   G            Inflama
Faz subir suas centelhas de amor  F#m    B  E/G#    A
  D/F#                          Faz subir suas centelhas de amor
Em chamas                         E/G#
       A   D/F#  G              Em chamas
No teu cora\xE7\xE3o aberto meu Senhor   F#m   B    E/G#    A
  D/F#                          No teu cora\xE7\xE3o aberto meu Senhor
Inflama                          E/G#
  Em    A   D/F#   G            Inflama
Faz subir suas centelhas de amor  F#m    B    E/G# A
 D/F#                           Faz subir suas centelhas de amor
Em chamas                         E/G#
       A    G      D/F# Em A    Em chamas
B                                  F#m  B      E
No teu cora\xE7\xE3o aberto meu Senhor No teu cora\xE7\xE3o aberto meu Senhor`},{id:"d127",t:"Fogo do C\xE9u",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1VA9LiMX84acP7jY2386Wz5nuwtynSPQ9.pdf",cifra:`Fogo  do  C\xE9u

E         B           A
Hoje  \xE9 a festa  do  fogo,

   E           B                 A
um novo  Pentecostes   vai  acontecer

 E            B           A
Unidos  esperamos  Tua  gl\xF3ria

    E         B               A
a Virgem  Maria  vai  interceder

              E  B               A
E vai  acontecer  um  novo  pentecostes
              E  B               A
E vai  acontecer  um  novo  pentecostes
         C#m   B            A

E vai  acontecer      um novo  pentecostes

 E                B                 A
Fogo,  fogo,  fogo,  fogo,  fogo,  fogo, fogo  do  c\xE9u

 E                B                 A
Fogo,  fogo,  fogo,  fogo,  fogo,  fogo, fogo  do  c\xE9u

C#m      B        A
Posso  dan\xE7ar  no Teu  Esp\xEDrito
C#m     B          A
Posso  pular  com Teu  poder

C#m      B         A                       2 X
Posso  correr  na Tua  un\xE7\xE3o
C#m      B        A
Posso  gritar  a Tua  gl\xF3ria

 E                B                 A
Fogo,  fogo,  fogo,  fogo,  fogo,  fogo, fogo  do  c\xE9u
 E                B                 A
Fogo,  fogo,  fogo,  fogo,  fogo,  fogo, fogo  do  c\xE9u`},{id:"d128",t:"Fogo do Esp\xEDrito",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1hagdAi6YAgat7YzqGl9pzdvWKc9PdmJa.pdf",cifra:`Fogo do Esp\xEDrito

       Intro: | E | F#m | A | B4 | (2X) | C#m B | A

      E             F#m
J\xE1 se levanta um povo escolhido,
     G#m            A
Uma gera\xE7\xE3o nova de homens restaurados.

     E      B
Que v\xE3o incendiar os cora\xE7\xF5es.

J\xE1 se escuta um grito de guerra.
O clamor do Esp\xEDrito sobre a face da terra.
E os cora\xE7\xF5es v\xE3o se incendiar.

 C#m     A
N\xF3s vamos incendiar,
   B G#m     A          E         B

Incendiar  com fogo do Esp\xEDrito esse lugar.
 C#m     A
N\xF3s vamos incendiar,

   B G#m     A   E   B   E
Incendiar com fogo do Esp\xEDrito esse lugar.`},{id:"d129",t:"Fogo Suave",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ntc35RnyqAHraOUqJLvpmW0FaabTowCY.pdf",cifra:`Fogo     Suave

[Intro]  F  G   Em   Am  Dm   G  C   C7

              F               G
Teus  dedos tocam  o  meu pensar,

                 Em    Am
carinho  em minha  alma
            Dm     G                 C      C7
Sossega  e acalma  minha  vida  agitada
        F               G             Em   Am

Tua presen\xE7a   me acolhe,   n\xE3o vou  embora
            Dm    G           C        C7
\xC9 tua  esta hora,  estou  nascendo

      F  G             Em   Am7
Adorarei,  Esp\xEDrito   Santo
        Dm             G                     C     C7
Fogo  suave,  abrasador,  doce  h\xF3spede  da  alma

      F  G             Em     Am7
Adorarei,  Esp\xEDrito   Santo
       Dm              G                     C     C7
Fogo  suave,  abrasador,  doce  h\xF3spede  da  alma

            F               G         Em       Am
Meus  olhos cantam   ao chorar,  Arrependido
          Dm    G           C         C7

Ovelha  fugida  Querendo  voltar
           F                  G              Em        Am
Aprecia  o canto  que  eu te  dou,  Colhe  as palavras
              Dm  G             C        C7

Saudosas  da  alma,  Sedenta  de amor`},{id:"d130",t:"Foi Assim",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1NKz4CmbdMjkW0uTFJlQqkFzjS2NHKZHG.pdf",cifra:`Foi  Assim
G         C

 Caminhando para Jerusal\xE9m
 G                    C
 O Pai o conduzia sempre a algum lugar
  G           C                 D/F#

 E sob o p\xF3 da estrada sempre algu\xE9m a mendigar
 G                  C
 Com suor no rosto e os p\xE9s cansados
  G                  C

 Olhar no horizonte mas sem trope\xE7ar
   G                  C               D/F#
 Com sede de pregar que o amor tudo pode, tudo pode mudar

 Bm        Em

 Ele orou , muita gente curou
 Bm        D
 Ele falou, s\xF3 o pobre ouviu
 Bm         Em

 Quando caminhou tamb\xE9m conheceu
     Am     D
 O que o Pai por amor concebeu
 Bm         Em

 Ele ouviu, meu problema escutou
 Bm         D
 Quando caiu, por amor levantou
 Bm                   Em

 Se hoje estou aqui \xE9 porque Ele chamou
    Am    D                     G
 Foi assim  que ele me conquistou

G              C
 Por onde passava ficavam a falar:
 G            C
 "Quem lhe deu poder para perdoar?"
 G          C       D/F#

 E por miseric\xF3rdia ent\xE3o eu possa recome\xE7ar.
 G             C
 Esperando Pedro \xE0 beira mar
 G           C

 Em Seu cora\xE7\xE3o queria perdoar
 G              C      D/F#
 Amar \xE9 condi\xE7\xE3o para que eu possa caminhar.`},{id:"d131",t:"Foi ela quem tudo fez",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ODfDS2IBvk28O7IJS_UJGVpPqWspwRWr.pdf",cifra:`Foi ela quem tudo fez
                    Letra e M\xFAsica: Jean Lopes
Em              E7    Am
Na minha vida sempre foi ela quem tudo fez
      D                 G7+
E foi num sonho aos nove anos que ela apareceu,
       C7+                     Am
Desde de pequeno, muito pequeno, tomou-me pela m\xE3o.
                       B7
Me mostrou tantos meninos que precisavam de aten\xE7\xE3o

     Em        E7       Am
E foi seu filho, naquele sonho, que me disse ent\xE3o:
        D                    G7+
N\xE3o com pancadas, mas com caridade e a mansid\xE3o
    C7+                  Am
Sabedoria, e com ci\xEAncia dever\xE1s conquistar
                B7
Eu te darei uma mestra, ela vai te ensinar.

Em    E7      Am          D
   Me disse tantas coisas, dif\xEDceis entender
          Em
Mas tudo a seu tempo, compreender\xE1s
       E7       Am             B7
Me prometeu que ao meu lado, ela sempre iria estar.
     Am             B7           E    B7
Eu sou aquela pra quem a tua m\xE3e te ensinou a rezar

     E                           F#m
Auxiliadora, m\xE3e dos pequenos, esperan\xE7a dos filhos seus
        B7                        E   B7
Auxiliadora, virgem formosa, senhora da terra e dos c\xE9us.
       E   Bm     E7        A
Eu n\xE3o me canso de dizer ao mundo uma s\xF3 vez
       E             B7            E
Na minha vida, foi ela quem tudo vez, foi ela quem tudo fez.

     E                           F#m
Auxiliadora, m\xE3e dos pequenos, esperan\xE7a dos filhos seus
         B7                      E    B7
Auxiliadora, virgem formosa, senhora da terra e dos c\xE9us.
       E   Bm     E7        A Am
Eu n\xE3o me canso de dizer ao mundo uma s\xF3 vez
       E             B7            E
Na minha vida, foi ela quem tudo vez, foi ela quem tudo fez.
       E             B7            A Am   E
Na minha vida, foi ela quem tudo vez, foi ela quem tudo fez.`},{id:"d132",t:"FONTE DO VIVER D",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1FWn_btAr4YJe-AMleapj0ygKSCr-DQKi.pdf",cifra:`FONTE    DO  VIVER

D       G/D     Bm     F#m
Eis aqui a fonte do viver
      G       D/F#   Em

O p\xE3o e o vinho no altar sustenta a
  Bm  A G
humanidade

D       G/D     Bm     F#m
E em prociss\xE3o vou receber
     G      D/F#    Em       Bm  A G
O cristo vivo a se doar para a eternidade

G       A/G            Bm
Todos tem  o seu lugar, nesta mesa singular
       A    D/F#Em
De fraternidade e vida

        A/C#           Bm
Eis a tua vit\xF3ria, vai al\xE9m da hist\xF3ria
           A
Amor  t\xE3o grande assim

      F#m   Bm   A/C#     D      Em
Eis o meu corpo  partido por ti, fazei isto
  Bm      A

em mem\xF3ria   de mim
     F#m    Bm  A/C#         D     Em
Eis o meu sangue   derramado  na cruz, venham
      A

todos a mim: eu sou
D
Jesus!`},{id:"d133",t:"For\xE7a e Vit\xF3ria Cm",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1zfV0F5JZ9X2Po9q9sbO4ZxDsVqYxvQUB.pdf",cifra:`For\xE7a  e Vit\xF3ria

Cm   Fm        Bb  Eb   Cm
Todo joelho se dobrara, e toda l\xEDngua proclamara.

Fm        Bb        Cm
Que Jesus Cristo \xE8, o Senhor!

      Fm       Bb         Eb     Cm
Nada poder\xE1 me abalar, nada poder\xE1 me derrotar.
      Fm       Bb         Eb     Cm
Pois minha for\xE7a e vit\xF3ria t\xEAm um nome e \xE9 Jesus

      Fm       Bb         Eb     Cm
Nada poder\xE1 me abalar, nada poder\xE1 me derrotar.
         Fm    Bb     Cm

Pois minha for\xE7a e vit\xF3ria \xE9 Jesus.

      Fm       Bb         Eb     Cm

Quero viver tua palavra, quero ser cheio do Teu Esp\xEDrito.
      Fm        Bb    Cm
Mais s\xF3 Te pe\xE7o, livra-me do mau

Refr\xE3o

Fm Bb  Cm        Fm Bb  Cm

Jeeeee sus, Jesus, Jeeeee sus,
Fm Bb  Cm
Jeeeee sus, Jesus, Ele te poder,
Fm Bb  Cm

Jeeeee sus, Jesus, Jesus
Fm Bb  Cm
Jeeeee sus, Jesus, Ele \xE9 o Senhor

Fm Bb  Cm
Jeeeee sus, Jesus, \xE9 o Senhor da minha vida
Fm Bb  Cm
Jeeeee sus, Jesus, \xE9 Senhor das nossas vidas

Fm Bb  Cm
Jeeeee sus, Jesus,`},{id:"d134",t:"For\xE7a e Vit\xF3ria Em",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1XUZ40u1mnNzR2AlfT08Gr4jFL3_ox6s_.pdf",cifra:`For\xE7a  e Vit\xF3ria

Em    Am         D       G    Em

Todo joelho se dobrara, e toda l\xEDngua proclamara.
Am         D          Em
Que Jesus Cristo \xE8, o Senhor!

      Am          D          G      Em

Nada poder\xE1 me abalar, nada poder\xE1 me derrotar.
      Am          D          G      Em
Pois minha for\xE7a e vit\xF3ria t\xEAm um nome e \xE9 Jesus

      Am          D          G      Em
Nada poder\xE1 me abalar, nada poder\xE1 me derrotar.

          Am      D      Em
Pois minha for\xE7a e vit\xF3ria \xE9 Jesus.

      Am          D          G      Em
Quero viver tua palavra, quero ser cheio do Teu Esp\xEDrito.

      Am           D     Em
Mais s\xF3 Te pe\xE7o, livra-me do mau

Refr\xE3o

Am  D  Em         Am   D  Em
Jeeeee sus, Jesus, Jeeeee sus,

Am  D  Em
Jeeeee sus, Jesus, Ele te poder,
Am  D  Em

Jeeeee sus, Jesus, Jesus
Am  D  Em

Jeeeee sus, Jesus, Ele \xE9 o Senhor
Am  D  Em

Jeeeee sus, Jesus, \xE9 o Senhor da minha vida
Am  D  Em
Jeeeee sus, Jesus, \xE9 Senhor das nossas vidas

Am  D  Em

Jeeeee sus, Jesus,`},{id:"d135",t:"FRUTIFICAR\xC1",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1mGHHOr6fikBINUD0c7d78PjOeKNnmStH.pdf",cifra:`FRUTIFICAR\xC1

Intro: Em C G D Em C G D

Em       C     G9    B4

M\xE3o na terra e o cora\xE7\xE3o al\xE9m desde C\xE9u,
Em       C     G9      D

E a semente que brota \xE9 um germe de eternidade
     Em   C     G D    Em   C

Vai brotando, crescendo, esperando, \xE9 a vida que vem
G D

despontar.
      C C7M    Am    Am/G  D

E este trigo maduro a colheita o recolher\xE1

        G    A  C        G D/F#
Estar em tuas m\xE3os, \xF3 pai e a vida ofertar

 Em   Em/D   C C7M  Am        D
No p\xE3o e no vinho a Ti, o c\xE9u se abrir\xE1

        G    A C        G D/F#
Estar em tuas m\xE3os, senhor e a vida entregar

 Em    Em/D  C C7M  Am      D     Em  C G
A minha obla\xE7\xE3o em ti  se perder\xE1, frutificar\xE1,

D Em        C  G    D
frutificar\xE1, frutificar\xE1, frutificar\xE1

Em      C     G9     B4
Da videira a flor n\xE3o estar\xE1, passar\xE1

Em      C    G9     D
E o fruto da terra surgir\xE1, brotar\xE1

   Em   C     G  D  Em      C     G
Pela for\xE7a do vento, da chuva e do sol que traz vida e

D
calor

    C  C7M      Am    Am/G  D
Cada dia, crescendo e aprendendo a recome\xE7ar.`},{id:"d136",t:"Gloria a Deus Shallon",tom:"",m:"Gl\xF3ria",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1XjO14uvFYb7IAdmPW79NDODLQ_6tXxvn.pdf",cifra:`GLORIA

G7M  Aadd9     G7M   Aadd9 A/B Bm

Gl\xF3ria, gl\xF3ria a Deus nas alturas
D/F# A G7M  Aadd9  G7M   Aadd9 Bm   D7(9)

\xD4   \xD4, gl\xF3ria e a n\xF3s a sua paz
G7M  Aadd9     G7M   Aadd9 A/B Bm

Gl\xF3ria, gl\xF3ria a Deus nas alturas
D/F# A G7M   Aadd9 G7M   Aadd9  Bsus B/D#

\xD4   \xD4, gl\xF3ria e a n\xF3s a sua paz

   Em       A    Bm     F#m
Senhor Deus Rei dos ce\xFAs Deus Pai onipotente

   Gadd9    Aadd9   Em7(9)   Asus4  A   F#7(#5)
Vos louvamos bendizemos adoramos  n\xF3s vos glorificamos

 Bm    F#m  G     Em D/F# G7M   Aadd9
E n\xF3s vos damos gra\xE7a, em Vossa Gl\xF3ria... (REFR\xC2O)

   Em       A     Bm     F#m
Jesus Cristo Senhor Deus, Filho \xFAnico do Pai,

 G          A        A/B   Bm

Cordeiro de Deus que tirais o pecado do mundo, tende piedade
G     A        A/B  Bm

V\xF3s que estais a direita do Pai, tende piedade
G     A        Em   A/C#

V\xF3s que tirais o pecado do mundo, tende piedade
 Bm    F#m  G      Em D/F# G7M   Aadd9

Acolhei a nossa s\xFAplica, em Vossa Gl\xF3ria... (REFR\xC2O)

 Em      D/F#  Gadd9    A    Bm  Em

S\xF3 V\xF3s sois o Santo Senhor, o Alt\xEDssimo, s\xF3 V\xF3s
D   A/C#      Bm  F#m   G    Em D/F# G7M   Aadd9

Jesus Cristo, Com o Esp\xEDrito e o Pai, em Vossa Gl\xF3ria... (REFR\xC2O)`},{id:"d137",t:"GLORIA A JESUS NA H\xD3STIA SANTA",tom:"",m:"Gl\xF3ria",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1A3xs34dYifr4V4-MTu7G3-acJgfE8LbU.pdf",cifra:`GLORIA        A   JESUS      NA    H\xD3STIA

                       SANTA

A/B    E7M B/E                       A7M  E/G# F#7
Gl\xF3ria a Jesus na h\xF3stia        Que vindo a n\xF3s na
E7M                             A/B
santa                           comunh\xE3o
    A7M  E/G#  F#m                E7M  B/Eb  E7M
Que se consagra sobre o         Purificado, enriquecido
A/B                                  F#7   F#/A# A/B
altar                           Deixa-nos sempre o cora\xE7\xE3o
      E7M  B/Eb E7M
E aos nossos olhos se levanta   A/B  E7M B/E
   F#7  F#/A#  A/B              Queremos Deus homens e
Para o Brasil aben\xE7oar          E7M
                                gratos
E7M       A7M                       A  E/G# F#m  A/B
Que o Santo Sacramento          Ao pai supremo ao redentor
F#m/E     B/E  E7M                   E7M B/Eb  E7M
Que \xE9 o pr\xF3prio Cristo Jesus    Zombam da f\xE9 os insensatos \xE9
   Bm   E7 A7M                       F#7   F#/A# A/B
Seja adorado e seja amado       \xC9 quem se v\xE3o contra ao Senhor
A7M  E/G#  F#7  A/B
Nesta terra de Santa Cruz          E7M  A/B
   A7M  B/A  G#m  C#m7          Na nossa f\xE9 \xF3 Virgem
Seja adorado e seja amado         A7M  A/B E7M
  A7M   A/B  E7M                O brado aben\xE7oa
Nesta terra de Santa Cruz            Bm  E7   A7M
                                Queremos Deus e ao nosso rei
                                    F#7  F#/A#
                                Queremos Deus que \xE9 o nosso
                                A/B
                                pai
                                    A7M   A/B
                                Queremos Deus que e o nosso
                                G#m C#m
                                rei
                                    A7M    A/B
                                Queremos Deus que \xE9 o nosso
                                E7M
                                p

A/B    E7M B/E
Gl\xF3ria a Jesus, Deus
E7M
escondido`},{id:"d138",t:"GLORIA PRA SEMPRE",tom:"",m:"Gl\xF3ria",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/15wVGp2A-wHCSj7y07IOhOqtZKsu1zX03.pdf",cifra:`GLORIA   PRA SEMPRE

G           Em            Am      D

GL\xD3RIA PRA SEMPRE  AO CORDEIRO  DE DEUS,
    G        Em       Am      D

A JESUS O SENHOR AO LE\xC3O  DE JUD\xC1,
    G       Em       Am     D          G

A RAIZ DE DAVI QUE VENCEU E O LIVRO ABRIR\xC1.

  G     C   D     G
O C\xC9U A TERRA E O MAR,

  G      Em        Am  D
E TUDO O QUE  NELES H\xC1,

  G      G7    C         Cm
O ADORAR\xC3O   E CONFESSAR\xC3O,

  G    Em    Am   D   G  C G
JESUS CRISTO  \xC9   O SENHOR.

          Am   D           G

ELE \xC9 O SENHOR,  ELE \xC9 O SENHOR,
      G                                  D

RESSURETO  DENTRE  OS MORTOS   ELE \xC9 O SENHOR,
        G              G7

TODO  JOELHO SE DOBRAR\xC1,
      C               Cm

TODA  L\xCDNGUA CONFESSAR\xC1,
      G    Em     Am  D    G C  G

QUE JESUS CRISTO   \xC9   O SENHOR.`},{id:"d139",t:"GLORIA \u2013 TOM E",tom:"E",m:"Gl\xF3ria",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/16mrqvpGh3MGNvSzTL9XqVa6-uUWPEnsc.pdf",cifra:`GLORIA  \u2013 TOM  E

E9             D9
Gl\xF3ria a Deus nas alturas
  A
E paz na Terra
                 E9
Aos homens por Ele amados
           D9
Senhor Deus, rei dos c\xE9us
 A             E9
Deus Pai Todo Poderoso
        Bm E9
N\xF3s vos louva__mos
           Bm E9
N\xF3s vos bendize__mos
         Bm E9
N\xF3s vos adora__mos
            Bm E9
N\xF3s vos glorifica__mos
             D9
N\xF3s vos damos gra\xE7as
     A         E9
Por vossa imensa gl\xF3ria
            D9
Senhor Jesus Cristo
 A     E9
Filho Unig\xEAnito
              D9
Senhor Deus, Cordeiro de Deus
 A         E9
Filho de Deus Pai
 Bm              A
V\xF3s, que tirais o pecado do mundo
 D9            E9
Tende piedade de n\xF3s
 Bm              A
V\xF3s, que tirais o pecado do mundo
D9            E9
Acolhei a nossa s\xFAplica
 Bm              A
V\xF3s, que estais \xE0 direita do Pai
 D9            E9
Tende piedade de n\xF3s
           Bm  E9
S\xF3 v\xF3s sois o Sa_nto
           Bm  E9
S\xF3 v\xF3s, o Senhor
           D9           E9
S\xF3 v\xF3s, o Alt\xEDssimo, Jesus Cristo
 F#          B
Com o Esp\xEDrito Santo
              A     E9
Na gl\xF3ria de Deus Pai am\xE9m!`},{id:"d140",t:"Gl\xF3ria 1278",tom:"",m:"Gl\xF3ria",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/10DbORu1ot-fJdty_OyBWx_-_9JTBIBt2.pdf",cifra:`Gl\xF3ria   1278

A D A  D  E A A7
Gl\xF3ria   Gl\xF3ria

D     E
Ao Pai, O Criador,

  A    F#m

ao Filho Redentor
   Bm     E   A A7

e ao Esp\xEDrito, Gl\xF3ria (2x)

 A       D    A

Ao Pai, O Criador do mundo,

  D      E     A  A7
ao Filho, Redentor dos homens

    D  E   A      F#m    Bm  E A

e ao Esp\xEDrito de Amor daremos  sempre   Gl\xF3ria! (2x)`},{id:"d141",t:"Gl\xF3ria a Deus nas alturas - Eliana Ribeiro",tom:"",m:"Gl\xF3ria",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/123hErdXNMlT8DqJduDemZk1Vnp_RdF6U.pdf",cifra:`Gl\xF3ria  a Deus  nas Alturas

D          C
Gl\xF3ria a Deus nas alturas
 G                   D
E paz na terra aos homens por Ele amados
  D     C        G           D

Senhor Deus, Rei dos c\xE9us, Deus Pai todo poderoso
       Am D
N\xF3s vos louvamos
       Am  D
N\xF3s vos bendizemos
       Am D
N\xF3s vos adoramos
        Am D

N\xF3s vos glorificamos
         C      G        D
N\xF3s vos damos gra\xE7as, por vossa imensa gl\xF3ria.
  D      C  G     D
Senhor Jesus Cristo, Filho Unig\xEAnito
  D        C       G        D
Senhor Deus, Cordeiro de Deus, Filho de Deus Pai
Am         G         C          D

V\xF3s que tirais o pecado do mundo, tende piedade de n\xF3s
Am         G
V\xF3s que tirais o pecado do mundo
C         D
Acolhei a nossa s\xFAplica
Am          G
V\xF3s que estais \xE0 direita do Pai
C          D

Tende piedade de n\xF3s
       Am D
S\xF3 v\xF3s sois Santo
        Am D
S\xF3 v\xF3s sois o Senhor
      C        D
S\xF3 v\xF3s o Alt\xEDssimo, Jesus Cristo
E        A

Com o Esp\xEDrito Santo
          G   D
na gl\xF3ria de Deus Pai. Am\xE9m!`},{id:"d142",t:"Gl\xF3ria a Deus nas alturas",tom:"",m:"Gl\xF3ria",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1M8v-TMOMcqOzvjwI2gKwOEVqhNUe2o_j.pdf",cifra:`Gl\xF3ria    a  Deus   nas   alturas

       D            C
Gl\xF3ria a Deus nas alturas

 G                      D
E paz na terra aos homens por Ele amados
  D      C         G            D
Senhor Deus, Rei dos c\xE9us, Deus Pai todo poderoso

        Am D
N\xF3s vos louvamos
        Am  D

N\xF3s vos bendizemos
        Am D
N\xF3s vos adoramos
         Am D

N\xF3s vos glorificamos
           C      G         D
N\xF3s vos damos gra\xE7as, por vossa imensa gl\xF3ria.

  D       C   G      D
Senhor Jesus Cristo, Filho Unig\xEAnito
  D         C        G          D
Senhor Deus, Cordeiro de Deus, Filho de Deus Pai

Am           G         C            D
V\xF3s que tirais o pecado do mundo, tende piedade de n\xF3s
Am           G

V\xF3s que tirais o pecado do mundo
C          D
Acolhei a nossa s\xFAplica

Am           G
V\xF3s que estais \xE0 direita do Pai
C           D
Tende piedade de n\xF3s

        Am D
S\xF3 v\xF3s sois Santo
         Am D

S\xF3 v\xF3s sois o Senhor
       C         D
S\xF3 v\xF3s o Alt\xEDssimo, Jesus Cristo
E         A

Com o Esp\xEDrito Santo
            G   D
na gl\xF3ria de Deus Pai. Am\xE9m!`},{id:"d143",t:"Gratid\xE3o \u2013 A",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Ui-2B8lF02fuksUgmWr6cCM9KBsWz09S.pdf",cifra:`Gratid\xE3o  \u2013 A

D   A     E     F#m
Eu encontrei um amor perfeito
  Bm             D      E  D  E
Um tesouro escondido diante deste altar
  A      E      F#m  Bm    D      E D

Seu valor \xE9 maior que tudo, nada poder\xE1 se igualar

A        F#m
Te adorarei com todo meu ser
             Bm              D   E
Quando estou mais perto de ti, fortaleces o meu viver

A          F#m
Te exaltarei com meu cora\xE7\xE3o
         Bm7           D     E          A     D
Majestade, estou aqui para te render meu amor, minha gratid\xE3o

      A     E    F#m      Bm

A quem irei, se tua voz \xE9 vida? Tua presen\xE7a \xE9 t\xE3o clara
     D       E     A          E      F#m
e t\xE3o forte como o sol sou feliz por que sei que vivo
      Bm7       D       E
est\xE1s tudo o que me resta \xE9 te amar

A          F#m
Te adorarei com todo meu ser
              Bm              D   E
Quando estou mais perto de ti, fortaleces o meu viver

A          F#m
Te exaltarei com meu cora\xE7\xE3o

          Bm7         D       E        F
Majestade, estou aqui para te render meu amor, minha gratid\xE3o

      C
Levantarei minhas m\xE3os
F            A
Minha adora\xE7\xE3o ir\xE1 tocar o c\xE9u

F         G        Esus4 E
Forte cantarei, te adorarei, P\xE3o da Vida`},{id:"d144",t:"Gratid\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1jmVvX6wSIVnBZWf47pkTF4gY64259Ckt.pdf",cifra:`Gratid\xE3o      \u2013 Vida    Reluz

    C     G/B  Am   Am/G    Dm      Dm/C

Eu encontrei um amor perfeito um tesouro escondido
 G        F/G  G    C     G/B   Am  Am/G
diante deste altar seu valor \xE9 maior que tudo
Dm    F     F/G  G

nada poder\xE1 se igualar

Refr\xE3o

C    G/B   Am7     Am/G          Dm7    F
Te adorarei com todo meu ser quando estou mais perto de ti
      Am7    G  C     G/B   Am7    Am/G
fortaleces o meu viver te exaltarei com meu cora\xE7\xE3o

     Dm7    F       Am7     G      C
majestade estou aqui para te render meu amor, minha gratid\xE3o

SOLO: C  G/B Am  Am/G  F/G

    C      G/B   Am  Am/G     Dm       Dm/C
A quem irei, se tua voz \xE9 vida? Tua presen\xE7a \xE9 t\xE3o clara

   G         F/G G     C      G/B   Am
e t\xE3o forte como o sol sou feliz por que sei que vivo
  Am/G  Dm7      F       F/G  G
est\xE1s  tudo o que me resta \xE9 te amar

REPETE  Refr\xE3o

Ab    Gm7       Ab            C     C4 C

 Levantarei minha m\xE3os minha adora\xE7\xE3o ir\xE1 tocar o c\xE9u
Ab        Bb          G7/4 G7  G7/4 G7
forte cantarei, te adorarei, p\xE3o da vida...`},{id:"d145",t:"Hino CF 2010",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1t9jnAsmtT8pzM5DkOpQ8NeX4V4ln7tNI.pdf",cifra:`Hino  da Campanha    da Fraternidade   Ecum\xEAnica   2010

     C         Bb9     C    C7
Jesus Cristo anunciava por primeiro
        F      A5+         Dm

Um novo Reino de justi\xE7a e seus valores
G       Am        Em        F  A5+
V\xF3s n\xE3o podeis servir a Deus e ao dinheiro
      Dm       G7         C

e muito menos agradar a dois senhores (2x)

             Fm      Dm7         G   A7
1.Voz de um profeta contra o \xEDdolo e a cobi\xE7a

   Dm           B7        Em
Endireitai hoje os caminhos do Senhor
          F     C        Am  F
Produzi frutos de partilha e de justi\xE7a

        Em         Dm         G
Chegou o Reino: Convertei-vos ao amor

             Fm      Dm7         G   A7
2. N\xE3o \xE9 a riqueza nem o lucro sem medida
        Dm        B7        Em
Que geram paz e la\xE7os de fraternidade

          F     C             Am  F
Mas todo o gesto de partilha em nossa vida
        Em         Dm         G
Que faz a f\xE9 se transformar em caridade

          Fm       Dm7        G   A7
3.No evangelho encontrareis a luz divina
        Dm           B7        Em

N\xE3o no sup\xE9rfluo, na gan\xE2ncia e na ambi\xE7\xE3o
       F     C       Am     F
Ide e vivei a Boa-Nova que ilumina
     Em       Dm        G

E a palavra da fraterna comunh\xE3o`},{id:"d146",t:"Hoje Livre Sou F",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1rKdqdJUzfR9HOX7e9NTz4BZqo26kWIvt.pdf",cifra:`Hoje Livre Sou

F      C/E    Dm     F/C  Bb9    F    C
Presen\xE7a forte em mim, eu posso dizer: habitas aqui
F      C/E    Dm         Bb     F         C

Porque escravo eu fui e hoje eu sou mais livre aos teus p\xE9s

Am      Bb       C/E      F
Sentido na vida a minh\u2019alma encontrou

Am      Bb       C       F
Tua m\xE3o poderosa veio e me levantou
Am     Bb   Am  Bb
Agora eu posso declarar
    Dm  C   F

Hoje li vre sou

(G)            Em9      C9   G
(F)            Dm9      Bb9  F

Tenho sede da tua gra\xE7a, cada dia mais
                    Em          C    D
                    Dm          Bb   C
Sou mais forte e vou mais longe quando aqui est\xE1s

      Em      Am       G/B    C
      Dm      Gm    Am ( F/A ) Bb
Com palavras de amor te adoro, Senhor
    Em  D  G        ( F9 C/E C/D G )

    Dm  C  F        ( G )
Hoje li vre sou     ( F Dm Bb9  F Dm9 Bb C Gm/Bb )

(F)            Dm9      Bb9  F

Meu tesouro, minha heran\xE7a, meu Supremo Bem
F                    Dm          Bb   C
Nem tribula\xE7\xF5es nem dor podem nos separar
      Dm      Gm    Am ( F/A ) Bb
E jamais ir\xE3o romper o que o amor selou

    Dm  C  F        ( G )
Hoje livre sou`},{id:"d147",t:"Hoje Livre Sou (G)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1b9UkgIRF_WBsQDQyUdN2bAEMdh7rFrfj.pdf",cifra:`Hoje Livre Sou (G)

G          D/F#      Em
Presen\xE7a  forte  em  mim,
            C9   G/B      D9
eu posso  dizer   habitas   aqui

G          D/F#      Em
Porque  escravo  eu  fui
          C9         G/B             D9
e hoje  eu sou  mais  livre  aos teus  p\xE9s

   Bm       C9            D/F#         G
Sentido  na vida  a  minh'alma  encontrou

    Bm        C9         D9           G
Tua m\xE3o  poderosa  veio  e  me levantou
 Bm       C9    Bm    C9
Agora  eu posso  declarar

      Em D9   G
Hoje  livre sou

                     Em          C9    G

Tenho  sede da  tua  gra\xE7a,  cada  dia  mais
                              Em             C9     D9
Sou mais  forte  e vou  mais  longe  quando  aqui  est\xE1s
        Em        Am     G/B        C9

Com palavras   de amor  te  adoro,  Senhor
    Em  D9  G
Hoje  livre sou

                       Em              C9    G
Meu tesouro,   minha  heran\xE7a,  meu  supremo  Bem
                      Em              C9     D9
Nem tribula\xE7\xF5es   nem  dor  podem  nos separar

       Em        Am           G/B       C9
E jamais  ir\xE3o  romper  o que  o amor  selou
      Em D9   G
Hoje  livre sou`},{id:"d148",t:"H\xC1 UM CHAMADO G",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/19oQRnHf-0evg4_FYNP163BQbY5klG3yS.pdf",cifra:`H\xC1  UM  CHAMADO

 G          Em
H\xE1 um chamado vindo da montanha
 Am   Am7    D    D4
A todos n\xF3s para louvar o Senhor

 G          Em
H\xE1 um chamado vindo da montanha
 Am   Am7    D    D4
A todos n\xF3s para exaltar o Senhor
    G
Cantem os anjos a gl\xF3ria
    Em
Cantem os anjos conosco
    Am      C   F D  D4
Cantemos juntos ao Senhor soberano

 G    Em    Am  C  F D
A honra, a gl\xF3ria, a for\xE7a e o poder
 G    Em    Am  Am7  F D  D4
A honra, a gl\xF3ria, a for\xE7a e o poder

( G D D4 Am Am7 C )

 G          Em
H\xE1 um chamado vindo da montanha
 Am   Am7    D    D4
A todos n\xF3s para louvar o Senhor
 G          Em
H\xE1 um chamado vindo da montanha
 Am   Am7    D    D4
A todos n\xF3s para exaltar o Senhor

    G
Cantem os anjos a gl\xF3ria
    Em
Cantem os anjos conosco
    Am      C   F D  D4
Cantemos juntos ao Senhor soberano

 G    Em    Am  C   F D
A honra, a gl\xF3ria, a for\xE7a e o poder
G D D4 Am  Am7   C
Oh,   eu obede\xE7o o Teu chamado`},{id:"d149",t:"Ie ie ie Porque Deus me ama",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1tBVnHYdR6tjwMHL1BivmIP6FrDxV9dxa.pdf",cifra:`Ie ie ie

Introd: D G A G (2X)

D   G  A G  D    G  A G
I\xEA, i\xEA, i\xEA... U\xF4, u\xF4, u\xF4...
 D    G   A G       D
 Canta, canta, canta, n\xF3s cantaremos.

 D    G   A G       D
 Louva, louva, louva, n\xF3s louvaremos.

                      Por que Deus me ama

C     Am     F     G

Na...na......na...na......na...na.....na...
C     Am     F     G
Na...na......na...na......na...na.....na...

C    Am    F    G
Alegria do Senhor \xE9 for\xE7a e prote\xE7\xE3o.
C    Am   F    G

Ele d\xE1 a paz, transforma o cora\xE7\xE3o.
C     Am       F    G
N\xE3o existe amor sem Deus, nem plenitude e paz.
C     Am    F    G   G

Deus me d\xE1 a vida, Deus me satisfaz.

C    F          C
E por isso ergo as minhas m\xE3os para cima.
 F        C        F
E tiro meus p\xE9s l\xE1 do ch\xE3o. Balan\xE7o meu corpo,

     C
nele Deus habita.
   F     G      G

Deus \xE9 Dominus e d\xE1 salva\xE7\xE3o!

 C    Am  F     G
{ Louvar.......... porque Deus me ama!

C    Am   F    G

Amar............Porque Deus me ama! } 2x`},{id:"d150",t:"Incendeia Minha Alma D",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1HXz_Dd-OaXO-g2xFr88ksdhrb0fXIwDq.pdf",cifra:`Incendeia  Minha   Alma  - Flavinho

D9    A/C#     Bm7       A

Esp\xEDrito santo vinde falar em mim
D    A/C#     Bm7       A
Esp\xEDrito santo vinde falar em mim

D9    A/C#     Bm7       A
Esp\xEDrito santo vinde orar em mim
D    A/C#     Bm7       A
Esp\xEDrito santo vinde orar em mim

D/F#   G          Bm7        Em
Vinde curar vinde libertar nossos cora\xE7\xF5es de toda
A

opress\xE3o
D/F#      G      Bm7       Em
Vinde transformar vem incendiar tr\xE1s fogo do c\xE9u
D/F#    A9
neste lugar

(Refr\xE3o)

D             A/C#      Bm       F#m

Incendeia minha alma incendeia minha alma
G          D/F#       A    A/C#
Incendeia minha alma senhor

D           A/C#     Bm         F#m
Incendeia minha alma incendeia minha alma
G         D/F#       A
Incendeia minha alma senhor`},{id:"d151",t:"Inunda meu Ser",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1AURCEsf_0btrXxfCwz-68hHuYNC8oQKN.pdf",cifra:`Inunda     meu   Ser  \u2013 Mons.    Jonas   Abib

D       A/C#   Bm  Bm/A
 Esp\xEDrito Santo de Deus.
 G      D/F#   Em    A7

 inunda meu ser, inunda meu ser.
 D     A/C#    Bm

 Quero sentir o amor,
 Bm/A      G    D/F#  Em  A7

 do meu Senhor, do meu senhor!
 Bm      Bm/Bb       Bm/A
 Pra poder perdoar o meu irm\xE3o,

 Bm/G#       G     C9   A
 abrir meu cora\xE7\xE3o, viver o amor!

 Bm      Bm/Bb     Bm/A
 Pra sentir a paz interior,
 Bm/G#          G

 sobre o mal ser vencedor,
 C9        A7

 alegrar-me em ti
  D     F#m      G     G/A

 Inunda meu ser (ah, inunda meu ser) (4x)`},{id:"d152",t:"Invade Minh`alma",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1nm_ZAqkar3WBKEdypqU4aMIdAuyDqc3B.pdf",cifra:`Invade Minh\`alma\u2013 Anjos

D               G              D
INVADE  MINH'ALMA,   ME AMA  E ME  ACALMA

                   Em    A7             G    D    D/C
E SONDA  O MEU  SER,   ME CURA  E  ME SALVA.
            G/B      Bb6            D/A     G#\xBA
TUA INTIMIDADE:      QUERO  CONHECER!
                 G     G/A             D    Am7   D7

E MANSO  E HUMILDE     TAMB\xC9M  QUERO  SER
                 G     D/F#           Em7    Bm
INVADE  MINH\`ALMA      E FAZ-ME  FIEL
                       Em7     G/A      A       D

TEU CORPO  E  TEU SANGUE      ME LEVAM  AO  C\xC9U.

                G        A/G          Em7    Bm
INVADE  MINH\`ALMA     E FAZ-ME  FIEL
                     Em7      G/A     A        D

TEU CORPO  E  TEU SANGUE     ME LEVAM  AO  C\xC9U.`},{id:"d153",t:"Invocamos",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1WejuJ8GzebaqeWPLiCwHry9QP0TP24NA.pdf",cifra:`Invocamos     \u2013 Banda   Nova   Alian\xE7a

  E                      C#m       G#m

Invocamos o Teu nome Invocamos o teu poder
A                  C#m          B
Invocamos a tua Presen\xE7a no meio de n\xF3s

  E                      C#m       G#m
Invocamos o Teu nome Invocamos o teu poder

A                  C#m          B
Invocamos a tua Presen\xE7a no meio de n\xF3s

   E    A      F#m
Manifesta Senhor o Teu Poder

  C#m     B      F#/Bb
Manifesta Senhor a Tua for\xE7a

    E       A        F#m               C#m          F#m
Manifesta Senhor neste lugar o Teu grande amor que tudo pode
B

curar.
   E    A      F#m

Manifesta Senhor o Teu poder
      C#m       B      F#/Bb

Com  prod\xEDgios milagres sinais
    E       A        F#m               C#m          F#m
Manifesta Senhor neste lugar o Teu grande amor que tudo pode

B
curar.`},{id:"d154",t:"Jesus Cristo mudou meu viver",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18tczC0qnFDv0dXhUuLMXXnlWet06sz3Z.pdf",cifra:`JESUS  CRISTO  MUDOU   MEU  VIVER

  A               C#m7
JESUS CRISTO MUDOU MEU VIVER
D7+               D#dim
JESUS CRISTO MUDOU MEU VIVER
     A    C#m7      F#m7
\xC9 A LUZ QUE ILUMINA O MEU SER
         Bm C#m7 D D/E  A D/E
SIM JESUS CRISTO MUDOU MEU VIVER
  A                 C#m7
DIFERENTE HOJE \xC9 O MEU CORA\xC7\xC3O
D7+               D#dim
DIFERENTE HOJE \xC9 O MEU CORA\xC7\xC3O
     A    C#m7    F#m7
CRISTO DEU-ME PAZ E PERD\xC3O
         Bm C#m7 D D/E  A D/E
SIM DIFERENTE HOJE \xC9 O MEU CORA\xC7\xC3O
D7+     D#\xBA                   A  C#7 F#m7
O AMOR S\xD3 CONHECIA EM CAN\xC7\xD5ES QUE FALAVAM DE ILUS\xD5ES MAS
  B                  Bm
TUDO AGORA \xC9 DIFERENTE E ISSO FALO A TODA GENTE POIS CRISTO
D    D#\xBA E
DEU-ME O SEU AMOR`},{id:"d155",t:"Jesus \xE9 nossa festa",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1kFbHWc8EhOOcxnNiIceUpZZbnP6tEPan.pdf",cifra:`Jesus \xE9 nossa festa

 Intro G7 C7 G7 C7

         G7 C7
Jesus \xE9 uma festa
       G7 C7

Ele \xE9 nossa festa
       Em  C9
S\xF3 Ele \xE9 alegria
     F C D9

Pra se viver

         G7 C7

Com ele tudo festa
          G7 C7
Jesus \xE9 nossa festa
       Em C9

\xC9 pura alegria
       F C9 D9
Pra voc\xEA viver

A

G7            C7            G7
Vamos dan\xE7ar ao Senhor, com alegria e fervor
              C7
Vamos dan\xE7ar ao Senhor

G7            C7            G7
Vamos cantar ao senhor, com toda for\xE7a e amor
              C7   D4 D

Vamos louvar ao senhor, ao senhor, experimenta.
G  F G  F G F       D4 D
Dan\xE7a ....pula...louva.....pra se viver.
G  F G F G F      D4 D

Canta...grita...ama...pra se viver,experimenta. VOLTA A INTRO
.                           PULA DO A PARA B

B

Bb       F      C9          G
Ele \xE9 a fonte de toda a alegria vem correndo se divertir
Bb             F
Descruze os bra\xE7os n\xE3o fique parado

D4             D
Vem que a festa boa \xE9 aqui.Experimenta.

G  F G  F G F       D4 D
Dan\xE7a ....pula...louva.....pra se viver.
G  F G F G F      D4 D

Canta...grita...ama...pra se viver,experimenta
                           1\xAAVEZ 2\xAAVEZ
FINAL G7     G7      F9 C D4 G`},{id:"d156",t:"JURAS DE AMOR C",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/19B9WRPa3ScrAGq2p4-y6AOYbl4F7h5tz.pdf",cifra:`JURAS  DE  AMOR

C              F           C  F
Quero  transformar numa   can\xE7\xE3o

    C       F            G

As juras de amor por ti meu Deus
C              F           C  F

Entraste em  minha vida sedutor

F#\xB0                     G

J\xE1 n\xE3o sei viver sem teu amor

C7          F     G                C
Tudo te entreguei, nada  me restou

 Am        Dm   G        C

Livre eu fiquei para te amar meu Deus
C7          F     G                C

Tudo me  pediste, nada eu te neguei

Am          Dm       F         G
Hoje eu sou feliz assim, tenho a ti meu

C   C7  F  G  C Am   Dm  F  G C

Deus. L\xE1, l\xE1, lai\xE1`},{id:"d157",t:"KYRIE (SOIS O CAMINHO) Em",tom:"",m:"Ato Penitencial",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1LAnVO6sEEPy-EN9NxdeR2eumvuVUI932.pdf",cifra:`KYRIE   (SOIS  O  CAMINHO)

Em        D      G          Am D   Em
Senhor que sois o caminho que nos leva ao Pai

C       Bm    Em
Tende piedade de n\xF3s!

Em D/F# G
Kyrie
C  D/C G/B

Kyrie
Am Bm E     Am  Bm Em    Am  Bm Em
Kyrie        Eleison

Em        D      G          Am D   Em

O Cristo que sois a verdade que ilumina os povos
C       Bm    Em
Tende piedade de n\xF3s!

Em D/F# G
Christe
C  D/C G/B

Christe
Am Bm E     Am  Bm Em    Am  Bm Em
Christe     Eleison

Em        D    G      Am  D  Em

Senhor que sois a vida que renova o mundo
C       Bm    Em
Tende piedade de n\xF3s!

Em D/F# G
Kyrie
C  D/C G/B

Kyrie
Am Bm E     Am  Bm Em    Am  Bm Em
Kyrie        Eleison`},{id:"d158",t:"KYRIE (SOIS O CAMINHO) G",tom:"",m:"Ato Penitencial",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1o25euHqBvQA80wyUVvWmj02ZLrb31-ae.pdf",cifra:`KYRIE   (SOIS  O  CAMINHO)

Em        D      G          Am D   Em
Senhor que sois o caminho que nos leva ao Pai

C       Bm    Em
Tende piedade de n\xF3s!

Em D/F# G
Kyrie
C  D/C G/B

Kyrie
Am Bm E     Am  Bm Em    Am  Bm Em
Kyrie        Eleison

Em        D      G          Am D   Em

O Cristo que sois a verdade que ilumina os povos
C       Bm    Em
Tende piedade de n\xF3s!

Em D/F# G
Christe
C  D/C G/B

Christe
Am Bm E     Am  Bm Em    Am  Bm Em
Christe     Eleison

Em        D    G      Am  D  Em

Senhor que sois a vida que renova o mundo
C       Bm    Em
Tende piedade de n\xF3s!

Em D/F# G
Kyrie
C  D/C G/B

Kyrie
Am Bm E     Am  Bm Em    Am  Bm Em
Kyrie        Eleison`},{id:"d159",t:"Kyrie Eleison G",tom:"",m:"Ato Penitencial",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1M0cyY1BCPF6a-vIj0f-zzyo9T92oPEho.pdf",cifra:`Kyrie  Eleison

G         D/F#
Como  a ovelha perdida
Em7        Bm7

Pelo pecado ferida,
Am7         C    Eb\xB0  Em   D/F#

Eu Te suplico perd\xE3o, \xF3 Bom Pastor!
G    D/F#   Em     Bm  C G/B   Am    C G/B Am   G
Kyrie eleison! / Kyrie eleison! / Kyrie E Le i son

G           D/F#

Como  o ladr\xE3o perdoado,
 Em7             Bm7

Encontro o para\xEDso ao Teu lado,
Am7           C7M     Eb\xB0  Em7   D/F#
Lembra-te de mim, pecador, por Tua Cruz!

G     D/F#    Em     Bm  C   G/B  Am  C  G/B Am   G
Christe eleison! / Christe eleison! / Christe e Le i son!

G         D/F#
Como  a pecadora ca\xEDda,

 Em7             Bm7
Derramo aos Teus p\xE9s minha vida.

Am7            C7M     Eb\xB0  Em7  D/F#
V\xEA as l\xE1grimas do meu cora\xE7\xE3o e salva-me!

G    D/F#   Em     Bm  C G/B   Am    C G/B Am   G
Kyrie eleison! / Kyrie eleison! / Kyrie e Le i son`},{id:"d160",t:"Kyrie Eleison (E)",tom:"",m:"Ato Penitencial",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1SU_j3HJkcbqUlW7rLKUOXruallR9xVFk.pdf",cifra:`Kyrie  Eleison

E           B/Eb  C#m           Abm

Como   a ovelha  perdida,  pelo pecado   ferida

A           B         C#m    B/Eb

Eu Te suplico  perd\xE3o,  \xF3 Bom   Pastor!

E     B/Eb     C#m      Abm   A   E/Ab   F#m   A     E B

Kyrie eleison!  / Kyrie eleison!  Kyrie  elei son

E           B/Eb

Como   o ladr\xE3o  perdoado,

  C#m               Abm

encontro   o para\xEDso ao  Teu  lado,
  A            B        C#m    B/Eb

Lembra-te   de mim,   pecador,  por  Tua Cruz!

E        B/Eb    C#m       A   E/Ab     F#m  A     E B

Christe eleison!  / Christe eleison! / Christe  eleison

E           B/Eb

Como   a pecadora   ca\xEDda, /
  C#m                Abm

derramo   aos  Teus p\xE9s  minha   vida.

    A             B       C#m   B/Eb

V\xEA as l\xE1grimas  do  meu   cora\xE7\xE3o  e salva-me!

E     B/Eb     C#m       A  E/Ab     F#m   A      E  B

Kyrie eleison!  / Kyrie eleison! / Kyrie  eleison`},{id:"d161",t:"KYRIE ELEISON JMJ",tom:"",m:"Ato Penitencial",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18fl2egdF0HHhLqwxnH7yIvxCWx266hpV.pdf",cifra:`KYRIE    ELEISON     JMJ

  Dm7       C    A#7M
Senhor, que viestes salvar
     Dm7       C/E  A4  A

Os cora\xE7\xF5es arrependi____dos

    F  F4  F  C/E
Kyrie  elei____son

 A7/C#   A7  Dm7
Elei__________son
 G4  G  C
Elei____son

   Dm7       C9      A#7M
\xD3, Cristo, que viestes chamar

     Dm7       C/E  A4  A
Os pecadores  humilhados

    F   F4  F  C/E
Christe  ele____ison
 A7/C#   A7  Dm7

Elei__________son
 G4  G  C  A#/C  C  A#/C
Ele____ison

  Am7         G6   F7M
Senhor, que intercedeis por n\xF3s
        Am7         G/B  E4

Junto a Deus Pai que nos perdoa

    F  F4  F  C/E
Kyrie  elei____son

 A7/C#   A7  Dm7
Elei__________son
 G4  G  C
Elei____son`},{id:"d162",t:"La\xE7os de Amor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Sudz3BoprFgiTUhQ6IPZiq1FKBAMpLZp.pdf",cifra:`La\xE7os de Amor

 C     G/B     Am    F7+      Dm7   F/G

Senhor, nos escolheste desde sempre e conduziste o nosso caminhar.
 Em7         A4/7 Am7  Dm7    F/G      Gm/C
Com la\xE7os de amor nos envolveste, criaste-nos somente para amar.

C C/F C/E F7+ G/F  Em7 A4/7 Am7
Pois somos Teus, sim, somos Teus,
  Dm7      F/G     Gm/C

Nossas vidas Te entregamos, \xF3 Senhor.
C C/F C/E F7+ G/F Em7 A4/7 Am7
Pois somos Teus, somente Teus,

Dm7      F/G     C F/C C F/C
Aben\xE7oa hoje e sempre o nosso amor.
 C     G/B     Am   F7+        Dm7   F/G

Cuidaste dos detalhes com carinho, em cada passo, em cada decis\xE3o.
 Em7          A4/7 Am7 Dm7    F/G     Gm/C
Senhor, Tu \xE9s presen\xE7a no caminho, a Ti nosso louvor, nossa can\xE7\xE3o.
C C/F C/E F7+ G/F  Em7 A4/7 Am7

Pois somos Teus, sim, somos Teus,
 Dm7       F/G    Gm/C
Nossas vidas Te entregamos, \xF3 Senhor.

C C/F C/E F7+ G/F Em7 A4/7 Am7
Pois somos Teus, somente Teus,
 Dm7     F/G      C F/C C F/C C F/C C

Aben\xE7oa hoje e sempre o nosso amor.`},{id:"d163",t:"LEVANTA-SE DEUS F e C",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/10zRSP2NqKRvz7rjzqAkTj6UsV1nubjaO.pdf",cifra:`LEVANTA-SE           DEUS      (F)
C7    F  C     Dm7  Am
Levanta-se Deus, levanta-se Deus
   Bb9      F      Gm         C
Se dispersam os seus inimigos. Se dispersam os seus inimigos

  Dm7  Am    Bb   C
Por intercess\xE3o da Virgem Maria
  Dm7  Am     Gm7     C9
Por intercess\xE3o do Arcanjo S\xE3o Miguel
  Gm  C7 Bb9  Gm7   C7  Bb9
Por intercess\xE3o de toda mil\xEDcia celeste
  Gm     Bb9        C C7
Que fujam de sua face os que vos odeiam

Bb    Dm     C    F
Sobre as fam\xEDlias, levanta-se Deus
Bb      Dm    Bb    C7
Sobre as enfermidades, levanta-se Deus
Bb     Dm     C    F
Sobre os imposs\xEDveis, levanta-se Deus
Bb    Dm   Bb    C7
Sobre todo mal ,levanta-se Deus
           LEVANTA-SE           DEUS      (C)

G7    C  G     Am7  Em
Levanta-se Deus, levanta-se Deus
   F9      C      Dm             G
Se dispersam os seus inimigos. Se dispersam os seus inimigos

  Am7  Em   F    G
Por intercess\xE3o da Virgem Maria
  Am7  Em    Dm7      G9
Por intercess\xE3o do Arcanjo S\xE3o Miguel
  Dm  G7 F9  Dm7   G7  F9
Por intercess\xE3o de toda mil\xEDcia celeste
  Dm     F9       G  G7
Que fujam de sua face os que vos odeiam
F    Am    G     C
Sobre as fam\xEDlias, levanta-se Deus
F      Am    F   G7
Sobre as enfermidades, levanta-se Deus
F     Am     G    C
Sobre os imposs\xEDveis, levanta-se Deus
F    Am   F    G7
Sobre todo mal ,levanta-se Deus`},{id:"d164",t:"LEVANTA-SE DEUS (E)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1FcymjJlBdm86SQho1-Sr_5dbR7fC5vxD.pdf",cifra:`LEVANTA-SE        DEUS

      E     B9/D#        C#m7     G#m
Levanta-se   Deus,  levanta-se  Deus

    A9           E9/G#
Se dispersam    os seus inimigos

     F#m            B
Se dispersam    os seus inimigos

  A9     C#m7(9)          F#m7(9)G#          G#m7

Por intercess\xE3o    da     Virgem        Maria
   A9     C#m7(9)       F#m7         B
Por intercess\xE3o    do   Arcanjo  S. Miguel

  A9     C#m7(9)          F#m7(9)G#          G#m7
Por intercess\xE3o   de toda  mil\xEDcia celeste

    A9       E/G#         D7+    B4
Que  fujam  de sua  face os  que O  odeiam

[Solo] B4  F#m7(9)Amaj7        C#m7(9)B

C#m               E9
Sobre  as fam\xEDlias  levanta-se  Deus

F#m7(9)              A9        G#
Sobre  as enfermidades    levanta-se  Deus

C#m        B/D#        E       F#4
Sobre  os imposs\xEDveis   levanta-se  Deus

F#m7          E9/G#     A9   D7+   A/C#  B
Sobre  todo  mal  levanta-se  Deus`},{id:"d165",t:"LEVANTA-SE DEUS (F)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1pOme22g0R9nKN0KiRJUiPcNx5Ak8-VvL.pdf",cifra:`LEVANTA-SE    DEUS   (F)

     F   C9/E    Dm7   Am
Levanta-se Deus, levanta-se Deus
   Bb9        F9/A
Se dispersam os seus inimigos
   Gm         C
Se dispersam os seus inimigos

 Bbmaj9  Dm7(9)    Gm7(9) A    Am7
Por intercess\xE3o da Virgem  Maria
  Bb9   Dm7(9)   Gm7      C
Por intercess\xE3o do Arcanjo S. Miguel
  Bb9 F/A Gm7  Bb9      Dm7(9)
Por intercess\xE3o de toda mil\xEDcia celeste
   Bb9    F/A     Eb7+  C4
Que fujam de sua face os que O odeiam

Dm         F9
Sobre as fam\xEDlias levanta-se Deus
Gm7(9)        Bb9     A
Sobre as enfermidades levanta-se Deus
Dm     C/E    F    G4
Sobre os imposs\xEDveis levanta-se Deus
Gm7      F9/A  Bb9 Eb7+ Bb/D C
Sobre todo mal levanta-se Deus`},{id:"d166",t:"LIBERTA-ME SENHOR JESUS ANA LUCIA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1oNDjvOygR1eTJvkJWZq2cvJzdGIS59-3.pdf",cifra:`LIBERTA-ME     SENHOR    JESUS

A         E/G#   F#m     E/G#   A    Bm
Se Cristo  me  libertar verda...deiramente

       E  D/F#E/G#
livre serei

A         E/G#   F#m          Bm     E
Se Cristo  me  libertar verdadeiramente     livre

  A
serei

[Refr\xE3o]

 A    E/G#         Bm      D     E
Liberta-me   Senhor  Jesus,  Senhor  Jesus

 A    E/G#        Bm       E    A
Liberta-me   Senhor  Jesus,  Senhor  Jesus

A   E/G#         Bm      D     E
Cura-me   Senhor   Jesus, Senhor   Jesus

A    E/G#        Bm       E     A
Salva-me   Senhor  Jesus,  Senhor  Jesus

D  F#m   E   D   F#m   E   D  F#mE

Jeeeesus,  Jeeeeesus,  Jeeeesus`},{id:"d167",t:"Lindo C\xE9u",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1G_skcMEp3RIdrOCUrqyoI-eTkhrDfykW.pdf",cifra:`Lindo    C\xE9u    \u2013  Adriana

\xC7

Por sobre as nuvens
G/B

Existe um lindo c\xE9u
E/G#          Am
Maravilhoso c\xE9u

F           C     G
Morada  dos anjos

F/A     G/A   C
Por sobre as nuvens

G/B
Existe um trono
E/G#      Am   F        C

Cujo rei est\xE1  assentado
G          C   G

\xC0 direita de Deus

C     Em   F
C\xE9u, lindo c\xE9u!
Dm        Dm/C         G

\xC9 o lugar onde eu quero viver

Pra sempre
C     Em   F             Dm
C\xE9u, lindo c\xE9u! \xC9 o lugar

Dm/C       G
Que  o meu Deus  preparou pra mim

C    Em    F
C\xE9u, lindo c\xE9u!

C/E   Dm     Dm/C      G
Onde  com  os anjos eu cantarei
              C

Adorando  o Senhor`},{id:"d168",t:"Livre Acesso",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ZdmMdln2ELbQ_UjrigRjAcxt7ujJEa2r.pdf",cifra:`Livre   Acesso      \u2013 Eliana    Ribeiro

G                  D/G

Eu abro as portas do meu cora\xE7\xE3o,
  Am                D
Te dou livre acesso Senhor.
  G                    D/G

Eu abro as portas do meu cora\xE7\xE3o,
  Am  Am/G  D/F# D
Te dou livre acesso.

C        D       Em  C  D       Em
Pois com teu bra\xE7o forte realizas prod\xEDgios,
C       D        G    D/F# Em          ( 1\xAA vez Am Am/G
D) (2\xAA vez Am D G )
Pois com teu bra\xE7o forte Senhor me ergues do ch\xE3o.`},{id:"d169",t:"Lugar de Adora\xE7\xE3o e Vida",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1usjh0Ek8AjscjVPHal1OoJY7S75G3ORq.pdf",cifra:`Lugar de Adora\xE7\xE3o e Vida

G    C9  G C9
Todos esses dias esperei
 G      C9   G  C9

Eu vim contando as horas pra chegar
Em     D/F# G/B  C9
E encontrar voc\xEAs aqui, amigos e irm\xE3os
Em    D/F#   G/B   C9
A semana inteira eu quis estar neste lugar
 G  D Em  C G D  Am C
De adora\xE7\xE3o e vida, de adora\xE7\xE3o e vida
   G  D  C

Lugar de adora\xE7\xE3o e vida

Intro 2x: G Em C D

G    C9   G C9
Cada passo Ele me ordenou
G     C9   G C9
Em boa companhia devo andar

Em   D/F# G/B   C
E fugir da ocasi\xE3o que me faz errar
Em    D/F#   G/B   C
E por isso eu vim buscar a paz neste lugar
 G  D Em  C G D  Am C
De adora\xE7\xE3o e vida, de adora\xE7\xE3o e vida
   G  D  Em
Lugar de adora\xE7\xE3o e vida

Solo: Em C Em C Am Em D C

G       D/G       C
Quem \xE9 que vai trilhar este caminho? (Eu vou)
               Em
Quem \xE9 que vai seguir a Jesus Cristo? (Eu vou)
      D       C   D   G 2\xAA vez (C Em D/F#)

Quem \xE9 que tem coragem de dizer que \u201CSim, contigo eu vou\u201D

 G  D Em  C G D  Am C
De adora\xE7\xE3o e vida, de adora\xE7\xE3o e vida
   G  D  C
Lugar de adora\xE7\xE3o e vida

A  E F#m D A E  Bm D

Adora\xE7\xE3o e vida, adora\xE7\xE3o e vida
   A  E D  2\xAA Vez (A)
Lugar de adora\xE7\xE3o e vida`},{id:"d170",t:"LUZ PARA O MEU CAMINHO A",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17uK9FdKhpTMQLcawKoF5jR88bPjBADUF.pdf",cifra:`LUZ  PARA   O MEU   CAMINHO

[Intro]  A  E/G#   D9   F#m7   E9   D9

A   C#m7  D9    F#m7        E9

Aleluia...  aleluia,   aleluia!
A   E/G#  D9    F#m7        E9 (D9)
Aleluia...  aleluia,   aleluia!

Bm7                      C#m7
Quero  ouvir  o que  o senhor  ir\xE1  falar
D9                        E4             E

Tua palavra   vai minha  vida  transformar
D9          A/C#            Bm7       E9
Luz para  o meu  caminho  verdade   e vida!

A   C#m7  D9    F#m7        E9
Aleluia...  aleluia,   aleluia!
A   E/G#  D9    F#m7        E9 (D9)
Aleluia...  aleluia,   aleluia!`},{id:"d171",t:"LUZ PARA O MEU CAMINHO E",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1dcwyrtkXom_UTnJLxoNSbxVr8cgkGQdP.pdf",cifra:`LUZ  PARA   O MEU   CAMINHO

E   G#m7  A9    C#m7        B9
Aleluia...  aleluia,   aleluia!
E   B/D#  A9    C#m7        B9
Aleluia...  aleluia,   aleluia!

E   G#m7  A9    C#m7        B9
Aleluia...  aleluia,   aleluia!
E   B/D#  A9    C#m7        B9  A9
Aleluia...  aleluia,   aleluia!

F#m7                      G#m7
Quero  ouvir  o que  o senhor  ir\xE1  falar

A9                        B4             B
Tua palavra   vai minha  vida  transformar
A9          E/G#            F#m7       B9
Luz para  o meu  caminho  verdade   e vida!

E   G#m7  A9    C#m7        B9
Aleluia...  aleluia,   aleluia!
E   B/D#  A9    C#m7        B9
Aleluia...  aleluia,   aleluia!

E   G#m7  A9    C#m7        B9
Aleluia...  aleluia,   aleluia!
E   B/D#  A9    C#m7        B9  A9

Aleluia...  aleluia,   aleluia!`},{id:"d172",t:"LUZ PARA O MEU CAMINHO G",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17JyLdzeOSwIzmhhw6jRJ54Wqitd9vSiz.pdf",cifra:`LUZ  PARA   O MEU   CAMINHO

G   Bm7     C9    Em7        D9

Aleluia...   aleluia,   aleluia!
G   D/F#    C9     Em7        D9

Aleluia...   aleluia,   aleluia!

G   Bm7     C9    Em7        D9

Aleluia...   aleluia,   aleluia!
G   D/F#    C9     Em7        D9    C9

Aleluia...   aleluia,   aleluia!

Am7                  Bm7

Quero   ouvir   o que  o  senhor   ir\xE1 falar

C9                  D4           D
Tua  palavra   vai  minha    vida  transformar

C9         G/B         Am7        D9
Luz  para   o meu   caminho     verdade    e vida!

G   Bm7     C9    Em7        D9
Aleluia...   aleluia,   aleluia!

G   D/F#    C9     Em7        D9
Aleluia...   aleluia,   aleluia!`},{id:"d173",t:"Majestosa Eucaristia",tom:"",m:"Comunh\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1FB2FUDPczuEZyQlaMuhvUI2CA4PdQIR-.pdf",cifra:`Majestosa  Eucaristia

G             D/G     Em    Em/D

Ao Abrir Meus Olhos No Altar
     G      D/G          G          D
Vi O C\xE1lice Sagrado Com O Sangue De Jesus

Bm         C7+         G       C
E De Dentro Desse Mesmo  C\xE1lice Subia

Am7         Am7/G   D4 D
Majestosa A  Eucaristia

G        D/G         Em    Em/D
Em Tua Presen\xE7a Eu Me Sinto

       G      D/G    G          D
Um  Mendigo Sentado \xC0 Mesa De Um  Rei

Bm          C7+        G         C
E Sem Ter Como  Pagar Tamanha Refei\xE7\xE3o
   Am7         Am7/G      D4  D

S\xF3 Posso Dar-Te Eterna Gratid\xE3o

  Am7                   D4  Bm7  Em7
O C\xE1lice E A H\xF3stia Eram Um

      Am7         Am7/G    D4       D D4  D
Meu Desejo Tamb\xE9m   Era Com Eles Ser Um

       G      C         D     D4 D
Ser Um S\xF3 Cora\xE7\xE3o, Meu Senhor!

        G/B         C        D4  D
O Mesmo  Sangue Nas Veias, Senhor!
     G              C        D

(Tua Carne Em Minha Carne, Senhor).
       G             C          D

(O Teu Sangue Em Meu  Sangue, Senhor).
G               G/B     C          Am7

E Estando Unido A Ti, Esquecer-Me De Mim,
     D4               D           G
Concedei Que Eu Fique Eternamente Assim`},{id:"d174",t:"Marca da Promessa",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/16lU0d8YFSvujyRTt3V2PAuH7jwK5IIVT.pdf",cifra:`Marca  da Promessa \u2013 Min. Trazendo  a Arca

Introd: Em | C | G | D ||

Em
 Se tentam destruir-me,
C

 Zombando da minha f\xE9
   G        D
 E at\xE9 tramam contra mim
Em

 Querem entulhar meus po\xE7os,
C
 Querem frustrar meus sonhos
 G         D

 E me fazer desistir

         Em          C
 Mas quem vai apagar o selo que h\xE1 em mim,

        G         D
 A marca da promessa que Ele me fez?
          Em         C
 E quem vai me impedir, se decidido estou?

          G          D
 Pois quem me prometeu \xE9 fiel p'ra cumprir

G    D        Em
 O meu Deus nunca falhar\xE1

       C       G
 Eu sei que chegar\xE1 minha vez
     D      Em
 Minha sorte Ele mudar\xE1

         C  D
 Diante dos meus olhos

Em            C

 Eu tenho a marca da promessa
G            D
 Eu tenho a marca da promessa, que Ele me fez`},{id:"d175",t:"Maria de Deus Nossa Senhora da Paz",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1KOa6n5hHZO02wjHpx9j2VQVOmYCzQjRU.pdf",cifra:`Maria   de Deus  Nossa   Senhora   da Paz

A        C#m     Bm      E
\xC9 bom estarmos juntos nessa mesa do Senhor

A        C#m      Bm        A    E
E sentirmos sua presen\xE7a no calor do nosso irm\xE3o

A        C#m        D  Bm         E
Deus nos re\xFAne aqui, em um s\xF3 esp\xEDrito, em um s\xF3 cora\xE7\xE3o

A      C#m          D  Bm          A E
Toda fam\xEDlia vem, n\xE3o falta ningu\xE9m   nessa comunh\xE3o

A          C#m      B9

E vem cantando entre n\xF3s Maria de Deus Senhora da paz
 D   (D D7M A) E       A     E

E vem orando por n\xF3s, a m\xE3e de Jesus
A          C#m      B9

E vem cantando entre n\xF3s Maria de Deus Senhora da paz

 D   (D D7M A) E       A     E
E vem orando por n\xF3s, a m\xE3e de Jesus

A        C#m     Bm      E

Maria, nossa m\xE3ezinha nos convida a uni\xE3o
A       C#m      Bm          A    E

Sua presen\xE7a une,   faz n\xF3s todos mais irm\xE3os
A        C#m        D  Bm         E

Nossa Senhora escuta, o nosso silencio, a nossa ora\xE7\xE3o
A        C#m         D   Bm         A  E

E apresenta ao filho, que se d\xE1 no vinho e que se d\xE1 no p\xE3o`},{id:"d176",t:"Maria de Nazar\xE9",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1NsBEjly6vAK6_FFNDAiWedzZwcPa5qVb.pdf",cifra:`Maria  de Nazar\xE9

  D  D7  G   A   A7  D
Maria de Nazar\xE9, Maria me ca.ti.vou
   D     D7  G
Fez mais forte a minha f\xE9
  A   A7  D
E por filho me a.do.tou

   Am   D7   G
\xC0s vezes eu paro e fico a pensar
  A7       D
E sem perceber me vejo a rezar
   Bm            Em
E o meu cora\xE7\xE3o se p\xF5e a cantar
   A7           D
Pra virgem de Nazar\xE9

  Am  D7   G
Menina que Deus amou e escolheu
   Gm             D
Pra m\xE3e de Jesus, o Filho de Deus
  Bm      Em
Maria que o povo inteiro elegeu
   A7     D
Senhora e m\xE3e do c\xE9u

      D    G        A7   D
      Ave Maria,  Ave Maria,
      Bm   Em     A7      D
     Ave Maria,   M\xE3e de Jesus

 D        G          A
Maria que eu quero bem, Maria do
A7  D
puro amor
 D       G     A    A7
Igual a voc\xEA, ningu\xE9m. M\xE3e pura do
D
meu Senhor
  Am    D7    G
Em cada mulher que Terra criou
   A7             D
Um tra\xE7o de Deus, Maria deixou
   Bm             Em

Um sonho de M\xE3e, Maria plantou
   A7              D
Pro mundo encontrar a paz

  Am   D7  G
Maria que fez o Cristo falar
  Gm    D
Maria que fez Jesus caminhar
  Bm    Em
Maria que s\xF3 viveu pra seu Deus
  A7    D
Maria do povo meu`},{id:"d177",t:"Maria Passa \xC0 Frente",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1NqaAlekPK3532skx6VfuXBScO4EezMtS.pdf",cifra:`Maria   Passa     \xC0  Frente

C       G7(4/9)          C
  O inimigo pode at\xE9 tentar
     G
Mas nunca vai te derrubar
  Dm
Voc\xEA pode at\xE9 cair
     F
Mas logo vai se levantar

      C
Quem tem Maria como m\xE3e

     G
Tem sempre o amor de Jesus
      Dm
Se a sua f\xE9 prevalecer
     Am
Pra sempre vai te atender

             F            G
Vou me entregar, vou confiar
              Em             Am
No amor de Jesus, pode acreditar
           F            G
Deus \xE9 maior, Deus \xE9 maior

                C
Maria passa \xE0 frente
                      G
Pisa na cabe\xE7a da serpente
                     Dm

Intercede junto a Jesus
              C/E        F
Cruz sagrada seja minha luz
       G        C
Maria passa \xE0 frente

                C
Maria passa \xE0 frente
                      G
Pisa na cabe\xE7a da serpente
                     Dm
Intercede junto a Jesus
              C/E        F
Cruz sagrada seja minha luz
       G        C
Maria passa \xE0 frente`},{id:"d178",t:"Maria \u2013 Eliana Ribeiro",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ylV-CjLCbl92aRcA47pe1nritEWSon5Q.pdf",cifra:`Maria  \u2013 Eliana Ribeiro

 Am                 E7

Maria  vivia em  ora\xE7\xE3o
Bm7/5-     G#\xBA           Am

Maria  provada   no sofrimento

   A/C#                 Dm

Maria  guardava   no cora\xE7\xE3o

   Am  E              Am   E

Maria  pra Jesus  um  alento

       A                     Bm

Oh, Maria   ensina-me   a ser assim
       E                      A     E

Como   filho em  Deus  tudo  esperar

        A            Am         Dm

M\xE3e   querida,  vem  comigo   caminhar

      Am   E                Am

Oh, Maria   roga  a Jesus por  mim

 Am                 E7
Maria  que  n\xE3o  se rebelou

Bm7/5-     G#\xBA           Am

Maria  por n\xF3s  ofereceu

   A/C#                 Dm

Maria  que  os pastorinhos   ensinou

   Am  E              Am   E

Maria  que  em  F\xE1tima  apareceu`},{id:"d179",t:"Me ama",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1VRlOdxvy_e-J7d8q7IcyjiDPlsKpXgZN.pdf",cifra:`Me ama  \u2013 Diante do Trono

A9
Tem ci\xFAmes de mim
F#m
O Seu amor \xE9 como um furac\xE3o
 E                 D9
E eu me rendo ao vento de Sua miseric\xF3rdia
 A9                   F#m
Ent\xE3o, de repente n\xE3o vejo mais minhas afli\xE7\xF5es

Eu s\xF3 vejo a gl\xF3ria
  E
E percebo qu\xE3o maravilhoso Ele \xE9
 D
E o tanto que Ele me quer
A9     F#m
Oh, Ele me amou
      E
Oh, Ele me ama
    D9
Ele me amou

A F#m E D9

 A A4 A A9
Me ama

    F#m
Ele me ama
    E
Ele me ama
    D9
Ele me ama (2x)

A
Somos Sua heran\xE7a

E Ele o nosso galard\xE3o
F#m
Seu olhar de gra\xE7a nos atrai \xE0 reden\xE7\xE3o
  E                D9
Se a gra\xE7a \xE9 um oceano, estamos afogando
 A
O c\xE9u se une \xE0 terra como um beijo apaixonado
  F#m
Meu cora\xE7\xE3o dispara em meu peito acelerado
  E
N\xE3o tenho tempo pra perder com ressentimentos
    D9
Quando penso que Ele`},{id:"d180",t:"Meu Barquinho",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1HdTsH9H89u36eC5d6whOQPngHfKa-a3F.pdf",cifra:`Meu  Barquinho

     D       A/C#
O vento balan\xE7ou meu barco em alto mar
     Bm7    G9
O medo me cercou e quis me afogar;

      D      A/C#
Mas, ent\xE3o, eu clamei ao filho de Davi
     Bm7
E Ele me escutou
      G9
Por isso estou aqui

    D/F# Em
O vento Ele acalmou
 Em7/D  A/C#
O medo repreendeu
     C  G/B A4 A
Quando Ele ordenou o mar obedeceu

D      A
 N\xE3o temo mais o mar
        Bm7
Pois firme esta minha f\xE9
       G9    D
No meu barquinho est\xE1 Jesus de Nazar\xE9
      A
Se o medo me cercar
      Bm7
Ou se o vento soprar
      G9
Seu nome eu clamarei
 G/A  D

Ele me guardar\xE1

      A
N\xE3o temo mais o mar
        Bm7
Pois firme esta minha f\xE9
       G9    D
No meu barquinho est\xE1 Jesus de Nazar\xE9
      A
Se o medo me cercar
      Bm7
Ou se o vento soprar
      G9
Seu nome eu clamarei
  G/A
Ele me socorrer\xE1`},{id:"d181",t:"MEU CORA\xC7\xC3O \xC9 PARA TI G",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1qThhHT58DLSyd_Gj4OJe9nN1pI4V12YB.pdf",cifra:`MEU  CORA\xC7\xC3O    \xC9 PARA  TI

G               C

 Meu   cora\xE7\xE3o  \xE9 para  Ti, Senhor
D7              G

Meu   cora\xE7\xE3o   \xE9 para Ti, Senhor
Em              Am

Meu   cora\xE7\xE3o   \xE9 para Ti, Senhor
D7            G   G7

Meu   cora\xE7\xE3o   \xE9 para Ti

     C           D7           Bm

Porque   Tu  me   deste  a vida,  por  que  Tu  me
          Em

deste  o existir
     Am            D7               G

Porque   Tu  me   deste  o carinho,   me   deste  o
G7

amor

G               C
P\xE3o  e vinho s\xE3o  para  Ti,Senhor

D7              G
P\xE3o  e vinho  s\xE3o  para Ti,Senhor

Em              Am
P\xE3o  e vinho s\xE3o  para  Ti,Senhor

D7              G      G7
P\xE3o  e vinho  s\xE3o  para Ti

REFR\xC3O`},{id:"d182",t:"Meu Senhor e Meu Deus",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Iaw6jnLimkjQLuqGkYGDs-9RMr7jRVxT.pdf",cifra:`Meu   Senhor  e  Meu  Deus

 D          D9      G        A
Meu  Senhor  e meu Deus,  Meu  Senhor e meu  Deus

F#m   F#m  A    Bm       Em
Meu  Senhor  e meu Deus,  eu creio,

    A/D      A

mas  aumenta  minha  f\xE9

 D       D/A G  D   G     D/A  G
D\xE1-me  uma  f\xE9 viva, d\xE1-me uma  f\xE9 nova

G        D   A     G
Traduzida na  vida, testemunhada

  Em         A
no amor  pelos irm\xE3os`},{id:"d183",t:"Minha Ess\xEAncia (A)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1GMAQdjYYhA624e_PvPrA_4am493wHaKv.pdf",cifra:`Minha   Ess\xEAncia  (A)

A         A7M  A
Vim at\xE9 aqui
      D            F#m      F#9  F#m
Derramar o meu passado em ti
                         Bm
Vim banhar os p\xE9s que andaram por a\xED
                 E
Sem carinho receber

 A            A7M  A
Hoje estou aqui
 D             F#m
N\xE3o por que mere\xE7o eu sei
                  Bm

Pois tu sabes por onde eu andei
                       E
Conheces bem o meu perfume

        F#m
Mas tu sabes tamb\xE9m
                      C#m
Que o meu choro \xE9 sincero por\xE9m
                       D           Bm
N\xE3o tenho nada a oferecer meu Senhor
                    E
Mas te dou a minha vida

            A
\xC9 tudo que tenho
  D           F#m  F#9  F#m
Recebe o meu nada
           D   Bm
Refaz a morada
           E

Habita em mim

                A
Me pega em teu colo
     D            F#m  F#9  F#m
Me acalma em teu peito
              D    Bm
Sou Teu sou eleito
             E                     A
E a minha ess\xEAncia \xE9 exalar, Teu cheiro`},{id:"d184",t:"Minha Ess\xEAncia (D)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1P_AKDFEba5hLpehnEo7ZUCOFTukGXhPq.pdf",cifra:`MINHA  ESS\xCANCIA

C                    F              Am

VIM AT\xC9 AQUI  DERRAMAR   O MEU  PASSADO   EM  TI
                             Dm
VIM BANHAR   OS P\xC9S QUE  ANDARAM    POR A\xCD
                    G     G7
SEM  CARINHO  RECEBER.

C                  F                Am
HOJE  ESTOU  AQUI, N\xC3O  PORQUE  MERE\xC7O,   EU SEI

                     Dm
POIS TU SABES  POR  ONDE  EU ANDEI
                            G      G7
CONHECES   BEM  O MEU  PERFUME.

        Am                                        Em
MAS  TU SABES  TAMB\xC9M   QUE  O MEU  CHORO  \xC9 SINCERO,  POR\xC9M

                            F                  Dm
N\xC3O  TENHO  NADA  A OFERECER,   MEU  SENHOR,
                      G     G7
MAS  TE DOU A MINHA  VIDA.

               C          F            Am
\xC9 TUDO  O QUE TENHO,  RECEBE   O MEU  NADA
             F     Dm          G       G7

REFAZ  A MORADA,      HABITA  EM MIM.
                  C           F              Am
ME PEGA  EM  TEU COLO,  ME ACALMA   EM TEU  PEITO
                F     Dm

SOU  TEU, SOU ELEITO
             G              G7       C
E A MINHA ESS\xCANCIA   \xC9 EXALAR  TEU  CHEIRO.`},{id:"d185",t:"MINHA PEQUENA FLOR",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1cr_7lEA3oKdpSbgLiT4Y8I7rKMVOmiPf.pdf",cifra:`MINHA    PEQUENA     FLOR

C    F
Minha pequena flor
 G    C
Mostra-me o teu poder
C    F
Minha pequena flor
 G    C
Mostra-me o teu poder
 Am
Nessa hora
Dm
Pois no cora\xE7\xE3o da igreja
F C Dm   G   C
Eu decidi ser o amor
F   C
Se eu me afastei
F    C
De amar eu me cansei
Dm     C
Mostra-me com seu amor
Dm     F C G C
A sagrada face do meu senhor

Refr\xE3o

F        C
Se o tempo ent\xE3o passou
  F    C
O adulto se cansou
Dm        C
Mostra-me com seu amor
Dm       F C G  C
O menino Jesus e meu senhor
Refr\xE3o

C   F     Dm G  C
Santa teresinha do menino Jesus
C    F    Dm  G C
Santa teresinha do menino Jesus
 C   F    Dm G  C
Santa Teresinha do menino Jesus
 C   F    Dm  G  C
Santa Teresinha do menino Jesus`},{id:"d186",t:"MISSA 17 OUT 23",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1CVaNmyASlVH0ihhl6xnozwFDXYnfamE1.pdf",cifra:`EU TE LEVANTAREI

F

Eu te levantarei

Dm7

Eu te levantarei

     Bb9  Gm7         C9

Filho amado,     filho querido

F

Eu te levantarei

Dm7

Eu te levantarei

    Bb9   Gm7         C9

Filho amado,     filho querido

    Bb9      C4
Restituirei tuas for\xE7as

     Bb9     C4

E te atrairei a mim

    Bb9      C4         Bb9   C4

E te darei novas  vestes,  filho amado

F/A      Bb9      C4

  Restituirei tuas  for\xE7as
     Bb/D    C/E

E te atrairei a mim

F/A      Bb9      C4        Bb9   C4

  E te darei novas   vestes, filho amado

                       KYRIE   JMJ

  Dm    C   A#
Senhor, que viestes salvar
   Dm      C A
Os cora\xE7\xF5es arrependi_dos

   F  C
Kyrie eleison
 A7 Dm7
Ele__ison
 G C
Eleison
  Dm     C     A#
\xD3, Cristo, que viestes chamar
   Dm     C  A
Os pecadores humilhados

[Refr\xE3o 2]

   F   C
Christe eleison
 A7 Dm
Ele__ison
 G4 C
Ele_ison

  Am      G  F
Senhor, que intercedeis por n\xF3s
      Am      G
Junto a Deus Pai que nos perdoa

  D  G D Em
Kyrie ele___ison
 C#m  F# Bm
Ele______ison
 E A G
Ele_ison

                Gl\xF3ria a Deus nas  Alturas

   D         C
   Gl\xF3ria a Deus nas alturas
    G                 D
   E paz na terra aos homens por Ele amados
     D    C       G          D
   Senhor Deus, Rei dos c\xE9us, Deus Pai todo poderoso
         Am D
   N\xF3s vos louvamos

          Am D
   N\xF3s vos bendizemos
         Am D
   N\xF3s vos adoramos
          Am D
   N\xF3s vos glorificamos
           C      G       D
   N\xF3s vos damos gra\xE7as, por vossa imensa gl\xF3ria.
    D      C  G     D

   Senhor Jesus Cristo, Filho Unig\xEAnito
    D        C      G        D
   Senhor Deus, Cordeiro de Deus, Filho de Deus Pai
   Am        G        C         D
   V\xF3s que tirais o pecado do mundo, tende piedade de n\xF3s
   Am        G
   V\xF3s que tirais o pecado do mundo
   C        D

   Acolhei a nossa s\xFAplica
   Am         G
   V\xF3s que estais \xE0 direita do Pai
   C         D
   Tende piedade de n\xF3s
         Am D
   S\xF3 v\xF3s sois Santo
          Am D
   S\xF3 v\xF3s sois o Senhor

         C       D
   S\xF3 v\xF3s o Alt\xEDssimo, Jesus Cristo
   E       A
   Com o Esp\xEDrito Santo
            G   D
   na gl\xF3ria de Deus Pai. Am\xE9m!

                    SALMO    18 (19A)

E B7          C#m     G#m          A        B7         E

Os c\xE9us proclamam   a gl\xF3ria do Senhor, a gl\xF3ria do Senhor

               ALELUIA   \u2013 CORAL    CN (G)

G      D   Am       C    Em       D
Aleluuuuuia   , Aaaleluuuuia   , Aleluia ,

      C
Aleeeluuuuiiiaaa.

   G   D   Am      C     Em       D
Aleluuuuuia   , Aaaleluuuuia   , Aleluia ,

     C
Aleeeluuuuiiiaaa.

                  Oferta    de  Amor

G          D/F#        Em   Em/D
Venho  Senhor  minha vida oferecer,

C      G/B         Am   C/D

Como  oferta de amor  e sacrif\xEDcio.

G      D/F#        Em     Em/D
Quero  minha  vida a ti entregar

C      C/D              G  G/B

Como  oferta viva em teu altar.

C   D        Bm  Em     C   D       G

Pois, pra te  adorar   foi que eu nasci.
Am            Em

Cumpre  em  mim  o teu querer

C    C/D      G
Fa\xE7a o que est\xE1 em  teu cora\xE7\xE3o.

C      D/C    Bm         Em

E que a cada dia eu queira mais e mais
Am            D

Estar ao teu lado

Am            D
Estar ao teu lado

Am            D         G

Estar ao teu lado Senhor.

           SANTO    2 - AMOR   E ADORA\xC7\xC3O

 G     D/F#    C       D

Santo   santo    san....anto
 G    D/F#         D/C   C   D/C   C

Senhor   Deus   do  universo

F            C          G

C\xE9us  e terra proclamam     a vossa gl\xF3ria
F     C      D

Hosana   nas alturas
F         C          G

Bendito  o que  vem  em  nome   do  Senhor
F     C     D

Hosana   nas alturas

         Cordeiro      de  Deus    \u2013  Shallon

 G             Bm7      C9 D4  D
Cordeiro de Deus que tirais o pecado do
 C9     D4   D
mundo, tende piedade

 G              Bm7     C9 D4   D
Cordeiro de Deus que tirais o pecado do

 C9     D4   D
mundo, tende piedade

Em             Bm            C D
Cordeiro de Deus que tirais o pecado do mundo
      G  D/F#   C9 D
Dai-nos a paz, dai-nos a paz

     G D/F#   C9 D
Dai-nos a vossa paz, dai-nos a paz

                   CORPO    SANTO   (F)

F          C/E Dm7
 Quando vou ao Teu encon_tro
Bb9  Gm7      C4  C  F
 Receber Teu corpo San___to
        C/E   Dm7

Sinto forte Tua presen\xE7a em mim
Bb9   Gm7     C4 C
  Teu amor a me tocar
F        C/E  Dm7
 Podes tocar em mim, Senhor
    Dm7/C    Bb9
Podes curar a minha dor
    Gm7     C4 C
Podes viver em mim, Senhor

Dm7     Dm7/C      Bb9
  Podes tocar em mim, Senhor
    F/A    Gm7
Podes curar a minha dor
    Bb9      C4
Podes viver em mim, Senhor

Bb9   C  Bb/F F  C/E   Dm7
 Teu corpo San___to a me tocar
      Dm7/C    Bb
Com o Teu poder a me curar
     Gm       C
Toda minha vida transformar
Bb9   C  Bb/F F  C/E   Dm7
  Teu corpo San__to a me tocar
      Dm7/C     Bb
Com o Teu poder a me curar
     Gm       C4  C
Toda minha vida transformar

F         C/E Dm7
 Algo invade o meu cora\xE7\xE3o
Bb9      Gm7     C4  C
  Teu corpo e Sangue me curan___do
F          C/E  Dm7
 Sinto, j\xE1 n\xE3o sou igual
Bb9      Gm     C
  Todo o meu ser se renovando

                   CORPO    SANTO   (A)

A          E/G# F#m7
 Quando vou ao Teu encon_tro
D9  Bm7      E4  E  A
 Receber Teu corpo San___to
        E/G#   F#m7
Sinto forte Tua presen\xE7a em mim
D9   Bm7     E4 E
  Teu amor a me tocar

A        E/G#  F#m7
 Podes tocar em mim, Senhor

    F#m7/E   D9
Podes curar a minha dor
    Bm7     E4 E
Podes viver em mim, Senhor
A        E/G#  F#m7
 Podes tocar em mim, Senhor
    F#m7/E   D9
Podes curar a minha dor
    Bm7     E4 E
Podes viver em mim, Senhor

D9   E  D/A A  E/G#   F#m7
 Teu corpo San___to a me tocar
      F#m7/E    D
Com o Teu poder a me curar
     Bm       E
Toda minha vida transformar

D9   E  D/A A  E/G#   F#m7
  Teu corpo San__to a me tocar
      F#m7/E    D
Com o Teu poder a me curar
     Bm       E4  E
Toda minha vida transformar
A         E/G# F#m7
 Algo invade o meu cora\xE7\xE3o
D9      Bm7     E4  E
  Teu corpo e Sangue me curan___do
A          E/G#  F#m7
 Sinto, j\xE1 n\xE3o sou igual
D9      Bm     E
  Todo o meu ser se renovando

     PELO      SANGUE        DE    JESUS     (Em)

Em       C   G      D
Pelo sangue de Jesus, cadeias quebrar\xE3o
  Em     C   G      D
Pelo sangue de Jesus, muralhas romper\xE3o
  Em     C    G     D
Pelo sangue de Jesus, haver\xE1 liberta\xE7\xE3o
  Em     C     G      D
Pelo sangue de Jesus, de coragem se encher\xE3o
                                                   2x
Am    G/B C       G
Eu, eu fui marcado, eu fui lavado
    D          Am
Eu fui curado pelo sangue de Jesus
   G/B C     G
Eu fui marcado, santificado
     D          Am C G  D

Eu fui comprado pelo sangue de Jesus
C         D
Teu sangue derramado, cordeiro imolado
   Am        Em
Inebria-me, Inebria-me Senhor
                                         2x
C         D
Teu sangue derramado, cordeiro imolado
   Am        Em  D
Inebria-me, Inebria-me Senhor

Am    G/B C       G
Eu, eu fui marcado, eu fui lavado
    D          Am
Eu fui curado pelo sangue de Jesus
   G/B C     G
Eu fui marcado, santificado
     D          Am
Eu fui comprado pelo sangue de Jesus

     PELO      SANGUE        DE    JESUS     (Am)

Am       F   C      G
Pelo sangue de Jesus, cadeias quebrar\xE3o
  Am     F   C      G
Pelo sangue de Jesus, muralhas romper\xE3o
  Am     F    C     G
Pelo sangue de Jesus, haver\xE1 liberta\xE7\xE3o
  Am     F    C       G
Pelo sangue de Jesus, de coragem se encher\xE3o
Dm    C/E F      C
                                                   2x
Eu, eu fui marcado, eu fui lavado
    G          Dm
Eu fui curado pelo sangue de Jesus
   C/E F    C
Eu fui marcado, santificado
     G          Dm F C G
Eu fui comprado pelo sangue de Jesus

F         G
Teu sangue derramado, cordeiro imolado
   Dm        Am
Inebria-me, Inebria-me Senhor
F         G                                   2x

Teu sangue derramado, cordeiro imolado
   Dm         Am G
Inebria-me, Inebria-me Senhor

                  PEDI  E RECEBEREIS

F#m                      D            A               E
H\xE1 uma  promessa  que  quer  se cumprir  em  meio  a n\xF3s

F#m                          D       A          E
\xC9 o pr\xF3prio   Senhor  quem  diz: pedi  e recebereis

        Bm              D

Nenhum  mal ir\xE1  resistir
        A              E
Os mares  ir\xE3o  se abrir
           Bm                   D

Quando  a boca  de Deus  declarar
   A       E         D
Milagres  neste  lugar

        F#m                         D
Se eu  orar,  se eu  clamar  as muralhas   n\xE3o
         A                  E
Resistir\xE3o  ao  poder  de meu  Deus

        F#m                         D

Se eu  orar,  se eu  clamar  as muralhas   n\xE3o
         A                  E
Resistir\xE3o  ao  poder  de meu  Deus

        Gm                          Eb

Se eu  orar,  se eu  clamar  as muralhas   n\xE3o
         Bb                 F        F#m
Resistir\xE3o  ao  poder  de meu  Deus

    Pelo   Nome      (As  Muralhas       V\xE3o   Cair)

      C             F9
O mar vai se abrir pelo nome, a igreja atravessar pelo nome
         C           G9

De p\xE9s enxutos v\xE3o estar pelo nome, pelo nome de Jesus
       C             F9
As muralhas v\xE3o cair pelo nome, o inferno estremecer pelo nome
        C           G9  F9 Em Dm   C F9 C

Todo mal vai sucumbir pelo nome, pelo nome de Jesus, pelo nome de
Jesus

C  Dm  F9     C     F9 C    Dm  F9

Canta Igreja, uma nova can\xE7\xE3o(pelo nome) e recebe do Espirito uma
C     F9 C
Nova Un\xE7\xE3o(pelo nome)

        C           F9
Os milagres v\xE3o surgir pelo nome, o cego enxergar pelo nome
        C            G9

O paral\xEDtico vai andar pelo nome, pelo nome de Jesus
       C             F9
O leproso vai sarar pelo nome, todo sangue estancar pelo nome

        C            G9  F9 Em Dm  C F9 C
Toda igreja vai louvar pelo nome, pelo nome de Jesus, pelo nome de Jesus

           LEVANTA-SE           DEUS      (F)

C7    F  C     Dm7  Am
Levanta-se Deus, levanta-se Deus
   Bb9      F      Gm         C
Se dispersam os seus inimigos. Se dispersam os seus inimigos

  Dm7  Am    Bb   C
Por intercess\xE3o da Virgem Maria
  Dm7  Am     Gm7     C9
Por intercess\xE3o do Arcanjo S\xE3o Miguel
  Gm  C7 Bb9  Gm7   C7  Bb9
Por intercess\xE3o de toda mil\xEDcia celeste
  Gm     Bb9        C C7
Que fujam de sua face os que vos odeiam
Bb    Dm     C    F
Sobre as fam\xEDlias, levanta-se Deus
Bb      Dm    Bb    C7
Sobre as enfermidades, levanta-se Deus
Bb     Dm     C    F
Sobre os imposs\xEDveis, levanta-se Deus
Bb    Dm   Bb    C7
Sobre todo mal ,levanta-se Deus

           LEVANTA-SE           DEUS      (C)
G7    C  G     Am7  Em
Levanta-se Deus, levanta-se Deus
   F9      C      Dm             G
Se dispersam os seus inimigos. Se dispersam os seus inimigos

  Am7  Em   F    G
Por intercess\xE3o da Virgem Maria
  Am7  Em    Dm7      G9
Por intercess\xE3o do Arcanjo S\xE3o Miguel
  Dm  G7 F9  Dm7   G7  F9

Por intercess\xE3o de toda mil\xEDcia celeste
  Dm     F9       G  G7
Que fujam de sua face os que vos odeiam
F    Am    G     C
Sobre as fam\xEDlias, levanta-se Deus
F      Am    F   G7
Sobre as enfermidades, levanta-se Deus
F     Am     G    C
Sobre os imposs\xEDveis, levanta-se Deus
F    Am   F    G7
Sobre todo mal ,levanta-se Deus`},{id:"d187",t:"Morte na Cruz - Adriana",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1jPx7AFklBc85erKgYFLr1me7aMFFr_bN.pdf",cifra:`Morte    na  Cruz

(intro) Dm Am Bb C C#\xBA Dm Am Bb C

Dm    Am    Bb    C
 Foi por amor que ele se entregou no seu lugar
Dm       Am  Bb     C
Pagou por seus pecados somente por te amar
Dm     Am   Bb  C

 Coroa de espinhos colocaram em Jesus
Dm      Am    Bb       C
 Os cravos perfuraram suas m\xE3os e seus p\xE9s ... naquela cruz

Fm      Bbm
Ele veio pra te resgatar
Eb       Ab   Gm5b/7  C7
Curar suas feridas, amenizar sua dor

Fm      Bbm
 Basta somente O aceitar
G        C7
 E grandes prod\xEDgios ele realizar\xE1

Dm      Am  Bb  C
 Os chicotes na pele puderam dilacerar
Dm       Am   Bb     C

 E a lan\xE7a em seu lado p\xF4de ent\xE3o concretizar
Dm     Am   Bb   C
 Sua morte de cruz foi por amor \xF3h meu Jesus
Dm      Am       Bb       C
 Que a vida nos trouxe e em meio as trevas ent\xE3o ... nasceu a luz

(refr\xE3o)

(solo) Dm Am Bb C

(refr\xE3o)

Gm      Cm
 Ele veio pr\xE1 te resgatar
F        Bb    Am5b/7 D7

 Curar suas feridas, amenizar sua dor
Gm       Cm
 Basta somente O aceitar
A/C#    A    D
 E grandes prod\xEDgios Ele realizar\xE1
     Eb Cm  G
Ele realizar\xE1`},{id:"d188",t:"M\xCDSTICA SUBLIME",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1QJB2FZQ8RGBeTrjWOq8wxuFSuI5L66yD.pdf",cifra:`M\xCDSTICA     SUBLIME

      F7M                            F7M
M\xEDstica sublime te receber      J\xE1 n\xE3o \xE9 mais vinho n\xE3o
     Am C                                Am G
Ter comunh\xE3o                    \xC9 o sangue do meu Deus
        F7M                            F7M
Ter correndo em mim teu sangue  J\xE1 n\xE3o \xE9 mais p\xE3o aqui
Deus                                     Am
       Am  C                    \xC9 o corpo do meu amor
Estou em comunh\xE3o
                                Do meu amor
     F7M
Algu\xE9m dir\xE1 que um Deus              F7M
           Am                   E neste lugar, eu posso dizer
T\xE3o grande assim, n\xE3o se dar\xE1           Am
  G                             Est\xE1s dentro de mim
Por mim?                                C
                                E eu dentro de voc\xEA
      F7M                           F7M
O que os meus olhos v\xEAem        E neste lugar, eu posso dizer
        Am     C                        Am
N\xE3o \xE9 o que, minh'alma diz      Est\xE1s dentro de mim
                                        C
      F7M                       E eu dentro de voc\xEA
M\xEDstica sublime te receber
     Am C                               F7M
Ter comunh\xE3o                    E eu dentro de voc\xEA
        F7M
Ter correndo em mim teu sangue  E eu dentro de voc\xEA
Deus                                    Am
       Am  C                    E eu dentro de voc\xEA
Estou em comunh\xE3o                       C
     F7M                        E eu dentro de voc\xEA
Algu\xE9m dir\xE1 que um Deus
          Am                            F7M
T\xE3o grande assim, n\xE3o se dar\xE1   E eu dentro de voc\xEA
  G
Por mim?                        E eu dentro de voc\xEA
      F7M                               Am
O que os meus olhos v\xEAem        E eu dentro de voc\xEA
        Am     C                        C
N\xE3o \xE9 o que, minh'alma diz      E eu dentro de voc\xEA
                                       F7M
                                Agora n\xF3s dois somos um
                                       Am  G
                                Agora n\xF3s dois somos um
                                       F7M
                                Agora n\xF3s dois somos um
                                       Am  G
                                Agora n\xF3s dois somos um`},{id:"d189",t:"M\xE3e Mestra",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1_vc25hbzo00LIS2TWGapw0FYjvbqxFd2.pdf",cifra:`M\xE3e  Mestra - Dunga

E9      C#m7        G#m7

Nada do que possa me acontecer
 A9    Am6          E  A  A/B
Foge do olhar de minha m\xE3e
     E9      C#m7          G#m7

Que ouviu Jesus dizer: Eis a\xED o teu filho
 A        Am6            E9
Sempre vou ouvir quando interceder

A         B        E  B/D# C#m7
Se eu me perdi, se eu me a- fas - tei
   F#m7    A/B           E9
Por sua intercess\xE3o foi que eu voltei

    A9         B       E B/D#   C#m7
S\xF3 a M\xE3e pode imaginar onde o Filho est\xE1
  F#m7            A/B        E9  D/E E
Jamais pude me esconder do seu olhar

      A7+ B       A7+  B
Vem me visitar vem me ensinar
   G#m7      A9    F#m     A/B
A servir com amor, a dizer meu sim

    A7+    B     A7+ B
Me ensina esperar, a silenciar
    G#      C#m7       F#    A/B
E em p\xE9 permanecer e a seu Filho obedecer

E9      C#m7          G#m7
M\xE3e que espera, acolhe e conduz
A7+         Am6        E9   A A/B

Do  seu sim nasceu o meu Jesus
   E9        C#m7     G#m7
Nazar\xE9, Bel\xE9m, Can\xE1, Jerusal\xE9m
A7+     Am6         E9

Intercede aqui hoje tamb\xE9m`},{id:"d190",t:"M\xE3e, M\xE3e, M\xE3e",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/11NaErMeMDgdBADaseIZcRGEJ9TjfF4eF.pdf",cifra:`M\xE3e,  M\xE3e, M\xE3e

C  F    C   F     C   F      Bb   G7/4

Maria, cheia de gra\xE7a, amor que abra\xE7a, nos chama de filhos.
C  F     C   F     C F       Bb G7/4

Maria, m\xE3e que ilumina nosso caminho, nos conduz a Deus.
Am   Am/G     F  Em   Dm    Dm/C     G7/4

Maria, m\xE3e da Igreja, convida-nos sempre a orar.
Am   Am/G          F Em

Maria, esplendor de beleza,
Dm   Dm/C     G7/4

que alegria poder cantar seu nome.

Am

M\xE3e, m\xE3e, m\xE3e, Maria nossa m\xE3e.
F

M\xE3e, m\xE3e, m\xE3e, Maria nossa m\xE3e.
G             F G

M\xE3e, m\xE3e, Maria nossa m\xE3e.`},{id:"d191",t:"M\xE3os Chagadas",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1NR-XUAEllZIMOlJplM9ySzcjv5bCxtIU.pdf",cifra:`M\xE3os Chagadas \u2013 Eliana Ribeiro

 G/A     Bm7(9)
Quando os p\xE9s cansados est\xE3o

G    Bm    A9
E o cora\xE7\xE3o desanimado vai
 G    A9
Meu Deus me sustenta
  G/A    Bm7(9)   G
Quando n\xE3o consigo mais acreditar que
 Bm   A9
Tudo vai mudar

 G     A9
Meu Deus me sustenta

G       A9
Poe tuas m\xE3os sobre mim
F#m        G A9
Poe tuas m\xE3os chagadas pra me curar
G           D/F#

Pois n\xE3o aguento mais viver assim
G   Em   A9
Preciso em ti renascer (2x)

 G/A     Bm7(9)
Quando os erros parecem ganhar
G    Bm   A9
E o pecado pesa sobre mim

 G    A9
Meu Deus me sustenta
 G/A     Bm7(9)
Quando n\xE3o consigo mais
G    Bm    A9
Acreditar que tudo vai mudar
 G     A9
Meu Deus me sustenta

E       B9
Poe tuas m\xE3os sobre mim
G#m          A B9
Poe tuas m\xE3os chagadas pra me curar
A         E/G#
Pois n\xE3o aguento mais viver assim
A   F#m  B9

Preciso em ti renascer (2x)`},{id:"d192",t:"Nas Asas do Senhor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/10SuPv1eECBxorbYHpGUNWZ9TpkXVJdu_.pdf",cifra:`Nas    Asas    do  Senhor

G                      D9/F#
Sei que os que confiam no Senhor
              Em                     C
Revigoram suas for\xE7as, suas for\xE7as se renovam
 G                D9/F#               Em
Posso at\xE9 cair ou vacilar, mas consigo levantar
               C
Pois recebo dele asas
      Am                  D
E como \xE1guia, me preparo pra voar
        G       D9/F#       Em
Eu posso ir muito al\xE9m de onde estou
                C
Vou nas asas do Senhor
      G/B     Am       D
O Teu Amor \xE9 o que me conduz
   G        D/F#     Em
Posso voar e subir sem me cansar
                    C     G/B
Ir pra frente sem me fatigar
       Am         D
Vou com asas,como \xE1guia
                  G  C D
Pois confio no Senhor!
                Em     D
Pois confio no Senhor! U\xF4-\xF4-\xF4

          C        D        B7
Que me d\xE1 for\xE7as pra ser um vencedor-\xF4
             Em
Nas asas do Senhor
    Am     D
Vou voar! Voar

        A        E/G#      F#m
Eu posso ir muito al\xE9m de onde estou
                  D
Vou nas asas do Senhor
     A/C#   Bm         E
O Teu amor \xE9 o que me conduz
       A       E/G#       F#m/E
Posso voar e subir sem me cansar
                    D     A/C#
Ir pra frente sem me fatigar
        Bm         E
Vou com asas, como \xE1guia
                 A
Pois confio no Senhor!`},{id:"d193",t:"NINGUEM TE AMA COMO EU",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1OUmDNjaqk-vu81M407RstIIPEnGH4GB7.pdf",cifra:`NINGUEM    TE AMA   COMO   EU

A9   E    F#m

Tenho esperado este momento     A9  E    F#m
D    Bm   E                     Eu sei bem o que me dizes
Tenho esperado que viesses a mim D  Bm    E
A9   E    F#m                   Ainda que nunca me fales
Tenho esperado que me fales     A9  E     F#m
D    Bm    E                    Eu sei bem o que tens sentido
Tenho esperado que estivesses assim D Bm  E
                                Ainda que nunca me reveles

A9  E     F#m
Eu sei bem que tens vivido      A9  E    F#m
D   Bm     E                    Tenho andado ao teu lado
Sei tamb\xE9m que tens chorado     D   Bm   E
A9  E     F#m                   Junto a ti permanecido
Eu sei bem que tens sofrido     A9  E    F#m
D    Bm    E                    Eu te levo em meus bra\xE7os
Pois permane\xE7o ao teu lado      D   Bm     E

                                Pois sou teu melhor amigo.

    A9 E F#m
Ningu\xE9m te ama como eu
    D Bm  E
Ningu\xE9m te ama como eu
    A9

Olhe pra cruz
   E     F#m
Esta \xE9 a minha grande prova
    D Bm  E
Ningu\xE9m te ama como eu

    A9 E F#m
Ningu\xE9m te ama como eu

    D Bm  E
Ningu\xE9m te ama como eu
    A9
Olhe pra cruz
   E   F#m
Foi por ti porque te amo
    D Bm  E
Ningu\xE9m te ama como eu`},{id:"d194",t:"Noite Feliz",tom:"",m:"Tempo (Natal/Advento)",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1yi2ScIqoQvszMCDvKM-6jJGcYt0yBaRB.pdf",cifra:`Noite Feliz

A
Noite Feliz, Noite Feliz
E7
\xD3 Senhor
A
Deus do amor
D            A
Pobrezinho nasceu em Bel\xE9m
D             A
Eis na lapa Jesus nosso bem

E7          A
Dorme em paz, \xF3 Jesus
A      E7    A
Dorme em paz, \xF3 Jesus

A
Noite Feliz, Noite Feliz
E7
\xD3 Jesus
A
Deus da luz
D              A
Qu\xE3o af\xE1vel \xE9 teu cora\xE7\xE3o
D                  A
Que quisestes nascer nosso irm\xE3o

E7          A
E a n\xF3s todos salvar
A      E7    A
E a n\xF3s todos salvar

A
Noite feliz, Noite feliz
E7
Eis que no ar
A
Vem cantar
D                  A
Aos pastores os anjos no c\xE9u
D                  A
Anunciando a chegada de Deus

E7       A
De Jesus Salvador
A  E7     A
De Jesus Salvador`},{id:"d195",t:"NOITES TRAI\xC7OEIRAS",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1JCcIzqLVxam0DRFdhst04VMe17CbvhYF.pdf",cifra:`NOITES     TRAI\xC7OEIRAS

G               Bm7
Deus est\xE1 aqui nesse momento
     C    C/D       G   C/D

Sua presen\xE7a  \xE9 real em meu viver
  G                Bm7
Entregue sua vida e seus problemas
      C        C/D     G C/D           C7M

Fale com Deus, ele vai ajudar voc\xEA oh, oh

            Am7
Deus  te trouxe aqui

      C/D   D7         G          C7M
Para aliviar  os teus  sofrimentos  oh, oh
            Am7
\xC9 ele o autor da f\xE9

           C/D
Do princ\xEDpio  ao fim
  D7         G    G7

Em  todos teus  momentos
        C           D/C
E ainda  se vier noite trai\xE7oeira
            G/B                   C7M

Se a cruz pesada  for, Cristo estar\xE1 contigo
       G/B  F            C/D
E o mundo   pode  at\xE9 fazer voc\xEA chorar
   D7           G   G7

Mas  Deus  te quer sorrindo

G              Bm7
Seja qual for o seu problema,

     C    C/D       G   C/D
Fale com Deus, Ele vai ajudar voc\xEA
  G                Bm7
Ap\xF3s a dor vem  alegria

      C        C/D     G C/D           C7M
Pois Deus \xE9 amor, e n\xE3o te deixar\xE1 sofrer`},{id:"d196",t:"NOSSA MISS\xC3O",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1AyWJuPrh1LW_ZJMTXBDVk665mVzxcUGk.pdf",cifra:`Nossa    Miss\xE3o

 D       A
Desde o ventre da minha m\xE3e
G/B      D/A
J\xE1 me conhecia
G          D/F#
Antes que eu nascesse
Em       A

Jesus me escolheu

D        A
Hoje a minha vida
 G/B       F#
\xC9 para o seu louvor
D/A    E/G#    G  A  G/B A/C#
Sigo anunciando o seu eterno amor

 D        A
Aonde mandar  eu irei
    D      G     A

Seu amor eu n\xE3o posso ocultar
G     D/F#    G    A   Bm7
Quero anunciar para o mundo ouvir
     Em7     A  D   G A
Que Jesus \xE9 o nosso Salvador

D         A
Grato eu estou Senhor
    G/B     D/A
Porque me confiaste
G         A    Em      A
A miss\xE3o de proclamar o seu eterno amor

D         A
Mesmo sendo t\xE3o pequeno
    G/B      F#
Me deste autoridade
  D/A   E/G#
De em seu nome anunciar
       A C  D
A paz e a li____________ber___da_____de

REFR\xC3O`},{id:"d197",t:"NOSSA SENHORA",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1NmNgAibqG2bnOuyUCh7EzGfKGTqPGQMI.pdf",cifra:`NOSSA SENHORA

 C
Cubra-me com seu manto de amor
Guarda-me na paz desse olhar
                   Dm7
Cura-me as feridas e a dor me faz suportar
Que as pedras do meu caminho
 G7
Meus p\xE9s suportem pisar
Dm7         G7           C
Mesmo ferido de espinhos me ajude a passar
Se ficaram m\xE1goas em mim
M\xE3e tira do meu cora\xE7\xE3o
              C7         F
E aqueles que eu fiz sofrer pe\xE7o perd\xE3o

         Fm
Se eu curvar meu corpo na dor
C
Me alivia o peso da cruz
 Dm7               G7    C     G7
Interceda por mim minha m\xE3e junto a Jesus
C
Nossa Senhora me de a m\xE3o
Cuida do meu cora\xE7\xE3o
      Dm7 G7   C    G7
Da minha vida do meu destino
C
Nossa Senhora me d\xEA a m\xE3o
Cuida do meu cora\xE7\xE3o
      Dm7 G7   C    Am7
Da minha vida do meu destino
      Dm7   G7
Do meu caminho
      C      G7
Cuida de mim
C
Sempre que o meu pranto rolar
Ponha sobre mim suas m\xE3os
                   Dm7
Aumenta minha f\xE9 e acalma o meu cora\xE7\xE3o
Grande \xE9 a prociss\xE3o a pedir
G7
A miseric\xF3rdia o perd\xE3o
 Dm7           G7     C

A cura do corpo e pra alma a salva\xE7\xE3o
Pobres pecadores oh m\xE3e
T\xE3o necessitados de v\xF3s
                   C7     F
Santa M\xE3e de Deus tem piedade de n\xF3s
               Fm
De joelhos aos vossos p\xE9s
 C
Estendei a n\xF3s vossas m\xE3os
Dm7                G7       C G7
Rogai por todos n\xF3s vossos filhos meus irm\xE3os`},{id:"d198",t:"N\xE3o d\xE1 mais pra voltar",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18rRn1vJG0_nFvu6nyJtg6VnqBK16DFC1.pdf",cifra:`N\xE3o  d\xE1 mais  pra voltar

A              C#m     D      Bm        E
N\xE3o d\xE1 mais pra voltar, o barco est\xE1 em alto mar.

A              C#m     D      Bm        E
N\xE3o d\xE1 mais pra voltar, o barco est\xE1 em alto mar.

 A                 D  E               A           F#7

N\xE3o d\xE1 mais pra negar, o mar \xE9 Deus e o barco sou eu.
            Bm                 D  E           A    E
E o vento forte que me leva pra frente \xE9 o amor de Deus.

 A                 D  E               A           F#7
N\xE3o d\xE1 mais pra negar, o mar \xE9 Deus e o barco sou eu.

            Bm                 D  E           A    E
E o vento forte que me leva pra frente \xE9 o amor de Deus.

A              C#m     D      Bm        E

N\xE3o d\xE1 nem mais pra ver o porto que era seguro.
A              C#m     D      Bm        E

Eu sou impulsionado a desbravar um novo mundo.

 A                 D  E               A           F#7
N\xE3o d\xE1 mais pra negar, o mar \xE9 Deus e o barco sou eu.

            Bm                 D  E           A    E
E o vento forte que me leva pra frente \xE9 o amor de Deus.

 A                 D  E               A           F#7
N\xE3o d\xE1 mais pra negar, o mar \xE9 Deus e o barco sou eu.
            Bm                 D  E           A    E

E o vento forte que me leva pra frente \xE9 o amor de Deus.`},{id:"d199",t:"N\xE3o Tenhas Medo",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1EZdmaL79A8nqu3HgGViPRFAlCmImUBv5.pdf",cifra:`N\xE3o  Tenhas Medo  \u2013 Dunga

Am7             C9
  Quando eu vou ao Seu encontro
Am7          C9
  Eu sinto algo acontecer
Am7         C9

  O Seu Esp\xEDrito a me conduzir
Am7        C9
  Me atraindo at\xE9 Voc\xEA

    Dm7  C           G
  A cada passo que eu dou
Dm7       C          G
  Ou\xE7o Tua voz a me dizer

 C9         Am7        Bb9
  N\xE3o tenhas medo de crescer

               F
  Nem medo de aprender
 C9          Am7
  Contigo estarei

    Bb9               F
  Jamais tua causa abandonarei

Am7           C9

 Quando eu ca\xED, pensei em fugir
Am7         C9
 Mas eu senti algo acontecer
Am7          C9

 O Seu Esp\xEDrito a me seduzir
Am7           C9
 Me conduzindo at\xE9 voc\xEA

   Dm7  C             G
 A cada passo que eu dou
Dm7       C          G
 Ou\xE7o Tua voz a me dizer`},{id:"d200",t:"O BOM PASTOR - PELOS PRADOS (C)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/14jQhKTq1rKpv75bGtxATsVnFwzXxmXc4.pdf",cifra:`O   BOM       PASTOR

     C      C/E

Pelos prados e campinas            C         C/E
   F      C                     Nos caminhos  mais
Verdejantes eu vou              seguros
   C/E        F                    F     C

\xC9 o Senhor que me  leva         Junto Dele eu vou
     G                             C/E        F
A descansar                     E pra sempre o Seu nome
      C          C/E                 G

Junto \xE0s fontes de \xE1guas        Eu honrarei
puras                               C        C/E
   F      C                     Se eu encontro mil
Repousantes  eu vou             abismos

     C/E      F      G               F     C
Minhas  for\xE7as o Senhor vai     Nos caminhos  eu vou
animar                            C/E        F        G
                                Seguran\xE7a  sempre tenho

                                em Suas m\xE3os
  F    G     C    Am
Tu \xE9s, Senhor,  o meu           [Refr\xE3o]
pastor

      Dm                         F    G     C   Am
Por isso nada                   Tu \xE9s, Senhor, o meu
      G      C  C/E  F G        pastor

Em  minha  vida  faltar\xE1              Dm
                                Por isso nada
                                      G     C
                                Em minha  vida faltar\xE1

                                 F    G     C   Am
                                Tu \xE9s, Senhor, o meu
                                pastor
                                      Dm

                                Por isso nada
                                      G     C
                                Em minha  vida faltar\xE1`},{id:"d201",t:"O BOM PASTOR - PELOS PRADOS (G)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1gNSooAMxkbGAvM5ylScfrHCql8Y03Dw6.pdf",cifra:`O   BOM       PASTOR

    G       G/B                 Nos caminhos  mais

Pelos prados e campinas         seguros
   C      G                        C      G
Verdejantes eu vou              Junto Dele eu vou
   G/B        C                    G/B        C

\xC9 o Senhor que me  leva         E pra sempre o Seu nome
     D                               D
A descansar                     Eu honrarei
      G          G/B                G        G/B

Junto \xE0s fontes de \xE1guas        Se eu encontro mil
puras                           abismos
   C      G                          C     G
Repousantes  eu vou             Nos caminhos  eu vou

     G/B      C       D           G/B        C         D
Minhas  for\xE7as o Senhor vai     Seguran\xE7a  sempre tenho
animar                          em Suas m\xE3os

                                      Am         D      G
  C    D      G   Em            G/F
Tu \xE9s, Senhor,  o meu           Por isso nada em minha
pastor                          vida faltar\xE1

      Am                         C     D     G   Em
Por isso nada                   Tu \xE9s, Senhor, o meu
      D      G  G/B  C D        pastor

Em  minha  vida  faltar\xE1              Am
                                Por isso nada
                                      D     G
                                Em minha  vida faltar\xE1

                                 C     D     G   Em
                                Tu \xE9s, Senhor, o meu
                                pastor
                                      Am

                                Por isso nada
   G        G/B                       D     G
                                Em minha  vida faltar\xE1`},{id:"d202",t:"O C\xC9U SE ABRE D",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1KOGL0d4YFQ8nEDSRdHOtzsWTjA2QjLbA.pdf",cifra:`O C\xC9U  SE ABRE

D                F#m
Hoje  o c\xE9u se  abre pra  derramar

       G           D     C  A4  A
Sobre  os cora\xE7\xF5es   toda a gra\xE7a   do Pai

D             F#m

Eu tamb\xE9m    quero  me   derramar
          G     Em          C    A4  A
De  todo o meu   cora\xE7\xE3o    nos  bra\xE7os  do  Pai

D    D7M       D/F#     G7M    G6
Vem,        Esp\xEDrito   Santo,       com   teu

   Bm
poder

A          D/F#       G      G/A   G/B
Tocar   meu   ser,    fluir em   mim

Bm            G

Hoje  eu posso  ser um   novo  homem
    D           A  A4  F#m7

Pelo teu  poder  renascer`},{id:"d203",t:"O C\xE9u Se Abre A",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/12yWuvW_G6iRDxbXHHzO65UkO8uo3IvTS.pdf",cifra:`O C\xE9u Se Abre  \u2013 Minist\xE9rio Adora\xE7\xE3o e Vida

A                 C#m
Hoje o c\xE9u se abre pra derramar
       D            A      G  Esus4 E
Sobre os cora\xE7\xF5es toda a gra\xE7a do Pai

A                 C#m
Eu tamb\xE9m quero me derramar
            D    Bm           G  Esus4 E

De todo o meu cora\xE7\xE3o nos bra\xE7os do Pai

A   A7M  A/C#   D9    D6          F#m
Vem,    Esp\xEDrito Santo, com teu poder
   E      A/C#  D
Tocar meu ser, fluir em mim

F#m          D

Hoje eu posso ser um novo homem
    A           E (C#m7)
Pelo teu poder renascer

A   A7M  A/C#   D9    D6          F#m
Vem,    Esp\xEDrito Santo, com teu poder
   E      A/C#  D

Tocar meu ser, fluir em mim`},{id:"d204",t:"O C\xE9u se abre (G)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/12ap6CTQAI6iZAMESzbsb65Bd4SL3Dn0Y.pdf",cifra:`O  C\xE9u se abre

G                 Bm

Hoje o c\xE9u se abre pra derramar
       C            G      F  Dsus4 D
Sobre os cora\xE7\xF5es toda a gra\xE7a do Pai

G                 Bm
Eu tamb\xE9m quero me derramar
            C    Am           F  Dsus4 D

De todo o meu cora\xE7\xE3o nos bra\xE7os do Pai

G   G7M  G/B   C9    C6          Em
Vem,    Esp\xEDrito Santo, com teu poder

   D       G/B  C
Tocar meu ser, fluir em mim

Em          C
Hoje eu posso ser um novo homem
    G           D  (Bm7)
Pelo teu poder renascer

G   G7M  G/B   C9    C6          Em
Vem,    Esp\xEDrito Santo, com teu poder
   D       G/B  C

Tocar meu ser, fluir em mim`},{id:"d205",t:"O Meu Lugar \xE9 o C\xE9u",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1hvt4RqRTyQtIHRFSIVdJ-XhFBXPMH-au.pdf",cifra:`O Meu Lugar \xE9 o C\xE9u

Introdu\xE7\xE3o: Em | D | C | C | Em | D | C | C

           G
O meu lugar \xE9 o C\xE9u
              D
E l\xE1 que eu quero morar
            Em D C
O meu lugar \xE9 o C\xE9u
              Cm6
E l\xE1 que eu quero morar

  Em
Eu sei n\xE3o vale a pena
     D
Tanta grana, poder, fama

   C
Pois isso tudo aqui vou deixar
 Em                  D
E sei que l\xE1 no c\xE9u s\xF3 chega aquele que na terra
    C
Seus bens soube compartilhar
   Em           D
Por isso todo dia, dia-a-dia, a cada hora
  C
Eu sei com Deus eu posso contar
      Em            D
E a cada passo certo que eu der aqui na terra
    C
Mais perto Dele eu vou ficar

Am              D Am           G
Buscar, bater, saber pedir e at\xE9 mesmo suplicar

Am           D
Eu tenho um endere\xE7o
   G       F C F
No c\xE9u vou morar
  G        F  C
Eu tenho um lugar`},{id:"d206",t:"O P\xC3O DA VIDA",tom:"",m:"Comunh\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Z3i0pN-xAsEWcLs-wiZi6mdjKQj1weKR.pdf",cifra:`O  P\xC3O  DA  VIDA

G      C9     G        C9      G    C9        D
Na comunh\xE3o, Jesus se d\xE1 no p\xE3o, o cordeiro imolado \xE9 refei\xE7\xE3o

G      C9       G        C9    G         C9          F D

Nosso alimento de amor e salva\xE7\xE3o, em torno deste altar somos irm\xE3os

         G        C9         G C
O p\xE3o da vida \xE9s tu, Jesus, o p\xE3o do c\xE9u
    G        C9          G            D           G  C

O caminho, a verdade, via de amor, dom de Deus, nosso redentor

G     C9       G    C9         G         C9       D
Tomai e come, isto \xE9 meu corpo que do trigo se faz p\xE3o, \xE9 refei\xE7\xE3o

G    C9   G              C9     G   C9            F D
Na eucaristia o vinho se torna sangue, verdadeira bebida, nossa alegria

         G        C9         G C
O p\xE3o da vida \xE9s tu, Jesus, o p\xE3o do c\xE9u

    G        C9          G            D           G  C
O caminho, a verdade, via de amor, dom de Deus, nosso redentor`},{id:"d207",t:"O que agrada a Deus",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1SowptUlgd2DBPNPjqMwvPIF5l6YeaBf4.pdf",cifra:`O  que  agrada    a Deus

                E                        C#m
O que agrada  a Deus, em  minha pequena   alma.

                    F#m         B          E   B7
\xC9 que eu olho minha  pequenez  e minha pobreza

                E                        C#m
O que agrada  a Deus, em  minha pequena   alma.

                    F#m         B          E   E7
\xC9 que eu olho minha  pequenez  e minha pobreza

         A  B    G#m  C#m

\xC9 a esperan\xE7a     cega
     F#m  B             E     E7

que tenho em  sua miseric\xF3rdia
         A  B    G#m  C#m
\xC9 a esperan\xE7a     cega

     F#m  B             E     B7
que tenho em  sua miseric\xF3rdia`},{id:"d208",t:"Oferta de Amor s\xF3 letra",tom:"",m:"Ofert\xF3rio",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/19ItziGSSacFAaiWCv4lNDXas6CNOVjnv.pdf",cifra:`Oferta    de  Amor

Venho   Senhor  minha   vida oferecer,

Como   oferta de  amor  e sacrif\xEDcio.
Quero  minha   vida a  ti entregar

Como   oferta viva  em  teu altar.

Venho   Senhor  minha   vida oferecer,

Como   oferta de  amor  e sacrif\xEDcio.
Quero  minha   vida a  ti entregar

Como   oferta viva  em  teu altar.

Pois, pra  te   adorar    foi que eu  nasci.
Cumpre   em  mim   o teu querer

Fa\xE7a  o que est\xE1 em  teu cora\xE7\xE3o.

E que  a cada dia eu  queira mais  e mais
Estar ao teu lado

Estar ao teu lado

Estar ao teu lado  Senhor.`},{id:"d209",t:"Oferta de Amor",tom:"",m:"Ofert\xF3rio",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1j_JjjQRrb4lKsyiFyROxerslcwUT6mI-.pdf",cifra:`Oferta    de  Amor

G             D/F#           Em    Em/D

Venho   Senhor  minha   vida oferecer,

C        G/B             Am    C/D
Como   oferta de  amor  e sacrif\xEDcio.

G        D/F#      Em       Em/D

Quero  minha   vida  a  ti entregar

C        C/D                   G   G/B

Como   oferta viva  em  teu altar.

C     D         Bm   Em        C    D          G

Pois, pra  te   adorar    foi que eu  nasci.

Am                 Em
Cumpre   em  mim   o teu querer

C     C/D         G

Fa\xE7a  o que est\xE1 em  teu cora\xE7\xE3o.

C         D/C      Bm            Em

E que  a cada dia eu  queira mais  e mais

Am                 D

Estar ao teu lado

Am                 D
Estar ao teu lado

Am                 D     G

Estar ao teu lado  Senhor.`},{id:"d210",t:"OFERTA DE LOUVOR",tom:"",m:"Ofert\xF3rio",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1i7x1a1cxFDG9upxBC7XnXWOLOFAkt0GX.pdf",cifra:`OFERTA   DE  LOUVOR

A9      E
Oferta no sil\xEAncio do altar
 A9   E.    C#
Bendito fruto do viver
F#m7     C#m7       D  E
Perfeito alimento de minh'alma

 A9      E
O vinho que da uva brotou
 A9     . C#
Bendito fruto do labor
  F#m7    C#m         D9
Por tua casa quero me consumir

E       A9   E/G#    F#m7
Oferta de louvor, como retribuir
  C#m7       D9      A
Por todo bem que fez em meu favor
     Bm7      E    A

Elevo o c\xE1lice da minha salva\xE7\xE3o

 A9         E
Levanto as minhas m\xE3os pra ofertar
 A9      E    C#
E deixo o meu cansa\xE7o
 F#m7      C#m7        D  E
Transformo em ora\xE7\xE3o o que eu fiz

A9     E
Assim como o incenso no altar

A9      E    C#
Elevo minha ora\xE7\xE3o
  F#m7     E    D9
Que chegue at\xE9 v\xF3s o meu clamor`},{id:"d211",t:"Oh M\xE3e Cuida de Mim",tom:"",m:"Nossa Senhora / Santos",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1zZ_OxZzk42ETXWDftXVsEWigFtPIZ9hM.pdf",cifra:`Oh    M\xE3e    Cuida     de  Mim

F#m                              D

M\xE3e   de   Deus     vem   e   cuida    de   mim

A                           E
Meu   cora\xE7\xE3o       apresento       a  ti

F#m                           D
                                                            2x
Sei   que    podes     ouvir     minha     voz

A                         E
E  entregar       a  Jesus     meu    clamor

D              E

Meu   cora\xE7\xE3o

      F#m                     D

Oh   m\xE3e   cuida     de   mim

               A                              E

Leva-me      at\xE9    o  cora\xE7\xE3o      de   Jesus`},{id:"d212",t:"Olha pra mim",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ao5flgYMAXAzB4PQLHqFFFw_s5bPhdnr.pdf",cifra:`Olha  pra  mim  \u2013 Minist\xE9rio  Apascentar

G         Am7
Eu me humilharei
         G/B
Teu nome gritarei
          Am7
Como crian\xE7a eu serei
         D7/4
Mas olha pra mim
         Am7
Tuas vestes tocarei
         G/B
Na figueira subirei

            C5
Aos Teus p\xE9s eu chorarei
   Am7    D7/4
Mas olha pra mim

       C   Bm
Olha pra mim, Senhor
       C    Bm
Olha pra mim, preciso do Teu olhar
       C         Bm
Olha pra mim, pois eu preciso
                 C D7/4
Pois eu preciso do Teu olhar

             Am7

Eu farei o que for preciso
     Bm
Para Te ver
                    Am7
Pois n\xE3o posso deixar que sigas
D7/4      Bm E7
sem me perceber
             Am7
N\xE3o importa a multid\xE3o
               Bm
S\xF3 eu sei do que eu preciso
         C5
E eu preciso do Teu olhar
       Am7    D7/4
Do Teu olhar, Do Teu olhar`},{id:"d213",t:"Olhe para o c\xE9u",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1JAK8jm4qvqA7RQ7Kxa7x1DjB8tCa7WYY.pdf",cifra:`Olhe para o c\xE9u

       F#m            E
Quando a dor doeu dentro do meu peito

   F#m
Foi tamanha a dor
            E
Que nem deu pra chorar, nem deu pra chorar

     F#m              E
Quando a paz faltou, eu meu senti t\xE3o s\xF3
             F#m

Sem ningu\xE9m pra me ouvir
      E
E fiquei s\xF3 eu. S\xF3 eu e a solid\xE3o

    F#m              E
Ent\xE3o, ouvi algu\xE9m dizer: olhe para o c\xE9u
  F#m          E
L\xE1, existe algu\xE9m que chorou e sofreu mais que voc\xEA

A          D/A

Olhe para o C\xE9u, algu\xE9m te ama
A         D/A
Olhe para o C\xE9u e v\xEA se n\xE3o reclama
A          D/A           E D/F# G\xBA E/G#

Olhe para o C\xE9u, algu\xE9m, com voc\xEA, se preocupa
A          D/A
Olhe para o C\xE9u, levanta essa cabe\xE7a

A           D/A
Olhe para o C\xE9u, pra que voc\xEA n\xE3o esque\xE7a
A               D/A

Que pra voc\xEA sorrir e viver, Jesus
             E D/F# G\xBA E/G#
Sofreu e morreu por voc\xEA

F#m                  E
Ele tamb\xE9m teve medo, muita ingratid\xE3o

    F#m       E
E foi crucificado e ressuscitou por mim e por voc\xEA`},{id:"d214",t:"ORA\xC7\xC3O PELA FAM\xCDLIA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1JTCi77-b0Jy0lUSLCGppUd16HiW4C6L3.pdf",cifra:`ORA\xC7\xC3O      PELA   FAM\xCDLIA

    D                                           A7
Que nenhuma fam\xEDlia comece      Aben\xE7oa, Senhor, as fam\xEDlias!
        A7                      am\xE9m!
Em qualquer de repente            G    A7        D
                                Aben\xE7oa, Senhor, a minha
Que nenhuma fam\xEDlia termine     tamb\xE9m
       D                                        A7
Por falta de amor               Aben\xE7oa, Senhor, as fam\xEDlias!
                                am\xE9m!
Que o casal seja um para o outro  G    A7        D
       A7                       Aben\xE7oa, Senhor, a minha
De corpo e de mente             tamb\xE9m

E que nada no mundo separe
       D                           D
Um casal sonhador               Que marido e mulher tenham
                                for\xE7a
     D                                 A7
Que nenhuma fam\xEDlia             De amar sem medida
           A7
Se abrigue debaixo da ponte     Que ningu\xE9m v\xE1 dormir sem pedir
                                         D
Que ningu\xE9m interfira no lar    Ou sem dar seu perd\xE3o
       D
E na vida dos dois              Que as crian\xE7as aprendam no colo
                                      A7
Que ningu\xE9m os obrigue          O sentido da vida
           A7
A viver sem nenhum horizonte    Que a fam\xEDlia celebre a partilha
                                       D
Que eles vivam do ontem         Do abra\xE7o e do p\xE3o
              D
Do hoje e em fun\xE7\xE3o de um depois Que marido e mulher n\xE3o se
                                traiam
Que a fam\xEDlia comece                     A7
   D/F#      Em  Em7M  Em7      Nem traiam seus filhos
E termine sabendo onde vai
    A7        A/C#              Que o ci\xFAme n\xE3o mate
E que o homem carregue nos                   D
ombros                          A certeza do amor entre os dois
       D D7M  D2 D
A gra\xE7a de um pai               Que no seu firmamento
               D/F#                         A7
Que a mulher seja um c\xE9u de     A estrela que tem maior brilho
ternura
       Em Em7M  Em7             Seja a firme esperan\xE7a de um c\xE9u
Aconchego e calor                      D
     D                          Aqui mesmo e depois
E que os filhos conhe\xE7am
 A7         D D7M  D2 D
A for\xE7a que brota do amor`},{id:"d215",t:"ORA\xC7\xC3O PELA PAZ",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1-NZ5IpXlWTUHTMLWddDYwNLIeBLcxLRX.pdf",cifra:`ORA\xC7\xC3O       PELA    PAZ

D               Bm
Cristo, quero ser instrumento
          G  E7        A  A7
De tua paz e do teu  infinito amor

D             Bm
Onde  houver \xF3dio e rancor
           G    E7           A D7
Que eu leve a conc\xF3rdia,  que eu leve o amor

G             A              F#m

Onde  h\xE1 ofensa  que  d\xF3i, que eu leve o perd\xE3o
            G                A  A7    D  G  A7
Onde  houver  a disc\xF3rdia, que  eu leve a uni\xE3o  e tua
paz

D            Bm
Onde  encontrar um irm\xE3o

          G   E7             A A7
A chorar de tristeza, sem ter voz e nem vez
D             Bm
Quero bem  no seu cora\xE7\xE3o

      G   E7            A  D7
Semear  alegria  pra florir gratid\xE3o

[Refr\xE3o]

D             Bm
Mestre, que eu saiba amar
           G  E7           A  A7

Compreender,  consolar   e dar sem receber
D             Bm
Quero sempre  mais perdoar

          G    E7         A   D7
Trabalhar na conquista   e vit\xF3ria da paz

[Refr\xE3o]`},{id:"d216",t:"Ou Santos Ou Nada G",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1AE645Ldl7pXPg6iVVig6YUHk7-4bXiHr.pdf",cifra:`Ou   Santos      Ou   Nada

  G                C9
Ou santos ou nada mais
          G     C9
Queremos ser
            G       C9
Ou santos ou nada
             G         C9
Ou santos ou na.....da mais(2x)

         G    C9
Em meu pensar
          G    C9
Em meu sentir
           G    Em7
Quando eu falar
           D
na hora de decidir
              G      C9
Em todo o meu proceder
         G   C9
Acima de tudo
               C9 F
Vivendo a dor e o sofrer
             D
Ou santos ou nada

Refr\xE3o

          G    C9
Quando eu amar
             G      C9
Quando me vestir
           G       Em7
Na hora de trabalhar
              D
Se Deus contas me pedir
           G     C9
Na tribula\xE7\xE3o
                G        C9
Quando me desprezarem
     C
E mentido
      F               D
Disserem o mal contra mim`},{id:"d217",t:"Pai - Dunga",tom:"B",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1hE2SxoJXzgAxqJRFqlZ8FVxsZx5f21Sc.pdf",cifra:`Pai - Dunga
Tom: B

E        E7
Sem querer ouvir suas palavras
 A9      Gb Gb/C
Pensando como pudesse ser
A9/C#   E/B
Se ao inv\xE9s de voc\xEA

  E/F# F#/A# A/B
Outro pai eu pudesse ter

E        E7
Sem tentar entender
 A9      Gb Gb/C
Julgava eu apenas ser
A9/C#   E/B

Mais um filho nesta terra
  E/F# F#/A# A/B
Sem pai pra me compreender

A7+   E/G#
Hoje eu cresci
A7+   E B/D#
Pai eu me tornei

C#m7       C#m6
Tenho um filho igual a voc\xEA
  F#m7      A/B
Mas tamb\xE9m n\xE3o sei o que fazer

A7+     E/G#
Sempre haver\xE1 um momento
 A7+     E9 B/D#

Uma chance pra recome\xE7ar
C#m7     C#m6
Relembrar o que passou
  F#m7    A/B
Dando vida ao que restou

E9  G#m7

Pai eu te amo
A7+     E9 B/D#
M\xE3e eu te amo tamb\xE9m
 C#m7    C#m6
Eu sou como aquele filho
 F#m7     A/B
Que quer voltar tamb\xE9m`},{id:"d218",t:"Pai \u2013 Fabio Jr",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1DTxi4kM2I5knAG50w0RR4dGu1dEZZjf5.pdf",cifra:`Pai \u2013 Fabio Jr

A7+ D7+         A7+     D7+
Pai pode ser que daqui a algum tempo haja tempo pra gente
Bm7    D/E            A7+  C#7      E

ser mais muito mais que dois grande amigos pai e filho talvez
A7+ D7+          A7+   D7+
Pai pode ser que da\xED voc\xEA sinta qualquer coisa entre esses
    Bm7   D/E          A7+  E D/E

vinte e trinta longos anos de busca de paz...
A7+  D7+         A7+    D7+
Pai pode crer eu to bem e vou indo to tentando vivendo e
 Bm   D/E         A7+   D7+ A7+  D7+
pedindo com loucura pra voc\xEA renascer... Pai eu n\xE3o fa\xE7o

      A7+   D7+              Bm  D/E
quest\xE3o de ser tudo s\xF3 n\xE3o quero e n\xE3o vou ficar mudo pra
         A7+  A7 D7+   D#\xB0
falar de amor pra voc\xEA Pai senta aqui que o jantar est\xE1

  A7+  F#m             Bm  D/E
na mesa fala um pouco tua voz ta t\xE3o presa nos ensina esse
   Bm   D/E           A7+ Em  A5+ D7+  D#\xB0
jogo da vida onde a vida s\xF3 paga pra ver Pai

        A    F#m
me perdoa essa inseguran\xE7a \xE9 que eu n\xE3o sou mais aquela
Bm    Dm           C#m  F#7
crian\xE7a que um dia morrendo de medo nos teus bra\xE7os voc\xEA fez

  Bm  D/E    E7    A7+     Em  A5+ D7+  D#\xB0
segredo nos teus passos voc\xEA foi mais eu eu... Pai
              A  F#m          Bm
eu cresci e n\xE3o houve outro jeito quero s\xF3 recostar no teu

               C#m    F#7
peito pra pedir pra voc\xEA ir l\xE1 em casa e brincar de vov\xF4 com
  Bm   D/E        A7+  Em  A5+ D7+  D#\xB0
meu filho no tapete de sala de estar Pai voc\xEA foi
         A  F#m            Bm    Dm

meu her\xF3i meu bandido hoje \xE9 mais muito mais que um amigo nem
          C#m   F#7          Bm  D/E
voc\xEA nem ningu\xE9m ta sozinho voc\xEA faz parte desse caminho que
  E7     D7+  G7+  D7+  G7+ F#7+

hoje eu sigo em paz  Pai  paz.....`},{id:"d219",t:"Paz inquieta",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1E7Stdtex6LqU5CVVIhI8Qhljt7LiEK-5.pdf",cifra:`Paz inquieta

       Gm  Cm Gm Eb7+ D Gm
Ou, ou, \xF4...

            Cm
Irm\xE3o, quero te dar a paz

            Gm
A paz inquieta do Senhor
          Cm
Paz do Cordeiro de Deus

               Gm
Que os meus pecados perdoou (2x)

    Cm Gm Eb7+ D Gm
Ou, ou, \xF4...

Cm

Ele \xE9 o caminho
   Dm
A verdade e a vida

Cm
O P\xE3o da alegria, vivo
 Dm

Que desceu do c\xE9u
Cm         Dm
\xC9 a luz do mundo que brilha nas trevas
 Cm

Irm\xE3o, com meu abra\xE7o eu comungo com voc\xEA
     Dm         Gm
A minha paz e minha ora\xE7\xE3o

    Cm Gm Eb7+ D Gm
Ou, ou, \xF4...`},{id:"d220",t:"PEDI E RECEBEREIS",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BN0NCmdcCXr_7YqwjXE4kYgiL28fCA9n.pdf",cifra:`PEDI  E RECEBEREIS

F#m                      D            A               E

H\xE1 uma  promessa  que  quer  se cumprir  em  meio  a n\xF3s
F#m                          D       A          E
\xC9 o pr\xF3prio   Senhor  quem  diz: pedi  e recebereis

        Bm              D
Nenhum  mal ir\xE1  resistir
        A              E
Os mares  ir\xE3o  se abrir

           Bm                   D
Quando  a boca  de Deus  declarar
   A       E         D
Milagres  neste  lugar

        F#m                         D
Se eu  orar,  se eu  clamar  as muralhas   n\xE3o
         A                  E

Resistir\xE3o  ao  poder  de meu  Deus

        F#m                         D
Se eu  orar,  se eu  clamar  as muralhas   n\xE3o
         A                  E

Resistir\xE3o  ao  poder  de meu  Deus

        Gm                          Eb
Se eu  orar,  se eu  clamar  as muralhas   n\xE3o

         Bb                 F        F#m
Resistir\xE3o  ao  poder  de meu  Deus`},{id:"d221",t:"Pelo Nome ( As Muralhas v\xE3o cair) A",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1TFmckxLqEFiWot_q5Y_BG2TS2hk6VDFN.pdf",cifra:`Pelo Nome   ( As Muralhas  v\xE3o cair)

INTRO: A Bm D9 A ( D9 A )

       A                              D9

O mar vai se abrir, (pelo nome) a igreja atravessar, ( pelo nome )
                   A              E9
de p\xE9s enxutos v\xE3o estar, ( pelo nome ) pelo nome de Jesus.

        A                                   D9
As muralhas v\xE3o cair, ( pelo nome ) o inferno estremecer, ( pelo nome )
                A                         E9 D9  C#m Bm

todo mal vai sucumbir, ( pelo nome ) pelo nome de Jesus, pelo nome de
 A D9 A
Jesus.

A     Bm  D9          A                       D9
Canta igreja, uma nova can\xE7\xE3o, ( pelo nome ) e recebe do esp\xEDrito,

A       D9   A
Uma nova un\xE7\xE3o ( pelo nome )

             A                        D9

Os milagres v\xE3o surgir, ( pelo nome ) o cego enxergar, ( pelo nome)
            A                           E9
o paral\xEDtico vai andar, ( pelo nome ) pelo nome de Jesus.

            A                          D9
O leproso vai sarar, ( pelo nome ) todo sangue estancar, ( pelo nome )
               A                         E9 D9  C#m  Bm

toda igreja vai louvar, ( pelo nome ) pelo nome de Jesus, pelo nome de
  A   D9 A
Jesus.`},{id:"d222",t:"Pelo Nome (As Muralhas V\xE3o Cair) C",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/15lqtwwRToBcMB00TGzwx0AcHiDSG21vE.pdf",cifra:`Pelo   Nome      (As  Muralhas       V\xE3o   Cair)

      C             F9

O mar vai se abrir pelo nome, a igreja atravessar pelo nome
         C           G9
De p\xE9s enxutos v\xE3o estar pelo nome, pelo nome de Jesus

       C             F9
As muralhas v\xE3o cair pelo nome, o inferno estremecer pelo nome
        C           G9  F9 Em Dm   C F9 C

Todo mal vai sucumbir pelo nome, pelo nome de Jesus, pelo nome de
Jesus

C  Dm  F9     C     F9 C    Dm  F9
Canta Igreja, uma nova can\xE7\xE3o(pelo nome) e recebe do Espirito uma

C     F9 C
Nova Un\xE7\xE3o(pelo nome)

        C           F9

Os milagres v\xE3o surgir pelo nome, o cego enxergar pelo nome
        C            G9
O paral\xEDtico vai andar pelo nome, pelo nome de Jesus

       C             F9
O leproso vai sarar pelo nome, todo sangue estancar pelo nome
        C            G9  F9 Em Dm  C F9 C

Toda igreja vai louvar pelo nome, pelo nome de Jesus, pelo nome de Jesus`},{id:"d223",t:"PELO SANGUE DE JESUS Am",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1L-YvlwRras5CuQ_4enII-eC8k1MX_p0P.pdf",cifra:`PELO      SANGUE        DE    JESUS     (Am)

Am       F   C      G
Pelo sangue de Jesus, cadeias quebrar\xE3o
  Am     F   C      G
Pelo sangue de Jesus, muralhas romper\xE3o
  Am     F    C     G
Pelo sangue de Jesus, haver\xE1 liberta\xE7\xE3o
  Am     F    C       G
Pelo sangue de Jesus, de coragem se encher\xE3o

Dm    C/E F      C
                                                   2x
Eu, eu fui marcado, eu fui lavado
    G          Dm
Eu fui curado pelo sangue de Jesus
   C/E F    C
Eu fui marcado, santificado
     G          Dm F C G
Eu fui comprado pelo sangue de Jesus
F         G
Teu sangue derramado, cordeiro imolado
   Dm        Am
Inebria-me, Inebria-me Senhor
F         G                                   2x
Teu sangue derramado, cordeiro imolado
   Dm         Am G
Inebria-me, Inebria-me Senhor`},{id:"d224",t:"PELO SANGUE DE JESUS Em",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1XcCYzse7CoRI3rEC1nBDAujUhjrH_JxA.pdf",cifra:`PELO      SANGUE        DE    JESUS     (Em)

Em       C   G      D
Pelo sangue de Jesus, cadeias quebrar\xE3o
  Em     C   G      D
Pelo sangue de Jesus, muralhas romper\xE3o
  Em     C    G     D
Pelo sangue de Jesus, haver\xE1 liberta\xE7\xE3o
  Em     C     G      D
Pelo sangue de Jesus, de coragem se encher\xE3o
                                                   2x
Am    G/B C       G
Eu, eu fui marcado, eu fui lavado
    D          Am
Eu fui curado pelo sangue de Jesus
   G/B C     G
Eu fui marcado, santificado
     D          Am C G  D
Eu fui comprado pelo sangue de Jesus
C         D
Teu sangue derramado, cordeiro imolado
   Am        Em
Inebria-me, Inebria-me Senhor
                                         2x
C         D
Teu sangue derramado, cordeiro imolado
   Am        Em  D
Inebria-me, Inebria-me Senhor

Am    G/B C       G
Eu, eu fui marcado, eu fui lavado
    D          Am
Eu fui curado pelo sangue de Jesus
   G/B C     G
Eu fui marcado, santificado
     D          Am
Eu fui comprado pelo sangue de Jesus`},{id:"d225",t:"PERDOA-ME - SHALOM",tom:"",m:"Ato Penitencial",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1VLYYvbWxctVUEn2RRz9vN7S74ve-qPJx.pdf",cifra:`PERDOA-ME      - SHALOM

E9     B/D# E9
Senhor, que Te deixaste ferir

  E/G# A9 A/C# E9
Do Teu sangue vem a Paz!
  F#m7 C#m7 B4 B
Aqui estou, perdoa - me!

C#m7 B/D# A/E E
Ky.rie eleison
B/D# C#m B A

Kyrie..e..e eleison
   F#m7 E/G# A9
Ky...ri...e...e eleison
C#m7 B E9
Ooooo

 E9   B/D# E9
Oh Cristo, elevado na Cruz

E/G# A9 A/C# E9
\xC9s Amigo do pe...cador!
 F#m7  C#m7 B4 B
Aqui estou, perdoa - me!

C#m7 B/D# A/E E
Christe eleison
B/D# C#m B A

Chri.iste...e eleison
  F#m7 E/G# A9
Chri.is.te...e eleison
C#m7 B E9
Ooo....o.o

 E9  B/D#  E9

Senhor, da morte, Vencedor
 E/G# A9 A/C# E9
Verdadeiro filho de Deus!
  F#m7 C#m7 B4 B
Aqui estou, perdoa - me!

C#m7 B/D# A/E E
Ky.rie eleison

B/D# C#m B A
Kyrie..e..e eleison
   F#m7 E/G# A9
Ky...ri...e...e eleison`},{id:"d226",t:"Perfeito \xE9 quem te criou",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BmrX5xf2vfYmwfZ66W_lGvZKtLHG7DRK.pdf",cifra:`Perfeito     \xE9 quem     te  criou   \u2013 Vida    Reluz

   E                         F#m

Se um dia um anjo declarou, que tu eras cheia de Deus
 G#m                 C#m
Agora penso: quem sou eu
          F#m         B

Para n\xE3o  te dizer tamb\xE9m
         E      C#m          F#m     B        E    C7+
Cheia de gra\xE7a, \xF3 m\xE3e, cheia de gra\xE7a, \xF3 m\xE3e Agraciada.
  E                  F#m

Se a palavra ensinou que todos h\xE3o de concordar
   G#m                C#m
E as gera\xE7\xF5es te proclamar
       F#m          B
Agora  eu  tamb\xE9m direi

         E    C#m         F#m    B7            C#m
Tu \xE9s bendita, \xF3 m\xE3e, tu \xE9s bendita, \xF3 m\xE3e Bem-aventurada...
  C9              G          D/F#           A
Surgiu um grande sinal no c\xE9u, uma  mulher  revestida

         C9         G            A          B
B7
De sol, a lua debaixo de seus p\xE9s e na cabe\xE7a uma Coroa.
    E                       F#m

N\xE3o h\xE1 com que se comparar perfeito \xE9 quem te criou
     G#m          C#m
Se o criador te coroou!
      A     B/A       G#m       C#m      F#m         B7

te coroamos \xF3 M\xE3e,  te coroamos \xF3 M\xE3e  te coroamos \xF3 M\xE3e,
C#m
nossa Rainha....
       A     B/A      G#m     C#m        F#m         B7

te coroamos \xF3 M\xE3e,  te coroamos \xF3 M\xE3e  te coroamos \xF3 M\xE3e,
E
nossa Rainha`},{id:"d227",t:"PESCADOR DE HOMENS Bm",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18VounK_HnUS0TyKo1wIDzlzamRkC_x5I.pdf",cifra:`PESCADOR      DE   HOMENS

Bm         G                     Bm    G
Pescador de homens farei de ti  Senhor Tu sabes tudo
A       Bm                       A  Bm
Te conduzirei ao reino do meu pai Senhor Tu sabes que eu te amo

Bm         G                          G
A face do pai \xE9 esta que olha pra ti Senhor Tu sabes tudo
A      Bm                        A  Bm
Pois quem me v\xEA, v\xEA o pai       Senhor Tu sabes que eu te amo
      G
Sim\xE3o filho de Jonas tu me amas?       G
A      Bm                       Apascenta minhas ovelhas
Sim Senhor, tu sabes que eu te amo     A

      G                         Apascenta o meu rebanho
Sim\xE3o filho de Jonas tu me amas?        Bm
A      Bm                       Apascenta os meus cordeiros
Sim Senhor, tu sabes que eu te amo
      G       A                 Apascenta minhas ovelhas
Sim\xE3o filho de Jonas tu me amas?       G
                                Apascenta minhas ovelhas
                                       A

Bm         G                    Apascenta o meu rebanho
Pescador de homens farei de ti          Bm
A       Bm                      Apascenta os meus cordeiros
Te conduzirei ao reino do meu pai
Bm         G                        G
A face do pai \xE9 esta que olha pra ti Eu te amo Jesus
A      Bm                           A
Pois quem me v\xEA, v\xEA o pai       Eu te amo Jesus

      G                             Bm
Sim\xE3o filho de Jonas tu me amas? Eu te amo Jesus
A      Bm                           G
Sim Senhor, tu sabes que eu sou teu Eu te amo Jesus
amigo                               A
      G                         Eu te amo Jesus
Sim\xE3o filho de Jonas tu me amas?    Bm
A      Bm                       Eu te amo Jesus

Sim Senhor, tu sabes que eu sou teu
amigo
      G       A
Sim\xE3o filho de Jonas tu me amas?`},{id:"d228",t:"Pipoca",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1jC1jbQQZlyBKE_DY3Z6f2-f6RD9antEy.pdf",cifra:`Pipoca

Introdu\xE7\xE3o: F#m \u2013 B \u2013E (4x)
Parararararara raarara raarara raarara ...............

 E         B
Uma pipoca espocando na panela,
            E

Uma sozinha, o louvor quase n\xE3o sai,
            B
Mas quando chega mais uma na panela,

            E
A\xED ent\xE3o o louvor aumenta mais
     B     E       B    E

\xC9 um tal de ploc ploc ploc ploc..........................

Agora s\xE3o duas pipocas; Duas pipocas espocando na panela............

Agora s\xE3o tr\xEAs pipocas; Tr\xEAs pipocas espocando na panela................
Agora s\xE3o todas as pipocas juntas ; Todas pipocas espocando na ......`},{id:"d229",t:"PLENITUDE DE VERDADE E",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Imuv1W5aaSVSjPJgRvJZ9oPX1QSdoRym.pdf",cifra:`PLENITUDE    DE  VERDADE

 E/G#       A9             E/G#

Senhor  que  sois a plenitude   da verdade
   A9   B9

E da gra\xE7a

 F#m7       E4   B/D#
Kyrie    eleisson
 F#m7     A9     B9   B/A

Kyrie    eleisson

E/G#     A9            E/G#
Cristo que  vos tornaste   pobre

    A9        B9
Para  nos enriquecer

 F#m7       E4   B/D#
Criste,  eleisson

 F#m7      A9   B9   B/A
Criste,  eleisson

 E/G#       A9            E/G#

Senhor,  que  vieste pra  fazer de  n\xF3s
       A9     B9

O vosso  povo  santo

 F#m7       E4   B/D#

Kyrie    eleisson
 F#m7     A9     B9   B/A

Kyrie    eleisson`},{id:"d230",t:"Por que Ele Vive",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1EN6eRUrgnJA4_T8qvBOL_wEzK4yi6UD7.pdf",cifra:`Por  que  Ele  Vive

              A          D

Porque  Ele vive, posso crer no amanh\xE3.
      A         E

Porque  Ele vive, temor n\xE3o h\xE1.

      A    A7     D     Dm
Mas  eu bem  sei, eu sei, que a minha vida

     A        E         D

Est\xE1 nas m\xE3os  do meu  Jesus, que vivo est\xE1

     A        D

Deus enviou  Seu Filho amado
     A       E

Para morrer  em meu  lugar

 A     A7    D   Dm
Na cruz sofreu por meus  pecados

     A        E        D

Mas  o sepulcro vazio est\xE1 porque Ele vive

       A        D

E quando, enfim, chegar  a hora
     A        E

Em que  a morte enfrentarei

  A   A7      D     Dm

Sem  medo,  ent\xE3o, terei vit\xF3ria
      A        E        D

Verei na Gl\xF3ria o meu Jesus que vivo est\xE1`},{id:"d231",t:"Posso Tudo Posso",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1srgoJnaBNFmISVcS_WL5aR9Xpk0jQdHd.pdf",cifra:`Tudo Posso

   G    D/F#  C           Em   D
Posso, tudo posso Naquele que me fortalece
 C           G/B          Am  D
Nada e ningu\xE9m no mundo vai me fazer desistir
 G          D/F#     C              Em   D
Quero, tudo quero, sem medo entregar meus projetos
   C           G/B            Am   D/F# C/E D
Deixar-me guiar nos caminhos que Deus desejou pra mim e a.....li estar

                G      D/F#           C/E        D
Vou perseguir tudo aquilo que Deus j\xE1 escolheu pra mim
         G   D/F#            C
Vou persistir, e mesmo nas marcas daquela dor
  G/B             Am   D
Do que ficou, vou me lembrar
     G  D/F#            C/E      D
E realizar o sonho mais lindo que Deus sonhou
Eb\xB0    Em         Bm             C
Em meu lugar estar na espera de um novo que vai chegar
   G/B      Am  Am/G D/F# C/E D
Vou persistir, continuar a esperar e crer

G/B C         G/B  Am      D       C

E  mesmo quando a vis\xE3o se turva e o cora\xE7\xE3o s\xF3 chora
     G/B      Am     D
Mas na alma, h\xE1 certeza da vit\xF3ria

   G    D/F#  C           Em   D
Posso, tudo posso Naquele que me fortalece
 C           G/B          Am  D
Nada e ningu\xE9m no mundo vai me fazer desistir

                G      D/F#           C/E        D
Vou perseguir tudo aquilo que Deus j\xE1 escolheu pra mim
         G   D/F#            C
Vou persistir, e mesmo nas marcas daquela dor
  G/B             Am   D
Do que ficou, vou me lembrar

     G  D/F#            C/E      D
E realizar o sonho mais lindo que Deus sonhou
Eb\xB0    Em         Bm             C
Em meu lugar estar na espera de um novo que vai chegar
   G/B      Am  Am/G D/F# C/E D
Vou persistir, continuar a esperar e crer

G/B C         G/B  Am      D       C
E  mesmo quando a vis\xE3o se turva e o cora\xE7\xE3o s\xF3 chora
     G/B      Am     D
Mas na alma, h\xE1 certeza da vit\xF3ria

      C9    G/B        Am       D
Eu vou sofrendo, mas seguindo enquanto tantos n\xE3o entendem

     C9     G/B     Am
Vou cantando minha hist\xF3ria, profetizando

     D       C   G/B Am D   G
Que eu posso, tudo posso... em Jesus`},{id:"d232",t:"PRECIOSO SANGUE",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17QV-bs2ZNkTjncPH891J6Oc0Qrz7lqU1.pdf",cifra:`PRECIOSO   SANGUE

  F#m     E              D7
Eu invoco o precioso sangue de Jesus

  F#m     E                    Dmaj7
Eu invoco o precioso sangue de vossa chagas aberta

           D E D
O teu sangue cura-me
          F#m E F#m

Teu sangue liberta-me
    G       D
E expulsa todo mal

     E
Da minha vida

  F#m     E              D7
Eu invoco o precioso sangue de Jesus
  F#m     E                    Dmaj7

Eu invoco o precioso sangue de vossa chagas aberta
  F#m     E              D7
Eu invoco o precioso sangue de Jesus
  F#m     E                    Dmaj7

Eu invoco o precioso sangue de vossa chagas aberta

           D E D

O teu sangue cura-me
          F#m E F#m
Teu sangue liberta-me

    G       D
E expulsa todo mal
     E

Da minha vida

                         KIRYE JMJ

 Dm     C   A#                  Ele_ison
Senhor, que viestes salvar
   Dm      C A                  F     F C
Os cora\xE7\xF5es arrependidos        Christe eleison
                                 A7 Dm
   F C                          Ele__ison
Kyrie eleison                    G C
 A7 Dm7                         Eleison
Ele__ison
 G C                            ( Bm E Am )
Eleison                         ( C F G )
F     C                          Am       G  F
Kyrie eleison                   Senhor, que intercedeis por n\xF3s
 A Dm7                                Am      G
Ele_ison                        Junto a Deus Pai que nos perdoa
 G C
Eleison                           D G  D Em
                                Kyrie ele___ison
( Dm Am A# )                     C#m F#  Bm
                                Ele______ison
  Dm     C     A#                E A G
\xD3, Cristo, que viestes chamar   Ele_ison
   Dm     C  A
Os pecadores humilhados           D G  D/F# Em
                                Kyrie ele______ison
   F   C                         C#m F#  Bm
Christe eleison                 Ele______ison
 A7 Dm                           E4 A
Ele__ison                       Ele__ison
 G4 C A#

                      P\xC3O  E VINHO

   C9      G     Am7
P\xE3o e vinho te apresentamos   nesse altar

   Em7         F9      Em7
Como  sinal que tu recolhes nossa oferta

      Dm7           G

Tudo o que  somos  deixamos  aqui

    C9        G      Am7

P\xE3o e vinho te apresentamos   nesse altar

   Em7         F9      Em7
Como  sinal que tu recolhes nossa oferta

      Dm7          G

Tudo o que  somos  deixamos  aqui

C/E   F9      Em7
\xC9 um milagre  que se d\xE1

      F9         Am7

O p\xE3o e o vinho em  corpo  e sangue

     Dm7     G
V\xE3o se transformar

C/E    F9      Em7

N\xE3o ha  limites para o amor
       F9         Am7

Vem  transformar  tamb\xE9m   minha  vida

    Dm7    G          C4  C/E
Oh senhor,  \xE9 teu esse milagre de amor

                       SANTO   2 (C)

Em7   D9  G/B  C  Am7   D/F#

G     D/F#   C     D
Santo  santo san....anto

G    D/F#      D/C   C  D/C  C
Senhor Deus  do universo

G     D/F#   C     D

Santo  santo san....anto
G    D/F#      D/C   C  D/C  C
Senhor Deus  do universo

F          C         G
C\xE9us e terra proclamam  a vossa gl\xF3ria
F    C     D

Hosana  nas alturas
F        C        G
Bendito o que vem  em nome  do Senhor
F    C     D

Hosana  nas alturas

G    D/F#   C     D
Santo  santo san....anto

G    D/F#      D/C   C  D/C  C
Senhor Deus  do universo

G     D/F#   C     D

Santo  santo san....anto
G    D/F#      D/C   C  D/C  C
Senhor Deus  do universo

                      SANTO   2  (G)

Bm7   A9  D/F#   G  Em7   A/C#

D     A/C#   G     A
Santo  santo san....anto

D    A/C#      A/G   G  A/G  G
Senhor Deus  do universo

D     A/C#   G     A

Santo  santo san....anto
D    A/C#      A/G   G  A/G  G
Senhor Deus  do universo

C          G         D
C\xE9us e terra proclamam  a vossa gl\xF3ria
C     G     A
Hosana  nas alturas

C        G        D
Bendito o que vem  em nome  do Senhor
C     G    A

Hosana  nas alturas

D    A/C#   G     A
Santo  santo san....anto

D    A/C#      A/G   G  A/G  G
Senhor Deus  do universo

D     A/C#   G     A

Santo  santo san....anto
D    A/C#      A/G   G  A/G  G
Senhor Deus  do universo

                     AMOR  CIUMENTO

 A A9 A A9  D D9 D D9

 A      A9
Te descobrir no simples

        A                  D
Te encontrar em cada passo que eu dou
         D9

Te reconhecer a cada instante

          Bm7          F#m
E me abandonar pra Te encontrar
        D                  E

Em Teus bra\xE7os desejar tudo o que tens para mim

         A   A9           D9
Amor ciumento,  Amor abrasador
               F#m

Amor que me constrange
             E
Amor que \xE9 t\xE3o grande
          F#m             D

Amor devorador, Amor que nunca tive
               Bm      E     A
Transforma a minha vida com Teu amor

Solo: A F#m  D

    F#m   E      D9

Seduzido por Ti vou at\xE9 o fim
    F#m     E      D9
Para tudo, Senhor, conquistar.

    F#m   E      D9
Seduzido por Ti vou at\xE9 o fim
    F#m     E      D9

Para tudo, Senhor, conquistar.`},{id:"d233",t:"PRESEN\xC7A REAL",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/16CqlmbQxHCtUBtxHOpOMAEThvmEVZmsS.pdf",cifra:`PRESEN\xC7A   REAL

G   Bm    C   C/E  D/F# (3x) G   Bm7  C   D4 D

           G          D/F#  Em7
Presen\xE7a real  na  h\xF3stia santa
         D/F#  Am7   C        D4
Presen\xE7a re....al de Cristo Jesus
    C/E   D/F#    G           D/F#  Em
Cordeiro  imo....lado, puro e sem mancha
               Am       C         D4 D

O Cordeiro \xE9 o filho de Deus Criador

        G  D/F#  Em7
Eu Te ado........ro
      Am7   Em7  D/F#
Eu Te lou...o....vo
       Bm7   Em7
Eu Te  a.....mo
        Am7  Am/G    D
Eu Te espe...e.......ro
C/E    D/F#    G
Meu    Se.....nhor

G   Bm7   C   C/E   D/F#

G   Bm7     C     D4

  C/E      D/F#  G        D/F#   Em7
O p\xE3o que alimenta e d\xE1 vida eterna

          Am       C        D/F#
O p\xE3o \xE9 o corpo de Nosso Senhor
  C/E   D/F#   G          D/F# Em
O vinho que  salva e me d\xE1 coragem
            Am        C         D
O vinho \xE9 o sangue do meu Redentor

REFR\xC3O

Prepara\xE7\xE3o para subir 1 tom

Orquestra: Bm   F#m  G  A   Bbm7M   Bm   F#m  G  A4
           Bm   F#m  G  A   Bbm7M   Bm   C#m  D  E

           A          E/G#  F#m
Presen\xE7a real  na  h\xF3stia santa
         E/G# Bm         D        E
Presen\xE7a re...al   de   Cristo Jesus
    D/F#  E/G#    A        E/G# F#m
Que sobe  o..... v\xE9u do sacra...mento
          E/G#  Bm       D        E
Contemplo a     face do meu Salvador

        A  E/G# F#m7
Eu Te ado.......ro
      Bm7   F#m7  E4 E
Eu Te lou...o.....vo
       C#m7   D   A/C#
eu Te  a.....mo

        Bm7    F#m7   E/G#
Eu Te espe.....e......ro
 D     E         A      D  E
Meu     Se......nhor    (2X)

Instrumental final:

A       C#m   D     Bm    E  (2X)

F#m7    E     D     Bm    E

A       A/G   F#m7  D     E    A`},{id:"d234",t:"Primeiro Olhar",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/12z8dc6QfhOqOQZFaGAqqoUIh9UCmm2vH.pdf",cifra:`Primeiro Olhar - Anjos

G                      Cm6/G
Quando n\xF3s trocamos o primeiro olhar

G                   Cm6/G
O meu cora\xE7\xE3o pediu pra se apaixonar
      G                     Cm6/A
Igual ao sol que nasce e s\xF3 pertence ao dia
        G                  Cm6/G
Quando nasci o meu amor j\xE1 te pertencia
G                    Cm6/G
Se n\xE3o existisses eu te inventaria
    G/D              Cm6
As estrelas se eu pudesse te daria
  G/B                   Cm6
Prometi a Deus que ao c\xE9u vou te levar
    G/D                        Dsus
E vou gritar pro mundo ouvir que sempre te amei e vou te amar
    D/G     G             D/E     Em
Foi no primeiro olhar que eu te consagrei o meu amor
          C/A          D    D/C

E nada vai nos separar na alegria ou na dor,
      G/B                Cm7
O mundo n\xE3o ver\xE1 o nosso amor se acabar!
   G/D                Cm7/D
Logo no primeiro olhar Deus nos casou
    G/D                     Am/D   Dsus       G
E escreveu seu nome e o meu no azul do c\xE9u! Pra sempre vou te amar`},{id:"d235",t:"P\xC3O E VINHO",tom:"",m:"Ofert\xF3rio",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/15uFmkWhgvnhWYGSuLyleuq9tB3E2YT1G.pdf",cifra:`P\xC3O E VINHO

  A9       E    F#m7

P\xE3o e vinho te apresentamos nesse altar
  C#m7       D9    C#m7
Como sinal que tu recolhes nossa oferta
     Bm7       E

Tudo o que somos deixamos aqui

 D9     C#m7

\xC9 um milagre que se d\xE1
     D9      F#m7
O p\xE3o e o vinho em corpo e sangue

   Bm7   E
V\xE3o se transformar
  D9     C#m7

N\xE3o ha limites para o amor
     D9       F#m7
Vem transformar tamb\xE9m minha vida

  Bm7   E        G  A
Oh senhor, \xE9 teu esse milagre de amor

   D9      A     Bm7
P\xE3o e vinho te apresentamos nesse altar
  F#m7      G9     F#m7
Como sinal que tu recolhes nossa oferta

     Em7       A
Tudo o que somos deixamos aqui

 G9     F#m7
\xC9 um milagre que se d\xE1
     G9      Bm7

O p\xE3o e o vinho em corpo e sangue
   Em7   A
V\xE3o se transformar

  G9     F#m7
N\xE3o ha limites para o amor
     G9       Bm7

Vem transformar tamb\xE9m minha vida
  Em7   A        D9
Oh senhor, \xE9 teu esse milagre de amor`},{id:"d236",t:"P\xD5E TUA M\xC3O C",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Iz2BPvLrP_u53e8YOAz3J9G13ts-_UG1.pdf",cifra:`P\xD5E TUA  M\xC3O

C       F
Nossa senhora auxiliadora
Dm       F  G
Por tuas m\xE3os aqui estamos n\xF3s

C9        C/E
Caminha sempre ao nosso lado
F      G
O teu amor de m\xE3e sempre nos guiou
C/E     Em
De Dom Bosco e Mazzarello
F       G

Foste sempre intercessora
F G    C Am
Na miss\xE3o de evangelizar
F    G     C C7
E a sua vida aos jovens dedicar

 G11+ F    G
P\xF5e tua m\xE3o minha rainha

   C G    C/E C/G
P\xF5e tua m\xE3o antes da minha
 F      G
\xC9s nossa m\xE3e auxiliadora
   C C7 (F G)
Rogai por n\xF3s

C       F
Nossa senhora auxiliadora
Dm       F G5
Essa \xE9 a nossa m\xE3e e mestra
C      Am
Foste tu que tudo sempre v\xEA
F       G
E teus filhos sempre nos guiou

C/E     Em
De Dom Bosco e Mazzarello
F       G5
Foste sempre intercessora
F G    C Am
Na miss\xE3o de evangelizar
F    G5    C  C7
E a sua vida aos jovens dedicar`},{id:"d237",t:"Quando Estamos Unidos",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1gR7PqBjIa9zJ2pdKMnmDCCK0CGoqrqdo.pdf",cifra:`Quando    Estamos   Unidos

E B7    C#m    G#m    A  E B7

Aleluia,   Aleluia,   Aleluia. (2x)
F#m                  G#m    C#m             G#m

Quando   estamos   unidos,  est\xE1s  entre n\xF3s

A      F#m           B4  B

e nos falar\xE1s da  Tua  vida.

F#m          G#m   C#m         G#m

Este nosso  mundo    sentido  ter\xE1

A       F#m          B4  B
se Tua  palavra renovar.`},{id:"d238",t:"QUANDO TEU PAI REVELOU",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1F7ml9iTrK6eKxcSCjP43G08BBDe4S9yo.pdf",cifra:`QUANDO    TEU  PAI REVELOU

Quando Teu Pai revelou o segredo a Maria

Que, pela for\xE7a do Esp\xEDrito, conceberia
A ti Jesus, ela n\xE3o hesitou logo em responder

Fa\xE7a-se em mim, pobre serva o que a Deus aprouver
Hoje imitando a Maria que \xE9 imagem da Igreja

Nossa fam\xEDlia outra vez te recebe e deseja
Cheia de f\xE9, de esperan\xE7a e de amor

Dizer sim a Deus
Eis aqui os teus servos, Senhor!

Que a gra\xE7a de Deus, cres\xE7a em n\xF3s sem cessar!

E de ti nosso Pai, venha o Esp\xEDrito Santo de amor
Pra gerar e formar Cristo em n\xF3s

Por um decreto do Pai ela foi escolhida

Para gerar-te, \xF3 Senhor que \xE9s origem da vida
Cheia do Esp\xEDrito Santo no corpo e no cora\xE7\xE3o

Foi quem melhor cooperou com a tua miss\xE3o
Na comunh\xE3o  recebemos o Esp\xEDrito Santo

E vem contigo Jesus o teu Pai sacrossanto
Vamos agora ajudar-te no plano da salva\xE7\xE3o

Eis aqui os teus servos, Senhor!

REFR\xC3O

No cora\xE7\xE3o de Maria, no olhar doce e terno
Sempre tiveste na vida um apoio materno

Desde Bel\xE9m, Nazar\xE9, s\xF3 viveu para te servir
Quando morrias na cruz tua m\xE3e estava ali

M\xE3e amorosa  da Igreja quer ser nosso aux\xEDlio
Reproduzir no crist\xE3o as fei\xE7\xF5es de teu Filho

Como  ela fez em Can\xE1, nos convida a te obedecer
Eis aqui os teus servos, Senhor!`},{id:"d239",t:"Quanto tempo voc\xEA tem",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1bR4haCLFI5_Jx9FxK7p6A3gfilwps0AT.pdf",cifra:`Quanto tempo voc\xEA tem?

Intro: (Em , C , Em , C , Em , Bm , Am , Em , Bm , Am)

Em
  Passam os dias
  Bm         Am
As horas passam depressa bem diante dos seus olhos

Em       Bm         Am
  Voc\xEA diz: Tenho que zoar, curtir, aproveitar a vida
Em       Bm           Am

 Tenho todo tempo do mundo, todo tempo do mundo
Ser\xE1 ?
C          Am         D

 Ningu\xE9m sabe o dia ou hora nem nunca saber\xE1
Pense bem!
G          D/F#                Em  C
 Quanto tempo voc\xEA t\xEAm? Quanto tempo voc\xEA t\xEAm?

          G           D/F#
Ser\xE1 que voc\xEA sabe quanto dura a vida?
      Em

Isso n\xE3o d\xE1 pra dizer.
    C
Ningu\xE9m saber\xE1 .
Em         Bm                  Am

 Quanto tempo voc\xEA t\xEAm? Quanto tempo voc\xEA t\xEAm?
           C     Am            D
Tem que aproveitar o dom pra fazer o bem.

             Em , Bm , Am , Em , Bm , Am
Quanto tempo voc\xEA t\xEAm?
Em

Fa\xE7a o melhor
     Bm       Am
Fa\xE7a o que puder com a vida que Deus lhe deu
Em        Bm         Am

 O seu tempo \xE9 um talento, um dom , tem que fazer render
Em         Bm
 Tempo para servir a Deus

     Am
Para ajudar o irm\xE3o

Ver\xE1

C          Am         D
 Que um segundo vale ouro , n\xE3o v\xE1 desperdi\xE7ar

Pense bem!

Refr\xE3o

Em        D
Tantas vidas esperam por seu amor
Em           D         G

Tantas vidas que esperam por salva\xE7\xE3o
       D/F#      C       D
\xC9 preciso lutar enquanto h\xE1 tempo... Enquanto h\xE1 tempo!`},{id:"d240",t:"QUE SANTIDADE DE VIDA E",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Fv8LW5Ic1caUiFGl9gnGVHuXmAz5EeiJ.pdf",cifra:`QUE  SANTIDADE    DE VIDA

E
Que santidade de vida!
   F#m  B7 E
Que homens devemos ser!

          B
Pois se tudo no c\xE9u e na terra
    A E
Senhor chamar\xE1

Que respeito para com Deus!
  F#m B   E

Que luta devemos travar!
         B
No novo c\xE9u e na nova terra
    A E
iremos morar
B
Somos Senhor tua igreja
      A

que aguarda e apressa tua vinda
  E
gloriosa
           B
que o Senhor nos encontre em paz
   A  E
puros e santos

Que \xE9 feito da sua promessa?
  F#m  B   C#m B
perguntam e zombam de Deus

  E
Mas o Senhor vir\xE1
     B
ele n\xE3o tardar\xE1

     A
que eu seja santo, santo, santo
     E     B
pois Deus \xE9 santo, santo, santo
   E      A
que a santidade da minha vida
    B
apresse o Senhor

     E
e ele logo vir\xE1`},{id:"d241",t:"Que Santidade de Vida A",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1LxPZ-eWvtKqRPgjNPHrghtJOAP1SXtrO.pdf",cifra:`Que Santidade de Vida

      A          Bm   E   A
Que santidade de vida! Que homens devemos ser!
           E       D A
Pois se tudo no C\xE9u e na terra o Senhor chamar\xE1,
             Bm  E    A
que respeito para com Deus, que luta devemos travar!
          E     D A
No Novo C\xE9u e na Nova Terra iremos morar.

E
Somos, Senhor, Tua Igreja,
       D        A
que aguarda e apressa Tua vinda gloriosa.
            E     D A
Que o Senhor nos encontre em paz, puros e santos.
E

Somos, Senhor, Tua Igreja,
        D       A
que aguarda e apressa Tua vinda gloriosa.
            E     D A
Que o Senhor nos encontre em paz, puros e santos.

Que \xE9 feito da Sua promessa?
 Bm   E     A E
Perguntam e zombam de Deus!

    A      E/G#
Mas o Senhor vir\xE1, Ele n\xE3o tardar\xE1!
      D
Que eu seja santo, santo, santo,
     A     E
pois Deus \xE9 santo, santo, santo.
    A/G    D/F#
Que a santidade da minha vida
     E     A
apresse o Senhor e Ele logo vir\xE1
    A      E/G#
Mas o Senhor vir\xE1, Ele n\xE3o tardar\xE1!
      D
Que eu seja santo, santo, santo,
     A     E
pois Deus \xE9 santo, santo, santo.
     A/G   D/F#

Que a santidade da minha vida
     E     A
apresse o Senhor e Ele logo vir\xE1

E
Somos, Senhor, Tua Igreja,
       D        A
que aguarda e apressa Tua vinda gloriosa.
            E     D A
Que o Senhor nos encontre em paz, puros e santos.
E
Somos, Senhor, Tua Igreja,
       D        A
que aguarda e apressa Tua vinda gloriosa.
            E     D A
Que o Senhor nos encontre em paz, puros e santos.`},{id:"d242",t:"QUEM IMPEDIRA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1dQA-o_nSivorfwuRCEQSXVfj0LkNzbhE.pdf",cifra:`QUEM       IMPEDIRA?

Bm                   G

Quem   impedir\xE1?    Quem   impedir\xE1?

  D                      A/C#

Agindo  Deus,  quem    impedir\xE1?

      Bm                       G
N\xE3o  tenhas  medo,   Deus  contigo  est\xE1

    D                A/C#

Confia  nele, ele tudo  far\xE1

           Bm

Deus  livrou Daniel, da  cova  dos le\xF5es

           G
Tamb\xE9m    te livrar\xE1 de todas  as pris\xF5es

          D

Muralhas   cair\xE3o, todos  se render\xE3o

F#7

Pelo poder   da ora\xE7\xE3o`},{id:"d243",t:"QUEM IMPEDIR\xC1 Gm",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1IbDzlfo7RmGLX0LinEKl2h4ekQB2qhLv.pdf",cifra:`QUEM     IMPEDIR\xC1

Gm        Eb
Quem  impedir\xE1? Quem  impedir\xE1?
Bb        D7/4 D7
Agindo Deus, quem impedir\xE1?

Gm        Eb
N\xE3o tenhas medo, Deus contigo est\xE1

Bb         D7/4 D7
Confia nele, ele tudo far\xE1

    Gm
Deus livrou Daniel, da cova dos le\xF5es
  D#
Tamb\xE9m  te livrar\xE1 de todas as pris\xF5es
Bb        D7/4  D7
Muralhas ca\xEDr\xE3o,todos se renderam, pelo poder da ora\xE7\xE3o

Refr\xE3o

 Gm       Eb
N\xE3o tenho medo, Deus comigo est\xE1

Bb         D7/4 D7
Eu confio nele, ele tudo far\xE1

Gm
Deus livrou Daniel, da cova dos le\xF5es
  Eb
Tamb\xE9m  te livrar\xE1 de todas as pris\xF5es
Bb        D7/4  D7
Muralhas ca\xEDr\xE3o,todos se renderam, pelo poder da ora\xE7\xE3o`},{id:"d244",t:"QUERO CONFESSAR (B)",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1elt42ockJitlBSfUcK7Jg4ccYUKgQfYe.pdf",cifra:`QUERO       CONFESSAR

B7M            G#m        B7M         G#m
Quero  confessar   a ti,   ilumina  minh'alma

      C#m    F#         B     F#
Eu reconhe\xE7o:     sou  pecador!

B7M            G#m        B7M
Diante  de mim   eu sei   est\xE1  sempre   o meu
    G#m

pecado
        C#m    F#       B   F#

Foi contra  v\xF3s    que  eu pequei

G#m      E  F#
Kyrie  eleison

G#m        E  D#
Christe   eleison
E   D#m     C#m    F#    B   F#

Kyrie    ele   ei son`},{id:"d245",t:"QUERO CONFESSAR",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1vzzJBdaiZgyKol7uZp1i8VcDxPujQwml.pdf",cifra:`QUERO       CONFESSAR

Intro: F#m7   D  E  F#m7   D  E

A7+(9)       F#m7

Quero  confessar   a ti,

A7+(9)      F#m7

Ilumina  minh\xB4alma

     Bm7   E4 E     A  E4 E

Eu reconhe\xE7o:    sou  pecador!

A7+(9)        F#m7
Diante  de mim   eu sei

A7+(9)         F#m7

Est\xE1 sempre   o meu   pecado

      Bm7   E4 E       A E4 E

Foi contra  v\xF3s  que  eu  pequei

F#m7     D9  E

Kyrie eleison

F#m7     D9 C#9

Criste eleison

D9  C#m7   Bm7  E4  A

Kyrie  eleison`},{id:"d246",t:"Quero e Preciso",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ZGmONpZ49wVGPuFSUWZKGWmXQbl2FNtf.pdf",cifra:`Quero  e Preciso \u2013 Dunga

 G D/F#     Em            Em/D
EU SEI........TEU ESP\xCDRITO EST\xC1 AGINDO

       C                 Am            D
PASSO A PASSO SEI QUE ENCONTRAREI TUA VONTADE EM MINHA VIDA

G                  D/F#    Em           Em/D
ROMPE DENTRO EM MIM.......UM AMOR INOVADOR

     C             Am       D                       D7
SINTO GOSTO EM TUA PALAVRA, AMOR \xC0 H\xD3STIA CONSAGRADA

   G            D/F#      Em             Em/D  C
EU QUERO TE LOUVAR........COM TODO O MEU SER.......DE TODA MINHA

Am        D
ALMA MESMO  SEM ENTENDER.

    G         D/F#       Em      Em/D
PRECISO TE SEGUIR.......TEU AMOR VOU PERSEGUIR

   C         Am                D                        D7
EU ABRO TODO O MEU SER, TUA VONTADE TEM QUE ACONTECER.

   G D/F#         Em               Em/D     C          Am
EU SEI.......EU N\xC3O PERTEN\xC7O A ESTE MUNDO.......TENHO FOME E SEDE DO

          D
SENHOR ALIMENTO QUE VEM DO LUGAR QUE EU SOU

G             D/F# Em              Em/D
TREME O MEU SER........E TEME O MEU VIVER

   C        Am            D                       D7
EU SEI TU \xC9S O MEU SENHOR, DA MINHA VIDA \xC9S O SALVADOR`},{id:"d247",t:"Quero transformar numa can\xE7\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1tvD_95Eten3Bs-qvP3e2_JW6DqP2xsIA.pdf",cifra:`Quero    transformar       numa    can\xE7\xE3o

C                F             C    F
Quero  transformar   numa can\xE7\xE3o
    C            F               G
as juras  de  amor por  Ti,  meu Deus.
    C                Dm7       Em7   Dm7

Entraste  em  minha  vida sedutor,
F              D/F#           G7
j\xE1 n\xE3o  sei viver  sem  Teu  amor.

C                F    G             Em
Tudo  Te entreguei,   nada  me restou,
Am            Dm7 G           C    Gm7/D   Am7/E

livre  eu fiquei  para  Te  amar,   meu    Deus.

C7         F       G               Em
Tudo  me pediste,  nada  eu  Te neguei.
Am               Dm          F         G           C

Hoje  eu sou  feliz  assim.  Tenho  a Ti,  meu Deus.`},{id:"d248",t:"Qu\xE3o Grande \xE9s Tu",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1X4D3SQNeLb6sx68zc8PON0nF0W5M5JCz.pdf",cifra:`Qu\xE3o Grande  \xE9s Tu

                                     C          Dm
    C               Dm
                                Quando enfim, Jesus vier em gl\xF3ria
Senhor meu Deus, quando eu maravilhado
                                     G              C
     G              C
                                E ao lar celeste ent\xE3o me transportar
Fico a pensar nas obras de tuas m\xE3os.
                                     C          Dm
     C          Dm
                                Te adorarei. prostrado e para sempre:
No c\xE9u azul de estrelas pontilhado,
                                    G           C  C7
    G           C  C7
                                Qu\xE3o grande \xE9s tu, meu Deus, hei de cantar.
O teu poder mostrando a cria\xE7\xE3o.
     F      G    Em7 Am7
Ent\xE3o minh'alma canta a ti, Senhor:
        Dm  G         C C7
Qu\xE3o grande \xE9s tu! ... Qu\xE3o grande \xE9s tu.
      F     G    Em7 Am7
Ent\xE3o minh'alma canta a ti, Senhor:
            Dm        G C G
Qu\xE3o grande \xE9s tu! .... Qu\xE3o grande \xE9s tu.
    C               Dm

Quando a vagar nas matas e florestas
     G              C
O passaredo alegre ou\xE7o a cantar.

     C          Dm
Olhando os montes, vales e campinas,
    G           C  C7
Em tudo vejo o teu poder sem par.

Refr\xE3o

     C          Dm
Quando eu medito em seu amor t\xE3o grande,
     G              C
Seu Filho dando ao mundo pra salvar.

     C          Dm
Na cruz vertendo o seu precioso sangue,
    G           C  C7

Minh'alma pode assim purificar.

Refr\xE3o`},{id:"d249",t:"Raridade",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1sHYNFKjkdsK7_hDKb_zu3TiBE65tJLv8.pdf",cifra:`Raridade

D   A/C#   Bm4
N\xE3o consigo ir al\xE9m do teu olhar
     A    G
Tudo o que eu consigo \xE9 imaginar

   D/F# Em   A A
A riqueza que existe dentro de voc\xEA

D    A/C#  Bm4
O ouro eu consigo s\xF3 admirar
      A    G
Mas te olhando eu posso a Deus adorar
   D/F#  Em  A A Bm4
Sua alma \xE9 um bem que nunca envelhecer\xE1

   G
O pecado n\xE3o consegue esconder
D    A     Bm4
A marca de Jesus que existe em voc\xEA
    G     D
O que voc\xEA fez ou deixou de fazer
      A     Em
N\xE3o mudou o in\xCDcio, Deus escolheu voc\xEA
   D/F#   G    Bm9
Sua raridade n\xE3o est\xE1 naquilo que voc\xEA possui
     Em
Ou que sabe fazer
    D/F#      G
Isso \xE9 mist\xE9rio de Deus com voc\xEA

    D     A/C#  Bm4             B7      E     B/Eb   C#m
Voc\xEA \xE9 um espelho que reflete a imagem Voc\xEA \xE9 um espelho que reflete a imagem

do Senhor                       do Senhor
     A     G                        B      A
N\xE3o chore se o mundo ainda n\xE3o notou N\xE3o chore se o mundo ainda n\xE3o notou
       D/F# Em   A                     E/G#  F#m4
J\xE1 \xE9 o bastante Deus reconhecer o seu J\xE1 \xE9 o bastante Deus reconhecer o seu
valor                           valor
A   D       A/C#  Bm4           B   E/G#  B/Eb      C#m
Voc\xEA \xE9 precioso mais raro que o ouro puro Voc\xEA \xE9 precioso mais raro que o ouro puro
de Ofir                         de Ofir
    A       G                       B       A
Se voc\xEA desistiu Deus n\xE3o vai desistir Se voc\xEA desistiu Deus n\xE3o vai desistir
    D/F#  Em                       E/G#   F#m4
Ele est\xE1 aqui pra te levantar   Ele est\xE1 aqui pra te levantar
    A A Em                          B  F#m4 A
Se o mundo te fizer cair        Se o mundo te fizer cair`},{id:"d250",t:"REALIZA UM MILAGRE EM MIM",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1jhN3s1PPF2-zsx-pbQl3ZSc0PNtAveeN.pdf",cifra:`REALIZA       UM     MILAGRE         EM    MIM

Dm        C           Bb
Eu sei que Tu \xE9s o Deus do imposs\xEDvel

Dm        C         Bb
Eu sei que Tu \xE9s o Deus de milagres (2x)

F        C

Tu que ouves a nossa ora\xE7\xE3o
Gm           Dm
Tu que escutas o nosso clamor
F           C

Tu que sondas nosso  cora\xE7\xE3o
Gm          Bb           C
Tu que sabes do que precisamos  Senhor

              F    C
Realiza o milagre  em  mim   Jesus
               Dm     Bb

Realiza o milagre  em  mim,  Senhor
      F             C        Dm     Bb
Eu necessito  da tua  interven\xE7\xE3o  na minha   vida.`},{id:"d251",t:"RECEBE ADORA\xC7\xC3O C",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/15pASv_zYEZHYWS1iPcoSs5JdG5biOuyv.pdf",cifra:`RECEBE  ADORA\xC7\xC3O

Intro: (F   C/E   Dm - 2x)  F/G  F9/G

C        G/B       D6/B
   Seja no silencio
  F       F/G  F9/G
Ou numa can\xE7\xE3o de amor
 F            C/E
O que mais quero neste momento
  Dm           F/G  F9/G C5/G D4/G C5/G
\xC9 entoar a Ti meu louvor
C         G/B   D6/B
   Ap\xF3s a comunh\xE3o, eu sei
  F           F/G   F9/G
Que Tu estas dentro de mim
  F        C/E    Am

E ao meu redor eu posso sentir
 Dm         F/G     F9/G
H\xE1 anjos a Te adorar
 C/E  Am    Am/G   A7(9)/G Am/G
Ent\xE3o o que fazer se n\xE3o me unir
  G/B     C C4(6)  C     F
Aos anjos em  a...do...ra...\xE7\xE3o
   Dm        Am       F        G
Pra render a Ti Senhor toda a minha gratid\xE3o

 C/E       C7+   C     F
      Recebe ado...ra...\xE7\xE3o
 G    Am
Recebe adora\xE7\xE3o, Senhor
 F            C/E
Mist\xE9rio de Amor de um Deus
       Dm           F/G  F9/G
 Que se fez p\xE3o para nos alimentar

 C/E       C7+   C     F
      Recebe ado...ra...\xE7\xE3o
 G     Am   Am/G   A7(9)/G Am/G

Recebe adora\xE7\xE3o, Senhor
   F        C/E  C7+
Tabern\xE1culo agora eu sou
C   C7  C  Dm  D5(9) Dm
Pois recebi em co...munh\xE3o
F/G          F9/G    F
O corpo e o sangue do meu Senhor`},{id:"d252",t:"Rendido Estou",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1MBtWC6RlECiesvt_9FG045IUxU-r33BU.pdf",cifra:`Rendido Estou

     D                            D   A
Toma-me rendido estou           Minha vida dou a ti senhor
Bm                              Bm      ( Gm F#m )
Aos p\xE9s da cruz me encontrei    Rendido a ti estou
A    G    D                     G D/F# G A
O que tenho te entrego oh Deus  E pra sempre cantarei
D                                 G    A4
Vem limpar as minhas m\xE3os       Faz em mim teu querer
Bm
Purificar meu cora\xE7\xE3o             D   A
A      G      D                 Minha vida dou a ti senhor
Que eu ande em tudo que tu tens pra mim Bm ( Gm F#m )
                                Rendido a ti estou
 G    D    A4 A A9 Bm           G D/F# G A

\xD4 \xF4 \xF4 eis-me aqui rendido estou E pra sempre cantarei
 G   Bm   A4  D                   G    A4 D
\xD4 \xF4 \xF4 eu sou teu e tu \xE9s meu, jesus Faz em mim teu querer

D                                G   D     A4 A A9 Bm
Meus momentos e os dias meus    \xD4 \xF4 \xF4 eis-me aqui rendido estou
Bm                               G   Bm   A4 A A9 A
Meu respirar e meu viver        \xD4 \xF4 \xF4 eu sou teu e tu \xE9s meu
A     G   D
Que sejam todos pra ti oh Deus   G   D     A4 A A9 Bm
                                \xD4 \xF4 \xF4 eis-me aqui rendido estou
 G    D    A4 A A9 Bm            G   Bm   A4
\xD4 \xF4 \xF4 eis-me aqui rendido estou \xD4 \xF4 \xF4 eu sou teu e tu \xE9s meu
 G   Bm   A4 A A9 A
\xD4 \xF4 \xF4 eu sou teu e tu \xE9s meu      D   A
                                Minha vida dou a ti senhor
 G   D     A4 A A9 Bm           Bm
\xD4 \xF4 \xF4 eis-me aqui rendido estou Rendido a ti estou
 G   Bm   A4                    G D/F# G A
\xD4 \xF4 \xF4 eu sou teu e tu \xE9s meu    E pra sempre cantarei
                                  G    A4
 G   D   A Em                   Faz em mim teu querer
\xD4 \xF4 \xF4, \xD4 \xF4 \xF4 \xF4 , \xD4 \xF4 \xF4, \xD4 \xF4 \xF4 \xF4
 G   D   A4                       D   A
\xD4 \xF4 \xF4, \xD4 \xF4 \xF4 \xF4 , \xD4 \xF4 \xF4          Minha vida dou a ti senhor
                                Bm     ( Gm F#m )
                                Rendido a ti estou
                                G D/F# G A
                                E pra sempre cantarei

                                  G    A4 D
                                Faz em mim teu querer`},{id:"d253",t:"Restaura Nossa Casa Senhor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1iUzp1LX5o5rO0KcrOiYQtHR3jqYu6wPm.pdf",cifra:`Restaura        Nossa     Casa    Senhor

  Bb           C      Dm

Restaura    a  nossa   casa   senhor    (4x)

   F      C/E      Dm

Sua  ben\xE7\xE3o     derrama     aqui

     Bb      C       Dm

Nossa    casa  vem    reconstruir    (2x)

     Gm          Dm

Com    sinais  e prod\xEDgios

     Gm       Bb      C      Dm

Sobre   n\xF3s,   derrama     o seu   Esp\xEDrito   (2x)`},{id:"d254",t:"Reunidos Aqui & A Alegria",tom:"",m:"Entrada",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1EyJ5DSLK49DhTxkScFoh1mrPe4MJKiug.pdf",cifra:`Reunidos Aqui / A Alegria

       G                   C

Reunidos aqui s\xF3 pra louvar ao Senhor,
         D7     G  D7
Novamente aqui, em uni\xE3o.

     G
Algo bom vai acontecer,
    G7           C
Algo bom Deus tem pra n\xF3s,

       D7              G D7
Reunidos aqui s\xF3 pra louvar o Senhor.

G    G7
A Alegria est\xE1 no Cora\xE7\xE3o,
 C       G

de quem j\xE1 conhece a JESUS.
G    Em
A Verdadeira Paz s\xF3 tem aquele
 A     D7

que j\xE1 conhece a JESUS.

G       G7    C    Cm/F

O Sentimento mais Precioso que v\xEAm de nosso SENHOR.
  G    D        G  C D
\xC9 o Amor que s\xF3 tem quem j\xE1 conhece a JESUS.
   G       G7

Posso Pisar numa Tropa e Saltar as Muralhas
 C  Cm/F
Aleluia, Aleluia!

   G       G7
Posso Pisar numa Tropa e Saltar as Muralhas
 C  Cm/F
Aleluia, Aleluia!

G      G7
Ele \xE9 a Rocha da minha Salva\xE7\xE3o,
  C    Cm/F

com Ele n\xE3o h\xE1 8mais Condena\xE7\xE3o.
   G       G7
Posso Pisar numa Tropa e Saltar as Muralhas

 C  Cm/F
Aleluia, Aleluia!
 G   C G  G Em  A D7
Aleluia, Aleluia, Aleluia, Aleluia.`},{id:"d255",t:"Reunidos aqui",tom:"G",m:"Entrada",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1fctHIFguiGmCbQjdZu_s8ITT0ny9Wtxu.pdf",cifra:`Reunidos       aqui

Tom:   G

G                        C

Reunidos     aqui   s\xF3 pra   louvar   ao  Senhor,

         D7       G   D7

novamente       aqui,  em   uni\xE3o.

    G

Algo  bom    vai  acontecer,

    G7             C

algo  bom    Deus   tem    pra  n\xF3s,

   D7                     G

Reunidos     aqui   s\xF3 pra   louvar   o Senhor.`},{id:"d256",t:"Rumo ao altar",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/13QQBRJtrS_BRwX2zdqVfVdbVDI7G78io.pdf",cifra:`Rumo  ao  altar

A           E/A
Quando entro nesta prociss\xE3o,
   D/A        A5+/4

N\xE3o consigo explicar, entrego o meu cora\xE7\xE3o.
   A9
Que somente quer te amar,
E/G#  F#m     B7/13    B  Bm7
Como a noiva que cami........nha rumo ao altar
 Bm7/-5  E     A     D/F#   E/G#
E o noivo a te esperar.

A           E/A
Quando entro nesta prociss\xE3o,
   D/A        Dm7      G
N\xE3o consigo explicar, entrego o meu cora\xE7\xE3o.
   A9

Que somente quer te amar,
E/G#  F#m     B7/13    B  Bm7
Como a noiva que cami........nha rumo ao altar
  Dm6   E      A
E o noivo a te esperar. (2x)

( Em  A/C# )

  D E/D D         Bm          E
Jesus     Teu Corpo e Sangue me sustenta
E/D C#m             C#m
Je sus toda minh'alma se estremece.
 D A/C#    Bm           A/C#  D   E/D   D  E/D

Jesus \xE9s a raz\xE3o da minha vida, \xE9s o amor, o amor o
A/C# D         Bm       E
Je sus Teu Corpo e Sangue me sustenta
E/D C#m             C#m
Je sus toda minh'alma se estremece.
 D A/C#   Bm
Jesus \xE9s a raz\xE3o da minha vida,
A/C#  D   Bm       E
O  motivo maior do meu viver.

Quando entro....

 E4  E  D/F#  E/G#

Viver...

       A9       A
N\xE3o, n\xE3o h\xE1 momento igual a este.
    G#m       C#  C#/F

N\xE3o, n\xE3o h\xE1 lugar melhor.
   F#m     F#m/E   A/C#   D      A/C#
N\xE3o h\xE1 nada que se possa compa rar a esse amor,
   Bm     E E/B E
Que me faz feliz.

    A9     D/A  E/A    A9
Somos a noiva que caminha rumo ao altar
  G9     D/F#  E     A9
E o noivo bem aqui a nos esperar.`},{id:"d257",t:"Sacramento da Comunh\xE3o",tom:"",m:"Comunh\xE3o",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BIx6lt6TByAxABTdqBgoAHnNCKxT2Vjo.pdf",cifra:`Sacramento da Comunh\xE3o

D          A/C#    Bm       Bm/A
Senhor, quando te vejo no sacramento da comunh\xE3o

 G        A      D    A/C# Bm
Sinto o c\xE9u se abrir e uma luz a me atin gir
Em9          G     Em        A
Esfriando minha cabe\xE7a e esquentando meu cora\xE7\xE3o
D            A/C#    Bm      Bm/A
Senhor, gra\xE7as e louvores sejam dados a todo momento
G          A      D    A/C# Bm
Quero te louvar na dor, na alegria e no sofrimento
  Em     A    D  D/F#   G
E se em meio \xE0 tribula\xE7\xE3o, eu me esquecer de ti
Em       G         A
Ilumina minhas trevas com Tua luz

D  A/C#       Bm          Bm/A
Jesus, fonte de miseric\xF3rdia que jorra do templo
G  D/F#      Em  A

Jesus, O Filho da Rainha
   D  Bb\xB0 Bm      G    C6
Jesus....us, rosto divino do homem
  D Em   A     D
Jesus, rosto humano de Deus

G                A/G
Chego muitas vezes em Tua casa, meu Senhor
F#m         Bm    Bm/A
Triste, abatido, precisando de amor
     G             C
Mas depois da comunh\xE3o Tua casa \xE9 meu cora\xE7\xE3o
   Em      G    A
Ent\xE3o sinto o c\xE9u dentro de mim

     G                 A/G

N\xE3o comungo porque mere\xE7o, isso eu sei, oh meu Senhor
F#m4     B
Comungo pois preciso de ti
 Em           C
Quando faltei \xE0 missa, fugia de mim e de Ti
  Em     G         A
Mas agora eu voltei, por favor aceita-me`},{id:"d258",t:"salmo 103 - Enviai o vosso Esp\xEDrito Senhor e da terra toda a face renovai - 02",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1OZX4uFv2FPlAVG3XrPsln5lNoTUEKdH_.pdf",cifra:`SALMO  103

     C             Em        Am
ENVIAI O VOSSO  ESP\xCDRITO, SENHOR,

     F              G7          C
E DA TERRA  TODA  A FACE  RENOVAI.

       Dm                         G
1. BENDIZE, \xD3 MINHA  ALMA, AO  SENHOR!
         C               Em                Am
  \xD3 MEU  DEUS  E MEU  SENHOR,  COMO   SOIS GRANDE!

              Dm                                G
  QU\xC3O   NUMEROSAS,   OH  SENHOR,  S\xC3O  VOSSAS  OBRAS!
                F              Dm           G
  ENCHEU-SE   A TERRA  COM  AS  VOSSAS  CRIATURAS.

       Dm                            G
2. SE TIRAIS O SEU RESPIRO,  ELAS PERECEM
    C                Em            Am

  E VOLTAM   PARA  O P\xD3 DE ONDE   VIERAM.
       Dm                         G
  ENVIAIS  O VOSSO  ESP\xCDRITO  E RENASCEM
        F            Dm      G

  E DA TERRA   TODA  FACE RENOVAIS.

         Dm                            G

3. QUE A GL\xD3RIA  DO SENHOR   PERDURE   SEMPRE
      C              Em             Am
  E ALEGRE-SE   O SENHOR   EM SUAS  OBRAS!
         Dm                            G

  HOJE,  SEJA-LHE  AGRAD\xC1VEL   O  MEU CANTO,
            F                Dm           G
  POIS O SENHOR   \xC9 A MINHA  GRANDE   ALEGRIA!`},{id:"d259",t:"Salmo 103 Pentecostes Eliana Ribeiro",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1xnZs-GYsuDcxeDHfgJDY5Oc0ARwId6R_.pdf",cifra:`SALMO    103

A
D              E         A  G/B A/C#
Enviai o vosso espirito Senhor,
     D          E         A  G/B A/C#
e da terra toda face renovai
D                C#      F#m  F#m/E
Enviai o vosso espirito Senhor,
    A           E       A   G/B  A/C#   A4
e da terra toda face renovai

Am               G          F
Bendize \xF3h minha alma ao Senhor
Am                  G              F
Oh meu deus e meu Senhor como sois grande
Am                  G              F
Qu\xE3o numerosas \xF3h Senhor s\xE3o vossas obras
Am                       G          E
Encheu-se a terra com as vossas criaturas

Refr\xE3o

Am               G            F
Se tirais o seu respiro elas perecem
Am               G          F
E voltam para o p\xF3 de onde vieram
Am               G          F
Enviais o vosso espirito e renascem
Am               G          E
E da terra toda face renovai

Refr\xE3o

Am               G              F
Que a gl\xF3ria do Senhor perdure sempre
Am               G           F
Q alegre-se o Senhor em suas obras
Am                  G             F
Que hoje seja-lhe agrad\xE1vel o meu canto
Am                  G           F
Pois o Senhor \xE9 minha grande alegria

Refr\xE3o`},{id:"d260",t:"SALMO 121",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Uta_ZseHPzfsanIfUuIJeedmaNm06zXn.pdf",cifra:`SALMO     121

   G    D   Em                  Em     C   Bm
Que alegria, quando me disseram A sede da justi\xE7a l\xE1 est\xE1

 C   Am D7 G                      C Am  D7
"Vamos \xE0 casa do Senhor"!       E o trono de Davi

                                 Em      C   Bm
   Em     C      Bm             Rogai que viva em paz Jerusal\xE9m

Que alegria, quando ouvi que me     C   Am  D7
disseram                        E em seguran\xE7a os que te amam!

 C  Am    D7
'vamos \xE0 casa do Senhor!'
 Em     C    Bm                   Em    C      Bm

E agora nossos p\xE9s j\xE1 se det\xEAm  Que a paz habite dentro de teus muros
   C  Am  D7                        C  Am   D7

Jerusal\xE9m, em tuas portas       Tranquilidade em teus pal\xE1cios!
                                  Em     C     Bm

                                Por amor a meus irm\xE3os e meus amigos
  Em     C    Bm                    C Am   D7

Para l\xE1 sobem as tribos de Israel Pe\xE7o: 'a paz esteja em ti!'
 C  Am  D7

As tribos do Senhor
   Em      C   Bm                 Em     C    Bm

Para louvar, segundo a lei de Israel Pelo amor que tenho \xE0 casa do Senhor
 C  Am  D7                         C Am  D7

O nome do Senhor                Eu te desejo todo bem!`},{id:"d261",t:"SALMO 19 Junho 2011",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ZCayhieRB0AnLu8Tgyew3SCzRtSyIEVg.pdf",cifra:`SALMO 19/06/2011

   G     D/F#        Em7          D4 D
\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!
   G     D/F#        Em7 C    D  G
\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!
      C            Cm7          G
\u2014 Sede bendito, Senhor Deus de nossos pais.
       Am7         C            D  C/E D/F#
\u2014 Sede bendito, Senhor Deus de nossos pais. (refr.)

\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!
\u2014 Sede bendito, nome santo e glorioso.
\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!
\u2014 No templo santo onde refulge a vossa gl\xF3ria.
\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!
\u2014 E em vosso trono de poder vitorioso.
\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!
\u2014 Sede bendito, que sondais as profundezas

\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!

\u2014 E superior aos querubins vos assentais.

\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!

\u2014 Sede bendito no celeste firmamento.

\u2014 A v\xF3s louvor, honra e gl\xF3ria eternamente!`},{id:"d262",t:"Salmo 22 (D)",tom:"D",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1lYnHUtw2e2CaphYNt0WASu4eDkwo8q0F.pdf",cifra:`Salmo     22

Tom: D

  D             F#m
\u2014 O Senhor \xE9 o pastor que me conduz;
       G   Em     A
n\xE3o me falta coisa alguma! (2x)

  Bm           G           A
\u2014 O Senhor \xE9 o pastor que me conduz;
                G

N\xE3o me falta coisa alguma.
Bm             G         A
Pelos prados e campinas e verdejantes,
               G
Ele me leva a descansar.
Bm              G           A
Para as \xE1guas repousantes me encaminha,
                 G  A
E restaura as minhas for\xE7as.

  Bm             G         A
\u2014 Ele me guia no caminho mais seguro,
                G
Pela honra do seu nome.
Bm                   G      A
Mesmo que eu passo pelo vale tenebroso,

                G
Nenhum mal eu temerei.,
Bm                G        A
Estais comigo com bast\xE3o e com cajado,
               G   A
Eles me d\xE3o a seguran\xE7a!

  Bm             G       A
\u2014 Preparais \xE0 minha frente uma mesa,
              G
Bem \xE0 vista do inimigo;
Bm           G         A
Com \xF3leo v\xF3s ungis minha cabe\xE7a,
                G   A
E o meu c\xE1lice transborda.

  Bm            G           A

\u2014 Felicidade e todo bem h\xE3o de seguir-me,
              G
Por toda a minha vida;
Bm            G       A
E, na casa do Senhor, habitarei
            G   A
Pelos tempos infinitos.`},{id:"d263",t:"Salmo 22 (E)",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1pQqkIoUUSzisBHo_C8qO6eRRKw3Y0Ysg.pdf",cifra:`Salmo     22

    E          G#m

O Senhor \xE9 o pastor que me conduz
         A   F#m    B    B7

N\xE3o me  falta coisa alguma!

    C#m       A     B                  Preparais \xE0 minha frente uma mesa

O Senhor \xE9 o pastor que me conduz                    A
                A                      Bem \xE0 vista do inimigo
N\xE3o me falta coisa alguma              C#m         A         B

     C#m       A        B              Com \xF3leo v\xF3s ungis minha cabe\xE7a
Pelos prados e campinas e verdejantes                 A  B
             A                         E o meu c\xE1lice transborda

Ele me leva a descansar
     C#m       A            B          REFR\xC3O
Para as \xE1guas repousantes me encaminha
                 A  B

E restaura as minhas for\xE7as            C#m            A          B
                                       Felicidade e todo bem h\xE3o de seguir-me
                                                     A

REFR\xC3O                                 Por toda a minha vida
                                       C#m          A        B
                                       E, na casa do Senhor, habitarei

      C#m      A         B                        A   B
Ele me guia no caminho mais seguro     Pelos tempos infinitos
                A

Pela honra do seu nome
   C#m                A      B
Mesmo que eu passo pelo vale tenebroso

                A
Nenhum mal eu temerei
C#m               A       B

Estais comigo com bast\xE3o e com cajado
               A  B
Eles me d\xE3o a seguran\xE7a!

REFR\xC3O

C#m             A        B`},{id:"d264",t:"Salmo 22 \u2013 Pelos prados",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1nCP9uz_HuX5l19YEn3h81oOx-5rryfNf.pdf",cifra:`Salmo   22  \u2013 Pelos   prados

  C    Am          F Fm  C   Em
Pelos prados e campinas verdejantes eu vou \xE9 o Senhor que me
F    G     C     Am    F Fm

Leva a descansar junto \xE0s fontes de \xE1guas puras repousantes
 C    Em    F   G
Eu vou minhas for\xE7as o Senhor vai animar

(refr\xE3o)
 F  G  C C/B Am Am/G    F    G
Tu \xE9s Senhor o meu Pastor por isso nada em minha vida
  C C7 F G  C    Am    Dm

Faltar\xE1 tu \xE9s Senhor o meu Pastor por isso nada em
  G   C
Minha vida faltar\xE1

  C     Am    F Fm C    Em
Nos caminhos mais seguros junto d\xB4ele eu vou e pra sempre o
 F    G     C    Am    F Fm
Seu nome eu honrarei se eu encontro mil abismo nos caminhos

 C   Em    F     G
Eu vou seguran\xE7a sempre tenho em suas m\xE3os

(refr\xE3o)

  C     Am   F Fm  C  Em
Ao banquete em sua casa muito alegre eu vou um lugar em sua
F    G   C    Am    F Fm  C

Mesa me preparou ele unge minha fronte e me faz ser feliz e
  Em    F    G
Transborda minha ta\xE7a em seu amor

(refr\xE3o)

  C    Am    F Fm C   Em
Com alegria e esperan\xE7a caminhando eu vou minha vida est\xE1

F     G    C   Am   F Fm C
Sempre em suas m\xE3os e na casa do Senhor eu irei habitar e
  Em    F    G
Este canto para sempre irei cantar

(refr\xE3o)
 F  G  C C/B Am Am/G    F    G

Tu \xE9s Senhor o meu Pastor por isso nada em minha vida
  C C7 F G  C    Am    Dm
Faltar\xE1 tu \xE9s Senhor o meu Pastor por isso nada em
  G   C    F   C
Minha vida faltar\xE1 nada faltar\xE1a`},{id:"d265",t:"Salmo 92 Cristo Rei",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1qxRbpMrzRMAQVlfQuw0Kdz9OY7cLm_QS.pdf",cifra:`Salmo   92

       B        E        B G#m  C#m7  F#  B  F#
Deus \xE9 Rei e se vestiu de majestade,/ gl\xF3ria ao Senhor!
      B         E        B G#m  C#m7  F#  B
Deus \xE9 Rei e se vestiu de majestade,/ gl\xF3ria ao Senhor!

    B      G#m7    C#m7
\u2014 Deus \xE9 Rei e se vestiu de majestade,/
   F#            B

revestiu-se de poder e de esplendor!
    G#m           C#m7
\u2014 Deus \xE9 Rei e se vestiu de majestade,/
  F#             B

revestiu-se de poder e de esplendor! (ref)

    B     G#m7     C#m7
\u2014 V\xF3s firmastes o universo inabal\xE1vel,/

   F#            B
v\xF3s firmastes vosso trono desde a origem,/
    G#m           C#m7
desde sempre, \xF3 Senhor, v\xF3s existis!

  F#             B
desde sempre, \xF3 Senhor, v\xF3s existis!

    B     G#m7     C#m7
\u2014 Verdadeiros s\xE3o os vossos testemunhos,/

   F#            B
refulge a santidade em vossa casa,/
    G#m           C#m7
pelos s\xE9culos dos s\xE9culos, Senhor!

  F#             B
pelos s\xE9culos dos s\xE9culos, Senhor!`},{id:"d266",t:"SALMO 95",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1W5kBdMmPEfvRsfnYqTubk4hP1h21pH81.pdf",cifra:`SALMO   95 (96)

      B     E      B G#m C#m7        F#    B F#

Hoje nasceu para n\xF3s o Salvador, que \xE9 Cristo Senhor.
      B     E      B G#m C#m7        F#    B F#
Hoje nasceu para n\xF3s o Salvador, que \xE9 Cristo Senhor.

  B     G#m          C#m7
Cantai ao Senhor Deus um canto novo
  F#                   B
Cantai ao Senhor Deus, \xF3 terra inteira
  G#m              C#m7
Cantai e Bendizei Seu Santo Nome
   F#                B       F#
Cantai e Bendizei Seu Santo Nome

B     G#m     C#m7
Dia ap\xF3s dia anunciai sua salva\xE7\xE3o
F#                     B
Manifestai a sua Gl\xF3ria entre as na\xE7\xF5es
       G#m                C#m7
E, entre os povos do universo, seus prod\xEDgios
        F#                B       F#
E, entre os povos do universo, seus prod\xEDgios

B     G#m     C#m7
O c\xE9u se rejubile e exulte a terra
F#                        B
Aplauda o mar com o que vive em suas \xE1guas
   G#m              C#m7
Os campos com seus frutos rejubilem

   F#             B     F#
E exultem as florestas e as matas

     B     G#m        C#m7
Na presen\xE7a do Senhor, pois Ele vem
     F#               B
Porque vem para julgar a Terra inteira
     G#m             C#m7
Governar\xE1 o mundo todo com justi\xE7a
   F#             B     F#
E os povos julgar\xE1 com lealdade`},{id:"d267",t:"SALMO ISAIAS 12",tom:"",m:"Salmo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1nU2a_jctcGLWSH1BjoFGsLSW-5HhaxS2.pdf",cifra:`SALMO    ISAIAS  12

      F     Dm
Com alegria bebereis,

        B         C   C7
Do manancial da salva\xE7\xE3o!
      F     Dm

Com alegria bebereis,
        B      C    F
Do manancial da salva\xE7\xE3o!

     B                   F

Eis o Deus meu Salvador, eu confio e nada temo
     B                   C
O Senhor \xE9 minha for\xE7a, meu louvor e salva\xE7\xE3o

B          F             B        C   C7
Com alegria bebereis do manancial da salva\xE7\xE3o

     B                F
E direis naquele dia, "Dai louvores ao Senhor"
    B                   C

Invocai seu santo nome, anunciai suas maravilhas
B           F               B          C     C7
Entre os povos proclamai que seu nome \xE9 mais sublime

        B                          F

Louvai cantando ao nosso Deus, que fez prod\xEDgios e portentos
    B                    C
Publicai em toda a terra suas grandes maravilhas!

    B                  F
Exultai cantando alegres, habitantes de Si\xE3o
         B            F        B          C  C7

Porque \xE9 grande em vosso meio o Deus Santo de Israel`},{id:"d268",t:"SANTO G",tom:"",m:"Santo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1PpOocPy2EcQM5NEbG7mJDbKzZ8efqvgm.pdf",cifra:`SANTO

G        Bm7     C
Santo,  santo,  santo
Em7                D4  D
Senhor  Deus  do universo

G           Bm7         C                Em7  D
O c\xE9u  e a terra  proclamam   vossa  gloria

G        D/F#     Em7       Bm7
Hosana  (hosana)  hosana  (hosana)
C9             G/B D4  D
Hosana  nas alturas

G         D/F#    Em7        Bm7
Hosana  (hosana)  hosana  (hosana)
C9              D G
Hosana  nas alturas

Am7              Bm7          D/F#    Em7
Bendito  o que  vem  em nome  do senhor
C9              D  E4  E
Hosana  nas alturas

A         E/G#    F#m7       C#m7
Hosana  (hosana)  hosana  (hosana)
D9              A/C#  E4 E
Hosana  nas alturas

A         E/G#     F#m7     C#m7
Hosana  (hosana)  hosana  (hosana)
D9              E A  D A

Hosana  nas alturas`},{id:"d269",t:"SANTO AMOR E ADORA\xC7\xC3O C",tom:"",m:"Santo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1M4AjyVHEo1A8Xlt1zba95Kx30T2qsXf2.pdf",cifra:`SANTO    - AMOR   E ADORA\xC7\xC3O

C     Em7      F

Santo,  santo, santo
Am7            G4  G

Senhor  Deus   do universo
C        Em7       F          Am7    G

O c\xE9u  e a terra proclamam    vossa  gl\xF3ria

C      G/B     Am7       Em7

Hosana    (hosana)   hosana    (hosana)
F9         C/E  G4  G

Hosana    nas  alturas

Dm7           Em7        G/B    Am7
Bendito  o que  vem  em  nome   do  senhor

F9         G   A4 A
Hosana   nas alturas

D      A/C#    Bm7       F#m7
Hosana   (hosana)  hosana   (hosana)

G9          D/F#  A4  A
Hosana   nas alturas

D      A/C#     Bm7      F#m7

Hosana   (hosana)  hosana   (hosana)
G9          A D  G D
Hosana   nas alturas`},{id:"d270",t:"SANTO 2 AMOR E ADORA\xC7\xC3O C",tom:"",m:"Santo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1bOG7cRjlpZhh5kefJqpPyIDS0SVSQkar.pdf",cifra:`SANTO    2 - AMOR   E ADORA\xC7\xC3O

 G     D/F#    C       D

Santo   santo    san....anto
 G    D/F#         D/C   C   D/C   C

Senhor   Deus   do  universo

F            C          G

C\xE9us  e terra proclamam     a vossa gl\xF3ria
F     C      D

Hosana   nas alturas
F         C          G

Bendito  o que  vem  em  nome   do  Senhor
F     C     D
Hosana   nas alturas`},{id:"d271",t:"SANTO 2 E CORDEIRO",tom:"",m:"Cordeiro",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/19WqjJugPbg0UHTe6ne9w8F3UAEGZcrQC.pdf",cifra:`SANTO    2 - AMOR   E ADORA\xC7\xC3O

 G     D/F#    C       D

Santo   santo    san....anto
 G    D/F#         D/C   C   D/C   C

Senhor   Deus   do  universo

F            C          G

C\xE9us  e terra proclamam     a vossa gl\xF3ria
F     C      D

Hosana   nas alturas
F         C          G

Bendito  o que  vem  em  nome   do  Senhor
F     C     D
Hosana   nas alturas

         Cordeiro      de  Deus    \u2013  Shallon

 G             Bm7      C9 D4  D
Cordeiro de Deus que tirais o pecado do
 C9     D4   D
mundo, tende piedade

 G              Bm7     C9 D4   D
Cordeiro de Deus que tirais o pecado do

 C9     D4   D
mundo, tende piedade

Em             Bm            C D
Cordeiro de Deus que tirais o pecado do mundo
      G  D/F#   C9 D
Dai-nos a paz, dai-nos a paz

     G D/F#   C9 D
Dai-nos a vossa paz, dai-nos a paz`},{id:"d272",t:"SANTO CAPELLA Bm",tom:"",m:"Santo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1HjZ15INqwQ4H__EuVEHluC_ddmip0i2Y.pdf",cifra:`SANTO       CAPELLA

 Bm7        F#m7          G9
Santo, Santo, Santo \xE9 o Senhor, Senhor Deus

   Bm7  A9
do universo

D9           A9        G9
O c\xE9u e a terra proclamam a vossa gl\xF3ria

Bm7         F#m7          G9
Santo, Santo, Santo \xE9 o Senhor, Senhor Deus
  Bm7  A9
do universo

D9           A9        G9
O c\xE9u e a terra proclamam a vossa gl\xF3ria

 Bm7    A9   G9
Hosana no alto c\xE9u

 Bm7           F#m7   G9     Bm7  A9
Bendito \xE9 aquele que vem , em nome do senhor

 Bm7    A9       G9  Bm7     A9
Hosana, Hosana no alto c\xE9u. Hosana, Hosana no
   B9

alto c\xE9u

E9        B9          F#m7
Santo, santo, santo \xE9 o Senhor, Senhor Deus
    C#m  B9
do universo

E9          B9         F#m7
O c\xE9u e a terra proclamam a vossa gl\xF3ria
 A9    B9   E9
Hosana no alto c\xE9u`},{id:"d273",t:"SANTO \u2013 PADRE CLEIDIMAR - TOM G",tom:"G",m:"Santo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1sOFVGXvrw8MXH6Rtbh2u62W-xqW7xq5t.pdf",cifra:`SANTO    \u2013 PADRE   CLEIDIMAR     - TOM  G

[Intro]  D  Bm   G   C  G

         D  Bm   G   Em  Bm   A

 G    D    Bm     G                    A
Saaanto,  santo,  santo  \xE9  o Senhor,  Deus  do
universo

 G  D      Bm      G                   A
Saaanto,  santo,  santo  \xE9  o Senhor,  Deus  do
universo

D/F#            G         A/G
Os c\xE9us  e a  terra  proclamam  a  Vossa gl\xF3ria!
  Em7          D/F#     G               A
Hosana  nas alturas,   hosana  nas  alturas!
D/F#           G        A/G

Os c\xE9us  e a  terra  proclamam  a  Vossa gl\xF3ria!
  Em7           Bm       G             A
Hosana  nas alturas,   hosana  nas  alturas!

 G  D/F#    Bm     G                    A
Saaanto,  santo,  santo  \xE9  o Senhor,  Deus  do
universo
 G  D/F#      Bm      G                  A
Saaanto,  santo,  santo  \xE9  o Senhor,  Deus  do

universo

D/F#              G       A/G
Bendito  o que  vem  em nome  do Senhor
  Em           D/F#     G               A

Hosana  nas alturas,   hosana  nas  alturas!
D/F#            G       A/G
Bendito  o que  vem  em nome  do Senhor
  Em           Bm      G               A

Hosana  nas alturas,   hosana  nas  alturas!`},{id:"d274",t:"SANTO \u2013 PE CLEIDMAR",tom:"",m:"Santo",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1mAa2_rNSgiz3jS1b6GVwzULIpfW3K0OM.pdf",cifra:`SANTO    \u2013 PE CLEIDMAR

C/G  G  C/G  G  C     Em7    C/G      D
Saaanto, santo, santo \xE9 o Senhor, Deus  do universo.

C/G  G9  Em7   C9          D4      D   G/B

Saaanto, santo, santo \xE9 o Senhor, Deus  do universo.

       C9    D/C

Os c\xE9us e a terra proclamam  a Vossa gl\xF3ria!
 Am7       G/B   C9       D4  D

Hosana  nas alturas, hosana nas alturas!

G/B      C9    D/C
Os c\xE9us e a terra proclamam  a Vossa gl\xF3ria!

 Am7       G/B   C       D

Hosana  nas alturas, hosana nas alturas!

        C9   D/C

Bendito o que vem  em  nome   do Senhor,
 Am7       G/B   C9       D9

Hosana  nas alturas, hosana nas alturas!

G/B       C9   D/C
Bendito o que vem  em  nome   do Senhor,

 Am7       G/B   C       D4   D

Hosana  nas alturas, hosana nas alturas!`},{id:"d275",t:"Sem Cora\xE7\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1PyqA8puwaPSVKwmVyNcEoyp0SuggvfDz.pdf",cifra:`SEM  CORA\xC7\xC3O

 E     B/D#     C#m7   C#m/B

Eu ando pelas ruas sem meu cora\xE7\xE3o
 A9      F#m      A/B

As luzes desta noite n\xE3o me prendem mais
  E     B/D#     C#m7    C#m/B

Deixei-o no sacr\xE1rio ap\xF3s a comunh\xE3o
  A9     F#m       A/B    D/E

E trago no meu peito a mais profunda paz

    A9    B/A     G#m7

\xD3 meu Jesus, que posso mais buscar
 C#m7     F#m7    A/B     E D/F#  E/G#

Depois de abandonar meu ser em tuas m\xE3...\xE3....\xE3os
E/G# D/F# E A9  B/A    G#m7

A  tu...a luz eu quero irradiar
 C#m7      C7+   A/B       E A/B

De dentro do meu lar ao lar dos meus irm\xE3os

 E      B/D#   C#m7    C#m/B
Voc\xEA n\xE3o tenha medo de viver assim

  A9      F#m      A/B
Trocando a vida inteira por um grande amor

   E     B/D#     C#m7    C#m/B
Pois tudo aqui na vida sempre tem um fim

 A9     F#m      A/B    D/E
S\xF3 \xE9 perene a vida que vem do Senhor

Refr\xE3o`},{id:"d276",t:"SENHOR QUE VIESTES SALVAR",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1JVcFJZ_i_5ypzM1YeNJRDUcICfCG5vXN.pdf",cifra:`SENHOR    QUE   VIESTES   SALVAR

 D     A     Bm
Senhor que vieste salvar
   Em       A7  D  D7
Os cora\xE7\xF5es arrependi__idos

 G Gm    D Bm    Em   A7   D  D7
Piedade, piedade, pieda___de de n\xF3s
 G  Gm   D Bm    Em  A7   D  A7
Piedade, piedade, pieda___de de n\xF3s

 D       A   Bm

\xD3 Cristo que vieste chamar
   G      A  D    D7
Os pecadores humilha-ados

 G Gm    D Bm    Em   A7   D  D7
Piedade, piedade, pieda___de de n\xF3s
 G  Gm   D Bm    Em  A7   D  A/B
Piedade, piedade, pieda___de de n\xF3s

  D     A       Bm
Senhor que intercedeis por n\xF3s

       Em        A7 D  D7
Junto a Deus Pai que nos perdo__a

 G Gm    D Bm    Em   A7   D  D7
Piedade, piedade, pieda___de de n\xF3s
 G Gm    D Bm    Em   A7   D  A7
Piedade, piedade, pieda___de de n\xF3s`},{id:"d277",t:"Sequ\xEAncia Pentecostes",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1mWiAjLAlgEuzJAOuHXR54jHwihQSknI6.pdf",cifra:`Sequ\xEAncia   Pentecostes

D7         G             Am
Esp\xEDrito de Deus/ Enviai dos c\xE9us
         D7            G
Um raio de luz/ Um raio de luz
F            E7               Am
Vinde, Pai dos pobres/ Da\xED aos cora\xE7\xF5es
 Cm        G   Am    D7     G
Vossos sete dons/ Vossos sete dons

D7         G             Am
Consolo que acalma H\xF3spede da alma
         D7            G
Doce al\xEDvio, vinde, doce al\xEDvio vinde
F            E7               Am
No labor descanso, Na afli\xE7\xE3o remanso
Cm        G    Am    D7    G
No calor aragem, No calor aragem

D7         G             Am
Ao sujo lavai/ Ao seco regai
         D7            G
Curai os doentes, Curai os doentes
F            E7               Am
Dobrai o que \xE9 duro, Guiai no escuro
Cm        G    Am    D7    G
O frio aquecei, O frio aquecei

D7         G             Am
Enchei, luz bendita, Chama que crepita
         D7            G
O \xEDntimo de n\xF3s, O \xEDntimo de n\xF3s
F            E7               Am
Sem a luz que acode, Nada o homem pode
Cm        G    Am    D7    G
Nenhum bem h\xE1 nele, Nenhum bem h\xE1 nele

D7         G             Am
Da\xED \xE0 vossa Igreja, Que espera e deseja
         D7            G
Vossos sete dons, Vossos sete dons
F            E7               Am
Da\xED em pr\xEAmio ao forte, Uma santa morte
Cm        G    Am    D7    G
Alegria eterna Alegria eterna

  C Cm  G     D7  G
A|---| m\xE9m!   A---m\xE9m!`},{id:"d278",t:"Seu amor \xE9 demais",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17A2DGRsnsnq2LguCLp9ArzTuR89azkwO.pdf",cifra:`Seu amor \xE9 demais

       E9
Sei que seu cora\xE7\xE3o d\xF3i

A9
Sei que o mundo lhe destr\xF3i
E9
N\xE3o, n\xE3o se entregue assim, irm\xE3o

A9
Vale a pena viver, nova vida viver
E9

Vem, deixe tudo para tr\xE1s
A9
Sim, nova vida voc\xEA vai ganhar
E9

Se a Jesus se entregar
A9
Vale a pena tentar, venha experimentar

 E         A9
O amor de Deus em mim, est\xE1 tamb\xE9m em voc\xEA
E           B7
Est\xE1 vivo em n\xF3s, tem um nome: \xE9 Jesus

 A    B7  E
A verdade, o caminho e a luz
E        A9

Ele veio nos dar a paz.Seu amor \xE9 demais
E           B7
Est\xE1 vivo em n\xF3s, tem um nome: \xE9 Jesus

 A   B7   E9
A verdade, o caminho e a luz`},{id:"d279",t:"SOBERANO",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1y6_FilAE7aKHk_u6GQsYJCDCQ-2Vt6Az.pdf",cifra:`SOBERANO

C   G/B
Tu \xE9s Rei dos reis
Am7                G4
Soberano sobre a terra e o c\xE9u
C    G/C    C

Tu \xE9s o grande "Eu sou"
Am7          G9  (G4 G)
Deus forte, maravilhoso
      F G    Am7
Ele faz o mar se abrir

        F   G    Am7
Sinto o Teu poder fluir em mim
     G9
Deus de milagres
    F    G    C (G7)
Te adorar \xE9 o meu prazer

C          G/B
Soberano, maravilhoso
        Am7    Am7/G    F9
Deus que  n\xE3o sabe o que \xE9 falhar
C      G/B

Soberano, fiel
       Am7      Am7/G       F9
Sei que Ele nunca vai deixar de me amar

Am7   F9   C   G
Oooh, Oooh

       F9  G
Mesmo  se eu te deixar
       F9     G
Mesmo  se o sol n\xE3o brilhar

       F9        G
Ainda se os meus me abandonarem
 F9       G
Eu sei... que nunca vai deixar...
                C  (G7)
...nunca vai deixar de me amar`},{id:"d280",t:"Sobre as aguas",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Zu_XbJVb82zYALdXrmO5oirB-psqXaui.pdf",cifra:`Sobre  as aguas

Intro: F#m7/9 C#m7 B/D# E F#m7/9 C#m7 B/D#

E4    E
Se o sol se p\xF4r
 E/C#   C#m7
E a noite chegar
 A       B4 B B9
Tu \xE9s quem me guia

E4     E E/C#      C#m7
Se a tempestade me alcan\xE7ar
 A   B4 B B9
Tu \xE9s meu abrigo

E A9   B9 C#m7
Se o mar me submergir
 B9 A9

A tua m\xE3o
      B9 C#m7 B9 A9
Me traz a tona pra respirar
        E/G#
E me faz andar
         B9 A/C# B/D#
Sobre as \xE1guas
E A9  B9 C#m  B9 A9

Tu \xE9s o Deus da minha salva\xE7\xE3o
  B9 C#m7 B9 A9
\xC9s o meu dono minha paix\xE3o
      E/G#         B9 A/C# B/D#
Minha can\xE7\xE3o e o meu louvor

(repete tudo)

F#m7/9 C#m7 B/D# E
A   le lu ia (8x)

E A9    B9 C#m
Se o mar me submergir
 B9 A9
A tua m\xE3o
   B9 C#m B9 A9

Me traz a tona pra respirar
        E/G#
E me faz andar
         B9 A/C# B/D#

Sobre as \xE1guas
E A9  B9 C#m  B9 A9
Tu \xE9s o Deus da minha salva\xE7\xE3o
  B9 C#m B9    A9
\xC9s o meu dono minha paix\xE3o
      E/G#         B9 A/C# B/D#
Minha can\xE7\xE3o e o meu louvor

( F#m7/9 C#m7 B/D# E ) (4x)
A   le lu ia

Ministra\xE7\xE3o (...)

E A9   B9 C#m
Se o mar me submergir ...`},{id:"d281",t:"Somos mais que amigos",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1c3OZvIMTm0S4W-KdCzs02PaK114ek2kw.pdf",cifra:`Somos  mais que  amigos  \u2013 Anjos

Intro: B F# E F# B F# E

B          D#m          E             G#m    F#/Bb  E
N\xE3o \xE9 preciso mais adormecer pra sonhar com um Anjo descendo do
c\xE9u
          B/D#      C#m         F#4  F#
Basta Voc\xEA perceber que sou mais que um amigo fiel

  B          D#m             E         G#m   F#/Bb  E
Sou aquEle que traz a alegria de Deus e a entrega direto ao seu
cora\xE7\xE3o
         D#m     G#m      A          F#  C#m
E com Voc\xEA vou sorrir e chorar. Lado a lado vamos caminhar

           B/D#      E/G#            F#/Bb C#m

Quando de ajuda Voc\xEA precisar dou minha vida pra lhe resgatar
          B/D#  E              F#4    F#  F#4  F#   B
Esse \xE9 o desejo de Deus (de Deus) de hoje em diante o seu Anjo sou
eu!

            F#      E      G#m    F#    B
Sou muito mais que um amigo sou um Anjo que o Senhor enviou!
           F#/Bb
Pode gritar para o mundo ouvir
   C#m        E  F#      B
Sou um Anjo que o Senhor enviou pra Voc\xEA!

B          D#m          E             G#m    F#  E

N\xE3o tenho asas nem sei voar mas o que o mundo n\xE3o pode eu posso
lhe dar!
          B/D#      C#m         F#4  F#
Vou lhe mostrar o caminho de Deus s\xF3 Ele pode santificar
C#m             B/D#     E/G#            F#/Bb  C#m
Quando de ajuda Voc\xEA precisar dou minha vida pra lhe resgatar
          B/D#  E              F#4    F#  F#4  F#   B
Esse \xE9 o desejo de Deus (de Deus) de hoje em diante o seu Anjo sou
eu...

            F#      E       G#m   F#  B
Sou muito mais que um amigo sou um Anjo que o Senhor enviou!
           F#/Bb

Pode gritar para o mundo ouvir
   C#m        E    F#      B
Sou um Anjo que o Senhor enviou pra Voc\xEA!

Bm        A/B         G/B        Em7    F#m7   Bm

Quando Voc\xEA se ferir e do c\xE9u se afastar eu lhe trarei para perto de
Deus
     A/B           G/B       Em7     F#m7   E/F#  F/G C
Quando sentir solid\xE3o vem comigo rezar e eu levarei suas preces a
Deus
            G/B      F        Am    G/B  C
N\xF3s somos mais que amigos: somos Anjos que o Senhor enviou!
          G/B         Dm        F    G4
Vamos gritar para o mundo ouvir somos Anjos que o Senhor enviou!
            G/B      F        Am    G/B  C
N\xF3s somos mais que amigos: somos Anjos que o Senhor enviou!
          G/B         Dm        F   G4     C

Vamos gritar para o mundo ouvir somos Anjos que o Senhor enviou
pra Voc\xEA!`},{id:"d282",t:"Sopra em N\xF3s",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1q92RFd-bBo2DGqx6AqC_8h8Jbf4Lw5Um.pdf",cifra:`SOPRA     EM  N\xD3S

  Am       G/B
Minha alma tem sede
  C       G
De Ti, oh meu Deus
                              2x
   Am    G
Minha alma suspira
  F7M
Por Ti
     Am
Sopra em n\xF3s
   G
Sopra em n\xF3s
                              2x
      F7M
Somos teus filhos, oh Pai
      G4      G
Estamos reunidos em teu nome

C9      G/B
Oh vento impetuoso
      Am
Vem nesse lugar
       C/G F7M
Fortalece o que \xE9 fraco
      C/E
Com o teu poder
          G
Rasgue o c\xE9u, oh meu Pai
      Am
Sopra hoje aqui
     Am/E F7M   G
Vem Esp\xEDrito Santo, vem

( Am G/B C )
( G Am G F7M )

Am  G/B  C
Sopra em n\xF3s
Am  G  F7M
Sopra em n\xF3s
Am  G/B  C G
Sopra em n\xF3s
Am  G  F7M
Sopra em n\xF3s`},{id:"d283",t:"S\xD3 TU ES SANTO F",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17zYAcxDd4Dn3iFL9TXk8AmL9oddmmgzR.pdf",cifra:`S\xD3 TU ES SANTO

D#9
  Tudo est\xE1 preparado aqui
G#6(9)
     A casa e o meu cora\xE7\xE3o tamb\xE9m
D#9/G
    Tu \xE9s o \xFAnico motivo
       G#6(9) A#4 G#6(9)
Que me fez che__gar
D#9
  Os filhos j\xE1 est\xE3o chegando aqui
G#6(9)
     Agora, somos dois ou tr\xEAs ou mais
D#9/G
    Encontre meu cora\xE7\xE3o
              G#6(9) A#4 G#6(9)
Disposto a queimar por ti
[Pr\xE9-Refr\xE3o]
        D#9/G
Todos os versos e can\xE7\xF5es
       G#6(9)
Que eu conseguir cantar
        D#9/G
Todas as vezes quebrantado
    G#6(9)
S\xF3 quero te falar

        Cm7(11)/G A#4/F   G#6(9)/D#
Teu \xE9 o reino e a gl\xF3ria pra sempre!
         Cm7(11)/G A#4/F
Teu \xE9 o dom\xEDnio e o poder
 G#6(9)/D#
Am\xE9m e am\xE9m!
        Cm7(11)/G A#4/F   G#6(9)/D#
Teu \xE9 o reino e a gl\xF3ria pra sempre!
         Cm7(11)/G A#4/F
Teu \xE9 o dom\xEDnio e o poder
 G#6(9)/D#
Am\xE9m e am\xE9m!
        D#9           G#6(9)
S\xF3 tu \xE9s santo! S\xF3 tu \xE9s santo!
                D#9/G
N\xE3o h\xE1 outro como tu
                Fm7(11)
N\xE3o h\xE1 outro como tu
                D#9/G
N\xE3o h\xE1 outro como tu
                G#6(9)
N\xE3o h\xE1 outro como Jesus`},{id:"d284",t:"S\xF3 por Ti Jesus",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1L1zyqex37c6CJnSOF-poWgoVTxAqWwdi.pdf",cifra:`S\xF3    por    Ti   Jesus

E      A

S\xF3 por Ti Jesus,

        C#m  Abm   C#m  Abm
Quero  me consumir...

              A

Como  vela que queima  no  altar

F#m         B
Me  consumir  de amor.

E      A

S\xF3 em  Ti Jesus,
         C#m  Abm   C#m  Abm

Quero  me derramar...

            A            B
Como  o rio se entrega ao mar

            E     E7

Me  derramar  de amor.
      A                        Ab

Pois Tu \xE9s o meu amparo   e o meu ref\xFAgio

            C#m  Abm  C#m   Abm

\xC9s alegria de minh'alma.
    A                     B

S\xF3 em  Ti repousa a minha esperan\xE7a,

     E           B/Eb      C#m
N\xE3o vacilarei, nem mesmo   na dor

       F#m           D    B

Quero  seguir-Te at\xE9 o fim...
     E

S\xF3 por Ti Jesus.`},{id:"d285",t:"TE AMAREI",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1_BPBnAdgzvBnpvadF0FQ6Jygdp-b4RLj.pdf",cifra:`TE AMAREI

   E     A
Me chamaste para caminhar                A
    E  A B2                     Eu pensei muitas vezes calar
Na vida contigo                        E A B2
  E      A                      E n\xE3o dar nem resposta
Decidi para sempre seguir-te      E       A
     D B2                       Eu pensei na fuga esconder-me
N\xE3o voltar atr\xE1s                     D B2
  E       A                     Ir longe de ti
Me puseste uma brasa no peito      E
     E  G#m7 C#m                Mas tua for\xE7a venceu
Uma flecha na alma                 A      E  G#m7 C#m
  F#m    B2                     E ao final eu fiquei seduzido
\xC9 dif\xEDcil agora viver             F#m     B2
       E A B2                   E \xE9 dif\xEDcil agora viver
Sem lembrar-me de ti                  E A B2
                                Sem saudades de ti
   F#m  B2    E
Te amarei Senhor, Te amarei     REFR\xC3O
C#m                                      A
Senhor                          \xD3 Jesus n\xE3o me deixe jamais
    F#m        B2                     E A B2
Eu s\xF3 encontro a paz e a alegria Caminhar solit\xE1rio
      E    A B2                    E
Bem perto de ti,                Pois conheces
   F#m  B2    E                      A      D B2
Te amarei Senhor, Te amarei     A minha fraqueza e o meu cora\xE7\xE3o
C#m                                E
Senhor                          Vem, ensina-me a viver
    F#m        B2                A     E  G#m7 C#m
Eu s\xF3 encontro a paz e a alegria A vida na tua presen\xE7a
      E A E                      F#m
Bem perto de ti                 No amor dos irm\xE3os
                                   B2      E A B2
                                Na alegria, na paz, na uni\xE3o`},{id:"d286",t:"TEMPLO VIVO",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1sdYmMpoIBrwePalCLOdkHjAfvqj6-j09.pdf",cifra:`TEMPLO       VIVO

D                A
Seja bem-vindo, Esp\xEDrito Santo!

     Bm         G
O meu  cora\xE7\xE3o \xE9 o teu lar
      D          A
Seja bem-vindo, Esp\xEDrito Santo!

     Bm
A minha casa \xE9 tamb\xE9m   tua casa
      G
A minha fam\xEDlia \xE9 o teu lugar!

     A      G
Ah! Ah! Ah!... Ah! Ah! Ah!
Em     A   D
Vem  em mim  morar!

     A      G
Ah! Ah! Ah!... Ah! Ah! Ah!
Em     A   D/F#  G  A  G/B  A/C#   D
Vem  em mim  morar!

[Refr\xE3o]

A    D         A

Quero ser templo vivo
  Bm      G
E te levar comigo
   D       A       G

Quero ser templo vivo do teu amor

A    D         A

Quero ser templo vivo
  Bm      G
E te levar comigo
  D        A       G

Quero ser templo vivo do teu amor`},{id:"d287",t:"TERRA SECA G",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BpLGaGpT5s_v_39HATuleeN53kvdTnxh.pdf",cifra:`TERRA  SECA

            G2           G9/B         C6(9)
Somente  em ti  construirei   a minha  casa

              G2        G9/B           C6(9)
Somente  em ti  colocarei   minha  esperan\xE7a
              G2          G9/B         C6(9)
Somente  em ti  construirei   a minha  casa

              G2        G9/B           C6(9)
Somente  em ti  colocarei   minha  esperan\xE7a

[Pr\xE9-Refr\xE3o]

              Em7
Pois  s\xF3 em ti
                       D
Minh'alma  achou  descanso

 G9/B   C
S\xF3 em   ti
    D           G2
Eu pude  respirar

 G9/B   Em7
S\xF3 em   ti
                       D2
Minh'alma  achou  descanso

        C
S\xF3 em  ti
    D           G2   G9/B
Eu pude  respirar

[Refr\xE3o]

            C                       D
O meu  cora\xE7\xE3o  deseja  te  encontrar

         D/C    Bm                    Em7
Como  a terra  seca  anseia  pela  chuva
            Am7
Vem me  saciar
                 D

Pois  eu descobri
                       G  G7M(2)   G  G9/B
Que aqui  \xE9 o  meu lugar`},{id:"d288",t:"TERRA SECA D",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1CKmEQhA2f7Y41HOuOOQlxPzlanif8zDP.pdf",cifra:`TERRA   SECA

      D             G

Somente  em  ti construirei a minha casa

      D             G
Somente  em  ti colocarei minha esperan\xE7a

      Bm

Pois s\xF3 em ti
           A

Minh'alma  achou  descanso

    G
S\xF3 em  ti

     A  D

Eu pude  respirar

      G           A
O meu  cora\xE7\xE3o  deseja te encontrar

        F#m           Bm

Como  a terra seca anseia pela chuva
      Em

Vem  me  saciar

        A
Pois eu descobri

           D

Que  aqui \xE9 o meu  lugar`},{id:"d289",t:"TEU SOU C",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1oCsCmNsnKOOQ1mPc7zdR7ezDHT-UOv6R.pdf",cifra:`TEU SOU

C             Em          Am     Em
Eu  n\xE3o  sou  nada   e  do  p\xF3  nasci

 C          Am          Dm            G   G7
Mas  tu  me  amas   e morreste    por  mim
  C          Em          Am           Em

Diante   da  cruz     s\xF3  posso   exclamar
      C       Am            Dm   G   G7

Teu  sou              teu   sou

                     C            C7
Toma  as  minhas    m\xE3os,    te  pe\xE7o

              F             Fm
Toma  meus   l\xE1bios,    te  amo
                  C           Am

Toma  a  minha   vida,    oh  pai
      Dm      G7            C    Am        Dm     G7

Teu  sou,            teu  sou,           teu  sou,
  C
teu  sou

C            Em           Am             Em
Quando   de  joelhos    te  olho     oh  Jesus

 C              Am          Dm            G   G7
Vejo  tua   grandeza    e a  minha   pequenez
 C           Em           Am      Em

Que  posso   dar-te   eu?   S\xF3  meu  ser
      C       Am         Dm   G   G7

Teu  sou             teu  sou`},{id:"d290",t:"Teus planos",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Iuntsk8HI1yArHgtz8te8au7a5FPdshK.pdf",cifra:`Teus   planos

D/F#  G
       Eu me  abro ao  Teu  querer
                     Am
Eu me  rendo  a Tua  voz

                 Bm
Quero  me submeter
                       Am      C/D   D
Quero  conhecer  Teus  planos
G

 Os passos  que  dei  sem voc\xEA
                      Am
S\xF3 me  fizeram  fracassar
                        Bm
O tanto  que  eu j\xE1  chorei

                          Am       C/D D
Me arrependo   dos meus  planos

    Am   Am/G          D/F#
Sem Ti   nada  posso  fazer
         G/B     C
Onde  eu posso   ir
       Am                       Em              F   C  D

Se o  c\xE9u que  eu procuro   s\xF3 vira  por Tua  voz?

G                       F

 Os meus  passos  s\xE3o  Teus,
                                                               2x
                         C7M
o meu  pr\xF3ximo  minuto  \xE9 Teu
D                                   G
Se n\xE3o  for assim,   n\xE3o me  deixe  ir
                       F
Dou minha  m\xE3o  para  Ti
                       G/B      C
Fecho  os olhos  e confio   em Ti

D                G   F7M  C   D
Leva-me  Senhor`},{id:"d291",t:"TODO TEU",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1xUjmM96GqI-Mngx-gI60YJkJ2WkdB6F5.pdf",cifra:`TODO  TEU

G      G7M

Quero colocar
     G/B  C9    F C

Em tuas m\xE3os a minha vida.
  G       G7M

Me deixar remodelar
    G/B    C

Como  um vaso do oleiro.

D         G/B     Am
O meu cora\xE7\xE3o ponho hoje em teu altar

D           G/B    C
Minha vida est\xE1 pronta pra recome\xE7ar

    D C9/D
Ao lado teu

   G   D/F#   Em

Ser todo teu, inteiro teu
   C   G/B  Am      D C9/D

Quero ajuntar cada peda\xE7o do meu ser
    G   D/F#   Em

Ser todo teu, inteiro teu
     Am    G/B  C

Quero te dar os meus peda\xE7os para
D                  G

Que um vaso novo eu possa ser`},{id:"d292",t:"Tom\xE9",tom:"E",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1tpBmF5MaInXKEvKp8lQMF2v7TJFDaCp8.pdf",cifra:`Tom\xE9

Tom: E

(intro 2x) C#m7 Bsus4 Asus2

E       F#m7    C#m7    A7+

Por muito tempo n\xE3o acreditei
E  F#m7   C#m7     A7+

me escondi ,   duvidei
C#m7     G#/E        A7+

Se tudo ao meu redor era aus\xEAncia tua
C#m7  G#/E        Bsus4

j\xE1 n\xE3o ouvia mais a tua voz
E F#m7     C#m7   A7+

s\xF3 acreditarei se eu tocar
E F#m7     C#m7   A7+

teu lado aberto e sentir pulsar
C#m7  G#/E    Asus2

a alegria dos que creem em ti
C#m7   G#/E        Bsus4

poder ouvir tua voz , dizendo me
E     F#m7   C#m7        A7+

poe aqui tua m\xE3o , torna te um homem de f\xE9
C#m7  Bsus4    Asus2  Bsus4

toca o meu cora\xE7\xE3o e o medo  se vai
E   A7     Bsus4

eu voltei para ti , por tanto te amar.
C#m7  Bsus4    Asus2  Bsus4

Toca o meu cora\xE7\xE3o , eu sou a tua paz`},{id:"d293",t:"Transfigura\xE7\xE3o",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ejZd-lpTIOil3ncYCatauZXl7yBlhowW.pdf",cifra:`Transfigura\xE7\xE3o   \u2013 Dunga

  F#m
O mundo quer desfigurar meu viver
   E

Trazendo os meus olhos ao que vai perecer
  F#m
Mas Deus me convida ao monte subir
   E

Para que de seus planos eu n\xE3o venha a desistir

  F#m

Toda vez que oro eu me sinto feliz
   E
E me arrependo do que errado eu fiz

  F#m
Sua for\xE7a invade todo meu viver
   E

Transfigurando todo o meu ser

  F#m

Eu quero entrar nesta nuvem Senhor
   E
Sentir seu amor tomando conta de Mim

  F#m
Ouvir sua voz me dizendo assim
   E
A tenda eu fiz e \xE9 o seu cora\xE7\xE3o

    F#m    G#m     A
\xC9 s\xF3 viver pensando em mim

                 E
Imagem e semelhan\xE7a templo onde eu quis morar
  F#m   G#m  A

Se come o meu Corpo e bebe o meu Sangue
   E
Em mim pode se transformar`},{id:"d294",t:"Trindade Santa",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1UIDU7p65Bn3GFYRWAIupFVHcL7iglJUt.pdf",cifra:`Trindade  Santa \u2013 Dunga

     Em7
Gl\xF3ria a Deus

    Am         Em
Ao Criador, Soberano e Pai
     Am7
Gl\xF3ria a Deus
       Em7
Soberano e Pai
  B4    A          Em7
Aleluuuuuia! Gl\xF3ria e Aleluia, Am\xE9m!

      Em7
Gl\xF3ria ao Filho
     Am7       Em7
Ao Redentor, Pr\xEDncipe da Paz
     Am7
Gl\xF3ria ao Filho
        Em7

Ao Pr\xEDncipe da Paz
  B4   A          Em
Aleluuuuia! Gl\xF3ria e Aleluia, Am\xE9m!

        Em Em7+ Em7 Em6
Gl\xF3ria ao Esp\xEDrito
     Am7        Em
Ao Defensor, Par\xE1clito do Pai
       Am Am7+ Am7 Am6
Gl\xF3ria ao Esp\xEDrito
       Em
Par\xE1clito do Pai
  B4   A          Em   G  B7 9+
Aleluuuuia! Gl\xF3ria e Aleluia, Am\xE9m!

      Em

Trindade Santa
       Am7        Em7
Presente no come\xE7o, meio e fim
      Am7
Trindade Santa
          Em7
Come\xE7o, meio e fim
  B4   A          Em
Aleluuuuia! Gl\xF3ria e Aleluia Am\xE9m!
  B4   A          Em   Em7+
Aleluuuuia! Gl\xF3ria e Aleluia Am\xE9m!`},{id:"d295",t:"TUA FAMILIA",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1clm6oxefxpkhm5x4KtdfVayI5W2wc-d2.pdf",cifra:`TUA   FAMILIA

 E     Am              E
Percebe e entende que os melhores amigos
    Am           C#m     B      A
S\xE3o aqueles que est\xE3o em casa esperando por ti
   E      Am               E/G#

Acredita nos momentos mais dif\xEDceis da vida
   F#m7   E/G#  A9  C\xBA  C#m        B     A
Eles sempre estar\xE3o por perto pois s\xF3 sabem te amar

  F#m         E/G#          A      C#m   B/C#

E se por acaso a dor chegar ao teu lado v\xE3o estar
    F#m        E/G#            A        B4  B
Pra te acolher e te amparar pois n\xE3o h\xE1 nada  como  um  lar

   F#m  A         B/A
Tua fa__m\xEDlia volta pra ela

    G#m             C#m
Tua fam\xEDlia te ama e te espera
        F#m        B
Para ao teu lado sempre  estar

   F#m  A         B/A

Tua fa__m\xEDlia volta pra ela
    G#m             C#m
Tua fam\xEDlia te ama e te espera
        F#m        B
Para ao teu lado sempre  estar

    E
Tua fam\xEDlia!

  A       Dm             A
\xC0s vezes muitas pedras surgem pelo caminho
    Dm              F#m   E    D

Mas em casa algu\xE9m feliz te espera pra te amar
   A         D          A
N\xE3o deixa que a fraqueza tire a tua vis\xE3o
     Bm7    A/C#    D9   F\xB0 F#m
Que um desejo engane o teu cora_\xE7\xE3o
  E      D

S\xF3 Deus n\xE3o \xE9 ilus\xE3o`},{id:"d296",t:"Tua Gra\xE7a Me Basta",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/15sZ6FGpHOWgDmEg_Cr51dxE07aQYVJgv.pdf",cifra:`Tua   Gra\xE7a    Me   Basta

E                              A9            B

Eu n\xE3o  preciso ser reconhecido por ningu\xE9m

E                                     A9          B
A minha  Gl\xF3ria \xE9 fazer com que  conhe\xE7am  a Ti

C#m7    B      A9              E/G#     F#m           B

E que diminua  eu pra que  Tu cres\xE7as Senhor mais  e mais

E                                           A9     B
E como  os Serafins que encobrem   o rosto ante a Ti

E                                 A9              B

Escondo  o rosto para que  vejam Tua face em  mim
C#m7    B      A9               E/G#     F#m         B

E que diminua  eu pra que  Tu cres\xE7as Senhor mais  e mais

   E/G#        A9      E/G#    F#m

No Santo  dos Santos a fuma\xE7a  me  esconde

               C#m7
S\xF3 Teus olhos me  v\xEAem

 B           A9      E/G#     F#m

Debaixo  de Tuas asas \xE9 meu  abrigo
            C#m7

Meu  lugar secreto

            B        A9               B         A      E

   S\xF3 Tua gra\xE7a me  basta e Tua presen\xE7a \xE9 o meu  prazer`},{id:"d297",t:"Tudo \xE9 do Pai",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1TolZaVVYaz5hSoq6mbJt4t3j-V3cDjxd.pdf",cifra:`Tudo    \xE9  do  Pai   \u2013 Banda     Dom

   C        G/B      Am Am/G

Eu pensei que podia viver por mim mesmo
   Dm            Dm/C    G      F/A G/B
Eu pensei que as coisas do mundo n\xE3o iriam me derrubar
  C      G/B     Am  Am/G

O orgulho tomou conta do meu ser
   Dm     Dm/C        G G/B
E o pecado devastou o meu viver
   F        G          Em9 Am

Fui embora, disse ao Pai: -D\xE1-me o que \xE9 meu!
     Dm      G     C
D\xE1-me a parte que me cabe da heran\xE7a!
     F      G     E      Am
Fui pro mundo, gastei tudo, me restou s\xF3 o pecado

     Dm        G       C   F/G
E hoje eu sei que nada \xE9 meu Tudo \xE9 do Pai.

      C    G/B       Am

Tudo \xE9 do Pai! Toda honra e toda a Gl\xF3ria,
 Am/G   Dm      Dm/C       G  G/B
\xC9 dele a vit\xF3ria alcan\xE7ada em minha vida.
      C     G/B     Am       Am/G        Dm

Tudo \xE9 do Pai! Se sou fraco e pecador, bem mais forte \xE9 o meu
Senhor
    G     C  G
Que me cura por Amor!

(final)    F C/E Dm G C
Que me cura por Amor!`},{id:"d298",t:"T\xFA \xE9s o centro",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1yKDyPa6Sei_IuTHhmqFPA9hSs6lWXwl_.pdf",cifra:`T\xFA   \xE9s o  Centro

               F               Dm
Quero  te louvar,  te  engrandecer
         Bb                     C
e proclamar   tua vit\xF3ria   em mim

           Dm               Gm
Ser todo  teu  \xE9 o meu  prazer,
         Bb                    C   F/A
te seguirei   aonde  fores  senhor

         F
Tu \xE9s  o centro  da  minha  vida
       Dm

\xE9s a  raz\xE3o da  minha  alegria
               Bb                      C
N\xE3o quero  tirar  os  meus  olhos  de ti,
           Bb                    C                   F
Quero  que sejas  o  centro  senhor  ... da  minha  vida

          Bb      F            Bb        F

N\xE3o vou  mais  tirar  os meus  olhos  de ti
         Bb    Dm           C
Vou me  apaixonar  outra  vez
              Bb       F         Bb             F
Que o  meu viver  senhor,   seja para  te  agradar

       Bb          Dm              C
Nada  mais vai  ocupar  meu  cora\xE7\xE3o

Tu \xE9s  o centro`},{id:"d299",t:"UM CORA\xC7\xC3O PARA AMAR E",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1f9-d2feQtNm5QbV9u0jyROEijJRWTdfV.pdf",cifra:`UM   CORA\xC7\xC3O       PARA   AMAR

E
Um cora\xE7\xE3o para amar
C#m     F#m
Pra perdoar e sentir

F#m/E    A
Para chorar e sorrir
B      A E
Ao me criar tu me deste
E
Um cora\xE7\xE3o pra sonhar
C#m       F#m

Inquieto e sempre a bater
F#m/E    A
Ansioso por entender
B      A  E
As coisas que tu disseste

E7       A

Eis o que eu venho te dar
B        E B/D#
Eis o que eu ponho no altar
C#m       F#m
Toma senhor que ele \xE9 teu
B      E
Meu cora\xE7\xE3o n\xE3o \xE9 meu

E
Quero que o meu cora\xE7\xE3o
C#m      F#m
Seja t\xE3o cheio de paz
F#m/E     A
Que n\xE3o se sinta capaz
B        E

De sentir \xF3dio ou rancor
E
Quero que a minha ora\xE7\xE3o
C#m     F#m
Possa me amadurecer
F#m/E    A
Leve-me a compreender
B        E

As consequ\xEAncias do amor`},{id:"d300",t:"UN\xC7\xC3O QUE VEM DO C\xC9U",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1L-Z7wap8knLfgaCCIDHQ1EQw6U-bT6S-.pdf",cifra:`UN\xC7\xC3O   QUE VEM  DO C\xC9U

E       A E   A
Deus nosso pai... Te adoramos,

      F#m         A          E A  E
Derrama sobre n\xF3s o amor que vem do c\xE9u o amor que vem do c\xE9u.
      F#m         A          E A  E
Derrama sobre n\xF3s o amor que vem do c\xE9u o amor que vem do c\xE9u.
      F#m         A   B7      E  A E
Derrama sobre n\xF3s o amor que vem do c\xE9u o amor que vem do c\xE9u.
E        A E    A
Senhor Jesus Cristo... Nos te Adoramos,
      F#m         A         E A E
Derrama sobre n\xF3s a paz que vem do c\xE9u a paz que vem do c\xE9u.
      F#m         A         E A E
Derrama sobre n\xF3s a paz que vem do c\xE9u a paz que vem do c\xE9u.
      F#m         A  B7      E A  E
Derrama sobre n\xF3s a paz que vem do c\xE9u a paz que vem do c\xE9u.
E      A E   A
Espirito Santo... N\xF3s te adoramos.
      F#m          A         E A  E
Derrama sobre n\xF3s a un\xE7\xE3o que vem do c\xE9u a un\xE7\xE3o que vem do c\xE9u.
      F#m          A         E A  E
Derrama sobre n\xF3s a un\xE7\xE3o que vem do c\xE9u a un\xE7\xE3o que vem do c\xE9u.
      F#m          A         E A  E
Derrama sobre n\xF3s a un\xE7\xE3o que vem do c\xE9u a un\xE7\xE3o que vem do c\xE9u.`},{id:"d301",t:"Utopia",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1BEy2j2648Jrmc0cxH9gQ1LZOUgqwq4Fv.pdf",cifra:`Utopia \u2013 Pe. Zezinho

F                   C7       F
Das muitas coisas do meu tempo de crian\xE7a
      C7       F        F7       Bb
Guardo vivo na lembran\xE7a o aconchego do meu lar
       Gm         C        Bb

No fim da tarde quando tudo se aquietava
  C       Bb         C7        F     C7
A fam\xEDlia se ajuntava l\xE1 no alpendre a conversar
 F                   C7        F

Meus pais n\xE3o tinham nem escola e nem dinheiro
              F7              Bb
Todo o dia o ano inteiro trabalhavam sem parar
                       F               Gm

Faltava tudo mas a gente nem ligava o importante n\xE3o faltava
     C7
Seu sorriso e seu olhar

F                   C7       F
Eu tantas vezes vi meu pai chegar cansado
      C7       F        F7     Bb

Mas aquilo era sagrado um por um ele afagava
       Gm       C       Bb
E perguntava quem fizera estripulias
    C        Bb          C7        F     C7
E mam\xE3e nos defendia e tudo aos poucos se ajeitava

       F     C7        F
O sol se punha, a viola algu\xE9m trazia
              F7                    Bb
Todo mundo ent\xE3o queria ver o papai cantar com a gente

                       F
Desafinado meio rouco voz cansada
            Gm         C7       F
Ele cantava mil toadas, em seu olhar no sol poente

F                  C7      F
Correu o tempo e hoje eu vejo a maravilha
     C7     F        F7        Bb
De se ter uma fam\xEDlia quando tantos n\xE3o a t\xEAm

       Gm       C7       Bb
Agora falam do desquite do div\xF3rcio
   C7        Bb         C7        F
O amor virou cons\xF3rcio compromisso de ningu\xE9m

       F           C7           F
H\xE1 tantos filhos que bem mais do que um pal\xE1cio
               F7                Bb
Gostariam de um abra\xE7o e do carinho entre seus pais
                         F

Se os pais amassem o div\xF3rcio n\xE3o viria
          Gm
Chame a isso Utopia
    C7       F

Eu a isso chamo paz`},{id:"d302",t:"Vai Caminhar",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1K6hTp-Mw5weKGXney0s7VRUBR6oWwkXi.pdf",cifra:`Vai Caminhar  \u2013 Dunga

     F     Bbm/F        F     C/E
Sem for\xE7as pra  recome\xE7ar
   Dm        Bb       C4 C
Senti vontade de gritar
       Dm   C         Bb   F/A

Vem Senhor, vem me curar
    Gm     Bb        C4  C
E ao cora\xE7\xE3o vem me falar
 F      Bbm/F      F    C/E

Quero voltar a escutar
     Dm     Bb             C4  C
Sem medo, a ti vou me entregar
       Dm       C         Bb

Pois eu sei, se contigo caminhar
     Gm       Bb        C4 C
Eu terei for\xE7as pra continuar

        F         Bb         C
Vai caminhar, na estrada eu vou te curar
       C#\xB0         Dm
A cada passo junto a mim

  Bb            C4    C
Ver\xE1s que n\xE3o chegou o fim
            F/A      Bb        C
E nada vai poder te deter se come\xE7ar a crer
     C#\xB0           Dm

Se gritar por compaix\xE3o
          Bb   C         F
Os meus bra\xE7os te sustentar\xE3o`},{id:"d303",t:"VAMOS CELEBRAR",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17Vv4lR1rB8YWGMi2yEdORJ1DS72xWsyW.pdf",cifra:`VAMOS    CELEBRAR

      A2          E
Todos reunidos na casa de Deus

           A2          B2
Com  cantos de alegria e grande louvor
       A/C#           B/D#

Vamos  celebrar os feitos do Senhor
      A2           E  A2
E sua bondade  que nunca  tem fim

        E          A2
Vamos   celebrar Deus  esta aqui
        E          A2
Vamos   celebrar Deus  esta aqui

        B2
No meio  de  n\xF3s
        E          A2
Vamos   celebrar Deus  esta aqui

        E          A2
Vamos   celebrar Deus  esta aqui
        B2
No meio  de  n\xF3s

 A   B7        E
Ele est\xE1 presente  aqui

          A2         E
Quando  estamos  juntos unidos a Ti
     A2         B2

Para elevar a nossa ora\xE7\xE3o
          A/C#         B/D#
Um  canto de alegria surge entre n\xF3s
     A2            E A2

Em  adora\xE7\xE3o ao Teu eterno amor`},{id:"d304",t:"Vem amigo vem",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/17SF1Yg5gtQ6bO3hAEzWZuzLyR9WdjnGQ.pdf",cifra:`Vem   amigo    vem

INTRO:  C Am   F D7  G7

C             Am               F

Vem amigo vem  Vem  para entregar este cora\xE7\xE3o que Deus te
            D7

deu para amar n\xE3o para odiar
C           Am      F       G7        C

Vem abre teus bra\xE7os at\xE9 aquele que est\xE1 l\xE1 Vem abre teus
Am        F     G7

bra\xE7os ao teu irm\xE3o ao teu amigo

C                  Am
D\xE1-lhe um empurr\xE3o D\xE1-lhe um empurr\xE3o

F
que de pouco a pouco

   D7     G7
ele se achega ao Senhor Nosso Senhor`},{id:"d305",t:"Vem Amigo",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1mtL2feJ5PIsCXhfBZQfpTgjk8y0vVhai.pdf",cifra:`Vem  Amigo

 D                G       D  C G

Tudo o que eu vivi em Deus eu s\xF3 pude compreender
 D                     G    A   D  A7

a cada conflito eu pude entedender o que Ele tem pra eu fazer

D                G         D  C G

Entre o ponto onde estou e o lugar onde eu quero estar
D         Bm           G     A    D  A/C#

muitas provas devo suportar. Mas sei: com Ele um dia vou
chegar.

 Bm      F#m       G            A

Eu sei que n\xE3o h\xE1 o caminho; Caminho se faz quando se quer
  Bm

Caminhar
 Bm     F#m     G      Em     A   D  A7

o tempo me ensina a esperar, s\xF3 Deus sabe onde vou chegar.

   D  G

Ent\xE3o vem amigo!
   D   G

Vem cantar comigo!
    Bm   G

Segue seu cora\xE7\xE3o,
     Em      A  D    A7

vem fazer parte desta gera\xE7\xE3o. (2x)

D                  G        D   C G
Dar seq\xFC\xEAncia ao que Deus faz, Isso pode lhe trazer a paz.

D         Bm         G     A  D   A/C#
Cansar, cair, mas levantar; seguir sem medo de fracassar.

 Bm

Eu sei que.......`},{id:"d306",t:"Vem vem Louvar",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1EJpBsyEbiKbeKyFGyModNxkERwCBQVUo.pdf",cifra:`Vem,  Vem  Louvar

E          B7    A       B7     E
Vem, vem louvar, encher este lugar de gl\xF3ria,
E7  A      B7     E   E7    A        B7
encher este lugar de gl\xF3ria com a gl\xF3ria do Senhor

E          B7    A        B7     E
Vem, vem louvar, encher este lugar de gl\xF3ria,
E7  A      B7     E   E7    A   B7    E      B7
encher este lugar de gl\xF3ria com a gl\xF3ria do Senhor

       E    Bm  E7    A          B7
Quando Deus envia Seu Esp\xEDrito, nos conduz a f\xE9

    E      A         B7     E       Bm  E7  A
e nos faz cantar o teu louvor. Seu amor em cada cora\xE7\xE3o
       Am          E     F#m  E7    E E7    A       B7
nos garante a paz e nos faz cantar o teu louvor.(cante forte ao Senhor)

Refr\xE3o

     E   Bm  E7    A     B7               E
\xC9 t\xE3o bom estar neste lugar de alegria e paz que nos faz
   A  B7     E      E          Bm   E7  A
cantar o teu louvor. Eu tamb\xE9m sou templo do Senhor

        Am          E      F#m  E7    E  E7       A
e o meu cora\xE7\xE3o vai cantar pra sempre o Teu louvor (cante a gl\xF3ria do
B7
Senhor)

Refr\xE3o`},{id:"d307",t:"VEM, VEM, VEM, ESP\xCDRITO SANTO",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1ipv2U0sv6afPdjCXFbC9kzDIZQLLyUUG.pdf",cifra:`VEM,      VEM,     VEM,     ESP\xCDRITO         SANTO

G        Em7          C
Vem,  vem,  vem,  Esp\xEDrito  Santo

              D7            G  D7
Transforma   a minha   vida, quero  renascer

G        Em7          C
Vem,  vem,  vem,  Esp\xEDrito  Santo

              D7            G  G7
Transforma   a minha   vida, quero  renascer

         C          D

Quero  abandonar-me     em  seu  amor
     Bm                 Em

Encharcar-me    em  seus  rios, Senhor
    C         D           Dm7    G
Derrubar   as barreiras  em  meu   cora\xE7\xE3o

 G7        C          D

Quero  abandonar-me     em  seu  amor
     Bm                 Em

Encharcar-me    em  seus  rios, Senhor
    C         D           G  D7

Derrubar   as barreiras  em  meu   cora\xE7\xE3o`},{id:"d308",t:"Venho Senhor Oferecer Em",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1trN51PitSq6Fsmjs0A5A597ZeTJH5AdU.pdf",cifra:`Venho  Senhor  Oferecer

Em          D    Em           D
Venho, Senhor, oferecer com esse vinho e esse p\xE3o

C          Em      Am    B7       Em    C  B
Tudo que existe em meu ser   Tudo que h\xE1 em meu  cora\xE7\xE3o

Em          D    Em       Bm
Vejo agora em Teu Altar essa oferta de Amor

C          Em    Am  B7      Em    A/B
Quero tamb\xE9m  Te consagrar  toda minha vida Senhor

E       G#m      C#m    C#7

E quando este P\xE3o for levantado
 F#m      A     B

E junto com o vinho consagrado
   E     E7    A   C6

Tamb\xE9m  as minhas m\xE3os a Ti levantarei
  Em   Am    B7    Em

Entoarei louvores ao meu Rei`},{id:"d309",t:"VENHO SENHOR OFERECER Em",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1On0jgMgPFYCJiecuCyYUN4QEv52T8t8M.pdf",cifra:`VENHO       SENHOR         OFERECER

Em9          D  Em9            D
 Venho, Senhor, oferecer com esse vinho e esse p\xE3o
C            Em9 A    B7      Em   C B
 Tudo que existe em meu ser tudo que h\xE1 em meu cora\xE7\xE3o
Em9          D  Em9         Bm
 Vejo agora em Teu Altar essa oferta de amor
C          Em   Am Am/G  F#\xBA  B7  Em   B4 B
Quero tamb\xE9m Te consagrar  toda minha vida Senhor

 E      G#m      C#m   C#7 C#/F
E quando este P\xE3o for levantado
 F#m     A      B   B/A
E junto com o vinho consagrado
   E     E7/G#  A9    A9/C
Tamb\xE9m  as minhas m\xE3os a Ti levantarei
 Em     A   B7   Em
Entoarei louvores ao meu Rei`},{id:"d310",t:"Venho, Senhor Oferecer Dm",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1HvamBvfpckYEJqzaBWLo9AmxJIAJvg4_.pdf",cifra:`Venho,    Senhor   Oferecer

Dm           C

Venhor, Senhor  oferecer
Dm            C

Com  este vinho e este p\xE3o

Bb            Dm
Tudo que  existe em meu  ser

Gm     A7        Dm

Tudo que  h\xE1 em  meu  cora\xE7\xE3o
Dm           C

Vejo agora em  Teu altar

Dm         C

Esta oferta de amor
Bb          Dm

Quero  tamb\xE9m   Te consagrar

Gm            Dm   A7
Toda a minha  vida, Senhor

          Refr\xE3o
D        A7      Bm

E quando  este p\xE3o for levantado

Em              A7
E junto com o vinho consagrado

D          D7

Tamb\xE9m   as minhas  m\xE3os

 G     Gm
A Ti levantarei...

  D     A7       Dm

Entoarei louvores ao meu  Rei! (BIS)`},{id:"d311",t:"Vigia esperando aurora",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1bSLghFyS5IECpwXc4Vbyf81BnqD-UfuA.pdf",cifra:`Vigia esperando aurora

INTRO: G C Bm7 Am7 G C Bm7 Am7 G D4 D

 G  C   G    G   C  G
Vigia esperando a aurora qual noiva esperando o amor
  C  Bm7  Em7/9 Am7 D G Am7 G/B
\xC9 assim que o servo espera a vinda do seu Senhor
  C  Bm7  Em7/9 Am7 D G
\xC9 assim que o servo espera a vinda do seu Senhor
     D      G
Ao longe, um galo vai cantar seu canto
   E    E/G# Am7
O sol no c\xE9u vai estender seu manto
   C    D  G
Na madrugada eu estarei desperto
    A    A/C# D C Bm7 Am7
Que j\xE1 vem perto o dia do Senhor!
 G  C   G    G   C  G
Vigia esperando a aurora qual noiva esperando o amor
  C  Bm7  Em7/9 Am7 D G Am7 G/B
\xC9 assim que o servo espera a vinda do seu Senhor
  C  Bm7  Em7/9 Am7 D G
\xC9 assim que o servo espera a vinda do seu Senhor
   D       G
A minha voz vai acordar meu povo
    E     E/G# Am7
Louvando a Deus que faz um mundo novo
    C    D   G
N\xE3o vou ligar se a madrugada \xE9 fria
    A   A/C# D C Bm7 Am7
Que um novo dia logo vai chegar
 G  C   G    G   C  G
Vigia esperando a aurora qual noiva esperando o amor
  C  Bm7  Em7/9 Am7 D G Am7 G/B
\xC9 assim que o servo espera a vinda do seu Senhor
  C  Bm7  Em7/9 Am7 D G
\xC9 assim que o servo espera a vinda do seu Senhor
D C G D C G A A/C# D
C Bm7 Am7 G/B

     D       G
Se \xE9 noite escura, acendo a minha tocha
    E    E/G# Am7
Dentro do peito o sol j\xE1 de...sabrocha
   C      D  G
Filho da luz, n\xE3o vou dormir, vigio:
    A   A/C# D C Bm7 Am7
Ao mundo frio vou levar o amor!
 G  C   G    G   C  G
Vigia esperando a aurora qual noiva esperando o amor
  C  Bm7  Em7/9 Am7 D G Am7 G/B
\xC9 assim que o servo espera a vinda do seu Senhor
  C  Bm7  Em7/9 Am7 D G
\xC9 assim que o servo espera a vinda do seu Senhor
Final: C Bm7 Am7 G C Bm7 Am7 G C Bm7 Am7 G C Bm7 D G`},{id:"d312",t:"Vigiai Vigiai eu vos digo",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1MIMB4iK1C6ayh3pzJ6QX0YYe-E5nKdNS.pdf",cifra:`Vigiai Vigiai eu vos digo

        Am    E       Am         Dm              Am
Vigiai, vigiai, eu vos digo/ N\xE3o sabeis qual o dia ou a hora/
   Dm    E    Am         B7               E

Vigiai, vigiai eu repito/ Eis que vem o Senhor em sua gl\xF3ria! (Bis)

             Em  Am        F   G   Am   C#    Dm
Am
1m Foste amigo antigamente/ Desta terra que amaste/ Deste povo que escolheste/
   B7       E       Dm        Am       Dm   E   Am
Sua sorte melhoraste/ Perdoaste seus pecados/ Tua raiva acalmaste.

            Em   Am           F   G  Am C#  Dm       Am
2m Vem de novo restaurarmnos/ Sempre irado estar\xE1/ Indignado contra n\xF3s/
   B7      E      Dm      Am       Dm     E    Am
E a vida n\xE3o dar\xE1s/ Salva\xE7\xE3o e alegria/ Outra vez, n\xE3o nos trar\xE1s.

           Em   Am         F    G   Am C#    Dm
Am

3m Escutemos suas palavras/ \xC9 de paz que vai falar/ Paz ao povo, a seus fi\xE9is/
     B7        E      Dm        Am      Dm  E    Am
A quem dele se achegar/ Est\xE1 perto a salva\xE7\xE3o/ E a gl\xF3ria vai voltar.

           Em Am       F   G      Am  C#    Dm        Am
4m Eis: Amor, fidelidade/ V\xE3o unidos se encontrar/ Bem assim, justi\xE7a e paz/
     B7         E        Dm     Am      Dm  E    Am
V\xE3o beijarmse e se abra\xE7ar/ Vai brotar fidelidade/ E justi\xE7a se mostrar.

          Em Am         F     G  Am  C#  Dm       Am
5m E vir\xE3o os benef\xEDcios/ Do Senhor a aben\xE7oar/ E os frutos de amor/
    B7       E     Dm        Am     Dm    E  Am
Desta terra v\xE3o brotar/ A justi\xE7a diante dele/ E a paz o seguir\xE1.

         Em     Am         F     G    Am  C#   Dm     Am
6m Gl\xF3ria ao Pai onipotente/ Ao que vem, gl\xF3ria e amor/ Ao Esp\xEDrito cantemos/

      B7       E        Dm        Am        Dm  E    Am
Gl\xF3ria a nosso defensor/ Ao Deus Uno e Trino demos/ A alegria do louvor.`},{id:"d313",t:"Vinde crist\xE3os vinde a porfia",tom:"",m:"Entrada",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1W-xSkg-UrSV2hgQT5T4_XmnY42ZNpwxM.pdf",cifra:`Vinde   crist\xE3os

C           G7   C
1  VINDE CRIST\xC3OS,  VINDE  \xC0 PORFIA
    C       G7   C
   HINOS  CANTEMOS   DE LOUVOR,

    C         G7  C
   HINOS  DE PAZ E DE ALEGRIA,
    C       G7    C
   HINOS  DOS ANJOS  DO  SENHOR:

        C  A7 Dm  G  C Dm   G7
       GL\xD3  \xD3\xD3\xD3\xD3\xD3    \xD3\xD3\xD3\xD3\xD3   \xD3\xD3\xD3\xD3\xD3
 RIA
       C  Bm   C  Dm  C   G

       A DEUS   NAS  AL--TU--RAS ! ! !
        C  A7 Dm  G  C Dm   G7
       GL\xD3  \xD3\xD3\xD3\xD3\xD3    \xD3\xD3\xD3\xD3\xD3   \xD3\xD3\xD3\xD3\xD3
 RIA

       C  Bm   C  Dm  C  G   C
       A DEUS   NAS  AL--TU--UU--RAS ! ! !

    C        G7  C
2  FOI NESTA  NOITE VENTUROSA

    C       G7   C
   DO NASCIMENTO    DO SENHOR,
    C          G7  C
   QUE  ANJOS, DE VOZ  HARMONIOSA,
    C       G7    C

   DERAM   A DEUS O SEU  LOUVOR:

    C        G7    C

3  VINDE JUNTAR-VOS   AOS  PASTORES,
    C       G7  C
   VINDE COM   ELES A BEL\xC9M!
    C        G7   C

   VINDE, CORRENDO    PRESSUROSOS;
   C        G7    C

   O SALVADOR,   ENFIM, NOS VEM`},{id:"d314",t:"Virgem do Sil\xEAncio",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/13xXHxMD8DIZYT6lyyREz7F6qU6KjUQBj.pdf",cifra:`Virgem    do  Sil\xEAncio

A              Bm

Nossa Senhora Virgem do sil\xEAncio
E            A  E7

Quero sempre Te amar
A                Bm

Deitar no Teu colo sentir Teu perfume
 E       G          A

Teu carinho materno ganhar (2x)
D              E

L\xE1grimas de Sangue nos Teus olhos
   C#m        F#m

Estigma e mart\xEDrio da alma
 Bm      E7

M\xE3ezinha minha vida
  Em         A7

Pra igreja quero consumir
 D             E

Quero estar ao Teu lado na Cruz
C#m           F#m

Sofrendo as dores de Jesus
 Bm          E7      A        A7

E dizer que na loucura da Cruz vou seguir. (2x)`},{id:"d315",t:"Vit\xF3ria no Deserto",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1x7v66g-H0QDHO_OxX2Oial9GpptejVF_.pdf",cifra:`Vit\xF3ria       no    Deserto

G       D9    Em C
Quando a noite fria cair sobre mim

G   D9      Em C
E num deserto eu me encontrar
G        D9     Em C
Me ver cercado por eg\xEDpcios e por Fara\xF3
G    D9    Em C
Sendo impedido de prosseguir (2x)

G     D9     Em C

Sei que o Seu fogo cair\xE1 sobre mim
G     D9     Em C
Sei que o Seu fogo cair\xE1 sobre mim
G   D9     Em C
E me levar\xE1 a em Ti confiar
G   D9     Em C
E me levar\xE1 a em Ti confiar

C  D9 G  D9     Em C
Ent\xE3o eu direi, oh oh, abra-se o mar
C  D9 G     D9     Em  C
E eu passarei pulando e dan\xE7ando em Sua presen\xE7a (2x)

C    G        D9

Por isso eu pulo, pulo, pulo, pulo, pulo
     Em C
Na presen\xE7a do Rei
C    G          D9
Por isso eu dan\xE7o, dan\xE7o, dan\xE7o, dan\xE7o, dan\xE7o
     Em C
Na presen\xE7a do Rei
C    G          D9

Por isso eu grito, grito, grito, grito, grito
     Em C
Na presen\xE7a do Rei
C    G          D9
Por isso eu corro, corro, corro, corro, corro
     Em C
Na presen\xE7a do rei`},{id:"d316",t:"Vivo pra teu louvor",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1yF_PndkM36JQ5DFEW8rfMtL8VspRUlLD.pdf",cifra:`Vivo pra teu louvor

INTRO:::: D : A/C# : Bm7 : G9 ::: 4 VEZES

{ A }

D9          E7      G9    Bm7 A

Posso dizer com certeza, sem medo de errar
D          E7    G9               A4
Que Tua casa Senhor, \xE9 melhor pra mim que qualquer lugar
Em7           Bm7   G9         D

S\xF3 em comunh\xE3o Contigo, eu encontro a minha paz
Em7        Bm7    G9              A4
Quero Te levar comigo, a qualquer lugar pode me enviar

D           A
Um dia em Tua presen\xE7a Senhor
    Em7            G     A    D

Vale mais que uma vida inteira longe do Teu amor
              A
Minha vida em Tua presen\xE7a Senho

                1\xAAVEZ ( 2\xAAVEZ )
    Em7          Gm ( G     D )
Tem sentido e alegria plena ,vivo pra Teu louvor

SOLO::: D : A/C# : Bm7 : G9 :: volta ao { A } e pula o solo

G           A/G  D          Bm

Sinto a Tua m\xE3o comigo,fazendo carinho no meu cora\xE7\xE3o
G         A A/C# D
Hoje tenho verdadeira paz

    Em7           A4
Como sou feliz, Te amando mais e mais

D           A

Um dia em Tua presen\xE7a Senhor
    Em7            G     A    D
Vale mais que uma vida inteira longe do Teu amor

              A
Minha vida em Tua presen\xE7a Senhor

    Em7
Tem sentido e alegria plena

Gm         D
Vivo pra Teu louvor
A          Em7
Quero viver para o teu louvor

G     A    D
Vivo pra Teu louvor
A   Em7

Vale mais que uma vida inteira
Gm
Viver pra teu louvor`},{id:"d317",t:"Voc\xEA e Eu",tom:"A",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1tnuS4U_k7VAq60ZsHAhN4zJWJjqOvOEV.pdf",cifra:`Voc\xEA e Eu \u2013 Eliana Ribeiro

Tom: A

A7M    D7M    C#m7
Quero estar com voc\xEA,
 F#7/5+ F#7    Bm7

Lembrar de cada momento bom;
C#m7 Dm7      C#m7 D#m7  Em7 A7/9
Reviver a nossa hist\xF3ria, nosso amor.

D7M      D#m7/5-  G#7/5+ C#m7
Quem nos uniu    foi    Deus,
    F#7/5+ F#7   Bm7  D/E   A7M (1\xAA vezD/E) (2\xAA G#m7/5- C#7)

Para fazer    um s\xF3,  voc\xEA e eu.
F#m7           C#m7
Agora somos um do outro,

D#m7  Em7     A7/9     D7M
Nosso amor foi crescendo aos poucos.
        Dm7
Provado na dor,

       C#m7       F#7/5+ F#7
Como o ouro provado no fogo,
    Bm7       C#m7 Dm7

Pra poder se tornar com o tempo
          C#m7       F#7/5+ F#7
Um belo tesouro, t\xE3o raro no mundo.

   Bm7          D/E       A7M
Sacramento selado por Deus, voc\xEA e Eu`},{id:"d318",t:"YESHUA QUEIMA DE NOVO",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1cuXlj7OCsTjFcI-LGMUO6eSitwSfKwxM.pdf",cifra:`YESHUA/QUEIMA          DE  NOVO

Em
Te chamam de Deus e de Senhor
  C
Te chamam de rei, de salvador
 G            D
E eu me atrevo a Te chamar de meu amor

Em   C
Yeshua, Yeshua
 G   D
Tu \xE9s t\xE3o lindo
      Em
Que eu nem sei me expressar
C   G   D

Yeshua, Tu \xE9s t\xE3o lindo

------------------------------------
   Em       C
Sar\xE7a que s\xF3 queima, que n\xE3o se apaga
   G       D
Somos Tua Igreja, Viemos Te adorar
   Em    C

Neste Teu altar somos sacrif\xEDcio
   G
Vem nos consumir
   D
Estamos aqui
C  D
Aqui

   G         D                       C
Foi a Tua Presen\xE7a que nos trouxe Mostra quem Tu \xE9s
aqui, Senhor                      Em
 C       Em                     Vem nos visitar
N\xE3o desistiremos de Te perseguir   D
  D                             Nos fazer queimar
At\xE9 te encontrar                 Em
                                De novo

     G
Diante da Tua Gl\xF3ria            Em
    D                           Manda Teu fogo, manda Teu fogo
N\xE3o podemos ficar de p\xE9         D
                                Queima de novo, queima de novo`},{id:"d319",t:"\xC9S PRECISOSO EUGENIO JORGE",tom:"",m:"Geral",src:"Cifras PDF",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1wkDABtnw5MT77-NXIo6waeRD20BdWWs5.pdf",cifra:`\xC9S   PRECISOSO

C7M                   Em

\xC9s  precioso    para  mim,   senhor
F7M                          G

\xC9s  grandioso,oh     meu  Deus
C7M                     Am
Tua  bondade    \xE9 sem   fim

     Dm                     G7
Oh,  sim  \xE9s  tudo   pra  mim

C7M                              Em

Ainda   que  os  montes   se  levantem
F7M                               G

E se  transportem     para   o  mar
C7M                           Am
Creio   em  ti  , oh  meu   Senhor

  Dm                    G
E sei   jamais   falhar\xE1s

F                           G/F

Sei  que  em  breve   voltar\xE1s
Em                      Am    Am/G

Como  o  nascer   do  sol
Dm7                 G         Em
Para  tudo   renovar    bem  sei

        Am    Dm        G7       C7M   F
Minha   vida  sim   sentido   ter\xE1,

            C7M  Dm7    G        C
sentido   ter\xE1   ,  sentido   ter\xE1
             F                C7M

Sentido   ter\xE1,   sentido    ter\xE1`},{id:"d320",t:"HINO SANTA TERESINHA",tom:"",m:"Nossa Senhora / Santos",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1zwIvj2wqCIXVvBUh7IjqKwZ2MNlX1iXh.pdf",cifra:`HINO DE SANTA TERESINHA

        C          Am            Dm
SANTA TERESINHA DO MENINO DEUS.
G          Dm    G            C
\xD3 GRANDE SANTINHA, SORRISO DOS C\xC9US,
              A7                  Dm
MIL FLORES MIMOSAS DERRAMAS DE L\xC1.
G            C    D7      G7
UMA DESSAS ROSAS PARA N\xD3S SER\xC1. SIM!

        C          Am        Dm
POR VERDES OUTEIROS \xC0 TUA CAPELA
G          Dm    G            C
V\xCAM ESTES ROMEIROS \xC0 PROCURA DELA
        A7                Dm
D\xC1-NOS O QUE PEDE: NOSSO CORA\xC7\xC3O
G            C    G7    C
A TODOS CONCEDE TUA PROTE\xC7\xC3O.

        C          Am            Dm
TAUMATURGA SANTA, SANTA DA BONDADE.
G          Dm    G            C
DESTA TURBA \xC9 TANTA A NECESSIDADE.
              A7                    Dm
OUVE A PRECE ARDENTE QUE VEM EXALTAR
G            C    D7      G7
O TEU POVO CRENTE AOS P\xC9S DESTE ALTAR. SIM!

        C          Am            Dm
IRM\xC3 DOS ANJINHOS MILHARES DE GRA\xC7AS
G          Dm    G            C
JUNCAM OS CAMINHOS POR ONDE TU PASSAS.
              A7                Dm
CHOVAM TUAS FLORES, CHOVAM ROSAS MIL.
G            C    G7      C
COBRE DE FAVORES TODO TEU BRASIL.`},{id:"d321",t:"MEU CEU",tom:"",m:"Geral",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1IRnEF7VvIGDiShXYWo21x29RlEnh-mks.pdf",cifra:`MEU C\xC9U

F                    Am
PASSAREI O MEU C\xC9U
              Bb  Dm    G   C
FAZENDO O BEM SOBRE A TERRA!
A7                  Dm
JUNTO A DEUS COM OS ANJOS
G            C    C7
ROSAS DISTRIBUIREI.
F              Bb
CADA FLOR MEU AMOR
        F      C      F        C7
TOCANDO O AMOR DE JESUS!

F                    G
UMA CHUVA DE ROSAS
C7                  F
MANDAREI SOBRE A TERRA:
Bb            Bbm  F      D7
GRA\xC7AS DE AMOR, DO MEU SENHOR
G      C7      F
FLORES DO CORA\xC7\xC3O!

F                    Am
INFELIZ L\xC1 NO C\xC9U
Bb  Dm    G   C
SERIA EU, N\xC3O PUDESSE
A7                  Dm
PROMOVER ALEGRIAS
G            C    C7
AOS QUE AMO AQUI!
F              Bb
QUERO SIM, AT\xC9 O FIM,
        F      C      F        C7
MEU C\xC9U NA TERRA PASSAR.`},{id:"d322",t:"MINHA PEQUENA FLOR",tom:"",m:"Geral",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1wpYYni_dG-P7Htu3WTsVJlTan9S4fkc8.pdf",cifra:`MINHA PEQUENA FLOR

C              F   G              C  C7
Minha Pequena flor, mostra-me o teu poder
C              F   G              C      Am
Minha Pequena flor, mostra-me o teu poder, nesta hora
        F                Dm G    C
Pois no cora\xE7\xE3o da igreja, eu decidi ser amor

F            C   F            C
Se eu me afastei, se amar eu me cansei
Dm                Am
mostra-me com teu amor
Dm          G      C  C7
A Sagrada Face do meu Senhor

C              F   G              C  C7
Minha Pequena flor, mostra-me o teu poder
C              F   G              C      Am
Minha Pequena flor, mostra-me o teu poder, nesta hora
        F                Dm G    C
Pois no cora\xE7\xE3o da igreja, eu decidi ser amor

F            C   F            C
Se o tempo ent\xE3o passou e o adulto se cansou
Dm                Am
mostra-me com teu amor
Dm          G      C  C7
O Menino Jesus, e meu Senhor`},{id:"d323",t:"O QUE AGRADA A DEUS",tom:"",m:"Geral",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1R2of6StZvRe1RwpfDPyhH35a5TLHC62E.pdf",cifra:`O QUE AGRADA A DEUS

            E                    C#m
O que agrada a Deus, em minha pequena alma.
            F#m      B          E  B7
\xC9 que eu olho minha pequenez e minha pobreza
            E                    C#m
O que agrada a Deus, em minha pequena alma.
            F#m      B          E  E7
\xC9 que eu olho minha pequenez e minha pobreza

        A  B  G#m C#m
\xC9 a esperan\xE7a    cega
        F#m B          E   E7
que tenho em sua miseric\xF3rdia
        A  B  G#m C#m
\xC9 a esperan\xE7a    cega
        F#m B          E   B7
que tenho em sua miseric\xF3rdia`},{id:"d324",t:"PAO E VINHO",tom:"A",m:"Ofert\xF3rio",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1GyJ_qKG6qeorblcK3FwcytvPGup9tqbb.pdf",cifra:`P\xC3O E VINHO
Tom: A

[Intro] D9  E  C#m7  Bm7

        A9                E              F#m7
P\xE3o e vinho te apresentamos nesse altar
        C#m7              Bm7
Como sinal que tu recolhes nossa oferta
        Bm7
Tudo o que somos deixamos aqui

A/C#      D9          C#m7
\xC9 um milagre que se d\xE1
            D9              F#m7
O p\xE3o e o vinho em corpo e sangue
        Bm7  E
V\xE3o se transformar
A/C#      D9          C#m7
N\xE3o h\xE1 limites para o amor
            D9              F#m7
Vem transformar tamb\xE9m minha vida
        Bm7  E          A    A4  A/C#
Oh senhor, \xE9 teu esse milagre de amor

[Primeira Parte]
        D9                A          Bm7
P\xE3o e vinho te apresentamos nesse altar
        F#m7              G9          F#m7
Como sinal que tu recolhes nossa oferta
        Em7
Tudo o que somos deixamos aqui

D/F#      G9          F#m7
\xC9 um milagre que se d\xE1
            G9              Bm7
O p\xE3o e o vinho em corpo e sangue
        Em7  A
V\xE3o se transformar
D/F#      G9          F#m7
N\xE3o h\xE1 limites para o amor
            G9              Bm7
Vem transformar tamb\xE9m minha vida
        Em7  A    D9  Bm7 Em7
Oh senhor, \xE9 teu esse milagre de amor`},{id:"d325",t:"POE TUA M\xC3O",tom:"",m:"Geral",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/18zDcu4OE_SwEKfZlcrVUTPOeD5OXFIWr.pdf",cifra:`P\xD5E TUA M\xC3O
(Nossa Senhora Auxiliadora)

C                    F
Nossa Senhora Auxiliadora
Dm        G
Por tuas m\xE3os aqui estamos n\xF3s
C9                C/E
Caminhas sempre ao nosso lado
F      G
O teu amor de m\xE3e sempre nos guiou
C/E      Em
De Dom Bosco e Mazzarello
F
Foste sempre intercessora
F      G            C    Gm11
Na miss\xE3o de evange-li-zar
        F            G5      C    Gm11
E as suas vidas aos jovens dedicar

        G11+ F            G
P\xF5e Tua m\xE3o,          minha Rainha
        C  G            Am  C/G
P\xF5e tua m\xE3o     antes da minha
        F            G
\xC9s nossa M\xE3e     Auxiliadora
        C  Gm11
Ora por n\xF3s
        G11+ F            G
P\xF5e tua m\xE3o,          minha Rainha
        C  G            Am  C/G
P\xF5e tua m\xE3o     antes da minha
        F
\xC9s nossa M\xE3e     Auxiliadora
        C  F  G
Roga por n\xF3s

C                    F
Nossa Senhora Auxiliadora
Dm        G5
\xC9s a nossa m\xE3e e mestra
        C      Am
Foste Tu quem tudo sempre fez
F            G
E a teu filho sempre nos levou
C/E      Em
De Dom Bosco e Mazzarello
F
Foste sempre intercessora
F      G            C    Gm11
Na miss\xE3o de evange-li-zar
        F            G5      C    Gm11
E as suas vidas aos jovens dedicar`},{id:"d326",t:"QUAL A ROSA DESFOLHADA",tom:"",m:"Nossa Senhora / Santos",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1VRjSo685oXzbJHnpr8TWneMXVU2F-JaY.pdf",cifra:`QUAL ROSA DESFOLHADA

F                  Bb      Gm
QUAL ROSA DESFOLHADA
        C                Am
EU ENTREGO A TI SENHOR,
        C          Dm    Bb
A MINHA VIDA INTEIRA
        C      F
EM H\xD3STIA DE LOUVOR!

        A          Dm    A          Dm
1) OS SONHOS, A JUVENTUDE COLOCO EM TEU ALTAR,
        C          Dm  G    C  C7      F
N\xC3O TENHO MAIS DESEJO SE N\xC3O A TI AMAR!

        A          Dm    A          Dm
2) CONSOME A MINHA VIDA, NO FOGO DO TEU AMOR,
        C                G    C  C7      F
AO BEM DE TUA IGREJA DESFOLHE-SE ESTA FLOR!

        A          Dm    A          Dm
3) SALVAR, JESUS AS ALMAS TE PE\xC7O COM TODO O ARDOR,
        C                G    C      F
DA TUA MISERIC\xD3RDIA SER V\xCDTIMA DE AMOR!

        A          Dm    A          Dm
4) AMADO, MEU GRANDE ANSEIO, SOMENTE DE AMOR VIVER,
        C          Dm  G    C      F
COMPLETA COM ESTA GL\xD3RIA AMAR-TE AT\xC9 MORRER!`},{id:"d327",t:"SANTO E CORDEIRO",tom:"",m:"Cordeiro",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/13WvL8fNUPnce6rbXXAcwPvSUH6Uzvgc0.pdf",cifra:`SANTO 2 - AMOR E ADORA\xC7\xC3O

G    D/F#  C      D
Santo    santo  san....anto
G    D/F#      D/C  C  D/C C
Senhor Deus do universo
F                C            G
C\xE9us e terra proclamam a vossa gl\xF3ria
F      C    D
Hosana nas alturas
F            C            G
Bendito o que vem em nome do Senhor
F      C    D
Hosana nas alturas

CORDEIRO DE DEUS

G                Bm7      C9 D4   D
Cordeiro de Deus que tirais o pecado do
C9      D4    D
mundo, tende piedade
G                Bm7      C9 D4   D
Cordeiro de Deus que tirais o pecado do
C9      D4    D
mundo, tende piedade
Em                            C  D
Cordeiro de Deus que tirais o pecado do mundo
        G  D/F#  C  D
Dai-nos a paz, dai-nos a paz
        G  D/F#  C9 D
Dai-nos a vossa paz, dai-nos a  paz`},{id:"d328",t:"SENHOR TUA PALAVRA",tom:"",m:"Geral",src:"Santa Teresinha",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1Ohv0wVkGmJay7xhois698fmNLSaAI9m4.pdf",cifra:`SENHOR TUA PALAVRA

E            B            E
Senhor a tua Palavra nos faz lembrar Maria
    A    E      B    E E7
N\xE3o s\xF3 a meditava / mas sempre a cumpria.

    A  B  E C#m F#m  B7  E
Aleluia, aleluia, a - le - lui - a
    A  B  E C#m F#m  B7  E
Aleluia, aleluia, a - le - lui - a

E            B            E
Dom Bosco dela fala com f\xE9 e gratid\xE3o
    A    E      B    E7
Foi ela quem fez tudo na sua congrega\xE7\xE3o.

E            B            E
Agora ela ensina pra quem \xE9 aprendiz
    A    E      B    E7
Jesus \xE9 plena vida fazei o que vos diz.`},{id:"d329",t:"Carta de Roma",tom:"",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1TEGayECOpZSJYxL786z7OqQ3CJFRw7m5.pdf",cifra:`CARTA DE ROMA

                  Autor e Int\xE9rprete: Pe. Osmar Bezutte

  Dm     Gm     Dm
Sonhei co\u2019o Orat\xF3rio de outrora,
  A7         Dm
cen\xE1rio de grande alegria:
 Dm    Gm  Dm
corridas e jogos de bola,
  A7         Dm
tamb\xE9m se cantava, se ria...
 Bb          F
Reinava a maior confian\xE7a
  C           F
na casa, tal qual sempre quis;
  Gm             Dm
lembrei-me de um mundo-crian\xE7a:
 A7       D
a minha fam\xEDlia feliz!
D  A   D   A    Bm
Vamos voltar aos dias do amor,
   G   F#m Bm E7/9   A
aos dias do pai, do amigo, do irm\xE3o;
D A D  A     Bm
e voltar\xE1 a paz do Senhor
G A/G D/F# Bm    Em A Dm
numa s\xF3 al - ma, num s\xF3 cora\xE7\xE3o.

Depois, nova cena se viu
dos tempos que um dia vir\xE3o:
os jovens tristonhos e frios,
cansados e na solid\xE3o.
\u2018Distantes das coisas do c\xE9u
faziam-me tanto sofrer\u2019,
viviam vagando ao l\xE9u.
\u201CMeu Deus, o que vamos fazer?\u201D.
                        18`},{id:"d330",t:"Cifras - Novena Auxiliadora",tom:"",m:"Nossa Senhora / Santos",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1GsXrxn6qUw2oa2xpXLDmsjlnbUPIPbN7.pdf",cifra:`P\xD5E TUA  M\xC3O

C       F
Nossa senhora auxiliadora
Dm       F  G

Por tuas m\xE3os aqui estamos n\xF3s
C9        C/E
Caminha sempre ao nosso lado
F      G
O teu amor de m\xE3e sempre nos guiou
C/E      Em
De Dom Bosco e Mazzarello
F       G

Foste sempre intercessora
F G    C Am
Na miss\xE3o de evangelizar
F    G     C C7
E a sua vida aos jovens dedicar

 G11+ F    G
P\xF5e tua m\xE3o minha rainha

   C G    C/E C/G
P\xF5e tua m\xE3o antes da minha
 F      G
\xC9s nossa m\xE3e auxiliadora
   C C7 (F G)
Rogai por n\xF3s

C       F
Nossa senhora auxiliadora

Dm       F G5
Essa \xE9 a nossa m\xE3e e mestra
C      Am
Foste tu que tudo sempre v\xEA
F       G
E teus filhos sempre nos guiou
C/E      Em

De Dom Bosco e Mazzarello
F       G5
Foste sempre intercessora
F G    C Am
Na miss\xE3o de evangelizar
F    G5    C  C7
E a sua vida aos jovens dedicar

                SENHOR  QUE VIESTES SALVAR

  D          A        D D7
Senhor que vieste salvar

      Em           A7    D  D7
Os cora\xE7\xF5es arrependi__idos

   G A7     D Bm     Em    A7     D  D7
Piedade, piedade, pieda___de de n\xF3s
   G  A7    D Bm     Em  A7     D  A7

Piedade, piedade, pieda___de de n\xF3s

   D           A      D D7
\xD3 Cristo que vieste chamar
       G          A    D     D7

Os pecadores humilha-ados

   G A7     D Bm     Em    A7     D  D7
Piedade, piedade, pieda___de de n\xF3s
   G  A7    D Bm     Em  A7     D  A/B
Piedade, piedade, pieda___de de n\xF3s

    D         A             D D7
Senhor que intercedeis por n\xF3s
              Em             A7  D D7
Junto a Deus Pai que nos perdo__a

   G A7     D Bm     Em    A7     D  D7
Piedade, piedade, pieda___de de n\xF3s
   G A7     D Bm     Em    A7     D  A7
Piedade, piedade, pieda___de de n\xF3s

               Gl\xF3ria  a Deus  nas Alturas

          D           C
          Gl\xF3ria a Deus nas alturas
           G                    D
          E paz na terra aos homens por Ele amados
            D     C        G           D

          Senhor Deus, Rei dos c\xE9us, Deus Pai todo poderoso
                 Am D
          N\xF3s vos louvamos
                  Am D
          N\xF3s vos bendizemos
                 Am D
          N\xF3s vos adoramos
                  Am D

          N\xF3s vos glorificamos
                    C      G       D
          N\xF3s vos damos gra\xE7as, por vossa imensa gl\xF3ria.
            D      C   G     D
          Senhor Jesus Cristo, Filho Unig\xEAnito
            D        C       G         D
          Senhor Deus, Cordeiro de Deus, Filho de Deus Pai
          Am          G        C          D

          V\xF3s que tirais o pecado do mundo, tende piedade de n\xF3s
          Am          G
          V\xF3s que tirais o pecado do mundo
          C         D
          Acolhei a nossa s\xFAplica
          Am          G
          V\xF3s que estais \xE0 direita do Pai
          C          D

          Tende piedade de n\xF3s
                 Am D
          S\xF3 v\xF3s sois Santo
                  Am D
          S\xF3 v\xF3s sois o Senhor
                 C        D
          S\xF3 v\xF3s o Alt\xEDssimo, Jesus Cristo
          E        A

          Com o Esp\xEDrito Santo
                     G   D
          na gl\xF3ria de Deus Pai. Am\xE9m!

Aclama\xE7\xE3o - Auxiliadora

                    JURAS  DE  AMOR

Juras   de  Amor

Tom:  F#

E          A/E         B/E      A/E
Quero  transformar   numa can\xE7\xE3o
E          A/E         B      B4   B
As juras  de  amor por  ti  meu Deus
      E7M              F#m7M     G#m7M   F#m7MG#m7M

Entraste  em  minha  vida sedutor
A                              B
J\xE1 n\xE3o  sei viver  sem  teu  amor

E/G#           A     B/A        G#m7

Tudo  te entreguei,   nada  me restou
 C#m7       F#m7  B         Bm
Livre  eu fiquei  para  te  amar meu  Deus
E7          A     B/A         G#m7

Tudo  me pediste,  nada  eu  te neguei
C#m7          A      C#m7     B/D#
Hoje  eu sou  feliz  assim,  tenho  a ti meu
E
Deus

SANTO

Tom: D

 D             Bm
Santo, Santo, Santo
  G                 A
Senhor, Deus do universo
   D                Bm

O c\xE9u e a terra proclamam
    G       A
A Vossa gl\xF3ria

[Refr\xE3o]

   D           Bm
Hosa-na nas alturas
G       A

Hosa-aana
   D           Bm
Hosa-na nas alturas
G       A
Hosa-aana

 D          Bm
Bendito o que vem

    G         A
Em nome do Senhor
   D          Bm
Bendito o que vem
    G         A

Em nome do Senhor

Cordeiro      de   Deus

               G          Bm7                  C9
Cordeiro  de  Deus que  tirais  o pecado   do mundo
          Am7         D        G   C/G  D/G

Tende  piedade,  piedade  de  n\xF3s

               G          Bm7                  C9
Cordeiro  de  Deus que  tirais  o pecado   do mundo

          Am7         D        G   C/G  D/G
Tende  piedade,  piedade  de  n\xF3s

               G          Bm7                  C9
Cordeiro  de  Deus que  tirais  o pecado   do mundo

           Am7       D D7 C  G
Dai-nos  a paz,  a vossa  paz

Como      \xC9s  Lindo

Tom: D

[Intro] D9 Bm7 G7M  A
       D9  Bm7 G7M  A

    D          A/C#       Bm7   Bm/A
Que bom, senhor, ir ao teu encontro
  G           G/A      D       (A/C#)
Poder chegar e adentrar \xE0 tua casa
  Bm       F#m7   G           G/A

Sentar-me contigo e partilhar da mesma mesa

D      F#m Bm7     F#m7
Te olhar,   te tocar
  G           G/A         D      (A/C#)
E te dizer: meu Deus, como \xE9s lindo!
Bm7   F#m  Bm7    F#m7
Te olhar,   te tocar
  G            G/A         D

E te dizer: meu Deus, como \xE9s lindo!

( D9 )

  D         F#m             Bm7  G
\xD3 meu senhor, sei que n\xE3o sou nada
   Em        G/A            D      (A/C#)
Sem merecer, fizeste em mim tua morada

   Bm      F#m7       G        G/A
Mas ao receber-te, perfeita comunh\xE3o se cria

D       F#m7 Bm7   F#m7
Sou em ti,   \xE9s em mim
   Em            G/A         D    A/C#
Minh'alma diz: meu Deus, como \xE9s lindo!
Bm        F#m Bm7   F#m7
Sou em ti,   \xE9s em mim

    G            G/A          D      G/A
Minh'alma diz: meu Deus, como \xE9s lindo!

  D     F#m7 Bm7   F#m7 G  G/A  D  G/A
Lauera rauara uera raue Uere uere eee
  D     F#m7 Bm7   F#m7 G  G/A  D  G/A
Lauera rauara uera raue Uera uera
  D     F#m7 Bm7   F#m7 G  G/A  D

Raraua Rarauaaaa Huuuuu. como \xE9s lindo`},{id:"d331",t:"Dom Bosco dos Sonhos",tom:"",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1XanD2550Ad69zOvaj-PH2tgU6It26bQG.pdf",cifra:`DOM BOSCO DOS SONHOS

                    Autor: Dalcides Biscalquin
                     Int\xE9rprete: Paulo Aquino

     F      Bb      F
Os teus sonhos percorreram tantas noites
   Bb     C     A7      Dm
e chegaram at\xE9 n\xF3s como a luz no amanhecer,
   Bb      C       A7      Dm
invadindo os nossos cora\xE7\xF5es, cansados de esperar
   Bb     C     F   F7
o encanto e a magia das manh\xE3s.
     Bb       C       Dm
Os teus sonhos foram muito mais al\xE9m
Bb        C   F  F7
do que os teus p\xE9s pisaram.
     Bb      C       Dm
Os teus sonhos ir\xE3o muito mais al\xE9m
Bb   C   F
de onde j\xE1 chegaram.

No jardim as flores t\xEAm ainda espinhos.
a beleza e a dor s\xE3o as cores do caminho.
Os teus passos seguem firmes,
ultrapassam as fronteiras,
pois carregas o infinito no olhar.

Muitos jovens te encontram pelas pra\xE7as,
reconhecem tua voz na alegria de uma festa
e se tornam teus amigos. Eles todos fazem parte
dos teus sonhos que agora vivem em n\xF3s.

                         15`},{id:"d332",t:"Hino Auxiliadora",tom:"G",m:"Nossa Senhora / Santos",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1_Ok7eeEYvWySLjnmHcagDLRFRAR-RTgo.pdf",cifra:`AUXILIADORA, VIRGEM FORMOSA
(V. Cimatti) - Tom: G

    G    C    D      G
1. Auxiliadora, Virgem Formosa
Em      Am    D      G
Dos pequeninos, m\xE3e dadivosa
G      C    D      G
De mil tormentas, entre o furor
Em            Am    D      G
Teus filhos salva, Astro de Amor

G7      C    D      G
Bradamos todos, numa s\xF3 voz
        C    Am D    G
Auxiliadora rogai por n\xF3s
    C      G    Am D    G
Auxiliadora rogai por n\xF3s

    G    C    D      G
2. Tu que do emp\xEDreo, \xE9s soberana
Em      Am    D      G
Tem d\xF3 da imensa mis\xE9ria humana
G      C    D      G
Do nosso ex\xEDlio pelo caminho
Em            Am    D      G
Envolve a todos no-o teu carinho

    G    C    D      G
3. A efige diz-nos quanto \xE9s bondosa
Em      Am    D      G
Virgem Maria, qu\xE3o poderosa
G      C    D      G
Jesus que apertas ao cora\xE7\xE3o
Em            Am    D      G
O cetro r\xE9gio que tens na m\xE3o`},{id:"d333",t:"Lembran\xE7as",tom:"",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1hyeMIizYYvb1CU95UppnSZnrX1gjOjFi.pdf",cifra:`LEMBRAN\xC7AS

                   Autor: Pe. Gild\xE1sio Mendes
                   Int\xE9rprete.: Helena Rocha

    C   F/C   C
Eu te vejo andando nas ruas
         F/C  C
com aquele sorriso de pai.
    F         Em Am
Eu te vejo vagando nas pra\xE7as,
 Dm    G   C
levando o amor e a paz.
   F     G     Am
Eu te vejo brincando nos p\xE1tios
     G           Am
com aqueles que vivem sem p\xE3o.
    F     G    Am
Eu teu vejo bem perto dos jovens
    G          C
com aquela presen\xE7a de irm\xE3o.
C7        F G/F       Em
Eu quero aprender o teu jeito de amar
Am   Dm G          C
e hoje viver como soubeste viver.
C7      F G/F      Em
Eu quero seguir o caminho do Pai
Am      Dm  G            C
e ser para os jovens um instrumento de paz.
Eu te vejo sonhando o futuro
e buscando um mundo melhor.
Eu te vejo rompendo os muros
pra levar a mensagem de amor.
Eu te vejo naquela alegria
que nos mostra o caminho de Deus.
Eu te vejo cantando a Maria
e vivendo para os jovens seus.
                        12`},{id:"d334",t:"letra la vem chegando a reden\xE7\xE3o",tom:"",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1vlLuZCPvh1yBfgBtTCB_tR8M5UgJcLfV.pdf",cifra:`L\xE1 vem, l\xE1 vem (Abertura)

         Of\xEDcio Divino das Comunidades II \u2013 N\xFAm. 115 \u2013 Tempo do Advento

                                             L. e M.: Reginaldo Veloso

        C7     F      C7                 F       C
1. O sert\xE3o seco pela chuva suspirar os oprimidos gemem o peito em ora\xE7\xE3o.
        C7       F         C7               F        C
Vem, \xF3 Senhor, nos libertar, n\xE3o tardes mais junta esse povo e realiza a promiss\xE3o.
  Gm              C       Gm
L\xE1 vem, l\xE1 vem, j\xE1 se aproxima a reden\xE7\xE3o (bis)
        C7      F        C7                F       C
2. A voz do anjo sussurrou nos teus ouvidos, Ave, Maria! Ser\xE1s m\xE3e da Salva\xE7\xE3o.

     C7      F       C7                   F          C
Maria, Igreja, vai dizer aos oprimidos que a terra nova j\xE1 se encontra em gesta\xE7\xE3o.
        C7      F      C7                        F        C
3. Das encurvadas, as cabe\xE7as se levantam dos explorados, homens sem as cansadas m\xE3os.
     C7       F          C7              F        C
E dos gemidos v\xE3o virando um forte canto o pobre unido \xE9 sinal de reden\xE7\xE3o.

                                                    Rev. 1.0 \u2013 P\xE1g. 1`},{id:"d335",t:"O Senhor colocou-nos no mundo",tom:"",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/10oFAoFLpaOcJqBuXtaaZEWIvOEHuRcPO.pdf",cifra:`O
           SENHOR COLOCOU-NOS NO MUNDO
                 Autor e Int\xE9rprete: Pe. Osmar Bezutte

   Gm   F      Gm
O Senhor colocou-nos no mundo
     Cm F    Bb D7
para os outros, meu amigo;
     Gm     F    Bb F
quem demora em se dar nesta vida
Gm   D  G C G
corre grande perigo.
         Em           A7/9
Nesta hora, Senhor, na alegria do ter,
          D
quero a vida te dar;
B7        Em     C     G
dar a m\xE3o ao menor e me comprometer
    D     G C G
na coragem de amar.

\xC9 feliz quem a Ele se entrega
desde cedo, quando jovem;
muito fruto depois colher\xE1
como o Filho do Homem.

                        10`},{id:"d336",t:"Poe Tua Mao",tom:"C",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1RK9nB5Z_gOso1v_wSNofeUEAqfL_DuKn.pdf",cifra:`P\xD5E TUA M\xC3O
Salesianos (Sara Bianchi e Irm\xE3 Celene Couto) - Tom: C

C                    F
Nossa Senhora Auxiliadora
Dm        G
Por tuas m\xE3os aqui estamos n\xF3s
C9                C/E
Caminhas sempre ao nosso lado
F      G
O teu amor de m\xE3e sempre nos guiou
C/E      Em
De Dom Bosco e Mazzarello
F
Foste sempre intercessora
F      G            C    Gm11
Na miss\xE3o de evange-li-zar
        F            G5      C    Gm11
E as suas vidas aos jovens dedicar

        G11+ F            G
P\xF5e Tua m\xE3o,          minha Rainha
        C  G            Am  C/G
P\xF5e tua m\xE3o     antes da minha
        F            G
\xC9s nossa M\xE3e     Auxiliadora
        C  Gm11
Ora por n\xF3s
        G11+ F            G
P\xF5e tua m\xE3o,          minha Rainha
        C  G            Am  C/G
P\xF5e tua m\xE3o     antes da minha
        F
\xC9s nossa M\xE3e     Auxiliadora
        C  F  G
Roga por n\xF3s

C                    F
Nossa Senhora Auxiliadora
Dm        G5
\xC9s a nossa m\xE3e e mestra
        C      Am
Foste Tu quem tudo sempre fez
F            G
E a teu filho sempre nos levou
C/E      Em
De Dom Bosco e Mazzarello
F
Foste sempre intercessora
F      G            C    Gm11
Na miss\xE3o de evange-li-zar
        F            G5      C    Gm11
E as suas vidas aos jovens dedicar`},{id:"d337",t:"Senhor Tua Palavra",tom:"",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1rNrPYYoaVMFnyQmH5K-AkCqr8MMd1JcU.pdf",cifra:`SENHOR TUA PALAVRA
Intro: (E A B E)

E            B            E
Senhor a tua Palavra nos faz lembrar Maria
    A    E      B    E E7
N\xE3o s\xF3 a meditava / mas sempre a cumpria.

    A  B  E C#m F#m  B7  E
Aleluia, aleluia, a - le - lui - a
    A  B  E C#m F#m  B7  E
Aleluia, aleluia, a - le - lui - a

E            B            E
Dom Bosco dela fala com f\xE9 e gratid\xE3o
    A    E      B    E7
Foi ela quem fez tudo na sua congrega\xE7\xE3o.

E            B            E
Agora ela ensina pra quem \xE9 aprendiz
    A    E      B    E7
Jesus \xE9 plena vida fazei o que vos diz.`},{id:"d338",t:"Tu \xE9s Dom Bosco",tom:"",m:"Geral",src:"Dom Bosco",u:"https://zkqzkazxeiouwxxohfzo.supabase.co/storage/v1/object/public/cifras/1iu0XhWEdP4gu7xt2itvsyzWYYRVpXdFz.pdf",cifra:`TU \xC9S DOM BOSCO
Autor e int\xE9rprete: Jean Carlos de Souza Marcelino

  A9          E/G#     F#m A/C#
Tu \xE9s a semente que um dia o sonho plantou
  D          E        A E/B A/C#
Tu \xE9s o saltimbanco menino que Deus aben\xE7oou
  D          Dm       A/E     C#/E# F#m
Tu \xE9s o pastorzinho dos Becchi, e a sua vida inteira dedicou
  Bm        E           A D E
E at\xE9 o ultimo suspiro foi para os jovens que amou
  A       E/G#       F#m  F#m/E
Tu \xE9s essa doce figura, um anjo paternal
  D           E          A E/B A/C#
Tu \xE9s o nosso exemplo de um amor incondicional
    D            Dm   A/E  C#/E# F#m
Tu \xE9s filho de Mam\xE3e Margarida, e essa tudo te ensinou
    Bm             E       A     E/G#
E pra Nossa Senhora quando pequeno ela te consagrou
F#m    C#m7   D      B/D#  E
N\xE3o com pancadas Jo\xE3o, mas com amor no cora\xE7\xE3o
        A           E/G#   F#m E/G# F#m/A
Tu \xE9s Dom Bosco Pai e Mestre de toda Juventude,
       Bm       Bm/A         E/G# E/F#
Tu \xE9s Dom Bosco menino pobre que a Deus amou.
E E/D   C#m        C#/E#    F#m F#m/E
Tu \xE9s Dom Bosco somos, o teu sonho concretizado
D     A/E          E              D     A
Tu \xE9s Dom Bosco n\xF3s somos os teus queridos jovens amados.

                                                11`}],S={async get(o){try{const{data:e}=await SB.from("missa_kv").select("value").eq("key",o).maybeSingle();return e?e.value:null}catch(e){return console.error(e),null}},async set(o,e){try{return await SB.from("missa_kv").upsert({key:o,value:e,updated_at:new Date().toISOString()}),!0}catch(a){return console.error(a),!1}}},uid=o=>(o||"u")+Date.now().toString(36)+Math.random().toString(36).slice(2,6),norm=o=>(o||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),nt=o=>norm(o).replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(),driveEmbed=o=>{const e=(o||"").match(/\/d\/([A-Za-z0-9_-]+)/);return e?`https://drive.google.com/file/d/${e[1]}/preview`:o};function ymd(o){const e=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),u=String(o.getDate()).padStart(2,"0");return`${e}-${a}-${u}`}function parseYmd(o){const[e,a,u]=o.split("-").map(Number);return new Date(e,a-1,u)}function startOfWeek(o){const e=new Date(o);e.setHours(0,0,0,0);const a=(e.getDay()+6)%7;return e.setDate(e.getDate()-a),e}function fmtDiaCurto(o){return`${DOW_NOME[o.getDay()].slice(0,3)} ${String(o.getDate()).padStart(2,"0")}/${String(o.getMonth()+1).padStart(2,"0")}`}function fmtDiaLongo(o){return`${DOW_NOME[o.getDay()]}, ${String(o.getDate()).padStart(2,"0")}/${String(o.getMonth()+1).padStart(2,"0")}/${o.getFullYear()}`}const SH=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ENH={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#",Cb:"B",Fb:"E","E#":"F","B#":"C"};function shiftRoot(o,e){let a=ENH[o]||o,u=SH.indexOf(a);return u<0?o:SH[((u+e)%12+12)%12]}const CH_RE=/^([A-G](?:#|b)?)((?:maj|min|sus|add|dim|aug|m|M|°|º|\+|\d|\(|\)|b|#|\.)*)(?:\/([A-G](?:#|b)?))?$/;function isChordToken(o){return o?!!o.match(CH_RE):!1}function transposeToken(o,e){const a=o.match(CH_RE);if(!a)return o;let u=shiftRoot(a[1],e)+(a[2]||"");return a[3]&&(u+="/"+shiftRoot(a[3],e)),u}function isChordLine(o){const e=o.trim().split(/\s+/).filter(Boolean);return e.length?e.filter(isChordToken).length/e.length>=.6:!1}function transposeText(o,e){return!e||!o?o:o.split(`
`).map(a=>isChordLine(a)?a.replace(/\S+/g,u=>isChordToken(u)?transposeToken(u,e):u):a).join(`
`)}function App(){const[o,e]=useState(!0),[a,u]=useState("repertorio"),[r,f]=useState({}),[E,D]=useState([]),[m,v]=useState(DEFAULT_TEAMS),[c,i]=useState({}),[l,n]=useState({font:17}),[d,z]=useState(null),[A,g]=useState(null),[B,h]=useState(null),[t,x]=useState(null),[G,M]=useState(null),[k,L]=useState(null),[O,P]=useState(()=>{try{return localStorage.getItem("mt_editor")==="1"}catch(s){return!1}}),[K,T]=useState(!1),w=useRef({}),I=useCallback(async()=>{const[s,p,q,eo,ao,no,so]=await Promise.all([S.get("mt_over"),S.get("mt_added"),S.get("mt_teams"),S.get("mt_masses"),S.get("mt_settings"),S.get("mt_seedV"),S.get("mt_pin")]);no!==SEED_VERSION&&await S.set("mt_seedV",SEED_VERSION),f(s||{}),D(p||[]),v(q&&q.length?q:DEFAULT_TEAMS),i(eo||{}),n(b({font:17},ao||{})),L(so||null),e(!1)},[]);useEffect(()=>{I();const s=SB.channel("missa_kv_rt").on("postgres_changes",{event:"*",schema:"public",table:"missa_kv"},()=>I()).subscribe();return()=>{try{SB.removeChannel(s)}catch(p){}}},[I]);const j=(s,p,q)=>{q(p),w.current[s]&&clearTimeout(w.current[s]),w.current[s]=setTimeout(()=>S.set(s,p),600)},V=s=>j("mt_over",s,f),U=s=>j("mt_added",s,D),W=s=>j("mt_teams",s,v),Y=s=>j("mt_masses",s,i),H=s=>j("mt_settings",s,n),R=useMemo(()=>SEED_SONGS.filter(p=>!(r[p.id]&&r[p.id].hidden)).map(p=>b(b({},p),r[p.id]||{})).concat(E),[r,E]),N=useMemo(()=>{const s={};return R.forEach(p=>s[p.id]=p),s},[R]),Q=s=>{const p=N[s];p&&(p.cifra?z(s):p.u?h({url:p.u,title:(p.n!=null?p.n+" \xB7 ":"")+p.t}):z(s))},J=(s,p)=>{s.startsWith("u")?U(E.map(q=>q.id===s?b(b({},q),p):q)):V(F(b({},r),{[s]:b(b({},r[s]||{}),p)}))},$=s=>{const p=b({id:uid("u"),src:"Adicionada"},s);return U([...E,p]),p.id},co=s=>{s.startsWith("u")?U(E.filter(p=>p.id!==s)):V(F(b({},r),{[s]:F(b({},r[s]||{}),{hidden:!0})}))},oo=s=>{const p=(s||"").trim();if(!k){if(p.length<4)return"Defina uma senha com ao menos 4 d\xEDgitos.";S.set("mt_pin",p),L(p),P(!0);try{localStorage.setItem("mt_editor","1")}catch(q){}return""}if(p===k){P(!0);try{localStorage.setItem("mt_editor","1")}catch(q){}return""}return"Senha incorreta."},y=()=>{P(!1);try{localStorage.removeItem("mt_editor")}catch(s){}};return o?React.createElement("div",{style:{background:C.bg,color:C.txt},className:"min-h-screen flex items-center justify-center p-6"},React.createElement("div",{className:"text-center"},React.createElement("div",{style:{background:"#fff"},className:"rounded-2xl p-3 mb-4 inline-block shadow-lg"},React.createElement("img",{src:"church.png",alt:"Par\xF3quia Santa Teresinha",style:{maxWidth:300,width:"72vw"}})),React.createElement("p",{style:{color:C.mut},className:"flex items-center justify-center gap-2"},React.createElement(Music,{size:18,style:{color:C.gold},className:"animate-pulse"})," Carregando o repert\xF3rio\u2026"))):React.createElement("div",{style:{background:C.bg,color:C.txt,minHeight:"100vh",fontFamily:"system-ui, sans-serif"}},React.createElement("div",{style:{background:`linear-gradient(135deg, ${C.card2}, ${C.card})`,borderBottom:`1px solid ${C.line}`},className:"px-4 pt-4 pb-3 sticky top-0 z-20"},React.createElement("div",{className:"flex items-center gap-2"},React.createElement("div",{style:{background:"#fff"},className:"rounded-lg px-1.5 py-1 shrink-0"},React.createElement("img",{src:"church.png",alt:"Par\xF3quia Santa Teresinha",style:{height:30}})),React.createElement("div",{className:"leading-tight"},React.createElement("h1",{className:"font-bold"},"Repert\xF3rio da Missa"),React.createElement("p",{className:"text-xs",style:{color:C.mut}},"Santa Teresinha \xB7 ",R.length," m\xFAsicas")),React.createElement("button",{onClick:()=>O?y():T(!0),title:O?"Sair do modo edi\xE7\xE3o":"Entrar no modo edi\xE7\xE3o",style:{background:C.card2,color:O?C.gold:C.mut,marginLeft:"auto"},className:"px-2.5 py-2 rounded-lg flex items-center gap-1 text-xs shrink-0"},O?React.createElement(Unlock,{size:15}):React.createElement(Lock,{size:15}),O?React.createElement("span",null,"edi\xE7\xE3o"):null))),React.createElement("div",{className:"p-3 pb-24 max-w-2xl mx-auto"},a==="repertorio"&&React.createElement(Repertorio,{songs:R,onPlay:Q,onAdd:$,onEdit:s=>M(s),onVideo:s=>x({url:s.yt,title:(s.n!=null?s.n+" \xB7 ":"")+s.t}),editor:O}),a==="missas"&&React.createElement(Missas,{masses:c,teams:m,songById:N,onOpen:s=>g(s)}),a==="equipes"&&React.createElement(Equipes,{teams:m,saveTeams:W,masses:c,editor:O,onOpenLock:()=>T(!0)}),a==="ajustes"&&React.createElement(Ajustes,{settings:l,saveSettings:H,songs:R,editor:O,hasPin:!!k,pin:k,onLock:y,onOpenLock:()=>T(!0),savePin:s=>{S.set("mt_pin",s),L(s)}})),React.createElement("nav",{style:{background:C.card,borderTop:`1px solid ${C.line}`},className:"fixed bottom-0 left-0 right-0 z-20"},React.createElement("div",{className:"max-w-2xl mx-auto grid grid-cols-4"},[{k:"repertorio",ic:Music,lb:"Repert\xF3rio"},{k:"missas",ic:Calendar,lb:"Missas"},{k:"equipes",ic:Users,lb:"Equipes"},{k:"ajustes",ic:Settings,lb:"Ajustes"}].map(({k:s,ic:p,lb:q})=>React.createElement("button",{key:s,onClick:()=>u(s),className:"py-2.5 flex flex-col items-center gap-0.5",style:{color:a===s?C.gold:C.mut}},React.createElement(p,{size:20}),React.createElement("span",{style:{fontSize:10.5}},q))))),d&&React.createElement(Player,{song:N[d],settings:l,saveSettings:H,updateSong:J,openViewer:(s,p)=>h({url:s,title:p}),editor:O,onClose:()=>z(null)}),B&&React.createElement(PdfViewer,{url:B.url,title:B.title,onClose:()=>h(null)}),t&&React.createElement(VideoViewer,{url:t.url,title:t.title,onClose:()=>x(null)}),G&&React.createElement(AddSong,{initial:G,onClose:()=>M(null),onSave:s=>{J(G.id,s),M(null)}}),K&&React.createElement(LockModal,{hasPin:!!k,onClose:()=>T(!1),onSubmit:s=>oo(s)}),A&&React.createElement(MassEditor,{mkey:A,masses:c,saveMasses:Y,teams:m,songs:R,songById:N,onPlay:Q,onVideo:s=>x({url:s.yt,title:s.t}),onEdit:s=>M(s),editor:O,onClose:()=>g(null)}))}function Repertorio({songs:o,onPlay:e,onAdd:a,onEdit:u,onVideo:r,editor:f}){const[E,D]=useState(""),[m,v]=useState("Todos"),[c,i]=useState("Todas"),[l,n]=useState(!1),d=useMemo(()=>["Todas",...Array.from(new Set(o.map(A=>A.src)))],[o]),z=useMemo(()=>{const A=nt(E),g=A.split(" ").filter(Boolean),B=E.replace(/\D/g,"");let h=o.filter(t=>{if(m!=="Todos"&&t.m!==m||c!=="Todas"&&t.src!==c)return!1;if(!g.length&&!B)return!0;const x=nt(t.t),G=g.length>0&&g.every(k=>x.includes(k)),M=B!==""&&t.n!=null&&String(t.n).includes(B);return G||M});if(g.length||B){const t=x=>{const G=nt(x.t);return B&&String(x.n)===B?0:G===A?1:A&&G.startsWith(A)?2:g[0]&&G.startsWith(g[0])?3:A&&G.includes(A)?4:5};h=h.slice().sort((x,G)=>t(x)-t(G)||x.t.localeCompare(G.t,"pt"))}return h.slice(0,200)},[o,E,m,c]);return React.createElement("div",null,React.createElement("div",{className:"relative mb-2"},React.createElement(Search,{size:16,style:{color:C.mut},className:"absolute left-3 top-1/2 -translate-y-1/2"}),React.createElement("input",{value:E,onChange:A=>D(A.target.value),placeholder:"Buscar por t\xEDtulo ou n\xBA\u2026",style:{background:C.card,border:`1px solid ${C.line}`,color:C.txt},className:"w-full pl-9 pr-3 py-2.5 rounded-xl outline-none"})),React.createElement("div",{className:"flex gap-2 overflow-x-auto pb-2"},React.createElement(Sel,{value:m,onChange:v,options:["Todos",...MOMENTOS]}),React.createElement(Sel,{value:c,onChange:i,options:d}),f&&React.createElement("button",{onClick:()=>n(!0),style:{background:C.gold,color:"#2b2100"},className:"px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1"},React.createElement(Plus,{size:14})," Nova")),React.createElement("p",{className:"text-xs mb-2",style:{color:C.mut}},z.length," resultado(s)",z.length===400?"+ (refine a busca)":""),React.createElement("div",{className:"space-y-2"},z.map(A=>React.createElement(SongRow,{key:A.id,s:A,onPlay:e,onVideo:r,onEdit:u,editor:f}))),l&&React.createElement(AddSong,{onClose:()=>n(!1),onSave:A=>{a(A),n(!1)}}))}function SongRow({s:o,onPlay:e,onVideo:a,onEdit:u,editor:r}){return React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"w-full p-3 rounded-xl flex items-center gap-2"},React.createElement("button",{onClick:()=>e(o.id),className:"flex items-center gap-3 min-w-0 flex-1 text-left active:opacity-70"},React.createElement("div",{style:{background:C.card2,color:C.gold,minWidth:44},className:"px-2 py-1 rounded-lg text-center"},o.n!=null?React.createElement("span",{className:"font-bold text-sm"},o.n):React.createElement(Music,{size:16,className:"mx-auto"})),React.createElement("div",{className:"min-w-0 flex-1"},React.createElement("p",{className:"font-semibold truncate"},o.t),React.createElement("div",{className:"flex items-center gap-2 text-xs mt-0.5",style:{color:C.mut}},o.tom?React.createElement("span",{style:{color:C.violet}},"\u{1F3B5} ",o.tom):null,React.createElement("span",{style:{color:MOMENTO_COR[o.m]||C.mut}},o.m)))),o.yt?React.createElement("button",{onClick:()=>a(o),title:"Assistir v\xEDdeo",style:{background:C.card2,color:C.danger},className:"p-2 rounded-lg shrink-0"},React.createElement(Youtube,{size:18})):null,r?React.createElement("button",{onClick:()=>u(o),title:"Editar cadastro",style:{background:C.card2,color:C.gold},className:"p-2 rounded-lg shrink-0"},React.createElement(Pencil,{size:16})):null,React.createElement("button",{onClick:()=>e(o.id),title:"Abrir cifra",style:{color:C.gold},className:"p-1.5 shrink-0"},o.cifra?React.createElement(Play,{size:18}):React.createElement(FileText,{size:17,style:{color:C.blue}})))}function Sel({value:o,onChange:e,options:a}){return React.createElement("select",{value:o,onChange:u=>e(u.target.value),style:{background:C.card,border:`1px solid ${C.line}`,color:C.txt},className:"px-3 py-1.5 rounded-full text-xs outline-none max-w-[46%]"},a.map(u=>React.createElement("option",{key:u,value:u},u)))}function Player({song:o,settings:e,saveSettings:a,updateSong:u,openViewer:r,editor:f,onClose:E}){const[D,m]=useState(0),[v,c]=useState(0),[i,l]=useState(!1),[n,d]=useState(o?{tom:o.tom||"",m:o.m||"Geral",u:o.u||"",cifra:o.cifra||""}:{}),z=useRef(null),A=e.font||17;if(useEffect(()=>{m(0),c(0),l(!1),d({tom:(o==null?void 0:o.tom)||"",m:(o==null?void 0:o.m)||"Geral",u:(o==null?void 0:o.u)||"",cifra:(o==null?void 0:o.cifra)||""})},[o==null?void 0:o.id]),useEffect(()=>{if(!v||!z.current)return;const h=z.current,t=setInterval(()=>{h.scrollTop+=v},60);return()=>clearInterval(t)},[v]),!o)return null;const B=(o.cifra?transposeText(o.cifra,D):"").split(`
`);return React.createElement("div",{style:{background:C.bg,color:C.txt},className:"fixed inset-0 z-[60] flex flex-col"},React.createElement("div",{style:{background:C.card,borderBottom:`1px solid ${C.line}`},className:"px-3 py-2 flex items-center gap-2 sticky top-0"},React.createElement("button",{onClick:E,style:{background:C.card2,color:C.txt},className:"px-3 py-2 rounded-lg flex items-center gap-1 font-semibold shrink-0"},React.createElement(ChevronLeft,{size:18})," Voltar"),React.createElement("div",{className:"min-w-0 flex-1"},React.createElement("p",{className:"font-bold truncate"},o.n!=null?o.n+" \xB7 ":"",o.t),React.createElement("p",{className:"text-xs truncate",style:{color:C.mut}},o.src,o.tom?" \xB7 tom original "+o.tom:"")),f?React.createElement("button",{onClick:()=>l(h=>!h),style:{background:C.card2,color:i?C.gold:C.txt},className:"p-2 rounded-lg"},React.createElement(Pencil,{size:16})):null),React.createElement("div",{style:{background:C.card2,borderBottom:`1px solid ${C.line}`},className:"px-3 py-2 flex items-center gap-2 flex-wrap text-xs"},React.createElement("div",{className:"flex items-center gap-1"},React.createElement("span",{style:{color:C.mut}},"Tom"),React.createElement("button",{onClick:()=>m(h=>h-1),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Minus,{size:14})),React.createElement("span",{style:{color:C.gold,minWidth:26},className:"text-center font-bold"},D>0?"+"+D:D),React.createElement("button",{onClick:()=>m(h=>h+1),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Plus,{size:14}))),React.createElement("div",{className:"flex items-center gap-1"},React.createElement(Type,{size:13,style:{color:C.mut}}),React.createElement("button",{onClick:()=>a(F(b({},e),{font:Math.max(12,A-1)})),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Minus,{size:14})),React.createElement("span",{style:{minWidth:22},className:"text-center"},A),React.createElement("button",{onClick:()=>a(F(b({},e),{font:Math.min(30,A+1)})),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Plus,{size:14}))),React.createElement("div",{className:"flex items-center gap-1"},React.createElement("button",{onClick:()=>c(h=>h>0?0:1),style:{background:v?C.gold:C.card,color:v?"#2b2100":C.txt},className:"p-1.5 rounded-lg flex items-center gap-1"},v?React.createElement(Pause,{size:14}):React.createElement(Play,{size:14}),React.createElement("span",null,"rolar")),v>0&&React.createElement("input",{type:"range",min:"1",max:"5",value:v,onChange:h=>c(Number(h.target.value)),className:"w-16"})),o.u?React.createElement("button",{onClick:()=>r(o.u,o.t),style:{background:C.blue,color:"#04203f"},className:"ml-auto px-2.5 py-1.5 rounded-lg font-semibold flex items-center gap-1"},React.createElement(FileText,{size:13})," Ver cifra"):null),i?React.createElement("div",{className:"p-3 overflow-y-auto flex-1 space-y-3"},React.createElement("p",{className:"text-sm font-semibold",style:{color:C.gold}},"Editar m\xFAsica"),React.createElement(Field,{label:"Tom"},React.createElement("input",{value:n.tom,onChange:h=>d(F(b({},n),{tom:h.target.value})),placeholder:"ex.: Sol Maior / G",style:inp})),React.createElement(Field,{label:"Momento da missa"},React.createElement("select",{value:n.m,onChange:h=>d(F(b({},n),{m:h.target.value})),style:inp},MOMENTOS.map(h=>React.createElement("option",{key:h},h)))),React.createElement(Field,{label:"Link (Drive/YouTube) \u2014 opcional"},React.createElement("input",{value:n.u,onChange:h=>d(F(b({},n),{u:h.target.value})),placeholder:"https://\u2026",style:inp})),React.createElement(Field,{label:"Cifra em texto (acordes + letra) \u2014 habilita transpor/rolar"},React.createElement("textarea",{value:n.cifra,onChange:h=>d(F(b({},n),{cifra:h.target.value})),rows:10,wrap:"off",placeholder:`Cole aqui a cifra. Ex.:
   C        G
Vem, Esp\xEDrito Santo\u2026`,style:F(b({},inp),{fontFamily:"ui-monospace, monospace",whiteSpace:"pre",overflowX:"auto"})})),React.createElement("div",{className:"flex gap-2"},React.createElement("button",{onClick:()=>{u(o.id,n),l(!1)},style:{background:C.green,color:"#04261b"},className:"flex-1 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1"},React.createElement(Save,{size:16})," Salvar"),React.createElement("button",{onClick:()=>l(!1),style:{background:C.card2,color:C.mut},className:"px-4 rounded-xl"},"Cancelar"))):React.createElement("div",{ref:z,className:"flex-1 px-3 py-3",style:{overflow:"auto",scrollBehavior:"smooth",WebkitOverflowScrolling:"touch"}},o.cifra?React.createElement("pre",{style:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:A,lineHeight:1.5,whiteSpace:"pre",display:"inline-block",minWidth:"100%"}},B.map((h,t)=>isChordLine(h)?React.createElement("div",{key:t,style:{color:C.gold,fontWeight:700}},h||"\xA0"):React.createElement("div",{key:t},h||"\xA0"))):o.u?React.createElement("div",{className:"text-center py-6"},React.createElement(FileText,{size:42,style:{color:C.blue},className:"mx-auto mb-3"}),React.createElement("p",{className:"mb-3",style:{color:C.mut}},"A cifra desta m\xFAsica est\xE1 em PDF no Drive."),React.createElement("button",{onClick:()=>r(o.u,o.t),style:{background:C.blue,color:"#04203f"},className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold"},React.createElement(FileText,{size:16})," Ver cifra (PDF)"),React.createElement("p",{className:"mt-4 text-xs",style:{color:C.mut}},"Dica: toque no l\xE1pis \u270F\uFE0F acima para colar a cifra em texto e habilitar transpor/rolagem.")):React.createElement("div",{className:"text-center py-6"},React.createElement(ListMusic,{size:42,style:{color:C.mut},className:"mx-auto mb-3"}),React.createElement("p",{className:"mb-3",style:{color:C.mut}},"Ainda sem cifra cadastrada."),f?React.createElement("button",{onClick:()=>l(!0),style:{background:C.gold,color:"#2b2100"},className:"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold"},React.createElement(Pencil,{size:16})," Colar cifra ou link"):React.createElement("p",{className:"text-xs",style:{color:C.mut}},"Entre no modo edi\xE7\xE3o (cadeado no topo) para adicionar a cifra."))))}function Missas({masses:o,teams:e,songById:a,onOpen:u}){const[r,f]=useState(()=>startOfWeek(new Date)),E=useMemo(()=>Array.from({length:7},(c,i)=>{const l=new Date(r);return l.setDate(r.getDate()+i),l}),[r]),D=useMemo(()=>{const c={};return e.forEach(i=>c[i.id]=i),c},[e]),m=c=>{const i=new Date(r);i.setDate(r.getDate()+c*7),f(i)},v=ymd(new Date);return React.createElement("div",null,React.createElement("div",{className:"flex items-center justify-between mb-3"},React.createElement("button",{onClick:()=>m(-1),style:{background:C.card},className:"p-2 rounded-lg"},React.createElement(ChevronLeft,{size:18})),React.createElement("div",{className:"text-center"},React.createElement("p",{className:"text-xs",style:{color:C.mut}},"Semana de"),React.createElement("p",{className:"font-semibold text-sm"},fmtDiaCurto(E[0])," \u2014 ",fmtDiaCurto(E[6]))),React.createElement("button",{onClick:()=>m(1),style:{background:C.card},className:"p-2 rounded-lg"},React.createElement(ChevronRight,{size:18}))),React.createElement("button",{onClick:()=>f(startOfWeek(new Date)),style:{color:C.gold},className:"text-xs mb-3 underline"},"Voltar para esta semana"),E.map(c=>{const i=SLOTS_DOW[c.getDay()]||[],l=ymd(c)===v;return React.createElement("div",{key:ymd(c),className:"mb-4"},React.createElement("h2",{className:"font-bold text-sm mb-2 flex items-center gap-2",style:{color:l?C.gold:C.txt}},fmtDiaLongo(c)," ",l&&React.createElement("span",{style:{background:C.gold,color:"#2b2100"},className:"px-2 py-0.5 rounded-full text-[10px]"},"hoje")),React.createElement("div",{className:"space-y-2"},i.map(n=>{const d=ymd(c)+"|"+n,z=o[d],A=z&&z.team?D[z.team]:null,g=z&&z.songs?z.songs.length:0;return React.createElement("button",{key:n,onClick:()=>u(d),style:{background:C.card,border:`1px solid ${A?A.color:C.line}`},className:"w-full text-left p-3 rounded-xl flex items-center gap-3 active:opacity-70"},React.createElement("div",{style:{background:C.card2,color:C.gold,minWidth:56},className:"px-2 py-1.5 rounded-lg text-center font-bold text-sm"},n),React.createElement("div",{className:"min-w-0 flex-1"},A?React.createElement("p",{className:"font-semibold truncate",style:{color:A.color}},A.name):React.createElement("p",{style:{color:C.mut}},"Sem equipe definida"),React.createElement("p",{className:"text-xs",style:{color:C.mut}},g>0?g+" m\xFAsica(s) no repert\xF3rio":"toque para montar a missa")),React.createElement(ChevronRight,{size:18,style:{color:C.mut}}))})))}))}function MassEditor({mkey:o,masses:e,saveMasses:a,teams:u,songs:r,songById:f,onPlay:E,onVideo:D,onEdit:m,editor:v,onClose:c}){const[i,l]=o.split("|"),n=e[o]||{team:"",songs:[],note:""},[d,z]=useState(!1),A=t=>a(F(b({},e),{[o]:b(b({},n),t)})),g=(n.songs||[]).map(t=>f[t]).filter(Boolean),B=(t,x)=>{const G=[...n.songs],M=t+x;M<0||M>=G.length||([G[t],G[M]]=[G[M],G[t]],A({songs:G}))},h=t=>A({songs:n.songs.filter((x,G)=>G!==t)});return React.createElement("div",{style:{background:C.bg,color:C.txt},className:"fixed inset-0 z-40 flex flex-col"},React.createElement("div",{style:{background:C.card,borderBottom:`1px solid ${C.line}`},className:"px-3 py-2 flex items-center gap-2 sticky top-0"},React.createElement("button",{onClick:c,style:{background:C.card2,color:C.txt},className:"px-3 py-2 rounded-lg flex items-center gap-1 font-semibold shrink-0"},React.createElement(ChevronLeft,{size:18})," Voltar"),React.createElement("div",null,React.createElement("p",{className:"font-bold"},fmtDiaLongo(parseYmd(i))),React.createElement("p",{className:"text-xs",style:{color:C.mut}},"Missa das ",l))),React.createElement("div",{className:"overflow-y-auto flex-1 p-3 space-y-4"},React.createElement(Field,{label:"Equipe que vai tocar"},React.createElement("select",{value:n.team||"",onChange:t=>A({team:t.target.value}),style:inp},React.createElement("option",{value:""},"\u2014 escolher equipe \u2014"),u.map(t=>React.createElement("option",{key:t.id,value:t.id},t.name)))),React.createElement("div",null,React.createElement("div",{className:"flex items-center justify-between mb-2"},React.createElement("p",{className:"font-semibold text-sm",style:{color:C.gold}},"Repert\xF3rio (",g.length,")"),React.createElement("button",{onClick:()=>z(!0),style:{background:C.gold,color:"#2b2100"},className:"px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"},React.createElement(Plus,{size:14})," Adicionar m\xFAsica")),g.length===0&&React.createElement("p",{className:"text-xs",style:{color:C.mut}},'Nenhuma m\xFAsica ainda. Toque em "Adicionar m\xFAsica".'),React.createElement("div",{className:"space-y-2"},g.map((t,x)=>React.createElement("div",{key:t.id+x,style:{background:C.card,border:`1px solid ${C.line}`},className:"p-2.5 rounded-xl flex items-center gap-2"},React.createElement("div",{className:"flex flex-col"},React.createElement("button",{onClick:()=>B(x,-1),style:{color:C.mut},className:"p-0.5"},React.createElement(ArrowUp,{size:14})),React.createElement("button",{onClick:()=>B(x,1),style:{color:C.mut},className:"p-0.5"},React.createElement(ArrowDown,{size:14}))),React.createElement("button",{onClick:()=>E(t.id),className:"min-w-0 flex-1 text-left"},React.createElement("p",{className:"font-medium truncate text-sm"},t.t),React.createElement("p",{className:"text-xs",style:{color:C.mut}},t.tom?t.tom+" \xB7 ":"",React.createElement("span",{style:{color:MOMENTO_COR[t.m]}},t.m))),t.yt?React.createElement("button",{onClick:()=>D(t),title:"V\xEDdeo",style:{color:C.danger},className:"p-1.5"},React.createElement(Youtube,{size:16})):null,v?React.createElement("button",{onClick:()=>m(t),title:"Editar",style:{color:C.gold},className:"p-1.5"},React.createElement(Pencil,{size:15})):null,React.createElement("button",{onClick:()=>h(x),title:"Remover",style:{color:C.danger},className:"p-1.5"},React.createElement(Trash2,{size:15})))))),React.createElement(Field,{label:"Observa\xE7\xF5es (leitura, tom especial, solista\u2026)"},React.createElement("textarea",{value:n.note||"",onChange:t=>A({note:t.target.value}),rows:3,style:inp,placeholder:"Anota\xE7\xF5es da missa\u2026"})),React.createElement("button",{onClick:c,style:{background:C.green,color:"#04261b"},className:"w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:opacity-80"},React.createElement(Check,{size:18})," Concluir \u2014 repert\xF3rio salvo"),React.createElement("p",{className:"text-xs text-center",style:{color:C.mut}},"Tudo \xE9 salvo automaticamente e fica vis\xEDvel para a equipe. Toque numa m\xFAsica para abrir a cifra.")),d&&React.createElement(SongPicker,{songs:r,onClose:()=>z(!1),onPick:t=>{A({songs:[...n.songs||[],t]})}}))}function SongPicker({songs:o,onClose:e,onPick:a}){const[u,r]=useState(""),[f,E]=useState("Todos"),D=useMemo(()=>{const m=nt(u),v=m.split(" ").filter(Boolean),c=u.replace(/\D/g,"");let i=o.filter(l=>{if(!(f==="Todos"||l.m===f))return!1;if(!v.length&&!c)return!0;const n=nt(l.t);return v.length>0&&v.every(d=>n.includes(d))||c!==""&&l.n!=null&&String(l.n).includes(c)});if(v.length||c){const l=n=>{const d=nt(n.t);return c&&String(n.n)===c?0:d===m?1:m&&d.startsWith(m)?2:v[0]&&d.startsWith(v[0])?3:4};i=i.slice().sort((n,d)=>l(n)-l(d)||n.t.localeCompare(d.t,"pt"))}return i.slice(0,200)},[o,u,f]);return React.createElement("div",{style:{background:"rgba(0,0,0,0.6)"},className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center"},React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"w-full max-w-lg rounded-t-2xl sm:rounded-2xl max-h-[85vh] flex flex-col"},React.createElement("div",{className:"p-3 border-b",style:{borderColor:C.line}},React.createElement("div",{className:"flex items-center justify-between mb-2"},React.createElement("p",{className:"font-semibold"},"Adicionar m\xFAsica"),React.createElement("button",{onClick:e},React.createElement(X,{size:18,style:{color:C.mut}}))),React.createElement("input",{value:u,onChange:m=>r(m.target.value),placeholder:"Buscar\u2026",style:inp,autoFocus:!0}),React.createElement("div",{className:"mt-2"},React.createElement(Sel,{value:f,onChange:E,options:["Todos",...MOMENTOS]}))),React.createElement("div",{className:"overflow-y-auto p-2 space-y-1"},D.map(m=>React.createElement("button",{key:m.id,onClick:()=>{a(m.id),e()},style:{background:C.card2},className:"w-full text-left p-2.5 rounded-lg flex items-center gap-2 active:opacity-70"},React.createElement("span",{style:{color:C.gold,minWidth:34},className:"text-xs font-bold text-center"},m.n!=null?m.n:"\u266A"),React.createElement("span",{className:"min-w-0 flex-1 truncate text-sm"},m.t),React.createElement("span",{className:"text-xs",style:{color:MOMENTO_COR[m.m]}},m.m))))))}function Equipes({teams:o,saveTeams:e,masses:a,editor:u,onOpenLock:r}){const[f,E]=useState(""),D=useMemo(()=>{const n={};return Object.values(a).forEach(d=>{d.team&&(n[d.team]=(n[d.team]||0)+1)}),n},[a]),m=[C.rose,C.violet,C.green,C.gold,C.blue,C.danger],v=()=>{const n=f.trim();n&&(e([...o,{id:uid("t"),name:n,color:m[o.length%m.length]}]),E(""))},c=(n,d)=>e(o.map(z=>z.id===n?F(b({},z),{name:d}):z)),i=n=>e(o.map(d=>d.id===n?F(b({},d),{color:m[(m.indexOf(d.color)+1)%m.length]}):d)),l=n=>e(o.filter(d=>d.id!==n));return u?React.createElement("div",null,React.createElement("p",{className:"text-sm mb-3",style:{color:C.mut}},"Cadastre as equipes/minist\xE9rios de m\xFAsica. Depois \xE9 s\xF3 escalar cada equipe nas missas da semana."),React.createElement("div",{className:"flex gap-2 mb-4"},React.createElement("input",{value:f,onChange:n=>E(n.target.value),onKeyDown:n=>n.key==="Enter"&&v(),placeholder:"Nome da equipe",style:inp}),React.createElement("button",{onClick:v,style:{background:C.gold,color:"#2b2100"},className:"px-4 rounded-xl font-semibold"},"Add")),React.createElement("div",{className:"space-y-2"},o.map(n=>React.createElement("div",{key:n.id,style:{background:C.card,border:`1px solid ${C.line}`},className:"p-3 rounded-xl flex items-center gap-3"},React.createElement("button",{onClick:()=>i(n.id),style:{background:n.color,minWidth:18,height:18},className:"rounded-full shrink-0",title:"trocar cor"}),React.createElement("input",{value:n.name,onChange:d=>c(n.id,d.target.value),style:{background:"transparent",color:C.txt},className:"flex-1 outline-none font-medium"}),React.createElement("span",{className:"text-xs",style:{color:C.mut}},D[n.id]||0," missa(s)"),React.createElement("button",{onClick:()=>l(n.id),style:{color:C.danger}},React.createElement(Trash2,{size:16})))))):React.createElement("div",null,React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"rounded-xl p-3 mb-3 flex items-center gap-2"},React.createElement(Lock,{size:16,style:{color:C.gold}}),React.createElement("p",{className:"text-xs flex-1",style:{color:C.mut}},"Para criar ou editar equipes, entre no modo edi\xE7\xE3o."),React.createElement("button",{onClick:r,style:{background:C.gold,color:"#2b2100"},className:"px-3 py-1.5 rounded-full text-xs font-semibold shrink-0"},"Entrar")),React.createElement("div",{className:"space-y-2"},o.map(n=>React.createElement("div",{key:n.id,style:{background:C.card,border:`1px solid ${C.line}`},className:"p-3 rounded-xl flex items-center gap-3"},React.createElement("span",{style:{background:n.color,minWidth:18,height:18},className:"rounded-full inline-block shrink-0"}),React.createElement("span",{className:"flex-1 font-medium"},n.name),React.createElement("span",{className:"text-xs",style:{color:C.mut}},D[n.id]||0," missa(s)")))))}function Ajustes({settings:o,saveSettings:e,songs:a,editor:u,hasPin:r,pin:f,onLock:E,onOpenLock:D,savePin:m}){const v=a.filter(i=>i.u).length,c=a.filter(i=>i.cifra).length;return React.createElement("div",{className:"space-y-4"},React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"rounded-xl p-4 space-y-2"},React.createElement("p",{className:"font-semibold",style:{color:C.gold}},"Senha de edi\xE7\xE3o"),u?React.createElement(React.Fragment,null,React.createElement("p",{className:"text-sm",style:{color:C.green}},"\u2713 Modo edi\xE7\xE3o ativo neste aparelho."),React.createElement(PinChange,{hasPin:r,pin:f,savePin:m}),React.createElement("button",{onClick:E,style:{background:C.card2,color:C.txt},className:"px-3 py-2 rounded-lg text-sm flex items-center gap-1"},React.createElement(Lock,{size:14})," Sair do modo edi\xE7\xE3o")):React.createElement(React.Fragment,null,React.createElement("p",{className:"text-sm",style:{color:C.mut}},r?"Apenas quem tem a senha pode editar m\xFAsicas e equipes.":"Defina uma senha para liberar a edi\xE7\xE3o de m\xFAsicas e equipes."),React.createElement("button",{onClick:D,style:{background:C.gold,color:"#2b2100"},className:"px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"},React.createElement(Unlock,{size:14})," ",r?"Entrar no modo edi\xE7\xE3o":"Criar senha de edi\xE7\xE3o"))),React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"rounded-xl p-4"},React.createElement("p",{className:"font-semibold mb-1",style:{color:C.gold}},"Sobre o repert\xF3rio"),React.createElement("p",{className:"text-sm",style:{color:C.mut}},a.length," m\xFAsicas no total \xB7 ",v," com PDF \xB7 ",c," com cifra em texto (transp\xF5e)."),React.createElement("p",{className:"text-xs mt-2",style:{color:C.mut}},"Fontes: ",React.createElement("b",null,"Louvemos o Senhor")," (livro cifrado, n\xBA 1\u20131172), ",React.createElement("b",null,"Cifras PDF"),", ",React.createElement("b",null,"Santa Teresinha")," e ",React.createElement("b",null,"Dom Bosco")," (Google Drive da par\xF3quia).")),React.createElement(Field,{label:`Tamanho padr\xE3o da letra: ${o.font||17}px`},React.createElement("input",{type:"range",min:"12",max:"30",value:o.font||17,onChange:i=>e(F(b({},o),{font:Number(i.target.value)})),className:"w-full"})),React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"rounded-xl p-4 text-sm"},React.createElement("p",{className:"font-semibold mb-1",style:{color:C.gold}},"Pasta de cifras no Drive"),React.createElement("a",{href:"https://drive.google.com/drive/folders/12s0xc-gpn0EP4SIAizsmxFc4LWNOhfxc",target:"_blank",rel:"noreferrer",style:{color:C.blue},className:"inline-flex items-center gap-1 underline"},React.createElement(ExternalLink,{size:14}),' Abrir "M\xFAsicas da igreja"')),React.createElement("p",{className:"text-xs text-center",style:{color:C.mut}},"Tudo o que voc\xEA edita aqui \xE9 compartilhado com a equipe em tempo real."))}function PinChange({hasPin:o,pin:e,savePin:a}){const[u,r]=useState(!1),[f,E]=useState(""),[D,m]=useState(""),[v,c]=useState("");if(!u)return React.createElement("button",{onClick:()=>r(!0),style:{color:C.blue},className:"text-sm underline block"},"Alterar senha");const i=()=>{if(o&&f.trim()!==e){c("Senha atual incorreta.");return}if(D.trim().length<4){c("A nova senha precisa de ao menos 4 d\xEDgitos.");return}a(D.trim()),c("Senha atualizada \u2713"),E(""),m(""),setTimeout(()=>r(!1),1e3)};return React.createElement("div",{className:"space-y-2"},o?React.createElement("input",{value:f,onChange:l=>E(l.target.value),type:"password",inputMode:"numeric",placeholder:"Senha atual",style:inp}):null,React.createElement("input",{value:D,onChange:l=>m(l.target.value),type:"password",inputMode:"numeric",placeholder:"Nova senha (m\xEDn. 4 d\xEDgitos)",style:inp}),v?React.createElement("p",{className:"text-xs",style:{color:v.indexOf("\u2713")>=0?C.green:C.danger}},v):null,React.createElement("div",{className:"flex gap-2"},React.createElement("button",{onClick:i,style:{background:C.green,color:"#04261b"},className:"px-3 py-1.5 rounded-lg text-sm font-semibold"},"Salvar senha"),React.createElement("button",{onClick:()=>{r(!1),c("")},style:{background:C.card2,color:C.mut},className:"px-3 py-1.5 rounded-lg text-sm"},"Cancelar")))}const inp={background:C.bg,border:`1px solid ${C.line}`,color:C.txt,borderRadius:12,padding:"10px 12px",outline:"none",width:"100%"};function Field({label:o,children:e}){return React.createElement("label",{className:"block"},React.createElement("span",{className:"text-xs block mb-1",style:{color:C.mut}},o),e)}function AddSong({onClose:o,onSave:e,initial:a}){const u=!!a,[r,f]=useState(a?{t:a.t||"",n:a.n!=null?String(a.n):"",tom:a.tom||"",m:a.m||"Geral",u:a.u||"",yt:a.yt||"",cifra:a.cifra||""}:{t:"",n:"",tom:"",m:"Geral",u:"",yt:"",cifra:""}),[E,D]=useState(""),m=(i,l)=>f(n=>F(b({},n),{[i]:l})),v=async i=>{const l=i.target.files&&i.target.files[0];if(l){if(l.type&&l.type.indexOf("pdf")<0){D("Selecione um arquivo PDF.");return}D("Enviando\u2026");try{const n=(l.name||"musica.pdf").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^A-Za-z0-9._-]+/g,"_"),d="up-"+Date.now().toString(36)+"-"+n,{error:z}=await SB.storage.from("uploads").upload(d,l,{upsert:!0,contentType:"application/pdf"});if(z){D("Falha no upload: "+z.message);return}const{data:A}=SB.storage.from("uploads").getPublicUrl(d);m("u",A.publicUrl),D("PDF enviado \u2713")}catch(n){D("Falha no upload.")}}},c=()=>{if(!r.t.trim())return;const i={t:r.t.trim(),tom:r.tom.trim(),m:r.m,u:r.u.trim(),yt:r.yt.trim(),cifra:r.cifra};r.n&&/^\d+$/.test(r.n)?i.n=Number(r.n):u&&!r.n&&(i.n=null),e(i)};return React.createElement("div",{style:{background:"rgba(0,0,0,0.6)"},className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center"},React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"w-full max-w-lg rounded-t-2xl sm:rounded-2xl max-h-[90vh] overflow-y-auto p-4 space-y-3"},React.createElement("div",{className:"flex items-center justify-between"},React.createElement("p",{className:"font-semibold",style:{color:C.gold}},u?"Editar m\xFAsica":"Nova m\xFAsica"),React.createElement("button",{onClick:o},React.createElement(X,{size:18,style:{color:C.mut}}))),React.createElement(Field,{label:"T\xEDtulo *"},React.createElement("input",{value:r.t,onChange:i=>m("t",i.target.value),style:inp,autoFocus:!0})),React.createElement("div",{className:"flex gap-2"},React.createElement(Field,{label:"N\xBA (opcional)"},React.createElement("input",{value:r.n,onChange:i=>m("n",i.target.value),style:inp,inputMode:"numeric"})),React.createElement(Field,{label:"Tom"},React.createElement("input",{value:r.tom,onChange:i=>m("tom",i.target.value),placeholder:"G / Sol",style:inp}))),React.createElement(Field,{label:"Momento da missa"},React.createElement("select",{value:r.m,onChange:i=>m("m",i.target.value),style:inp},MOMENTOS.map(i=>React.createElement("option",{key:i},i)))),React.createElement(Field,{label:"Link da cifra (PDF/Drive) \u2014 opcional"},React.createElement("input",{value:r.u,onChange:i=>m("u",i.target.value),placeholder:"https://\u2026",style:inp})),React.createElement("div",null,React.createElement("label",{style:{background:C.card2,color:C.txt,border:"1px dashed "+C.line},className:"flex items-center justify-center gap-2 py-2.5 rounded-xl cursor-pointer text-sm font-medium"},React.createElement(Upload,{size:16})," Enviar PDF da m\xFAsica",React.createElement("input",{type:"file",accept:"application/pdf",onChange:v,className:"hidden"})),E?React.createElement("p",{className:"text-xs mt-1",style:{color:E.indexOf("\u2713")>=0?C.green:E.indexOf("Enviando")>=0?C.mut:C.danger}},E):null),React.createElement(Field,{label:"Link do YouTube (bot\xE3o de v\xEDdeo) \u2014 opcional"},React.createElement("input",{value:r.yt,onChange:i=>m("yt",i.target.value),placeholder:"https://youtu.be/\u2026",style:inp})),React.createElement(Field,{label:"Cifra em texto (opcional \u2014 habilita transpor/rolar)"},React.createElement("textarea",{value:r.cifra,onChange:i=>m("cifra",i.target.value),rows:6,wrap:"off",style:F(b({},inp),{fontFamily:"ui-monospace, monospace",whiteSpace:"pre",overflowX:"auto"})})),React.createElement("button",{onClick:c,style:{background:C.green,color:"#04261b"},className:"w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1"},React.createElement(Check,{size:16})," ",u?"Salvar altera\xE7\xF5es":"Salvar m\xFAsica")))}function PdfViewer({url:o,title:e,onClose:a}){const u=driveEmbed(o);return React.createElement("div",{style:{background:"rgba(0,0,0,0.92)"},className:"fixed inset-0 z-[60] flex flex-col"},React.createElement("div",{style:{background:C.card,borderBottom:"1px solid "+C.line},className:"px-3 py-2 flex items-center gap-2"},React.createElement("button",{onClick:a,style:{background:C.card2,color:C.txt},className:"px-3 py-2 rounded-lg flex items-center gap-1 font-semibold shrink-0"},React.createElement(ChevronLeft,{size:18})," Voltar"),React.createElement("p",{className:"font-semibold truncate flex-1"},e),React.createElement("a",{href:o,target:"_blank",rel:"noreferrer",style:{color:C.blue},className:"text-xs flex items-center gap-1 shrink-0"},React.createElement(ExternalLink,{size:13})," nova aba")),React.createElement("iframe",{title:e,src:u,className:"flex-1 w-full",style:{border:0,background:"#fff"},allow:"autoplay"}))}function VideoViewer({url:o,title:e,onClose:a}){const u=String(o||"").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|[?&]v=)([A-Za-z0-9_-]{6,})/),r=u?u[1]:"",f=r?"https://www.youtube.com/embed/"+r+"?rel=0&playsinline=1":"";return React.createElement("div",{style:{background:"rgba(0,0,0,0.92)"},className:"fixed inset-0 z-[60] flex flex-col"},React.createElement("div",{style:{background:C.card,borderBottom:"1px solid "+C.line},className:"px-3 py-2 flex items-center gap-2"},React.createElement("button",{onClick:a,style:{background:C.card2,color:C.txt},className:"px-3 py-2 rounded-lg flex items-center gap-1 font-semibold shrink-0"},React.createElement(ChevronLeft,{size:18})," Voltar"),React.createElement("p",{className:"font-semibold truncate flex-1"},e),React.createElement("a",{href:o,target:"_blank",rel:"noreferrer",style:{color:C.blue},className:"text-xs flex items-center gap-1 shrink-0"},React.createElement(ExternalLink,{size:13})," YouTube")),React.createElement("div",{className:"flex-1 flex items-center justify-center p-2"},f?React.createElement("div",{style:{position:"relative",width:"100%",maxWidth:900,aspectRatio:"16 / 9"}},React.createElement("iframe",{title:e,src:f,style:{border:0,width:"100%",height:"100%",borderRadius:12},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):React.createElement("p",{style:{color:C.mut}},"Link de v\xEDdeo inv\xE1lido. ",React.createElement("a",{href:o,target:"_blank",rel:"noreferrer",style:{color:C.blue},className:"underline"},"Abrir link"))))}function LockModal({hasPin:o,onClose:e,onSubmit:a}){const[u,r]=useState(""),[f,E]=useState(""),D=()=>{const m=a(u);m?E(m):e()};return React.createElement("div",{style:{background:"rgba(0,0,0,0.6)"},className:"fixed inset-0 z-[70] flex items-end sm:items-center justify-center"},React.createElement("div",{style:{background:C.card,border:"1px solid "+C.line},className:"w-full max-w-sm rounded-t-2xl sm:rounded-2xl p-4 space-y-3"},React.createElement("div",{className:"flex items-center justify-between"},React.createElement("p",{className:"font-semibold",style:{color:C.gold}},o?"Modo edi\xE7\xE3o":"Criar senha de edi\xE7\xE3o"),React.createElement("button",{onClick:e},React.createElement(X,{size:18,style:{color:C.mut}}))),React.createElement("p",{className:"text-xs",style:{color:C.mut}},o?"Digite a senha para editar m\xFAsicas e equipes neste aparelho.":"Defina uma senha (m\xEDn. 4 d\xEDgitos). Quem tiver a senha poder\xE1 editar o repert\xF3rio e as equipes."),React.createElement("input",{value:u,onChange:m=>{r(m.target.value),E("")},onKeyDown:m=>m.key==="Enter"&&D(),type:"password",inputMode:"numeric",placeholder:o?"Senha":"Nova senha",style:inp,autoFocus:!0}),f?React.createElement("p",{className:"text-xs",style:{color:C.danger}},f):null,React.createElement("button",{onClick:D,style:{background:C.gold,color:"#2b2100"},className:"w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1"},React.createElement(Unlock,{size:16})," ",o?"Entrar":"Criar e entrar")))}const _root=ReactDOM.createRoot(document.getElementById("root"));_root.render(React.createElement(App,null));try{window.__booted=!0}catch(o){}
