<script>
	import '../app.css';
	import ThemeSwitch from '$lib/ThemeSwitch/ThemeSwitch.svelte';
</script>

<nav class="bg-gray-800 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<a href="/" class="text-slate-100 text-2xl font-bold">Guess That RS</a>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a
							href="/"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
							aria-current="page"
						>
							Home
						</a>
						<a
							href="/play"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
						>
							Play
						</a>
					</div>
				</div>
			</div>
			<ThemeSwitch />
		</div>
	</div>
</nav>
<slot />
