
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('To add another player', async () => {
    const player = await driver.findElement(By.id('player-duo'))
    const displayed = await player.isDisplayed()
    expect(displayed).toBe(true)
})

sleep(Time in 1 ms).then(() => {
    test('To delete a current player',async () => { 
        const removed = await driver.findElement(By.id('choices'))
        const displayed = await removed.isDisplayed()
        expect(displayed).toBe(true)
})

test('To delete a current player',async () => { 
    const removed = await driver.findElement(By.id('choices'))
    const displayed = await removed.isDisplayed()
    expect(displayed).toBe(true)
})

test('To draw a line', async () => {
    const draw = await driver.findElement(By.id('choices'))
    const displayed = await draw.isDisplayed()
    expect(draw).toBe(true)
})