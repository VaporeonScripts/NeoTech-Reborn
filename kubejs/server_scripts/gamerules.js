ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return

        event.server.gameRules.set("playersSleepingPercentage", "33")
        event.server.gameRules.set("spawnChunkRadius", "0")
        event.server.gameRules.set("confluenceSpreadableChance", "50")

        event.server.persistentData.gameRules = true
})
