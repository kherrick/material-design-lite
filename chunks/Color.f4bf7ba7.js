import{p as Cr,y as Ir}from"./preact.module.8af602d9.js";import{s as wr,_ as j,y as Sr}from"./hooks.module.5be5d437.js";import{e as ar}from"./jsxRuntime.module.f6a58cef.js";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return t<0?-1:t===0?0:1}function or(t,r,e){return(1-e)*t+e*r}function Ar(t,r,e){return e<t?t:e>r?r:e}function G(t){return t=t%360,t<0&&(t=t+360),t}function Tr(t,r){return G(r-t)<=180?1:-1}function Pr(t,r){return 180-Math.abs(Math.abs(t-r)-180)}function _(t,r){const e=t[0]*r[0][0]+t[1]*r[0][1]+t[2]*r[0][2],a=t[0]*r[1][0]+t[1]*r[1][1]+t[2]*r[1][2],o=t[0]*r[2][0]+t[1]*r[2][1]+t[2]*r[2][2];return[e,a,o]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Or=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],kr=[95.047,100,108.883];function K(t,r,e){return(255<<24|(t&255)<<16|(r&255)<<8|e&255)>>>0}function nr(t){const r=B(t[0]),e=B(t[1]),a=B(t[2]);return K(r,e,a)}function ir(t){return t>>16&255}function lr(t){return t>>8&255}function cr(t){return t&255}function Lr(t,r,e){const a=Or,o=a[0][0]*t+a[0][1]*r+a[0][2]*e,n=a[1][0]*t+a[1][1]*r+a[1][2]*e,s=a[2][0]*t+a[2][1]*r+a[2][2]*e,l=B(o),c=B(n),i=B(s);return K(l,c,i)}function Er(t){const r=V(ir(t)),e=V(lr(t)),a=V(cr(t));return _([r,e,a],Rr)}function Dr(t){const r=$(t),e=B(r);return K(e,e,e)}function J(t){const r=Er(t)[1];return 116*Fr(r/100)-16}function $(t){return 100*Hr((t+16)/116)}function V(t){const r=t/255;return r<=.040449936?r/12.92*100:Math.pow((r+.055)/1.055,2.4)*100}function B(t){const r=t/100;let e=0;return r<=.0031308?e=r*12.92:e=1.055*Math.pow(r,1/2.4)-.055,Ar(0,255,Math.round(e*255))}function xr(){return kr}function Fr(t){const r=.008856451679035631,e=24389/27;return t>r?Math.pow(t,1/3):(e*t+16)/116}function Hr(t){const r=.008856451679035631,e=24389/27,a=t*t*t;return a>r?a:(116*t-16)/e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=class{constructor(t,r,e,a,o,n,s,l,c,i){this.n=t,this.aw=r,this.nbb=e,this.ncb=a,this.c=o,this.nc=n,this.rgbD=s,this.fl=l,this.fLRoot=c,this.z=i}static make(t=xr(),r=200/Math.PI*$(50)/100,e=50,a=2,o=!1){const n=t,s=n[0]*.401288+n[1]*.650173+n[2]*-.051461,l=n[0]*-.250268+n[1]*1.204414+n[2]*.045854,c=n[0]*-.002079+n[1]*.048952+n[2]*.953127,i=.8+a/10,d=i>=.9?or(.59,.69,(i-.9)*10):or(.525,.59,(i-.8)*10);let g=o?1:i*(1-1/3.6*Math.exp((-r-42)/92));g=g>1?1:g<0?0:g;const p=i,f=[g*(100/s)+1-g,g*(100/l)+1-g,g*(100/c)+1-g],u=1/(5*r+1),M=u*u*u*u,C=1-M,I=M*r+.1*C*C*Math.cbrt(5*r),S=$(e)/t[1],E=1.48+Math.sqrt(S),A=.725/Math.pow(S,.2),T=A,y=[Math.pow(I*f[0]*s/100,.42),Math.pow(I*f[1]*l/100,.42),Math.pow(I*f[2]*c/100,.42)],b=[400*y[0]/(y[0]+27.13),400*y[1]/(y[1]+27.13),400*y[2]/(y[2]+27.13)],w=(2*b[0]+b[1]+.05*b[2])*A;return new Q(S,w,A,T,d,p,f,I,Math.pow(I,.25),E)}};let N=Q;N.DEFAULT=Q.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(r,e,a,o,n,s,l,c,i){this.hue=r,this.chroma=e,this.j=a,this.q=o,this.m=n,this.s=s,this.jstar=l,this.astar=c,this.bstar=i}distance(r){const e=this.jstar-r.jstar,a=this.astar-r.astar,o=this.bstar-r.bstar,n=Math.sqrt(e*e+a*a+o*o);return 1.41*Math.pow(n,.63)}static fromInt(r){return h.fromIntInViewingConditions(r,N.DEFAULT)}static fromIntInViewingConditions(r,e){const a=(r&16711680)>>16,o=(r&65280)>>8,n=r&255,s=V(a),l=V(o),c=V(n),i=.41233895*s+.35762064*l+.18051042*c,d=.2126*s+.7152*l+.0722*c,g=.01932141*s+.11916382*l+.95034478*c,p=.401288*i+.650173*d-.051461*g,f=-.250268*i+1.204414*d+.045854*g,u=-.002079*i+.048952*d+.953127*g,M=e.rgbD[0]*p,C=e.rgbD[1]*f,I=e.rgbD[2]*u,S=Math.pow(e.fl*Math.abs(M)/100,.42),E=Math.pow(e.fl*Math.abs(C)/100,.42),A=Math.pow(e.fl*Math.abs(I)/100,.42),T=x(M)*400*S/(S+27.13),y=x(C)*400*E/(E+27.13),b=x(I)*400*A/(A+27.13),w=(11*T+-12*y+b)/11,R=(T+y-2*b)/9,q=(20*T+20*y+21*b)/20,D=(40*T+20*y+b)/20,H=Math.atan2(R,w)*180/Math.PI,z=H<0?H+360:H>=360?H-360:H,Z=z*Math.PI/180,gr=D*e.nbb,U=100*Math.pow(gr/e.aw,e.c*e.z),pr=4/e.c*Math.sqrt(U/100)*(e.aw+4)*e.fLRoot,fr=z<20.14?z+360:z,br=.25*(Math.cos(fr*Math.PI/180+2)+3.8),ur=5e4/13*br*e.nc*e.ncb*Math.sqrt(w*w+R*R)/(q+.305),X=Math.pow(ur,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),rr=X*Math.sqrt(U/100),er=rr*e.fLRoot,yr=50*Math.sqrt(X*e.c/(e.aw+4)),hr=(1+100*.007)*U/(1+.007*U),tr=1/.0228*Math.log(1+.0228*er),vr=tr*Math.cos(Z),Mr=tr*Math.sin(Z);return new h(z,rr,U,pr,er,yr,hr,vr,Mr)}static fromJch(r,e,a){return h.fromJchInViewingConditions(r,e,a,N.DEFAULT)}static fromJchInViewingConditions(r,e,a,o){const n=4/o.c*Math.sqrt(r/100)*(o.aw+4)*o.fLRoot,s=e*o.fLRoot,l=e/Math.sqrt(r/100),c=50*Math.sqrt(l*o.c/(o.aw+4)),i=a*Math.PI/180,d=(1+100*.007)*r/(1+.007*r),g=1/.0228*Math.log(1+.0228*s),p=g*Math.cos(i),f=g*Math.sin(i);return new h(a,e,r,n,s,c,d,p,f)}static fromUcs(r,e,a){return h.fromUcsInViewingConditions(r,e,a,N.DEFAULT)}static fromUcsInViewingConditions(r,e,a,o){const n=e,s=a,l=Math.sqrt(n*n+s*s),c=(Math.exp(l*.0228)-1)/.0228/o.fLRoot;let i=Math.atan2(s,n)*(180/Math.PI);i<0&&(i+=360);const d=r/(1-(r-100)*.007);return h.fromJchInViewingConditions(d,c,i,o)}toInt(){return this.viewed(N.DEFAULT)}viewed(r){const e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),a=Math.pow(e/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),o=this.hue*Math.PI/180,n=.25*(Math.cos(o+2)+3.8),s=r.aw*Math.pow(this.j/100,1/r.c/r.z),l=n*(5e4/13)*r.nc*r.ncb,c=s/r.nbb,i=Math.sin(o),d=Math.cos(o),g=23*(c+.305)*a/(23*l+11*a*d+108*a*i),p=g*d,f=g*i,u=(460*c+451*p+288*f)/1403,M=(460*c-891*p-261*f)/1403,C=(460*c-220*p-6300*f)/1403,I=Math.max(0,27.13*Math.abs(u)/(400-Math.abs(u))),S=x(u)*(100/r.fl)*Math.pow(I,1/.42),E=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),A=x(M)*(100/r.fl)*Math.pow(E,1/.42),T=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),y=x(C)*(100/r.fl)*Math.pow(T,1/.42),b=S/r.rgbD[0],w=A/r.rgbD[1],R=y/r.rgbD[2],q=1.86206786*b-1.01125463*w+.14918677*R,D=.38752654*b+.62144744*w-.00897398*R,H=-.0158415*b-.03412294*w+1.04996444*R;return Lr(q,D,H)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=class{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let e=0;return r<=.0031308?e=r*12.92:e=1.055*Math.pow(r,1/2.4)-.055,e*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return x(t)*400*r/(r+27.13)}static hueOf(t){const r=_(t,m.SCALED_DISCOUNT_FROM_LINRGB),e=m.chromaticAdaptation(r[0]),a=m.chromaticAdaptation(r[1]),o=m.chromaticAdaptation(r[2]),n=(11*e+-12*a+o)/11,s=(e+a-2*o)/9;return Math.atan2(s,n)}static areInCyclicOrder(t,r,e){const a=m.sanitizeRadians(r-t),o=m.sanitizeRadians(e-t);return a<o}static intercept(t,r,e){return(r-t)/(e-t)}static lerpPoint(t,r,e){return[t[0]+(e[0]-t[0])*r,t[1]+(e[1]-t[1])*r,t[2]+(e[2]-t[2])*r]}static setCoordinate(t,r,e,a){const o=m.intercept(t[a],r,e[a]);return m.lerpPoint(t,o,e)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const e=m.Y_FROM_LINRGB[0],a=m.Y_FROM_LINRGB[1],o=m.Y_FROM_LINRGB[2],n=r%4<=1?0:100,s=r%2===0?0:100;if(r<4){const l=n,c=s,i=(t-l*a-c*o)/e;return m.isBounded(i)?[i,l,c]:[-1,-1,-1]}else if(r<8){const l=n,c=s,i=(t-c*e-l*o)/a;return m.isBounded(i)?[c,i,l]:[-1,-1,-1]}else{const l=n,c=s,i=(t-l*e-c*a)/o;return m.isBounded(i)?[l,c,i]:[-1,-1,-1]}}static bisectToSegment(t,r){let e=[-1,-1,-1],a=e,o=0,n=0,s=!1,l=!0;for(let c=0;c<12;c++){const i=m.nthVertex(t,c);if(i[0]<0)continue;const d=m.hueOf(i);if(!s){e=i,a=i,o=d,n=d,s=!0;continue}(l||m.areInCyclicOrder(o,d,n))&&(l=!1,m.areInCyclicOrder(o,r,d)?(a=i,n=d):(e=i,o=d))}return[e,a]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const e=m.bisectToSegment(t,r);let a=e[0],o=m.hueOf(a),n=e[1];for(let s=0;s<3;s++)if(a[s]!==n[s]){let l=-1,c=255;a[s]<n[s]?(l=m.criticalPlaneBelow(m.trueDelinearized(a[s])),c=m.criticalPlaneAbove(m.trueDelinearized(n[s]))):(l=m.criticalPlaneAbove(m.trueDelinearized(a[s])),c=m.criticalPlaneBelow(m.trueDelinearized(n[s])));for(let i=0;i<8&&!(Math.abs(c-l)<=1);i++){const d=Math.floor((l+c)/2),g=m.CRITICAL_PLANES[d],p=m.setCoordinate(a,g,n,s),f=m.hueOf(p);m.areInCyclicOrder(o,r,f)?(n=p,c=d):(a=p,o=f,l=d)}}return m.midpoint(a,n)}static inverseChromaticAdaptation(t){const r=Math.abs(t),e=Math.max(0,27.13*r/(400-r));return x(t)*Math.pow(e,1/.42)}static findResultByJ(t,r,e){let a=Math.sqrt(e)*11;const o=N.DEFAULT,n=1/Math.pow(1.64-Math.pow(.29,o.n),.73),s=.25*(Math.cos(t+2)+3.8)*(5e4/13)*o.nc*o.ncb,l=Math.sin(t),c=Math.cos(t);for(let i=0;i<5;i++){const d=a/100,g=r===0||a===0?0:r/Math.sqrt(d),p=Math.pow(g*n,1/.9),f=o.aw*Math.pow(d,1/o.c/o.z)/o.nbb,u=23*(f+.305)*p/(23*s+11*p*c+108*p*l),M=u*c,C=u*l,I=(460*f+451*M+288*C)/1403,S=(460*f-891*M-261*C)/1403,E=(460*f-220*M-6300*C)/1403,A=m.inverseChromaticAdaptation(I),T=m.inverseChromaticAdaptation(S),y=m.inverseChromaticAdaptation(E),b=_([A,T,y],m.LINRGB_FROM_SCALED_DISCOUNT);if(b[0]<0||b[1]<0||b[2]<0)return 0;const w=m.Y_FROM_LINRGB[0],R=m.Y_FROM_LINRGB[1],q=m.Y_FROM_LINRGB[2],D=w*b[0]+R*b[1]+q*b[2];if(D<=0)return 0;if(i===4||Math.abs(D-e)<.002)return b[0]>100.01||b[1]>100.01||b[2]>100.01?0:nr(b);a=a-(D-e)*a/(2*D)}return 0}static solveToInt(t,r,e){if(r<1e-4||e<1e-4||e>99.9999)return Dr(e);t=G(t);const a=t/180*Math.PI,o=$(e),n=m.findResultByJ(a,r,o);if(n!==0)return n;const s=m.bisectToLimit(o,a);return nr(s)}static solveToCam(t,r,e){return h.fromInt(m.solveToInt(t,r,e))}};let F=m;F.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];F.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];F.Y_FROM_LINRGB=[.2126,.7152,.0722];F.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(r){this.argb=r;const e=h.fromInt(r);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=J(r),this.argb=r}static from(r,e,a){return new P(F.solveToInt(r,e,a))}static fromInt(r){return new P(r)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(r){this.setInternalState(F.solveToInt(r,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(r){this.setInternalState(F.solveToInt(this.internalHue,r,this.internalTone))}get tone(){return this.internalTone}set tone(r){this.setInternalState(F.solveToInt(this.internalHue,this.internalChroma,r))}setInternalState(r){const e=h.fromInt(r);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=J(r),this.argb=r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static harmonize(r,e){const a=P.fromInt(r),o=P.fromInt(e),n=Pr(a.hue,o.hue),s=Math.min(n*.5,15),l=G(a.hue+s*Tr(a.hue,o.hue));return P.from(l,a.chroma,a.tone).toInt()}static hctHue(r,e,a){const o=W.cam16Ucs(r,e,a),n=h.fromInt(o),s=h.fromInt(r);return P.from(n.hue,s.chroma,J(r)).toInt()}static cam16Ucs(r,e,a){const o=h.fromInt(r),n=h.fromInt(e),s=o.jstar,l=o.astar,c=o.bstar,i=n.jstar,d=n.astar,g=n.bstar,p=s+(i-s)*a,f=l+(d-l)*a,u=c+(g-c)*a;return h.fromUcs(p,f,u).toInt()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(r,e){this.hue=r,this.chroma=e,this.cache=new Map}static fromInt(r){const e=P.fromInt(r);return v.fromHueAndChroma(e.hue,e.chroma)}static fromHueAndChroma(r,e){return new v(r,e)}tone(r){let e=this.cache.get(r);return e===void 0&&(e=P.from(this.hue,this.chroma,r).toInt(),this.cache.set(r,e)),e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static of(r){return new L(r,!1)}static contentOf(r){return new L(r,!0)}constructor(r,e){const a=P.fromInt(r),o=a.hue,n=a.chroma;e?(this.a1=v.fromHueAndChroma(o,n),this.a2=v.fromHueAndChroma(o,n/3),this.a3=v.fromHueAndChroma(o+60,n/2),this.n1=v.fromHueAndChroma(o,Math.min(n/12,4)),this.n2=v.fromHueAndChroma(o,Math.min(n/6,8))):(this.a1=v.fromHueAndChroma(o,Math.max(48,n)),this.a2=v.fromHueAndChroma(o,16),this.a3=v.fromHueAndChroma(o+60,24),this.n1=v.fromHueAndChroma(o,4),this.n2=v.fromHueAndChroma(o,8)),this.error=v.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(r){this.props=r}get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get shadow(){return this.props.shadow}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(r){return k.lightFromCorePalette(L.of(r))}static dark(r){return k.darkFromCorePalette(L.of(r))}static lightContent(r){return k.lightFromCorePalette(L.contentOf(r))}static darkContent(r){return k.darkFromCorePalette(L.contentOf(r))}static lightFromCorePalette(r){return new k({primary:r.a1.tone(40),onPrimary:r.a1.tone(100),primaryContainer:r.a1.tone(90),onPrimaryContainer:r.a1.tone(10),secondary:r.a2.tone(40),onSecondary:r.a2.tone(100),secondaryContainer:r.a2.tone(90),onSecondaryContainer:r.a2.tone(10),tertiary:r.a3.tone(40),onTertiary:r.a3.tone(100),tertiaryContainer:r.a3.tone(90),onTertiaryContainer:r.a3.tone(10),error:r.error.tone(40),onError:r.error.tone(100),errorContainer:r.error.tone(90),onErrorContainer:r.error.tone(10),background:r.n1.tone(99),onBackground:r.n1.tone(10),surface:r.n1.tone(99),onSurface:r.n1.tone(10),surfaceVariant:r.n2.tone(90),onSurfaceVariant:r.n2.tone(30),outline:r.n2.tone(50),shadow:r.n1.tone(0),inverseSurface:r.n1.tone(20),inverseOnSurface:r.n1.tone(95),inversePrimary:r.a1.tone(80)})}static darkFromCorePalette(r){return new k({primary:r.a1.tone(80),onPrimary:r.a1.tone(20),primaryContainer:r.a1.tone(30),onPrimaryContainer:r.a1.tone(90),secondary:r.a2.tone(80),onSecondary:r.a2.tone(20),secondaryContainer:r.a2.tone(30),onSecondaryContainer:r.a2.tone(90),tertiary:r.a3.tone(80),onTertiary:r.a3.tone(20),tertiaryContainer:r.a3.tone(30),onTertiaryContainer:r.a3.tone(90),error:r.error.tone(80),onError:r.error.tone(20),errorContainer:r.error.tone(30),onErrorContainer:r.error.tone(80),background:r.n1.tone(10),onBackground:r.n1.tone(90),surface:r.n1.tone(10),onSurface:r.n1.tone(90),surfaceVariant:r.n2.tone(30),onSurfaceVariant:r.n2.tone(80),outline:r.n2.tone(60),shadow:r.n1.tone(0),inverseSurface:r.n1.tone(90),inverseOnSurface:r.n1.tone(20),inversePrimary:r.a1.tone(40)})}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=t=>{const r=ir(t),e=lr(t),a=cr(t),o=[r.toString(16),e.toString(16),a.toString(16)];for(const[n,s]of o.entries())s.length===1&&(o[n]="0"+s);return"#"+o.join("")},Br=t=>{t=t.replace("#","");const r=t.length===3,e=t.length===6,a=t.length===8;if(!r&&!e&&!a)throw new Error("unexpected hex "+t);let o=0,n=0,s=0;return r?(o=O(t.slice(0,1).repeat(2)),n=O(t.slice(1,2).repeat(2)),s=O(t.slice(2,3).repeat(2))):e?(o=O(t.slice(0,2)),n=O(t.slice(2,4)),s=O(t.slice(4,6))):a&&(o=O(t.slice(2,4)),n=O(t.slice(4,6)),s=O(t.slice(6,8))),(255<<24|(o&255)<<16|(n&255)<<8|s&255)>>>0};function O(t){return parseInt(t,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,r=[]){const e=L.of(t);return{source:t,schemes:{light:k.light(t),dark:k.dark(t)},palettes:{primary:e.a1,secondary:e.a2,tertiary:e.a3,neutral:e.n1,neutralVariant:e.n2,error:e.error},customColors:r.map(a=>Vr(t,a))}}function Vr(t,r){let e=r.value;const a=e,o=t;r.blend&&(e=W.harmonize(a,o));const n=L.of(e).a1;return{color:r,value:e,light:{color:n.tone(40),onColor:n.tone(100),colorContainer:n.tone(90),onColorContainer:n.tone(10)},dark:{color:n.tone(80),onColor:n.tone(20),colorContainer:n.tone(30),onColorContainer:n.tone(90)}}}function qr(t,r,e=global,a={}){const o=wr(r),{capture:n,passive:s,once:l}=a;j(()=>{o.current=r},[r]),j(()=>{if(!(e&&e.addEventListener))return;const c=d=>o.current(d),i={capture:n,passive:s,once:l};return e.addEventListener(t,c,i),()=>e.removeEventListener(t,c,i)},[t,e,n,s,l])}const zr=`
:where(html, .light-theme) {
  color-scheme: light;
  --md-sys-color-primary-rgb: var(--md-ref-palette-primary40-rgb);
  --md-sys-color-on-primary-rgb: var(--md-ref-palette-primary100-rgb);
  --md-sys-color-primary-container-rgb: var(--md-ref-palette-primary90-rgb);
  --md-sys-color-on-primary-container-rgb: var(--md-ref-palette-primary10-rgb);
  --md-sys-color-inverse-primary-rgb: var(--md-ref-palette-primary80-rgb);
  --md-sys-color-secondary-rgb: var(--md-ref-palette-secondary40-rgb);
  --md-sys-color-on-secondary-rgb: var(--md-ref-palette-secondary100-rgb);
  --md-sys-color-secondary-container-rgb: var(--md-ref-palette-secondary90-rgb);
  --md-sys-color-on-secondary-container-rgb: var(
    --md-ref-palette-secondary10-rgb
  );
  --md-sys-color-tertiary-rgb: var(--md-ref-palette-tertiary40-rgb);
  --md-sys-color-on-tertiary-rgb: var(--md-ref-palette-tertiary100-rgb);
  --md-sys-color-tertiary-container-rgb: var(--md-ref-palette-tertiary90-rgb);
  --md-sys-color-on-tertiary-container-rgb: var(
    --md-ref-palette-tertiary10-rgb
  );
  --md-sys-color-error-rgb: var(--md-ref-palette-error40-rgb);
  --md-sys-color-error-container-rgb: var(--md-ref-palette-error90-rgb);
  --md-sys-color-on-error-rgb: var(--md-ref-palette-error100-rgb);
  --md-sys-color-on-error-container-rgb: var(--md-ref-palette-error10-rgb);
  --md-sys-color-surface-rgb: var(--md-ref-palette-neutral99-rgb);
  --md-sys-color-on-surface-rgb: var(--md-ref-palette-neutral10-rgb);
  --md-sys-color-surface-variant-rgb: var(
    --md-ref-palette-neutral-variant90-rgb
  );
  --md-sys-color-on-surface-variant-rgb: var(
    --md-ref-palette-neutral-variant30-rgb
  );
  --md-sys-color-inverse-surface-rgb: var(--md-ref-palette-neutral20-rgb);
  --md-sys-color-inverse-on-surface-rgb: var(--md-ref-palette-neutral95-rgb);
  --md-sys-color-surface-tint-rgb: var(--md-sys-color-primary-rgb);
  --md-sys-color-background-rgb: var(--md-ref-palette-neutral99-rgb);
  --md-sys-color-on-background-rgb: var(--md-ref-palette-neutral10-rgb);
  --md-sys-color-outline-rgb: var(--md-ref-palette-neutral-variant50-rgb);
  --md-sys-color-outline-variant-rgb: var(
    --md-ref-palette-neutral-variant80-rgb
  );
  --md-sys-color-shadow-rgb: var(--md-ref-palette-neutral0-rgb);
  --md-sys-color-scrim-rgb: var(--md-ref-palette-neutral0-rgb);
}

:where(.dark-theme) {
  color-scheme: dark;
  --md-sys-color-primary-rgb: var(--md-ref-palette-primary80-rgb);
  --md-sys-color-on-primary-rgb: var(--md-ref-palette-primary20-rgb);
  --md-sys-color-primary-container-rgb: var(--md-ref-palette-primary30-rgb);
  --md-sys-color-on-primary-container-rgb: var(--md-ref-palette-primary90-rgb);
  --md-sys-color-inverse-primary-rgb: var(--md-ref-palette-primary40-rgb);
  --md-sys-color-secondary-rgb: var(--md-ref-palette-secondary80-rgb);
  --md-sys-color-on-secondary-rgb: var(--md-ref-palette-secondary20-rgb);
  --md-sys-color-secondary-container-rgb: var(--md-ref-palette-secondary30-rgb);
  --md-sys-color-on-secondary-container-rgb: var(
    --md-ref-palette-secondary90-rgb
  );
  --md-sys-color-tertiary-rgb: var(--md-ref-palette-tertiary80-rgb);
  --md-sys-color-on-tertiary-rgb: var(--md-ref-palette-tertiary20-rgb);
  --md-sys-color-tertiary-container-rgb: var(--md-ref-palette-tertiary30-rgb);
  --md-sys-color-on-tertiary-container-rgb: var(
    --md-ref-palette-tertiary90-rgb
  );
  --md-sys-color-error-rgb: var(--md-ref-palette-error80-rgb);
  --md-sys-color-on-error-rgb: var(--md-ref-palette-error20-rgb);
  --md-sys-color-error-container-rgb: var(--md-ref-palette-error30-rgb);
  --md-sys-color-on-error-container-rgb: var(--md-ref-palette-error80-rgb);
  --md-sys-color-surface-rgb: var(--md-ref-palette-neutral10-rgb);
  --md-sys-color-on-surface-rgb: var(--md-ref-palette-neutral90-rgb);
  --md-sys-color-surface-variant-rgb: var(
    --md-ref-palette-neutral-variant30-rgb
  );
  --md-sys-color-on-surface-variant-rgb: var(
    --md-ref-palette-neutral-variant80-rgb
  );
  --md-sys-color-inverse-surface-rgb: var(--md-ref-palette-neutral90-rgb);
  --md-sys-color-inverse-on-surface-rgb: var(--md-ref-palette-neutral20-rgb);
  --md-sys-color-surface-tint-rgb: var(--md-sys-color-primary-rgb);
  --md-sys-color-background-rgb: var(--md-ref-palette-neutral10-rgb);
  --md-sys-color-on-background-rgb: var(--md-ref-palette-neutral90-rgb);
  --md-sys-color-outline-rgb: var(--md-ref-palette-neutral-variant60-rgb);
  --md-sys-color-outline-variant-rgb: var(
    --md-ref-palette-neutral-variant30-rgb
  );
  --md-sys-color-shadow-rgb: var(--md-ref-palette-neutral0-rgb);
  --md-sys-color-scrim-rgb: var(--md-ref-palette-neutral0-rgb);
}

:where(.light-theme, .dark-theme) {
  --md-sys-color-primary: rgba(var(--md-sys-color-primary-rgb), 1);
  --md-sys-color-primary-container: rgba(
    var(--md-sys-color-primary-container-rgb),
    1
  );
  --md-sys-color-secondary: rgba(var(--md-sys-color-secondary-rgb), 1);
  --md-sys-color-secondary-container: rgba(
    var(--md-sys-color-secondary-container-rgb),
    1
  );
  --md-sys-color-tertiary: rgba(var(--md-sys-color-tertiary-rgb), 1);
  --md-sys-color-tertiary-container: rgba(
    var(--md-sys-color-tertiary-container-rgb),
    1
  );
  --md-sys-color-surface: rgba(var(--md-sys-color-surface-rgb), 1);
  --md-sys-color-surface-variant: rgba(
    var(--md-sys-color-surface-variant-rgb),
    1
  );
  --md-sys-color-background: rgba(var(--md-sys-color-background-rgb), 1);
  --md-sys-color-error: rgba(var(--md-sys-color-error-rgb), 1);
  --md-sys-color-error-container: rgba(
    var(--md-sys-color-error-container-rgb),
    1
  );
  --md-sys-color-on-primary: rgba(var(--md-sys-color-on-primary-rgb), 1);
  --md-sys-color-on-primary-container: rgba(
    var(--md-sys-color-on-primary-container-rgb),
    1
  );
  --md-sys-color-on-secondary: rgba(var(--md-sys-color-on-secondary-rgb), 1);
  --md-sys-color-on-secondary-container: rgba(
    var(--md-sys-color-on-secondary-container-rgb),
    1
  );
  --md-sys-color-on-tertiary: rgba(var(--md-sys-color-on-tertiary-rgb), 1);
  --md-sys-color-on-tertiary-container: rgba(
    var(--md-sys-color-on-tertiary-container-rgb),
    1
  );
  --md-sys-color-on-surface: rgba(var(--md-sys-color-on-surface-rgb), 1);
  --md-sys-color-on-surface-variant: rgba(
    var(--md-sys-color-on-surface-variant-rgb),
    1
  );
  --md-sys-color-on-error: rgba(var(--md-sys-color-on-error-rgb), 1);
  --md-sys-color-on-error-container: rgba(
    var(--md-sys-color-on-error-container-rgb),
    1
  );
  --md-sys-color-on-background: rgba(var(--md-sys-color-on-background-rgb), 1);
  --md-sys-color-outline: rgba(var(--md-sys-color-outline-rgb), 1);
  --md-sys-color-outline-variant: rgba(
    var(--md-sys-color-outline-variant-rgb),
    1
  );
  --md-sys-color-shadow: rgba(var(--md-sys-color-shadow-rgb), 1);
  --md-sys-color-surface-tint: rgba(var(--md-sys-color-surface-tint-rgb), 1);
  --md-sys-color-inverse-surface: rgba(
    var(--md-sys-color-inverse-surface-rgb),
    1
  );
  --md-sys-color-inverse-on-surface: rgba(
    var(--md-sys-color-inverse-on-surface-rgb),
    1
  );
  --md-sys-color-inverse-primary: rgba(
    var(--md-sys-color-inverse-primary-rgb),
    1
  );
  --md-sys-color-scrim: rgba(var(--md-sys-color-scrim-rgb), 1);

  /* primary */
  --md-ref-palette-primary0: rgba(var(--md-ref-palette-primary0-rgb), 1);
  --md-ref-palette-primary5: rgba(var(--md-ref-palette-primary5-rgb), 1);
  --md-ref-palette-primary10: rgba(var(--md-ref-palette-primary10-rgb), 1);
  --md-ref-palette-primary20: rgba(var(--md-ref-palette-primary20-rgb), 1);
  --md-ref-palette-primary25: rgba(var(--md-ref-palette-primary25-rgb), 1);
  --md-ref-palette-primary30: rgba(var(--md-ref-palette-primary30-rgb), 1);
  --md-ref-palette-primary35: rgba(var(--md-ref-palette-primary35-rgb), 1);
  --md-ref-palette-primary40: rgba(var(--md-ref-palette-primary40-rgb), 1);
  --md-ref-palette-primary50: rgba(var(--md-ref-palette-primary50-rgb), 1);
  --md-ref-palette-primary60: rgba(var(--md-ref-palette-primary60-rgb), 1);
  --md-ref-palette-primary70: rgba(var(--md-ref-palette-primary70-rgb), 1);
  --md-ref-palette-primary80: rgba(var(--md-ref-palette-primary80-rgb), 1);
  --md-ref-palette-primary90: rgba(var(--md-ref-palette-primary90-rgb), 1);
  --md-ref-palette-primary95: rgba(var(--md-ref-palette-primary95-rgb), 1);
  --md-ref-palette-primary98: rgba(var(--md-ref-palette-primary98-rgb), 1);
  --md-ref-palette-primary99: rgba(var(--md-ref-palette-primary99-rgb), 1);
  --md-ref-palette-primary100: rgba(var(--md-ref-palette-primary100-rgb), 1);

  /* secondary */
  --md-ref-palette-secondary0: rgba(var(--md-ref-palette-secondary0-rgb), 1);
  --md-ref-palette-secondary5: rgba(var(--md-ref-palette-secondary5-rgb), 1);
  --md-ref-palette-secondary10: rgba(var(--md-ref-palette-secondary10-rgb), 1);
  --md-ref-palette-secondary20: rgba(var(--md-ref-palette-secondary20-rgb), 1);
  --md-ref-palette-secondary25: rgba(var(--md-ref-palette-secondary25-rgb), 1);
  --md-ref-palette-secondary30: rgba(var(--md-ref-palette-secondary30-rgb), 1);
  --md-ref-palette-secondary35: rgba(var(--md-ref-palette-secondary35-rgb), 1);
  --md-ref-palette-secondary40: rgba(var(--md-ref-palette-secondary40-rgb), 1);
  --md-ref-palette-secondary50: rgba(var(--md-ref-palette-secondary50-rgb), 1);
  --md-ref-palette-secondary60: rgba(var(--md-ref-palette-secondary60-rgb), 1);
  --md-ref-palette-secondary70: rgba(var(--md-ref-palette-secondary70-rgb), 1);
  --md-ref-palette-secondary80: rgba(var(--md-ref-palette-secondary80-rgb), 1);
  --md-ref-palette-secondary90: rgba(var(--md-ref-palette-secondary90-rgb), 1);
  --md-ref-palette-secondary95: rgba(var(--md-ref-palette-secondary95-rgb), 1);
  --md-ref-palette-secondary98: rgba(var(--md-ref-palette-secondary98-rgb), 1);
  --md-ref-palette-secondary99: rgba(var(--md-ref-palette-secondary99-rgb), 1);
  --md-ref-palette-secondary100: rgba(
    var(--md-ref-palette-secondary100-rgb),
    1
  );

  /* tertiary */
  --md-ref-palette-tertiary0: rgba(var(--md-ref-palette-tertiary0-rgb), 1);
  --md-ref-palette-tertiary5: rgba(var(--md-ref-palette-tertiary5-rgb), 1);
  --md-ref-palette-tertiary10: rgba(var(--md-ref-palette-tertiary10-rgb), 1);
  --md-ref-palette-tertiary20: rgba(var(--md-ref-palette-tertiary20-rgb), 1);
  --md-ref-palette-tertiary25: rgba(var(--md-ref-palette-tertiary25-rgb), 1);
  --md-ref-palette-tertiary30: rgba(var(--md-ref-palette-tertiary30-rgb), 1);
  --md-ref-palette-tertiary35: rgba(var(--md-ref-palette-tertiary35-rgb), 1);
  --md-ref-palette-tertiary40: rgba(var(--md-ref-palette-tertiary40-rgb), 1);
  --md-ref-palette-tertiary50: rgba(var(--md-ref-palette-tertiary50-rgb), 1);
  --md-ref-palette-tertiary60: rgba(var(--md-ref-palette-tertiary60-rgb), 1);
  --md-ref-palette-tertiary70: rgba(var(--md-ref-palette-tertiary70-rgb), 1);
  --md-ref-palette-tertiary80: rgba(var(--md-ref-palette-tertiary80-rgb), 1);
  --md-ref-palette-tertiary90: rgba(var(--md-ref-palette-tertiary90-rgb), 1);
  --md-ref-palette-tertiary95: rgba(var(--md-ref-palette-tertiary95-rgb), 1);
  --md-ref-palette-tertiary98: rgba(var(--md-ref-palette-tertiary98-rgb), 1);
  --md-ref-palette-tertiary99: rgba(var(--md-ref-palette-tertiary99-rgb), 1);
  --md-ref-palette-tertiary100: rgba(var(--md-ref-palette-tertiary100-rgb), 1);

  /* error */
  --md-ref-palette-error0: rgba(var(--md-ref-palette-error0-rgb), 1);
  --md-ref-palette-error5: rgba(var(--md-ref-palette-error5-rgb), 1);
  --md-ref-palette-error10: rgba(var(--md-ref-palette-error10-rgb), 1);
  --md-ref-palette-error20: rgba(var(--md-ref-palette-error20-rgb), 1);
  --md-ref-palette-error25: rgba(var(--md-ref-palette-error25-rgb), 1);
  --md-ref-palette-error30: rgba(var(--md-ref-palette-error30-rgb), 1);
  --md-ref-palette-error35: rgba(var(--md-ref-palette-error35-rgb), 1);
  --md-ref-palette-error40: rgba(var(--md-ref-palette-error40-rgb), 1);
  --md-ref-palette-error50: rgba(var(--md-ref-palette-error50-rgb), 1);
  --md-ref-palette-error60: rgba(var(--md-ref-palette-error60-rgb), 1);
  --md-ref-palette-error70: rgba(var(--md-ref-palette-error70-rgb), 1);
  --md-ref-palette-error80: rgba(var(--md-ref-palette-error80-rgb), 1);
  --md-ref-palette-error90: rgba(var(--md-ref-palette-error90-rgb), 1);
  --md-ref-palette-error95: rgba(var(--md-ref-palette-error95-rgb), 1);
  --md-ref-palette-error98: rgba(var(--md-ref-palette-error98-rgb), 1);
  --md-ref-palette-error99: rgba(var(--md-ref-palette-error99-rgb), 1);
  --md-ref-palette-error100: rgba(var(--md-ref-palette-error100-rgb), 1);

  /* neutral */
  --md-ref-palette-neutral0: rgba(var(--md-ref-palette-neutral0-rgb), 1);
  --md-ref-palette-neutral5: rgba(var(--md-ref-palette-neutral5-rgb), 1);
  --md-ref-palette-neutral10: rgba(var(--md-ref-palette-neutral10-rgb), 1);
  --md-ref-palette-neutral20: rgba(var(--md-ref-palette-neutral20-rgb), 1);
  --md-ref-palette-neutral25: rgba(var(--md-ref-palette-neutral25-rgb), 1);
  --md-ref-palette-neutral30: rgba(var(--md-ref-palette-neutral30-rgb), 1);
  --md-ref-palette-neutral35: rgba(var(--md-ref-palette-neutral35-rgb), 1);
  --md-ref-palette-neutral40: rgba(var(--md-ref-palette-neutral40-rgb), 1);
  --md-ref-palette-neutral50: rgba(var(--md-ref-palette-neutral50-rgb), 1);
  --md-ref-palette-neutral60: rgba(var(--md-ref-palette-neutral60-rgb), 1);
  --md-ref-palette-neutral70: rgba(var(--md-ref-palette-neutral70-rgb), 1);
  --md-ref-palette-neutral80: rgba(var(--md-ref-palette-neutral80-rgb), 1);
  --md-ref-palette-neutral90: rgba(var(--md-ref-palette-neutral90-rgb), 1);
  --md-ref-palette-neutral95: rgba(var(--md-ref-palette-neutral95-rgb), 1);
  --md-ref-palette-neutral98: rgba(var(--md-ref-palette-neutral98-rgb), 1);
  --md-ref-palette-neutral99: rgba(var(--md-ref-palette-neutral99-rgb), 1);
  --md-ref-palette-neutral100: rgba(var(--md-ref-palette-neutral100-rgb), 1);

  /* neutral-variant */
  --md-ref-palette-neutral-variant0: rgba(
    var(--md-ref-palette-neutral-variant0-rgb),
    1
  );
  --md-ref-palette-neutral-variant5: rgba(
    var(--md-ref-palette-neutral-variant5-rgb),
    1
  );
  --md-ref-palette-neutral-variant10: rgba(
    var(--md-ref-palette-neutral-variant10-rgb),
    1
  );
  --md-ref-palette-neutral-variant20: rgba(
    var(--md-ref-palette-neutral-variant20-rgb),
    1
  );
  --md-ref-palette-neutral-variant25: rgba(
    var(--md-ref-palette-neutral-variant25-rgb),
    1
  );
  --md-ref-palette-neutral-variant30: rgba(
    var(--md-ref-palette-neutral-variant30-rgb),
    1
  );
  --md-ref-palette-neutral-variant35: rgba(
    var(--md-ref-palette-neutral-variant35-rgb),
    1
  );
  --md-ref-palette-neutral-variant40: rgba(
    var(--md-ref-palette-neutral-variant40-rgb),
    1
  );
  --md-ref-palette-neutral-variant50: rgba(
    var(--md-ref-palette-neutral-variant50-rgb),
    1
  );
  --md-ref-palette-neutral-variant60: rgba(
    var(--md-ref-palette-neutral-variant60-rgb),
    1
  );
  --md-ref-palette-neutral-variant70: rgba(
    var(--md-ref-palette-neutral-variant70-rgb),
    1
  );
  --md-ref-palette-neutral-variant80: rgba(
    var(--md-ref-palette-neutral-variant80-rgb),
    1
  );
  --md-ref-palette-neutral-variant90: rgba(
    var(--md-ref-palette-neutral-variant90-rgb),
    1
  );
  --md-ref-palette-neutral-variant95: rgba(
    var(--md-ref-palette-neutral-variant95-rgb),
    1
  );
  --md-ref-palette-neutral-variant98: rgba(
    var(--md-ref-palette-neutral-variant98-rgb),
    1
  );
  --md-ref-palette-neutral-variant99: rgba(
    var(--md-ref-palette-neutral-variant99-rgb),
    1
  );
  --md-ref-palette-neutral-variant100: rgba(
    var(--md-ref-palette-neutral-variant100-rgb),
    1
  );
}
`;function Y(t){const r=document.querySelector('meta[name="theme-color"]');if(r)return r.setAttribute("content",t),r;{const e=document.createElement("meta");return e.setAttribute("name","theme-color"),e.setAttribute("content",t),document.head.appendChild(e),e}}function Ur(){const t=localStorage.getItem("theme-color");if(t)return t;const r=document.querySelector('meta[name="theme-color"]');return r?r.getAttribute("content"):"#6750A4"}function $r(t){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),{r:e,g:a,b:o}={r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)};return[e,a,o]}function mr(t,r){const e=`generated-material-${t}`;let a=document.getElementById(e);a==null&&(a=document.createElement("style"),a.id=e,a.type="text/css",document.head.appendChild(a));const o=r.match(/.{1,500}/g)||[];a.innerHTML="";for(const n of o)a.appendChild(document.createTextNode(n))}function dr(t){const r=Nr(Br(t)),e=[];e.push(":where(.light-theme, .dark-theme) {"),e.push(`--md-source: ${t};`);function a(s,l){if(typeof l=="number")return sr(l);if(s==="palettes"){const c=[100,99,98,95,90,80,70,60,50,40,35,30,25,20,10,5,0],i={};for(const[d,g]of Object.entries(l)){i[d]={};for(const p of c)i[d][p]=sr(g.tone(p))}return i}return l}const o=JSON.parse(JSON.stringify(r,a,2));for(const[s,l]of Object.entries(o.palettes)){e.push(`  /* ${s} */`);for(const[c,i]of Object.entries(l)){const d=s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),[g,p,f]=$r(i);e.push(`  --md-ref-palette-${d}${c}-rgb: ${g}, ${p}, ${f};`)}}return e.push("}"),e.push(zr),e.join(`
`)}function Yr(t){const r=dr(t);mr("tokens",r),Y(t),localStorage.setItem("theme-color",t),window.dispatchEvent(new CustomEvent("theme-color-changed",{detail:t}))}const Gr=()=>{const[t,r]=Sr(Ur()),e=Ir(),a=o=>{r(o),Y(o),localStorage.setItem("theme-color",o)};return j(()=>{const o=dr(t);mr("tokens",o)},[t]),qr("theme-color-changed",o=>{console.log(o);const n=o.detail;r(n),Y(n),e.current.value=n},window),ar(Cr,{children:ar("input",{ref:e,type:"color",value:t,onInput:o=>{const n=o.target.value;a(n)}})})};export{Gr as C,Yr as s};
