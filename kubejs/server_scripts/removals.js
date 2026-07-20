// priority: -1000
/** @type {Special.Item[]|{item: Special.Item, reason: string}[]} */
const globalItemRemovals = [
    'megacells:mega_interface',
'megacells:cable_mega_interface',
'megacells:mega_pattern_provider',
'megacells:cable_mega_pattern_provider',
'megacells:mega_crafting_accelerator',
'chisel:chisel',
'ae2:spatial_anchor',
'mekanism:upgrade_anchor',
'mekanism:dimensional_stabilizer',
'pneumaticcraft:chunkloader_upgrade'
];

ServerEvents.recipes(event => {
    /** @type {Special.RecipeId[]} */
    const id = [
        'appflux:inscriber/crush_diamond',
        'appflux:inscriber/crush_emerald',
        'modern_industrialization:electric_age/machine/assembler/replicator',
        'supplementaries:sus_gravel',
        'supplementaries:sus_sand',
        'mekanism:sawing/torch',
        'ars_elemental:soulbound_1',
        'occultism:miner/ores/aluminum_ore',
        'occultism:miner/eldritch/raw_aluminum',
        'occultism:miner/master/stellarite',
        'modern_industrialization:materials/uranium/blast_furnace/dust',
    ];

    /** @type {Special.Item[]} */
    const inputRemovals = [];

    id.forEach(id => {
        event.remove({ id: id });
    });

    inputRemovals.forEach(input => {
        event.remove({ input: input });
    });

    globalItemRemovals.forEach(output => {
        event.remove({ output: output });
    });
});

ServerEvents.generateData('after_mods', event => {

    /** @type {string[]} */
    const miscYeets = [];

    /** @type {Special.LootTable[]} */
    const lootTablesToYeet = [
        'animal_pen:grant_book_on_first_join',
    ];

    /** @type {Special.RecipeId[]} */
    const recipesToYeet = [
        'farmersdelight:integration/create/milling/wild_tomatoes',
        'farmersdelight:integration/create/milling/wild_rice',
        'farmersdelight:cutting/echo_door',
        'create:crushing/gloomslate_coal_ore',
        'create:cutting/echo_wood',
        'farmersdelight:integration/create/mixing/cabbage_slice_from_mixing',
        'farmersdelight:cutting/echo_log',
        'create:crushing/gloomslate_iron_ore',
        'create:cutting/stripped_echo_wood',
        'create:crushing/gloomslate_gold_ore',
        'create:crushing/gloomslate_emerald_ore',
        'farmersdelight:integration/create/milling/rice_panicle',
        'create:cutting/echo_log',
        'cataclysm_spellbooks:abyss_spell_book_old',
        'farmersdelight:integration/create/milling/wild_onions',
        'farmersdelight:cutting/echo_wood',
        'create:crushing/sculk_stone_iron_ore',
        'farmersdelight:integration/create/milling/wild_cabbages',
        'farmersdelight:integration/create/filling/chocolate_pie',
        'create:crushing/sculk_stone_emerald_ore',
        'create:crushing/sculk_stone_gold_ore',
        'farmersdelight:integration/create/milling/wild_potatoes',
        'farmersdelight:cutting/echo_trapdoor',
        'create:crushing/sculk_stone_copper_ore',
        'farmersdelight:integration/create/milling/wild_beetroots',
        'farmersdelight:integration/create/mixing/tomato_sauce_from_mixing',
        'farmersdelight:cutting/echo_sign',
        'moderately:vanishing',
        'create:crushing/gloomslate_redstone_ore',
        'create:crushing/gloomslate_diamond_ore',
        'farmersdelight:integration/create/mixing/pie_crust_from_mixing',
        'create:crushing/sculk_stone_diamond_ore',
        'twilightforest:jeed/poison',
        'create:crushing/sculk_stone_lapis_ore',
        'farmersdelight:integration/create/milling/wild_carrots',
        'supplementaries:integration/sconce_haunting',
        'create:crushing/gloomslate_copper_ore',
        'create:crushing/sculk_stone_redstone_ore',
        'create:crushing/gloomslate_lapis_ore',
        'farmersdelight:cutting/echo_hanging_sign',
        'create:crushing/sculk_stone_coal_ore',
        'create:cutting/stripped_echo_log'
    ];

    /** @type {string[]} */
    const advancementsToYeet = [
        'moredelight:main/get_mashed_potatoes',
        'moredelight:main/get_creamy_pasta_with_ham',
        'moredelight:main/get_cooked_rice_with',
    ];

    /**
     * @param {string} path - The path to the data.
     * @param {string} [type] - The type of data to be removed. If not provided, the path will be used as is.
     */
    const Yeet = (path, type) => event.json(`${ID.namespace(path)}:${type ? `${type}/` : ''}${ID.path(path)}`, { 'neoforge:conditions': [{ type: 'neoforge:false' }] });

    lootTablesToYeet.forEach(id => Yeet(id, 'loot_table'));
    recipesToYeet.forEach(id => Yeet(id, 'recipe'));
    advancementsToYeet.forEach(id => Yeet(id, 'advancement'));
    miscYeets.forEach(id => Yeet(id));
});
