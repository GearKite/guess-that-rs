<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
	import '@maptiler/sdk/dist/maptiler-sdk.css';
	import { browser } from '$app/environment';
	import { Routes } from '$lib/RS/RS.js';
	import { base } from '$app/paths';

	let map: Map;
	let mapContainer: HTMLElement;
	let current_map_route = null;

	let bus_routes: Array<any> = [];
	let tram_routes: Array<any> = [];
	let trol_routes: Array<any> = [];

	const sorted_routes = Routes.sort(function (a, b) {
		return parseInt(a.ref) - parseInt(b.ref);
	});
	for (let route of sorted_routes) {
		if (route.id !== '0') continue;
		if (route.type == 'bus') {
			bus_routes.push(route);
		} else if (route.type == 'tram') {
			tram_routes.push(route);
		} else if (route.type == 'trol') {
			trol_routes.push(route);
		}
	}

	config.apiKey = 't4Fda4KndCNCNWk4GQHw';

	function load_random_route() {
		let route = Routes[Math.floor(Math.random() * Routes.length)];

		if (current_map_route !== null) {
			map.removeLayer(current_map_route);
			map.removeSource(current_map_route);
		}

		current_map_route = `route-${route.type}-${route.ref}`;

		map.addSource(current_map_route, {
			type: 'geojson',
			data: `${base}/rs/routes/${route.prefix}_${route.type}_${route.ref}_${route.id}.geojson`
		});

		map.addLayer({
			id: current_map_route,
			type: 'line',
			source: current_map_route,
			layout: {
				'line-cap': 'round'
			},
			paint: {
				'line-color': '#7E30E1',
				'line-width': 4
			}
		});
	}

	onMount(() => {
		const initialState = { lat: 56.9493977, lng: 24.1051846, zoom: 12 };

		map = new Map({
			container: mapContainer,
			style: MapStyle.STREETS,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		map.on('load', function () {
			if (browser) {
				load_random_route();
			}
		});
	});

	onDestroy(() => {
		if (typeof map == 'undefined') {
			return;
		}
		map.remove();
	});

	function openRoutes(evt, mode_name) {
		// Declare all variables
		var i, tabcontent, tablinks;

		// Get all elements with class="transport-route-panel" and hide them
		tabcontent = document.getElementsByClassName('transport-route-panel');
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].classList.add('hidden');
		}

		// Get all elements with class="btn-transport-routes" and remove the class "active"
		tablinks = document.getElementsByClassName('btn-transport-routes');
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(' active', '');
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(`panel-${mode_name}-routes`).classList.remove('hidden');
		evt.currentTarget.className += ' active';
	}

	let selected_route = null;

	function selectRoute(evt) {
		// Declare all variables
		var i, tablinks;

		// Get all elements with class="btn-select-route" and remove the class "active"
		tablinks = document.getElementsByClassName('btn-select-route');
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(' active', '');
		}

		if (evt != null) {
			evt.currentTarget.className += ' active';
			selected_route = evt.currentTarget.id;
		} else {
			selected_route = null;
		}
	}

	function guess(evt) {
		if (selected_route == null) {
			alert('Select a route to guess!');
			return;
		}

		let route = current_map_route.replaceAll('-', ' ');

		if (current_map_route != selected_route) {
			alert(`Incorrect, this was ${route}`);
		} else {
			alert(`Congratulations! You guessed correctly ${route}`);
		}
		selectRoute(null);
	}

	function next(evt) {
		selectRoute(null);
		load_random_route();
	}
</script>

<div class="container-full m-3">
	<div class="flex">
		<div class="map w-3/5" bind:this={mapContainer}></div>
		<div class="ml-3 w-2/5">
			<div class="w-half items-center">
				<h2 class="text-2xl">Select route</h2>
				<div class="m-3">
					<button class="btn-transport-routes active" on:click={(e) => openRoutes(e, 'bus')}
						>Bus</button
					>
					<button class="btn-transport-routes" on:click={(e) => openRoutes(e, 'tram')}>Tram</button>
					<button class="btn-transport-routes" on:click={(e) => openRoutes(e, 'trol')}
						>Trolleybus</button
					>
				</div>
				<div id="panel-bus-routes" class="transport-route-panel">
					{#each bus_routes as route, _}
						<button
							id="route-bus-{route.ref}"
							class="btn-bus btn-select-route"
							on:click={(e) => selectRoute(e)}>{route.ref}</button
						>
					{/each}
				</div>
				<div id="panel-tram-routes" class="transport-route-panel hidden">
					{#each tram_routes as route, _}
						<button
							id="route-tram-{route.ref}"
							class="btn-tram btn-select-route"
							on:click={(e) => selectRoute(e)}>{route.ref}</button
						>
					{/each}
				</div>
				<div id="panel-trol-routes" class="transport-route-panel hidden">
					{#each trol_routes as route, _}
						<button
							id="route-trol-{route.ref}"
							class="btn-trol btn-select-route"
							on:click={(e) => selectRoute(e)}>{route.ref}</button
						>
					{/each}
				</div>
				<button id="btn-guess" class="btn-primary mt-6" on:click={guess}>Guess</button>
				<button id="btn-next" class="btn-secondary mt-6" on:click={next}>Next</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.map {
		height: 100vh; /* calculate height of the screen minus the heading */
	}
	.btn-secondary-base {
		@apply rounded-md px-3 py-2 text-sm font-medium duration-150;
		@apply text-gray-900 hover:bg-gray-700 hover:text-white bg-gray-300;
	}
	.btn-secondary {
		@apply btn-secondary-base;
		@apply dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:bg-gray-900;
	}
	.btn-transport-routes {
		@apply btn-secondary w-1/4;
	}
	.transport-route-panel {
	}
	.btn-transport {
		@apply btn-secondary-base;
		@apply m-0.5;
	}
	.btn-bus {
		@apply btn-transport;
		@apply bg-yellow-500 text-white;
	}
	.btn-tram {
		@apply btn-transport;
		@apply bg-red-600 text-white;
	}
	.btn-trol {
		@apply btn-transport;
		@apply bg-blue-500 text-white;
	}
	.active {
		@apply border-2 border-gray-900 border-opacity-100 m-0;
		@apply dark:border-gray-200;
	}
</style>
