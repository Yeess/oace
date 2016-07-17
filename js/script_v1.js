

var w = 1100,
	h = 459;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Centro','Occidente','Pacifico Norte','SUR','NORESTE','NORTE CENTRO'];

//Data
var d = [
		  [
			{axis :"Rentabilidad (CC +CV)",value :0.2331},
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0.72},
			{axis :"Eficacia Autocorreccion",value :0.92},
			{axis :"Efectividad de la Autocorreccion",value :0.476},
			{axis :"Utilizacion de propuestas",value :0.65},
			{axis :"Efectividad de la programacion",value :0.909},
			{axis :"Recaudacion derivada de programacion",value :0.083},
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.6},
			{axis :"Efectividad  Actos de Fiscalizacion",value :0.95},
			{axis :"Efectividad de PAMAS",value :1},
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0.39},
			{axis :"Cumplimiento del POA",value :0.6}
		  ],
		  [
			{axis :"Rentabilidad (CC +CV)",value :0.3272},
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0},
			{axis :"Eficacia Autocorreccion",value :0.92},
			{axis :"Efectividad de la Autocorreccion",value :0.5},
			{axis :"Utilizacion de propuestas",value :0},
			{axis :"Efectividad de la programacion",value :1},
			{axis :"Recaudacion derivada de programacion",value :0.031},
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.125},
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},
			{axis :"Efectividad de PAMAS",value :1},
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0},
			{axis :"Cumplimiento del POA",value :0.6}
		  ],
		  [
			{axis :"Rentabilidad (CC +CV)",value :0.25},
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0},
			{axis :"Eficacia Autocorreccion",value :0.13},
			{axis :"Efectividad de la Autocorreccion",value :0.286},
			{axis :"Utilizacion de propuestas",value :0.333},
			{axis :"Efectividad de la programacion",value :1},
			{axis :"Recaudacion derivada de programacion",value :0.038},
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.143},
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},
			{axis :"Efectividad de PAMAS",value :1},
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0},
			{axis :"Cumplimiento del POA",value :0.6}		  
		  ],[
		 {axis :"Rentabilidad (CC +CV)",value :0.878},						
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :1},						
			{axis :"Eficacia Autocorreccion",value :0.97},						
			{axis :"Efectividad de la Autocorreccion",value :0.8},						
			{axis :"Utilizacion de propuestas",value :1},						
			{axis :"Efectividad de la programacion",value :0},						
			{axis :"Recaudacion derivada de programacion",value :0.088},						
			{axis :"Eficiencia Actos de Fiscalizacion",value :0},						
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},						
			{axis :"Efectividad de PAMAS",value :1},						
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0.001},						
			{axis :"Cumplimiento del POA",value :0.47},						
		],
		[
			  {axis :"Rentabilidad (CC +CV)",value :1.2082},										
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :1},										
			{axis :"Eficacia Autocorreccion",value :0.92},										
			{axis :"Efectividad de la Autocorreccion",value :0.789},										
			{axis :"Utilizacion de propuestas",value :1},										
			{axis :"Efectividad de la programacion",value :1},										
			{axis :"Recaudacion derivada de programacion",value :0.029},										
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.188},										
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},										
			{axis :"Efectividad de PAMAS",value :0},										
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0.0033},										
			{axis :"Cumplimiento del POA",value :0.6}										
			],
			[
		{axis :"Rentabilidad (CC +CV)",value :0.107},									
		{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0},									
		{axis :"Eficacia Autocorreccion",value :0.96},									
		{axis :"Efectividad de la Autocorreccion",value :0.5},									
		{axis :"Utilizacion de propuestas",value :0},									
		{axis :"Efectividad de la programacion",value :0},									
		{axis :"Recaudacion derivada de programacion",value :0.005},									
		{axis :"Eficiencia Actos de Fiscalizacion",value :1},									
		{axis :"Efectividad  Actos de Fiscalizacion",value :1},									
		{axis :"Efectividad de PAMAS",value :1},									
		{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0},									
		{axis :"Cumplimiento del POA",value :0.6}								
		]				
		];
