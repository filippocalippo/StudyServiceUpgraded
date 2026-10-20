((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={
bTe(d){var w=C.c.a1(d)
if(w.length===0)return""
return C.b.ga3(C.c.jw(w,$.bXg())).toLowerCase()},
chs(d,e,f){var w=f===D.oX?1:-1,v=A.a(d.slice(0),A.ab(d))
C.b.cB(v,new B.bB9(w,new B.bBa(e,new B.bB8())))
return v},
cdg(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(d.a===0)return D.YQ
w=A.q(d)
v=new A.bk(d,w.h("bk<2>"))
u=v.gV(0)
t=v.gV(0)
for(w=w.h("bU<2>"),s=new A.bU(d,d.r,d.e,w),r=0;s.p();){q=s.d
if(q<u)u=q
if(q>t)t=q
r+=q}p=t-u+1
o=C.e.bS(p+10-1,10)
s=C.e.k9(p+o-1,o)
n=A.bH(s,0,!1,x.q)
for(w=new A.bU(d,d.r,d.e,w);w.p();){m=C.e.k9(w.d-u,o)
n[m]=n[m]+1}l=d.i(0,e)
w=A.a([],x.P)
for(m=l!=null,k=0;k<s;k=j){j=k+1
i=Math.min(u+j*o-1,t)
h=n[k]
g=m&&C.e.k9(l-u,o)===k
w.push(new B.Fy(u+k*o,i,h,g))}return new B.tM(A.c_(w,x.A),r/d.a,C.b.nc(n,C.hV))},
ln:function ln(d,e,f){this.a=d
this.b=e
this.c=f},
kv:function kv(d,e,f){this.c=d
this.a=e
this.b=f},
bB8:function bB8(){},
bBa:function bBa(d,e){this.a=d
this.b=e},
bB9:function bB9(d,e){this.a=d
this.b=e},
Fy:function Fy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
tM:function tM(d,e,f){this.a=d
this.b=e
this.c=f},
bZu(d,e,f,g){var w,v,u,t=A.B(x.N,x.w)
for(w=f.length,v=0;v<w;++v){u=f[v]
t.m(0,u.a,u)}return new B.fC(d,e,f,t,g)},
bZw(d,e){return B.bZv(d,e)},
bZv(d,e){var w,v,u,t,s,r,q,p,o=A.B(x.N,x.g)
for(w=J.ah(e);w.p();){v=w.gG(w)
o.m(0,v.a,v)}w=[]
for(v=J.ah(d);v.p();){u=v.gG(v)
t=u.a
u=u.c
s=o.i(0,t)
$label0$0:{if(s!=null){r=new A.pZ(s.c,s.d,s.e,s.f)
break $label0$0}r=C.oY
break $label0$0}w.push(new B.ln(t,u,r))}q=A.c_(w,x.w)
o=A.a([],x.Q)
for(w=q.length,p=0;p<w;++p)o.push(q[p].c)
return B.bZu(d,e,q,A.bDd(o))},
c2s(){return new B.wX()},
bzU(d,e){return B.cgB(d,e)},
cgB(d,e){var w=0,v=A.o(x.X),u,t,s,r,q,p,o,n,m
var $async$bzU=A.p(function(f,g){if(f===1)return A.l(g,v)
for(;;)switch(w){case 0:o={}
n=d.M(0,$.c0(),x.S).$0()
m=[$.ei().$1(e),$.qq().$1(e),$.j1().$1(e),$.kL().$1(new A.iG(e,A.rH(new A.a2(A.al(n),A.am(n),A.aB(n)))))]
for(t=0;t<4;++t){s=m[t]
if(d.e==null)A.N(A.W(y.b))
r=d.al;(r===$?d.al=A.je(d,!0):r).cr(s)}o.a=null
n=A.a([],x.a)
for(q=x.H,t=0;t<4;++t){p=m[t].gdH()
if(d.e==null)A.N(A.W(y.b))
n.push(p.hd(0,A.je(d,!1)).dB(new B.bzV(),new B.bzW(o),q))}w=3
return A.h(A.dx(n,q),$async$bzU)
case 3:u=o.a
w=1
break
case 1:return A.m(u,v)}})
return A.n($async$bzU,v)},
c9C(d,e,f,g,h,i){if(d.gcH()&&e.gcH())return A.hD(f.$2(A.eR(d,g),A.eR(e,h)),i)
return B.bR8(A.a([d,e],x.R),i)},
c9D(d,e,f,g,h,i,j,k){if(d.gcH()&&e.gcH()&&f.gcH())return A.hD(g.$3(A.eR(d,h),A.eR(e,i),A.eR(f,j)),k)
return B.bR8(A.a([d,e,f],x.R),k)},
bR8(d,e){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.x)(d),++v){u=d[v]
if(u.gbs(u)!=null&&!u.gcH()){w=u.gbs(u)
w.toString
t=u.ghh()
if(t==null)t=A.pW()
return new A.e3(!1,!1,null,w,t,e.h("e3<0>"))}}return A.mP(e)},
fC:function fC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
byY:function byY(){},
wX:function wX(){this.a=$},
bz1:function bz1(){},
bz0:function bz0(){},
bz_:function bz_(){},
byZ:function byZ(){},
byX:function byX(){},
byW:function byW(d){this.a=d},
bzV:function bzV(){},
bzW:function bzW(d){this.a=d},
c2r(){return new B.wW(null)},
wW:function wW(d){this.a=d},
anW:function anW(){var _=this
_.w=!1
_.d=$
_.c=_.a=null},
biD:function biD(){},
biE:function biE(d,e){this.a=d
this.b=e},
anV:function anV(d,e){this.e=d
this.a=e},
biB:function biB(d,e,f){this.a=d
this.b=e
this.c=f},
biC:function biC(d,e,f){this.a=d
this.b=e
this.c=f},
anX:function anX(d){this.a=d},
bLE(d,e,f,g){return e<=0?0:Math.min(g,(d-f*(e-1))/e)},
c19(d,e,f,g,h,i,j){return new B.P4(f,d,j,g,h,e,i,null)},
a7D:function a7D(d,e,f,g,h,i,j,k,l,m){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.a=m},
P4:function P4(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.x=j
_.a=k},
vc:function vc(d,e){this.a=d
this.b=e},
NX:function NX(d,e){this.d=d
this.a=e},
alk:function alk(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
bbX:function bbX(){},
bc_:function bc_(d,e){this.a=d
this.b=e},
bc0:function bc0(d,e){this.a=d
this.b=e},
bbY:function bbY(d){this.a=d},
bbZ:function bbZ(d){this.a=d},
bbW:function bbW(d,e){this.a=d
this.b=e},
amD:function amD(d,e){this.e=d
this.a=e},
bfu:function bfu(d,e){this.a=d
this.b=e},
asN:function asN(d,e,f){this.e=d
this.f=e
this.a=f},
boB:function boB(){},
asQ:function asQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aaN:function aaN(d,e){this.e=d
this.a=e},
aOK:function aOK(){},
aOL:function aOL(d){this.a=d},
aaO:function aaO(d){this.a=d},
oG:function oG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
If:function If(d,e,f){this.c=d
this.d=e
this.a=f},
aZ1:function aZ1(d){this.a=d},
bHX(d){return A.ic(d,new B.bAS(),null,"Ordina classifica",x.H)},
acv:function acv(d){this.a=d},
aT7:function aT7(d){this.a=d},
aT6:function aT6(d){this.a=d},
aT5:function aT5(d){this.a=d},
bAS:function bAS(){},
KE:function KE(d){this.a=d},
bnT:function bnT(d,e){this.a=d
this.b=e},
bnU:function bnU(d){this.a=d},
acw:function acw(d,e){this.e=d
this.a=e},
aT9:function aT9(d){this.a=d},
aTa:function aTa(){},
aTb:function aTb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aT8:function aT8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Hx:function Hx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ao1:function ao1(d,e,f){this.c=d
this.d=e
this.a=f},
chk(d,e,f){return A.ic(d,new B.bAY(e,f),null,null,x.H)},
bAY:function bAY(d,e){this.a=d
this.b=e},
Im:function Im(d,e,f){this.e=d
this.f=e
this.a=f},
aZQ:function aZQ(){},
aZR:function aZR(){},
aZS:function aZS(d){this.a=d},
aZT:function aZT(d){this.a=d},
ajo:function ajo(d,e,f){this.e=d
this.f=e
this.a=f},
b7n:function b7n(){},
b7o:function b7o(d,e){this.a=d
this.b=e}},D,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[41]
F=c[39]
B=a.updateHolder(c[10],B)
D=c[40]
G=c[32]
H=c[34]
B.ln.prototype={}
B.kv.prototype={
R(){return"SortDirection."+this.b}}
B.Fy.prototype={
gDn(d){var w=this.a,v=this.b,u=""+w
return w===v?u:u+"\u2013"+v},
j(d,e){var w=this
if(e==null)return!1
return e instanceof B.Fy&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d},
gu(d){var w=this
return A.K(w.a,w.b,w.c,w.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var w=this.gDn(0),v=this.d?", me":""
return"Bucket("+w+": "+this.c+v+")"}}
B.tM.prototype={}
B.fC.prototype={
j(d,e){if(e==null)return!1
return e instanceof B.fC&&e.a===this.a&&e.b===this.b},
gu(d){return A.K(A.p5(this.a),A.p5(this.b),C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.wX.prototype={
dn(){return D.anN},
aj9(d){var w
this.gt().U(0)
w=new A.Km(d,this.gt().gS().b)
this.gt().A(w)
return w}}
B.wW.prototype={
X(){return new B.anW()}}
B.anW.prototype={
aFg(d){this.a.toString
return},
q(d){var w=this.ga4().H($.fl(),x.T)
return A.eo(D.akX,w==null?C.a7:this.aqW(0,d,w),null,!1,null)},
aqW(d,e,f){var w,v=null,u=this.ga4(),t=$.LG().$1(f),s=u.H(new A.b0(t,new B.biD(),t.$ti.h("b0<bq.0,+error,ready(z?,r)>")),x.f)
if(s.b){this.aFg(f)
return new B.anV(f,v)}w=s.a
if(w!=null)return A.cm(A.jR(A.fL(w,v,new B.biE(this,f),"Impossibile caricare le metriche"),C.J,v,v,v,C.U),v,v)
return D.aDA}}
B.anV.prototype={
Hg(d,e){return this.aH4(d,e)},
aH4(d,e){var w=0,v=A.o(x.H),u,t=this,s,r,q
var $async$Hg=A.p(function(f,g){if(f===1)return A.l(g,v)
for(;;)switch(w){case 0:w=3
return A.h(B.bzU(e,t.e),$async$Hg)
case 3:q=g
if(d.e==null){w=1
break}s=q==null
r=s?"Classifica aggiornata":A.bx(q,null).a
A.b5(d,r,"Annulla",C.u,s?C.aK:C.ew,null)
case 1:return A.m(u,v)}})
return A.n($async$Hg,v)},
bV(d,e){var w=null,v=new B.biB(this,d,e),u=this.e,t=x.c,s=A.a([new A.cG(new A.bs(new B.aaN(u,w),w),720,8,0,w),new A.cG(new A.bs(new B.NX(u,w),w),720,12,0,w)],t),r=A.a([D.ank,new A.cG(new B.acw(u,w),720,0,32,w)],t)
if(A.pK(A.bw(d,C.bw,x.t).w.a.a).a<2){u=A.a_(s,x.l)
C.b.K(u,r)
return v.$1(u)}u=A.a_(s,x.l)
u.push(D.as7)
return new A.e9(C.cv,w,w,new A.cI(D.UG,A.ad(A.a([A.av(v.$1(u),5,w),A.av(v.$1(r),6,w)],x.p),C.o,C.d,C.h,0,w),w),w)}}
B.anX.prototype={
q(d){var w=null
return A.aa(w,w,new A.cv(!0,new A.rj(A.Gp(D.a8P,w,D.a_y,C.Lr),720,w),w),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Caricamento delle metriche",w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.i,w)}}
B.a7D.prototype={
a4D(d){var w=this.b.a.length,v=d.a,u=this.y,t=B.bLE(v,w,u,64)
return new A.a6(t,(v-(w*t+u*(w-1)))/2)},
b8(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.b,a1=a0.a,a2=a1.length
if(a2===0||a4.a<=0)return
w=d.a4D(a4)
v=w.a
u=w.b
t=a4.b
s=t-20
r=Math.max(1,a0.c)
$.aA()
q=A.bE()
for(a0=a3.a,p=d.c,o=v+d.y,n=d.d,m=d.e,l=t-4,k=l+4,j=0;j<a2;++j){i=a1[j]
h=u+j*o
g=i.c
if(g===0){q.r=m.gC(0)
g=A.hK(new A.Q(h,l,h+v,k),C.ee)
f=q.eN()
a0.drawRRect(A.nT(g),f)
f.delete()
continue}e=Math.max(6,s*g/r)
q.r=(i.d?n:p).gC(0)
g=t-e
g=A.acs(new A.Q(h,g,h+v,g+e),C.eI,C.eI,C.ef,C.ef)
f=q.eN()
a0.drawRRect(A.nT(g),f)
f.delete()}d.aFp(a3,a4)},
aFp(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b,j=k.b,i=m.a4D(e),h=i.a,g=C.b.gV(k.a)
k=g.a
w=g.b-k+1
v=e.a
u=C.f.ce(i.b+(j-k-(w-1)/2)/w*(h+m.y)+h/2,0,v)
$.aA()
t=A.bE()
k=m.f
t.r=k.gC(0)
t.c=2
t.d=C.j4
for(s=e.b,r=d.a,q=18;q<s;q+=7){p=Math.min(q+4,s)
o=t.eN()
r.drawLine.apply(r,[u,q,u,p,o])
o.delete()}j=C.f.aE(j,1)
j=A.bJ(j,".",",")
n=A.CU(l,l,1,l,A.cL(l,l,m.r.O(k),"media "+j),C.bL,m.x,l,m.w,C.bX)
n.Dq()
j=n.b.c
n.b8(d,new A.v(C.f.ce(u-j/2,0,v-j),0))
n.l()},
ew(d){var w=this,v=!0
if(d.b===w.b)if(d.c.j(0,w.c))if(d.d.j(0,w.d))if(d.e.j(0,w.e))if(d.f.j(0,w.f))if(d.r.j(0,w.r))if(d.w.j(0,w.w))if(d.x===w.x)v=d.y!==w.y
return v}}
B.P4.prototype={
a0E(d,e){var w=e.a,v=w*C.f.ce(d,0,1)
return this.x===C.aF?w-v:v},
b8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=e.b,i=(j-10)/2,h=new A.b4(5,5)
$.aA()
w=A.bE()
w.r=k.d.gC(0)
v=e.a
u=i+10
d.dW(A.hK(new A.Q(0,i,0+v,u),h),w)
t=C.f.ce(k.b,0,1)
if(t>0){s=Math.max(10,v*t)
r=k.x===C.aF?v-s:0
w.r=k.c.gC(0)
d.dW(A.hK(new A.Q(r,i,r+s,u),h),w)}q=A.bE()
q.r=k.e.gC(0)
q.d=C.j4
p=k.f
if(p!=null){o=k.a0E(p,e)
q.c=3
d.nW(new A.v(o,i-4),new A.v(o,u+4),q)}n=k.r
if(n!=null){o=k.a0E(n,e)
q.c=1.5
for(v=d.a,m=0;m<j;m+=6){u=Math.min(m+3,j)
l=q.eN()
v.drawLine.apply(v,[o,m,o,u,l])
l.delete()}}},
ew(d){var w=this,v=!0
if(d.b===w.b)if(d.c.j(0,w.c))if(d.d.j(0,w.d))if(d.e.j(0,w.e))if(d.f==w.f)if(d.r==w.r)v=d.x!==w.x
return v}}
B.vc.prototype={
R(){return"_ChartView."+this.b}}
B.NX.prototype={
X(){return new B.alk(D.pq)}}
B.alk.prototype={
q(d){var w,v,u=this,t=null,s=A.V(d),r=u.ga4(),q=$.LG().$1(u.a.d),p=r.H(new A.b0(q,new B.bbX(),q.$ti.h("b0<bq.0,r>")),x.C),o=A.aH(r.H($.bJe().$1(new A.Yo(u.a.d,t)),x.j)),n=p&&o!=null&&o.a.length!==0,m=n?u.w:D.pq
r=new B.bc_(u,n)
if(!p)w=A.f4(C.c0,"Nuovo turno",C.rZ,"Le metriche si riempiono quando generi i turni.",new B.bbY(d),"Nessun dato disponibile")
else{q=u.a
if(m===D.pr){o.toString
w=new B.asN(o,q.d,D.aAn)}else w=new B.amD(q.d,D.aAg)}q=m===D.pr?"Interrogazioni per materia":"Interrogazioni per studente"
v=x.p
q=A.a([A.aa(t,t,A.A(q,t,t,t,C.ar.O(s.y),t,t,t),!1,t,t,t,t,!1,t,!1,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.i,t)],v)
if(n)C.b.K(q,A.a([C.az,new A.i1(D.a9K,m,new B.bbZ(u),t,x.n)],v))
q.push(C.T)
r=n?r:t
v=A.b1(d,C.Q)
v=v==null?t:v.ax
q.push(A.il(C.aO,A.a2_(w,v===!0?C.x:C.w,A.awx(),C.W,A.bGZ()),C.ac,!1,t,t,t,t,r,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t))
return A.d4(A.a5(q,C.o,t,C.d,C.h,0),!1,t,C.b9,t,C.ds)}}
B.amD.prototype={
bV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=A.V(d),j=e.H($.bXx().$1(this.e),x.F)
if(j==null||j.a.length===0)return D.arw
w=j.a
v=A.a([],x.s)
for(u=w.length,t=0;t<u;++t){s=w[t]
r=s.c
if(r>0){q=r===1?"studente":"studenti"
p=s.a
o=s.b
n=""+p
p=p===o?n:n+"\u2013"+o
v.push(""+r+" "+q+" con "+p)}}m=C.b.b_(v,", ")
v=C.f.aE(j.b,1)
v=A.bJ(v,".",",")
u=A.b1(d,C.bN)
u=u==null?l:u.gdA()
return A.aa(l,l,A.a5(A.a([A.bD(new A.ks(A.hu(l,l,l,new B.a7D(j,k.ax,k.as,k.r,k.z,C.dw,(u==null?C.av:u).l7(0,1.3),d.az(x.I).w,6,l),C.S),l),132,l),C.aD,A.jc(new B.bfu(w,k)),C.b7,A.A("Numero di studenti per numero di interrogazioni",l,l,l,C.v.O(k.Q),C.a6,l,l)],x.p),C.o,l,C.d,C.h,0),!0,l,l,l,l,!0,l,!1,l,l,l,l,l,l,l,l,l,"Interrogazioni per studente: "+m+". Media "+v+".",l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.i,l)}}
B.asN.prototype={
bV(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.V(d),k=$.id().$1(this.f),j=e.H(new A.b0(k,new B.boB(),k.$ti.h("b0<bq.0,dA?>")),x.U)
if(j==null)j=$.qn()
w=this.e.a
for(k=w.length,v=1,u=0,t=0;t<k;++t){s=w[t].d
if(s>v)v=s
u+=s}r=u/k
q=A.a([],x.p)
for(p=l.a,o=r/v,t=0;t<k;++t){n=w[t]
q.push(new B.asQ(n,A.hm(j.iO(m,n.b,n.a),p).c,n.d/v,o,m))}q.push(C.ak)
k=C.f.aE(r,1)
q.push(A.A("Linea tratteggiata: media "+A.bJ(k,".",",")+" per materia, da settembre",m,m,m,C.v.O(l.Q),C.a6,m,m))
return A.a5(q,C.o,m,C.d,C.h,0)}}
B.asQ.prototype={
q(d){var w,v,u,t=this,s=null,r=A.V(d),q=t.c,p=q.b,o=q.d,n=""+o
o=o===1?"interrogazione":"interrogazioni"
w=t.d
v=r.y
u=x.p
return A.aa(s,s,new A.cI(D.UH,A.ad(A.a([A.bD(A.ad(A.a([new A.np(w,8,s),C.bc,A.av(A.A(p,1,C.q,s,A.bQ(C.y,700).O(v),s,s,s),1,s)],u),C.j,C.d,C.h,0,s),s,104),C.aX,A.av(A.bD(A.hu(s,s,s,B.c19(w,t.f,t.e,r.z,s,d.az(x.I).w,r.r),C.S),30,s),1,s),C.aX,A.bD(A.A(n,s,s,s,A.pJ(A.bQ(C.y,800)).O(v),C.fy,s,s),s,30)],u),C.j,C.d,C.h,0,s),s),!0,s,s,s,s,!0,s,!1,s,s,s,s,s,s,s,s,s,p+": "+n+" "+o+", al massimo "+q.f+" per studente",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,C.i,s)}}
B.aaN.prototype={
bV(d,e){var w,v,u,t,s,r,q,p=null,o=$.LG().$1(this.e),n=e.H(new A.b0(o,new B.aOK(),o.$ti.h("b0<bq.0,lP?>")),x.k)
if(n==null)return D.u8
o=n.b
w=o===0
v=new B.aOL(w)
u=n.c
t=v.$1(w?0:u/o*100)
s=n.d
r=v.$1(w?0:s/o*100)
q=n.e
return new B.If(A.a([new B.oG(""+o,"Interrogazioni",p,p),new B.oG(t,"Prime posizioni \xb7 "+u,p,p),new B.oG(r,"Ripianificazioni \xb7 "+s,p,p),new B.oG(v.$1(w?0:q/o*100),"Assenze \xb7 "+q,p,p)],x.p),560,p)}}
B.aaO.prototype={
q(d){var w,v=A.a([],x.p)
for(w=0;w<4;++w)v.push(D.ass)
return new A.jg(new B.If(v,560,null),null)}}
B.oG.prototype={
q(d){var w,v,u=this,t=null,s=A.V(d),r=u.c,q=r.length===0,p=u.e
if(q)w="Caricamento"
else{w=A.a([r,u.d],x.s)
if(p!=null)w.push(p)
w=C.b.b_(w,", ")
w=A.bJ(w," \xb7 "," ")}if(q)r=D.a5z
else{v=x.p
r=A.a([A.A(r,1,t,t,C.hD.c1(s.y,24),t,t,t),C.bV,A.A(u.d,2,t,t,A.bQ(C.v,700).c1(s.z,12),t,t,t)],v)
if(p!=null)C.b.K(r,A.a([C.b7,A.A(p,1,C.q,t,C.v.O(s.Q),t,t,t)],v))}return A.aa(t,t,A.dU(new A.a3(C.Y,A.a5(r,C.A,t,C.d7,C.h,0),t),new A.bd(s.d,t,t,C.fK,s.RG,t,C.D),C.ai),!0,t,t,t,t,!0,t,!1,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.i,t)}}
B.If.prototype={
q(d){return A.jc(new B.aZ1(this))}}
B.acv.prototype={
bV(d,e){var w=null,v=A.V(d),u=e.H($.a1q(),x.M),t=u.a,s=u.b.c,r=A.k7(v.w,-1,1.2),q=v.z,p=A.b6(D.a25,q,w,16),o=A.A(s,w,w,w,C.d0.O(q),w,w,w)
return A.C4(w,w,!1,D.a_Y,"Classifica",A.aa(!0,w,A.Rq(A.dG(!1,C.w,!0,w,A.fr(!1,C.dd,!0,A.dp(w,A.ad(A.a([p,C.bc,o,C.fw,A.b6(t===D.oW?D.zu:D.zv,q,w,15)],x.p),C.j,C.d,C.F,0,w),C.r,w,G.wS,new A.bd(w,w,r,C.dd,w,w,C.D),w,w,w,w,C.h0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,new B.aT5(d),w,w,w,w),C.r,w,0,w,w,w,w,w,C.cn),new B.aT6(d)),!0,w,w,w,w,!0,w,!1,w,w,w,w,w,w,w,w,w,"Ordina per: "+s+", "+t.c.toLowerCase(),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.aT7(d),w,w,w,w,w,w,w,w,w,C.i,w))}}
B.KE.prototype={
bV(d,e){var w,v,u,t,s=null,r=$.a1q(),q=e.H(r,x.M),p=e.M(0,r.gbd(),x.Y)
r=x.p
w=A.a([],r)
for(v=q.b,u=0;u<5;++u){t=D.ac6[u]
w.push(new A.e5(t.c,t===v,new B.bnT(p,t),C.bk,s,s,s))}return A.a5(A.a([D.alv,A.fj(C.aG,w,C.b_,0,8),C.aZ,D.alu,new A.i1(D.a50,q.a,p.gaj8(),s,x.e),C.dS,A.b8(s,!0,s,"Fatto",!1,new B.bnU(d),s,C.a3,C.bF)],r),C.o,s,C.d,C.h,0)}}
B.acw.prototype={
bV(d,e){var w,v,u,t,s=e.H($.bJf().$1(this.e),x.E)
if(s==null)return D.arL
w=J.ag(s)
if(w.gab(s))return new A.bs(A.f4(null,"Gestisci studenti",C.k6,"Approva le richieste di accesso o condividi il codice.",new B.aT9(d),"Nessuno studente in classe"),null)
v=$.a1q()
u=e.H(new A.b0(v,new B.aTa(),v.$ti.h("b0<bq.0,i5>")),x.x)
t=e.H($.fm(),x.T)
return new A.jh(w.gv(s),new B.aTb(this,s,u,t),C.ao,0,null)}}
B.Hx.prototype={
q(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.V(a1),g=j.c,f=g.c,e=""+f.a,d=f.b,a0=d===1?"1 prima":""+d+" prime"
a0=A.a([new A.a6(C.vq,e+" interr."),new A.a6(C.Rl,a0)],x.m)
w=f.c
if(w>0||j.e===C.vo)a0.push(new A.a6(C.vo,""+w+" ripi."))
v=f.d
if(v>0||j.e===C.vp)a0.push(new A.a6(C.vp,""+v+" ass."))
u=j.e
t=u!==C.Rk&&j.d<=3
s=g.b
if(C.c.a1(s).length===0)s="Studente senza nome"
g=""+j.d
r=j.f
q=r?" (tu)":""
p=j.r
o=t?h.db:h.f
n=A.pJ(A.bQ(C.ar,900))
m=x.p
r=A.ad(A.a([A.dp(C.O,A.A(g,i,i,i,n.c1(t?h.dx:h.z,12),i,i,C.av),C.r,i,i,new A.bd(o,i,i,C.q8,i,i,C.D),i,26,i,i,i,i,i,26),C.aX,new A.fe(s,C.bT,r,!1,i,i)],m),C.j,C.d,C.F,0,i)
o=A.A(s,1,C.q,i,i,i,i,i)
m=A.a([],m)
for(n=a0.length,l=0;l<a0.length;a0.length===n||(0,A.x)(a0),++l){k=a0[l]
m.push(new B.ao1(k.b,k.a===u,i))}return A.aa(!0,i,A.d9(!0,i,r,60,p,C.Y,new A.a3(C.r2,A.fj(C.aG,m,C.b_,4,4),i),o,A.b6(C.dk,h.Q,i,20)),!0,i,i,i,i,!0,i,!1,i,i,i,i,i,i,i,i,i,g+"\xb0, "+s+q+": "+e+" interrogazioni, "+d+" prime posizioni, "+w+" ripianificazioni, "+v+" assenze",i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,p,i,i,i,i,i,i,i,i,i,C.i,i)}}
B.ao1.prototype={
q(d){var w=null,v=A.V(d),u=this.d,t=u?v.ax:v.f
return A.dp(w,A.A(this.c,1,w,w,C.dw.c1(u?v.ay:v.z,10.5),w,w,w),C.r,w,w,new A.bd(t,w,w,C.qa,w,w,C.D),w,w,w,w,D.a0j,w,w,w)}}
B.Im.prototype={
bV(a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=A.V(a8),a5=this.e,a6=$.LG().$1(a5),a7=a9.H(new A.b0(a6,new B.aZQ(),a6.$ti.h("b0<bq.0,fC?>")),x.D)
if(a7==null)return D.ajX
a6=this.f
w=a7.d.i(0,a6)
if(w==null)return D.alk
v=a9.H($.bJf().$1(a5),x.E)
u=$.a1q()
t=a9.H(new A.b0(u,new B.aZR(),u.$ti.h("b0<bq.0,i5>")),x.x)
s=a9.H($.fm(),x.T)===a6
u=v==null?a3:J.bYa(v,new B.aZS(this))
r=(u==null?-1:u)+1
q=w.c
p=a7.e
u=q.a
o=new B.aZT(u>0)
n=w.b
if(C.c.a1(n).length===0)n="Studente senza nome"
m=s?n+" (tu)":n
l=x.p
m=A.a([A.aa(a3,a3,A.A(m,a3,a3,a3,C.cG.O(a4.y),a3,a3,a3),!1,a3,a3,a3,a3,!1,a3,!1,a3,a3,!0,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,C.i,a3)],l)
if(r>0)m.push(A.A(""+r+"\xb0 su "+a7.c.length+" per "+t.c.toLowerCase(),a3,a3,a3,C.y.O(a4.z),a3,a3,a3))
m=A.ad(A.a([new A.fe(n,C.bT,s,!1,a3,a3),C.aN,A.av(A.a5(m,C.A,a3,C.d,C.h,0),1,a3)],l),C.j,C.d,C.h,0,a3)
k=p.a
j=k<=0
i=C.f.aE(j?0:p.b/k,1)
i=A.bJ(i,".",",")
h=q.b
g=u===0
f=o.$2("Prime posizioni",g?0:h/u*100)
e=C.f.aE(j?0:p.c/k,1)
e=A.bJ(e,".",",")
d=q.c
a0=o.$2("Ripianificazioni",g?0:d/u*100)
a1=C.f.aE(j?0:p.d/k,1)
a1=A.bJ(a1,".",",")
a2=q.d
o=o.$2("Assenze",g?0:a2/u*100)
k=C.f.aE(j?0:p.e/k,1)
return A.a5(A.a([m,C.aZ,new B.If(A.a([new B.oG(""+u,"Interrogazioni","media classe "+i,a3),new B.oG(""+h,f,"media "+e,a3),new B.oG(""+d,a0,"media "+a1,a3),new B.oG(""+a2,o,"media "+A.bJ(k,".",","),a3)],l),1/0,a3),A.C4(a3,a3,!1,a3,"Equilibrio",A.A("da settembre, vs media",a3,a3,a3,C.v.O(a4.Q),a3,a3,a3)),new B.ajo(a5,a6,a3)],l),C.o,a3,C.d,C.h,0)}}
B.ajo.prototype={
bV(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=A.V(a3),a1=this.e,a2=a4.H($.bJe().$1(new A.Yo(a1,this.f)),x.j)
a1=$.id().$1(a1)
w=a4.H(new A.b0(a1,new B.b7n(),a1.$ti.h("b0<bq.0,dA?>")),x.U)
if(w==null)w=$.qn()
v=A.aH(a2)
if(v==null){if(a2.gbs(a2)!=null){a1=a2.gbs(a2)
a1.toString
return A.ad(A.a([A.av(A.A(A.bx(a1,d).a,d,d,d,C.y.O(a0.z),d,d,d),1,d),A.b8(d,!1,C.dF,"Riprova",!1,new B.b7o(this,a4),d,C.Z,C.bF)],x.p),C.j,C.d,C.h,0,d)}a1=A.a([],x.p)
for(u=0;u<3;++u)a1.push(D.amY)
return new A.jg(A.a5(a1,C.j,d,C.d,C.h,12),d)}a1=v.a
t=a1.length
if(t===0)return A.A("Nessuna interrogazione da settembre.",d,d,d,C.y.O(a0.z),d,d,d)
s=v.b
r=x.p
q=A.a([],r)
for(p=x.d,o=a0.y,n=a0.a,m=a0.r,l=x.I,k=0;k<t;++k){j=a1[k]
i=j.b
h=j.c
g=""+h
f=j.e
e=C.f.aE(f,1)
e=A.bJ(e,".",",")
f=A.ad(A.a([new A.cx(92,d,A.A(i,1,C.q,d,C.y.xg(A.a([new A.hZ("wght",700)],p),C.eu).O(o),d,d,d),d),C.aX,new A.eb(1,C.aA,new A.cx(d,32,new A.wd(new B.P4(h/s,A.hm(w.iO(d,i,j.a),n).c,m,o,f/s,d,a3.az(l).w,d),d,C.S,d,d),d),d),C.aX,new A.cx(22,d,A.A(g,d,d,d,A.pJ(C.y.xg(A.a([new A.hZ("wght",800)],p),C.ev)).O(o),C.fy,d,d),d)],r),C.j,C.d,C.h,0,d)
q.push(new A.mi(new A.Cx(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,i+": "+g+", media classe "+e,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,C.i,d),!0,!1,d,!0,!1,new A.cI(E.wU,f,d),d))}q.push(new A.a3(H.jU,A.A("Barra: interrogazioni dello studente \xb7 tacca: media classe",d,d,d,C.v.O(a0.Q),d,d,d),d))
return A.d4(A.a5(q,C.o,d,C.d,C.h,0),!1,d,D.a_g,d,C.ds)}}
var z=a.updateTypes(["i(ln,ln)","fC?(J<fC>)","i5(+direction,field(kv,i5))","J<fC>(cB<J<fC>>,d)","~(kv)","k<ln>?(cB<k<ln>?>,d)","tM?(cB<tM?>,d)","+error,ready(z?,r)(J<fC>)","r(J<fC>)","~(vc)","lP?(J<fC>)","KE(C)","Hx(C,i)","Im(C)","r(ln)","fC(k<bi>,k<ef>)","wX()"])
B.bB8.prototype={
$2(d,e){var w=d.b,v=e.b,u=C.c.a6(B.bTe(w),B.bTe(v))
return u!==0?u:C.c.a6(w.toLowerCase(),v.toLowerCase())},
$S:z+0}
B.bBa.prototype={
$2(d,e){var w=this.a,v=C.e.a6(d.c.ah1(w),e.c.ah1(w))
return v!==0?v:this.b.$2(d,e)},
$S:z+0}
B.bB9.prototype={
$2(d,e){return this.a*this.b.$2(d,e)},
$S:z+0}
B.byY.prototype={
$2(d,e){return B.c9C(d.H($.ei().$1(e),x.y),d.H($.qq().$1(e),x.z),B.cfP(),x.W,x.o,x._)},
$S:z+3}
B.bz1.prototype={
$2(d,e){var w,v=$.LG().$1(e),u=d.H(new A.b0(v,new B.bz0(),v.$ti.h("b0<bq.0,fC?>")),x.D)
if(u==null)return null
w=d.H($.a1q(),x.M)
return A.c_(B.chs(u.c,w.b,w.a),x.w)},
$S:z+5}
B.bz0.prototype={
$1(d){return A.aH(d)},
$S:z+1}
B.bz_.prototype={
$2(d,e){var w,v,u,t,s=$.LG().$1(e),r=d.H(new A.b0(s,new B.byZ(),s.$ti.h("b0<bq.0,fC?>")),x.D)
if(r==null||r.c.length===0)return null
s=A.B(x.N,x.q)
for(w=r.c,v=w.length,u=0;u<v;++u){t=w[u]
s.m(0,t.a,t.c.a)}return B.cdg(s,d.H($.fm(),x.T))},
$S:z+6}
B.byZ.prototype={
$1(d){return A.aH(d)},
$S:z+1}
B.byX.prototype={
$2(d,e){var w=$.kL(),v=e.a,u=d.M(0,$.c0(),x.S).$0()
return B.c9D(d.H(w.$1(new A.iG(v,A.rH(new A.a2(A.al(u),A.am(u),A.aB(u))))),x.V),d.H($.ei().$1(v),x.y),d.H($.id().$1(v),x.b),new B.byW(e),x.r,x.W,x.B,x.Z)},
$S:1159}
B.byW.prototype={
$3(d,e,f){var w,v,u=A.a([],x.G)
for(w=J.ah(d);w.p();){v=w.gG(w)
u.push(new A.Yy(v.a,v.e,v.f))}return A.bTb(J.bo(e),this.a.b,u,f.guI())},
$S:1160}
B.bzV.prototype={
$1(d){},
$S:81}
B.bzW.prototype={
$1(d){var w=this.a
if(w.a==null)w.a=d},
$S:27}
B.biD.prototype={
$1(d){var w=d.gcH()
return new A.aq7(d.gcH()?null:d.gbs(d),w)},
$S:z+7}
B.biE.prototype={
$0(){var w=y.b,v=this.a.ga4(),u=this.b,t=$.ei().$1(u)
if(v.e==null)A.N(A.W(w))
v.gd1().cr(t)
u=$.qq().$1(u)
if(v.e==null)A.N(A.W(w))
v.gd1().cr(u)},
$S:0}
B.biB.prototype={
$1(d){return A.jf(A.hv(null,C.b1,null,d),0,new B.biC(this.a,this.b,this.c))},
$S:1161}
B.biC.prototype={
$0(){return this.a.Hg(this.b,this.c)},
$S:2}
B.bbX.prototype={
$1(d){var w=A.aH(d)
w=w==null?null:w.e.b>0
return w===!0},
$S:z+8}
B.bc_.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(!this.b||Math.abs(v)<200)return
w=this.a
w.A(new B.bc0(w,v))},
$S:29}
B.bc0.prototype={
$0(){var w=this.b<0?D.pr:D.pq
this.a.w=w},
$S:0}
B.bbY.prototype={
$0(){return A.fH(this.a,"/classe/turni/nuovo",x.X)},
$S:0}
B.bbZ.prototype={
$1(d){var w=this.a
return w.A(new B.bbW(w,d))},
$S:z+9}
B.bbW.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.bfu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.length,m=B.bLE(e.b,n,6,64),l=A.a([],x.p)
for(w=x.d,v=this.b.Q,u=0;u<n;++u){t=o[u]
s=t.a
r=t.b
q=""+s
s=s===r?q:q+"\u2013"+r
l.push(new A.cx(m,p,A.A(s,1,C.ei,p,C.v.xg(A.a([new A.hZ("wght",700)],w),C.eu).c1(v,10.5),C.a6,p,p),p))}return A.ad(l,C.j,C.d7,C.h,6,p)},
$S:205}
B.boB.prototype={
$1(d){return A.aH(d)},
$S:357}
B.aOK.prototype={
$1(d){var w=A.aH(d)
return w==null?null:w.e},
$S:z+10}
B.aOL.prototype={
$1(d){var w
if(this.a)w="\u2014"
else{w=C.f.aE(d,1)
w=A.bJ(w,".",",")+"%"}return w},
$S:200}
B.aZ1.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=e.b>=r.d?r.c.length:2,p=x.p,o=A.a([],p)
for(r=r.c,w=0;w<r.length;w=u){v=A.a([],p)
for(u=w+q,t=w;t<u;++t)v.push(new A.eb(1,C.aA,t<r.length?r[t]:C.a7,s))
o.push(new A.wI(A.ad(v,C.o,C.d,C.h,10,s),s))}return A.a5(o,C.o,s,C.d,C.h,10)},
$S:350}
B.aT7.prototype={
$0(){return B.bHX(this.a)},
$S:0}
B.aT6.prototype={
$0(){return B.bHX(this.a)},
$S:0}
B.aT5.prototype={
$0(){return B.bHX(this.a)},
$S:0}
B.bAS.prototype={
$1(d){return D.aEy},
$S:z+11}
B.bnT.prototype={
$1(d){var w,v=this.a,u=this.b
v.gt().U(0)
if(u===v.gt().gS().b){v.gt().U(0)
w=v.gt().gS().a===D.oX?D.oW:D.oX}else{v.gt().U(0)
w=v.gt().gS().a}v.gt().A(new A.Km(w,u))
return null},
$S:4}
B.bnU.prototype={
$0(){A.c4(this.a,!1).cA(null)
return null},
$S:0}
B.aT9.prototype={
$0(){return A.fH(this.a,"/classe/gestione",x.X)},
$S:0}
B.aTa.prototype={
$1(d){return d.b},
$S:z+2}
B.aTb.prototype={
$2(d,e){var w=this,v=w.b,u=J.ag(v),t=u.i(v,e)
return new B.Hx(u.i(v,e),e+1,w.c,u.i(v,e).a===w.d,new B.aT8(w.a,d,v,e),new A.b2(t.a,x.O))},
$S:z+12}
B.aT8.prototype={
$0(){var w=this
return B.chk(w.b,w.a.e,J.ax(w.c,w.d).a)},
$S:0}
B.bAY.prototype={
$1(d){return new B.Im(this.a,this.b,null)},
$S:z+13}
B.aZQ.prototype={
$1(d){return A.aH(d)},
$S:z+1}
B.aZR.prototype={
$1(d){return d.b},
$S:z+2}
B.aZS.prototype={
$1(d){return d.a===this.a.f},
$S:z+14}
B.aZT.prototype={
$2(d,e){var w
if(this.a){w=C.f.aE(e,1)
w=d+" \xb7 "+(A.bJ(w,".",",")+"%")}else w=d
return w},
$S:1163}
B.b7n.prototype={
$1(d){return A.aH(d)},
$S:357}
B.b7o.prototype={
$0(){var w=this.b,v=$.kL(),u=w.M(0,$.c0(),x.S).$0()
u=v.$1(new A.iG(this.a.e,A.rH(new A.a2(A.al(u),A.am(u),A.aB(u)))))
if(w.e==null)A.N(A.W(y.b))
w.gd1().cr(u)
return null},
$S:0};(function installTearOffs(){var w=a._static_2,v=a._static_0,u=a._instance_1u
w(B,"cfP","bZw",15)
v(B,"cfQ","c2s",16)
u(B.wX.prototype,"gaj8","aj9",4)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.z,[B.ln,B.Fy,B.tM,B.fC])
w(A.nH,[B.kv,B.vc])
w(A.j5,[B.bB8,B.bBa,B.bB9,B.byY,B.bz1,B.bz_,B.byX,B.bfu,B.aZ1,B.aTb,B.aZT])
v(B.wX,A.hV)
w(A.h8,[B.bz0,B.byZ,B.byW,B.bzV,B.bzW,B.biD,B.biB,B.bbX,B.bc_,B.bbZ,B.boB,B.aOK,B.aOL,B.bAS,B.bnT,B.aTa,B.bAY,B.aZQ,B.aZR,B.aZS,B.b7n])
w(A.kT,[B.wW,B.NX])
w(A.lU,[B.anW,B.alk])
w(A.jG,[B.biE,B.biC,B.bc0,B.bbY,B.bbW,B.aT7,B.aT6,B.aT5,B.bnU,B.aT9,B.aT8,B.b7o])
w(A.oa,[B.anV,B.amD,B.asN,B.aaN,B.acv,B.KE,B.acw,B.Im,B.ajo])
w(A.F,[B.anX,B.asQ,B.aaO,B.oG,B.If,B.Hx,B.ao1])
w(A.Fr,[B.a7D,B.P4])})()
A.lF(b.typeUniverse,JSON.parse('{"wX":{"hV":["+direction,field(kv,i5)"],"e0":["+direction,field(kv,i5)"],"dz":["+direction,field(kv,i5)"],"e0.0":"+direction,field(kv,i5)"},"wW":{"I":[],"c":[]},"anW":{"Y":["wW"]},"anV":{"I":[],"c":[]},"anX":{"F":[],"c":[]},"a7D":{"aD":[]},"P4":{"aD":[]},"NX":{"I":[],"c":[]},"alk":{"Y":["NX"]},"amD":{"I":[],"c":[]},"asN":{"I":[],"c":[]},"asQ":{"F":[],"c":[]},"aaN":{"I":[],"c":[]},"aaO":{"F":[],"c":[]},"oG":{"F":[],"c":[]},"If":{"F":[],"c":[]},"KE":{"I":[],"c":[]},"Hx":{"F":[],"c":[]},"acv":{"I":[],"c":[]},"acw":{"I":[],"c":[]},"ao1":{"F":[],"c":[]},"Im":{"I":[],"c":[]},"ajo":{"I":[],"c":[]}}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=A.a1
return{j:w("J<pa>"),V:w("J<k<cS>>"),y:w("J<k<bi>>"),z:w("J<k<ef>>"),b:w("J<dA>"),Z:w("pa"),_:w("fC"),S:w("bA()"),I:w("mX"),A:w("Fy"),R:w("u<J<z?>>"),P:w("u<Fy>"),d:w("u<hZ>"),a:w("u<G<~>>"),c:w("u<cG>"),m:w("u<+(i5,d)>"),G:w("u<+studentId,subjectId,subjectName(d,d?,d)>"),s:w("u<d>"),Q:w("u<pZ>"),p:w("u<c>"),r:w("k<cS>"),W:w("k<bi>"),o:w("k<ef>"),t:w("iK"),Y:w("wX"),v:w("dH<kv>"),u:w("dH<vc>"),e:w("i1<kv>"),n:w("i1<vc>"),M:w("+direction,field(kv,i5)"),f:w("+error,ready(z?,r)"),N:w("d"),g:w("ef"),w:w("ln"),x:w("i5"),B:w("dA"),O:w("b2<d>"),l:w("c"),C:w("r"),q:w("i"),k:w("lP?"),D:w("fC?"),F:w("tM?"),E:w("k<ln>?"),X:w("z?"),T:w("d?"),U:w("dA?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.UG=new A.ak(0,1200,0,1/0)
D.UH=new A.ak(0,1/0,30,1/0)
D.ab9=w([],x.P)
D.YQ=new B.tM(D.ab9,0,0)
D.a_g=new A.R(14,8,14,8)
D.a_y=new A.R(16,8,16,32)
D.a_Y=new A.R(2,16,0,8)
D.a0j=new A.R(6,2,6,2)
D.zu=new A.aE(62837,"MaterialIcons",null,!1)
D.zv=new A.aE(62846,"MaterialIcons",null,!1)
D.a25=new A.aE(983464,"MaterialIcons",null,!0)
D.oW=new B.kv("Ordine decrescente",1,"descending")
D.amm=new A.dH(D.oW,"Decrescente",0,D.zu,x.v)
D.oX=new B.kv("Ordine crescente",0,"ascending")
D.ama=new A.dH(D.oX,"Crescente",0,D.zv,x.v)
D.a50=w([D.amm,D.ama],A.a1("u<dH<kv>>"))
D.an1=new A.cT(52,22,8,!1,null)
D.ane=new A.cT(92,10,8,!1,null)
D.a5z=w([D.an1,C.ak,D.ane],x.p)
D.u8=new B.aaO(null)
D.amO=new A.cT(null,220,24,!1,null)
D.a8P=w([D.u8,C.T,D.amO,C.j2,C.uq],x.p)
D.pq=new B.vc(0,"distribution")
D.amb=new A.dH(D.pq,"Distribuzione",0,null,x.u)
D.pr=new B.vc(1,"subjects")
D.amj=new A.dH(D.pr,"Per materia",0,null,x.u)
D.a9K=w([D.amb,D.amj],A.a1("u<dH<vc>>"))
D.ac6=w([C.Rk,C.vq,C.Rl,C.vo,C.vp],A.a1("u<i5>"))
D.ajX=new A.a3(C.mq,D.u8,null)
D.akX=new A.nn("Metriche",C.dp,null,!0,!0,null,null)
D.a1Y=new A.aE(983147,"MaterialIcons",null,!1)
D.alk=new A.jO(D.a1Y,"Studente non trovato","Potrebbe non far pi\xf9 parte della classe.",null,null,null,null)
D.alu=new A.dm("Ordine",null,C.e3,!0,null)
D.alv=new A.dm("Ordina per",null,C.e3,!0,null)
D.amY=new A.cT(null,14,8,!1,null)
D.anM=new B.acv(null)
D.as0=new A.bs(D.anM,null)
D.ank=new A.cG(D.as0,720,0,0,null)
D.anN=new A.Km(D.oW,C.vq)
D.arw=new A.cx(null,40,null,null)
D.arL=new A.bs(F.Pz,null)
D.arr=new A.cx(null,32,null,null)
D.as7=new A.bs(D.arr,null)
D.ass=new B.oG("","",null,null)
D.aAg=new A.b2("distribution",x.O)
D.aAn=new A.b2("subjects",x.O)
D.aDA=new B.anX(null)
D.aEy=new B.KE(null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"coX","bXg",()=>A.aN("\\s+",!0,!1,!1))
w($,"cqa","LG",()=>C.b2.f7(0,new B.byY(),A.a1("J<fC>"),x.N))
w($,"cqe","a1q",()=>C.d2.$2$1(B.cfQ(),x.Y,x.M))
w($,"cqc","bJf",()=>C.b2.f7(0,new B.bz1(),x.E,x.N))
w($,"cqb","bXx",()=>C.b2.f7(0,new B.bz_(),x.F,x.N))
w($,"cq9","bJe",()=>C.b2.f7(0,new B.byX(),x.j,A.a1("+classId,studentId(d,d?)")))})()};
(a=>{a["BcelCsDjbZxES52an1y7U6Gr/UI="]=a.current})($__dart_deferred_initializers__);