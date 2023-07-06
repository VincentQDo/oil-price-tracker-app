<form class="flex flex-col space-y-6 p-6 mx-auto w-full max-w-md">
	<div class="flex flex-col">
		<label for="email-input" class="text-white text-lg">Email</label>
		<input
			type="email"
			name="email"
			id="email-input"
			class="rounded-md bg-gray-700 text-white text-lg p-2"
		/>
	</div>

	<div class="flex flex-col">
		<label for="password-input" class="text-white text-lg">Password</label>
		<input
			type="password"
			name="password"
			id="password-input"
			class="rounded-md bg-gray-700 text-white text-lg p-2"
		/>
		<a href="#" class="text-sm text-gray-400 hover:text-white self-end mt-1">Forgot Password?</a>
	</div>

	<button
		type="submit"
		class="py-2 px-4 bg-indigo-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg font-bold"
		>Login</button
	>

	<p class="text-white text-md my-4">Or sign in with</p>

	<div class="grid grid-cols-3 gap-4">
		<button
			type="button"
			class="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
		>
			<!-- <img src="/path/to/google-logo.svg" alt="Google logo" class="h-6 w-6 mr-2" /> -->
			Google
		</button>
		<button
			type="button"
			class="flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		>
			<!-- <img src="/path/to/facebook-logo.svg" alt="Facebook logo" class="h-6 w-6 mr-2" /> -->
			Facebook
		</button>
		<button
			type="button"
			class="flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
		>
			<!-- <img src="/path/to/microsoft-logo.svg" alt="Microsoft logo" class="h-6 w-6 mr-2" /> -->
			Microsoft
		</button>
	</div>
</form>
