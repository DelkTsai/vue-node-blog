webpackJsonp([3],{"2GDZ":function(t,e,o){"use strict";e.b=function(t){return s.a.get("postCollection/"+t)},e.d=function(t){return s.a.post("postCollection/create",{postId:t})},e.c=function(t){return s.a.post("postCollection/del",{postId:t})},e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return s.a.get("postCollection",{params:{page:t,limit:e}})};var s=o("rC09")},Vm3f:function(t,e,o){var s=o("y8Wt");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o("8bSs")("ebafbf16",s,!0)},d7P4:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("4YfN"),i=o.n(s),n=o("9rMa"),l=o("ZN2C"),c=o("QxSH"),a=o("hhm8"),r=o("F4+m"),h=o("2GDZ"),p={name:"sollection",mixins:[r.b,r.c,r.a],data:function(){return{list:[],title:"收藏的文章",page:1,hasMore:!0,showCollectionBtn:!0,showDelBtn:!1}},methods:{postClick:function(t){var e=this.list[t].postId;this.$router.push("/post/"+e)},delCollection:function(t){var e=this,o=this.list[t].postId;Object(h.c)(o).then(function(o){o.data.code===a.a&&e.list.splice(t,1)}).catch(console.log)},_getUserPostCollection:function(){var t=this;this.hasMore&&Object(h.a)(this.page).then(function(e){var o=e.data;if(o.code===a.a)if(o.data.length>0){t.page++;var s=t.timeFormat(t.postFormat(o.data));t.list=t.list.concat(s)}else t.hasMore=!1}).catch(console.log)}},created:function(){this._getUserPostCollection(),this.pullup(this._getUserPostCollection)},activated:function(){!this.isPopState&&this.intoPageCount++&&(this.list=[],this.page=1,this.hasMore=!0,this._getUserPostCollection())},computed:i()({},Object(n.c)(["isPopState"])),components:{OtherHeader:l.a,PostList:c.a}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("other-header",{attrs:{title:this.title}}),this._v(" "),e("post-list",{attrs:{list:this.list,showCollectionBtn:this.showCollectionBtn,showDelBtn:this.showDelBtn},on:{collectionIndex:this.delCollection,postClick:this.postClick}})],1)},staticRenderFns:[]},d=o("OF7X")(p,u,!1,function(t){o("Vm3f")},"data-v-7089eeef",null);e.default=d.exports},y8Wt:function(t,e,o){(t.exports=o("BkJT")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"collection.vue",sourceRoot:""}])}});
//# sourceMappingURL=3.1a0f81740d82f7c551d1.js.map