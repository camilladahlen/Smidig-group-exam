import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'
import file from './Meliora-categories.csv'
import './BubbleChart.css'

const BubbleChart = ({ tagsData, setSelected }) => {
	const d3Bubbles = useRef() //Reference to the svg element returned in this component
	const d3Labels = useRef() //Reference to the div element returned in this component

	let tutorial = false;

//Hook that runs once on page load and every subsequent state change
	useEffect(() => {

		const margin = {top: 50, right: 30, bottom: 30, left: 30 }
		const width = parseInt(d3.select('#bubble-container').style('width')) - margin.left - margin.right
		const height = parseInt(d3.select('#bubble-container').style('height')) - margin.top - margin.bottom

		const circlesPadding = 4 //The amount of minimum spacing between the circles
		const circlesScaleFactor = 6 //Used for setting the scale of the circles
		const forceStrength = 0.05

		const svg = d3.select(d3Bubbles.current)
			.attr('height', height)
			.attr('width', width)
			.append('g')
			.attr('transform', `translate(${height/2},${width/2})`) //Sets the position of the g-tag

		//GRADIENT STUFF
		configureGradient(svg);

		/*
		Function for setting the radius of the drawn circles to match selection type. scaleLinear()
		means that a bubble clicked once is exactly 2x the size of the smallest bubble. scaleSqrt()
		would make it >2x the size, and
		*/
		const minRadius = 10 * circlesScaleFactor
		const radiusScale = d3.scaleLinear().domain([0,2]).range([minRadius, minRadius*3])

		//Function that applies the forces to the elements
		const centerSimulation = d3.forceSimulation()
			.force('x', d3.forceX().strength(forceStrength))
			.force('y', d3.forceY().strength(forceStrength))
			.force('collide', d3.forceCollide( (d) => radiusScale(d.selection) + circlesPadding ))

		const radialSimulation = d3.forceSimulation()
			.force("charge", d3.forceCollide().radius(5))
			.force("r", d3.forceRadial((d) => { return 300 }))
			.force('collide', d3.forceCollide( (d) => radiusScale(d.selection) + circlesPadding ))


		//Loading the data, and rendering the bubbles afterwards
		const ready = (data) => {
			//This is the function that actually draws each circle
			const g = svg.selectAll(null)
				.data(data)
				.enter()
				.append('g')

			g.append("circle")
				.attr('class', 'bubble')
				.on('click', (d) => {setSelected(d)} )
				.attr('fill', 'url(#gradient)')
				.attr('r', (d) => { return radiusScale(d.selection) } )

			g.append("text")
				.text((d) => d.title)
				.style('text-anchor', 'middle')

			//This is the function that moves the bubbles for us
			const ticked = () => {
				//g.attr('cx', (d) => {return d.x}).attr('cy', (d) => {return d.y})
				g.attr('transform', (d) => { return `translate(${d.x},${d.y})`})
			}

			if(tutorial){
				radialSimulation.nodes(data).on('tick', ticked)
			} else {
				centerSimulation.nodes(data).on('tick', ticked)
			}
		}

		//If data isn't passed to the component, load it yourself...
		if(!tagsData){
			loadData(ready, file);
		} else {
			ready(tagsData)
		}


		return () => {console.log('Cleanup')} //Remove old bubbles here
	})

	//Helper function for loading data from a file and triggering a callback afterwards
	const loadData = (callback, file) => {
		d3.csv(file).then((data) => {
			callback(data)
			//console.log(data)
		}).catch((error) => {
			console.log('Failed to load data')
		})
	}

	//Helper for configuring the gradient
	const configureGradient = (svg) => {
		const gradient = svg.append("svg:defs")
			.append("svg:linearGradient")
			.attr("id", "gradient")
			.attr("x1", "0%")
			.attr("y1", "0%")
			.attr("x2", "100%")
			.attr("y2", "100%")
			.attr("spreadMethod", "pad");

		// Define the gradient colors
		gradient.append("svg:stop")
			.attr("offset", "0%")
			.attr("stop-color", "#EEAECAFF")
			.attr("stop-opacity", 1);

		gradient.append("svg:stop")
			.attr("offset", "100%")
			.attr("stop-color", "#94BBE9FF")
			.attr("stop-opacity", 1);
	}

	return (
        <div id='bubble-container'>
			<svg ref={d3Bubbles}/>
			<div ref={d3Labels}/>
    	</div>
    )
}

export default BubbleChart