var d1 = [
		  [
			{axis :"Rentabilidad (CC +CV)",value :0.2331},
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0.72},
			{axis :"Eficacia Autocorreccion",value :0.92},
			{axis :"Efectividad de la Autocorreccion",value :0.476},
			{axis :"Utilizacion de propuestas",value :0.65},
			{axis :"Efectividad de la programacion",value :0.909},
			{axis :"Recaudacion derivada de programacion",value :0.083},
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.6},
			{axis :"Efectividad  Actos de Fiscalizacion",value :0.95},
			{axis :"Efectividad de PAMAS",value :1},
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0.39},
			{axis :"Cumplimiento del POA",value :0.6}
		  ]			
		];

var d2 = [[
			{axis :"Rentabilidad (CC +CV)",value :0.3272},
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0},
			{axis :"Eficacia Autocorreccion",value :0.92},
			{axis :"Efectividad de la Autocorreccion",value :0.5},
			{axis :"Utilizacion de propuestas",value :0},
			{axis :"Efectividad de la programacion",value :1},
			{axis :"Recaudacion derivada de programacion",value :0.031},
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.125},
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},
			{axis :"Efectividad de PAMAS",value :1},
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0},
			{axis :"Cumplimiento del POA",value :0.6}
		  ]];
var d3 = [[
			{axis :"Rentabilidad (CC +CV)",value :0.25},
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0},
			{axis :"Eficacia Autocorreccion",value :0.13},
			{axis :"Efectividad de la Autocorreccion",value :0.286},
			{axis :"Utilizacion de propuestas",value :0.333},
			{axis :"Efectividad de la programacion",value :1},
			{axis :"Recaudacion derivada de programacion",value :0.038},
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.143},
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},
			{axis :"Efectividad de PAMAS",value :1},
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0},
			{axis :"Cumplimiento del POA",value :0.6}		  
		  ]];	
var d4 = [[
		 {axis :"Rentabilidad (CC +CV)",value :0.878},						
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :1},						
			{axis :"Eficacia Autocorreccion",value :0.97},						
			{axis :"Efectividad de la Autocorreccion",value :0.8},						
			{axis :"Utilizacion de propuestas",value :1},						
			{axis :"Efectividad de la programacion",value :0},						
			{axis :"Recaudacion derivada de programacion",value :0.088},						
			{axis :"Eficiencia Actos de Fiscalizacion",value :0},						
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},						
			{axis :"Efectividad de PAMAS",value :1},						
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0.001},						
			{axis :"Cumplimiento del POA",value :0.47},						
		]];		
var d5 = [[
			  {axis :"Rentabilidad (CC +CV)",value :1.2082},										
			{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :1},										
			{axis :"Eficacia Autocorreccion",value :0.92},										
			{axis :"Efectividad de la Autocorreccion",value :0.789},										
			{axis :"Utilizacion de propuestas",value :1},										
			{axis :"Efectividad de la programacion",value :1},										
			{axis :"Recaudacion derivada de programacion",value :0.029},										
			{axis :"Eficiencia Actos de Fiscalizacion",value :0.188},										
			{axis :"Efectividad  Actos de Fiscalizacion",value :1},										
			{axis :"Efectividad de PAMAS",value :0},										
			{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0.0033},										
			{axis :"Cumplimiento del POA",value :0.6}										
			]];		
var d6 = [[
		{axis :"Rentabilidad (CC +CV)",value :0.107},									
		{axis :"Contribuyentes autocorregidos previos Acto  Fiscalizacion",value :0},									
		{axis :"Eficacia Autocorreccion",value :0.96},									
		{axis :"Efectividad de la Autocorreccion",value :0.5},									
		{axis :"Utilizacion de propuestas",value :0},									
		{axis :"Efectividad de la programacion",value :0},									
		{axis :"Recaudacion derivada de programacion",value :0.005},									
		{axis :"Eficiencia Actos de Fiscalizacion",value :1},									
		{axis :"Efectividad  Actos de Fiscalizacion",value :1},									
		{axis :"Efectividad de PAMAS",value :1},									
		{axis :"Incremento en el Porcentaje de Presencia Fiscal",value :0},									
		{axis :"Cumplimiento del POA",value :0.6}								
		]];	
	
//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  //maxValue: 1,
  //levels: 10,
  //ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h-100)
	

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "11px")
	//.attr("fill", "#404040")
	.attr("fill", "#fff")
	.text("Regionales");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 85)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 7;})
	  .attr("font-size", "11px")
	  //.attr("fill", "#737373")
	  .attr("fill", "#fff")
	  .text(function(d) { return d; })
	  ;	