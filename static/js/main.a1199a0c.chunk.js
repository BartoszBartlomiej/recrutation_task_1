(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/blok.b9c5c3f4.svg"},function(e,t,a){e.exports=a.p+"static/media/metraz.fbfdcb3b.svg"},function(e,t,a){e.exports=a.p+"static/media/samochod.c6d14f95.svg"},,,function(e,t,a){e.exports=a.p+"static/media/logo.4cb4c179.png"},function(e,t,a){e.exports=a.p+"static/media/connected.a9e6d56f.png"},function(e,t,a){e.exports=a.p+"static/media/form1.1e8824bb.jpg"},function(e,t,a){e.exports=a.p+"static/media/wpis-1.4d1f8155.jpg"},function(e,t,a){e.exports=a.p+"static/media/wpis-1-overlay.d7288184.jpg"},function(e,t,a){e.exports=a.p+"static/media/wpis-2.8259f0cc.jpg"},function(e,t,a){e.exports=a.p+"static/media/wpis-2-overlay.633259d2.jpg"},,,,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),i=(a(32),a(2)),s=a(3),m=a(5),o=a(4),u=a(6),E=(a(33),a(16)),p=a.n(E),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleMenuOpen=function(){"true"===a.state.hide?a.setState({class:"open oppenned",hide:"false"}):a.setState({class:"open",hide:"true"})},a.state={class:"open",hide:"true"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"hamburgerMenu"},l.a.createElement("div",{onClick:this.handleMenuOpen,display:this.state.hide,className:this.state.class},l.a.createElement("span",{className:"cls"}),l.a.createElement("span",null,l.a.createElement("ul",{className:"sub-menu "},l.a.createElement("li",null,l.a.createElement("a",{href:"/#main"},"STRONA G\u0141OWNA")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#search"},"WYSZUKIWARKA")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"INWESTYCJE")),l.a.createElement("li",null,l.a.createElement("a",{href:"/#blog"},"BLOG")))),l.a.createElement("span",{className:"cls"})))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleScroll=function(){var e=a.state.prevScrollPosition,t=window.pageYOffset,n=e>t;a.setState({prevScrollPosition:t,visible:n})},a.state={prevScrollPosition:window.pageYOffset,visible:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("nav",{className:"scroll",style:this.state.visible?{width:"90%",padding:"10px",position:"fixed",top:"0",left:"5%",transition:"top 0.6s",margin:"0 auto",zIndex:"10"}:{width:"90%",padding:"10px",position:"fixed",top:"-100px",left:"5%",transition:"top 0.6s",margin:"0 auto",zIndex:"10"}},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:p.a})),l.a.createElement("nav",null,l.a.createElement("ul",{className:"desktopMenu"},l.a.createElement("li",null,l.a.createElement("a",{href:"/recrutation_task_1/#main"},"STRONA G\u0141OWNA")),l.a.createElement("li",null,l.a.createElement("a",{href:"/recrutation_task_1/#search"},"WYSZUKIWARKA")),l.a.createElement("li",null,l.a.createElement("a",{href:"/recrutation_task_1/#ask"},"INWESTYCJE")),l.a.createElement("li",null,l.a.createElement("a",{href:"/recrutation_task_1/#blog"},"BLOG")))),l.a.createElement(d,null))}}]),t}(n.Component),h=a(17),v=a.n(h),f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{id:"main"},l.a.createElement("div",{className:"content"},l.a.createElement(b,null),l.a.createElement("div",{className:"header_img"},l.a.createElement("img",{src:v.a})))))}}]),t}(n.Component),N=a(26),O=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.investment;return l.a.createElement("div",{className:"find__investment"},l.a.createElement("div",{className:"find__investment__description"},l.a.createElement("div",null,l.a.createElement("h2",null,e.nazwa),l.a.createElement("div",{className:"under_line"}),l.a.createElement("ul",null,l.a.createElement("li",null,"Metra\u017c: ",e.metraz," m2"),l.a.createElement("li",null,"Cena netto: ",e.netto," z\u0142*"),l.a.createElement("li",{className:"smaller_text"},"* cena nie zawiera 23% VAT"),l.a.createElement("li",null,"Pietro: ",e.pietro," - Parter"),l.a.createElement("li",null,"Przeznaczenie: ",e.przeznaczenie),l.a.createElement("li",null,"Status: ",e.status)),l.a.createElement("div",{className:"find__investment__buttons"},l.a.createElement("button",null,l.a.createElement("a",{href:"/recrutation_task_1/#ask"},"Zapytaj")),l.a.createElement("button",null,"Pobierz plan"))),l.a.createElement("img",{className:"project",src:e.obrazki.rzut}),l.a.createElement("div",{className:"building"},l.a.createElement("div",{className:"north"},l.a.createElement("p",null,"N"),l.a.createElement("div",{className:"north__line"}),l.a.createElement("div",{className:"north__circle"})),l.a.createElement("img",{src:e.obrazki.pietro,className:"building__project"}))))}}]),t}(n.Component),_=a(9),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).localInformation=function(){fetch("https://api.adcookie.usermd.net/deweloper/").then(function(e){return e.json()}).then(function(e){a.setState({localInfo:Object(N.a)(e)})})},a.nextBtn=function(){a.state.currentInvestment===a.state.localInfo.length-1?a.setState({currentInvestment:0}):a.setState({currentInvestment:a.state.currentInvestment+1})},a.prevBtn=function(){0===a.state.currentInvestment?a.setState({currentInvestment:4}):a.setState({currentInvestment:a.state.currentInvestment-1})},a.state={localInfo:[],currentInvestment:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.localInformation()}},{key:"render",value:function(){return 0===this.state.localInfo.length?null:l.a.createElement("div",{id:"search",className:"find"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"find__description"},l.a.createElement("h1",null,"Znajd\u017a inwestycj\u0119, kt\xf3r\u0105 pokochasz!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.")),l.a.createElement(O,{investment:this.state.localInfo[this.state.currentInvestment]}),l.a.createElement("div",{className:"arrows"},l.a.createElement("div",{className:"pointer",onClick:this.prevBtn},l.a.createElement("span",null,l.a.createElement(_.a,{icon:"arrow-left"})),l.a.createElement("span",null,"Poprzedni")),l.a.createElement("div",{onClick:this.nextBtn},l.a.createElement("span",null,"Nast\u0119pny"),l.a.createElement("span",null,l.a.createElement(_.a,{icon:"arrow-right"}))))))}}]),t}(n.Component),g=a(18),I=a.n(g),j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"ask",className:"firstContact"},l.a.createElement("div",{className:"content"},l.a.createElement("img",{src:I.a}),l.a.createElement("div",{className:"firstContact__form"},l.a.createElement("h2",null,"Zainteresowany kupnem? Zostaw numer!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem."),l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"name",placeholder:"Imi\u0119 i nazwisko"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"phoneNumber",placeholder:"Telefon"}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"call",placeholder:"Kiedy najlepiej zadzwoni\u0107"}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{id:"check",type:"checkbox"}),l.a.createElement("span",{className:"checkmark"})),l.a.createElement("p",{className:"permission"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit."),l.a.createElement("label",null,l.a.createElement("input",{id:"check",type:"checkbox"}),l.a.createElement("span",{className:"checkmark"})),l.a.createElement("p",{className:"permission"},"Nervous, aren't you? I can see it in your soul. I can feel it in your bones. This unnerving feeling going through your spine."),l.a.createElement("button",{type:"button"},"Wy\u015blij")))))}}]),t}(n.Component),y=a(11),k=a.n(y),T=a(12),w=a.n(T),S=a(13),C=a.n(S),L=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"icons"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"icons__icon"},l.a.createElement("img",{src:k.a}),l.a.createElement("p",null,"ZNAKOMITA LOKALIZACJA")),l.a.createElement("div",{className:"icons__icon"},l.a.createElement("img",{src:w.a}),l.a.createElement("p",null,"CIEKAWY ROZK\u0141AD")),l.a.createElement("div",{className:"icons__icon"},l.a.createElement("img",{src:C.a}),l.a.createElement("p",null,"\u0141ATWA PRZEPROWADZKA"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"icons__icon"},l.a.createElement("img",{src:k.a}),l.a.createElement("p",null,"ZNAKOMITA LOKALIZACJA")),l.a.createElement("div",{className:"icons__icon"},l.a.createElement("img",{src:w.a}),l.a.createElement("p",null,"CIEKAWY ROZK\u0141AD")),l.a.createElement("div",{className:"icons__icon"},l.a.createElement("img",{src:C.a}),l.a.createElement("p",null,"\u0141ATWA PRZEPROWADZKA")))))}}]),t}(n.Component),P=a(19),R=a.n(P),x=a(20),W=a.n(x),M=a(21),z=a.n(M),D=a(22),Z=a.n(D),K=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"blog",className:"blog"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"blog__post_one"},l.a.createElement("div",{className:"blog__post_one__img"},l.a.createElement("img",{className:"post1overlay",src:W.a}),l.a.createElement("img",{className:"post1",src:R.a})),l.a.createElement("div",{className:"blog__post_one__text"},l.a.createElement("p",{className:"topic"},"BARDZO CIEKAWY WPIS NA NASZYM BLOGU, KT\xd3REGO PEWNIE NIKT NIE PRZECZYTA"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."),l.a.createElement("button",null,"Wi\u0119cej"))),l.a.createElement("div",{className:"blog__post_two"},l.a.createElement("div",{className:"blog__post_two__img"},l.a.createElement("img",{className:"post1overlay",src:Z.a}),l.a.createElement("img",{className:"post1",src:z.a})),l.a.createElement("div",{className:"blog__post_two__text"},l.a.createElement("p",{className:"topic"},"BARDZO CIEKAWY WPIS NA NASZYM BLOGU, KT\xd3REGO PEWNIE NIKT NIE PRZECZYTA"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed."),l.a.createElement("button",null,"Wi\u0119cej")))))}}]),t}(n.Component),U=a(10),q=a.n(U),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleScroll=function(){var e=a.aboutElem.current.offsetTop<=window.pageYOffset+window.innerHeight/2;a.setState({isVisible:e})},a.state={isVisible:!1},a.aboutElem=l.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return this.state.isVisible?l.a.createElement("div",{ref:this.aboutElem,className:"about"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"about__header"},l.a.createElement("h4",null,"WI\u0118CEJ O NAS"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("h3",null,"Podobno cyferki sprzedaj\u0105 :)"),l.a.createElement("p",null,"All alone! Whether you like it or not, alone is something you'll be quite a lot!")),l.a.createElement("div",{className:"about__numbers"},l.a.createElement("div",{className:"about__numbers_number"},l.a.createElement("p",{className:"number"},l.a.createElement(q.a,{end:633,duration:4,delay:.5})),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCIN")),l.a.createElement("div",{className:"about__numbers_number"},l.a.createElement("p",{className:"number"},l.a.createElement(q.a,{end:495,duration:4,delay:.7})),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT.")),l.a.createElement("div",{className:"about__numbers_number"},l.a.createElement("p",{className:"number"},l.a.createElement(q.a,{end:15,duration:4,delay:.9})),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT"))))):l.a.createElement("div",{ref:this.aboutElem,className:"about"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"about__header"},l.a.createElement("h4",null,"WI\u0118CEJ O NAS"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("h3",null,"Podobno cyferki sprzedaj\u0105 :)"),l.a.createElement("p",null,"All alone! Whether you like it or not, alone is something you'll be quite a lot!")),l.a.createElement("div",{className:"about__numbers"},l.a.createElement("div",{className:"about__numbers_number"},l.a.createElement("p",{className:"number"},"0"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCIN")),l.a.createElement("div",{className:"about__numbers_number"},l.a.createElement("p",{className:"number"},"0"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT.")),l.a.createElement("div",{className:"about__numbers_number"},l.a.createElement("p",{className:"number"},"0"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("p",null,"ADIPISCING ELIT. ALIQUAM AT PORTTITOR SEM. ALIQUAM ERAT VOLUTPAT")))))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"secondContact"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"secondContact__header"},l.a.createElement("h4",null,"KONTAKT"),l.a.createElement("div",{className:"under_line"}),l.a.createElement("h3",null,"Napisz do nas!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.")),l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"name",placeholder:"Imi\u0119 i nazwisko"}),l.a.createElement("input",{type:"text",name:"phoneNumber",placeholder:"Telefon lub adres email"})),l.a.createElement("br",null),l.a.createElement("input",{className:"message",type:"text",name:"call",placeholder:"Twoja wiadomo\u015b\u0107"}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{id:"check",type:"checkbox"}),l.a.createElement("span",{className:"checkmark"}),l.a.createElement("p",{className:"permission"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. D")),l.a.createElement("label",null,l.a.createElement("input",{id:"check",type:"checkbox"}),l.a.createElement("span",{className:"checkmark"}),l.a.createElement("p",{className:"permission"},"If you're reading this there's something not quite right with you. And that's fantastic. Believe in yourself because we already do.")),l.a.createElement("label",null,l.a.createElement("input",{id:"check",type:"checkbox"}),l.a.createElement("span",{className:"checkmark"}),l.a.createElement("p",{className:"permission"},"I am sure there's something not quite right with me, but I am love it! Thanks for believing in me :)")),l.a.createElement("button",{type:"button"},"Wy\u015blij"))))}}]),t}(n.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"COPYRIGHT 2019. Created Without Any Original Thought by Sunday & Autumn"),l.a.createElement("p",null,"Polityka prywatno\u015bci")))}}]),t}(n.Component),J=a(7),Q=a(23),V=a(24),H=a(25);J.b.add(V.faBars),J.b.add(Q.a),J.b.add(H.faArrowRight);var $=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement(A,null),l.a.createElement(j,null),l.a.createElement(L,null),l.a.createElement(K,null),l.a.createElement(Y,null),l.a.createElement(B,null),l.a.createElement(G,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,1,2]]]);
//# sourceMappingURL=main.a1199a0c.chunk.js.map