(this.webpackJsonpv6=this.webpackJsonpv6||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('{"code":1000,"message":"success","result":{"data":[{"image":"/image/vlive_logo.png","title":"Back-End Web Developer","desc":"Web, API, JAVA, Spring","location":"V LIVE","period":"Dec 2019 ~ Present"},{"image":"/image/wavlogo.png","title":"Full-Stack Web Developer","desc":"Web, API, Real-time Processing, CMS, Batch, Javascript, React JS, Java, Spring, MySQL, Redis, Storm","location":"WAV Media","period":"Aug 2016 ~ Nov 2019"},{"image":"/image/ksign.png","title":"Back-End Web Developer","desc":"SSO (Single Sign-On), EAM (Enterprise Asset Management)","location":"KSign","period":"Jun 2014 ~ Jul 2016"},{"image":"/image/mnsu.jpg","title":"College Graduation","desc":"Bachelor in Computer Information Technology","location":"Minnesota State University, Mankato","period":"May 2014"},{"image":"/image/building.png","title":"Student Consultant","desc":"Help customers who have a trouble with anything related to computers. IT Solutions on the first floor of Wissink Hall.","location":"Academic Computer Center","period":"Aug 2013 ~ May 2014"},{"image":"/image/testenc.jpg","title":"Android Application Tester","desc":"Created thousands of test cases. Run functional, regression, and alpha testing.","location":"TEST ENC","period":"Summer of 2013"},{"image":"/image/building.png","title":"Student Consultant","desc":"Help customers who have a trouble with anything related to computers around campus.","location":"IT Solutions","period":"Aug 2012 ~ May 2013"}]}}')},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),i=t.n(c),s=(t(16),t(1)),r=t(2),m=t(4),o=t(3),u=t(5),g=t(9),d=t.n(g),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"hero is-medium is-warning"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},"Hi there!"),l.a.createElement("h2",{className:"subtitle"},l.a.createElement(d.a,{options:{autoStart:!0,loop:!0},onInit:function(e){e.typeString("I am DAEWOONG KIM.").pauseFor(2500).deleteChars(13).typeString("a full-stack developer.").pauseFor(2500).deleteChars(23).typeString("happy because I do what I want.").pauseFor(2500).start()}})))))}}]),a}(l.a.Component),v=(t(17),function(){return l.a.createElement("footer",{className:"footer",style:{backgroundColor:"#ffdd57",padding:"1rem 1.5rem 1rem"}},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://bulma.io"},l.a.createElement("img",{src:"/image/made-with-bulma--semiblack.png",alt:"Made with Bulma",width:"128",height:"24"})))))}),p=t(6),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card",style:{boxShadow:"none"}},l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"content"},l.a.createElement("strong",null,"DAEWOONG KIM"),l.a.createElement("br",null),l.a.createElement("small",null,"Full-Stack Web Developer"),l.a.createElement("br",null),"Javascript, React JS, Java, Spring, MySQL, Redis, Storm"),l.a.createElement("a",{href:"https://www.instagram.com/sh_chuck/"},l.a.createElement("figure",{className:"image is-32x32",style:{float:"left"}},l.a.createElement("img",{src:"/image/insta.png",alt:"instagram"}))),l.a.createElement("a",{href:"https://github.com/insidedw",style:{float:"left",paddingLeft:"3px"}},l.a.createElement("figure",{className:"image is-32x32"},l.a.createElement("img",{src:"/image/github-sign.png",alt:"github"})))))}}]),a}(l.a.Component),f=(t(18),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.exp;return l.a.createElement("div",{className:"box timeline"},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:"".concat(e.image),alt:e.location}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,e.title),l.a.createElement("br",null),e.location,l.a.createElement("br",null),l.a.createElement("small",null,e.period),l.a.createElement("br",null),e.desc)),l.a.createElement("nav",{className:"level is-mobile"},l.a.createElement("div",{className:"level-left"})))))}}]),a}(l.a.Component)),b=t(10),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={timelines:[]},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.initTimelineData()}},{key:"initTimelineData",value:function(){this.setState({timelines:[].concat(Object(p.a)(this.state.timelines),Object(p.a)(b.result.data))})}},{key:"render",value:function(){var e=this.state.timelines;return l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container is-fullhd"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-one-fifths"},l.a.createElement(h,null)),l.a.createElement("div",{className:"column is-four-fifths"},l.a.createElement("div",{className:"tabs"},l.a.createElement("ul",null,l.a.createElement("li",{className:"is-active"},l.a.createElement("a",null,"Timeline")))),e.map((function(e){return l.a.createElement(f,{exp:e,key:e.period})})),l.a.createElement("div",{className:"box projects",style:{display:"none"}},l.a.createElement("article",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("figure",{className:"image is-64x64"},l.a.createElement("img",{src:"image/wavlogo.png"}))),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,"Converted Web from jQuery to React JS")," ",l.a.createElement("br",null),l.a.createElement("small",null,"Aug 2019 ~ Oct 2019")," ",l.a.createElement("br",null)),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/home.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/artist_dashboard.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/video_end.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/video_manage.png"})))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/insight_content.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/insight_earning.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/artist_edit.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/video_manage.png"})))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/upload_end.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/upload_video_end.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/upload_audio_visual_end.png"}))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:"image/wav_web_screenshots/upload_audio_final_end.png"}))))),l.a.createElement("nav",{className:"level is-mobile"},l.a.createElement("div",{className:"level-left"})))))))))}}]),a}(l.a.Component);var w=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(N,null),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.edcd6599.chunk.js.map