(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-879455be"],{"1d4c":function(t,e,n){"use strict";var r=n("6a4c"),o=n.n(r);o.a},"2b28":function(t,e,n){"use strict";var r=n("bc3a"),o=n.n(r),s=function(){return o.a.create({baseURL:"/users"})};e["a"]={fetchPosts:function(){return s().get("posts")},myPosts:function(t){return s().get("myposts/"+t.id)},addPost:function(t){return s().post("add_post",t)},updatePost:function(t){return s().post("updateposts/"+t.id,t)},getPost:function(t){return s().get("post/"+t.id)},deletePost:function(t){return s().delete("posts/"+t)}}},"6a4c":function(t,e,n){},7981:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("Edit Post")]),n("div",{staticClass:"form"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"TITLE"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{rows:"15",cols:"15",placeholder:"DESCRIPTION"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.urls,expression:"urls"}],attrs:{type:"text",name:"urls",placeholder:"url"},domProps:{value:t.urls},on:{input:function(e){e.target.composing||(t.urls=e.target.value)}}})]),n("div",[n("button",{staticClass:"app_post_btn",on:{click:t.updatePost}},[t._v("Update")])])])])},o=[],s=(n("a4d3"),n("e01a"),n("96cf"),n("1da1")),i=n("2b28"),a={name:"editpost",data:function(){return{title:"",description:"",urls:""}},mounted:function(){this.getPost()},methods:{getPost:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getPost({id:t.$route.params.id});case 2:n=e.sent,t.title=n.data.posts.title,t.description=n.data.posts.content,t.urls=n.data.posts.urls;case 6:case"end":return e.stop()}}),e)})))()},updatePost:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].updatePost({id:t.$route.params.id,title:t.title,description:t.description,urls:t.urls});case 2:t.$router.push({name:"posts"});case 3:case"end":return e.stop()}}),e)})))()}}},u=a,c=(n("1d4c"),n("2877")),d=Object(c["a"])(u,r,o,!1,null,null,null);e["default"]=d.exports},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),s=n("da84"),i=n("5135"),a=n("861d"),u=n("9bf2").f,c=n("e893"),d=s.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var p={},l=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof l?new d(t):void 0===t?d():d(t);return""===t&&(p[e]=!0),e};c(l,d);var v=l.prototype=d.prototype;v.constructor=l;var f=v.toString,m="Symbol(test)"==String(d("test")),g=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=f.call(t);if(i(p,t))return"";var n=m?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:l})}}}]);
//# sourceMappingURL=chunk-879455be.697dc979.js.map