(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{332:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(50),n(97),n(326)),c={components:{editor:o.Editor,viewer:o.Viewer},data:function(){return{id:this.$route.params.id,loading:!1}},computed:{initial:function(){var t=this;return this.$store.state.memos.list.find((function(e){return e.id===t.id}))}},mounted:function(){this.initial&&this.$refs.toastuiEditor.invoke("setMarkdown",this.initial.data.text)},methods:{save:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.$refs.toastuiEditor.invoke("getMarkdown"),r=n.substring(0,n.indexOf("\n")),o=(new Date).toLocaleString({timeZone:"Asia/Tokyo"}),e.prev=4,e.next=7,t.$store.dispatch("memos/saveLocalMemo",{newid:t.id,newdata:{text:n,title:r,timestamp:o}});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),alert(e.t0),t.loading=!1;case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))()},back:function(){this.$router.push("/")}}},d=n(75),l=n(96),v=n.n(l),m=n(353),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("editor",{ref:"toastuiEditor",attrs:{height:"80vh"}}),t._v(" "),n("viewer"),t._v(" "),n("div",{staticClass:"mt-4"},[n("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.save}},[t._v(" SAVE ")]),t._v(" "),n("v-btn",{attrs:{color:"error"},on:{click:t.back}},[t._v(" BACK ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:m.a})}}]);