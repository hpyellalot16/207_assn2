(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{191:function(e,t,s){},192:function(e,t,s){},293:function(e,t,s){},294:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(31),r=s.n(a),n=(s(191),s(2)),i=(s.p,s(192),s(52)),o=s(30),l=s(138),j=s(7),b=s(20),d=s(304),h=s(297),u=s(298),x=s(307),m=s(43),O=s(1);var p=function(e){var t=JSON.parse(localStorage.getItem("user")),s=Object(O.jsxs)(d.a,{children:[Object(O.jsx)(d.a.Item,{children:Object(O.jsx)("a",{href:"/about",children:"Home"})}),Object(O.jsx)(d.a.Item,{children:Object(O.jsx)("a",{href:"/userbookings",children:"Bookings"})}),Object(O.jsx)(d.a.Item,{children:Object(O.jsx)("a",{href:"/admin",children:"Admin"})}),Object(O.jsx)(d.a.Item,{onClick:function(){localStorage.removeItem("user"),window.location.href="/login"},children:Object(O.jsx)("li",{style:{color:"orangered"},children:"Logout"})})]});return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"header bs1",children:Object(O.jsx)(h.a,{gutter:16,justify:"center",children:Object(O.jsx)(u.a,{lg:20,sm:24,xs:24,children:Object(O.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(O.jsx)("h1",{children:Object(O.jsx)("b",{children:Object(O.jsx)(i.b,{to:"/",style:{color:"orangered"},children:"AZoom"})})}),Object(O.jsx)(x.a,{overlay:s,placement:"bottomCenter",children:Object(O.jsx)(m.a,{children:t.username})})]})})})}),Object(O.jsx)("div",{className:"content",children:e.children}),Object(O.jsxs)("div",{className:"footer text-center",children:[Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"Desinged and Developed By"}),Object(O.jsx)("p",{children:"SHEY"})]})]})},f=s(21),g=s.n(f),y=s(41),v=s(182),w=s(54),N=s.n(w),k=function(){return function(){var e=Object(y.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,N.a.get("/api/cars/getallcars");case 4:s=e.sent,t({type:"GET_ALL_CARS",payload:s.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},A=s(301),I=s(299);var D=function(){return Object(O.jsx)("div",{className:"spinner",children:Object(O.jsx)(I.a,{size:"large"})})},S=s(37),R=s.n(S),H=A.a.RangePicker;var L=function(){var e=Object(b.c)((function(e){return e.carsReducer})).cars,t=Object(b.c)((function(e){return e.alertsReducer})).loading,s=Object(c.useState)([]),a=Object(j.a)(s,2),r=a[0],n=a[1],o=Object(b.b)();return Object(c.useEffect)((function(){o(k())}),[]),Object(c.useEffect)((function(){n(e)}),[e]),Object(O.jsxs)(p,{children:[Object(O.jsx)(h.a,{className:"mt-3",justify:"center",children:Object(O.jsx)(u.a,{lg:20,sm:24,className:"d-flex justify-content-left",children:Object(O.jsx)(H,{showTime:{format:"HH:mm"},format:"MMM DD yyyy HH:mm",onChange:function(t){var s,c=R()(t[0],"MMM DD yyyy HH:mm"),a=R()(t[1],"MMM DD yyyy HH:mm"),r=[],i=Object(l.a)(e);try{for(i.s();!(s=i.n()).done;){var o=s.value;if(0==o.bookedTimeSlots.length)r.push(o);else{var j,b=Object(l.a)(o.bookedTimeSlots);try{for(b.s();!(j=b.n()).done;){var d=j.value;c.isBetween(d.from,d.to)||a.isBetween(d.from,d.to)||R()(d.from).isBetween(c,a)||R()(d.to).isBetween(c,a)||r.push(o)}}catch(h){b.e(h)}finally{b.f()}}}}catch(h){i.e(h)}finally{i.f()}n(r)}})})}),1==t&&Object(O.jsx)(D,{}),Object(O.jsx)(h.a,{justify:"center",gutter:16,children:r.map((function(e){return Object(O.jsx)(u.a,{lg:5,sm:24,xs:24,children:Object(O.jsxs)("div",{className:"car p-2 bs1",children:[Object(O.jsx)("img",{src:e.image,className:"carimg"}),Object(O.jsxs)("div",{className:"car-content d-flex align-items-center justify-content-between",children:[Object(O.jsxs)("div",{className:"text-left pl-2",children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsxs)("p",{children:[" Rent Per Hour ",e.rentPerHour," /-"]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"btn1 mr-2",children:Object(O.jsx)(i.b,{to:"/booking/".concat(e._id),children:"Book Now"})})})]})]})})}))})]})},C=s(302),T=s(303),G=s(88),M=s.n(G);s(137);M.a.init();var P=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.alertsReducer})).loading;return Object(O.jsxs)("div",{className:"login",children:[t&&Object(O.jsx)(D,{}),Object(O.jsxs)(h.a,{gutter:16,className:"d-flex align-items-center",children:[Object(O.jsxs)(u.a,{lg:16,style:{position:"relative"},children:[Object(O.jsx)("img",{className:"w-100","data-aos":"slide-right","data-aos-duration":"1500",src:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"}),Object(O.jsx)("h1",{className:"login-logo",children:"AZOOM"})]}),Object(O.jsx)(u.a,{lg:8,className:"text-left p-5",children:Object(O.jsxs)(C.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var s;e((s=t,function(){var e=Object(y.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,N.a.post("/api/users/login",s);case 4:c=e.sent,localStorage.setItem("user",JSON.stringify(c.data)),v.b.success("Login success"),t({type:"LOADING",payload:!1}),setTimeout((function(){window.location.href="/"}),500),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),v.b.error("Something went wrong"),t({type:"LOADING",payload:!1});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)("hr",{}),Object(O.jsx)(C.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(O.jsx)(T.a,{type:"password"})}),Object(O.jsx)("button",{className:"btn1 mt-2",children:"Login"}),Object(O.jsx)("hr",{}),Object(O.jsx)(i.b,{to:"/register",children:"Click Here to Register"})]})})]})]})};M.a.init();var q=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.alertsReducer})).loading;return Object(O.jsxs)("div",{className:"login",children:[t&&Object(O.jsx)(D,{}),Object(O.jsxs)(h.a,{gutter:16,className:"d-flex align-items-center",children:[Object(O.jsxs)(u.a,{lg:16,style:{position:"relative"},children:[Object(O.jsx)("img",{className:"w-100","data-aos":"slide-left","data-aos-duration":"1500",src:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"}),Object(O.jsx)("h1",{className:"login-logo",children:"AZOOM"})]}),Object(O.jsx)(u.a,{lg:8,className:"text-left p-5",children:Object(O.jsxs)(C.a,{layout:"vertical",className:"login-form p-5",onFinish:function(t){var s;e((s=t,function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,N.a.post("/api/users/register",s);case 4:e.sent,v.b.success("Registration successfull"),setTimeout((function(){window.location.href="/login"}),500),t({type:"LOADING",payload:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),v.b.error("Something went wrong"),t({type:"LOADING",payload:!1});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(O.jsx)("h1",{children:"Register"}),Object(O.jsx)("hr",{}),Object(O.jsx)(C.a.Item,{name:"username",label:"Username",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"password",label:"Password",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"cpassword",label:"Confirm Password",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)("button",{className:"btn1 mt-2 mb-3",children:"Register"}),Object(O.jsx)("br",{}),Object(O.jsx)(i.b,{to:"/login",children:"Click Here to Login"})]})})]})]})},E=s(300),B=s(306),_=s(305),Z=s(175),F=s.n(Z),W=A.a.RangePicker;var z=function(e){var t=e.match,s=Object(b.c)((function(e){return e.carsReducer})).cars,a=Object(b.c)((function(e){return e.alertsReducer})).loading,r=Object(c.useState)({}),n=Object(j.a)(r,2),i=n[0],o=n[1],l=Object(b.b)(),d=Object(c.useState)(),x=Object(j.a)(d,2),m=x[0],f=x[1],w=Object(c.useState)(),A=Object(j.a)(w,2),I=A[0],S=A[1],H=Object(c.useState)(0),L=Object(j.a)(H,2),C=L[0],T=L[1],G=Object(c.useState)(!1),M=Object(j.a)(G,2),P=M[0],q=M[1],Z=Object(c.useState)(0),z=Object(j.a)(Z,2),U=z[0],J=z[1],K=Object(c.useState)(!1),Y=Object(j.a)(K,2),V=Y[0],X=Y[1];return Object(c.useEffect)((function(){0==s.length?l(k()):o(s.find((function(e){return e._id==t.params.carid})))}),[s]),Object(c.useEffect)((function(){J(C*i.rentPerHour),P&&J(U+30*C)}),[P,C]),Object(O.jsxs)(p,{children:[a&&Object(O.jsx)(D,{}),Object(O.jsxs)(h.a,{justify:"center",className:"d-flex align-items-center",style:{minHeight:"90vh"},children:[Object(O.jsx)(u.a,{lg:10,sm:24,xs:24,className:"p-3",children:Object(O.jsx)("img",{src:i.image,className:"carimg2 bs1 w-100","data-aos":"flip-left","data-aos-duration":"1500"})}),Object(O.jsxs)(u.a,{lg:10,sm:24,xs:24,className:"text-right",children:[Object(O.jsx)(E.a,{type:"horizontal",dashed:!0,children:"Car Info"}),Object(O.jsxs)("div",{style:{textAlign:"right"},children:[Object(O.jsx)("p",{children:i.name}),Object(O.jsxs)("p",{children:[i.rentPerHour," Rent Per hour /-"]}),Object(O.jsxs)("p",{children:["Fuel Type : ",i.fuelType]}),Object(O.jsxs)("p",{children:["Max Persons : ",i.capacity]})]}),Object(O.jsx)(E.a,{type:"horizontal",dashed:!0,children:"Select Time Slots"}),Object(O.jsx)(W,{showTime:{format:"HH:mm"},format:"MMM DD yyyy HH:mm",onChange:function(e){f(R()(e[0]).format("MMM DD yyyy HH:mm")),S(R()(e[1]).format("MMM DD yyyy HH:mm")),T(e[1].diff(e[0],"hours"))}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"btn1 mt-2",onClick:function(){X(!0)},children:"See Booked Slots"}),m&&I&&Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Total Hours : ",Object(O.jsx)("b",{children:C})]}),Object(O.jsxs)("p",{children:["Rent Per Hour : ",Object(O.jsx)("b",{children:i.rentPerHour})]}),Object(O.jsx)(B.a,{onChange:function(e){e.target.checked?q(!0):q(!1)},children:"Driver Required"}),Object(O.jsxs)("h3",{children:["Total Amount : ",U]}),Object(O.jsx)(F.a,{shippingAddress:!0,token:function(e){var t={token:e,user:JSON.parse(localStorage.getItem("user"))._id,car:i._id,totalHours:C,totalAmount:U,driverRequired:P,bookedTimeSlots:{from:m,to:I}};l(function(e){return function(){var t=Object(y.a)(g.a.mark((function t(s){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"LOADING",payload:!0}),t.prev=1,t.next=4,N.a.post("/api/bookings/bookcar",e);case 4:s({type:"LOADING",payload:!1}),v.b.success("Your car booked successfully"),setTimeout((function(){window.location.href="/userbookings"}),500),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),s({type:"LOADING",payload:!1}),v.b.error("Something went wrong , please try later");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},currency:"sgd",amount:100*U,stripeKey:"pk_test_51O5vL0IqLWW33JGDhf8EXC7ZIHLMeOOIMUaPguIebSZ2ytIJPzElEUOLxMUsjwwzCUe7IKXYGy37Q8qavnysjNXQ00xGKrtMeq",children:Object(O.jsx)("button",{className:"btn1",children:"Book Now"})})]})]}),i.name&&Object(O.jsx)(_.a,{visible:V,closable:!1,footer:!1,title:"Booked time slots",children:Object(O.jsxs)("div",{className:"p-2",children:[i.bookedTimeSlots.map((function(e){return Object(O.jsxs)("button",{className:"btn1 mt-2",children:[e.from," - ",e.to]})})),Object(O.jsx)("div",{className:"text-right mt-5",children:Object(O.jsx)("button",{className:"btn1",onClick:function(){X(!1)},children:"CLOSE"})})]})})]})]})};s(292);var U=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.bookingsReducer})).bookings,s=Object(b.c)((function(e){return e.alertsReducer})).loading,a=JSON.parse(localStorage.getItem("user"));return Object(c.useEffect)((function(){e(function(){var e=Object(y.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,N.a.get("/api/bookings/getallbookings");case 4:s=e.sent,t({type:"GET_ALL_BOOKINGS",payload:s.data}),t({type:"LOADING",payload:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(O.jsxs)(p,{children:[s&&Object(O.jsx)(D,{}),Object(O.jsx)("h3",{className:"text-center mt-2",children:"My Bookings"}),Object(O.jsx)(h.a,{justify:"center",gutter:16,children:Object(O.jsx)(u.a,{lg:16,sm:24,children:t.filter((function(e){return e.user==a._id})).map((function(e){return Object(O.jsxs)(h.a,{gutter:16,className:"bs1 mt-3 text-left",children:[Object(O.jsxs)(u.a,{lg:6,sm:24,children:[Object(O.jsx)("p",{children:Object(O.jsx)("b",{children:e.car.name})}),Object(O.jsxs)("p",{children:["Total hours : ",Object(O.jsx)("b",{children:e.totalHours})]}),Object(O.jsxs)("p",{children:["Rent per hour : ",Object(O.jsx)("b",{children:e.car.rentPerHour})]}),Object(O.jsxs)("p",{children:["Total amount : ",Object(O.jsx)("b",{children:e.totalAmount})]})]}),Object(O.jsxs)(u.a,{lg:12,sm:24,children:[Object(O.jsxs)("p",{children:["Transaction Id : ",Object(O.jsx)("b",{children:e.transactionId})]}),Object(O.jsxs)("p",{children:["From: ",Object(O.jsx)("b",{children:e.bookedTimeSlots.from})]}),Object(O.jsxs)("p",{children:["To: ",Object(O.jsx)("b",{children:e.bookedTimeSlots.to})]}),Object(O.jsxs)("p",{children:["Date of booking: ",Object(O.jsx)("b",{children:R()(e.createdAt).format("MMM DD yyyy")})]})]}),Object(O.jsx)(u.a,{lg:6,sm:24,className:"text-right",children:Object(O.jsx)("img",{style:{borderRadius:5},src:e.car.image,height:"140",className:"p-2"})})]})}))})})]})};var J=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.alertsReducer})).loading;return Object(O.jsxs)(p,{children:[t&&Object(O.jsx)(D,{}),Object(O.jsx)(h.a,{justify:"center mt-5",children:Object(O.jsx)(u.a,{lg:12,sm:24,xs:24,className:"p-2",children:Object(O.jsxs)(C.a,{className:"bs1 p-2",layout:"vertical",onFinish:function(t){var s;t.bookedTimeSlots=[],e((s=t,function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,e.next=4,N.a.post("/api/cars/addcar",s);case 4:t({type:"LOADING",payload:!1}),v.b.success("New car added successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),console.log(t)},children:[Object(O.jsx)("h3",{children:"Add New Car"}),Object(O.jsx)("hr",{}),Object(O.jsx)(C.a.Item,{name:"name",label:"Car name",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)("div",{className:"text-right",children:Object(O.jsx)("button",{className:"btn1",children:"ADD CAR"})})]})})})]})},K=s(309),Y=s(310),V=s(308);A.a.RangePicker;var X=function(){var e=Object(b.c)((function(e){return e.carsReducer})).cars,t=Object(b.c)((function(e){return e.alertsReducer})).loading,s=Object(c.useState)([]),a=Object(j.a)(s,2),r=a[0],n=a[1],o=Object(b.b)();return Object(c.useEffect)((function(){o(k())}),[]),Object(c.useEffect)((function(){n(e)}),[e]),Object(O.jsxs)(p,{children:[Object(O.jsx)(h.a,{justify:"center",gutter:16,className:"mt-2",children:Object(O.jsx)(u.a,{lg:20,sm:24,children:Object(O.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(O.jsx)("h3",{className:"mt-1 mr-2",children:"Admin Panel"}),Object(O.jsx)("button",{className:"btn1",children:Object(O.jsx)("a",{href:"/addcar",children:"ADD CAR"})})]})})}),1==t&&Object(O.jsx)(D,{}),Object(O.jsx)(h.a,{justify:"center",gutter:16,children:r.map((function(e){return Object(O.jsx)(u.a,{lg:5,sm:24,xs:24,children:Object(O.jsxs)("div",{className:"car p-2 bs1",children:[Object(O.jsx)("img",{src:e.image,className:"carimg"}),Object(O.jsxs)("div",{className:"car-content d-flex align-items-center justify-content-between",children:[Object(O.jsxs)("div",{className:"text-left pl-2",children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsxs)("p",{children:[" Rent Per Hour ",e.rentPerHour," /-"]})]}),Object(O.jsxs)("div",{className:"mr-4",children:[Object(O.jsx)(i.b,{to:"/editcar/".concat(e._id),children:Object(O.jsx)(K.a,{className:"mr-3",style:{color:"green",cursor:"pointer"}})}),Object(O.jsx)(V.a,{title:"Are you sure to delete this car?",onConfirm:function(){var t;o((t={carid:e._id},function(){var e=Object(y.a)(g.a.mark((function e(s){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING",payload:!0}),e.prev=1,e.next=4,N.a.post("/api/cars/deletecar",t);case 4:s({type:"LOADING",payload:!1}),v.b.success("Car deleted successfully"),setTimeout((function(){window.location.reload()}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),s({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))},okText:"Yes",cancelText:"No",children:Object(O.jsx)(Y.a,{style:{color:"red",cursor:"pointer"}})})]})]})]})})}))})]})};var Q=function(e){var t=e.match,s=Object(b.c)((function(e){return e.carsReducer})).cars,a=Object(b.b)(),r=Object(b.c)((function(e){return e.alertsReducer})).loading,n=Object(c.useState)(),i=Object(j.a)(n,2),o=i[0],l=i[1],d=Object(c.useState)([]),x=Object(j.a)(d,2),m=x[0],f=x[1];return Object(c.useEffect)((function(){0==s.length?a(k()):(f(s),l(s.find((function(e){return e._id==t.params.carid}))),console.log(o))}),[s]),Object(O.jsxs)(p,{children:[r&&Object(O.jsx)(D,{}),Object(O.jsx)(h.a,{justify:"center mt-5",children:Object(O.jsx)(u.a,{lg:12,sm:24,xs:24,className:"p-2",children:m.length>0&&Object(O.jsxs)(C.a,{initialValues:o,className:"bs1 p-2",layout:"vertical",onFinish:function(e){var t;e._id=o._id,a((t=e,function(){var e=Object(y.a)(g.a.mark((function e(s){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING",payload:!0}),e.prev=1,e.next=4,N.a.post("/api/cars/editcar",t);case 4:s({type:"LOADING",payload:!1}),v.b.success("Car details updated successfully"),setTimeout((function(){window.location.href="/admin"}),500),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),s({type:"LOADING",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),console.log(e)},children:[Object(O.jsx)("h3",{children:"Edit Car"}),Object(O.jsx)("hr",{}),Object(O.jsx)(C.a.Item,{name:"name",label:"Car name",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"image",label:"Image url",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"rentPerHour",label:"Rent per hour",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"capacity",label:"Capacity",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)(C.a.Item,{name:"fuelType",label:"Fuel Type",rules:[{required:!0}],children:Object(O.jsx)(T.a,{})}),Object(O.jsx)("div",{className:"text-right",children:Object(O.jsx)("button",{className:"btn1",children:"Edit CAR"})})]})})})]})};s(293);var $=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("a",{href:"#",className:"logo",children:Object(O.jsx)("box-icon",{name:"bolt-circle"})}),Object(O.jsx)("div",{className:"bx bx-menu",id:"menu-icon"}),Object(O.jsxs)("ul",{className:"navbar",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#ride",children:"Ride"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#services",children:"Services"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"/",children:"Booking"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#reviews",children:"Reviews"})})]}),Object(O.jsxs)("div",{className:"header-btn",children:[Object(O.jsx)("a",{href:"/register",className:"sign-up",children:"Sign up"}),Object(O.jsx)("a",{href:"/login",className:"sign-in",children:"Sign in"})]})]}),Object(O.jsxs)("section",{className:"home",id:"home",children:[Object(O.jsxs)("div",{className:"text",children:[Object(O.jsx)("h1",{children:Object(O.jsxs)("span",{children:["Looking to ",Object(O.jsx)("br",{}),"rent a car"]})}),Object(O.jsxs)("p",{children:[" ","The future of driving is here, and it's electric! Experience the thrill of driving without the emissions, and discover the joy of whisper-quiet travels with our range of electric vehicles (EVs). Whether you're environmentally conscious or just curious about the latest in automotive technology, renting an electric car offers a unique experience that's both sustainable and exhilarating.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Eletric fleet is diverse, catering to different needs \u2014 from compact city rides to spacious family cars. Every vehicle is equipped with the latest features ensuring safety, comfort, and a top-notch driving experience. Plus, with an ever-growing network of charging stations, range anxiety is a thing of the past.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Choose sustainability without compromising on performance. Drive green, and embrace the electric revolution with us!"," "]}),Object(O.jsxs)("div",{className:"app-stores",children:[Object(O.jsx)("img",{src:"https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png"}),Object(O.jsx)("img",{src:"https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png"})]})]}),Object(O.jsx)("div",{className:"form-container",children:Object(O.jsxs)("form",{action:"",children:[Object(O.jsxs)("div",{className:"input-box",children:[Object(O.jsx)("span",{children:"Location"}),Object(O.jsx)("input",{type:"search",name:"",id:"",placeholder:"Search Places"})]}),Object(O.jsxs)("div",{className:"input-box",children:[Object(O.jsx)("span",{children:"Pick-up Date"}),Object(O.jsx)("input",{type:"date",name:"",id:""})]}),Object(O.jsxs)("div",{className:"input-box",children:[Object(O.jsx)("span",{children:"Return Date"}),Object(O.jsx)("input",{type:"date",name:"",id:""})]}),Object(O.jsx)("input",{type:"submit",name:"",id:"",className:"btn"})]})})]}),Object(O.jsxs)("section",{className:"ride",id:"ride",children:[Object(O.jsxs)("div",{className:"heading",children:[Object(O.jsx)("span",{children:"How Its Work"}),Object(O.jsx)("h1",{children:"Rent With 3 easy steps"})]}),Object(O.jsxs)("div",{className:"ride-container",children:[Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("box-icon",{type:"solid",name:"map"}),Object(O.jsx)("h2",{children:"Choose a location"}),Object(O.jsx)("p",{children:"Begin your journey at a place that's most convenient for you. With AZoom Car Rental's expansive network, you have the freedom to select from a range of prime pick-up spots. Whether you're starting from the bustling city center, a quiet suburb, or the airport, choose a location that best suits your travel plans and let the adventure begin./p>"})]}),Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("box-icon",{name:"calendar-plus"}),Object(O.jsx)("h2",{children:"Pick-up Date"}),Object(O.jsx)("p",{children:"Flexibility is key when you're on the move. With our user-friendly scheduling system, select a pick-up date that aligns with your travel itinerary. Whether you need a car for a spontaneous weekend getaway or a pre-planned cross-country road trip, AZoom ensures your ride is ready when you are."})]}),Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("box-icon",{name:"car",type:"solid"}),Object(O.jsx)("h2",{children:"Book A Car"}),Object(O.jsx)("p",{children:"Dive into our diverse fleet of top-tier vehicles and find the one that speaks to you. Whether you're into sleek sedans, robust SUVs, or eco-friendly electric cars, AZoom has got you covered. Once you've made your pick, proceed with our secure booking process. In just a few clicks, your dream ride will be reserved, awaiting your arrival."})]})]})]}),Object(O.jsxs)("section",{className:"about",id:"about",children:[Object(O.jsxs)("div",{className:"heading",children:[Object(O.jsx)("span",{children:"About Us"}),Object(O.jsx)("h1",{children:"Best Customer Experience"})]}),Object(O.jsxs)("div",{className:"about-container",children:[Object(O.jsx)("div",{className:"about-img",children:Object(O.jsx)("img",{src:"https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg",alt:"about-us"})}),Object(O.jsxs)("div",{className:"about-text",children:[Object(O.jsx)("span",{children:"About Us"}),Object(O.jsx)("p",{children:"AZoom Car Rental - Driving the Future, Today!At AZoom Car Rental, we are more than just a car rental company \u2013 we are pioneers in sustainable travel solutions. Founded in 2015, our passion for promoting a green future has paved the way for a revolutionary driving experience in the heart of Asia.To lead the transition towards a zero-emission travel landscape, one journey at a time.Empower our community by providing eco-friendly mobility options, raising awareness about sustainable transport, and driving innovation in the electric vehicle industry."}),Object(O.jsx)("a",{href:"#",className:"btn",children:"Learn More"})]})]})]}),Object(O.jsxs)("section",{className:"reviews",id:"reviews",children:[Object(O.jsxs)("div",{className:"heading",children:[Object(O.jsx)("span",{children:"Reviews"}),Object(O.jsx)("h1",{children:"What Our Customer Say"})]}),Object(O.jsxs)("div",{className:"reviews-container",children:[Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"reviews-img",children:Object(O.jsx)("img",{src:"https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg",alt:"reviews"})}),Object(O.jsx)("h2",{children:"Someone Name"}),Object(O.jsxs)("div",{className:"stars",children:[Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"})]}),Object(O.jsx)("p",{children:'"My weekend was a breeze, thanks to AZoom Car Rental. I tried one of their electric vehicles, and I was amazed at the performance and comfort. The staff were fantastic, making sure I was well-informed and confident. Can\'t wait for my next trip!"'})]}),Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"reviews-img",children:Object(O.jsx)("img",{src:"https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg",alt:"reviews"})}),Object(O.jsx)("h2",{children:"Someone Name"}),Object(O.jsxs)("div",{className:"stars",children:[Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{name:"star-half",type:"solid"})]}),Object(O.jsx)("p",{children:'"First time going electric, and AZoom Car Rental made it an unforgettable experience! Their team was super patient in explaining the details, and the drive was incredibly smooth. Kudos to AZoom for leading the charge towards a greener future!"'})]}),Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"reviews-img",children:Object(O.jsx)("img",{src:"https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg",alt:"reviews"})}),Object(O.jsx)("h2",{children:"Someone Name"}),Object(O.jsxs)("div",{className:"stars",children:[Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{name:"star-half",type:"solid"})]}),Object(O.jsx)("p",{children:'"What a delightful experience with AZoom Car Rental! I never thought going electric would be this simple. The car was a gem, and the entire rental process was seamless. AZoom is genuinely ahead of the curve in the rental space."'})]}),Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"reviews-img",children:Object(O.jsx)("img",{src:"https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg",alt:"reviews"})}),Object(O.jsx)("h2",{children:"Someone Name"}),Object(O.jsxs)("div",{className:"stars",children:[Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{name:"star-half",type:"solid"})]}),Object(O.jsx)("p",{children:'"Having rented cars from various companies in the past, I can confidently say AZoom offers an unparalleled experience. The electric vehicle was pristine, the ride silent yet powerful, and the staff were always ready to help. Cheers to AZoom and their excellent service!"'})]}),Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"reviews-img",children:Object(O.jsx)("img",{src:"https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg",alt:"reviews"})}),Object(O.jsx)("h2",{children:"Someone Name"}),Object(O.jsxs)("div",{className:"stars",children:[Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"}),Object(O.jsx)("box-icon",{type:"solid",name:"star"})]}),Object(O.jsx)("p",{children:'"AZoom Car Rental stands out in the crowd! Their diverse electric fleet, combined with their top-notch customer service, makes them the best in the business. Traveling sustainably has never been this exciting or easy."'})]})]})]}),Object(O.jsxs)("section",{className:"newsletter",children:[Object(O.jsx)("h2",{children:"Subscribe to Newsletter"}),Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("input",{type:"text",placeholder:"Enter your email..."}),Object(O.jsx)("a",{href:"#",className:"btn",children:"Subscribe"})]})]}),Object(O.jsxs)("div",{className:"copyright",children:[Object(O.jsx)("p",{children:"\xa9 AZoom Car Rental All Right Reserved"}),Object(O.jsxs)("div",{className:"social",children:[Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("box-icon",{name:"facebook-square",type:"logo"})}),Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("box-icon",{name:"twitter",type:"logo"})}),Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("box-icon",{name:"instagram-alt",type:"logo"})}),Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("box-icon",{name:"tiktok",type:"logo"})})]})]})]})})};var ee=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(te,{path:"/",exact:!0,component:L}),Object(O.jsx)(o.b,{path:"/login",exact:!0,component:P}),Object(O.jsx)(o.b,{path:"/register",exact:!0,component:q}),Object(O.jsx)(o.b,{path:"/about",exact:!0,component:$}),Object(O.jsx)(te,{path:"/booking/:carid",exact:!0,component:z}),Object(O.jsx)(te,{path:"/userbookings",exact:!0,component:U}),Object(O.jsx)(te,{path:"/addcar",exact:!0,component:J}),Object(O.jsx)(te,{path:"/editcar/:carid",exact:!0,component:Q}),Object(O.jsx)(te,{path:"/admin",exact:!0,component:X})]})})};function te(e){return localStorage.getItem("user")?Object(O.jsx)(o.b,Object(n.a)({},e)):Object(O.jsx)(o.a,{to:"/login"})}var se=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,311)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))},ce=s(96),ae=s(178),re=s(179),ne={loading:!1},ie={cars:[]},oe={bookings:[]},le=Object(ae.composeWithDevTools)({}),je=Object(ce.combineReducers)({carsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_CARS"===t.type?Object(n.a)(Object(n.a)({},e),{},{cars:t.payload}):e},alertsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;return"LOADING"===t.type?Object(n.a)(Object(n.a)({},e),{},{loading:t.payload}):e},bookingsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return"GET_ALL_BOOKINGS"===t.type?Object(n.a)(Object(n.a)({},e),{},{bookings:t.payload}):e}}),be=Object(ce.createStore)(je,le(Object(ce.applyMiddleware)(re.a)));r.a.render(Object(O.jsx)(b.a,{store:be,children:Object(O.jsx)(ee,{})}),document.getElementById("root")),se()}},[[294,1,2]]]);
//# sourceMappingURL=main.e55acb57.chunk.js.map