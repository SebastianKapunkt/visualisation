var car_data = `
Car	Manufacturer	MPG	Cylinders	Displacement	Horsepower	Weight	Acceleration	Model Year	Origin
chevelle malibu	chevrolet	18	8	307	130	3504	12	70	American
skylark 320	buick	15	8	350	165	3693	11.5	70	American
satellite	plymouth	18	8	318	150	3436	11	70	American
rebel sst	amc	16	8	304	150	3433	12	70	American
torino	ford	17	8	302	140	3449	10.5	70	American
galaxie 500	ford	15	8	429	198	4341	10	70	American
impala	chevrolet	14	8	454	220	4354	9	70	American
fury iii	plymouth	14	8	440	215	4312	8.5	70	American
catalina	pontiac	14	8	455	225	4425	10	70	American
ambassador dpl	amc	15	8	390	190	3850	8.5	70	American
ds-21 pallas	citroen	NA	4	133	115	3090	17.5	70	European
chevelle concours (sw)	chevrolet	NA	8	350	165	4142	11.5	70	American
torino (sw)	ford	NA	8	351	153	4034	11	70	American
satellite (sw)	plymouth	NA	8	383	175	4166	10.5	70	American
rebel sst (sw)	amc	NA	8	360	175	3850	11	70	American
challenger se	dodge	15	8	383	170	3563	10	70	American
'cuda 340	plymouth	14	8	340	160	3609	8	70	American
mustang boss 302	ford	NA	8	302	140	3353	8	70	American
monte carlo	chevrolet	15	8	400	150	3761	9.5	70	American
estate wagon (sw)	buick	14	8	455	225	3086	10	70	American
corona mark ii	toyota	24	4	113	95	2372	15	70	Japanese
duster	plymouth	22	6	198	95	2833	15.5	70	American
hornet	amc	18	6	199	97	2774	15.5	70	American
maverick	ford	21	6	200	85	2587	16	70	American
pl510	datsun	27	4	97	88	2130	14.5	70	Japanese
1131 deluxe sedan	vw	26	4	97	46	1835	20.5	70	European
504	peugeot	25	4	110	87	2672	17.5	70	European
100 ls	audi	24	4	107	90	2430	14.5	70	European
99e	saab	25	4	104	95	2375	17.5	70	European
2002	bmw	26	4	121	113	2234	12.5	70	European
gremlin	amc	21	6	199	90	2648	15	70	American
f250	ford	10	8	360	215	4615	14	70	American
c20	chevrolet	10	8	307	200	4376	15	70	American
d200	dodge	11	8	318	210	4382	13.5	70	American
1200d	hi	9	8	304	193	4732	18.5	70	American
pl510	datsun	27	4	97	88	2130	14.5	71	Japanese
vega 2300	chevrolet	28	4	140	90	2264	15.5	71	American
corona	toyota	25	4	113	95	2228	14	71	Japanese
pinto	ford	25	4	98	NA	2046	19	71	American
super beetle 117	vw	NA	4	97	48	1978	20	71	European
gremlin	amc	19	6	232	100	2634	13	71	American
satellite custom	plymouth	16	6	225	105	3439	15.5	71	American
chevelle malibu	chevrolet	17	6	250	100	3329	15.5	71	American
torino 500	ford	19	6	250	88	3302	15.5	71	American
matador	amc	18	6	232	100	3288	15.5	71	American
impala	chevrolet	14	8	350	165	4209	12	71	American
catalina brougham	pontiac	14	8	400	175	4464	11.5	71	American
galaxie 500	ford	14	8	351	153	4154	13.5	71	American
fury iii	plymouth	14	8	318	150	4096	13	71	American
monaco (sw)	dodge	12	8	383	180	4955	11.5	71	American
country squire (sw)	ford	13	8	400	170	4746	12	71	American
safari (sw)	pontiac	13	8	400	175	5140	12	71	American
hornet sportabout (sw)	amc	18	6	258	110	2962	13.5	71	American
vega (sw)	chevrolet	22	4	140	72	2408	19	71	American
firebird	pontiac	19	6	250	100	3282	15	71	American
mustang	ford	18	6	250	88	3139	14.5	71	American
capri 2000	mercury	23	4	122	86	2220	14	71	American
opel 1900	buick	28	4	116	90	2123	14	71	European
304	peugeot	30	4	79	70	2074	19.5	71	European
124b	fiat	30	4	88	76	2065	14.5	71	European
corolla 1200	toyota	31	4	71	65	1773	19	71	Japanese
1200	datsun	35	4	72	69	1613	18	71	Japanese
model 111	vw	27	4	97	60	1834	19	71	European
cricket	plymouth	26	4	91	70	1955	20.5	71	American
corona hardtop	toyota	24	4	113	95	2278	15.5	72	Japanese
colt hardtop	dodge	25	4	97.5	80	2126	17	72	American
type 3	vw	23	4	97	54	2254	23.5	72	European
vega	chevrolet	20	4	140	90	2408	19.5	72	American
pinto runabout	ford	21	4	122	86	2226	16.5	72	American
impala	chevrolet	13	8	350	165	4274	12	72	American
catalina	pontiac	14	8	400	175	4385	12	72	American
fury iii	plymouth	15	8	318	150	4135	13.5	72	American
galaxie 500	ford	14	8	351	153	4129	13	72	American
ambassador sst	amc	17	8	304	150	3672	11.5	72	American
marquis	mercury	11	8	429	208	4633	11	72	American
lesabre custom	buick	13	8	350	155	4502	13.5	72	American
delta 88 royale	oldsmobile	12	8	350	160	4456	13.5	72	American
newport royal	chrysler	13	8	400	190	4422	12.5	72	American
rx2 coupe	mazda	19	3	70	97	2330	13.5	72	Japanese
matador (sw)	amc	15	8	304	150	3892	12.5	72	American
chevelle concours (sw)	chevrolet	13	8	307	130	4098	14	72	American
gran torino (sw)	ford	13	8	302	140	4294	16	72	American
satellite custom (sw)	plymouth	14	8	318	150	4077	14	72	American
145e (sw)	volvo	18	4	121	112	2933	14.5	72	European
411 (sw)	vw	22	4	121	76	2511	18	72	European
504 (sw)	peugeot	21	4	120	87	2979	19.5	72	European
12 (sw)	renault	26	4	96	69	2189	18	72	European
pinto (sw)	ford	22	4	122	86	2395	16	72	American
510 (sw)	datsun	28	4	97	92	2288	17	72	Japanese
corona mark ii (sw)	toyota	23	4	120	97	2506	14.5	72	Japanese
colt (sw)	dodge	28	4	98	80	2164	15	72	American
corolla 1600 (sw)	toyota	27	4	97	88	2100	16.5	72	Japanese
century 350	buick	13	8	350	175	4100	13	73	American
matador	amc	14	8	304	150	3672	11.5	73	American
malibu	chevrolet	13	8	350	145	3988	13	73	American
gran torino	ford	14	8	302	137	4042	14.5	73	American
coronet custom	dodge	15	8	318	150	3777	12.5	73	American
marquis brougham	mercury	12	8	429	198	4952	11.5	73	American
caprice classic	chevrolet	13	8	400	150	4464	12	73	American
ltd	ford	13	8	351	158	4363	13	73	American
fury gran sedan	plymouth	14	8	318	150	4237	14.5	73	American
new yorker brougham	chrysler	13	8	440	215	4735	11	73	American
electra 225 custom	buick	12	8	455	225	4951	11	73	American
ambassador brougham	amc	13	8	360	175	3821	11	73	American
valiant	plymouth	18	6	225	105	3121	16.5	73	American
nova custom	chevrolet	16	6	250	100	3278	18	73	American
hornet	amc	18	6	232	100	2945	16	73	American
maverick	ford	18	6	250	88	3021	16.5	73	American
duster	plymouth	23	6	198	95	2904	16	73	American
super beetle	vw	26	4	97	46	1950	21	73	European
impala	chevrolet	11	8	400	150	4997	14	73	American
country	ford	12	8	400	167	4906	12.5	73	American
custom suburb	plymouth	13	8	360	170	4654	13	73	American
vista cruiser	oldsmobile	12	8	350	180	4499	12.5	73	American
gremlin	amc	18	6	232	100	2789	15	73	American
carina	toyota	20	4	97	88	2279	19	73	Japanese
vega	chevrolet	21	4	140	72	2401	19.5	73	American
610	datsun	22	4	108	94	2379	16.5	73	Japanese
rx3	mazda	18	3	70	90	2124	13.5	73	Japanese
pinto	ford	19	4	122	85	2310	18.5	73	American
capri v6	mercury	21	6	155	107	2472	14	73	American
124 sport coupe	fiat	26	4	98	90	2265	15.5	73	European
monte carlo s	chevrolet	15	8	350	145	4082	13	73	American
grand prix	pontiac	16	8	400	230	4278	9.5	73	American
128	fiat	29	4	68	49	1867	19.5	73	European
opel manta	buick	24	4	116	75	2158	15.5	73	European
100ls	audi	20	4	114	91	2582	14	73	European
144ea	volvo	19	4	121	112	2868	15.5	73	European
dart custom	dodge	15	8	318	150	3399	11	73	American
99le	saab	24	4	121	110	2660	14	73	European
mark ii	toyota	20	6	156	122	2807	13.5	73	Japanese
omega	oldsmobile	11	8	350	180	3664	11	73	American
duster	plymouth	20	6	198	95	3102	16.5	74	American
maverick	ford	21	6	200	NA	2875	17	74	American
hornet	amc	19	6	232	100	2901	16	74	American
nova	chevrolet	15	6	250	100	3336	17	74	American
b210	datsun	31	4	79	67	1950	19	74	Japanese
pinto	ford	26	4	122	80	2451	16.5	74	American
corolla 1200	toyota	32	4	71	65	1836	21	74	Japanese
vega	chevrolet	25	4	140	75	2542	17	74	American
chevelle malibu classic	chevrolet	16	6	250	100	3781	17	74	American
matador	amc	16	6	258	110	3632	18	74	American
satellite sebring	plymouth	18	6	225	105	3613	16.5	74	American
gran torino	ford	16	8	302	140	4141	14	74	American
century luxus (sw)	buick	13	8	350	150	4699	14.5	74	American
coronet custom (sw)	dodge	14	8	318	150	4457	13.5	74	American
gran torino (sw)	ford	14	8	302	140	4638	16	74	American
matador (sw)	amc	14	8	304	150	4257	15.5	74	American
fox	audi	29	4	98	83	2219	16.5	74	European
dasher	vw	26	4	79	67	1963	15.5	74	European
opel manta	buick	26	4	97	78	2300	14.5	74	European
corona	toyota	31	4	76	52	1649	16.5	74	Japanese
710	datsun	32	4	83	61	2003	19	74	Japanese
colt	dodge	28	4	90	75	2125	14.5	74	American
128	fiat	24	4	90	75	2108	15.5	74	European
124 tc	fiat	26	4	116	75	2246	14	74	European
civic	honda	24	4	120	97	2489	15	74	Japanese
none	subaru	26	4	108	93	2391	15.5	74	Japanese
x1.9	fiat	31	4	79	67	2000	16	74	European
valiant custom	plymouth	19	6	225	95	3264	16	75	American
nova	chevrolet	18	6	250	105	3459	16	75	American
monarch	mercury	15	6	250	72	3432	21	75	American
maverick	ford	15	6	250	72	3158	19.5	75	American
catalina	pontiac	16	8	400	170	4668	11.5	75	American
bel air	chevrolet	15	8	350	145	4440	14	75	American
grand fury	plymouth	16	8	318	150	4498	14.5	75	American
ltd	ford	14	8	351	148	4657	13.5	75	American
century	buick	17	6	231	110	3907	21	75	American
chevelle malibu	chevrolet	16	6	250	105	3897	18.5	75	American
matador	amc	15	6	258	110	3730	19	75	American
fury	plymouth	18	6	225	95	3785	19	75	American
skyhawk	buick	21	6	231	110	3039	15	75	American
monza 2+2	chevrolet	20	8	262	110	3221	13.5	75	American
mustang ii	ford	13	8	302	129	3169	12	75	American
corolla	toyota	29	4	97	75	2171	16	75	Japanese
pinto	ford	23	4	140	83	2639	17	75	American
gremlin	amc	20	6	232	100	2914	16	75	American
astro	pontiac	23	4	140	78	2592	18.5	75	American
corona	toyota	24	4	134	96	2702	13.5	75	Japanese
dasher	vw	25	4	90	71	2223	16.5	75	European
710	datsun	24	4	119	97	2545	17	75	Japanese
pinto	ford	18	6	171	97	2984	14.5	75	American
rabbit	vw	29	4	90	70	1937	14	75	European
pacer	amc	19	6	232	90	3211	17	75	American
100ls	audi	23	4	115	95	2694	15	75	European
504	peugeot	23	4	120	88	2957	17	75	European
244dl	volvo	22	4	121	98	2945	14.5	75	European
99le	saab	25	4	121	115	2671	13.5	75	European
civic cvcc	honda	33	4	91	53	1795	17.5	75	Japanese
131	fiat	28	4	107	86	2464	15.5	76	European
opel 1900	buick	25	4	116	81	2220	16.9	76	European
ii	capri	25	4	140	92	2572	14.9	76	American
colt	dodge	26	4	98	79	2255	17.7	76	American
12tl	renault	27	4	101	83	2202	15.3	76	European
chevelle malibu classic	chevrolet	17.5	8	305	140	4215	13	76	American
coronet brougham	dodge	16	8	318	150	4190	13	76	American
matador	amc	15.5	8	304	120	3962	13.9	76	American
gran torino	ford	14.5	8	351	152	4215	12.8	76	American
valiant	plymouth	22	6	225	100	3233	15.4	76	American
nova	chevrolet	22	6	250	105	3353	14.5	76	American
maverick	ford	24	6	200	81	3012	17.6	76	American
hornet	amc	22.5	6	232	90	3085	17.6	76	American
chevette	chevrolet	29	4	85	52	2035	22.2	76	American
woody	chevrolet	24.5	4	98	60	2164	22.1	76	American
rabbit	vw	29	4	90	70	1937	14.2	76	European
civic	honda	33	4	91	53	1795	17.4	76	Japanese
aspen se	dodge	20	6	225	100	3651	17.7	76	American
granada ghia	ford	18	6	250	78	3574	21	76	American
ventura sj	pontiac	18.5	6	250	110	3645	16.2	76	American
pacer d/l	amc	17.5	6	258	95	3193	17.8	76	American
rabbit	vw	29.5	4	97	71	1825	12.2	76	European
b-210	datsun	32	4	85	70	1990	17	76	Japanese
corolla	toyota	28	4	97	75	2155	16.4	76	Japanese
pinto	ford	26.5	4	140	72	2565	13.6	76	American
245	volvo	20	4	130	102	3150	15.7	76	European
volare premier v8	plymouth	13	8	318	150	3940	13.2	76	American
504	peugeot	19	4	120	88	3270	21.9	76	European
mark ii	toyota	19	6	156	108	2930	15.5	76	Japanese
280s	mercedes	16.5	6	168	120	3820	16.7	76	European
seville	cadillac	16.5	8	350	180	4380	12.1	76	American
c10	chevrolet	13	8	350	145	4055	12	76	American
f108	ford	13	8	302	130	3870	15	76	American
d100	dodge	13	8	318	150	3755	14	76	American
accord cvcc	honda	31.5	4	98	68	2045	18.5	77	Japanese
opel isuzu deluxe	buick	30	4	111	80	2155	14.8	77	American
5 gtl	renault	36	4	79	58	1825	18.6	77	European
arrow gs	plymouth	25.5	4	122	96	2300	15.5	77	American
f-10 hatchback	datsun	33.5	4	85	70	1945	16.8	77	Japanese
caprice classic	chevrolet	17.5	8	305	145	3880	12.5	77	American
cutlass supreme	oldsmobile	17	8	260	110	4060	19	77	American
monaco brougham	dodge	15.5	8	318	145	4140	13.7	77	American
cougar brougham	mercury	15	8	302	130	4295	14.9	77	American
concours	chevrolet	17.5	6	250	110	3520	16.4	77	American
skylark	buick	20.5	6	231	105	3425	16.9	77	American
volare custom	plymouth	19	6	225	100	3630	17.7	77	American
granada	ford	18.5	6	250	98	3525	19	77	American
grand prix lj	pontiac	16	8	400	180	4220	11.1	77	American
monte carlo landau	chevrolet	15.5	8	350	170	4165	11.4	77	American
cordoba	chrysler	15.5	8	400	190	4325	12.2	77	American
thunderbird	ford	16	8	351	149	4335	14.5	77	American
rabbit custom	vw	29	4	97	78	1940	14.5	77	European
sunbird coupe	pontiac	24.5	4	151	88	2740	16	77	American
corolla liftback	toyota	26	4	97	75	2265	18.2	77	Japanese
mustang ii 2+2	ford	25.5	4	140	89	2755	15.8	77	American
chevette	chevrolet	30.5	4	98	63	2051	17	77	American
colt m/m	dodge	33.5	4	98	83	2075	15.9	77	American
dl	subaru	30	4	97	67	1985	16.4	77	Japanese
dasher	vw	30.5	4	97	78	2190	14.1	77	European
810	datsun	22	6	146	97	2815	14.5	77	Japanese
320i	bmw	21.5	4	121	110	2600	12.8	77	European
rx-4	mazda	21.5	3	80	110	2720	13.5	77	Japanese
rabbit custom diesel	vw	43.1	4	90	48	1985	21.5	78	European
fiesta	ford	36.1	4	98	66	1800	14.4	78	American
glc deluxe	mazda	32.8	4	78	52	1985	19.4	78	Japanese
b210 gx	datsun	39.4	4	85	70	2070	18.6	78	Japanese
civic cvcc	honda	36.1	4	91	60	1800	16.4	78	Japanese
cutlass salon brougham	oldsmobile	19.9	8	260	110	3365	15.5	78	American
diplomat	dodge	19.4	8	318	140	3735	13.2	78	American
monarch ghia	mercury	20.2	8	302	139	3570	12.8	78	American
phoenix lj	pontiac	19.2	6	231	105	3535	19.2	78	American
malibu	chevrolet	20.5	6	200	95	3155	18.2	78	American
fairmont (auto)	ford	20.2	6	200	85	2965	15.8	78	American
fairmont (man)	ford	25.1	4	140	88	2720	15.4	78	American
volare	plymouth	20.5	6	225	100	3430	17.2	78	American
concord	amc	19.4	6	232	90	3210	17.2	78	American
century special	buick	20.6	6	231	105	3380	15.8	78	American
zephyr	mercury	20.8	6	200	85	3070	16.7	78	American
aspen	dodge	18.6	6	225	110	3620	18.7	78	American
concord d/l	amc	18.1	6	258	120	3410	15.1	78	American
monte carlo landau	chevrolet	19.2	8	305	145	3425	13.2	78	American
regal sport coupe (turbo)	buick	17.7	6	231	165	3445	13.4	78	American
futura	ford	18.1	8	302	139	3205	11.2	78	American
magnum xe	dodge	17.5	8	318	140	4080	13.7	78	American
chevette	chevrolet	30	4	98	68	2155	16.5	78	American
corona	toyota	27.5	4	134	95	2560	14.2	78	Japanese
510	datsun	27.2	4	119	97	2300	14.7	78	Japanese
omni	dodge	30.9	4	105	75	2230	14.5	78	American
celica gt liftback	toyota	21.1	4	134	95	2515	14.8	78	Japanese
sapporo	plymouth	23.2	4	156	105	2745	16.7	78	American
starfire sx	oldsmobile	23.8	4	151	85	2855	17.6	78	American
200-sx	datsun	23.9	4	119	97	2405	14.9	78	Japanese
5000	audi	20.3	5	131	103	2830	15.9	78	European
264gl	volvo	17	6	163	125	3140	13.6	78	European
99gle	saab	21.6	4	121	115	2795	15.7	78	European
604sl	peugeot	16.2	6	163	133	3410	15.8	78	European
scirocco	vw	31.5	4	89	71	1990	14.9	78	European
accord lx	honda	29.5	4	98	68	2135	16.6	78	Japanese
lemans v6	pontiac	21.5	6	231	115	3245	15.4	79	American
zephyr 6	mercury	19.8	6	200	85	2990	18.2	79	American
fairmont 4	ford	22.3	4	140	88	2890	17.3	79	American
concord dl 6	amc	20.2	6	232	90	3265	18.2	79	American
aspen 6	dodge	20.6	6	225	110	3360	16.6	79	American
caprice classic	chevrolet	17	8	305	130	3840	15.4	79	American
ltd landau	ford	17.6	8	302	129	3725	13.4	79	American
grand marquis	mercury	16.5	8	351	138	3955	13.2	79	American
st. regis	dodge	18.2	8	318	135	3830	15.2	79	American
estate wagon (sw)	buick	16.9	8	350	155	4360	14.9	79	American
country squire (sw)	ford	15.5	8	351	142	4054	14.3	79	American
malibu classic (sw)	chevrolet	19.2	8	267	125	3605	15	79	American
lebaron town @ country (sw)	chrysler	18.5	8	360	150	3940	13	79	American
rabbit custom	vw	31.9	4	89	71	1925	14	79	European
glc deluxe	mazda	34.1	4	86	65	1975	15.2	79	Japanese
colt hatchback custom	dodge	35.7	4	98	80	1915	14.4	79	American
spirit dl	amc	27.4	4	121	80	2670	15	79	American
300d	mercedes	25.4	5	183	77	3530	20.1	79	European
eldorado	cadillac	23	8	350	125	3900	17.4	79	American
504	peugeot	27.2	4	141	71	3190	24.8	79	European
cutlass salon brougham	oldsmobile	23.9	8	260	90	3420	22.2	79	American
horizon	plymouth	34.2	4	105	70	2200	13.2	79	American
horizon tc3	plymouth	34.5	4	105	70	2150	14.9	79	American
210	datsun	31.8	4	85	65	2020	19.2	79	Japanese
strada custom	fiat	37.3	4	91	69	2130	14.7	79	European
skylark limited	buick	28.4	4	151	90	2670	16	79	American
citation	chevrolet	28.8	6	173	115	2595	11.3	79	American
omega brougham	oldsmobile	26.8	6	173	115	2700	12.9	79	American
phoenix	pontiac	33.5	4	151	90	2556	13.2	79	American
rabbit	vw	41.5	4	98	76	2144	14.7	80	European
corolla tercel	toyota	38.1	4	89	60	1968	18.8	80	Japanese
chevette	chevrolet	32.1	4	98	70	2120	15.5	80	American
310	datsun	37.2	4	86	65	2019	16.4	80	Japanese
citation	chevrolet	28	4	151	90	2678	16.5	80	American
fairmont	ford	26.4	4	140	88	2870	18.1	80	American
concord	amc	24.3	4	151	90	3003	20.1	80	American
aspen	dodge	19.1	6	225	90	3381	18.7	80	American
4000	audi	34.3	4	97	78	2188	15.8	80	European
corona liftback	toyota	29.8	4	134	90	2711	15.5	80	Japanese
626	mazda	31.3	4	120	75	2542	17.5	80	Japanese
510 hatchback	datsun	37	4	119	92	2434	15	80	Japanese
corolla	toyota	32.2	4	108	75	2265	15.2	80	Japanese
glc	mazda	46.6	4	86	65	2110	17.9	80	Japanese
colt	dodge	27.9	4	156	105	2800	14.4	80	American
210	datsun	40.8	4	85	65	2110	19.2	80	Japanese
rabbit c (diesel)	vw	44.3	4	90	48	2085	21.7	80	European
dasher (diesel)	vw	43.4	4	90	48	2335	23.7	80	European
5000s (diesel)	audi	36.4	5	121	67	2950	19.9	80	European
240d	mercedes	30	4	146	67	3250	21.8	80	European
civic 1500 gl	honda	44.6	4	91	67	1850	13.8	80	Japanese
lecar deluxe	renault	40.9	4	85	NA	1835	17.3	80	European
dl	subaru	33.8	4	97	67	2145	18	80	Japanese
rabbit	vw	29.8	4	89	62	1845	15.3	80	European
280-zx	datsun	32.7	6	168	132	2910	11.4	80	Japanese
rx-7 gs	mazda	23.7	3	70	100	2420	12.5	80	Japanese
tr7 coupe	triumph	35	4	122	88	2500	15.1	80	European
mustang cobra	ford	23.6	4	140	NA	2905	14.3	80	American
accord	honda	32.4	4	107	72	2290	17	80	Japanese
reliant	plymouth	27.2	4	135	84	2490	15.7	81	American
skylark	buick	26.6	4	151	84	2635	16.4	81	American
aries wagon (sw)	dodge	25.8	4	156	92	2620	14.4	81	American
citation	chevrolet	23.5	6	173	110	2725	12.6	81	American
reliant	plymouth	30	4	135	84	2385	12.9	81	American
starlet	toyota	39.1	4	79	58	1755	16.9	81	Japanese
champ	plymouth	39	4	86	64	1875	16.4	81	American
civic 1300	honda	35.1	4	81	60	1760	16.1	81	Japanese
2	subaru	32.3	4	97	67	2065	17.8	81	Japanese
210 mpg	datsun	37	4	85	65	1975	19.4	81	Japanese
tercel	toyota	37.7	4	89	62	2050	17.3	81	Japanese
glc 4	mazda	34.1	4	91	68	1985	16	81	Japanese
horizon 4	plymouth	34.7	4	105	63	2215	14.9	81	American
escort 4w	ford	34.4	4	98	65	2045	16.2	81	American
escort 2h	ford	29.9	4	98	65	2380	20.7	81	American
jetta	vw	33	4	105	74	2190	14.2	81	European
18i	renault	34.5	4	100	NA	2320	15.8	81	European
prelude	honda	33.7	4	107	75	2210	14.4	81	Japanese
corolla	toyota	32.4	4	108	75	2350	16.8	81	Japanese
200sx	datsun	32.9	4	119	100	2615	14.8	81	Japanese
626	mazda	31.6	4	120	74	2635	18.3	81	Japanese
505s turbo diesel	peugeot	28.1	4	141	80	3230	20.4	81	European
900s	saab	NA	4	121	110	2800	15.4	81	European
diesel	volvo	30.7	6	145	76	3160	19.6	81	European
cressida	toyota	25.4	6	168	116	2900	12.6	81	Japanese
810 maxima	datsun	24.2	6	146	120	2930	13.8	81	Japanese
century	buick	22.4	6	231	110	3415	15.8	81	American
cutlass ls	oldsmobile	26.6	8	350	105	3725	19	81	American
granada gl	ford	20.2	6	200	88	3060	17.1	81	American
lebaron salon	chrysler	17.6	6	225	85	3465	16.6	81	American
cavalier	chevrolet	28	4	112	88	2605	19.6	82	American
cavalier wagon	chevrolet	27	4	112	88	2640	18.6	82	American
cavalier 2-door	chevrolet	34	4	112	88	2395	18	82	American
j2000 se hatchback	pontiac	31	4	112	85	2575	16.2	82	American
aries se	dodge	29	4	135	84	2525	16	82	American
phoenix	pontiac	27	4	151	90	2735	18	82	American
fairmont futura	ford	24	4	140	92	2865	16.4	82	American
concord dl	amc	23	4	151	NA	3035	20.5	82	American
rabbit l	vw	36	4	105	74	1980	15.3	82	European
glc custom l	mazda	37	4	91	68	2025	18.2	82	Japanese
glc custom	mazda	31	4	91	68	1970	17.6	82	Japanese
horizon miser	plymouth	38	4	105	63	2125	14.7	82	American
lynx l	mercury	36	4	98	70	2125	17.3	82	American
stanza xe	nissan	36	4	120	88	2160	14.5	82	Japanese
accord	honda	36	4	107	75	2205	14.5	82	Japanese
corolla	toyota	34	4	108	70	2245	16.9	82	Japanese
civic	honda	38	4	91	67	1965	15	82	Japanese
civic (auto)	honda	32	4	91	67	1965	15.7	82	Japanese
310 gx	datsun	38	4	91	67	1995	16.2	82	Japanese
century limited	buick	25	6	181	110	2945	16.4	82	American
cutlass ciera (diesel)	oldsmobile	38	6	262	85	3015	17	82	American
lebaron medallion	chrysler	26	4	156	92	2585	14.5	82	American
granada l	ford	22	6	232	112	2835	14.7	82	American
celica gt	toyota	32	4	144	96	2665	13.9	82	Japanese
charger 2.2	dodge	36	4	135	84	2370	13	82	American
camaro	chevrolet	27	4	151	90	2950	17.3	82	American
mustang gl	ford	27	4	140	86	2790	15.6	82	American
pickup	vw	44	4	97	52	2130	24.6	82	European
rampage	dodge	32	4	135	84	2295	11.6	82	American
ranger	ford	28	4	120	79	2625	18.6	82	American
s-10	chevrolet	31	4	119	82	2720	19.4	82	American`;