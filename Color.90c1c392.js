import{p as bt,y as wt}from"./chunks/preact.module.8af602d9.js";import{s as St,_ as U,y as At,e as rt}from"./chunks/jsxRuntime.module.1ac67d77.js";/**
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
 */function x(n){return n<0?-1:n===0?0:1}function ot(n,t,e){return(1-e)*n+e*t}function Tt(n,t,e){return e<n?n:e>t?t:e}function G(n){return n=n%360,n<0&&(n=n+360),n}function Ot(n,t){return G(t-n)<=180?1:-1}function Pt(n,t){return 180-Math.abs(Math.abs(n-t)-180)}function _(n,t){const e=n[0]*t[0][0]+n[1]*t[0][1]+n[2]*t[0][2],r=n[0]*t[1][0]+n[1]*t[1][1]+n[2]*t[1][2],o=n[0]*t[2][0]+n[1]*t[2][1]+n[2]*t[2][2];return[e,r,o]}/**
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
 */const Rt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Lt=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],vt=[95.047,100,108.883];function K(n,t,e){return(255<<24|(n&255)<<16|(t&255)<<8|e&255)>>>0}function at(n){const t=B(n[0]),e=B(n[1]),r=B(n[2]);return K(t,e,r)}function it(n){return n>>16&255}function ct(n){return n>>8&255}function ht(n){return n&255}function Et(n,t,e){const r=Lt,o=r[0][0]*n+r[0][1]*t+r[0][2]*e,a=r[1][0]*n+r[1][1]*t+r[1][2]*e,s=r[2][0]*n+r[2][1]*t+r[2][2]*e,c=B(o),h=B(a),i=B(s);return K(c,h,i)}function kt(n){const t=V(it(n)),e=V(ct(n)),r=V(ht(n));return _([t,e,r],Rt)}function Dt(n){const t=j(n),e=B(t);return K(e,e,e)}function J(n){const t=kt(n)[1];return 116*Ft(t/100)-16}function j(n){return 100*Ht((n+16)/116)}function V(n){const t=n/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function B(n){const t=n/100;let e=0;return t<=.0031308?e=t*12.92:e=1.055*Math.pow(t,1/2.4)-.055,Tt(0,255,Math.round(e*255))}function xt(){return vt}function Ft(n){const t=.008856451679035631,e=24389/27;return n>t?Math.pow(n,1/3):(e*n+16)/116}function Ht(n){const t=.008856451679035631,e=24389/27,r=n*n*n;return r>t?r:(116*n-16)/e}/**
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
 */const Z=class{constructor(n,t,e,r,o,a,s,c,h,i){this.n=n,this.aw=t,this.nbb=e,this.ncb=r,this.c=o,this.nc=a,this.rgbD=s,this.fl=c,this.fLRoot=h,this.z=i}static make(n=xt(),t=200/Math.PI*j(50)/100,e=50,r=2,o=!1){const a=n,s=a[0]*.401288+a[1]*.650173+a[2]*-.051461,c=a[0]*-.250268+a[1]*1.204414+a[2]*.045854,h=a[0]*-.002079+a[1]*.048952+a[2]*.953127,i=.8+r/10,l=i>=.9?ot(.59,.69,(i-.9)*10):ot(.525,.59,(i-.8)*10);let f=o?1:i*(1-1/3.6*Math.exp((-t-42)/92));f=f>1?1:f<0?0:f;const m=i,p=[f*(100/s)+1-f,f*(100/c)+1-f,f*(100/h)+1-f],C=1/(5*t+1),y=C*C*C*C,b=1-y,w=y*t+.1*b*b*Math.cbrt(5*t),A=j(e)/n[1],k=1.48+Math.sqrt(A),T=.725/Math.pow(A,.2),O=T,M=[Math.pow(w*p[0]*s/100,.42),Math.pow(w*p[1]*c/100,.42),Math.pow(w*p[2]*h/100,.42)],d=[400*M[0]/(M[0]+27.13),400*M[1]/(M[1]+27.13),400*M[2]/(M[2]+27.13)],S=(2*d[0]+d[1]+.05*d[2])*T;return new Z(A,S,T,O,l,m,p,w,Math.pow(w,.25),k)}};let N=Z;N.DEFAULT=Z.make();/**
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
 */class g{constructor(t,e,r,o,a,s,c,h,i){this.hue=t,this.chroma=e,this.j=r,this.q=o,this.m=a,this.s=s,this.jstar=c,this.astar=h,this.bstar=i}distance(t){const e=this.jstar-t.jstar,r=this.astar-t.astar,o=this.bstar-t.bstar,a=Math.sqrt(e*e+r*r+o*o);return 1.41*Math.pow(a,.63)}static fromInt(t){return g.fromIntInViewingConditions(t,N.DEFAULT)}static fromIntInViewingConditions(t,e){const r=(t&16711680)>>16,o=(t&65280)>>8,a=t&255,s=V(r),c=V(o),h=V(a),i=.41233895*s+.35762064*c+.18051042*h,l=.2126*s+.7152*c+.0722*h,f=.01932141*s+.11916382*c+.95034478*h,m=.401288*i+.650173*l-.051461*f,p=-.250268*i+1.204414*l+.045854*f,C=-.002079*i+.048952*l+.953127*f,y=e.rgbD[0]*m,b=e.rgbD[1]*p,w=e.rgbD[2]*C,A=Math.pow(e.fl*Math.abs(y)/100,.42),k=Math.pow(e.fl*Math.abs(b)/100,.42),T=Math.pow(e.fl*Math.abs(w)/100,.42),O=x(y)*400*A/(A+27.13),M=x(b)*400*k/(k+27.13),d=x(w)*400*T/(T+27.13),S=(11*O+-12*M+d)/11,R=(O+M-2*d)/9,$=(20*O+20*M+21*d)/20,D=(40*O+20*M+d)/20,H=Math.atan2(R,S)*180/Math.PI,q=H<0?H+360:H>=360?H-360:H,W=q*Math.PI/180,ft=D*e.nbb,z=100*Math.pow(ft/e.aw,e.c*e.z),mt=4/e.c*Math.sqrt(z/100)*(e.aw+4)*e.fLRoot,pt=q<20.14?q+360:q,dt=.25*(Math.cos(pt*Math.PI/180+2)+3.8),Ct=5e4/13*dt*e.nc*e.ncb*Math.sqrt(S*S+R*R)/($+.305),X=Math.pow(Ct,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),tt=X*Math.sqrt(z/100),et=tt*e.fLRoot,Mt=50*Math.sqrt(X*e.c/(e.aw+4)),gt=(1+100*.007)*z/(1+.007*z),nt=1/.0228*Math.log(1+.0228*et),It=nt*Math.cos(W),yt=nt*Math.sin(W);return new g(q,tt,z,mt,et,Mt,gt,It,yt)}static fromJch(t,e,r){return g.fromJchInViewingConditions(t,e,r,N.DEFAULT)}static fromJchInViewingConditions(t,e,r,o){const a=4/o.c*Math.sqrt(t/100)*(o.aw+4)*o.fLRoot,s=e*o.fLRoot,c=e/Math.sqrt(t/100),h=50*Math.sqrt(c*o.c/(o.aw+4)),i=r*Math.PI/180,l=(1+100*.007)*t/(1+.007*t),f=1/.0228*Math.log(1+.0228*s),m=f*Math.cos(i),p=f*Math.sin(i);return new g(r,e,t,a,s,h,l,m,p)}static fromUcs(t,e,r){return g.fromUcsInViewingConditions(t,e,r,N.DEFAULT)}static fromUcsInViewingConditions(t,e,r,o){const a=e,s=r,c=Math.sqrt(a*a+s*s),h=(Math.exp(c*.0228)-1)/.0228/o.fLRoot;let i=Math.atan2(s,a)*(180/Math.PI);i<0&&(i+=360);const l=t/(1-(t-100)*.007);return g.fromJchInViewingConditions(l,h,i,o)}toInt(){return this.viewed(N.DEFAULT)}viewed(t){const e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),o=this.hue*Math.PI/180,a=.25*(Math.cos(o+2)+3.8),s=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=a*(5e4/13)*t.nc*t.ncb,h=s/t.nbb,i=Math.sin(o),l=Math.cos(o),f=23*(h+.305)*r/(23*c+11*r*l+108*r*i),m=f*l,p=f*i,C=(460*h+451*m+288*p)/1403,y=(460*h-891*m-261*p)/1403,b=(460*h-220*m-6300*p)/1403,w=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),A=x(C)*(100/t.fl)*Math.pow(w,1/.42),k=Math.max(0,27.13*Math.abs(y)/(400-Math.abs(y))),T=x(y)*(100/t.fl)*Math.pow(k,1/.42),O=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),M=x(b)*(100/t.fl)*Math.pow(O,1/.42),d=A/t.rgbD[0],S=T/t.rgbD[1],R=M/t.rgbD[2],$=1.86206786*d-1.01125463*S+.14918677*R,D=.38752654*d+.62144744*S-.00897398*R,H=-.0158415*d-.03412294*S+1.04996444*R;return Et($,D,H)}}/**
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
 */const u=class{static sanitizeRadians(n){return(n+Math.PI*8)%(Math.PI*2)}static trueDelinearized(n){const t=n/100;let e=0;return t<=.0031308?e=t*12.92:e=1.055*Math.pow(t,1/2.4)-.055,e*255}static chromaticAdaptation(n){const t=Math.pow(Math.abs(n),.42);return x(n)*400*t/(t+27.13)}static hueOf(n){const t=_(n,u.SCALED_DISCOUNT_FROM_LINRGB),e=u.chromaticAdaptation(t[0]),r=u.chromaticAdaptation(t[1]),o=u.chromaticAdaptation(t[2]),a=(11*e+-12*r+o)/11,s=(e+r-2*o)/9;return Math.atan2(s,a)}static areInCyclicOrder(n,t,e){const r=u.sanitizeRadians(t-n),o=u.sanitizeRadians(e-n);return r<o}static intercept(n,t,e){return(t-n)/(e-n)}static lerpPoint(n,t,e){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}static setCoordinate(n,t,e,r){const o=u.intercept(n[r],t,e[r]);return u.lerpPoint(n,o,e)}static isBounded(n){return 0<=n&&n<=100}static nthVertex(n,t){const e=u.Y_FROM_LINRGB[0],r=u.Y_FROM_LINRGB[1],o=u.Y_FROM_LINRGB[2],a=t%4<=1?0:100,s=t%2===0?0:100;if(t<4){const c=a,h=s,i=(n-c*r-h*o)/e;return u.isBounded(i)?[i,c,h]:[-1,-1,-1]}else if(t<8){const c=a,h=s,i=(n-h*e-c*o)/r;return u.isBounded(i)?[h,i,c]:[-1,-1,-1]}else{const c=a,h=s,i=(n-c*e-h*r)/o;return u.isBounded(i)?[c,h,i]:[-1,-1,-1]}}static bisectToSegment(n,t){let e=[-1,-1,-1],r=e,o=0,a=0,s=!1,c=!0;for(let h=0;h<12;h++){const i=u.nthVertex(n,h);if(i[0]<0)continue;const l=u.hueOf(i);if(!s){e=i,r=i,o=l,a=l,s=!0;continue}(c||u.areInCyclicOrder(o,l,a))&&(c=!1,u.areInCyclicOrder(o,t,l)?(r=i,a=l):(e=i,o=l))}return[e,r]}static midpoint(n,t){return[(n[0]+t[0])/2,(n[1]+t[1])/2,(n[2]+t[2])/2]}static criticalPlaneBelow(n){return Math.floor(n-.5)}static criticalPlaneAbove(n){return Math.ceil(n-.5)}static bisectToLimit(n,t){const e=u.bisectToSegment(n,t);let r=e[0],o=u.hueOf(r),a=e[1];for(let s=0;s<3;s++)if(r[s]!==a[s]){let c=-1,h=255;r[s]<a[s]?(c=u.criticalPlaneBelow(u.trueDelinearized(r[s])),h=u.criticalPlaneAbove(u.trueDelinearized(a[s]))):(c=u.criticalPlaneAbove(u.trueDelinearized(r[s])),h=u.criticalPlaneBelow(u.trueDelinearized(a[s])));for(let i=0;i<8&&!(Math.abs(h-c)<=1);i++){const l=Math.floor((c+h)/2),f=u.CRITICAL_PLANES[l],m=u.setCoordinate(r,f,a,s),p=u.hueOf(m);u.areInCyclicOrder(o,t,p)?(a=m,h=l):(r=m,o=p,c=l)}}return u.midpoint(r,a)}static inverseChromaticAdaptation(n){const t=Math.abs(n),e=Math.max(0,27.13*t/(400-t));return x(n)*Math.pow(e,1/.42)}static findResultByJ(n,t,e){let r=Math.sqrt(e)*11;const o=N.DEFAULT,a=1/Math.pow(1.64-Math.pow(.29,o.n),.73),s=.25*(Math.cos(n+2)+3.8)*(5e4/13)*o.nc*o.ncb,c=Math.sin(n),h=Math.cos(n);for(let i=0;i<5;i++){const l=r/100,f=t===0||r===0?0:t/Math.sqrt(l),m=Math.pow(f*a,1/.9),p=o.aw*Math.pow(l,1/o.c/o.z)/o.nbb,C=23*(p+.305)*m/(23*s+11*m*h+108*m*c),y=C*h,b=C*c,w=(460*p+451*y+288*b)/1403,A=(460*p-891*y-261*b)/1403,k=(460*p-220*y-6300*b)/1403,T=u.inverseChromaticAdaptation(w),O=u.inverseChromaticAdaptation(A),M=u.inverseChromaticAdaptation(k),d=_([T,O,M],u.LINRGB_FROM_SCALED_DISCOUNT);if(d[0]<0||d[1]<0||d[2]<0)return 0;const S=u.Y_FROM_LINRGB[0],R=u.Y_FROM_LINRGB[1],$=u.Y_FROM_LINRGB[2],D=S*d[0]+R*d[1]+$*d[2];if(D<=0)return 0;if(i===4||Math.abs(D-e)<.002)return d[0]>100.01||d[1]>100.01||d[2]>100.01?0:at(d);r=r-(D-e)*r/(2*D)}return 0}static solveToInt(n,t,e){if(t<1e-4||e<1e-4||e>99.9999)return Dt(e);n=G(n);const r=n/180*Math.PI,o=j(e),a=u.findResultByJ(r,t,o);if(a!==0)return a;const s=u.bisectToLimit(o,r);return at(s)}static solveToCam(n,t,e){return g.fromInt(u.solveToInt(n,t,e))}};let F=u;F.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];F.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];F.Y_FROM_LINRGB=[.2126,.7152,.0722];F.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
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
 */class P{constructor(t){this.argb=t;const e=g.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=J(t),this.argb=t}static from(t,e,r){return new P(F.solveToInt(t,e,r))}static fromInt(t){return new P(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(F.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(F.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(F.solveToInt(this.internalHue,this.internalChroma,t))}setInternalState(t){const e=g.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=J(t),this.argb=t}}/**
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
 */class Q{static harmonize(t,e){const r=P.fromInt(t),o=P.fromInt(e),a=Pt(r.hue,o.hue),s=Math.min(a*.5,15),c=G(r.hue+s*Ot(r.hue,o.hue));return P.from(c,r.chroma,r.tone).toInt()}static hctHue(t,e,r){const o=Q.cam16Ucs(t,e,r),a=g.fromInt(o),s=g.fromInt(t);return P.from(a.hue,s.chroma,J(t)).toInt()}static cam16Ucs(t,e,r){const o=g.fromInt(t),a=g.fromInt(e),s=o.jstar,c=o.astar,h=o.bstar,i=a.jstar,l=a.astar,f=a.bstar,m=s+(i-s)*r,p=c+(l-c)*r,C=h+(f-h)*r;return g.fromUcs(m,p,C).toInt()}}/**
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
 */class I{constructor(t,e){this.hue=t,this.chroma=e,this.cache=new Map}static fromInt(t){const e=P.fromInt(t);return I.fromHueAndChroma(e.hue,e.chroma)}static fromHueAndChroma(t,e){return new I(t,e)}tone(t){let e=this.cache.get(t);return e===void 0&&(e=P.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}}/**
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
 */class E{static of(t){return new E(t,!1)}static contentOf(t){return new E(t,!0)}constructor(t,e){const r=P.fromInt(t),o=r.hue,a=r.chroma;e?(this.a1=I.fromHueAndChroma(o,a),this.a2=I.fromHueAndChroma(o,a/3),this.a3=I.fromHueAndChroma(o+60,a/2),this.n1=I.fromHueAndChroma(o,Math.min(a/12,4)),this.n2=I.fromHueAndChroma(o,Math.min(a/6,8))):(this.a1=I.fromHueAndChroma(o,Math.max(48,a)),this.a2=I.fromHueAndChroma(o,16),this.a3=I.fromHueAndChroma(o+60,24),this.n1=I.fromHueAndChroma(o,4),this.n2=I.fromHueAndChroma(o,8)),this.error=I.fromHueAndChroma(25,84)}}/**
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
 */class v{constructor(t){this.props=t}get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get shadow(){return this.props.shadow}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return v.lightFromCorePalette(E.of(t))}static dark(t){return v.darkFromCorePalette(E.of(t))}static lightContent(t){return v.lightFromCorePalette(E.contentOf(t))}static darkContent(t){return v.darkFromCorePalette(E.contentOf(t))}static lightFromCorePalette(t){return new v({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),shadow:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new v({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),shadow:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}toJSON(){return{...this.props}}}/**
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
 */const st=n=>{const t=it(n),e=ct(n),r=ht(n),o=[t.toString(16),e.toString(16),r.toString(16)];for(const[a,s]of o.entries())s.length===1&&(o[a]="0"+s);return"#"+o.join("")},Bt=n=>{n=n.replace("#","");const t=n.length===3,e=n.length===6,r=n.length===8;if(!t&&!e&&!r)throw new Error("unexpected hex "+n);let o=0,a=0,s=0;return t?(o=L(n.slice(0,1).repeat(2)),a=L(n.slice(1,2).repeat(2)),s=L(n.slice(2,3).repeat(2))):e?(o=L(n.slice(0,2)),a=L(n.slice(2,4)),s=L(n.slice(4,6))):r&&(o=L(n.slice(2,4)),a=L(n.slice(4,6)),s=L(n.slice(6,8))),(255<<24|(o&255)<<16|(a&255)<<8|s&255)>>>0};function L(n){return parseInt(n,16)}/**
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
 */function Nt(n,t=[]){const e=E.of(n);return{source:n,schemes:{light:v.light(n),dark:v.dark(n)},palettes:{primary:e.a1,secondary:e.a2,tertiary:e.a3,neutral:e.n1,neutralVariant:e.n2,error:e.error},customColors:t.map(r=>Vt(n,r))}}function Vt(n,t){let e=t.value;const r=e,o=n;t.blend&&(e=Q.harmonize(r,o));const a=E.of(e).a1;return{color:t,value:e,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}function $t(n,t,e=global,r={}){const o=St(t),{capture:a,passive:s,once:c}=r;U(()=>{o.current=t},[t]),U(()=>{if(!(e&&e.addEventListener))return;const h=l=>o.current(l),i={capture:a,passive:s,once:c};return e.addEventListener(n,h,i),()=>e.removeEventListener(n,h,i)},[n,e,a,s,c])}function Y(n){const t=document.querySelector('meta[name="theme-color"]');if(t)return t.setAttribute("content",n),t;{const e=document.createElement("meta");return e.setAttribute("name","theme-color"),e.setAttribute("content",n),document.head.appendChild(e),e}}function qt(){const n=localStorage.getItem("theme-color");if(n)return n;const t=document.querySelector('meta[name="theme-color"]');return t?t.getAttribute("content"):"#6750A4"}function zt(n){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),{r:e,g:r,b:o}={r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};return[e,r,o]}function ut(n,t){const e=`generated-material-${n}`;let r=document.getElementById(e);r==null&&(r=document.createElement("style"),r.id=e,r.type="text/css",document.head.appendChild(r));const o=t.match(/.{1,500}/g)||[];for(const a of o)r.appendChild(document.createTextNode(a))}function lt(n){const t=Nt(Bt(n)),e=[];e.push("body, .tokens {"),e.push(`--md-source: ${n};`);function r(s,c){if(typeof c=="number")return st(c);if(s==="palettes"){const h=[100,99,98,95,90,80,70,60,50,40,35,30,25,20,10,5,0],i={};for(const[l,f]of Object.entries(c)){i[l]={};for(const m of h)i[l][m]=st(f.tone(m))}return i}return c}const o=JSON.parse(JSON.stringify(t,r,2));for(const[s,c]of Object.entries(o.schemes)){e.push(`  /* ${s} */`);for(const[h,i]of Object.entries(c)){const l=h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),[f,m,p]=zt(i);e.push(`  --md-sys-color-${l}-rgb-${s}: ${f}, ${m}, ${p};`)}}for(const[s,c]of Object.entries(o.palettes)){e.push(`  /* ${s} */`);for(const[h,i]of Object.entries(c)){const l=s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();e.push(`  --md-ref-palette-${l}${h}: ${i};`)}}return e.push("}"),e.join(`
`)}function _t(n){const t=lt(n);ut("tokens",t),Y(n),localStorage.setItem("theme-color",n),window.dispatchEvent(new CustomEvent("theme-color-changed",{detail:n}))}const Jt=()=>{const[n,t]=At(qt()),e=wt(),r=o=>{t(o),Y(o),localStorage.setItem("theme-color",o)};return U(()=>{const o=lt(n);ut("tokens",o)},[n]),$t("theme-color-changed",o=>{console.log(o);const a=o.detail;t(a),Y(a),e.current.value=a},window),rt(bt,{children:rt("input",{ref:e,type:"color",value:n,onInput:o=>{const a=o.target.value;r(a)}})})};export{Jt as default,lt as generateTokens,_t as setThemeColor};
