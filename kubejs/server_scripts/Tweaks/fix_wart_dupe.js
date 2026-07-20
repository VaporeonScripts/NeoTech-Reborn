ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:nether_wart_block' })
    event.shapeless(Item.of('minecraft:nether_wart', 9), [
        'minecraft:nether_wart_block'
    ])
})
