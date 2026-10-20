((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,G,H,E,I,B={Md:function Md(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bYM(){return new B.vU()},
Mc:function Mc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p7:function p7(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
bwl:function bwl(){},
vU:function vU(){this.c=0
this.d=!1
this.a=$},
azf:function azf(d){this.a=d},
azg:function azg(){},
azi:function azi(d){this.a=d},
azh:function azh(){},
bYN(){return new B.vW(null)},
vW:function vW(d){this.a=d},
V6:function V6(d,e,f){var _=this
_.w=d
_.x=e
_.z=_.y=null
_.Q=f
_.d=$
_.c=_.a=null},
b6o:function b6o(d,e){this.a=d
this.b=e},
b6q:function b6q(){},
b6r:function b6r(d){this.a=d},
b6p:function b6p(d){this.a=d},
b6s:function b6s(d){this.a=d},
b6t:function b6t(d,e){this.a=d
this.b=e},
b6u:function b6u(d,e){this.a=d
this.b=e},
b6n:function b6n(d){this.a=d},
cf0(d){var w,v,u,t,s,r,q,p,o=A.a([],x.F)
for(w=d.length,v=x.C,u=0;u<w;++u){t=d[u]
s=t.e.t1()
r=A.al(s)
q=A.am(s)
s=A.aB(s)
if(o.length!==0){p=C.b.ga3(o).a
p=!(r===p.a&&q===p.b&&s===p.c)}else p=!0
if(p)o.push(new A.aq4(new A.a2(r,q,s),A.a([],v)))
C.b.ga3(o).b.push(t)}return o},
ccB(d,e){var w
$label0$0:{if("app_open"===e){w=new A.qg(d.ax,d.ay,C.tc)
break $label0$0}if("tab_oggi"===e){w=new A.qg(d.ch,d.CW,D.a29)
break $label0$0}if("tab_agenda"===e){w=new A.qg(d.ch,d.CW,C.td)
break $label0$0}if("tab_turni"===e){w=new A.qg(d.db,d.dx,C.zP)
break $label0$0}if("tab_classe"===e){w=new A.qg(d.ch,d.CW,C.k9)
break $label0$0}if("tab_profilo"===e){w=new A.qg(d.ch,d.CW,C.t9)
break $label0$0}w=C.b.n(D.a8s,e)
if(w){w=new A.qg(d.f,d.z,C.k7)
break $label0$0}w=new A.qg(d.f,d.z,D.a1H)
break $label0$0}return w},
ccA(d){var w=d.f,v=w==null?null:C.c.a1(w)
if(v!=null&&v.length!==0)return v
return d.c==null?"Utente non connesso":"Studente sconosciuto"},
EH:function EH(d,e){this.c=d
this.a=e},
c5c(d){var w,v=C.c.a1(d),u=C.c.jw(v,A.aN("\\s+",!0,!1,!1))
if(u.length<2)return v
w=C.b.ga3(u)
return C.b.gV(u)+" "+A.dY(new A.pP(w).gV(0))+"."},
a23:function a23(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
aza:function aza(d){this.a=d},
azb:function azb(d,e){this.a=d
this.b=e},
azc:function azc(d,e){this.a=d
this.b=e},
aze:function aze(){},
azd:function azd(d){this.a=d},
af8:function af8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZP:function aZP(d){this.a=d},
che(d){return A.ic(d,new B.bAB(),null,"Pulisci registro",x.a)},
cdG(d,e,f){var w
switch(e.a){case 0:w=A.k2(d,"Annulla","Elimina",!0,"Restano solo gli eventi di oggi e di ieri. L'operazione non pu\xf2 essere annullata.","Eliminare i log vecchi?")
break
case 1:if(f==null)w="Eliminare tutti gli eventi della classe?"
else w=f===1?"Eliminare 1 evento?":"Eliminare "+E.a0S(f)+" eventi?"
w=A.k2(d,"Annulla","Elimina",!0,"L'operazione non pu\xf2 essere annullata.",w)
break
default:w=null}return w},
cdw(d,e,f){var w,v=e===0
if(v)w=(f==null?0:f)>0
else w=!1
if(w)return"Nessun evento eliminato: potresti non avere i permessi."
switch(d.a){case 0:if(v)v="Nessun evento vecchio da eliminare"
else v=e===1?"Eliminato 1 evento vecchio":"Eliminati "+E.a0S(e)+" eventi vecchi"
break
case 1:v=v?"Il registro era gi\xe0 vuoto":"Registro svuotato"
break
default:v=null}return v},
Or:function Or(d,e){this.a=d
this.b=e},
bAB:function bAB(){},
bAz:function bAz(d){this.a=d},
bAA:function bAA(d){this.a=d},
chj(d,e,f){return A.z2(d,new B.bAX(e,f),!0,0.6,"Filtra per studente",x.c)},
bAX:function bAX(d,e){this.a=d
this.b=e},
E2:function E2(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
asK:function asK(){var _=this
_.w=""
_.d=$
_.c=_.a=null},
bom:function bom(d){this.a=d},
bol:function bol(d,e){this.a=d
this.b=e},
bon:function bon(d){this.a=d},
boo:function boo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
boj:function boj(d){this.a=d},
bok:function bok(d,e){this.a=d
this.b=e},
Z9:function Z9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ce3(d,e){var w,v
if(d.j(0,e))return"Oggi"
if(d.j(0,e.bQ(-1)))return"Ieri"
w=A.kk(d)
v=d.a
return v===e.a?w:w+" "+v}},D
J=c[1]
A=c[0]
C=c[2]
F=c[24]
G=c[14]
H=c[20]
E=c[13]
I=c[27]
B=a.updateHolder(c[12],B)
D=c[26]
B.Md.prototype={
j(d,e){var w,v=this
if(e==null)return!1
w=!1
if(e instanceof B.Md)if(e.a===v.a)if(e.b==v.b)if(e.c==v.c)if(e.d==v.d)w=e.e===v.e
return w},
gu(d){var w=this
return A.K(w.a,w.b,w.c,w.d,w.e,40,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){return"AppEventsQuery("+this.a+", "+A.t(this.b)+", "+this.e+"+40)"}}
B.Mc.prototype={
U9(d,e,f,g){var w=this,v=e===C.bh?w.a:A.bN(e),u=d===C.bh?w.b:A.bN(d),t=g===C.bh?w.c:A.bN(g)
return new B.Mc(v,u,t,f==null?w.d:f)},
abq(d,e){return this.U9(d,C.bh,null,e)},
U1(d){return this.U9(C.bh,C.bh,d,C.bh)},
aP2(d){return this.U9(C.bh,d,null,C.bh)},
j(d,e){var w=this
if(e==null)return!1
return e instanceof B.Mc&&e.a==w.a&&e.b==w.b&&e.c==w.c&&e.d===w.d},
gu(d){var w=this
return A.K(w.a,w.b,w.c,w.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.p7.prototype={
nS(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.a:g,u=i==null?w.b:i,t=k==null?w.c:k,s=m==null?w.e:m,r=d===C.bh?w.f:A.jw(d),q=h==null?w.r:h,p=l==null?w.w:l
return new B.p7(v,u,t,f,s,r,q,p,j,e==null?w.y:e)},
C1(d){var w=null
return this.nS(C.bh,w,w,w,w,w,w,d,w,w)},
U6(d,e,f){var w=null
return this.nS(C.bh,w,w,w,d,e,w,f,w,w)},
aQs(d,e,f,g,h,i){var w=null
return this.nS(d,w,w,w,e,f,w,g,h,i)},
Ua(d,e,f,g){var w=null
return this.nS(C.bh,w,d,w,e,f,w,g,w,w)},
aQr(d,e,f,g,h,i){var w=null
return this.nS(d,w,w,e,f,g,w,h,i,w)},
abb(d){var w=null
return this.nS(C.bh,d,w,w,w,w,w,w,w,w)},
aPS(d,e){var w=null
return this.nS(d,e,w,w,w,w,w,w,w,w)},
U_(d){var w=null
return this.nS(C.bh,w,w,w,w,w,w,w,d,w)},
aQn(d,e,f,g){var w=null
return this.nS(C.bh,w,w,w,d,e,w,w,f,g)},
U5(d,e){var w=null
return this.nS(C.bh,w,w,w,w,w,d,w,e,w)}}
B.vU.prototype={
gBW(){var w=this.a
w===$&&A.b()
w=w.M(0,$.k3(),x.D)
return w==null?null:w.a},
dn(){var w,v,u=this
u.d=!1
w=u.a
w===$&&A.b()
w.jn(new B.azf(u))
v=$.k3()
w.H(new A.cl(v,new B.azg(),v.$ti.h("cl<df.0,d?>")),x.T)
A.hS(u.gaCc())
return D.Th},
gaQy(){var w,v=this,u=v.gBW()
if(u==null)return null
v.gt().U(0)
w=v.gt().gS().a
v.gt().U(0)
return new A.aqi(w.b,u,v.gt().gS().a.d)},
zj(d){var w,v,u,t,s=this
s.gt().U(0)
w=s.gt().gS().a
if(d.j(0,w))return
v=d.b==w.b&&d.d===w.d
s.gt().U(0)
u=s.gt().gS()
if(v){s.gt().U(0)
t=s.gt().gS().f}else t=null
t=u.aQr(t,d,!1,D.ns,!0,!1)
s.gt().A(t)
s.a4I()},
zl(d){this.gt().U(0)
return this.zj(this.gt().gS().a.U1(C.c.a1(d)))},
oa(){var w=0,v=A.o(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$oa=A.p(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:r.gt().U(0)
q=r.gt().gS()
p=r.gBW()
if(p==null||q.c||q.w||!q.r){w=1
break}o=r.c
f=q.U_(!0)
r.gt().A(f)
t=4
f=r.a
f===$&&A.b()
w=7
return A.h(f.M(0,$.a1l(),x.A).afl(0,r.a5X(p,q.b.length)),$async$oa)
case 7:n=a3
if(!J.f(o,r.c)){w=1
break}m=A.an(x.N)
for(r.gt().U(0),f=r.gt().gS().b,e=f.length,d=0;d<e;++d){l=f[d]
J.cs(m,l.a)}k=m
r.gt().U(0)
m=A.a_(r.gt().gS().b,x.z)
j=m
for(m=J.ah(n.a);m.p();){i=m.gG(m)
if(!J.lL(k,i.a))J.cs(j,i)}h=A.c_(j,x._)
r.gt().U(0)
m=r.gt().gS()
j=n.b
f=J.fP(n.a)&&n.gadp()
j=m.aQn(f,h,!1,j)
r.gt().A(j)
t=2
w=6
break
case 4:t=3
a1=s.pop()
g=A.O(a1)
if(!J.f(o,r.c)){w=1
break}r.gt().U(0)
m=r.gt().gS().U5(A.bx(g,null),!1)
r.gt().A(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.m(u,v)
case 2:return A.l(s.at(-1),v)}})
return A.n($async$oa,v)},
aRj(){var w,v=this.a
v===$&&A.b()
w=v.M(0,$.c0(),x.S).$0()
return this.vU(new B.azi(A.bS(A.al(w),A.am(w),A.aB(w)-1,0,0,0,0)))},
aRc(){return this.vU(new B.azh())},
vU(d){return this.asv(d)},
asv(d){var w=0,v=A.o(x.I),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$vU=A.p(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:j=q.gBW()
if(j==null)throw A.e(C.q1)
m=q.a
m===$&&A.b()
p=m.m8()
q.gt().U(0)
l=q.gt().gS().abb(!0)
q.gt().A(l)
t=4
w=7
return A.h(d.$2(m.M(0,$.a1l(),x.A),j),$async$vU)
case 7:o=f
l=$.axa()
m=m.e
m===$&&A.b()
m.cr(l)
q.gt().U(0)
l=q.gt().gS().aPS(null,!1)
q.gt().A(l)
w=8
return A.h(q.tN(!0),$async$vU)
case 8:u=new A.apV(o)
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
n=A.O(i)
q.gt().U(0)
m=q.gt().gS().abb(!1)
q.gt().A(m)
m=A.bx(n,null)
throw A.e(m)
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
p.Ai()
w=r.pop()
break
case 6:case 1:return A.m(u,v)
case 2:return A.l(s.at(-1),v)}})
return A.n($async$vU,v)},
a5X(d,e){var w,v
this.gt().U(0)
w=this.gt().gS().a
v=w.d
if(v.length===0)v=null
return new B.Md(d,w.a,w.b,v,e)},
tN(d){return this.aCd(d)},
a4I(){return this.tN(!1)},
aCd(d){var w=0,v=A.o(x.q),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$tN=A.p(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(r.d){u=null
w=1
break}q=++r.c
p=r.gBW()
if(p==null){r.gt().U(0)
l=r.gt().gS().U6(!1,D.ns,!1)
r.gt().A(l)
u=null
w=1
break}t=4
l=r.a
l===$&&A.b()
w=7
return A.h(l.M(0,$.a1l(),x.A).afl(0,r.a5X(p,0)),$async$tN)
case 7:o=f
if(!J.f(q,r.c)){u=null
w=1
break}r.gt().U(0)
l=r.gt().gS()
k=A.c_(o.a,x._)
j=o.b
r.gt().U(0)
if(r.gt().gS().a.a==null)i=o.b
else{r.gt().U(0)
i=r.gt().gS().f}j=l.aQs(i,o.gadp(),k,!1,!1,j)
r.gt().A(j)
u=null
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
n=A.O(g)
m=A.bx(n,null)
if(!J.f(q,r.c)){u=null
w=1
break}if(d){r.gt().U(0)
l=r.gt().gS().b.length!==0}else l=!1
if(l){r.gt().U(0)
l=r.gt().gS().C1(!1)
r.gt().A(l)
u=m
w=1
break}r.gt().U(0)
l=r.gt().gS().Ua(m,!1,D.ns,!1)
r.gt().A(l)
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.m(u,v)
case 2:return A.l(s.at(-1),v)}})
return A.n($async$tN,v)}}
B.vW.prototype={
X(){return new B.V6(new A.di(C.bu,$.aj()),A.xG(0,null,null),D.aaI)}}
B.V6.prototype={
aH(){this.b4()
this.x.an(0,this.gaCH())},
l(){var w=this,v=w.y
if(v!=null)v.aM(0)
w.x.l()
v=w.w
v.a2$=$.aj()
v.a9$=0
w.ap()},
a4U(){var w,v,u,t,s=this
if(s.c==null||s.x.f.length===0)return
w=s.ga4()
v=$.vJ()
u=w.M(0,v,x.m)
if(!u.r||u.c||u.w)return
if(u.x!=null)return
t=C.b.gcd(s.x.f)
if(Math.max(t.gkB()-t.gfE(),0)<800)w.M(0,v.gbd(),x.H).oa()},
aEv(d){var w=this.y
if(w!=null)w.aM(0)
this.y=A.da(C.mn,new B.b6o(this,d))},
I2(d){var w=this.y
if(w!=null)w.aM(0)
this.ga4().M(0,$.vJ().gbd(),x.H).zj(d)},
asy(){this.w.ih(0,C.fz)
this.I2(D.wn)},
FG(){var w=0,v=A.o(x.n),u=this,t,s,r,q
var $async$FG=A.p(function(d,e){if(d===1)return A.l(e,v)
for(;;)switch(w){case 0:r=u.ga4().M(0,$.vJ().gbd(),x.H)
q=r.a
q===$&&A.b()
t=$.axa()
q=q.e
q===$&&A.b()
q.cr(t)
r.gt().U(0)
if(r.gt().gS().b.length===0){r.gt().U(0)
q=r.gt().gS().C1(!0)
r.gt().A(q)}w=2
return A.h(r.tN(!0),$async$FG)
case 2:s=e
if(s!=null&&u.c!=null){r=u.c
r.toString
A.b5(r,s.a,"Annulla",C.u,null,null)}return A.m(null,v)}})
return A.n($async$FG,v)},
HA(){var w=0,v=A.o(x.n),u,t=this,s,r,q,p,o,n,m
var $async$HA=A.p(function(d,e){if(d===1)return A.l(e,v)
for(;;)switch(w){case 0:o=t.ga4()
n=$.vJ()
m=o.M(0,n.gbd(),x.H).gBW()
if(m==null){w=1
break}s=x.m
r=o.M(0,n,s)
q=t.c
q.toString
w=3
return A.h(B.chj(q,m,r.a.b),$async$HA)
case 3:p=e
if(p==null||t.c==null){w=1
break}t.I2(o.M(0,n,s).a.abq(p.a,p.b))
case 1:return A.m(u,v)}})
return A.n($async$HA,v)},
tC(){var w=0,v=A.o(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$tC=A.p(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.c
h.toString
w=3
return A.h(B.che(h),$async$tC)
case 3:q=e
if(q==null||r.c==null){w=1
break}h=r.ga4()
m=$.vJ()
l=h.M(0,m,x.m)
k=l.a
p=k.b!=null||k.d.length!==0?null:l.f
j=r.c
j.toString
w=4
return A.h(B.cdG(j,q,p),$async$tC)
case 4:if(!e||r.c==null){w=1
break}t=6
k=x.H
w=q===D.yR?9:11
break
case 9:w=12
return A.h(h.M(0,m.gbd(),k).aRj(),$async$tC)
case 12:w=10
break
case 11:w=13
return A.h(h.M(0,m.gbd(),k).aRc(),$async$tC)
case 13:case 10:o=e
h=r.c
if(h==null){w=1
break}m=o.a
k=q===D.yS?p:null
A.b5(h,B.cdw(q,m,k),"Annulla",C.u,null,null)
t=2
w=8
break
case 6:t=5
g=s.pop()
h=A.O(g)
if(h instanceof A.b3){n=h
h=r.c
if(h!=null)A.b5(h,n.a,"Annulla",C.u,null,null)}else throw g
w=8
break
case 5:w=2
break
case 8:case 1:return A.m(u,v)
case 2:return A.l(s.at(-1),v)}})
return A.n($async$tC,v)},
q(d){var w,v,u,t,s,r=this,q=null,p=r.ga4(),o=$.vJ(),n=p.H(o,x.m)
p.hb(new A.b0(o,new B.b6q(),o.$ti.h("b0<bq.0,+(i,r)>")),new B.b6r(r))
w=p.H($.c0(),x.S).$0()
v=n.a
u=n.y
t=x.p
s=A.xk(A.a([A.en(!1,q,C.t7,22,u?q:r.gasu(),44,!1,"Pulisci registro")],t),!0,q,!0,q,"Registro attivit\xe0")
o=A.a([A.uA(r.w,"Evento o studente",r.gaEu(),new B.b6s(r)),C.az,new B.a23(p.M(0,o.gbd(),x.H).gaQy(),v.a,n.f,new B.b6t(r,v),q),C.b7,new B.af8(v.c,v.b!=null,r.gaGi(),new B.b6u(r,v),q)],t)
if(u)C.b.K(o,A.a([C.ak,D.anD],t))
o.push(C.T)
p=A.a([new A.cG(new A.bs(A.a5(o,C.o,q,C.d,C.h,0),q),720,4,0,q)],t)
C.b.K(p,r.ata(0,n,new A.a2(A.al(w),A.am(w),A.aB(w))))
return A.eo(s,A.jf(A.hv(r.x,C.b1,q,p),0,r.gOG()),q,!1,q)},
ata(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(e.c)return D.adK
w=e.d
if(w!=null)return A.a([F.I5(A.cm(A.fL(w,l,m.gOG(),"Registro non caricato"),l,l),!1)],x.p)
v=e.b
u=v.length
if(u===0){v=e.a
return A.a([F.I5(A.cm(v.a!=null||v.b!=null||v.d.length!==0?A.f4(l,"Azzera filtri",C.ez,"Prova ad allargare la ricerca o a togliere qualche filtro.",m.gasx(),"Nessun evento corrisponde ai filtri"):A.f4(l,"Aggiorna",C.k7,"Appena i compagni useranno l'app vedrai qui il registro.",m.gOG(),"Nessun evento ancora"),l,l),!1)],x.p)}if(v!==m.z){m.z=v
m.Q=B.cf0(v)}t=m.Q
v=x.p
s=A.a([],v)
for(r=t.length,q=x.R,p=0;p<t.length;t.length===r||(0,A.x)(t),++p){o=t[p]
n=o.a
s.push(new A.cG(new A.lh(A.a([new A.bs(new A.dm(B.ce3(n,f),l,C.e3,!0,l),l),new A.jh(J.bo(o.b),new B.b6n(o),C.ao,0,l)],v),l),720,0,16,new A.b2(n,q)))}s.push(new A.cG(new A.bs(E.bLP(!1,"Hai raggiunto la fine del registro.",e.x,e.r,u,e.w,m.ga4().M(0,$.vJ().gbd(),x.H).gWq()),l),720,0,24,l))
return s}}
B.EH.prototype={
q(d){var w,v=null,u=this.c,t=u.b,s=B.ccB(A.V(d),t),r=A.fX(s.a,s.b,s.c,C.ht,40,v,v)
if(C.c.bY(t,"tab_")){w=D.iA.i(0,t)
t="Scheda "+(w==null?t:w)}else{w=D.iA.i(0,t)
t=w==null?t:w}t=A.A(t,1,C.q,v,v,v,v,v)
return A.d9(!0,v,r,60,v,C.Y,A.A(B.ccA(u),1,C.q,v,v,v,v,v),t,A.A(E.bED(u.e),v,v,v,v,v,v,v))}}
B.a23.prototype={
bV(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n==null?o:e.H($.axa().$1(n),x.J),l=m==null,k=l?o:A.aH(m),j=p.r
j=j==null?"Tutti":"Tutti \xb7 "+E.a0S(j)
w=p.f
j=A.a([new A.e5(j,w==null,new B.aza(p),C.bk,o,o,o)],x.p)
for(v=k==null,u=0;u<12;++u){t=D.C4[u]
s=t===w
if(!s){r=v?o:J.ax(k,t)
r=(r==null?0:r)>0}else r=!0
if(r){if((v?o:J.ax(k,t))==null)if(C.c.bY(t,"tab_")){r=D.iA.i(0,t)
r="Scheda "+(r==null?t:r)}else{r=D.iA.i(0,t)
if(r==null)r=t}else{if(C.c.bY(t,"tab_")){r=D.iA.i(0,t)
r="Scheda "+(r==null?t:r)}else{r=D.iA.i(0,t)
if(r==null)r=t}k.toString
q=J.ax(k,t)
q.toString
q=r+" \xb7 "+E.a0S(q)
r=q}j.push(new A.e5(r,s,new B.azb(p,t),C.bk,o,o,o))}}if(!l&&m.gbs(m)!=null&&v)j.push(new A.e5("Riprova conteggi",!1,new B.azc(e,n),C.bk,C.dF,o,o))
return A.bD(H.bEM(new B.azd(j),j.length,o,C.aH,new B.aze()),44,o)}}
B.af8.prototype={
q(d){var w,v=this,u=null,t=v.d
if(t){w=v.c
w="Studente: "+B.c5c(w==null?"selezionato":w)}else w="Studenti: tutti"
w=A.a([new A.e5(w,t,new B.aZP(v),C.bk,C.k6,u,u)],x.p)
if(t)w.push(A.en(!1,u,C.dl,18,v.f,44,!1,"Rimuovi filtro studente"))
return A.jR(A.ad(w,C.j,C.d,C.h,0,u),C.J,u,u,u,C.aH)}}
B.Or.prototype={
R(){return"EventsCleanup."+this.b}}
B.E2.prototype={
X(){return new B.asK()}}
B.asK.prototype={
a5I(d,e){var w=this.c
w.toString
A.c4(w,!1).cA(new A.apZ(d,e))
return null},
q(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.ga4().H($.ei().$1(p.a.d),x.y),m=new A.a3(new A.R(18,0,18,12),A.uA(o,"Cerca studente",new B.bom(p),o),o),l=A.aH(n)
if(l==null){w=p.a.f
v=n.gbs(n)!=null?A.fL(n.gbs(n),o,new B.bon(p),"Qualcosa non ha funzionato"):C.uq
return A.Gp(A.a([m,new A.a3(new A.R(18,0,18,24),v,o)],x.p),w,o,o)}u=p.w.toLowerCase()
w=A.a([],x.Y)
for(v=J.ah(l),t=u.length===0,s=!t;v.p();){r=v.gG(v)
if(r.b!=null)if(s){q=r.c
q=A.kJ(q.toLowerCase(),u,0)}else q=!0
else q=!1
if(q)w.push(r)}v=w.length
s=t?1:0
r=p.a.f
q=v===0?1:0
return G.a8I(r,new B.boo(p,m,t,w,C.h2),v+s+1+q,new A.R(0,0,0,24),C.U)}}
B.Z9.prototype={
q(d){var w=this,v=null,u=A.V(d),t=w.e,s=A.A(w.c,1,C.q,v,v,v,v,v),r=t?A.b6(C.aK,u.as,v,22):v
return A.aa(v,v,A.d9(!0,v,w.d,56,w.f,D.a_H,v,s,r),!1,v,v,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v,C.i,v)}}
var z=a.updateTypes(["G<~>()","~()","G<b3?>({keepItems:r})","~(d)","+(i,r)(p7)","EH(C,i)","E2(C,eu)","vU()"])
B.bwl.prototype={
$2(d,e){var w=d.H($.a1l(),x.A),v=e.c
if(v.length===0)v=null
return w.aSn(new B.Md(e.b,null,e.a,v,0),D.C4)},
$S:1117}
B.azf.prototype={
$0(){var w=this.a
w.d=!0;++w.c},
$S:0}
B.azg.prototype={
$1(d){return d==null?null:d.a},
$S:166}
B.azi.prototype={
$2(d,e){return d.aRk(this.a,e)},
$S:343}
B.azh.prototype={
$2(d,e){return d.aRd(e)},
$S:343}
B.b6o.prototype={
$0(){return this.a.ga4().M(0,$.vJ().gbd(),x.H).zl(this.b)},
$S:0}
B.b6q.prototype={
$1(d){return new A.a6(d.b.length,d.r)},
$S:z+4}
B.b6r.prototype={
$2(d,e){$.ar.x1$.push(new B.b6p(this.a))},
$S:1119}
B.b6p.prototype={
$1(d){return this.a.a4U()},
$S:6}
B.b6s.prototype={
$1(d){var w=this.a,v=w.y
if(v!=null)v.aM(0)
w.ga4().M(0,$.vJ().gbd(),x.H).zl(d)},
$S:7}
B.b6t.prototype={
$1(d){return this.a.I2(this.b.aP2(d))},
$S:88}
B.b6u.prototype={
$0(){return this.a.I2(this.b.abq(null,null))},
$S:0}
B.b6n.prototype={
$2(d,e){return new B.EH(J.ax(this.a.b,e),null)},
$S:z+5}
B.aza.prototype={
$1(d){return this.a.w.$1(null)},
$S:4}
B.azb.prototype={
$1(d){var w=this.b,v=this.a
if(w===v.f)w=null
return v.w.$1(w)},
$S:4}
B.azc.prototype={
$1(d){var w=this.a,v=$.axa(),u=this.b
u.toString
u=v.$1(u)
if(w.e==null)A.N(A.W(y.b))
w.gd1().cr(u)
return null},
$S:4}
B.aze.prototype={
$2(d,e){return C.aq},
$S:95}
B.azd.prototype={
$2(d,e){return this.a[e]},
$S:60}
B.aZP.prototype={
$1(d){return this.a.e.$0()},
$S:4}
B.bAB.prototype={
$1(d){var w=null,v=A.V(d)
return A.fM(A.a([A.d9(!0,w,D.alq,60,new B.bAz(d),C.Y,D.axU,D.ayl,w),A.d9(!0,w,A.fX(v.ok,v.p1,I.zA,C.c2,40,w,w),60,new B.bAA(d),C.Y,D.ay6,A.A("Elimina tutto",w,w,w,A.iU(w,w,v.k3,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),C.b6)},
$S:1120}
B.bAz.prototype={
$0(){A.c4(this.a,!1).cA(D.yR)
return null},
$S:0}
B.bAA.prototype={
$0(){A.c4(this.a,!1).cA(D.yS)
return null},
$S:0}
B.bAX.prototype={
$2(d,e){return new B.E2(this.a,this.b,e,null)},
$S:z+6}
B.bom.prototype={
$1(d){var w=this.a
return w.A(new B.bol(w,d))},
$S:7}
B.bol.prototype={
$0(){return this.a.w=C.c.a1(this.b)},
$S:0}
B.bon.prototype={
$0(){var w=this.a,v=w.ga4()
w=$.ei().$1(w.a.d)
if(v.e==null)A.N(A.W(y.b))
v.gd1().cr(w)
return null},
$S:0}
B.boo.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null
if(e===0)return r.b
w=e-1
v=r.c
if(v&&w===0){v=r.a
return new B.Z9("Tutti gli studenti",D.alr,v.a.e==null,new B.boj(v),q)}u=w-(v?1:0)
v=r.d
if(u>=v.length){v=r.e
return new A.a3(new A.R(v.a,24,v.c,24),A.A("Nessuno studente con questo nome.",q,q,q,C.y.O(A.V(d).z),C.a6,q,q),q)}t=v[u]
v=t.c
s=r.a
return new B.Z9(v,new A.fe(v,C.bT,!1,!1,q,q),t.b==s.a.e,new B.bok(s,t),q)},
$S:60}
B.boj.prototype={
$0(){return this.a.a5I(null,null)},
$S:0}
B.bok.prototype={
$0(){var w=this.b
return this.a.a5I(w.b,w.c)},
$S:0};(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a.installInstanceTearOff,t=a._instance_1u
w(B,"ccD","bYM",7)
var s
v(s=B.vU.prototype,"gWq","oa",0)
u(s,"gaCc",0,0,function(){return{keepItems:!1}},["$1$keepItems","$0"],["tN","a4I"],2,0,0)
v(s=B.V6.prototype,"gaCH","a4U",1)
t(s,"gaEu","aEv",3)
v(s,"gasx","asy",1)
v(s,"gOG","FG",0)
v(s,"gaGi","HA",0)
v(s,"gasu","tC",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.z,[B.Md,B.Mc,B.p7])
w(A.j5,[B.bwl,B.azi,B.azh,B.b6r,B.b6n,B.aze,B.azd,B.bAX,B.boo])
v(B.vU,A.hV)
w(A.jG,[B.azf,B.b6o,B.b6u,B.bAz,B.bAA,B.bol,B.bon,B.boj,B.bok])
w(A.h8,[B.azg,B.b6q,B.b6p,B.b6s,B.b6t,B.aza,B.azb,B.azc,B.aZP,B.bAB,B.bom])
w(A.kT,[B.vW,B.E2])
w(A.lU,[B.V6,B.asK])
w(A.F,[B.EH,B.af8,B.Z9])
v(B.a23,A.oa)
v(B.Or,A.nH)})()
A.lF(b.typeUniverse,JSON.parse('{"vU":{"hV":["p7"],"e0":["p7"],"dz":["p7"],"e0.0":"p7"},"vW":{"I":[],"c":[]},"V6":{"Y":["vW"]},"EH":{"F":[],"c":[]},"a23":{"I":[],"c":[]},"af8":{"F":[],"c":[]},"E2":{"I":[],"c":[]},"asK":{"Y":["E2"]},"Z9":{"F":[],"c":[]}}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=A.a1
return{_:w("mO"),H:w("vU"),A:w("vV"),m:w("p7"),y:w("J<k<bi>>"),J:w("J<a7<d,i>>"),S:w("bA()"),a:w("Or"),C:w("u<mO>"),F:w("u<+day,events(a2,k<mO>)>"),s:w("u<d>"),Y:w("u<bi>"),p:w("u<c>"),I:w("+deleted(i)"),c:w("+authId,name(d?,d?)"),N:w("d"),R:w("b2<a2>"),z:w("@"),q:w("b3?"),D:w("hW?"),T:w("d?"),n:w("~")}})();(function constants(){var w=a.makeConstList
D.wn=new B.Mc(null,null,null,"")
D.ns=w([],x.C)
D.Th=new B.p7(D.wn,D.ns,!0,null,null,null,!1,!1,null,!1)
D.a_H=new A.R(18,8,18,8)
D.yR=new B.Or(0,"old")
D.yS=new B.Or(1,"all")
D.a1H=new A.aE(62922,"MaterialIcons",null,!1)
D.a29=new A.aE(983615,"MaterialIcons",null,!1)
D.C4=w(["app_open","tab_oggi","tab_agenda","tab_turni","tab_classe","tab_profilo","PrimaryStudent","StudentAssignments","StudentTurns","AdminDashboard","Turns","Metrics"],x.s)
D.a8s=w(["PrimaryStudent","StudentAssignments","StudentTurns","AdminDashboard","Turns","Metrics"],x.s)
D.aaI=w([],x.F)
D.amB=new A.iN(6,!0,C.ao,"Caricamento eventi",null)
D.as8=new A.bs(D.amB,null)
D.anj=new A.cG(D.as8,720,0,0,null)
D.adK=w([D.anj],x.p)
D.aiv={app_open:0,tab_oggi:1,tab_agenda:2,tab_turni:3,tab_classe:4,tab_profilo:5,PrimaryStudent:6,StudentAssignments:7,StudentTurns:8,AdminDashboard:9,Turns:10,Metrics:11}
D.iA=new A.af(D.aiv,["Apertura app","Oggi","Agenda","Turni","Classe","Profilo","Studente (vecchia app)","Compiti (vecchia app)","Turni (vecchia app)","Amministrazione (vecchia app)","Gestione turni (vecchia app)","Metriche (vecchia app)"],A.a1("af<d,d>"))
D.alq=new A.xo(null,C.ey,null,null,null,C.c2,40,null)
D.alr=new A.xo(null,C.mO,null,null,null,C.ht,36,null)
D.anD=new A.xv(null,"Eliminazione in corso",null)
D.axU=new A.dI("Mantiene oggi e ieri",null,null,null,null,null,null,null,null,null)
D.ay6=new A.dI("Svuota il registro della classe",null,null,null,null,null,null,null,null,null)
D.ayl=new A.dI("Elimina log vecchi",null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cp1","axa",()=>C.bO.f7(0,new B.bwl(),A.a1("a7<d,i>"),A.a1("+authId,classId,search(d?,d,d)")))
w($,"cp2","vJ",()=>C.d2.$2$1(B.ccD(),x.H,x.m))})()};
(a=>{a["XxfQrnr3tPo00HtnnqbobAGfkDI="]=a.current})($__dart_deferred_initializers__);