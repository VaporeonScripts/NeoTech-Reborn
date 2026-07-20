ServerEvents.tags('item', event => {

    event.add('c:string', 'minecraft:string')

    event.add('c:ores/aluminum', 'modern_industrialization:bauxite_ore')
    event.add('c:ores/aluminum', 'modern_industrialization:deepslate_bauxite_ore')

    event.add('minecraft:planks', 'deep_aether:roseroot_planks', 'deep_aether:yagroot_planks', 'deep_aether:cruderoot_planks', 'deep_aether:conberry_planks', 'deep_aether:sunroot_planks', 'aether:skyroot_planks')

    event.add('c:coal', 'modern_industrialization:coke')
    event.add('c:coal_coke', 'modern_industrialization:coke')
    event.add('minecraft:coals', 'modern_industrialization:coke')

    event.add('c:dusts/coal_coke', 'modern_industrialization:coke_dust')

    event.add('c:storage_blocks/coal_coke', 'modern_industrialization:coke_block')

    event.add('getittogetherdrops:do_not_combine', 'minecraft:chorus_fruit')

    event.remove('c:dusts', 'occultism:iron_dust', 'occultism:gold_dust', 'occultism:copper_dust')

    event.add('c:rubbers', 'productivetrees:cured_rubber')

    event.add('c:foods', 'extradelight:sliced_potato')
    event.add('c:foods/potato', 'extradelight:sliced_potato')
    event.add('c:foods/vegetable', 'extradelight:sliced_potato')

    event.add('c:foods', 'rusticdelight:baked_potato_slices')
    event.add('c:foods/potato', 'rusticdelight:baked_potato_slices')
    event.add('c:foods/vegetable', 'rusticdelight:baked_potato_slices')
    event.add('farmersdelight:cabbage_roll_ingredients', 'rusticdelight:baked_potato_slices')

    event.remove('c:dusts/aluminum', 'moremekanismprocessing:dust_aluminum')
    event.remove('c:dusts/iridium', 'moremekanismprocessing:dust_iridium')
    event.remove('c:dusts/nickel', 'moremekanismprocessing:dust_nickel')
    event.remove('c:dusts/platinum', 'moremekanismprocessing:dust_platinum')
    event.remove('c:dusts/titanium', 'moremekanismprocessing:dust_titanium')
    event.remove('c:dusts/tungsten', 'moremekanismprocessing:dust_tungsten')

    event.remove('c:ingots/aluminum', 'moremekanismprocessing:aluminum_ingot')
    event.remove('c:ingots/iridium', 'moremekanismprocessing:iridium_ingot')
    event.remove('c:ingots/nickel', 'moremekanismprocessing:nickel_ingot')
    event.remove('c:ingots/platinum', 'moremekanismprocessing:platinum_ingot')
    event.remove('c:ingots/titanium', 'moremekanismprocessing:titanium_ingot')
    event.remove('c:ingots/tungsten', 'moremekanismprocessing:tungsten_ingot')

    event.remove('c:nuggets/aluminum', 'moremekanismprocessing:aluminum_nugget')
    event.remove('c:nuggets/iridium', 'moremekanismprocessing:iridium_nugget')
    event.remove('c:nuggets/nickel', 'moremekanismprocessing:nickel_nugget')
    event.remove('c:nuggets/platinum', 'moremekanismprocessing:platinum_nugget')
    event.remove('c:nuggets/titanium', 'moremekanismprocessing:titanium_nugget')
    event.remove('c:nuggets/tungsten', 'moremekanismprocessing:tungsten_nugget')

    event.remove('c:gems/ruby', 'moremekanismprocessing:gem_ruby')
    event.remove('c:gems/sapphire', 'moremekanismprocessing:gem_sapphire')

    event.remove('c:ores/redstone', 'regions_unexplored:raw_redstone_block')
    event.remove('minecraft:redstone_ores', 'regions_unexplored:raw_redstone_block')

    event.remove('c:gems/peridot', 'irons_jewelry:peridot')
    event.remove('c:gems/ruby', 'irons_jewelry:ruby')
    event.remove('c:gems/sapphire', 'irons_jewelry:sapphire')
    event.remove('c:gems/topaz', 'irons_jewelry:topaz')

    event.add('c:crabs', 'crabbersdelight:raw_crab')
    event.add('c:shrimp', 'crabbersdelight:raw_shrimp')
    event.add('c:clams', 'crabbersdelight:raw_clam_meat', 'crabbersdelight:clam')

    event.add('c:steamed_crabs', 'crabbersdelight:cooked_crab')
    event.add('c:cooked_shrimp', 'crabbersdelight:cooked_shrimp')
    event.add('c:steamed_clams', 'crabbersdelight:cooked_clam_meat')

});
