((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bZG(d,e){return A.bZF(d,e)},
bZF(d,e){var w,v,u,t,s,r=B.B(x.N,x._)
for(w=J.af(e);w.n();){v=w.gG(w)
r.m(0,v.a,v)}w=B.a([],x.Q)
for(v=J.af(d);v.n();){u=r.i(0,v.gG(v).a)
$label0$0:{if(u!=null){t=new B.pZ(u.c,u.d,u.e,u.f)
break $label0$0}t=C.p9
break $label0$0}w.push(t)}s=B.bDj(w)
return new A.k8(s.a,s.b,s.c,s.d,s.e)},
c6L(d,e,f,g){var w,v,u,t,s,r,q=A.ccH(g),p=B.a([],x.V)
for(w=J.af(e);w.n();){v=w.gG(w)
p.push(new E.zf(v.a,v.c))}u=E.bRQ(A.cdz(f,new B.Z(B.b3(d),B.b7(d),B.b9(d))),d,p,q)
t=u.gmt()+u.gXk()
if(t===0)return D.Sg
s=C.b.gV(u.a)
r=C.b.ju(s.d,new A.b4_(),new A.b40(s))
return new A.nD(t,u.gmt(),u.gXk(),A.c6M(s.b,r,t-1))},
c6M(d,e,f){var w,v,u=C.c.jj(C.c.a2(d),B.aP("\\s+",!0,!1,!1)),t=C.b.gV(u).length===0?"Uno studente":C.b.gV(u)
if(e.b.c.j(0,e.c.c))w="ha 2 interrogazioni lo stesso giorno"
else w=e.d===0?"ha 2 interrogazioni di fila":"ha solo 1 giorno di riposo tra 2 interrogazioni"
if(f===0)return t+" "+w
v=f===1?"studente":"studenti"
return t+" "+w+" \xb7 +"+f+" "+v},
ccH(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=x.N,e=B.B(f,x.k),d=x.F,a0=B.B(f,d)
for(w=J.af(a1),v=x.r,u=x.a;w.n();){t=w.gG(w)
s=t.d
a0.bH(0,s,new A.bwl(t))
r=e.i(0,s)
if(r==null){r=B.B(f,v)
e.m(0,s,r)
s=r}else s=r
r=t.b
q=J.ah(s)
p=q.i(s,r)
if(p==null){p=B.a([],u)
q.m(s,r,p)
s=p}else s=p
J.cr(s,t)}f=B.a([],x.P)
for(w=new B.bw(e,e.$ti.h("bw<1,2>")).gW(0),v=x.s,u=x.G;w.n();){t=w.d
o=t.a
n=t.b
t=a0.i(0,o).f
s=a0.i(0,o).r
r=B.a([],u)
for(q=J.vG(n),q=q.gW(q);q.n();){p=q.gG(q)
m=p.a
l=p.b
p=J.c8(l)
k=p.gV(l).c
p=p.gV(l).x
j=B.a([],v)
i=B.a0(l,d)
C.b.cb(i,new A.bwm())
h=i.length
g=0
for(;g<i.length;i.length===h||(0,B.y)(i),++g)j.push(i[g].a)
r.push(new E.nX(m,k,j,p))}f.push(new E.EE(o,t,s,r))}return f},
cdz(d,e){var w,v,u=B.al(x.q)
for(w=J.af(d);w.n();){v=w.gG(w)
if(v.e!=null)u.B(0,v.c)}if(u.a===0)u=C.dw
w=e.a
v=B.c7(G.aWf(w),x.B)
v.J(0,G.aWf(w+1))
return G.bt3(u,v)},
cdK(d,e,f,g,h,i){if(d.gcn()&&e.gcn())return B.hB(f.$2(B.eS(d,g),B.eS(e,h)),i)
return A.bRg(B.a([d,e],x.R),i)},
cdL(d,e,f,g,h,i,j,k){if(d.gcn()&&e.gcn()&&f.gcn())return B.hB(g.$3(B.eS(d,h),B.eS(e,i),B.eS(f,j)),k)
return A.bRg(B.a([d,e,f],x.R),k)},
bRg(d,e){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.y)(d),++v){u=d[v]
if(u.gbh(u)!=null&&!u.gcn()){w=u.gbh(u)
w.toString
t=u.gfY()
if(t==null)t=B.pW()
return new B.ea(!1,!1,null,w,t,e.h("ea<0>"))}}return B.mO(e)},
Lr(d,e,f){var w=d.gcn()?e.$1(B.eS(d,f)):null
return new B.aqh(d.gbh(d)!=null&&!d.gcn(),w)},
bzW(d,e,f){return A.cgO(d,e,f)},
cgO(d,e,f){var w=0,v=B.o(x.X),u,t,s,r,q,p,o,n,m,l,k
var $async$bzW=B.p(function(g,h){if(g===1)return B.l(h,v)
for(;;)switch(w){case 0:l={}
k=d.M(0,$.bY(),x.S).$0()
k=B.a([$.ej().$1(e),$.qq().$1(e),$.ta().$1(e),$.LI().$1(e),$.fn().$1(e),$.j5().$1(e),$.kI().$1(new B.iG(e,new B.Z(B.b3(k),B.b7(k),B.b9(k))))],x.j)
if(f)k.push($.a1x())
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.y)(k),++s){r=k[s]
if(d.e==null)B.Q(B.X(y.b))
q=d.ak;(q===$?d.ak=B.ji(d,!0):q).c7(r)}l.a=null
p=new A.bzY(l)
t=B.a([d.M(0,$.ek().gb5(),x.J).jc().fc(p)],x.Y)
for(o=k.length,n=x.H,s=0;s<k.length;k.length===o||(0,B.y)(k),++s){m=k[s].gdq()
if(d.e==null)B.Q(B.X(y.b))
t.push(m.hC(0,B.ji(d,!1)).dj(new A.bzX(),p,n))}w=3
return B.h(B.dv(t,n),$async$bzW)
case 3:u=l.a
w=1
break
case 1:return B.m(u,v)}})
return B.n($async$bzW,v)},
k8:function k8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
nD:function nD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4_:function b4_(){},
b40:function b40(d){this.a=d},
bwl:function bwl(d){this.a=d},
bwm:function bwm(){},
byg:function byg(){},
byi:function byi(){},
byh:function byh(d){this.a=d},
bzY:function bzY(d){this.a=d},
bzX:function bzX(){},
bZv(){return new A.zL(null)},
zL:function zL(d){this.a=d},
amN:function amN(d,e){this.e=d
this.a=e},
bg2:function bg2(d,e,f){this.a=d
this.b=e
this.c=f},
auX:function auX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a7S:function a7S(d,e){this.e=d
this.a=e},
aK5:function aK5(){},
aK4:function aK4(d){this.a=d},
anf:function anf(d,e){this.c=d
this.a=e},
bhd:function bhd(d){this.a=d},
auu:function auu(d,e){this.c=d
this.a=e},
brV:function brV(d){this.a=d},
a3m:function a3m(d,e,f){this.c=d
this.d=e
this.a=f},
aBY:function aBY(d,e){this.a=d
this.b=e},
aBX:function aBX(d,e){this.a=d
this.b=e},
aBW:function aBW(d,e){this.a=d
this.b=e},
bLK(d,e){return new A.G4(e,d,null)},
G4:function G4(d,e,f){this.c=d
this.d=e
this.a=f},
a7T:function a7T(d,e){this.e=d
this.a=e},
aK6:function aK6(d,e){this.a=d
this.b=e},
Xm:function Xm(d,e){this.c=d
this.a=e},
bhx:function bhx(d,e){this.a=d
this.b=e},
bhw:function bhw(d,e){this.a=d
this.b=e},
bho:function bho(){},
bhp:function bhp(){},
bhq:function bhq(){},
bhr:function bhr(){},
bhs:function bhs(){},
bht:function bht(){},
bhu:function bhu(){},
bhv:function bhv(){},
bhn:function bhn(d){this.a=d},
yz:function yz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_m(d,e){var w,v
$label0$0:{w=d.b
if(w!=null){v=e.$1(w==null?B.fk(w):w)
break $label0$0}if(w==null&&d.a){v="\u2014"
break $label0$0}v=null
break $label0$0}return v},
a7U:function a7U(d,e){this.c=d
this.a=e},
aK7:function aK7(d,e){this.a=d
this.b=e},
au0:function au0(d,e,f){this.e=d
this.f=e
this.a=f},
bqM:function bqM(d){this.a=d},
bqL:function bqL(d){this.a=d},
bqE:function bqE(d){this.a=d},
bqN:function bqN(){},
bqO:function bqO(){},
bqK:function bqK(){},
bqD:function bqD(){},
bqR:function bqR(){},
bqS:function bqS(){},
bqJ:function bqJ(){},
bqT:function bqT(){},
bqI:function bqI(){},
bqU:function bqU(d){this.a=d},
bqV:function bqV(){},
bqH:function bqH(){},
bqW:function bqW(){},
bqX:function bqX(){},
bqG:function bqG(){},
bqY:function bqY(){},
bqP:function bqP(){},
bqF:function bqF(){},
bqQ:function bqQ(){},
bqZ:function bqZ(d,e){this.a=d
this.b=e}},H,D,E,F,I,K,G,L
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
H=c[28]
D=c[29]
E=c[20]
F=c[31]
I=c[15]
K=c[30]
G=c[24]
L=c[32]
A.k8.prototype={
j(d,e){var w=this
if(e==null)return!1
return e instanceof A.k8&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d===w.d&&e.e===w.e},
gu(d){var w=this
return B.L(w.a,w.b,w.c,w.d,w.e,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.nD.prototype={
gaM8(d){var w,v=this.b,u=this.c
$label0$0:{if(1===v){w="1 critico"
break $label0$0}if(v>1){w=""+v+" critici"
break $label0$0}if(1===u){w="1 attenzione"
break $label0$0}if(u>1){w=""+u+" attenzioni"
break $label0$0}w="Nessun problema"
break $label0$0}return w},
j(d,e){var w=this
if(e==null)return!1
return e instanceof A.nD&&e.a===w.a&&e.b===w.b&&e.c===w.c&&e.d==w.d},
gu(d){var w=this
return B.L(w.a,w.b,w.c,w.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.zL.prototype={
bF(d,e){var w=null,v=e.H($.k3(),x.I)
if(v==null)return H.Q5
return B.ep(w,new A.amN(v,w),w,!1,w,w)}}
A.amN.prototype={
gaAV(){var w,v=this.e.b,u=C.c.ey(v," \xb7 ")
if(u<=0)return new B.a5(v,null)
w=C.c.a2(C.c.bT(v,u+3))
v=C.c.a2(C.c.a6(v,0,u))
return new B.a5(v,w.length===0?null:w)},
F9(d,e){return this.aF_(d,e)},
aF_(d,e){var w=0,v=B.o(x.H),u,t=this,s,r,q
var $async$F9=B.p(function(f,g){if(f===1)return B.l(g,v)
for(;;)switch(w){case 0:s=t.e
r=s.d&&s.f
w=3
return B.h(A.bzW(e,s.a,r),$async$F9)
case 3:q=g
if(d.e==null){w=1
break}s=q==null
r=s?"Dati aggiornati":B.bt(q,null).a
B.b6(d,r,"Annulla",C.A,s?C.aG:C.ez,null)
case 1:return B.m(u,v)}})
return B.n($async$F9,v)},
bF(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m="Super admin",l="Rappresentante",k=o.gaAV(),j=k.a,i=k.b
if(i==null){w=o.e
v=w.f||w.r?m:l}else{w=o.e
v=(w.f||w.r?m:l)+" \xb7 "+i}u=x.m
t=B.ox(B.by(d,C.bm,u).w.a.a)!==C.kL
s=t?0:12
r=new A.a3m(w.c,s,n)
s=t?0:B.by(d,C.bF,u).w.r.b+56
q=x.p
p=B.a([],q)
if(t)p.push(new B.cE(new B.br(new A.auX(j,v,r,n),n),1040,B.by(d,C.bF,u).w.r.b+24,12,n))
else p.push(B.bNj(B.a([r],q),v,j))
u=w.a
p.push(new B.cE(new B.br(B.a3(B.a([new A.a7S(u,n),new A.a7T(u,n),new A.a7U(w,n)],q),C.o,n,C.d,C.e,0),n),1040,4,32,n))
return B.jj(B.hG(n,C.b7,n,p),s,new A.bg2(o,d,e))}}
A.auX.prototype={
q(d){var w=null,v=x.p
return B.a9(B.a([B.aq(B.a7(w,w,B.a3(B.a([new B.dO(this.d,w,C.V,!1,w),C.b5,B.w(this.c,1,C.q,w,C.dY.N(B.K(d).z),w,w,w)],v),C.y,w,C.d,C.e,0),!1,w,w,w,w,!1,w,!1,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,C.j,w),1,w),this.e],v),C.ev,C.d,C.e,0,w)}}
A.a7S.prototype={
bF(d,e){var w,v,u,t=null,s=this.e,r=e.H($.ta().$1(s),x.b),q=e.H($.bJ7().$1(s),x.y),p=B.aE(r)
if(p==null)p=C.tF
w=B.aE(q)
if(w==null)w=D.Sg
s=new A.aK5()
v=B.a([],x.p)
if(J.fU(p))v.push(new A.anf(p,t))
if(w.a>0)v.push(new A.auu(w,t))
if(v.length===0)u=s.$1(r)||s.$1(q)?D.ak9:C.p4
else u=new B.a4(C.dH,B.il(new A.aK4(v)),t)
s=B.aT(d,C.I)
s=s==null?t:s.ax
return B.qu(C.bG,u,C.a0,s===!0?C.v:C.r)}}
A.anf.prototype={
q(d){var w=null,v=B.K(d),u=this.c,t=J.ah(u),s=t.gv(u),r=new A.bhd(d),q=B.a([],x.s)
for(u=t.gW(u);u.n();)q.push(u.gG(u).d)
u=B.acb(3,w,q,v.dx)
t=s===1?"1 richiesta":""+s+" richieste"
q=x.p
return B.d5(B.a9(B.a([u,C.aJ,B.aq(B.a3(B.a([B.w(t,w,w,w,B.bl(C.cA,800),w,w,w),B.w("di accesso alla classe",w,w,w,C.u.N(v.dy.c9(0.8)),w,w,w)],q),C.y,w,C.d,C.D,0),1,w),C.aJ,B.b4(w,!1,w,"Rivedi",!1,r,"Rivedi le richieste di accesso",C.Z,C.aa)],q),C.i,C.d,C.e,0,w),!1,r,C.a4,w,C.ur)}}
A.auu.prototype={
q(d){var w,v=null,u=B.K(d),t=this.c,s=t.d,r=u.k3,q=B.b0(C.kb,r,v,22)
t=t.a
t=t===1?"1 problema nei turni":""+t+" problemi nei turni"
w=x.p
t=B.a([B.w(t,v,v,v,B.bl(C.cA,800).N(r),v,v,v)],w)
if(s!=null)t.push(B.w(s,v,v,v,C.u.N(r),v,v,v))
return B.a7(!0,v,B.cS(!1,C.r,!0,v,B.e4(!1,v,!0,new B.ct(C.wP,new B.a4(C.a4,B.a9(B.a([q,C.aJ,B.aq(B.a3(t,C.y,v,C.d,C.D,0),1,v),C.ab,B.b0(C.cT,r,v,v)],w),C.i,C.d,C.e,0,v),v),v),v,!0,v,v,v,v,v,v,v,v,new A.brV(d),v,v,v,v),C.bV,u.k2,0,v,v,C.oE,v,v,C.aW),!0,v,v,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.j,v)}}
A.a3m.prototype={
vA(d){return this.arU(d)},
arU(d){var w=0,v=B.o(x.H),u,t=this
var $async$vA=B.p(function(e,f){if(e===1)return B.l(f,v)
for(;;)switch(w){case 0:w=3
return B.h(B.lT(new B.k9(t.c)),$async$vA)
case 3:if(d.e==null){w=1
break}B.i1()
B.b6(d,"Codice copiato","Annulla",C.A,C.aG,null)
case 1:return B.m(u,v)}})
return B.n($async$vA,v)},
q(d){var w=this,v=null,u=B.K(d),t=w.c,s=u.ch
return new B.a4(new B.eG(0,0,w.d,0),B.a7(!0,v,B.Us(B.Rw(B.cS(!1,C.r,!0,v,B.e4(!1,v,!0,new B.ct(K.wS,new B.a4(C.f9,B.a9(B.a([B.b0(C.eA,s,v,16),C.aP,B.w(t,1,v,v,B.nm(C.dh).Te(s,1),v,v,v)],x.p),C.i,C.d,C.D,0,v),v),v),C.eh,!0,v,v,v,v,v,v,v,v,new A.aBW(w,d),v,v,v,v),C.p,u.ay,0,v,v,C.eh,v,v,C.aW),new A.aBX(w,d)),v,"Copia il codice",v,v),!0,v,v,v,v,!0,v,!1,v,v,v,v,v,v,v,v,v,"Codice classe "+t+", tocca per copiarlo",v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.aBY(w,d),v,v,v,v,v,v,v,v,v,C.j,v),v)}}
A.G4.prototype={
q(d){var w,v,u,t,s,r,q=null,p=x.p,o=B.a([],p)
for(w=this.d,v=this.c,u=0;u<w.length;u=s){t=B.a([],p)
for(s=u+v,r=u;r<s;++r)t.push(new B.e3(1,C.at,r<w.length?w[r]:C.a6,q))
o.push(new B.u4(B.a9(t,C.o,C.d,C.e,10,q),q))}return B.a3(o,C.o,q,C.d,C.e,10)}}
A.a7T.prototype={
bF(d,e){var w,v=null,u=B.K(d),t=e.H($.bJ6().$1(this.e),x.h),s=B.aE(t)
if(s!=null)w=new A.Xm(s,v)
else w=t.gbh(t)!=null?B.d5(B.fO(t.gbh(t),v,new A.aK6(this,e),"Panoramica non disponibile"),!1,v,C.V,v,C.aV):D.aDI
return B.a3(B.a([B.C5(v,v,!1,D.a00,"Panoramica",B.w("in totale",v,v,v,C.u.N(u.as),v,v,v)),w],x.p),C.o,v,C.d,C.e,0)}}
A.Xm.prototype={
q(d){var w=null,v=B.K(d),u=this.c,t=u==null,s=t?w:new B.lO(u.a,u.b,u.c,u.d,u.e),r=!t&&u.b<=0,q=new A.bhx(s,r),p=new A.bhw(s,r),o=B.il(new A.bhn(B.a([new A.yz("Presenti al turno",q.$1(new A.bho()),p.$1(new A.bhp()),v.fr,t,w),new A.yz("Prime posizioni",q.$1(new A.bhq()),p.$1(new A.bhr()),v.at,t,w),new A.yz("Ripianificazioni",q.$1(new A.bhs()),p.$1(new A.bht()),v.id,t,w),new A.yz("Assenze",q.$1(new A.bhu()),p.$1(new A.bhv()),v.k4,t,w)],x.Z)))
if(!r)return t?new B.jk(o,w):o
return B.a3(B.a([o,new B.a4(D.a0h,B.w("Nessuna interrogazione ancora: i dati arrivano con il primo turno generato.",w,w,w,C.x.N(v.Q),w,w,w),w)],x.p),C.o,w,C.d,C.e,0)}}
A.yz.prototype={
q(d){var w=this,v=null,u=B.K(d),t=w.r,s=w.c,r=t?s+": caricamento":s+": "+w.d,q=B.a([],x.p)
if(t)q.push(D.aki)
else q.push(B.w(w.d,1,v,v,C.hB.bs(u.z,24),v,v,v))
q.push(C.bL)
q.push(B.w(s,2,v,v,B.bl(C.u,700).bs(u.Q,12),v,v,v))
q.push(C.ai)
q.push(B.acm(w.f,6,v,w.e))
return B.a7(v,v,B.dK(new B.a4(D.a_d,B.a3(q,C.y,v,C.hk,C.e,0),v),new B.aL(u.e,v,v,C.fK,u.rx,v,C.z),C.ah),!0,v,v,v,v,!0,v,!1,v,v,v,v,v,v,v,v,v,r,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,C.j,v)}}
A.a7U.prototype={
q(d){var w,v,u,t,s,r=B.a([],x.M)
for(w=this.c,v=w.f,u=0;u<9;++u){t=C.Eq[u]
s=!1
if(t!==C.lS)if(w.d)s=t!==C.jA||v
if(s)r.push(t)}return B.a3(B.a([D.amj,B.il(new A.aK7(this,r))],x.p),C.o,null,C.d,C.e,0)}}
A.au0.prototype={
aJ_(d){var w,v=this.e
$label0$0:{if(C.qt===v){w=new B.a5(d.ay,d.ch)
break $label0$0}if(C.lT===v){w=new B.a5(d.dx,d.dy)
break $label0$0}if(C.qs===v){w=new B.a5(d.k2,d.k3)
break $label0$0}if(C.lU===v){w=new B.a5(d.r,d.Q)
break $label0$0}w=new B.a5(d.CW,d.cx)
break $label0$0}return w},
aHS(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
switch(n.e.a){case 1:w=d.M(0,$.bY(),x.S).$0()
v=$.LI().$1(n.f)
return new B.oW(0,A.a_m(d.H(new B.b_(v,new A.bqM(w),v.$ti.h("b_<bq.0,+failed,value(q,i?)>")),x.W),new A.bqN()))
case 2:v=$.fn().$1(n.f)
return new B.oW(0,A.a_m(d.H(new B.b_(v,new A.bqO(),v.$ti.h("b_<bq.0,+failed,value(q,i?)>")),x.W),new A.bqR()))
case 3:v=n.f
u=$.ej().$1(v)
t=x.W
s=d.H(new B.b_(u,new A.bqS(),u.$ti.h("b_<bq.0,+failed,value(q,i?)>")),t)
v=$.ta().$1(v)
r=d.H(new B.b_(v,new A.bqT(),v.$ti.h("b_<bq.0,+failed,value(q,i?)>")),t).b
if(r==null)r=0
return new B.oW(r,A.a_m(s,new A.bqU(r)))
case 4:v=$.j5().$1(n.f)
return new B.oW(0,A.a_m(d.H(new B.b_(v,new A.bqV(),v.$ti.h("b_<bq.0,+failed,value(q,i?)>")),x.W),new A.bqW()))
case 5:q=d.H($.bJ7().$1(n.f),x.y)
$label2$3:{p=B.aE(q)
v=p
if(v!=null){v=(p==null?x.E.a(p):p).gaM8(0)
break $label2$3}if(q.gbh(q)!=null){v="\u2014"
break $label2$3}v=m
break $label2$3}return new B.oW(0,v)
case 6:v=$.bJ6().$1(n.f)
return new B.oW(0,A.a_m(d.H(new B.b_(v,new A.bqX(),v.$ti.h("b_<bq.0,+failed,value(q,i?)>")),x.W),new A.bqY()))
case 7:v=$.a1x()
o=d.H(new B.b_(v,new A.bqP(),v.$ti.h("b_<bq.0,+failed,value(q,i?)>")),x.W)
v=A.a_m(o,new A.bqQ())
u=o.b
return new B.oW(u==null?0:u,v)
case 8:return new B.oW(0,"Accessi e attivit\xe0")
case 0:return new B.oW(0,m)}},
bF(d,e){var w=this,v=null,u=B.K(d),t=w.aHS(e),s=t.b,r=t.a,q=w.aJ_(u),p=new A.bqZ(w,d),o=s==null,n=w.e,m=n.c,l=o?m:m+", "+s,k=B.ht(q.a,q.b,n.d,C.kI,40,v,v)
n=n===C.lU?"Registro":m
m=x.p
n=B.a([k,C.a_,B.w(n,2,C.q,v,C.lk.N(u.z),v,v,v),C.bL],m)
if(o)n.push(D.aka)
else n.push(B.w(s,2,C.q,v,B.bl(C.u,600).bs(u.as,12),v,v,v))
o=B.a([B.a3(n,C.y,v,C.d,C.D,0)],m)
if(r>0)o.push(B.aRg(v,B.acd(v,r,!1,v),-2,v,-2,v))
return B.a7(!0,v,B.d5(B.fP(C.bv,o,C.p,C.bj,v),!1,p,C.i5,v,C.dA),!0,v,v,v,v,!0,v,!1,v,v,v,v,v,v,v,v,v,l,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,p,v,v,v,v,v,v,v,v,v,C.j,v)}}
var z=a.updateTypes(["G4(C,ai)","q(iv)","iv()","J<k8>(cy<J<k8>>,d)","J<nD>(cy<J<nD>>,d)","nD(k<cQ>,k<bj>,k<cX>)","+failed,value(q,i?)(J<k8>)","i(k8)","k8(k<bj>,k<eh>)"])
A.b4_.prototype={
$1(d){return(d.b.c.j(0,d.c.c)||d.d===0?F.cU:F.fe)===F.cU},
$S:z+1}
A.b40.prototype={
$0(){return C.b.gV(this.a.d)},
$S:z+2}
A.bwl.prototype={
$0(){return this.a},
$S:351}
A.bwm.prototype={
$2(d,e){return C.h.a3(d.w,e.w)},
$S:184}
A.byg.prototype={
$2(d,e){return A.cdK(d.H($.ej().$1(e),x.w),d.H($.qq().$1(e),x.U),A.cdB(),x.O,x.l,x.v)},
$S:z+3}
A.byi.prototype={
$2(d,e){var w=d.M(0,$.bY(),x.S).$0()
return A.cdL(d.H($.kI().$1(new B.iG(e,new B.Z(B.b3(w),B.b7(w),B.b9(w)))),x.D),d.H($.ej().$1(e),x.w),d.H($.fn().$1(e),x.A),new A.byh(w),x.r,x.O,x.d,x.E)},
$S:z+4}
A.byh.prototype={
$3(d,e,f){return A.c6L(this.a,e,f,d)},
$S:z+5}
A.bzY.prototype={
$1(d){var w=this.a
if(w.a==null)w.a=d},
$S:80}
A.bzX.prototype={
$1(d){},
$S:72}
A.bg2.prototype={
$0(){return this.a.F9(this.b,this.c)},
$S:2}
A.aK5.prototype={
$1(d){return!d.gcn()&&d.gbh(d)==null},
$S:79}
A.aK4.prototype={
$2(d,e){var w,v,u,t,s=null
if(e.b>=600&&this.a.length>1){w=B.a([],x.p)
for(v=this.a,u=v.length,t=0;t<v.length;v.length===u||(0,B.y)(v),++t)w.push(new B.e3(1,C.at,v[t],s))
w=new B.u4(B.a9(w,C.o,C.d,C.e,12,s),s)}else w=B.a3(this.a,C.o,s,C.d,C.e,10)
return w},
$S:1152}
A.bhd.prototype={
$0(){return B.fJ(this.a,"/classe/gestione?tab=2",x.X)},
$S:0}
A.brV.prototype={
$0(){return B.fJ(this.a,"/classe/analisi",x.X)},
$S:0}
A.aBY.prototype={
$0(){return this.a.vA(this.b)},
$S:0}
A.aBX.prototype={
$0(){return this.a.vA(this.b)},
$S:0}
A.aBW.prototype={
$0(){return this.a.vA(this.b)},
$S:0}
A.aK6.prototype={
$0(){var w=y.b,v=this.b,u=this.a.e,t=$.qq().$1(u)
if(v.e==null)B.Q(B.X(w))
v.gcG().c7(t)
u=$.ej().$1(u)
if(v.e==null)B.Q(B.X(w))
v.gcG().c7(u)},
$S:0}
A.bhx.prototype={
$1(d){var w=this.a
if(w==null||this.b)w="\u2014"
else{w=C.f.aF(d.$1(w),1)
w=B.bJ(w,".",",")+"%"}return w},
$S:1153}
A.bhw.prototype={
$1(d){var w=this.a
return w==null||this.b?0:d.$1(w)/100},
$S:1154}
A.bho.prototype={
$1(d){var w=d.b
return 100-(w===0?0:d.e/w*100)},
$S:63}
A.bhp.prototype={
$1(d){var w=d.b
return 100-(w===0?0:d.e/w*100)},
$S:63}
A.bhq.prototype={
$1(d){var w=d.b
return w===0?0:d.c/w*100},
$S:63}
A.bhr.prototype={
$1(d){var w=d.b
return w===0?0:d.c/w*100},
$S:63}
A.bhs.prototype={
$1(d){var w=d.b
return w===0?0:d.d/w*100},
$S:63}
A.bht.prototype={
$1(d){var w=d.b
return w===0?0:d.d/w*100},
$S:63}
A.bhu.prototype={
$1(d){var w=d.b
return w===0?0:d.e/w*100},
$S:63}
A.bhv.prototype={
$1(d){var w=d.b
return w===0?0:d.e/w*100},
$S:63}
A.bhn.prototype={
$2(d,e){var w=e.b>=560?4:2
return A.bLK(this.a,w)},
$S:z+0}
A.aK7.prototype={
$2(d,e){var w,v,u,t,s,r=C.h.bU(C.f.eI(e.b/160),2,4),q=B.a([],x.p)
for(w=B.qS(this.b,0,x.T),v=J.af(w.a),u=w.b,w=new B.fK(v,u,B.r(w).h("fK<1>")),t=this.a.c.a;w.n();){s=w.c
s=s>=0?new B.a5(u+s,v.gG(v)):B.Q(B.cm())
q.push(new B.ot(new A.au0(s.b,t,null),s.a,12,null))}return A.bLK(q,r)},
$S:z+0}
A.bqM.prototype={
$1(d){return A.Lr(d,new A.bqL(this.a),x.z)},
$S:1156}
A.bqL.prototype={
$1(d){return J.nR(d,new A.bqE(this.a)).gv(0)},
$S:1157}
A.bqE.prototype={
$1(d){var w,v,u,t=B.a([],x.u)
for(w=d.b,v=w.length,u=0;u<w.length;w.length===v||(0,B.y)(w),++u)t.push(w[u].b)
return!I.bSB(t,this.a)},
$S:1158}
A.bqN.prototype={
$1(d){var w
$label0$1:{if(0===d){w="Nessun turno attivo"
break $label0$1}if(1===d){w="1 attivo"
break $label0$1}w=""+d+" attivi"
break $label0$1}return w},
$S:44}
A.bqO.prototype={
$1(d){return A.Lr(d,new A.bqK(),x.d)},
$S:1159}
A.bqK.prototype={
$1(d){return J.nR(d,new A.bqD()).gv(0)},
$S:1160}
A.bqD.prototype={
$1(d){return d.e!=null},
$S:1161}
A.bqR.prototype={
$1(d){var w
$label1$2:{if(0===d){w="Da impostare"
break $label1$2}if(1===d){w="1 ora a settimana"
break $label1$2}w=""+d+" ore a settimana"
break $label1$2}return w},
$S:44}
A.bqS.prototype={
$1(d){return A.Lr(d,new A.bqJ(),x.O)},
$S:1162}
A.bqJ.prototype={
$1(d){return J.bm(d)},
$S:1163}
A.bqT.prototype={
$1(d){return A.Lr(d,new A.bqI(),x.C)},
$S:1164}
A.bqI.prototype={
$1(d){return J.bm(d)},
$S:1165}
A.bqU.prototype={
$1(d){var w=this.a,v=""+d
return w>0?v+" \xb7 "+w+" in attesa":v},
$S:44}
A.bqV.prototype={
$1(d){return A.Lr(d,new A.bqH(),x.L)},
$S:1166}
A.bqH.prototype={
$1(d){return J.bm(d)},
$S:1167}
A.bqW.prototype={
$1(d){return d===0?"Nessuna materia":""+d},
$S:44}
A.bqX.prototype={
$1(d){return A.Lr(d,new A.bqG(),x.v)},
$S:z+6}
A.bqG.prototype={
$1(d){return d.b},
$S:z+7}
A.bqY.prototype={
$1(d){return d===1?"1 interrogazione":""+d+" interrogazioni"},
$S:44}
A.bqP.prototype={
$1(d){return A.Lr(d,new A.bqF(),x.q)},
$S:1168}
A.bqF.prototype={
$1(d){return d},
$S:54}
A.bqQ.prototype={
$1(d){return d===0?"Tutto risposto":""+d+" da rispondere"},
$S:44}
A.bqZ.prototype={
$0(){return B.fJ(this.b,this.a.e.gpr(0),x.X)},
$S:0};(function installTearOffs(){var w=a._static_2
w(A,"cdB","bZG",8)})();(function inheritance(){var w=a.inheritMany
w(B.A,[A.k8,A.nD])
w(B.h8,[A.b4_,A.byh,A.bzY,A.bzX,A.aK5,A.bhx,A.bhw,A.bho,A.bhp,A.bhq,A.bhr,A.bhs,A.bht,A.bhu,A.bhv,A.bqM,A.bqL,A.bqE,A.bqN,A.bqO,A.bqK,A.bqD,A.bqR,A.bqS,A.bqJ,A.bqT,A.bqI,A.bqU,A.bqV,A.bqH,A.bqW,A.bqX,A.bqG,A.bqY,A.bqP,A.bqF,A.bqQ])
w(B.jI,[A.b40,A.bwl,A.bg2,A.bhd,A.brV,A.aBY,A.aBX,A.aBW,A.aK6,A.bqZ])
w(B.jJ,[A.bwm,A.byg,A.byi,A.aK4,A.bhn,A.aK7])
w(B.o5,[A.zL,A.amN,A.a7S,A.a7T,A.au0])
w(B.D,[A.auX,A.anf,A.auu,A.a3m,A.G4,A.Xm,A.yz,A.a7U])})()
B.lD(b.typeUniverse,JSON.parse('{"zL":{"I":[],"c":[]},"amN":{"I":[],"c":[]},"auX":{"D":[],"c":[]},"a7S":{"I":[],"c":[]},"anf":{"D":[],"c":[]},"auu":{"D":[],"c":[]},"a3m":{"D":[],"c":[]},"G4":{"D":[],"c":[]},"yz":{"D":[],"c":[]},"a7T":{"I":[],"c":[]},"Xm":{"D":[],"c":[]},"a7U":{"D":[],"c":[]},"au0":{"I":[],"c":[]}}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.a1
return{h:w("J<k8>"),D:w("J<k<cQ>>"),b:w("J<k<cn>>"),w:w("J<k<bj>>"),U:w("J<k<eh>>"),A:w("J<k<cX>>"),y:w("J<nD>"),T:w("k7"),v:w("k8"),B:w("Z"),S:w("bZ()"),F:w("cQ"),G:w("u<nX>"),V:w("u<zf>"),P:w("u<EE>"),R:w("u<J<A?>>"),j:w("u<iD<A?>>"),M:w("u<k7>"),u:w("u<Z>"),Y:w("u<H<~>>"),a:w("u<cQ>"),s:w("u<d>"),Q:w("u<pZ>"),p:w("u<c>"),Z:w("u<yz>"),r:w("k<cQ>"),C:w("k<cn>"),O:w("k<bj>"),l:w("k<eh>"),L:w("k<bC>"),d:w("k<cX>"),z:w("k<fw>"),k:w("a8<d,k<cQ>>"),m:w("iK"),W:w("+failed,value(q,i?)"),J:w("rm"),N:w("d"),_:w("eh"),E:w("nD"),q:w("i"),I:w("hY?"),X:w("A?"),H:w("~")}})();(function constants(){D.a_d=new B.O(14,12,14,14)
D.a00=new B.O(2,12,2,10)
D.a0h=new B.O(4,10,4,0)
D.and=new B.cT(null,64,24,!1,null)
D.ak9=new B.a4(C.dH,D.and,null)
D.ZM=new B.O(0,3,0,2)
D.aka=new B.a4(D.ZM,C.PE,null)
D.an5=new B.cT(56,20,8,!1,null)
D.aki=new B.a4(L.jT,D.an5,null)
D.amj=new B.xl("Strumenti",null,null,null,!1,null,null)
D.Sg=new A.nD(0,0,0,null)
D.aDI=new A.Xm(null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cq4","bJ6",()=>C.b0.eR(0,new A.byg(),x.h,x.N))
w($,"cq5","bJ7",()=>C.b0.eR(0,new A.byi(),x.y,x.N))})()};
(a=>{a["EnO+bhlKdSVS4xGrve5ithi55Uw="]=a.current})($__dart_deferred_initializers__);