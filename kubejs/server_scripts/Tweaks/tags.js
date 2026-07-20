ServerEvents.tags('block', neotech => {
    neotech.add("c:mushroom", ["#c:is_mushroom"]);
    neotech.add('ftbchunks:interact_whitelist', [
        '@waystones',
        'minecraft:crafting_table',
        'minecraft:ender_chest',
        'minecraft:enchanting_table',
        'minecraft:loom',
        'minecraft:smithing_table',
        'minecraft:stonecutter',
        '#minecraft:anvil',
        'minecraft:bell',
        'yigd:grave',
        '#lootr:containers',
    ]);
    neotech.add('justdirethings:lawnmowerable', '#c:grass');
    neotech.add('ae2:blacklisted/spatial', ['justdirethings:time_crystal_budding_block']);
    neotech.add('mekanism:cardboard_blacklist', ['justdirethings:time_crystal_budding_block', '@waystones']);
    Color.DYE.forEach(color => {
        neotech.add('c:glass_blocks', `#chipped:${color}_stained_glass`);
        neotech.add('c:glass_panes', `#chipped:${color}_stained_glass_pane`);
    });
    neotech.add('c:glass_blocks', ['#chipped:glass']);
    neotech.add('c:glass_panes', ['#chipped:glass_pane']);
    neotech.add('minecraft:mineable/pickaxe', [
        '#c:glass_blocks',
        '#c:glass_panes',
        '#chipped:glowstone',
        /^mekanism:(basic|advanced|elite|ultimate)_(universal_cable|mechanical_pipe|pressurized_tube|logistical_transporter|thermodynamic_conductor)$/,
                'mekanism:diversion_transporter',
                'mekanism:restrictive_transporter',
                '#c:skulls',
                'ars_additions:ender_source_jar',
                'animal_pen:aquarium_block',
                'moderndynamics:machine_extender',
    ]);
    neotech.add('minecraft:mineable/axe', ['mekanism:cardboard_box', '#animal_pen:animal_pens']);
    neotech.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');
    let immuneTags = [
        'cataclysm:clawdian_immune',
        'cataclysm:remnant_immune',
        'cataclysm:altar_destroy_immune',
        'cataclysm:scylla_immune',
        'cataclysm:ignis_immune',
        'cataclysm:harbinger_immune',
        'cataclysm:leviathan_immune',
        'cataclysm:maledictus_immune',
        'cataclysm:netherite_monstrosity_immune',
    ];
    immuneTags.forEach(tag => {
        neotech.add(tag, ['yigd:grave'])
    });
});
ServerEvents.tags('item', neotech => {
    neotech.add('c:seeds/cabbage', ['farmersdelight:cabbage_seeds', 'dumplings_delight:chinese_cabbage_seeds']);
    neotech.add('c:seeds/tomato', 'farmersdelight:tomato_seeds');
    neotech.add('c:seeds/eggplant', 'dumplings_delight:eggplant_seeds');
    neotech.add('c:crops/garlic', 'dumplings_delight:garlic');
    neotech.add('c:crops/green_onion', 'dumplings_delight:greenonion');
    neotech.add('actuallyadditions:coffee_beans', 'rusticdelight:roasted_coffee_beans');
    neotech.remove('c:crops/garlic', 'dumplings_delight:garlic_clove');
    neotech.remove('c:foods/garlic', 'dumplings_delight:garlic_clove');
    neotech.add('c:plastics', ['pneumaticcraft:plastic', 'mekanism:hdpe_sheet']);
    neotech.add('c:doughs', ['refurbished_furniture:dough', 'farmersdelight:wheat_dough']);
    neotech.add('c:flours', ['pneumaticcraft:wheat_flour', 'refurbished_furniture:wheat_flour']);
    neotech.add('occultism:tools/knife', '#c:tools/knife');
    neotech.remove('c:foods/raw_calamari', 'rusticdelight:calamari_slice');
    neotech.add('rusticdelight:calamari_roll_ingredients', 'rusticdelight:calamari_slice');
    neotech.add('animal_pen:can_attack_pen', ['#c:tools/melee_weapon', '#c:tools/knife']);
    neotech.add('animal_pen:can_attack_aquarium', ['#c:tools/melee_weapon', '#c:tools/knife']);
    Ingredient.of('@chisel').itemIds.forEach(id => {
        if (id !== 'chisel:chisel') {
            const block = id.split(':')[1].split('/')[1];
            neotech.add(`chisel:${block}`, id);
        }
    });
});
ServerEvents.tags('worldgen/biome', neotech => {
    neotech.add('justdirethings:unstable_portal_fluid_viable', [
        "nullscape:crystal_peaks",
        "nullscape:shadowlands",
        "nullscape:void_barrens"
    ]);
});
