<form class="flex flex-col space-y-6 p-6 mx-auto w-full max-w-md">
	<div class="flex flex-col">
		<label for="signup-email-input" class="text-white text-lg">Email</label>
		<input
			type="email"
			name="email"
			id="signup-email-input"
			class="rounded-md bg-gray-700 text-white text-lg p-2"
		/>
	</div>

	<div class="flex flex-col">
		<label for="signup-password-input" class="text-white text-lg">Password</label>
		<input
			type="password"
			name="password"
			id="signup-password-input"
			class="rounded-md bg-gray-700 text-white text-lg p-2"
		/>
	</div>

	<div class="flex flex-col">
		<label for="signup-confirm-password-input" class="text-white text-lg">Confirm Password</label>
		<input
			type="password"
			name="confirm-password"
			id="signup-confirm-password-input"
			class="rounded-md bg-gray-700 text-white text-lg p-2"
		/>
	</div>

	<button
		type="submit"
		class="py-2 px-4 bg-green-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-lg font-bold"
		>Sign up</button
	>

	<div class="text-center">
		<p class="text-white text-md">Already have an account?</p>
		<button
			type="button"
			class="mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg font-bold"
		>
			Log in
		</button>
	</div>
</form>
