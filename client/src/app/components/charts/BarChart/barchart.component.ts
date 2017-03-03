/**
 * Created by Lenovo on 26-Feb-17.
 */
import {Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation} from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: "bar-chart",
  moduleId: module.id,
  templateUrl: "barchart.component.html",
  styleUrls: ["barchart.component.css"],
  encapsulation: ViewEncapsulation.None
})

export class BarChart implements OnInit, OnChanges{
  @ViewChild('chart') private chartContainer: ElementRef;
  private data: any [][];
  private data1: any [];
  private chart: any;

  private width: any = 420;
  private barHeight: any = 20;
  private bar: any;
  private x: any;

  private toolTip: any;

  constructor(){
    this.data = [
      [1,2],
      [5,4]
    ];

    this.data1 = [4, 8, 15, 16, 23, 42];
  }


  ngOnInit() {
    //TODO: Find a way to call these functions after the width of chart element has been set. without having to setTimeout.
    this.wait()
      .then(() => this.createChart())
      .then(() => {
        if (this.data) {
          this.updateChart();
        }
      });
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  private wait(delay = 500){
    return new Promise(resolve => {
      setTimeout(resolve,delay);
    })
  }

  private createChart(){
    this.x = d3.scaleLinear()
      .domain([0,d3.max(this.data1)])
      .range([0,this.width]);

    this.chart = d3.select(".chart")
      .attr("width", this.width)
      .attr("height", this.barHeight * this.data1.length);

    this.toolTip = d3.select("body").append("div")
      .attr("class","tooltip")
      .style("opacity",0);

    this.bar = this.chart.selectAll("g")
      .data(this.data1)
      .enter().append("g")
      .attr("transform",((d,i) =>{
        return "translate(0," + i*this.barHeight + ")";
      }));

    this.bar.append("rect")
      .attr("width",this.x)
      .attr("height",this.barHeight - 1);

    this.bar.append("text")
      .attr("x", (d =>{
        return this.x(d) - 3;
      }))
      .attr("y", this.barHeight/2)
      .attr("dy",".35em")
      .text((d => {
        return d;
      }));

    this.chart.selectAll("rect")
      .on("mouseover",(d =>{
        this.toolTip
          .transition()
          .duration(200)
          .style("opacity","0.9")
          .style("left",(d3.event.pageX) + "px")
          .style("top",(d3.event.pageY - 28) + "px");
        this.toolTip.html("value: " + d);
      }))
      .on("mouseout",(d => {
        this.toolTip
          .transition()
          .duration(500)
          .style("opacity","0.0")
      }));


  }

  updateChart() {

  }
}
