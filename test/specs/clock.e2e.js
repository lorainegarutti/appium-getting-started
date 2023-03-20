describe('Clock', () => {
	it('adds a new city time', async () => {
		const clockIcon = $('~Clock')
		const addCityButton = $('~Add city')
		const addCityInput = $('//android.widget.EditText[@text="Search for a city"]')
		const cityOption = $('//android.widget.TextView[@text="New York, NY, USA"]')
		const addedCity = $('//android.widget.TextView[@text="New York"]')
		
		await clockIcon.click()
		await addCityButton.click()
		
		await addCityInput.addValue('New York')
		await cityOption.click()
		
		await expect(addedCity).toBeDisplayed()
	})
})
