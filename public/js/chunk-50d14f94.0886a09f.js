(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50d14f94"],{"2b28":function(t,s,e){"use strict";var n=e("bc3a"),r=e.n(n),a=function(){return r.a.create({baseURL:"/users"})};s["a"]={fetchPosts:function(){return a().get("posts")},myPosts:function(t){return a().get("myposts/"+t.id)},addPost:function(t){return a().post("add_post",t)},updatePost:function(t){return a().post("updateposts/"+t.id,t)},getPost:function(t){return a().get("post/"+t.id)},deletePost:function(t){return a().delete("posts/"+t)}}},"339d":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"posts"},[e("h1",[t._v("POSTS")]),t.posts.length>0?e("div",{staticClass:"table-wrap"},[e("div",{attrs:{dir:"rtl"}},[e("router-link",{attrs:{to:{name:"addpost"}}},[e("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Add Post")])])],1),e("br"),t._l(t.posts,(function(s){return e("div",{key:s._id,staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v(t._s(s.title))]),e("h5",{staticClass:"card-text"},[t._v(t._s(s.content))]),e("router-link",{attrs:{to:{name:"editpost",params:{id:s._id}}}},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("EDIT POST")])]),t._v(" "),e("a",{attrs:{href:"#"},on:{click:function(e){return t.deletePost(s._id)}}},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("DELETE")])])],1)])})),e("br")],2):e("div",[t._v(" There are no posts.. Lets add one now "),e("br"),e("br"),e("router-link",{staticClass:"add_post_link",attrs:{to:{name:"addpost"}}},[e("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Add Post")])])],1)])},r=[],a=(e("96cf"),e("1da1")),o=e("2b28"),i={name:"posts",data:function(){return{posts:[]}},mounted:function(){this.getPosts()},methods:{getPosts:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,o["a"].myPosts({id:t.$route.params.id});case 2:e=s.sent,t.posts=e.data.posts;case 4:case"end":return s.stop()}}),s)})))()},deletePost:function(t){var s=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o["a"].deletePost(t),s.getPosts(),s.$router.push({name:"posts"});case 3:case"end":return e.stop()}}),e)})))()}}},u=i,c=e("2877"),d=Object(c["a"])(u,n,r,!1,null,"30f6a1d8",null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-50d14f94.0886a09f.js.map