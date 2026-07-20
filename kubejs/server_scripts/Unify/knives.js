// priority: 999
ServerEvents.tags('item', e => {
    const knives = [
        'dungeonsdelight:zanite_knife',
        'dungeonsdelight:gravitite_knife',
        'dungeonsdelight:ironwood_knife',
        'dungeonsdelight:knightmetal_knife',
        'dungeonsdelight:steeleaf_knife',
        'dungeonsdelight:fiery_knife'
    ];

    e.add('c:tools/knives', knives);
    e.add('c:tools/knife', knives);

    [
        'refurbished_furniture:items',
        'refurbished_furniture:kitchen',
        'refurbished_furniture:outdoors',
        'refurbished_furniture:tools/knives'
    ].forEach(tag => e.add(tag, '#c:tools/knife'));
});
