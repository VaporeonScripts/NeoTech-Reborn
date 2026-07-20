ServerEvents.recipes(event => {

    event.remove({id: 'utilitarian:utility/iron_block_from_smelting'})
    event.remove({id: 'utilitarian:utility/gold_block_from_smelting'})
    event.remove({id: 'utilitarian:utility/copper_block_from_smelting'})
    event.remove({id: 'utilitarian:utility/iron_block_from_blasting'})
    event.remove({id: 'utilitarian:utility/gold_block_from_blasting'})
    event.remove({id: 'utilitarian:utility/copper_block_from_blasting'})

    event.remove({id: 'productivetrees:crates/red_delicious_apple_crate'})

    event.remove({id: 'actuallyadditions:crafter_on_a_stick'})

    event.remove({id: 'actuallyadditions:coal_to_tiny'})
    event.remove({id: 'actuallyadditions:tiny_to_coal'})

    event.remove({id: 'actuallyadditions:charcoal_to_tiny'})
    event.remove({id: 'actuallyadditions:tiny_to_charcoal'})

    event.remove({id: 'quark:world/crafting/woodsets/azalea/azalea_chest_wood'})
    event.remove({id: 'quark:world/crafting/woodsets/azalea/azalea_chest'})
    event.shapeless('quark:azalea_chest', ['quark:azalea_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/birch_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/birch_chest'})
    event.shapeless('quark:birch_chest', ['minecraft:birch_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/cherry_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/cherry_chest'})
    event.shapeless('quark:cherry_chest', ['minecraft:cherry_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/oak_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/oak_chest'})
    event.shapeless('quark:oak_chest', ['minecraft:oak_planks', 'minecraft:chest'])

    event.remove({id: 'quark:world/crafting/woodsets/ancient/ancient_chest_wood'})
    event.remove({id: 'quark:world/crafting/woodsets/ancient/ancient_chest'})
    event.shapeless('quark:ancient_chest', ['quark:ancient_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/acacia_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/acacia_chest'})
    event.shapeless('quark:acacia_chest', ['minecraft:acacia_planks', 'minecraft:chest'])

    event.remove({id: 'quark:world/crafting/woodsets/blossom/blossom_chest_wood'})
    event.remove({id: 'quark:world/crafting/woodsets/blossom/blossom_chest'})
    event.shapeless('quark:blossom_chest', ['quark:blossom_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/spruce_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/spruce_chest'})
    event.shapeless('quark:spruce_chest', ['minecraft:spruce_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/bamboo_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/bamboo_chest'})
    event.shapeless('quark:bamboo_chest', ['minecraft:bamboo_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/crimson_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/crimson_chest'})
    event.shapeless('quark:crimson_chest', ['minecraft:crimson_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/jungle_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/jungle_chest'})
    event.shapeless('quark:jungle_chest', ['minecraft:jungle_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/dark_oak_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/dark_oak_chest'})
    event.shapeless('quark:dark_oak_chest', ['minecraft:dark_oak_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/mangrove_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/mangrove_chest'})
    event.shapeless('quark:mangrove_chest', ['minecraft:mangrove_planks', 'minecraft:chest'])

    event.remove({id: 'quark:building/chests/warped_chest_wood'})
    event.remove({id: 'quark:building/crafting/chests/warped_chest'})
    event.shapeless('quark:warped_chest', ['minecraft:warped_planks', 'minecraft:chest'])

    event.remove({id: 'ascended_quark:yagroot_chest'})
    event.shapeless('ascended_quark:yagroot_chest', ['deep_aether:yagroot_planks', 'minecraft:chest'])

    event.remove({id: 'ascended_quark:sunroot_chest'})
    event.shapeless('ascended_quark:sunroot_chest', ['deep_aether:sunroot_planks', 'minecraft:chest'])

    event.remove({id: 'ascended_quark:roseroot_chest'})
    event.shapeless('ascended_quark:roseroot_chest', ['deep_aether:roseroot_planks', 'minecraft:chest'])

    event.remove({id: 'ascended_quark:cruderoot_chest'})
    event.shapeless('ascended_quark:cruderoot_chest', ['deep_aether:cruderoot_planks', 'minecraft:chest'])

    event.remove({id: 'ascended_quark:conberry_chest'})
    event.shapeless('ascended_quark:conberry_chest', ['deep_aether:conberry_planks', 'minecraft:chest'])

    event.remove({id: 'ascended_quark:skyroot_chest'})
    event.shapeless('ascended_quark:skyroot_chest', ['aether:skyroot_planks', 'minecraft:chest'])

    event.remove({id: 'ascended_quark:holystone_furnace'})
    event.shapeless('ascended_quark:holystone_furnace', ['aether:holystone', 'minecraft:furnace'])

    event.remove({id: 'quark:building/crafting/furnaces/blackstone_furnace'})
    event.shapeless('quark:blackstone_furnace', ['minecraft:blackstone', 'minecraft:furnace'])

    event.remove({id: 'quark:building/crafting/furnaces/deepslate_furnace'})
    event.shapeless('quark:deepslate_furnace', ['minecraft:cobbled_deepslate', 'minecraft:furnace'])

    event.remove({id: 'quark:building/crafting/compressed/vanilla_nether_wart_block_4x4'})

    event.remove({id: 'utilitarian:utility/nether_wart'})

});
