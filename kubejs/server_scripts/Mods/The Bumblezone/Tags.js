ServerEvents.tags('item', event => {
    const saplings = event.get('minecraft:saplings').getObjectIds()
    const blacklist = Ingredient.of(/productivetrees.*/)
    saplings.forEach(sapling => {
        if (!blacklist.test(sapling)) event.add('the_bumblezone:tradeable_saplings', sapling)
    })

    event.add('megacells:compression_overrides', 'the_bumblezone:pollen_puff')
})
