(this.webpackJsonpcomp4462_project=this.webpackJsonpcomp4462_project||[]).push([[0],{350:function(t,e,a){},351:function(t,e,a){},368:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),i=a(25),o=a.n(i),s=(a(350),a.p,a(351),a(0));var c=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,369)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),i(t),o(t)}))},l=a(5),d=a(6),p=a(7),u=a(8),h=a(151),m=a.n(h),g=(a(150),a(1)),y=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).priorityColor=function(t,e){return g.p().domain([10,100]).range(["PeachPuff","FireBrick"])(e[t.properties.Id-1])},n.drawCityMap=function(){g.k("https://raw.githubusercontent.com/huantingwei/comp4462/main/StHimark.geojson").then((function(t){console.log("geoData",t);var e=[10,20,50,100,20,15,25,35,50,70,85,25,50,70,85,25,50,70,10],a=10,r=10,i=5,o=10,s=700-a-r,c=370-i-o;g.s("#citymap").selectAll("svg").remove();var l=g.s("#citymap").append("svg").attr("width",s+a+r).attr("height",c+i+o).append("g").attr("transform","translate("+a+","+i+")"),d=g.g().reflectY(!0).fitSize([s,c],t),p=g.h(d);l.selectAll("path").data(t.features).enter().append("path").attr("d",p).style("stroke","#fff").style("fill",(function(t){return n.priorityColor(t,e)})).attr("class","areas").on("mouseover",(function(t,e){g.s(this).attr("opacity",.5)})).on("mouseout",(function(t,e){g.s(this).attr("opacity",1)})).on("click",(function(t,e){var a=[e.properties.Id,e.properties.Nbrhood];n.props.onSelectRegion(a)})),l.selectAll(".labels").data(t.features).enter().append("text").attr("class","labels").attr("x",(function(t){return p.centroid(t)[0]})).attr("y",(function(t){return p.centroid(t)[1]})).attr("text-anchor","middle").attr("font-size","10px").text((function(t){return t.properties.Nbrhood.toString()}))})).catch((function(t){console.log("error in loading geojson!")}))},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.drawCityMap()}},{key:"render",value:function(){return Object(s.jsx)("div",{id:"citymap"})}}]),a}(r.a.Component),f=a(28),b=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;Object(l.a)(this,a),(n=e.call(this,t)).drawLegend=function(t,e){var a=f.a.arcmapLegend();a.scale(t).size(160).x(0).y(0).vtitle("Intensity Reported").utitle("Uncertainty"),g.s("#vsupLegend").selectAll("svg").remove(),g.s("#vsupLegend").append("svg").attr("width",300).attr("height",300).append("g").attr("transform","translate(15,40)").append("g").call(a),g.s("#colorLegend").selectAll("svg").remove();var n=g.s("#colorLegend").append("svg").attr("width",180).attr("height",60).append("g"),r=n.append("defs").append("linearGradient").attr("id","linear-gradient");r.attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","0%"),r.append("stop").attr("offset","0%").attr("stop-color",e(1)),r.append("stop").attr("offset","50%").attr("stop-color",e(5)),r.append("stop").attr("offset","100%").attr("stop-color",e(10)),n.append("rect").attr("width",160).attr("height",20).style("fill","url(#linear-gradient)").attr("x",10).attr("y",10),n.append("text").text("1").attr("x",10).attr("y",45),n.append("text").text("10").attr("x",160).attr("y",45)},n.drawHeatmap=function(t,e){g.e("./merge_ui_std.csv").then((function(a){console.log("rawdata",a);for(var r=Date.parse("2020-04-08 6:00:00"),i=[],o=[],s=function(t){var e=r+18e5*t,s=new Date(e),c=s.getFullYear()+"-"+(s.getMonth()+1).toString().padStart(2,"0")+"-"+s.getDate().toString().padStart(2,"0")+" "+s.getHours().toString().padStart(2,"0")+":"+s.getMinutes().toString().padStart(2,"0")+":"+s.getSeconds().toString().padStart(2,"0"),l=(s.getMonth()+1).toString()+"."+s.getDate()+" "+s.getHours()+":"+s.getMinutes().toString().padStart(2,"0");a.filter((function(t){return t.index==c})).forEach((function(t){var a=0,r=0,o=0;-1!=parseFloat(t.medical_i)&&n.state.attribute.medical&&(a+=parseFloat(t.medical_i),r+=parseFloat(t.medical_u),o+=1),-1!=parseFloat(t.power_i)&&n.state.attribute.power&&(a+=parseFloat(t.power_i),r+=parseFloat(t.power_u),o+=1),-1!=parseFloat(t.sewer_and_water_i)&&n.state.attribute.sewer_and_water&&(a+=parseFloat(t.sewer_and_water_i),r+=parseFloat(t.sewer_and_water_u),o+=1),-1!=parseFloat(t.roads_and_bridges_i)&&n.state.attribute.roads_and_bridges&&(a+=parseFloat(t.roads_and_bridges_i),r+=parseFloat(t.roads_and_bridges_u),o+=1),-1!=parseFloat(t.buildings_i)&&n.state.attribute.buildings&&(a+=parseFloat(t.buildings_i),r+=parseFloat(t.buildings_u),o+=1),i.push({time:e,time_string:l,location:parseInt(t.location),intensity_total:a/o,uncertainty_total:r/o})})),o.push(l)},c=0;c<15;c++)s(c);console.log("heatdata",i);var l=30,d=10,p=30,u=10,h=1200-l-d,m=1e3-p-u;g.s("#heatmap").selectAll("svg").remove();var y=g.s("#heatmap").append("svg").attr("width",h+l+d).attr("height",m+p+u).append("g").attr("transform","translate("+l+","+p+")"),f=g.o().range([0,h]).padding(.1).domain(o);y.append("g").style("font-size","12px").call(g.c(f)).call((function(t){t.select(".domain").remove(),t.selectAll("line").remove()}));var b,j=Array.from({length:19},(function(t,e){return e+1})).map((function(t){return{location:t,intensity_total:i.filter((function(e){return e.location==t})).reduce((function(t,e){return e.intensity_total>0?t+e.intensity_total:t}),0)}}));console.log("location intensity",j),b=n.state.descend?j.sort((function(t,e){return e.intensity_total-t.intensity_total})).map((function(t){return t.location})):j.sort((function(t,e){return t.intensity_total-e.intensity_total})).map((function(t){return t.location})),console.log("yDomain",b);var x=g.o().range([0,m]).domain(b).padding(.1);y.append("g").style("font-size","14px").call(g.b(x)).call((function(t){t.select(".domain").remove(),t.selectAll("line").remove()})),y.selectAll().data(i).enter().append("rect").attr("x",(function(t){return f(t.time_string)})).attr("y",(function(t){return x(t.location)})).attr("width",f.bandwidth()).attr("height",x.bandwidth()).style("fill",(function(a){return n.state.uncertainty?a.intensity_total>0?t(a.intensity_total,a.uncertainty_total):"white":a.intensity_total>0?e(a.intensity_total):"white"}))})).catch((function(t){console.log("error in loading heatmap csv!")}))},n.handleOrder=function(){console.log("handle order");var t=document.getElementById("descendingRadio").checked;n.setState({descend:t})},n.handleAttribute=function(){console.log("handle attribute");var t=document.getElementById("medicalCheck").checked,e=document.getElementById("powerCheck").checked,a=document.getElementById("roads_and_bridgesCheck").checked,r=document.getElementById("sewer_and_waterCheck").checked,i=document.getElementById("buildingsCheck").checked;n.setState({attribute:{medical:t,power:e,roads_and_bridges:a,sewer_and_water:r,buildings:i}})},n.handleUncertainty=function(){console.log("handle uncertainty");var t=document.getElementById("uncertaintyRadio").checked;n.setState({uncertainty:t})};var r=g.p().domain([0,.5,1]).range(["#abd9e9","#fee090","#b2182b"]).interpolate(g.i),i=f.b().branching(2).layers(4).valueDomain([1,10]).uncertaintyDomain([0,1]),o=f.c().quantize(i).range(r),s=g.q().interpolator(g.j).domain([10,-5]);return n.state={start_time:0,end_time:1,descend:!0,attribute:{medical:!0,power:!1,roads_and_bridges:!1,sewer_and_water:!1,buildings:!1},uncertainty:!0,vsupScale:o,colorScale:s},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log("HeatMap did mount..."),this.drawHeatmap(this.state.vsupScale,this.state.colorScale),this.drawLegend(this.state.vsupScale,this.state.colorScale)}},{key:"componentDidUpdate",value:function(){console.log("HeatMap did update..."),this.drawHeatmap(this.state.vsupScale,this.state.colorScale)}},{key:"render",value:function(){return Object(s.jsxs)("div",{class:"row",children:[Object(s.jsxs)("div",{class:"col-10",children:[Object(s.jsxs)("p",{children:["start time: ",this.state.start_time]}),Object(s.jsx)("div",{id:"heatmap"})]}),Object(s.jsxs)("div",{class:"col-2",children:[Object(s.jsx)("span",{children:"Sort by:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",name:"orderRadio",id:"ascendingRadio",value:"ascending",onChange:this.handleOrder})," Ascending ",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",name:"orderRadio",id:"descendingRadio",value:"descending",onChange:this.handleOrder})," Descending",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"Selected attribute:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",id:"medicalCheck",value:"medical",onChange:this.handleAttribute})," Medical ",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",id:"powerCheck",value:"power",onChange:this.handleAttribute})," Power",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",id:"roads_and_bridgesCheck",value:"roads_and_bridges",onChange:this.handleAttribute})," Roads and Bridges",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",id:"sewer_and_waterCheck",value:"sewer_and_water",onChange:this.handleAttribute})," Sewer and Water",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"checkbox",id:"buildingsCheck",value:"buildings",onChange:this.handleAttribute})," Buildings",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"w/o uncertainty:"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",name:"uncertaintyRadio",id:"noUncertaintyRadio",value:"noUncertainty",onChange:this.handleUncertainty})," Damage reported ",Object(s.jsx)("br",{}),Object(s.jsx)("div",{id:"colorLegend"}),Object(s.jsx)("input",{type:"radio",name:"uncertaintyRadio",id:"uncertaintyRadio",value:"uncertainty",onChange:this.handleUncertainty})," Damage reported + Uncertainty",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{id:"vsupLegend"})]})]})}}]),a}(r.a.Component),j=a(9),x=a.n(j),v=a(19),_=a.n(v),w=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).d3ParseTime=g.u("%Y-%m-%d %H:%M"),n.handleShakeData=function(t){var e=t.filter((function(t){return""!==t.shake_intensity})),a=x.a.map(e,(function(t){var e=parseInt(t.shake_intensity,10);return{shake_intensity:e<0?-e:e,time:_()(t.time).format("YYYY-MM-DD hh:mm")}})),r=x.a.groupBy(a,(function(t){return t.time})),i=x.a.map(r,(function(t,e){return{shake_intensity:x.a.meanBy(t,(function(t){return t.shake_intensity})),time:e}}));return x.a.map(i,(function(t){return{shake_intensity:t.shake_intensity,time:n.d3ParseTime(t.time)}})).sort((function(t,e){return t.time-e.time}))},n.handleReportData=function(t){var e=x.a.groupBy(t,(function(t){return t.time})),a=x.a.map(e,(function(t,e){return{num:t.length,time:e}}));return x.a.map(a,(function(t){return{num:t.num,time:n.d3ParseTime(_()(t.time).format("YYYY-MM-DD hh:mm"))}})).sort((function(t,e){return t.time-e.time}))},n.drawLineChart=function(){g.e("./mc1-reports-data.csv").then((function(t){n.drawShakeLineChart(t),n.drawReportLineChart(t)})).catch((function(t){console.log("error in loading linechart csv!")}))},n.drawShakeLineChart=function(t){var e=n.d3ParseTime("2020-04-10 18:00"),a=n.handleShakeData(t);console.log("shake intensity line chart data",a);var r=50,i=10,o=20,s=30,c=1400-r-o,l=220-i-s;g.s("#shakeLineChart").selectAll("svg").remove();var d=g.s("#shakeLineChart").append("svg").attr("width",c+r+o).attr("height",l+i+s).append("g").attr("transform","translate("+r+","+i+")"),p=g.f(x.a.map(a,(function(t){return t.time}))),u=[0,g.m(a,(function(t){return t.shake_intensity}))],h=g.t("%m-%d %H:%M"),m=g.r().range([r,c-o]).domain(p),y=g.p().range([l-s,i]).domain(u),f=g.l().x((function(t){return m(t.time)})).y((function(t){return y(t.shake_intensity)}));d.append("g").call(g.a(m).tickFormat(h)).attr("transform","translate(0,".concat(l-s,")")).call((function(t){return t.append("text").attr("x",c-1.5*o).attr("y",-.5*s).attr("fill","currentColor").attr("text-anchor","start").text("Time")})),d.append("g").call(g.b(y)).attr("transform","translate(".concat(r,",0)")).call((function(t){return t.append("text").attr("x",-r).attr("y",i-5).attr("fill","currentColor").attr("text-anchor","start").text("Shake Intensity").attr("transform","translate(-50,80), rotate(-90)").style("font-size",14)})),d.append("g").selectAll("path").data([a]).enter().append("path").attr("d",(function(t){return f(t)})).attr("fill","none").attr("stroke","SteelBlue");var b=d.append("g").append("circle").style("fill","none").attr("stroke","orange").attr("r",8.5).attr("cx",m(n.state.startTime)).attr("cy",y(n.state.intensity)).style("opacity",0),j=d.append("g").append("text").style("opacity",0).style("font-size","10px").attr("text-anchor","left").attr("alignment-baseline","middle").html("time:"+_()(n.state.startTime).format("MM-DD HH:mm")+" | SI:"+Math.round(n.state.intensity)/100).attr("x",m(n.state.startTime)+15).attr("y",y(n.state.intensity)),v=g.d((function(t){return t.time})).left,w=(d.append("line").attr("x1",m(n.state.startTime)).attr("y1",0).attr("x2",m(n.state.startTime)).attr("y2",l-i).style("stroke-width",2).style("stroke","orange").style("fill","none"),d.append("rect").style("fill","orange").style("pointer-events","all").attr("width",m(new Date(p[0].getTime()+6e4*n.state.interval))).attr("height",l-i).attr("x",m(n.state.startTime)).style("opacity",.4));d.append("rect").style("fill","none").style("pointer-events","all").attr("width",c).attr("height",l).on("mouseover",(function(){b.style("opacity",1),j.style("opacity",1),w.style("opacity",.4)})).on("mousemove",(function(t){var r=m.invert(g.n(t)[0]);console.log("x0",r);var i=v(a,r,1),o=a[i];if(console.log("selected data",i),o.time<e){var s=o.time,c=o.shake_intensity;n.setState({startTime:s,intensity:c})}})).on("mouseout",(function(){j.style("opacity",0)}))},n.drawReportLineChart=function(t){var e=n.handleReportData(t),a=n.d3ParseTime("2020-04-10 18:00"),r=50,i=10,o=20,s=30,c=1400-r-o,l=220-i-s;g.s("#reportLineChart").selectAll("svg").remove();var d=g.s("#reportLineChart").append("svg").attr("width",c+r+o).attr("height",l+i+s).append("g").attr("transform","translate("+r+","+i+")"),p=g.t("%m-%d %H:%M"),u=g.f(x.a.map(e,(function(t){return t.time}))),h=[0,g.m(e,(function(t){return t.num}))],m=g.r().range([r,c-o]).domain(u),y=g.p().range([l-s,i]).domain(h),f=g.l().x((function(t){return m(t.time)})).y((function(t){return y(t.num)}));d.append("g").call(g.a(m).tickFormat(p)).attr("transform","translate(0,".concat(l-s,")")).call((function(t){return t.append("text").attr("x",c-1.5*o).attr("y",-.5*s).attr("fill","currentColor").attr("text-anchor","start").text("Time")})),d.append("g").call(g.b(y)).attr("transform","translate(".concat(r,",0)")).call((function(t){return t.append("text").attr("x",-r).attr("y",i-5).attr("fill","currentColor").attr("text-anchor","start").text("Num of Reports").attr("transform","translate(-50,80), rotate(-90)").style("font-size",14)})),d.append("g").selectAll("path").data([e]).enter().append("path").attr("d",(function(t){return f(t)})).attr("fill","none").attr("stroke","SteelBlue");var b=d.append("g").append("circle").style("fill","none").attr("stroke","orange").attr("r",8.5).attr("cx",m(n.state.startTime)).attr("cy",y(n.state.num_report)).style("opacity",0),j=d.append("g").append("text").style("opacity",0).style("font-size","10px").attr("text-anchor","left").attr("alignment-baseline","middle").html("time:"+_()(n.state.startTime).format("MM-DD HH:mm")+" | #:"+Math.round(n.state.num_report)/100).attr("x",m(n.state.startTime)+15).attr("y",y(n.state.num_report)),v=g.d((function(t){return t.time})).left,w=(d.append("line").attr("x1",m(n.state.startTime)).attr("y1",0).attr("x2",m(n.state.startTime)).attr("y2",l-i).style("stroke-width",2).style("stroke","orange").style("fill","none"),d.append("rect").style("fill","orange").style("pointer-events","all").attr("width",m(new Date(u[0].getTime()+6e4*n.state.interval))).attr("height",l-i).attr("x",m(n.state.startTime)).style("opacity",.4));d.append("rect").style("fill","none").style("pointer-events","all").attr("width",c).attr("height",l).on("mouseover",(function(){b.style("opacity",1),j.style("opacity",1),w.style("opacity",.4)})).on("mousemove",(function(t){var r=m.invert(g.n(t)[0]),i=v(e,r,1),o=e[i];if(o.time<a){var s=o.time,c=o.num;n.setState({startTime:s,num_report:c})}})).on("mouseout",(function(){j.style("opacity",0)}))},n.state={startTime:"2020-04-08 17:50:00",intensity:0,num_report:0,interval:600},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.drawLineChart()}},{key:"componentDidUpdate",value:function(){this.drawLineChart()}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{id:"shakeLineChart"}),Object(s.jsx)("div",{id:"reportLineChart"})]})}}]),a}(r.a.Component),O=a(152),k=a.n(O),C=(a(367),function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleSelectRegion=function(t){console.log("select region ",t),n.setState({selectedRegion:t})},n.state={selectedRegion:[0,""]},n}return Object(d.a)(a,[{key:"render",value:function(){var t=this,e=window,a=e.innerWidth;e.innerHeight;return Object(s.jsx)("div",{children:Object(s.jsxs)(m.a,{className:"layout",layout:[{i:"a",x:0,y:0,w:6,h:9},{i:"b",x:6,y:0,w:6,h:9},{i:"c",x:0,y:9,w:12,h:10},{i:"e",x:0,y:18,w:12,h:27}],cols:12,rowHeight:45,margin:[5,1],width:a,children:[Object(s.jsx)("div",{children:Object(s.jsxs)("div",{class:"card",style:{height:405},children:[Object(s.jsx)("p",{style:{backgroundColor:"#e9ecef",margin:"5px",paddingLeft:"5px"},children:"City Map"}),Object(s.jsx)(y,{onSelectRegion:function(e){return t.handleSelectRegion(e)}})]})},"a"),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{class:"card",style:{height:405},children:[Object(s.jsx)("p",{style:{backgroundColor:"#e9ecef",margin:"5px",paddingLeft:"5px"},children:"Radar Chart"}),Object(s.jsxs)("div",{class:"row",style:{marginLeft:30,marginTop:10},children:[Object(s.jsx)("div",{class:"col-8",children:Object(s.jsx)(k.a,{captions:{buildings:"buildings",medical:"medical",sewer_and_water:"sewer and water",roads_and_bridges:"roads and bridges",power:"power"},data:[{data:{buildings:.4,medical:.7,sewer_and_water:.4,roads_and_bridges:.8,power:.5},meta:{color:"#fc9272"}}],size:360,options:{captionProps:function(){return{className:"caption",textAnchor:"middle",fontSize:15,fontFamily:"sans-serif"}}}})}),Object(s.jsx)("div",{class:"col-4",children:Object(s.jsx)("h3",{children:this.state.selectedRegion[1]})})]})]})},"b"),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{class:"card",style:{height:450},children:[Object(s.jsx)("p",{style:{backgroundColor:"#e9ecef",margin:"5px",paddingLeft:"5px"},children:"Line Chart"}),Object(s.jsx)(w,{})]})},"c"),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{class:"card",style:{height:1215},children:[Object(s.jsx)("p",{style:{backgroundColor:"#e9ecef",margin:"5px",paddingLeft:"5px"},children:"Heatmap"}),Object(s.jsx)(b,{})]})},"e")]})})}}]),a}(r.a.Component));o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),c()}},[[368,1,2]]]);
//# sourceMappingURL=main.dd0eb224.chunk.js.map