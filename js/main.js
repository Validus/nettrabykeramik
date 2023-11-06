let objectsForSale = [
{
	title: 'Skål',
	description: 'Stor skål med glasyr i toner av rost och grönt.',
	price: 400,
	images: ['PXL_20230416_185036722~2.jpg', 'PXL_20230416_185044534~2.jpg', 'PXL_20230416_185051952~2.jpg', 'PXL_20230416_185100337~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278803343059387/?sale_post_id=1278803343059387'
},
{
	title: 'Skål',
	description: 'Stor skål med honungsvit bas och ränder av blått och grönblått.',
	price: 400,
	images: ['PXL_20230416_184944018~2.jpg', 'PXL_20230416_185002091~2.jpg', 'PXL_20230416_185015042~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278802263059495/?sale_post_id=1278802263059495'
},
{
	title: 'Skål',
	description: 'Skål med olika glasyrlager, från midnattsblått till turkos.',
	price: 125,
	images: ['PXL_20230513_081452583~2.jpg', 'PXL_20230513_081459403~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278801136392941/?sale_post_id=1278801136392941'
},
{
	title: 'Ljuslykta',
	description: 'Ljuslykta med mattsvart glasyr',
	price: 125,
	images: ['PXL_20230416_184840293~2.jpg', 'PXL_20230416_184847150~2.jpg', 'PXL_20230416_184854249~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278800646392990/?sale_post_id=1278800646392990'
},
{
	title: 'Ljuslykta',
	description: 'Ljuslykta med glasyr som ger olika toner av blått',
	price: 125,
	images: ['PXL_20230416_184904081~2.jpg', 'PXL_20230416_184911011~3.jpg', 'PXL_20230416_184925383~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278800156393039/?sale_post_id=1278800156393039'
},
{
	title: 'Kopp',
	description: 'Kopp-sett med glasyrkombination som ger toner av rosa och lila',
	price: 300,
	images: ['PXL_20230513_081407234~2.jpg', 'PXL_20230513_081416909~3.jpg', 'PXL_20230513_081435118~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278799349726453/?sale_post_id=1278799349726453'
},
{
	title: 'Kopp',
	description: 'Kopp med olika glasyrlager, från midnattsblått till turkos.',
	price: 150,
	images: ['PXL_20230416_184139188~2.jpg', 'PXL_20230416_184143587~2.jpg', 'PXL_20230416_184221221~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278797703059951/?sale_post_id=1278797703059951'
},
{
	title: 'Tillbringare',
	description: 'Tillbringare med rosa glasyr utanpå och vit inuti.',
	price: 300,
	images: ['PXL_20230416_184710878~2.jpg', 'PXL_20230416_184716938~2.jpg', 'PXL_20230416_184728761~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278796659726722/?sale_post_id=1278796659726722'
},
{
	title: 'Kopp-set',
	description: 'Kopp-set i ljusblå glasyr med kristaller i rostiga toner.',
	price: 300,
	images: ['PXL_20230416_184245941~2.jpg', 'PXL_20230416_184254389~2.jpg', 'PXL_20230416_184303996~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278795873060134/?sale_post_id=1278795873060134'
},
{
	title: 'Kopp',
	description: 'Kopp i svart glasyr med strykningar av blå och grön glasyr som ger en känsla av norrsken',
	price: 150,
	images: ['PXL_20230416_183947449~2.jpg', 'PXL_20230416_183953509~2.jpg', 'PXL_20230416_183959102~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278795039726884/?sale_post_id=1278795039726884'
},
{
	title: 'Kopp',
	description: 'Kopp i svart glasyr med strykningar av blå och grön glasyr som ger en känsla av norrsken',
	price: 150,
	images: ['PXL_20230416_183918047~2.jpg', 'PXL_20230416_183925101~2.jpg', 'PXL_20230416_183934847~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278794409726947/?sale_post_id=1278794409726947'
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått och gräddvit glasyr inuti.',
	price: 150,
	images: ['PXL_20230416_183807463~2.jpg', 'PXL_20230416_183813360~2.jpg', 'PXL_20230416_183829269~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1278792339727154/?sale_post_id=1278792339727154'
},
{
	title: 'Mugg',
	description: 'Mugg med glittrig svart som övergår i brunt, med svart insida',
	price: 150,
	images: ['PXL_20221128_132726475.jpg', 'PXL_20221128_132740036.jpg', 'PXL_20221128_132750622.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175132400093149/?sale_post_id=1175132400093149'
},
{
	title: 'Tomteluva',
	description: 'Handtummad tomteluva i traditionella färger.',
	price: 75,
	images: ['PXL_20221128_133901914~2.jpg', 'PXL_20221128_133909499~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175129543426768/?sale_post_id=1175129543426768'
},
{
	title: 'Tumblermugg',
	description: 'Tumblermugg med 3 olika glasyer som skapar en härligt galen kombo från vete till lila och blått.',
	price: 150,
	images: ['PXL_20221128_132518008.jpg', 'PXL_20221128_132523288.jpg', 'PXL_20221128_132536702.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175128863426836/?sale_post_id=1175128863426836'
},
{
	title: 'Kruka',
	description: 'Kruka med jordnära toner, svart till brunt.',
	price: 175,
	images: ['PXL_20221016_105851088.jpg', 'PXL_20221016_105857896.jpg', 'PXL_20221016_105902055.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175127470093642/?sale_post_id=1175127470093642'
},
{
	title: 'Kruka',
	description: 'Kruka med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått.',
	price: 175,
	images: ['PXL_20221016_105809465.jpg', 'PXL_20221016_105802244.jpg', 'PXL_20221016_105837594.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175127006760355/?sale_post_id=1175127006760355'
},
{
	title: 'Kopp',
	description: 'Vit kopp med linje av genomskinlig grön krakileringsglasyr som bryter sig in i det vita.',
	price: 150,
	images: ['PXL_20220914_171711203.jpg', 'PXL_20220914_171718638.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1121163058823417/?sale_post_id=1121163058823417'
},
{
	title: 'Vas',
	description: 'En vas i metallisk glasyr som går mellan silver och guld, med en topp av skimrande blått mot svart. 15cm hög',
	price: 175,
	images: ['274007500_1600650900268571_2328752910574435200_n.jpg','274027656_1600650880268573_1133549150968984258_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/977925423147182/?sale_post_id=977925423147182'
},
{
	title: 'Tumblermuggar',
	description: '2st tumblermuggar med karvat mönster. Glasyr i färgerna från brun/lila till ljusblått. Rymmer 3dl.',
	price: 250,
	images: ['268986439_1562513480748980_3866638890987762563_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/943327786606946/?sale_post_id=943327786606946'
},
{
	title: 'Vas',
	description: 'Dubbelglaserad med blåa och grönbruna inslag. Höjd 15cm',
	price: 250,
	images: ['244646152_1514000992266896_1204981113994682337_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/899368077669584/?sale_post_id=899368077669584'
},
]

let sold = [
{
	title: 'Servis',
	description: 'Servis med 6 assietter, skålar och muggar, Honungsvit och blå glasyr',
	price: 150,
	images: ['PXL_20230416_190217228.jpg', 'PXL_20230416_190206317.jpg', 'PXL_20230416_190229310.jpg', 'PXL_20230416_190245910.jpg', 'PXL_20230416_190345648.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130636759992/?sale_post_id=1175130636759992'
},
{
	title: 'Ljuslykta',
	description: 'Ljuslyka med emeraldgrön glasyr.',
	price: 150,
	images: ['PXL_20230416_184803385~2.jpg', 'PXL_20230416_184809843~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130636759992/?sale_post_id=1175130636759992'
},
{
	title: 'Ljuslykta',
	description: 'Ljuslyktor med hypnotiserande glittrande svart glasyr.',
	price: 150,
	images: ['PXL_20230416_184536780~2.jpg', 'PXL_20230416_184541834~2.jpg', 'PXL_20230416_184608219~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130636759992/?sale_post_id=1175130636759992'
},
{
	title: 'Mugg',
	description: 'Mugg med i härligt rosa toner.',
	price: 150,
	images: ['PXL_20230416_184452204~2.jpg', 'PXL_20230416_184457775~2.jpg', 'PXL_20230416_184506548~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130636759992/?sale_post_id=1175130636759992'
},
{
	title: 'Mugg-set',
	description: 'Mugg-set med hypnotiserande glittrande svart glasyr.',
	price: 150,
	images: ['PXL_20230416_183708102~2.jpg', 'PXL_20230416_183719148~2.jpg', 'PXL_20230416_183735055~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130636759992/?sale_post_id=1175130636759992'
},
{
	title: 'Mugg',
	description: 'Mugg med hypnotiserande glittrande svart glasyr.',
	price: 150,
	images: ['PXL_20230416_183630912~2.jpg', 'PXL_20230416_183642285~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130636759992/?sale_post_id=1175130636759992'
},
{
	title: 'Mugg',
	description: 'Mugg i flödande vit glasyr över blå.',
	price: 150,
	images: ['PXL_20221128_132824598.jpg', 'PXL_20221128_132832535.jpg', 'PXL_20221128_132849051.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175131023426620/?sale_post_id=1175131023426620'
},
{
	title: 'Tumblermugg',
	description: 'Handkarvad tumblermugg med mattsvart underkant och överkant i flödande vit glasyr över blå.',
	price: 150,
	images: ['PXL_20221128_132908986.jpg', 'PXL_20221128_132914478.jpg', 'PXL_20221128_132930466.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175131410093248/?sale_post_id=1175131410093248'
},
{
	title: 'Tumblermugg',
	description: 'Tumblermugg med glasyrkombination från honungsvit till olika nyanser av blått.',
	price: 150,
	images: ['PXL_20221128_133142775.jpg', 'PXL_20221128_133149033.jpg', 'PXL_20221128_133200444.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175131730093216/?sale_post_id=1175131730093216'
},
{
	title: 'Ljusstake',
	description: 'Ljusstake med hypnotiserande glittrande svart glasyr.',
	price: 175,
	images: ['PXL_20221128_133427243.jpg', 'PXL_20221128_133448701.jpg', 'PXL_20221128_133432119.jpg', 'PXL_20221128_133422001.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175132740093115/?sale_post_id=1175132740093115'
},
{
	title: 'Kopp',
	description: 'Kopp med olika glasyrlager som ger härlig jordnära känsla med rinningar av guld/rost.',
	price: 150,
	images: ['PXL_20220914_162457223.jpg', 'PXL_20220914_162507800.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1121158032157253/?sale_post_id=1121158032157253'
},
{
	title: 'Kopp',
	description: 'Kopp med glasyr i gråsvart med genombrytningar av rött',
	price: 150,
	images: ['PXL_20220914_162928690.jpg', 'PXL_20220914_162934702.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1121159182157138/?sale_post_id=1121159182157138'
},
{
	title: 'Tomteluva',
	description: 'Handtummad tomteluva i traditionella färger.',
	price: 75,
	images: ['PXL_20221128_133923084~2.jpg', 'PXL_20221128_133933441~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175129283426794/?sale_post_id=1175129283426794'
},
{
	title: 'Ljusstake',
	description: 'Ljusstake med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått.',
	price: 175,
	images: ['PXL_20221128_132701350.jpg', 'PXL_20221128_132708946.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130073426715/?sale_post_id=1175130073426715'
},
{
	title: 'Kruka/Skål',
	description: 'Lite mindre kruka/skål med rosa utida och grön insida.',
	price: 150,
	images: ['PXL_20221128_133508509.jpg', 'PXL_20221128_133515990.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175128223426900/?sale_post_id=1175128223426900'
},
{
	title: 'Kopp',
	description: 'Kopp med rosa utsida och grön på insidan och nedre kant.',
	price: 150,
	images: ['PXL_20221128_133547296~2.jpg', 'PXL_20221128_133558406~2.jpg', 'PXL_20221128_133618888~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175127773426945/?sale_post_id=1175127773426945'
},
{
	title: 'Mugg',
	description: 'Mugg med hypnotiserande glittrande svart glasyr.',
	price: 150,
	images: ['PXL_20221128_133332873.jpg', 'PXL_20221128_133348757.jpg', 'PXL_20221128_133357100.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1175130636759992/?sale_post_id=1175130636759992'
},
{
	title: 'Kopp',
	description: 'Dubbelglaserad kopp från honungsvit till grått och midnattsblå.',
	price: 150,
	images: ['PXL_20221128_133229687.jpg', 'PXL_20221128_133236355.jpg', 'PXL_20221128_133243898.jpg', 'PXL_20221128_133305324.jpg'],
	link: ''
},
{
	title: 'Frukost-set',
	description: 'Frukost-set svart bas-glasyr och flertalet andra glasyrer pålagt för att ge ett mönster som påminner om en galax',
	price: 150,
	images: ['PXL_20221128_133040761.jpg', 'PXL_20221128_133053779.jpg', 'PXL_20221128_133100780.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp med en glasyrblanding som ger ett spräckligt mönster i grönt och vitt',
	price: 150,
	images: ['PXL_20221128_132950767.jpg', 'PXL_20221128_132955968.jpg', 'PXL_20221128_133007809.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp-set med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått och gräddvit glasyr inuti.',
	price: 150,
	images: ['PXL_20221128_132550480.jpg', 'PXL_20221128_132556756.jpg', 'PXL_20221128_132620398.jpg', 'PXL_20221128_132642578.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått och gräddvit glasyr inuti.',
	price: 150,
	images: ['PXL_20221128_132421870.jpg', 'PXL_20221128_132431711.jpg', 'PXL_20221128_132448596.jpg', 'PXL_20221128_132454200.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med olika glasyrlager, från midnattsblått till turkos.',
	price: 150,
	images: ['PXL_20221128_132250479.jpg', 'PXL_20221128_132306858.jpg', 'PXL_20221128_132327665.jpg', 'PXL_20221128_132349364.jpg'],
	link: ''
},
{
	title: 'Ljusstakar',
	description: 'Ljusstakar i olika glasyrkombinationer',
	price: 150,
	images: ['IMG_20220914_194958_871.jpg', 'IMG_20220914_194958_824.jpg'],
	link: ''
},
{
	title: 'Frukost-set',
	description: '2 muggar och 2 skålar i mörkblått med kopparfärg på kanten och inuti. Muggarna rymmer 4dl och skålarna 7dl.',
	price: 500,
	images: ['PXL_20220523_182501817~3.jpg','PXL_20220523_182440801~2.jpg', 'PXL_20220523_182447153~2.jpg', 'PXL_20220523_182433623~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042519086687815/?sale_post_id=1042519086687815'
},
{
	title: 'Garnskål',
	description: '',
	price: 150,
	images: ['IMG_20220213_125919__02.jpg', 'IMG_20220213_125925__01.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set i härligt pastell grånblå glasyr',
	price: 150,
	images: ['PXL_20220914_170435068.jpg', 'PXL_20220914_170451699.jpg', 'PXL_20220914_170506449.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1121161095490280/?sale_post_id=1121161095490280'
},
{
	title: 'Skål',
	description: 'Skål i mörkblått med kopparfärg på kanten. 20 cm bred och 9 cm hög',
	price: 350,
	images: ['PXL_20220523_181928011~3.jpg','PXL_20220523_181932965~2.jpg', 'PXL_20220523_182136175~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042520286687695/?sale_post_id=1042520286687695'
},
{
	title: 'Kopp',
	description: 'Kopp med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått',
	price: 150,
	images: ['PXL_20220914_171225018.jpg', 'PXL_20220914_171230970.jpg', 'PXL_20220914_171246251.jpg'],
	link: ''
},
{
	title: 'Fika-set',
	description: 'Kopparna rymmer 2,5dl',
	price: 400,
	images: ['240219608_1482493228751006_4468803589295371739_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/869573270649065/?sale_post_id=869573270649065'
},
{
	title: 'Kopp',
	description: 'I delad glasyr, vit och speglande palladium. Med dubbla öron',
	price: 150,
	images: ['IMG_20220327_190159__01.jpg', 'IMG_20220327_190210__01.jpg', 'IMG_20220327_190216__01.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp med toner av rökt merlote och blått skimmer på kanten.',
	price: 150,
	images: ['PXL_20220914_171627994.jpg', 'PXL_20220914_171616940.jpg'],
	link: ''
},
{
	title: 'Garnskål',
	description: 'Garnskål med lila bas och olika kristallglasyrer. 13 cm bred 7 cm djup',
	price: 150,
	images: ['273912390_1600637060269955_7889427997290398644_n.jpg','273918651_1600637073603287_5533990748054627523_n.jpg', '273911817_1600637113603283_7443315622378128731_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/977916479814743/?sale_post_id=977916479814743'
},
{
	title: 'Garnskål',
	description: '',
	price: 150,
	images: ['IMG_20220704_205536_741.jpg'],
	link: ''
},
{
	title: 'Frukost-set',
	description: '',
	price: 500,
	images: ['IMG_20211110_204539.jpg','IMG_20211110_204554.jpg', 'IMG_20211110_204609.jpg'],
	link: ''
},
{
	title: 'Frukost-set',
	description: '',
	price: 500,
	images: ['IMG_20210822_114832.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp med bas av stormblått med vit glasyr ovanpå som ger spännande "hål" känsla.',
	price: 150,
	images: ['PXL_20220914_171521929.jpg', 'PXL_20220914_171527955.jpg', 'PXL_20220914_171536707.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: '',
	price: 150,
	images: ['244540386_1513999132267082_6427244979507076930_n.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'I nordisk blå, med runan för N (lugn) på sig',
	price: 150,
	images: ['IMG_20220213_125206__01.jpg', 'IMG_20220213_125219__01.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: '',
	price: 150,
	images: ['IMG_20220704_205536_797.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Med ön trossö fäst på i krakileringsglasyr',
	price: 150,
	images: ['244370204_1511163282550667_3727576941459921482_n.jpg', '244991674_1513991135601215_2066005598824678361_n.jpg'],
	link: ''
},
{
	title: 'Vas',
	description: '',
	price: 150,
	images: ['245140019_1514002045600124_8979023271363613543_n.jpg'],
	link: ''
},
{
	title: 'Frukost-set',
	description: '2st dubbelglaserade koppar och skålar i svart och skimrande blått. Kopparna rymmer 2,5 dl och skålarna 5dl.',
	price: 450,
	images: ['255080229_1535977976735864_2993546396191219090_n.jpg','255120691_1535977973402531_7910640452187287802_n.jpg', '254729405_1535977986735863_541731611993709365_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/919314482341610/?sale_post_id=919314482341610'
},
{
	title: 'Svamp',
	description: '',
	price: 150,
	images: ['PXL_20220523_181821955~2.jpg','PXL_20220523_181826976~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042517650021292/?sale_post_id=1042517650021292'
},
{
	title: 'Svamp',
	description: '',
	price: 150,
	images: ['PXL_20220523_181800690~2.jpg','PXL_20220523_181812387~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042517190021338/?sale_post_id=1042517190021338'
},
{
	title: 'Svamp',
	description: '',
	price: 150,
	images: ['PXL_20220523_181746019~2.jpg','PXL_20220523_181750000~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042516726688051/?sale_post_id=1042516726688051'
},
{
	title: 'Svamp',
	description: '',
	price: 150,
	images: ['PXL_20220523_181711985~2.jpg','PXL_20220523_181717059~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042516403354750/?sale_post_id=1042516403354750'
},
{
	title: 'Svamp',
	description: '',
	price: 150,
	images: ['PXL_20220523_181647200~2.jpg','PXL_20220523_181659413~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042516100021447/?sale_post_id=1042516100021447'
},
{
	title: 'Skål-set',
	description: 'I nordisk blå',
	price: 350,
	images: ['IMG_20220213_125722__01.jpg', 'IMG_20220213_125825__01.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042521233354267/?sale_post_id=1042521233354267'
},
{
	title: 'Skål',
	description: 'Skål med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått. Bredd 21 cm, höjd 7,5 cm',
	price: 350,
	images: ['PXL_20220523_182203449~2.jpg','PXL_20220523_182220740~2.jpg', 'PXL_20220523_182247612~3.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042521233354267/?sale_post_id=1042521233354267'
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med olika glasyrlager som ger härlig jordnära känsla med rinningar av guld/rost.',
	price: 150,
	images: ['PXL_20220914_171105666.jpg', 'PXL_20220914_171119618.jpg', 'PXL_20220914_171131598.jpg'],
	link: ''
},
{
	title: 'Tumblermugg',
	description: 'Tumblermugg i mattsvart med oglaserat linje runtom. Rymmer 3,5dl',
	price: 100,
	images: ['244749403_1514000112266984_2815838856125709603_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/899367304336328/?sale_post_id=899367304336328'
},
{
	title: 'Skål',
	description: 'Skål med glanssvart bas och flammig blå glasyr på kanten och lila glasyrstänk inuti.',
	price: 150,
	images: ['IMG_20220914_194958_954.jpg', 'IMG_20220914_194958_894.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått',
	price: 150,
	images: ['PXL_20220914_163037688.jpg', 'PXL_20220914_163047535.jpg', 'PXL_20220914_163116505.jpg'],
	link: ''
},
{
	title: 'Skål',
	description: 'Skål med olika glasyrlager, från midnattsblått till turkos.',
	price: 150,
	images: ['IMG_20220914_194958_966.jpg', 'IMG_20220914_194958_942.jpg'],
	link: ''
},
{
	title: 'Ljuslykta',
	description: 'Ljuslykta med glasyr i färgerna från brun/lila till ljusblått.',
	price: 75,
	images: ['269094000_1562515890748739_6765739051806711064_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/943328809940177/?sale_post_id=943328809940177'
},
{
	title: 'Ljuslykta',
	description: '',
	price: 75,
	images: ['IMG_20211110_203921.jpg', 'IMG_20211110_204242.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp med glasyrblanding som ger toner från järnrik jord till flammigt norrsken.',
	price: 150,
	images: ['PXL_20220914_171422741.jpg', 'PXL_20220914_171429060.jpg', 'PXL_20220914_171440842.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: '',
	price: 150,
	images: ['IMG_20210822_120947.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: '',
	price: 150,
	images: ['IMG_20210822_121525.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: '',
	price: 150,
	images: ['IMG_20210822_121612.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: '',
	price: 150,
	images: ['IMG_3812.JPG'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått.',
	price: 150,
	images: ['IMG_20220213_122554__01.jpg', 'IMG_20220213_122609__01.jpg', 'IMG_20220213_122624__01.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp inspererad från ekfat.',
	price: 150,
	images: ['PXL_20220914_162549471.jpg', 'PXL_20220914_162542408.jpg'],
	link: ''
},
{
	title: 'Skål-set',
	description: 'Skål-set med glanssvart bas och överdel i olika färger.',
	price: 150,
	images: ['PXL_20220914_173027275.jpg', 'PXL_20220914_172957786.jpg', 'PXL_20220914_173010111.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med mattsvart underkant och glasyrblanding som skimmrar i blått och vitt',
	price: 150,
	images: ['PXL_20220914_172900220.jpg', 'PXL_20220914_172825340.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp med olika glasyer som skapar en stjärnhimmel med sten och grönska.',
	price: 150,
	images: ['PXL_20220914_162727971.jpg', 'PXL_20220914_162715282.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: '',
	price: 150,
	images: ['20211002105935_IMG_3793.JPG'],
	link: ''
},
{
	title: 'Kopp-set',
	description: '',
	price: 150,
	images: ['IMG_20220507_185105_905.jpg', 'PXL_20220507_163125954.jpg', 'PXL_20220507_163132981.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp med 3 olika glasyer som skapar en härligt galen kombo från vete till lila och blått.',
	price: 150,
	images: ['PXL_20220914_162841789.jpg', 'PXL_20220914_162851736.jpg', 'PXL_20220914_162902818.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set i art-deco grön',
	price: 150,
	images: ['PXL_20220914_170731935.jpg', 'PXL_20220914_170750602.jpg', 'PXL_20220914_170828544.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: 'Kopp-set med lagrad glasyr för att ge härlig pastell effekt från blått till grå-beige',
	price: 150,
	images: ['PXL_20220914_170543785.jpg', 'PXL_20220914_170604948.jpg', 'PXL_20220914_170554585.jpg'],
	link: ''
},
{
	title: 'Kopp/tumbler',
	description: 'Svart kopp med skimmer av midnattsblå. Ihoptryckt under drejning för att ge härlig håll-känsla',
	price: 150,
	images: ['PXL_20220914_162825912.jpg','PXL_20220914_162806217.jpg', 'PXL_20220914_162811546.jpg'],
	link: ''
},
{
	title: '2st koppar',
	description: '2st koppar med glasyr som skimrar från mörkblått till ljusblått. Rymmer 3dl.',
	price: 200,
	images: ['273935851_1600656490268012_1934134975031832357_n.jpg','273834650_1600656530268008_3878306301093336129_n.jpg','273932149_1600656516934676_346712226774705567_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/977930356480022/?sale_post_id=977930356480022'
},
{
	title: 'Kopp',
	description: 'Kopp med olika gristallglasyrlager, djup grön med skimmer av gult, ljusgrön och blått.',
	price: 150,
	images: ['PXL_20220914_162615121.jpg','PXL_20220914_162648450.jpg'],
	link: ''
},
{
	title: 'Kopp',
	description: 'Kopp med olika glasyrlager, från midnattsblått till turkos.',
	price: 150,
	images: ['PXL_20220914_162318625.jpg','PXL_20220914_162327962.jpg', 'PXL_20220914_162347473.jpg', 'PXL_20220914_162440835.jpg'],
	link: ''
},
{
	title: 'Kopp-set',
	description: '4st muggar med högglansglasyr i rött, orange, gult och blått med kristallglasyr ovanpå. Kopparna rymmer ca 4dl.',
	price: 550,
	images: ['PXL_20220523_183013501~3.jpg','PXL_20220523_182957836~2.jpg', 'PXL_20220523_182931685~2.jpg', 'PXL_20220523_182840356~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042523010020756/?sale_post_id=1042523010020756'
},
{
	title: 'Kopp',
	description: 'Kopp med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått. Rymmer ca 3,5dl.',
	price: 100,
	images: ['276306416_1630319293968398_3567928016288805453_n.jpg','277311709_1630319367301724_3371511841710013324_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1004331183839939/?sale_post_id=1004331183839939'
},
{
	title: 'Kopp',
	description: 'Kopp med olika glasyrlager som ger färg från rödbrunt till skimrande mörkblått. Rymmer ca 4,5dl.',
	price: 100,
	images: ['276226499_1630318413968486_7707813999784825794_n.jpg','276279439_1630318493968478_6922993678832292367_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1004330623839995/?sale_post_id=1004330623839995'
},
{
	title: 'Skål',
	description: 'Skål i midnattsblå glasyr. 15,5cm bred och 8cm djup.',
	price: 150,
	images: ['273896283_1600652580268403_5006369387092440977_n.jpg','273892937_1600652560268405_3474694267869960941_n.jpg','273862951_1600652600268401_1469268684366429663_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/977926639813727/?sale_post_id=977926639813727'
},
{
	title: 'Kruka',
	description: 'En kruka med spiralform i mörkgrön glasyr som har inslag av olivgröna/bruna kristaller. Höjd 14,5cm och 9cm djup.',
	price: 150,
	images: ['273896667_1600649166935411_898140117733135181_n.jpg','273970865_1600649196935408_8874258626325064800_n.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/977923789814012/?sale_post_id=977923789814012'
},
]

/*
Base object

{
	title: 'Kopp-set',
	description: '2 muggar och 2 skålar i mörkblått med kopparfärg på kanten och inuti. Muggarna rymmer 4dl och skålarna 7dl.',
	price: 550,
	images: ['PXL_20220523_182501817~3.jpg','PXL_20220523_182440801~2.jpg', 'PXL_20220523_182447153~2.jpg', 'PXL_20220523_182433623~2.jpg'],
	link: 'https://www.facebook.com/groups/869565873983138/permalink/1042519086687815/?sale_post_id=1042519086687815'
}

*/

/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/  
function nextImage(elem) {
	const images = elem.querySelectorAll(".media img");
	for (let i = 0; i < images.length; i++) {
		if(images[i].classList.contains('current')) {
			images[i].classList.remove('current');
			let next = (i+1) >= images.length ? 0 : (i + 1);
			images[next].classList.add('current');
			break;
		}
	}
}

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });     

		function renderItems() {
			let portfolioItems =  document.getElementById('portfolio-items');
			let soldPortfolioItems =  document.getElementById('sold-portfolio-items');
			let thumbnailTemplate = document.getElementById('thumbnail-template').innerHTML;
			let modalTemplate = document.getElementById('modal-template').innerHTML;
			let objectsToWorkOn = portfolioItems? objectsForSale : sold;
			let placeholderToWorkOn = portfolioItems? portfolioItems : soldPortfolioItems;


			let thumbnailHtml = '';
			let modalHtml = '';
			for(let i = 0; i < objectsToWorkOn.length; i++) {
				objectsToWorkOn[i].index = i;
				thumbnailHtml += Mustache.render(thumbnailTemplate, objectsToWorkOn[i]);
				modalHtml += Mustache.render(modalTemplate, objectsToWorkOn[i]);
				
			}
			document.getElementById('portfolio-wrapper').innerHTML = thumbnailHtml;
			placeholderToWorkOn.innerHTML = placeholderToWorkOn.innerHTML + modalHtml;
			
			let imageContainers = document.querySelectorAll('.media')
			for(let i = 0; i < imageContainers.length; i++) {
				imageContainers[i].firstElementChild.classList.add('current')
			}
			
		   /*----------------------------------------------------*/
			/*	Modal Popup
			------------------------------------------------------*/
			$('.item-wrap a').magnificPopup({

			   type:'inline',
			   fixedContentPos: false,
			   removalDelay: 300,
			   showCloseBtn: false,
			   mainClass: 'mfp-fade'

			});
			$(document).on('click', '.popup-modal-dismiss', function (e) {
					e.preventDefault();
					$.magnificPopup.close();
    });
		}	  
		
		renderItems();
  	})


  	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
  	$(window).load(function() {

	  	$('#hero-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: ".hero-container",
	      animation: 'fade',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      before: function(slider){
			   $(slider).find(".animated").each(function(){
			   	$(this).removeAttr("class");
			  	});			  	
			},
			start: function(slider){
			   $(slider).find(".flex-active-slide")
			           	.find("h1").addClass("animated fadeInDown show")
			           	.next().addClass("animated fadeInUp show");
			           		
			   $(window).trigger('resize');		  			 
			},
			after: function(slider){
			 	$(slider).find(".flex-active-slide")
			           	.find("h1").addClass("animated fadeInDown show")
			           	.next().addClass("animated fadeInUp show");			  
			}
	   });

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	   });
	   


   });
	
   /*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var header = $('#main-header');

	   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	      header.addClass('opaque');	      
	   }
      else {
         if (y < h + 30) {
            header.removeClass('opaque');
         }
         else {
            header.addClass('opaque');
         }
      }

	});


   /*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#nav-wrap a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});


   /*----------------------------------------------------*/
  	/* FitText setings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#hero-slider h1').fitText(1, { minFontSize: '30px', maxFontSize: '49px' });

  	}, 100);


  	/*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var menu_icon = $("<span class='menu-icon'>Menu</span>");
  	var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "",
                        title: "Menu",
                        href : "#" } 
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");  
   
   /* if JS is enabled, remove the two a.mobile-btns 
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove(); 
  	toggle_button.append(menu_icon); 
   nav_wrap.prepend(toggle_button); 

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");     
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function() {
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function() {      
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');      
  	});


  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  




   /*----------------------------------------------------*/
	/*  Placeholder Plugin setings
	------------------------------------------------------ */  	 
	$('input, textarea').placeholder()  

   
	/*----------------------------------------------------*/
	/*	contact form
	------------------------------------------------------*/

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({      	

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut(); 
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });     		
  		}

	});
	

})(jQuery);