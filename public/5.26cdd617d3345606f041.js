(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{X3zk:function(e,t,r){"use strict";r.r(t),r.d(t,"LoginModule",function(){return S});var o=r("ofXK"),i=r("tyNb"),n=r("fXoL");let a=(()=>{class e{constructor(e){this.router=e}ngOnInit(){var e;(null===(e=sessionStorage.getItem("token"))||void 0===e?void 0:e.length)>0&&this.router.navigateByUrl("/sesion/home")}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(i.b))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-main"]],decls:6,vars:0,consts:[["id","fondo-login",1,"p-d-flex","p-ai-center","p-jc-center","p-flex-wrap"],[1,"login","p-mt-2","p-ml-6"],[1,"titulo"],[1,"p-text-center","animate__animated","animate__fadeIn","animate__delay-1s",2,"font-family","Arial, Helvetica, sans-serif","font-size","40px"]],template:function(e,t){1&e&&(n.Ob(0,"div",0),n.Ob(1,"div",1),n.Jb(2,"router-outlet"),n.Nb(),n.Ob(3,"div",2),n.Ob(4,"h1",3),n.rc(5," Responde o crea preguntas, prueba tu conocimiento o reta el de otros "),n.Nb(),n.Nb(),n.Nb())},directives:[i.f],styles:["*[_ngcontent-%COMP%]{color:var(--text-color)}#fondo-login[_ngcontent-%COMP%]{width:100%;height:100vh;background-image:linear-gradient(0deg,rgba(51,12,141,.322) 0,rgba(185,15,137,.322)),url(/assets/img/fondo-login.jpg);background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.login[_ngcontent-%COMP%]{width:500px}.titulo[_ngcontent-%COMP%]{width:700px}@media (max-width:1245px){.titulo[_ngcontent-%COMP%]{width:500px}}@media (max-width:1050px){.titulo[_ngcontent-%COMP%]{width:400px}}@media (max-width:947px){.titulo[_ngcontent-%COMP%]{display:none}}"]}),e})();var s=r("s7LF"),l=r("PSD3"),c=r.n(l),p=r("6Hrc"),b=r("G56j"),m=r("gtx6"),u=r("0GQB"),d=r("c/fn"),g=r("uOs9");let h=(()=>{class e{constructor(e){this.el=e,this._color="red",this._mensaje="Hola",this.htmlRef=this.el}set colores(e){this.htmlRef.nativeElement.style.color=e,this._color=e}set mensaje(e){this.htmlRef.nativeElement.innerText=e,this._mensaje=e}ngOnInit(){this.setColor(),this.setMensaje()}setColor(){this.htmlRef.nativeElement.style.color=this._color}setMensaje(){this.htmlRef.nativeElement.innerText=this._mensaje}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(n.l))},e.\u0275dir=n.Db({type:e,selectors:[["","msg-error",""]],inputs:{colores:"colores",mensaje:"mensaje"}}),e})();function f(e,t){1&e&&n.Jb(0,"span",16)}function v(e,t){1&e&&n.Jb(0,"span",17)}let x=(()=>{class e{constructor(e,t,r){this.authService=e,this.fb=t,this.router=r,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.miFormulario=this.fb.group({email:["",[s.j.pattern(this.emailPattern),s.j.required]],password:["",[s.j.required,s.j.minLength(6)]]})}ngOnInit(){this.items=[{label:"Login",icon:"pi pi-fw pi-sign-in",routerLink:"/login/auth"},{label:"Registrarse",icon:"pi pi-fw pi-calendar",routerLink:"/login/registro"}],this.activeItem=this.items[0]}login(){this.authService.login(this.miFormulario.value).subscribe(e=>{if(e.token)return sessionStorage.setItem("token",e.token),void this.router.navigateByUrl("/sesion");c.a.fire("Opsss...",e.error.msg,"error")})}tieneError(e){var t,r;return(null===(t=this.miFormulario.get(e))||void 0===t?void 0:t.touched)&&(null===(r=this.miFormulario.get(e))||void 0===r?void 0:r.invalid)||!1}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(p.a),n.Ib(s.b),n.Ib(i.b))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-auth"]],decls:27,vars:6,consts:[["id","formulario",1,"p-p-3","animate__animated","animate__fadeInDown"],[1,"p-d-flex","p-jc-center"],[1,"pi","pi-user",2,"font-size","5rem","color","var(--purple-400)"],[1,"p-d-flex","p-jc-center","p-mt-3"],[3,"model","activeItem"],[1,"p-p-3",3,"formGroup","ngSubmit"],[1,"p-fluid"],[1,"p-field"],["type","text","pInputText","","formControlName","email","placeholder","ejemplo@ejemplo.com"],["msg-error","","colores","red","mensaje","El correo es obligatorio",4,"ngIf"],["pPassword","","type","password","formControlName","password",3,"feedback"],["msg-error","","colores","red","mensaje","La contrase\xf1a debe tener minimo 6 caracteres",4,"ngIf"],["pButton","","label","Ingresar","type","submit",1,"p-button-rounded",2,"width","400px"],[1,"p-mb-3"],[1,"p-text-center","p-mt-2"],["routerLink","/login/registro",2,"color","var(--purple-400)"],["msg-error","","colores","red","mensaje","El correo es obligatorio"],["msg-error","","colores","red","mensaje","La contrase\xf1a debe tener minimo 6 caracteres"]],template:function(e,t){1&e&&(n.Ob(0,"div",0),n.Ob(1,"div",1),n.Jb(2,"i",2),n.Nb(),n.Ob(3,"div",3),n.Jb(4,"p-tabMenu",4),n.Nb(),n.Ob(5,"form",5),n.Vb("ngSubmit",function(){return t.login()}),n.Ob(6,"div",6),n.Ob(7,"div",7),n.Ob(8,"label"),n.Ob(9,"strong"),n.rc(10,"Correo"),n.Nb(),n.Nb(),n.Jb(11,"input",8),n.pc(12,f,1,0,"span",9),n.Nb(),n.Ob(13,"div",7),n.Ob(14,"label"),n.Ob(15,"strong"),n.rc(16,"Contrase\xf1a"),n.Nb(),n.Nb(),n.Jb(17,"input",10),n.pc(18,v,1,0,"span",11),n.Nb(),n.Nb(),n.Ob(19,"div",1),n.Jb(20,"button",12),n.Nb(),n.Nb(),n.Ob(21,"div",13),n.Jb(22,"p-divider"),n.Ob(23,"p",14),n.rc(24,"\xbfAun no tienes una cuenta? "),n.Ob(25,"a",15),n.rc(26," da click aqui "),n.Nb(),n.Nb(),n.Nb(),n.Nb()),2&e&&(n.xb(4),n.ac("model",t.items)("activeItem",t.activeItem),n.xb(1),n.ac("formGroup",t.miFormulario),n.xb(7),n.ac("ngIf",t.tieneError("email")),n.xb(5),n.ac("feedback",!1),n.xb(1),n.ac("ngIf",t.tieneError("password")))},directives:[b.a,s.k,s.g,s.d,s.a,m.a,s.f,s.c,o.j,u.b,d.a,g.a,i.d,h],styles:["*[_ngcontent-%COMP%]{color:var(--text-color)}#formulario[_ngcontent-%COMP%]{width:450px;height:auto;background-color:var(--surface-b);border-radius:5px;box-shadow:1px -3px 38px 21px rgba(0,0,0,.79)}"]}),e})();var O=r("AytR"),N=r("JIr8"),j=r("LRne"),I=r("IheW");let w=(()=>{class e{constructor(e){this.http=e,this.apiUrl=O.a.apiUrl}crearUsuario(e){return this.http.post(this.apiUrl+"/user",e).pipe(Object(N.a)(e=>Object(j.a)(e)))}obtenerRoles(){return this.http.get(this.apiUrl+"/rol").pipe(Object(N.a)(e=>Object(j.a)(e)))}}return e.\u0275fac=function(t){return new(t||e)(n.Sb(I.a))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=r("arFO"),k=r("hhfa");function C(e,t){1&e&&n.Jb(0,"span",20)}function y(e,t){1&e&&n.Jb(0,"span",20)}function J(e,t){1&e&&n.Jb(0,"span",20)}function E(e,t){1&e&&n.Jb(0,"span",21)}function L(e,t){1&e&&(n.Jb(0,"p-divider"),n.Ob(1,"li"),n.rc(2,"La contrase\xf1a debe tener minimo 6 caracteres"),n.Nb())}const M=[{path:"",component:a,children:[{path:"auth",component:x},{path:"registro",component:(()=>{class e{constructor(e,t,r){this.usuarioService=e,this.router=t,this.fb=r,this.roles=[],this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.miFormulario=this.fb.group({name:["",[s.j.required,s.j.minLength(3)]],last_name:["",[s.j.required,s.j.minLength(3)]],email:["",[s.j.required,s.j.pattern(this.emailPattern)]],rol_id:["",[s.j.required]],password:["",[s.j.required,s.j.minLength(6)]]})}ngOnInit(){this.usuarioService.obtenerRoles().subscribe(e=>{if(console.log(e),!0===e.ok){const{roles:t}=e;t.forEach(e=>{this.roles.push({label:e.nom_rol,value:e.id})})}}),this.items=[{label:"Login",icon:"pi pi-fw pi-sign-in",routerLink:"/login/auth"},{label:"Registrarse",icon:"pi pi-fw pi-calendar",routerLink:"/login/registro"}],this.activeItem=this.items[1]}crearUsuario(){this.usuarioService.crearUsuario(this.miFormulario.value).subscribe(e=>{if(console.log(e),!0===e.ok)return this.router.navigateByUrl("/sesion"),c.a.fire("Bienvendio","Usuario creado","success"),void sessionStorage.setItem("token",e.token);c.a.fire("Oppsss...",e.error.errors[0].msg,"error")})}tieneError(e){var t,r;return(null===(t=this.miFormulario.get(e))||void 0===t?void 0:t.touched)&&(null===(r=this.miFormulario.get(e))||void 0===r?void 0:r.invalid)||!1}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(w),n.Ib(i.b),n.Ib(s.b))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-registro"]],decls:37,vars:10,consts:[["id","formulario",1,"p-p-3","animate__animated","animate__fadeInDown"],[1,"p-text-center"],[1,"p-d-flex","p-jc-center","p-mt-3"],[3,"model","activeItem"],[1,"p-p-3",3,"formGroup","ngSubmit"],[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col"],["type","text","pInputText","","formControlName","name","placeholder","'Juan Carlos'"],["msg-error","","colores","red","mensaje","El nombre es obligatorio",4,"ngIf"],["type","text","pInputText","","formControlName","last_name","placeholder","'Garc\xeda Lop\xe9z'"],[1,"p-field","p-col-7"],["type","text","pInputText","","formControlName","email","placeholder","ejemplo@ejemplo.com"],[1,"p-field","p-col-5"],["placeholder","-- rol --","optionLabel","label","optionValue","value","formControlName","rol_id",3,"options"],["msg-error","","colores","red","mensaje","El rol es obligatorio",4,"ngIf"],[1,"p-field","p-col-12"],["formControlName","password",3,"toggleMask"],["pTemplate","footer"],[1,"p-d-flex","p-jc-center"],["pButton","","label","Resgistarse","type","submit",1,"p-button-rounded",2,"width","400px",3,"disabled"],["msg-error","","colores","red","mensaje","El nombre es obligatorio"],["msg-error","","colores","red","mensaje","El rol es obligatorio"]],template:function(e,t){1&e&&(n.Ob(0,"div",0),n.Ob(1,"div"),n.Ob(2,"h1",1),n.rc(3,"Crea tu cuenta"),n.Nb(),n.Jb(4,"p-divider"),n.Nb(),n.Ob(5,"div",2),n.Jb(6,"p-tabMenu",3),n.Nb(),n.Ob(7,"form",4),n.Vb("ngSubmit",function(){return t.crearUsuario()}),n.Ob(8,"div",5),n.Ob(9,"div",6),n.Ob(10,"label"),n.rc(11," Nombre "),n.Nb(),n.Jb(12,"input",7),n.pc(13,C,1,0,"span",8),n.Nb(),n.Ob(14,"div",6),n.Ob(15,"label"),n.rc(16," Apellido "),n.Nb(),n.Jb(17,"input",9),n.pc(18,y,1,0,"span",8),n.Nb(),n.Nb(),n.Ob(19,"div",5),n.Ob(20,"div",10),n.Ob(21,"label"),n.rc(22," Correo "),n.Nb(),n.Jb(23,"input",11),n.pc(24,J,1,0,"span",8),n.Nb(),n.Ob(25,"div",12),n.Ob(26,"label"),n.rc(27," Rol "),n.Nb(),n.Jb(28,"p-dropdown",13),n.pc(29,E,1,0,"span",14),n.Nb(),n.Ob(30,"div",15),n.Ob(31,"label"),n.rc(32," Contrase\xf1a "),n.Nb(),n.Ob(33,"p-password",16),n.pc(34,L,3,0,"ng-template",17),n.Nb(),n.Nb(),n.Nb(),n.Ob(35,"div",18),n.Jb(36,"button",19),n.Nb(),n.Nb(),n.Nb()),2&e&&(n.xb(6),n.ac("model",t.items)("activeItem",t.activeItem),n.xb(1),n.ac("formGroup",t.miFormulario),n.xb(6),n.ac("ngIf",t.tieneError("name")),n.xb(5),n.ac("ngIf",t.tieneError("last_name")),n.xb(6),n.ac("ngIf",t.tieneError("email")),n.xb(4),n.ac("options",t.roles),n.xb(1),n.ac("ngIf",t.tieneError("rol")),n.xb(4),n.ac("toggleMask",!0),n.xb(3),n.ac("disabled",t.miFormulario.invalid))},directives:[g.a,b.a,s.k,s.g,s.d,s.a,m.a,s.f,s.c,o.j,_.a,u.a,k.c,d.a,h],styles:["#formulario[_ngcontent-%COMP%]{width:450px;height:auto;background-color:var(--surface-b);border-radius:5px;box-shadow:1px -3px 38px 21px rgba(0,0,0,.79)}"]}),e})()},{path:"**",redirectTo:"auth"}]}];let P=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[i.e.forChild(M)],i.e]}),e})();var F=r("5Ovr"),R=r("PCNd");let S=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[o.b,P,F.a,s.i,R.a]]}),e})()}}]);