ServerEvents.recipes(neotech => {
    neotech.remove(
        [
            {
                id: 'immersiveengineering:crusher/coke_block'
            },
            {
                id: 'immersiveengineering:crusher/coke'
            },
            {
                id: 'immersiveengineering:crafting/coke_to_slab'
            }
        ]
    );

    neotech.custom(
        {
            "type": "immersiveengineering:crusher",
            "energy": 2400,
            "input": {
                "tag": "c:coal_coke"
            },
            "result": {
                "item": "modern_industrialization:coke_dust"
            }
        }
    );

    neotech.custom(
        {
            "type": "immersiveengineering:crusher",
            "energy": 4800,
            "input": {
                "tag": "c:storage_blocks/coal_coke"
            },
            "result": {
                "basePredicate": {
                    "item": "modern_industrialization:coke_dust"
                },
                "count": 9
            }
        }
    );
});

ServerEvents.tags('item', neotech => {
    neotech.add('c:dusts', 'immersiveengineering:dust_coke');
    neotech.add('almostunified:hide', ['immersiveengineering:coke', 'immersiveengineering:dust_coke']);
});

ServerEvents.tags('fluid', neotech => {
    neotech.add('c:crude_oil', 'modern_industrialization:crude_oil');
    neotech.add('c:fuels/crude_oil', 'modern_industrialization:crude_oil');
});
