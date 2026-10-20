((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,G,E,H,B={Mi:function Mi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bYQ(){return new B.vM()},
Mh:function Mh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
p6:function p6(d,e,f,g,h,i,j,k,l,m){var _=this
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
bwp:function bwp(){},
vM:function vM(){this.c=0
this.d=!1
this.a=$},
azp:function azp(d){this.a=d},
azq:function azq(){},
azs:function azs(d){this.a=d},
azr:function azr(){},
bYR(){return new B.vO(null)},
vO:function vO(d){this.a=d},
Vf:function Vf(d,e,f){var _=this
_.w=d
_.x=e
_.z=_.y=null
_.Q=f
_.d=$
_.c=_.a=null},
b6x:function b6x(d,e){this.a=d
this.b=e},
b6z:function b6z(){},
b6A:function b6A(d){this.a=d},
b6y:function b6y(d){this.a=d},
b6B:function b6B(d){this.a=d},
b6C:function b6C(d,e){this.a=d
this.b=e},
b6D:function b6D(d,e){this.a=d
this.b=e},
b6w:function b6w(d){this.a=d},
cfc(d){var w,v,u,t,s,r,q,p,o=A.a([],x.F)
for(w=d.length,v=x.C,u=0;u<w;++u){t=d[u]
s=t.e.rC()
r=A.b3(s)
q=A.b7(s)
s=A.b9(s)
if(o.length!==0){p=C.b.ga0(o).a
p=!(r===p.a&&q===p.b&&s===p.c)}else p=!0
if(p)o.push(new A.aqd(new A.Z(r,q,s),A.a([],v)))
C.b.ga0(o).b.push(t)}return o},
ccK(d,e){var w
$label0$0:{if("app_open"===e){w=new A.qg(d.ay,d.ch,C.tg)
break $label0$0}if("tab_oggi"===e){w=new A.qg(d.CW,d.cx,D.a2i)
break $label0$0}if("tab_agenda"===e){w=new A.qg(d.CW,d.cx,C.th)
break $label0$0}if("tab_turni"===e){w=new A.qg(d.dx,d.dy,C.zV)
break $label0$0}if("tab_classe"===e){w=new A.qg(d.CW,d.cx,C.k8)
break $label0$0}if("tab_profilo"===e){w=new A.qg(d.CW,d.cx,C.tc)
break $label0$0}w=C.b.p(D.a8G,e)
if(w){w=new A.qg(d.r,d.Q,C.k6)
break $label0$0}w=new A.qg(d.r,d.Q,D.a1R)
break $label0$0}return w},
ccJ(d){var w=d.f,v=w==null?null:C.c.a2(w)
if(v!=null&&v.length!==0)return v
return d.c==null?"Utente non connesso":"Studente sconosciuto"},
EH:function EH(d,e){this.c=d
this.a=e},
c5i(d){var w,v=C.c.a2(d),u=C.c.jj(v,A.aP("\\s+",!0,!1,!1))
if(u.length<2)return v
w=C.b.ga0(u)
return C.b.gV(u)+" "+A.dZ(new A.pN(w).gV(0))+"."},
a25:function a25(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h},
azk:function azk(d){this.a=d},
azl:function azl(d,e){this.a=d
this.b=e},
azm:function azm(d,e){this.a=d
this.b=e},
azo:function azo(){},
azn:function azn(d){this.a=d},
af6:function af6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZQ:function aZQ(d){this.a=d},
cht(d){return A.hA(d,new B.bAG(),null,"Pulisci registro",x.a)},
cdP(d,e,f){var w
switch(e.a){case 0:w=A.k2(d,"Annulla","Elimina",!0,"Restano solo gli eventi di oggi e di ieri. L'operazione non pu\xf2 essere annullata.","Eliminare i log vecchi?")
break
case 1:if(f==null)w="Eliminare tutti gli eventi della classe?"
else w=f===1?"Eliminare 1 evento?":"Eliminare "+E.a0V(f)+" eventi?"
w=A.k2(d,"Annulla","Elimina",!0,"L'operazione non pu\xf2 essere annullata.",w)
break
default:w=null}return w},
cdF(d,e,f){var w,v=e===0
if(v)w=(f==null?0:f)>0
else w=!1
if(w)return"Nessun evento eliminato: potresti non avere i permessi."
switch(d.a){case 0:if(v)v="Nessun evento vecchio da eliminare"
else v=e===1?"Eliminato 1 evento vecchio":"Eliminati "+E.a0V(e)+" eventi vecchi"
break
case 1:v=v?"Il registro era gi\xe0 vuoto":"Registro svuotato"
break
default:v=null}return v},
Ow:function Ow(d,e){this.a=d
this.b=e},
bAG:function bAG(){},
bAE:function bAE(d){this.a=d},
bAF:function bAF(d){this.a=d},
chy(d,e,f){return A.Ej(d,new B.bB1(e,f),!0,0.6,"Filtra per studente",x.c)},
bB1:function bB1(d,e){this.a=d
this.b=e},
E1:function E1(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
asT:function asT(){var _=this
_.w=""
_.d=$
_.c=_.a=null},
box:function box(d){this.a=d},
bow:function bow(d,e){this.a=d
this.b=e},
boy:function boy(d){this.a=d},
boz:function boz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bou:function bou(d){this.a=d},
bov:function bov(d,e){this.a=d
this.b=e},
Ze:function Ze(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cec(d,e){var w,v
if(d.j(0,e))return"Oggi"
if(d.j(0,e.bJ(-1)))return"Ieri"
w=A.kj(d)
v=d.a
return v===e.a?w:w+" "+v}},D
J=c[1]
A=c[0]
C=c[2]
F=c[23]
G=c[14]
E=c[13]
H=c[26]
B=a.updateHolder(c[12],B)
D=c[25]
B.Mi.prototype={
j(d,e){var w,v=this
if(e==null)return!1
w=!1
if(e instanceof B.Mi)if(e.a===v.a)if(e.b==v.b)if(e.c==v.c)if(e.d==v.d)w=e.e===v.e
return w},
gu(d){var w=this
return A.L(w.a,w.b,w.c,w.d,w.e,40,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){return"AppEventsQuery("+this.a+", "+A.t(this.b)+", "+this.e+"+40)"}}
B.Mh.prototype={
Tk(d,e,f,g){var w=this,v=e===C.bf?w.a:A.bN(e),u=d===C.bf?w.b:A.bN(d),t=g===C.bf?w.c:A.bN(g)
return new B.Mh(v,u,t,f==null?w.d:f)},
aap(d,e){return this.Tk(d,C.bf,null,e)},
T9(d){return this.Tk(C.bf,C.bf,d,C.bf)},
aN4(d){return this.Tk(C.bf,d,null,C.bf)},
j(d,e){var w=this
if(e==null)return!1
return e instanceof B.Mh&&e.a==w.a&&e.b==w.b&&e.c==w.c&&e.d===w.d},
gu(d){var w=this
return A.L(w.a,w.b,w.c,w.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.p6.prototype={
nx(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.a:g,u=i==null?w.b:i,t=k==null?w.c:k,s=m==null?w.e:m,r=d===C.bf?w.f:A.jx(d),q=h==null?w.r:h,p=l==null?w.w:l
return new B.p6(v,u,t,f,s,r,q,p,j,e==null?w.y:e)},
Bl(d){var w=null
return this.nx(C.bf,w,w,w,w,w,w,d,w,w)},
Th(d,e,f){var w=null
return this.nx(C.bf,w,w,w,d,e,w,f,w,w)},
aOs(d,e,f,g,h,i){var w=null
return this.nx(d,w,w,w,e,f,w,g,h,i)},
Tl(d,e,f,g){var w=null
return this.nx(C.bf,w,d,w,e,f,w,g,w,w)},
aOr(d,e,f,g,h,i){var w=null
return this.nx(d,w,w,e,f,g,w,h,i,w)},
aac(d){var w=null
return this.nx(C.bf,d,w,w,w,w,w,w,w,w)},
aNV(d,e){var w=null
return this.nx(d,e,w,w,w,w,w,w,w,w)},
T7(d){var w=null
return this.nx(C.bf,w,w,w,w,w,w,w,d,w)},
aOn(d,e,f,g){var w=null
return this.nx(C.bf,w,w,w,d,e,w,w,f,g)},
Tf(d,e){var w=null
return this.nx(C.bf,w,w,w,w,w,d,w,e,w)}}
B.vM.prototype={
gBg(){var w=this.a
w===$&&A.b()
w=w.M(0,$.k3(),x.D)
return w==null?null:w.a},
d3(){var w,v,u=this
u.d=!1
w=u.a
w===$&&A.b()
w.j9(new B.azp(u))
v=$.k3()
w.H(new A.ck(v,new B.azq(),v.$ti.h("ck<de.0,d?>")),x.T)
A.hU(u.gaA7())
return D.Th},
gaOy(){var w,v=this,u=v.gBg()
if(u==null)return null
v.gt().U(0)
w=v.gt().gR().a
v.gt().U(0)
return new A.aqt(w.b,u,v.gt().gR().a.d)},
yF(d){var w,v,u,t,s=this
s.gt().U(0)
w=s.gt().gR().a
if(d.j(0,w))return
v=d.b==w.b&&d.d===w.d
s.gt().U(0)
u=s.gt().gR()
if(v){s.gt().U(0)
t=s.gt().gR().f}else t=null
t=u.aOr(t,d,!1,D.nx,!0,!1)
s.gt().A(t)
s.a3Q()},
yH(d){this.gt().U(0)
return this.yF(this.gt().gR().a.T9(C.c.a2(d)))},
nP(){var w=0,v=A.o(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$nP=A.p(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:r.gt().U(0)
q=r.gt().gR()
p=r.gBg()
if(p==null||q.c||q.w||!q.r){w=1
break}o=r.c
f=q.T7(!0)
r.gt().A(f)
t=4
f=r.a
f===$&&A.b()
w=7
return A.h(f.M(0,$.a1p(),x.A).aed(0,r.a5_(p,q.b.length)),$async$nP)
case 7:n=a3
if(!J.f(o,r.c)){w=1
break}m=A.al(x.N)
for(r.gt().U(0),f=r.gt().gR().b,e=f.length,d=0;d<e;++d){l=f[d]
J.cr(m,l.a)}k=m
r.gt().U(0)
m=A.a0(r.gt().gR().b,x.z)
j=m
for(m=J.af(n.a);m.n();){i=m.gG(m)
if(!J.lJ(k,i.a))J.cr(j,i)}h=A.bX(j,x._)
r.gt().U(0)
m=r.gt().gR()
j=n.b
f=J.fU(n.a)&&n.gach()
j=m.aOn(f,h,!1,j)
r.gt().A(j)
t=2
w=6
break
case 4:t=3
a1=s.pop()
g=A.P(a1)
if(!J.f(o,r.c)){w=1
break}r.gt().U(0)
m=r.gt().gR().Tf(A.bt(g,null),!1)
r.gt().A(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.m(u,v)
case 2:return A.l(s.at(-1),v)}})
return A.n($async$nP,v)},
aPi(){var w,v=this.a
v===$&&A.b()
w=v.M(0,$.bY(),x.S).$0()
return this.vu(new B.azs(A.et(A.b3(w),A.b7(w),A.b9(w)-1,0,0,0,0)))},
aPb(){return this.vu(new B.azr())},
vu(d){return this.ar_(d)},
ar_(d){var w=0,v=A.o(x.I),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$vu=A.p(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:j=q.gBg()
if(j==null)throw A.e(C.q8)
m=q.a
m===$&&A.b()
p=m.lQ()
q.gt().U(0)
l=q.gt().gR().aac(!0)
q.gt().A(l)
t=4
w=7
return A.h(d.$2(m.M(0,$.a1p(),x.A),j),$async$vu)
case 7:o=f
l=$.axm()
m=m.e
m===$&&A.b()
m.c7(l)
q.gt().U(0)
l=q.gt().gR().aNV(null,!1)
q.gt().A(l)
w=8
return A.h(q.tm(!0),$async$vu)
case 8:u=new A.aq3(o)
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
n=A.P(i)
q.gt().U(0)
m=q.gt().gR().aac(!1)
q.gt().A(m)
m=A.bt(n,null)
throw A.e(m)
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
p.zB()
w=r.pop()
break
case 6:case 1:return A.m(u,v)
case 2:return A.l(s.at(-1),v)}})
return A.n($async$vu,v)},
a5_(d,e){var w,v
this.gt().U(0)
w=this.gt().gR().a
v=w.d
if(v.length===0)v=null
return new B.Mi(d,w.a,w.b,v,e)},
tm(d){return this.aA8(d)},
a3Q(){return this.tm(!1)},
aA8(d){var w=0,v=A.o(x.q),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$tm=A.p(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(r.d){u=null
w=1
break}q=++r.c
p=r.gBg()
if(p==null){r.gt().U(0)
l=r.gt().gR().Th(!1,D.nx,!1)
r.gt().A(l)
u=null
w=1
break}t=4
l=r.a
l===$&&A.b()
w=7
return A.h(l.M(0,$.a1p(),x.A).aed(0,r.a5_(p,0)),$async$tm)
case 7:o=f
if(!J.f(q,r.c)){u=null
w=1
break}r.gt().U(0)
l=r.gt().gR()
k=A.bX(o.a,x._)
j=o.b
r.gt().U(0)
if(r.gt().gR().a.a==null)i=o.b
else{r.gt().U(0)
i=r.gt().gR().f}j=l.aOs(i,o.gach(),k,!1,!1,j)
r.gt().A(j)
u=null
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
n=A.P(g)
m=A.bt(n,null)
if(!J.f(q,r.c)){u=null
w=1
break}if(d){r.gt().U(0)
l=r.gt().gR().b.length!==0}else l=!1
if(l){r.gt().U(0)
l=r.gt().gR().Bl(!1)
r.gt().A(l)
u=m
w=1
break}r.gt().U(0)
l=r.gt().gR().Tl(m,!1,D.nx,!1)
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
return A.n($async$tm,v)}}
B.vO.prototype={
Y(){return new B.Vf(new A.d9(C.bD,$.ak()),A.xy(null,null),D.aaY)}}
B.Vf.prototype={
aI(){this.b3()
this.x.am(0,this.gaAB())},
l(){var w=this,v=w.y
if(v!=null)v.aM(0)
w.x.l()
v=w.w
v.a7$=$.ak()
v.ae$=0
w.ar()},
a41(){var w,v,u,t,s=this
if(s.c==null||s.x.f.length===0)return
w=s.ga4()
v=$.vB()
u=w.M(0,v,x.m)
if(!u.r||u.c||u.w)return
if(u.x!=null)return
t=C.b.gbZ(s.x.f)
if(Math.max(t.gkj()-t.gfl(),0)<800)w.M(0,v.gb5(),x.H).nP()},
aCm(d){var w=this.y
if(w!=null)w.aM(0)
this.y=A.da(C.mo,new B.b6x(this,d))},
Hm(d){var w=this.y
if(w!=null)w.aM(0)
this.ga4().M(0,$.vB().gb5(),x.H).yF(d)},
ar2(){this.w.iQ(0,C.fC)
this.Hm(D.wp)},
EZ(){var w=0,v=A.o(x.n),u=this,t,s,r,q
var $async$EZ=A.p(function(d,e){if(d===1)return A.l(e,v)
for(;;)switch(w){case 0:r=u.ga4().M(0,$.vB().gb5(),x.H)
q=r.a
q===$&&A.b()
t=$.axm()
q=q.e
q===$&&A.b()
q.c7(t)
r.gt().U(0)
if(r.gt().gR().b.length===0){r.gt().U(0)
q=r.gt().gR().Bl(!0)
r.gt().A(q)}w=2
return A.h(r.tm(!0),$async$EZ)
case 2:s=e
if(s!=null&&u.c!=null){r=u.c
r.toString
A.b6(r,s.a,"Annulla",C.A,null,null)}return A.m(null,v)}})
return A.n($async$EZ,v)},
GT(){var w=0,v=A.o(x.n),u,t=this,s,r,q,p,o,n,m
var $async$GT=A.p(function(d,e){if(d===1)return A.l(e,v)
for(;;)switch(w){case 0:o=t.ga4()
n=$.vB()
m=o.M(0,n.gb5(),x.H).gBg()
if(m==null){w=1
break}s=x.m
r=o.M(0,n,s)
q=t.c
q.toString
w=3
return A.h(B.chy(q,m,r.a.b),$async$GT)
case 3:p=e
if(p==null||t.c==null){w=1
break}t.Hm(o.M(0,n,s).a.aap(p.a,p.b))
case 1:return A.m(u,v)}})
return A.n($async$GT,v)},
tb(){var w=0,v=A.o(x.n),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$tb=A.p(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:h=r.c
h.toString
w=3
return A.h(B.cht(h),$async$tb)
case 3:q=e
if(q==null||r.c==null){w=1
break}h=r.ga4()
m=$.vB()
l=h.M(0,m,x.m)
k=l.a
p=k.b!=null||k.d.length!==0?null:l.f
j=r.c
j.toString
w=4
return A.h(B.cdP(j,q,p),$async$tb)
case 4:if(!e||r.c==null){w=1
break}t=6
k=x.H
w=q===D.yV?9:11
break
case 9:w=12
return A.h(h.M(0,m.gb5(),k).aPi(),$async$tb)
case 12:w=10
break
case 11:w=13
return A.h(h.M(0,m.gb5(),k).aPb(),$async$tb)
case 13:case 10:o=e
h=r.c
if(h==null){w=1
break}m=o.a
k=q===D.yW?p:null
A.b6(h,B.cdF(q,m,k),"Annulla",C.A,null,null)
t=2
w=8
break
case 6:t=5
g=s.pop()
h=A.P(g)
if(h instanceof A.b2){n=h
h=r.c
if(h!=null)A.b6(h,n.a,"Annulla",C.A,null,null)}else throw g
w=8
break
case 5:w=2
break
case 8:case 1:return A.m(u,v)
case 2:return A.l(s.at(-1),v)}})
return A.n($async$tb,v)},
q(d){var w,v,u,t,s,r=this,q=null,p=r.ga4(),o=$.vB(),n=p.H(o,x.m)
p.fU(new A.b_(o,new B.b6z(),o.$ti.h("b_<bq.0,+(i,q)>")),new B.b6A(r))
w=p.H($.bY(),x.S).$0()
v=n.a
u=n.y
t=x.p
s=A.xd(A.a([A.e5(!1,q,C.t9,22,u?q:r.gaqZ(),44,!1,"Pulisci registro")],t),!0,q,!0,q,"Registro attivit\xe0")
o=A.a([A.uv(r.w,"Evento o studente",r.gaCl(),new B.b6B(r)),C.aq,new B.a25(p.M(0,o.gb5(),x.H).gaOy(),v.a,n.f,new B.b6C(r,v),q),C.b5,new B.af6(v.c,v.b!=null,r.gaEd(),new B.b6D(r,v),q)],t)
if(u)C.b.J(o,A.a([C.ai,D.anS],t))
o.push(C.a_)
p=A.a([new A.cE(new A.br(A.a3(o,C.o,q,C.d,C.e,0),q),720,4,0,q)],t)
C.b.J(p,r.arI(0,n,new A.Z(A.b3(w),A.b7(w),A.b9(w))))
return A.ep(s,A.jj(A.hG(r.x,C.b7,q,p),0,r.gNM()),q,!1,q,q)},
arI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(e.c)return D.adY
w=e.d
if(w!=null)return A.a([F.Ic(A.cl(A.fO(w,l,m.gNM(),"Registro non caricato"),l,l),!1)],x.p)
v=e.b
u=v.length
if(u===0){v=e.a
return A.a([F.Ic(A.cl(v.a!=null||v.b!=null||v.d.length!==0?A.f4(l,"Azzera filtri",C.eC,"Prova ad allargare la ricerca o a togliere qualche filtro.",m.gar1(),"Nessun evento corrisponde ai filtri"):A.f4(l,"Aggiorna",C.k6,"Appena i compagni useranno l'app vedrai qui il registro.",m.gNM(),"Nessun evento ancora"),l,l),!1)],x.p)}if(v!==m.z){m.z=v
m.Q=B.cfc(v)}t=m.Q
v=x.p
s=A.a([],v)
for(r=t.length,q=x.R,p=0;p<t.length;t.length===r||(0,A.y)(t),++p){o=t[p]
n=o.a
s.push(new A.cE(new A.lf(A.a([new A.br(new A.dO(B.cec(n,f),l,C.ex,!0,l),l),new A.Rq(J.bm(o.b),new B.b6w(o),C.as,l)],v),l),720,0,16,new A.b5(n,q)))}s.push(new A.cE(new A.br(E.bLT(!1,"Hai raggiunto la fine del registro.",e.x,e.r,u,e.w,m.ga4().M(0,$.vB().gb5(),x.H).gVA()),l),720,0,24,l))
return s}}
B.EH.prototype={
q(d){var w,v=null,u=this.c,t=u.b,s=B.ccK(A.K(d),t),r=A.ht(s.a,s.b,s.c,C.hq,40,v,v)
if(C.c.bI(t,"tab_")){w=D.iz.i(0,t)
t="Scheda "+(w==null?t:w)}else{w=D.iz.i(0,t)
t=w==null?t:w}t=A.w(t,1,C.q,v,v,v,v,v)
return A.dk(!0,v,r,60,v,C.a4,A.w(B.ccJ(u),1,C.q,v,v,v,v,v),t,A.w(E.bEG(u.e),v,v,v,v,v,v,v))}}
B.a25.prototype={
bF(d,e){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n==null?o:e.H($.axm().$1(n),x.J),l=m==null,k=l?o:A.aE(m),j=p.r
j=j==null?"Tutti":"Tutti \xb7 "+E.a0V(j)
w=p.f
j=A.a([new A.f3(j,w==null,new B.azk(p),C.bQ,o,o,o)],x.p)
for(v=k==null,u=0;u<12;++u){t=D.C7[u]
s=t===w
if(!s){r=v?o:J.ay(k,t)
r=(r==null?0:r)>0}else r=!0
if(r){if((v?o:J.ay(k,t))==null)if(C.c.bI(t,"tab_")){r=D.iz.i(0,t)
r="Scheda "+(r==null?t:r)}else{r=D.iz.i(0,t)
if(r==null)r=t}else{if(C.c.bI(t,"tab_")){r=D.iz.i(0,t)
r="Scheda "+(r==null?t:r)}else{r=D.iz.i(0,t)
if(r==null)r=t}k.toString
q=J.ay(k,t)
q.toString
q=r+" \xb7 "+E.a0V(q)
r=q}j.push(new A.f3(r,s,new B.azl(p,t),C.bQ,o,o,o))}}if(!l&&m.gbh(m)!=null&&v)j.push(new A.f3("Riprova conteggi",!1,new B.azm(e,n),C.bQ,C.dJ,o,o))
return A.bU(A.bEN(o,new B.azn(j),j.length,o,C.az,new B.azo()),44,o)}}
B.af6.prototype={
q(d){var w,v=this,u=null,t=v.d
if(t){w=v.c
w="Studente: "+B.c5i(w==null?"selezionato":w)}else w="Studenti: tutti"
w=A.a([new A.f3(w,t,new B.aZQ(v),C.bQ,C.k5,u,u)],x.p)
if(t)w.push(A.e5(!1,u,C.da,18,v.f,44,!1,"Rimuovi filtro studente"))
return A.iS(A.a9(w,C.i,C.d,C.e,0,u),C.K,u,u,u,C.az)}}
B.Ow.prototype={
P(){return"EventsCleanup."+this.b}}
B.E1.prototype={
Y(){return new B.asT()}}
B.asT.prototype={
a4M(d,e){var w=this.c
w.toString
A.c0(w,!1).ci(new A.aq7(d,e))
return null},
q(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.ga4().H($.ej().$1(p.a.d),x.y),m=new A.a4(new A.O(18,0,18,12),A.uv(o,"Cerca studente",new B.box(p),o),o),l=A.aE(n)
if(l==null){w=p.a.f
v=n.gbh(n)!=null?A.fO(n.gbh(n),o,new B.boy(p),"Qualcosa non ha funzionato"):C.us
return A.Gt(A.a([m,new A.a4(new A.O(18,0,18,24),v,o)],x.p),w,o,o)}u=p.w.toLowerCase()
w=A.a([],x.Y)
for(v=J.af(l),t=u.length===0,s=!t;v.n();){r=v.gG(v)
if(r.b!=null)if(s){q=r.c
q=A.kG(q.toLowerCase(),u,0)}else q=!0
else q=!1
if(q)w.push(r)}v=w.length
s=t?1:0
r=p.a.f
q=v===0?1:0
return G.a8L(r,new B.boz(p,m,t,w,C.i6),v+s+1+q,new A.O(0,0,0,24),C.U)}}
B.Ze.prototype={
q(d){var w=this,v=null,u=A.K(d),t=w.e,s=A.w(w.c,1,C.q,v,v,v,v,v),r=t?A.b0(C.aG,u.at,v,22):v
return A.a7(v,v,A.dk(!0,v,w.d,56,w.f,D.a_M,v,s,r),!1,v,v,v,v,!1,v,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,t,v,v,v,v,v,C.j,v)}}
var z=a.updateTypes(["H<~>()","~()","H<b2?>({keepItems:q})","~(d)","+(i,q)(p6)","EH(C,i)","E1(C,eK)","vM()"])
B.bwp.prototype={
$2(d,e){var w=d.H($.a1p(),x.A),v=e.c
if(v.length===0)v=null
return w.aQl(new B.Mi(e.b,null,e.a,v,0),D.C7)},
$S:1104}
B.azp.prototype={
$0(){var w=this.a
w.d=!0;++w.c},
$S:0}
B.azq.prototype={
$1(d){return d==null?null:d.a},
$S:154}
B.azs.prototype={
$2(d,e){return d.aPj(this.a,e)},
$S:336}
B.azr.prototype={
$2(d,e){return d.aPc(e)},
$S:336}
B.b6x.prototype={
$0(){return this.a.ga4().M(0,$.vB().gb5(),x.H).yH(this.b)},
$S:0}
B.b6z.prototype={
$1(d){return new A.a5(d.b.length,d.r)},
$S:z+4}
B.b6A.prototype={
$2(d,e){$.ap.x1$.push(new B.b6y(this.a))},
$S:1106}
B.b6y.prototype={
$1(d){return this.a.a41()},
$S:6}
B.b6B.prototype={
$1(d){var w=this.a,v=w.y
if(v!=null)v.aM(0)
w.ga4().M(0,$.vB().gb5(),x.H).yH(d)},
$S:5}
B.b6C.prototype={
$1(d){return this.a.Hm(this.b.aN4(d))},
$S:174}
B.b6D.prototype={
$0(){return this.a.Hm(this.b.aap(null,null))},
$S:0}
B.b6w.prototype={
$2(d,e){return new B.EH(J.ay(this.a.b,e),null)},
$S:z+5}
B.azk.prototype={
$1(d){return this.a.w.$1(null)},
$S:4}
B.azl.prototype={
$1(d){var w=this.b,v=this.a
if(w===v.f)w=null
return v.w.$1(w)},
$S:4}
B.azm.prototype={
$1(d){var w=this.a,v=$.axm(),u=this.b
u.toString
u=v.$1(u)
if(w.e==null)A.Q(A.X(y.b))
w.gcG().c7(u)
return null},
$S:4}
B.azo.prototype={
$2(d,e){return C.ab},
$S:89}
B.azn.prototype={
$2(d,e){return this.a[e]},
$S:77}
B.aZQ.prototype={
$1(d){return this.a.e.$0()},
$S:4}
B.bAG.prototype={
$1(d){var w=null,v=A.K(d)
return A.hg(A.a([A.dk(!0,w,D.alI,60,new B.bAE(d),C.a4,D.ay4,D.ayv,w),A.dk(!0,w,A.ht(v.p1,v.p2,H.zG,C.cw,40,w,w),60,new B.bAF(d),C.a4,D.ayh,A.w("Elimina tutto",w,w,w,A.iX(w,w,v.k4,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),C.bh)},
$S:1108}
B.bAE.prototype={
$0(){A.c0(this.a,!1).ci(D.yV)
return null},
$S:0}
B.bAF.prototype={
$0(){A.c0(this.a,!1).ci(D.yW)
return null},
$S:0}
B.bB1.prototype={
$2(d,e){return new B.E1(this.a,this.b,e,null)},
$S:z+6}
B.box.prototype={
$1(d){var w=this.a
return w.A(new B.bow(w,d))},
$S:5}
B.bow.prototype={
$0(){return this.a.w=C.c.a2(this.b)},
$S:0}
B.boy.prototype={
$0(){var w=this.a,v=w.ga4()
w=$.ej().$1(w.a.d)
if(v.e==null)A.Q(A.X(y.b))
v.gcG().c7(w)
return null},
$S:0}
B.boz.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null
if(e===0)return r.b
w=e-1
v=r.c
if(v&&w===0){v=r.a
return new B.Ze("Tutti gli studenti",D.alJ,v.a.e==null,new B.bou(v),q)}u=w-(v?1:0)
v=r.d
if(u>=v.length){v=r.e
return new A.a4(new A.O(v.a,24,v.c,24),A.w("Nessuno studente con questo nome.",q,q,q,C.x.N(A.K(d).Q),C.a3,q,q),q)}t=v[u]
v=t.c
s=r.a
return new B.Ze(v,new A.fe(v,C.bZ,!1,!1,q,q),t.b==s.a.e,new B.bov(s,t),q)},
$S:77}
B.bou.prototype={
$0(){return this.a.a4M(null,null)},
$S:0}
B.bov.prototype={
$0(){var w=this.b
return this.a.a4M(w.b,w.c)},
$S:0};(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a.installInstanceTearOff,t=a._instance_1u
w(B,"ccM","bYQ",7)
var s
v(s=B.vM.prototype,"gVA","nP",0)
u(s,"gaA7",0,0,function(){return{keepItems:!1}},["$1$keepItems","$0"],["tm","a3Q"],2,0,0)
v(s=B.Vf.prototype,"gaAB","a41",1)
t(s,"gaCl","aCm",3)
v(s,"gar1","ar2",1)
v(s,"gNM","EZ",0)
v(s,"gaEd","GT",0)
v(s,"gaqZ","tb",0)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.A,[B.Mi,B.Mh,B.p6])
w(A.jJ,[B.bwp,B.azs,B.azr,B.b6A,B.b6w,B.azo,B.azn,B.bB1,B.boz])
v(B.vM,A.hX)
w(A.jI,[B.azp,B.b6x,B.b6D,B.bAE,B.bAF,B.bow,B.boy,B.bou,B.bov])
w(A.h8,[B.azq,B.b6z,B.b6y,B.b6B,B.b6C,B.azk,B.azl,B.azm,B.aZQ,B.bAG,B.box])
w(A.kP,[B.vO,B.E1])
w(A.lU,[B.Vf,B.asT])
w(A.D,[B.EH,B.af6,B.Ze])
v(B.a25,A.o5)
v(B.Ow,A.nG)})()
A.lD(b.typeUniverse,JSON.parse('{"vM":{"hX":["p6"],"e2":["p6"],"dn":["p6"],"e2.0":"p6"},"vO":{"I":[],"c":[]},"Vf":{"a2":["vO"]},"EH":{"D":[],"c":[]},"a25":{"I":[],"c":[]},"af6":{"D":[],"c":[]},"E1":{"I":[],"c":[]},"asT":{"a2":["E1"]},"Ze":{"D":[],"c":[]}}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=A.a1
return{_:w("mN"),H:w("vM"),A:w("vN"),m:w("p6"),y:w("J<k<bj>>"),J:w("J<a8<d,i>>"),S:w("bZ()"),a:w("Ow"),C:w("u<mN>"),F:w("u<+day,events(Z,k<mN>)>"),s:w("u<d>"),Y:w("u<bj>"),p:w("u<c>"),I:w("+deleted(i)"),c:w("+authId,name(d?,d?)"),N:w("d"),R:w("b5<Z>"),z:w("@"),q:w("b2?"),D:w("hY?"),T:w("d?"),n:w("~")}})();(function constants(){var w=a.makeConstList
D.wp=new B.Mh(null,null,null,"")
D.nx=w([],x.C)
D.Th=new B.p6(D.wp,D.nx,!0,null,null,null,!1,!1,null,!1)
D.a_M=new A.O(18,8,18,8)
D.yV=new B.Ow(0,"old")
D.yW=new B.Ow(1,"all")
D.a1R=new A.aB(62922,"MaterialIcons",null,!1)
D.a2i=new A.aB(983615,"MaterialIcons",null,!1)
D.C7=w(["app_open","tab_oggi","tab_agenda","tab_turni","tab_classe","tab_profilo","PrimaryStudent","StudentAssignments","StudentTurns","AdminDashboard","Turns","Metrics"],x.s)
D.a8G=w(["PrimaryStudent","StudentAssignments","StudentTurns","AdminDashboard","Turns","Metrics"],x.s)
D.aaY=w([],x.F)
D.amQ=new A.iN(6,!0,C.as,"Caricamento eventi",null)
D.ash=new A.br(D.amQ,null)
D.any=new A.cE(D.ash,720,0,0,null)
D.adY=w([D.any],x.p)
D.aiI={app_open:0,tab_oggi:1,tab_agenda:2,tab_turni:3,tab_classe:4,tab_profilo:5,PrimaryStudent:6,StudentAssignments:7,StudentTurns:8,AdminDashboard:9,Turns:10,Metrics:11}
D.iz=new A.ae(D.aiI,["Apertura app","Oggi","Agenda","Turni","Classe","Profilo","Studente (vecchia app)","Compiti (vecchia app)","Turni (vecchia app)","Amministrazione (vecchia app)","Gestione turni (vecchia app)","Metriche (vecchia app)"],A.a1("ae<d,d>"))
D.alI=new A.xh(null,C.eB,null,null,null,C.cw,40,null)
D.alJ=new A.xh(null,C.mU,null,null,null,C.hq,36,null)
D.anS=new A.xn(null,"Eliminazione in corso",null)
D.ay4=new A.dS("Mantiene oggi e ieri",null,null,null,null,null,null,null,null,null)
D.ayh=new A.dS("Svuota il registro della classe",null,null,null,null,null,null,null,null,null)
D.ayv=new A.dS("Elimina log vecchi",null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cpj","axm",()=>C.bN.eR(0,new B.bwp(),A.a1("a8<d,i>"),A.a1("+authId,classId,search(d?,d,d)")))
w($,"cpk","vB",()=>C.d8.$2$1(B.ccM(),x.H,x.m))})()};
(a=>{a["XE9AI+9w2GaJhqFMMwCT9xkpKLg="]=a.current})($__dart_deferred_initializers__);