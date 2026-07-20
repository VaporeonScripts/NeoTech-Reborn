ServerEvents.recipes(neotech => {
    neotech.replaceInput({ id: 'handcrafted:acacia_cupboard' }, 'minecraft:acacia_planks', 'minecraft:acacia_slab')
    neotech.replaceInput({ id: 'handcrafted:bamboo_cupboard' }, 'minecraft:bamboo_planks', 'minecraft:bamboo_slab')
    neotech.replaceInput({ id: 'handcrafted:birch_cupboard' }, 'minecraft:birch_planks', 'minecraft:birch_slab')
    neotech.replaceInput({ id: 'handcrafted:cherry_cupboard' }, 'minecraft:cherry_planks', 'minecraft:cherry_slab')
    neotech.replaceInput({ id: 'handcrafted:crimson_cupboard' }, 'minecraft:crimson_planks', 'minecraft:crimson_slab')
    neotech.replaceInput({ id: 'handcrafted:dark_oak_cupboard' }, 'minecraft:dark_oak_planks', 'minecraft:dark_oak_slab')
    neotech.replaceInput({ id: 'handcrafted:jungle_cupboard' }, 'minecraft:jungle_planks', 'minecraft:jungle_slab')
    neotech.replaceInput({ id: 'handcrafted:mangrove_cupboard' }, 'minecraft:mangrove_planks', 'minecraft:mangrove_slab')
    neotech.replaceInput({ id: 'handcrafted:oak_cupboard' }, 'minecraft:oak_planks', 'minecraft:oak_slab')
    neotech.replaceInput({ id: 'handcrafted:spruce_cupboard' }, 'minecraft:spruce_planks', 'minecraft:spruce_slab')
    neotech.replaceInput({ id: 'handcrafted:warped_cupboard' }, 'minecraft:warped_planks', 'minecraft:warped_slab')
    neotech.forEachRecipe({id: /handcrafted:.*_sheet$/}, (recipe) => {
        let temp_array = JSON.parse(recipe.json).ingredients
        temp_array.push(temp_array[0])
        recipe.set("ingredients", temp_array)
        recipe.set("result", recipe.get("result").withCount(10))
    })
})
