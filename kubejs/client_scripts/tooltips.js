ItemEvents.modifyTooltips(neotech => {

    //Forbidden Arcanus
    neotech.add('forbidden_arcanus:hephaestus_forge_tier_1',[
        Text.of("§c§lShift-Right-Click§r§c the §c§lSmithing Table§r§c with §lMundabitur Dust"),
                Text.of("§c█ = Gilded Chiseled Polished Darkstone with Smithing Table on top"),
                Text.of("§7█ = Polished Darkstone"),
                Text.of("§5█§7 = Gilded Chiseled Polished Darkstone"),
                Text.of("§6█§7 = Chiseled Arcane Polished Darkstone"),
                Text.of("§0███§7███§0███"),
                Text.of("§0█§7███§5█§7███§0█"),
                Text.of("§0█§7█§5█§7███§5█§7█§0█"),
                Text.of("§7████§6█§7████"),
                Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
                Text.of("§7████§6█§7████"),
                Text.of("§0█§7█§5█§7███§5█§7█§0█"),
                Text.of("§0█§7███§5█§7███§0█"),
                Text.of("§0███§7███§0███")
    ])
    neotech.add('forbidden_arcanus:clibano_core',[
        Text.of("§c§lShift-Right-Click§r§c the §c§lClibano Core§r§c with §c§lMundabitur Dust"),
                Text.of("§5█§7 = Polished Darkstone"),
                Text.of("§7█ = Polished Darkstone Bricks"),
                Text.of("§6█§7 = Clibano Core"),
                Text.of("§7Right to Left -> Bottom to Top"),
                Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
                Text.of("§7███§0█§7█§0█§7█§0█§7███"),
                Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█"),
    ])
    neotech.add('forbidden_arcanus:growing_edelwood',[
        Text.of("§4Obtainable from the Wandering Trader"),
                Text.of("§4Or by using a Corrupt Soul on an Oak Sapling"),
    ])
    neotech.add('forbidden_arcanus:magnetized_darkstone_pedestal',[
        Text.of("§7Use Ferrognetic Mixture on the Darkstone Pedesta"),
    ])
    neotech.add('forbidden_arcanus:soul',[
        Text.of("§7Use a Soul Extractor on Soul Sand"),
                Text.of("§7Rarely spawns in world"),
    ])
    neotech.add('forbidden_arcanus:enchanted_soul',[
        Text.of("§7Use a Splash Aureal Bottle on a normal soul")
    ])
    neotech.add('forbidden_arcanus:corrupt_soul',[
        Text.of("§7Rarely spawns when killing mobs")
    ])
    neotech.add('forbidden_arcanus:blood_test_tube',[
        Text.of("§7Hold a test tube in your off-hand and then kill mobs")
    ])
    neotech.add('forbidden_arcanus:xpetrified_orb',[
        Text.of("§7Only obtainable via the Black Hole"),
                Text.of("§7To make a Black Hole throw Dark Matter together with Corrupti Dust on the ground"),
                Text.of("§7Feed it enough xp to make it spit out an Xpetrified Orb")
    ])
    neotech.add('forbidden_arcanus:dragon_scale',[
        Text.of("§7Dropped by the Ender Dragon")
    ])
    neotech.add('forbidden_arcanus:stella_arcanum',[
        Text.of("§7Very rarely spawns between Y -44 and Y 42"),
                Text.of("§cWill explode when you mine it!")
    ])
    neotech.add(/forbidden_arcanus:runic_[sd]/,[
        Text.of("§7Spawns at the bottom of the world up to Y 2"),
    ])
    neotech.add(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore'],[
        Text.of("§7Very rarely spawns between Y -40 and Y 14"),
                Text.of("§7Most common at Y -13")
    ])
    neotech.add('forbidden_arcanus:artisan_relic',[
        Text.of("§aFound in the Armorer, Toolsmith, or Weaponsmith villager buildings"),
    ])
    neotech.add('forbidden_arcanus:crescent_moon',[
        Text.of("§cUnobtainable"),
    ])
    neotech.add('forbidden_arcanus:crimson_stone',[
        Text.of("§aFound in Pillager Outposts"),
    ])
    neotech.add('forbidden_arcanus:soul_crimson_stone',[
        Text.of("§cWill turn into a Crimson Stone after 1 use"),
    ])
    neotech.add('forbidden_arcanus:elementarium',[
        Text.of("§aFound in Jungle Temples, Desert Pyramids, and Underwater Ruins"),
    ])
    neotech.add('forbidden_arcanus:divine_pact',[
        Text.of("§aFound in the Village and Pyramid in The Other"),
    ])
    neotech.add('forbidden_arcanus:maledictus_pact',[
        Text.of("§aFound in Treasure Bastions"),
    ])

    //Mystical Agriculture
    neotech.add(/mysticalagriculture:.*watering_can/,[
        Text.of("§7Any watering can works the same. Choose whichever you prefer!")
    ])

    //Easy Villagers
    neotech.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.of("§aRight click with job site block to put it inside and allow trade restocking")
    ])

    //Eternal Starlight
    neotech.add('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]', [
        Text.of('This loot bag is from the \"Lunar Monstrosity\".')
    ])

})
