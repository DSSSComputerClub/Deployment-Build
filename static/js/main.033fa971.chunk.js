(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},80:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(1),s=r.n(a),c=r(41),i=(r(63),c.a.initializeApp({apiKey:"AIzaSyD0zP_7asOV3PAhVlThHjY9gsJ9FH4bobc",authDomain:"dssscomputerclubsite.firebaseapp.com",databaseURL:"https://dssscomputerclubsite.firebaseio.com",projectId:"dssscomputerclubsite",storageBucket:"dssscomputerclubsite.appspot.com",messagingSenderId:"162808084584",appId:"1:162808084584:web:9817e24da584c6f4ff23dd"}),r(64),r(22)),o=r.n(i),l=(r(68),r(48)),d=r(12),h=r(36),b=r(37),j=r(43),u=r(42),p=function(e){Object(j.a)(r,e);var t=Object(u.a)(r);function r(){return Object(h.a)(this,r),t.apply(this,arguments)}return Object(b.a)(r,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return Object(n.jsx)(s.a.Fragment,{})}}]),r}(a.Component),A=Object(d.f)(p),m=r(26),x=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"bg-home"}),Object(n.jsxs)("div",{className:"landing",children:[Object(n.jsx)("h3",{children:"David Suzuki Secondary School"}),Object(n.jsx)("h1",{children:"Computer Club"}),Object(n.jsxs)(m.a,{className:"mt-3 text-center",children:[Object(n.jsx)(m.a.Toggle,{variant:"outline-light",id:"dropdown-basic",children:"Navigation"}),Object(n.jsxs)(m.a.Menu,{children:[Object(n.jsx)(m.a.Item,{href:"/Deployment-Build/#/resources",children:"Resources"}),Object(n.jsx)(m.a.Item,{onClick:function(){alert("Coming Soon")},children:"Events"}),Object(n.jsx)(m.a.Item,{href:"/Deployment-Build/#/activities",children:"Activities"}),Object(n.jsx)(m.a.Item,{href:"https://github.com/DSSSComputerClub",target:"_blank",rel:"noopener noreferrer",children:"View GitHub"}),Object(n.jsx)(m.a.Item,{href:"https://discord.gg/846357CrTY",target:"_blank",rel:"noopener noreferrer",children:"Join our Discord Server"})]})]})]})]})},g=r(87),O=r(88),f=r(56),v=r(90),C=r(91),w=r(86),S=function(){return Object(n.jsxs)(v.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:[Object(n.jsx)(v.a.Brand,{href:"/Deployment-Build/",children:"Home"}),Object(n.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(v.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsxs)(C.a,{className:"mr-auto",children:[Object(n.jsx)(C.a.Link,{href:"/Deployment-Build/#/resources",children:"Resources"}),Object(n.jsx)(C.a.Link,{onClick:function(){alert("Coming Soon")},children:"Events"})]}),Object(n.jsxs)(C.a,{children:[Object(n.jsxs)(w.a,{title:"Activities",id:"basic-nav-dropdown",children:[Object(n.jsx)(w.a.Item,{href:"https://github.com/DSSSComputerClub/Senior-CCC-Prep",target:"_blank",rel:"noopener noreferrer",children:"Senior CCC Prep"}),Object(n.jsx)(w.a.Item,{href:"https://github.com/DSSSComputerClub/Junior-CCC-Prep",target:"_blank",rel:"noopener noreferrer",children:"Junior CCC Prep"}),Object(n.jsx)(w.a.Item,{href:"https://github.com/DSSSComputerClub/Python-Basics",target:"_blank",rel:"noopener noreferrer",children:"Python Basics"})]}),Object(n.jsx)(C.a.Link,{href:"https://github.com/DSSS-Computer-Club",target:"_blank",rel:"noopener noreferrer",children:"View GitHub"})]})]})]})},y=r(57),k=function(e){Object(j.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(h.a)(this,r),(e=t.call(this)).state={data:[{c1:"",c2:""}]},e}return Object(b.a)(r,[{key:"getData",value:function(){var e=this,t=[],r=this.props.node;return c.a.database().ref(r).on("value",(function(r){r.forEach((function(e){var r=e.val(),a={c1:Object(n.jsx)("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",children:r.num}),c2:r.lesson};t.push(a)})),e.setState({data:t})}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=[{Header:this.props.c1Title,accessor:"c1",width:this.props.c1Width,maxWidth:this.props.c1Width},{Header:this.props.c2Title,accessor:"c2",width:this.props.c2Width,maxWidth:this.props.c2Width}];return Object(n.jsx)("div",{className:"react-data-table mb-5",children:Object(n.jsx)(y.a,{columns:e,data:this.state.data,defaultPageSize:this.props.pageSize})})}}]),r}(s.a.Component),N=function(){return Object(n.jsx)(g.a,{fluid:!0,className:"text-center footer",children:Object(n.jsxs)("div",{className:"pt-5 pb-3 text-center",children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/shahrukh-qureshi-a735031b1/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAQAAACpiKIyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkCxwCLigRKF+6AAACf0lEQVRIx+2VTWtdVRiFn/Xue3MTiKZNP6B26EBRnLQUFOwfsOBQRJz4Axz5A0Rw4g8QEUTBSQtqB6WCglAzcaB0UOigIqEforFp0xuTJic35553OWijaXsv5kgHDu4avZu198Pae7/nbJhooon+JzKWlXLJMpCVOviYwLqHNslQ7yq5qLaMGBNZGPMSJ+xzRjf9WMAWovhz/8CP+dHLgfqtE48OXEy+YOcwm9qfvpjcCVqiRybeMtruu1JRbFVfzFRKzmOlUlaGI1XLGup6y8Qshrn0xu+/XFt8732egs+iCsetWC4uxiTZ6WtIrVYbuQoyhkM8y/59gUxi/uAGxvt8JHvJJS5qyGobcgbkAX/rC77g89/Nb0eeyYVcqE//eizP5lL2c7H54Mq0VWuFFqffxBENj6bT6Q2/fsLK5bS93VQrtn3PGXz9SW8zLo/Bjm43lmyzRpKuNjqGNaWH3ZieX1vZGAiSuvvKybdO5zNldOLRH8iOFwpFWFAcyHx/7tibb7+6/BNh5O6pd9TJJ0Yu7vx7h/ydqGxuvPbhrYWPB+uzh74SVs6tTlPNa71l4ockmua52wz2x9NrgIRFQTny+lqAAYZGx527V435i7QEJ13j3bBxvdYSDPUe5427PGE3pHHasFPveGQ2ivvjvYMFpsQcwPTMlCDmCOjNdgCsKUXpQW8Gj9v0SHBlpLs3ztw+Gnm3uTqE3768+Xzkn1tLCai5fu2b1V638/MVurDOmHCPyki1u1McpKGw5TsqHMYEm6wiW7M8SRL0qRB7fV8sqGX9M3Y86Pu/vSiHQWZKRUVFCHq7anRcXRUVxf3xno/iEc8P1A97E000UVv9BegeP3qUeS5WAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTExLTI4VDAyOjQ2OjM2KzAwOjAwKfJWMwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMS0yOFQwMjo0NjozNiswMDowMFiv7o8AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",alt:"LinkedIn"})}),Object(n.jsx)("a",{href:"https://github.com/ShaleeQureshi",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBh0BAyR63lTzAAAEGElEQVRIx3WVT2hcVRTGf/e8OzMvb5LRJjXEjNW6EP/VpgULVitFpVK1VCmCKxFBUKHdFEQR3FhxIVRBu3QjaLtQalelWLuwtIK2IDZC04Yuqplo0ySYSeblzcy797h40/mTxPNW995zvnPu9913jgGACqBgRAJf16WR6Hm7y44Fo2YAdNFNp7+np+OTpX9yxon3qgZDGQADMI0CiKHp04cKBwv7wnV5tUYydDypNkwyn3zfOBxczotiPCjlDGAaD2hwzY1E0UfRgX5bAI8irQQKeAxSZymNP699cD1+OBAHUMZUshxB7HL3h9+VNhUdSpBVtsIUh6kF1fHk5ebVqAVhKoAPlp3dFp0cXJ9Ls2BdA0EBo7imnb8Zv5BeCANxYKZQWfb2gejs0B02xdK+t+kB6VqnqZ2biXemE31ivKiZ8loMjw32hMcAuIxcFIfQpJ4dWpsODodHffSnVyMiI/QdKm3JNW+FK/Au75ASAIoCARVe4WvAAdhcs7Q1+vBORGzsZPPA/iKdcINjil8RRrlIE0OR7ZzmPFs6N7JFkgMLX8XjNsTsL+Zol2/wBGxgkh9YJoegeM4xwBD3dAAMaTG/vJ83pVYuvBhC0OFa+JsrWELWUaSPiH7WYREu0OUYhIQvxWUJd4fD+A7hHjjOJCEOh299DkeRH/ml5ZGVGg4Xdot9Jk+L7PbbnqRwy42VJ13Omsc+LXbM0i24AZbWfIjgqfYgWuyYBGXhf/zXrKF7aQjKYgZ6TzwwikPWDN+wAoDSaj9gL0KK7cI15FjkbnbCCmjRRXpIDFAe5T1i/qXRljZhltv5mFK3YKpQta7ib5PWz+cRLnGW13mNTRzjMjMoSp6NbONVyvju/KrGVZg6WldNtcve0jc02/pZH9FtOqa7dF5VnTrtsbSuU99IeqbRRaICnzDOIRaB8yQY8lSYbNXXy2qD9IxNTiUz/cO3OojBMcD7vM1xSixQwiEoyWoRFUlu1E9JsVI/kbT+0oxEz16+5Unu414cgsGsISouoX4impaE+pFaA9tRQlAe5zO+5CmqgG83lp78ttaoH0mQKJDx+EgN0u4n4/GAoY8CBcLVFaQ14i/kjygwf5nruj4qnVu/NdfV0jKrUkUAZYiwJ7xpZ39b3DETbzSdpvrT0LBdBbGmpamduxHvbF6JRLyA8WGQTsR75m42LWn3dRWPtrpieytt2rmb8Z70ShSIBzEYrOsLmhfiHbPjNYvvgJiWBqYdjK/Z2UvxE82Lfa3BIuVMUhcFk1cXHpv/dM7XLQaPw7e7erYydTvn5w8vbJ+YjILAGZRyBl4BDCpQ9/7BwsFwXzi41nCtH08O24m8KHhQ7uo8rwqKYoxI4Ju6NBI+Z5+1m4NRSkA1G+/Jyf4b2XhHDbTG+3/h2ffAuoZOxgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNi0yOVQwMTowMzozNi0wNzowMAh3eAMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDYtMjlUMDE6MDM6MzYtMDc6MDB5KsC/AAAAAElFTkSuQmCC",alt:"LinkedIn"})}),Object(n.jsx)("hr",{id:"underline"}),Object(n.jsx)("p",{children:"\xa9 2020 - Shahrukh Qureshi"})]})})},B=function(e){return Object(n.jsxs)(m.a,{className:"mt-3 text-center",children:[Object(n.jsx)(m.a.Toggle,{variant:e.variant,id:"dropdown-basic",children:e.btnName}),Object(n.jsxs)(m.a.Menu,{children:[Object(n.jsx)(m.a.Item,{href:e.url1,target:"_blank",rel:"noopener noreferrer",children:e.name1}),Object(n.jsx)(m.a.Item,{href:e.url2,target:"_blank",rel:"noopener noreferrer",children:e.name2}),Object(n.jsx)(m.a.Item,{href:e.url3,target:"_blank",rel:"noopener noreferrer",children:e.name3})]})]})},R=r(89),T=function(e){return Object(n.jsxs)(O.a,{className:"pt-5 mb-5",children:[Object(n.jsxs)(R.a,{sm:!0,children:[Object(n.jsx)("h3",{children:e.heading}),Object(n.jsx)("p",{children:e.pText}),Object(n.jsx)(f.a,{variant:e.variant,className:"mb-5",href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.btnText})]}),Object(n.jsx)(R.a,{sm:!0,className:"text-center",children:Object(n.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{src:e.image,alt:"Preview"})})})]})},M=r.p+"static/media/webdev.b503c7a7.jpg",V=r.p+"static/media/backend.bbcddab5.jfif",I=r.p+"static/media/database.5d64aec1.jpg",P=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{}),Object(n.jsx)("section",{className:"resources",children:Object(n.jsxs)(g.a,{children:[Object(n.jsxs)("div",{className:"text-center pt-5",children:[Object(n.jsx)("h1",{children:"Resources"}),Object(n.jsx)("p",{children:"Provided by Mr. Campos"}),Object(n.jsx)("p",{className:"scroll-txt mt-3 mb-2",children:"Scroll Right to View More"})]}),Object(n.jsxs)(O.a,{className:"justify-content-around mt-5",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Grade 11"}),Object(n.jsx)(k,{node:"gr11_lessons",c1Title:"Lesson Number",c1Width:200,c2Title:"Lesson",c2Width:300,pageSize:5})]}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("p",{children:"Grade 12"}),Object(n.jsx)(k,{node:"gr12_lessons",c1Title:"Lesson Number",c1Width:200,c2Title:"Lesson",c2Width:300,pageSize:5})," "]})]})]})}),Object(n.jsx)("section",{className:"additional-resources",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)("div",{className:"text-center pt-5",children:Object(n.jsx)("h1",{children:"Additional Resources"})}),Object(n.jsxs)(O.a,{className:"justify-content-around mt-5 pb-5",children:[Object(n.jsx)(B,{variant:"outline-dark",btnName:"Text Editors",url1:"https://code.visualstudio.com/",name1:"Visual Studio Code",url2:"https://atom.io/",name2:"Atom",url3:"https://www.sublimetext.com/",name3:"Sublime Text"}),Object(n.jsx)(B,{variant:"outline-dark",btnName:"Code Tutorials",url1:"https://www.khanacademy.org/computing/computer-programming",name1:"Khan Academy",url2:"https://code.org/",name2:"Code.org",url3:"https://www.codecademy.com/",name3:"Code Academy"})]}),Object(n.jsx)("hr",{id:"underline"}),Object(n.jsxs)("div",{className:"pt-5",children:[Object(n.jsx)("h1",{className:"text-center",children:"Common Tech Jobs"}),Object(n.jsx)(T,{heading:"Web/Frontend Engineer",pText:"Web Development is the development and maintenance of websites. It is what happens behind the scenes to make websites visually appealing and efficient. It involves the integration of backend and frontend services to create a seamless user experience. Web developers use a variety of languages such as Python, JavaScript, Java, HTML, SASS, etc.",variant:"outline-dark",btnText:"Read more",url:"https://www.w3schools.com/whatis/",image:M}),Object(n.jsx)("hr",{id:"underline"}),Object(n.jsx)(T,{heading:"Backend Engineer",pText:"Backend engineers typically spend time developing business logic components, server scripts, and Application Programming Interfaces (APIs) that are used by front-end developers. Backend engineers work with languages such as PHP, Ruby, Python, JavaScript, .NET, and technologies like MySQL, Java Spring, Unix servers, etc.",variant:"outline-dark",btnText:"Read more",url:"https://www.careerexplorer.com/careers/back-end-developer/",image:V}),Object(n.jsx)("hr",{id:"underline"}),Object(n.jsx)(T,{heading:"Database Engineer",pText:"Database engineers are responsible for ensuring that current programs can handle the flow of traffic along with making sure their server(s) can be scaled up easily.  They must have a solid understanding of dynamic programming to ensure that they can design new database models based on company needs. ",variant:"outline-dark",btnText:"Read more",url:"https://www.jobhero.com/job-description/examples/data-systems-administration/database-engineer",image:I}),Object(n.jsx)("hr",{id:"underline"}),Object(n.jsxs)("div",{className:"text-center mb-5 pb-5",children:[Object(n.jsx)(f.a,{variant:"outline-dark",href:"https://www.investopedia.com/articles/investing/101315/10-best-tech-jobs.asp",target:"_blank",rel:"noopener noreferrer",className:"w-50 text-center d-center",children:"Learn More"}),Object(n.jsx)("hr",{className:"mb-5",id:"underline"})]})]})]})}),Object(n.jsx)(N,{})]})},E=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{}),Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)(g.a,{children:Object(n.jsxs)("div",{className:"text-center",style:{paddingTop:"100px"},children:[Object(n.jsx)(f.a,{className:"w-100 mb-2",variant:"outline-light",href:"https://github.com/DSSSComputerClub/Senior-CCC-Prep",target:"_blank",rel:"noopener noreferrer",children:"Senior CCC Prep"}),Object(n.jsx)(f.a,{className:"w-100 mt-5 mb-2",variant:"outline-light",href:"https://github.com/DSSSComputerClub/Junior-CCC-Prep",target:"_blank",rel:"noopener noreferrer",children:"Junior CCC Prep"}),Object(n.jsx)(f.a,{className:"w-100 mt-5 mb-2",variant:"outline-light",href:"https://github.com/DSSSComputerClub/Python-Basics",target:"_blank",rel:"noopener noreferrer",children:"Python Basics"})]})})}),Object(n.jsx)(N,{})]})};var W=function(){return Object(n.jsxs)(l.a,{basename:"/Deployment-Build/",children:[Object(n.jsx)(A,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/resources",exact:!0,component:P}),Object(n.jsx)(d.a,{path:"/activities",exact:!0,component:E}),Object(n.jsx)(d.a,{path:"/",component:x})]})]})};r(76),r(77),r(78),r(79),r(80);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root"))}},[[81,1,2]]]);