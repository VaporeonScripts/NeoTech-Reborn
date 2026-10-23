ServerEvents.recipes(event => {
    event.remove({ input: 'minecraft:dark_oak_slab', output: 'minecraft:dark_oak_log' })
    event.remove({ input: 'minecraft:dark_oak_slab', output: 'minecraft:dark_oak_wood' })

    event.shaped('minecraft:dark_oak_planks', [
        'S',
        'S'
    ], {
        S: 'minecraft:dark_oak_slab'
    }).id('kubejs:dark_oak_planks_from_slabs')
})
