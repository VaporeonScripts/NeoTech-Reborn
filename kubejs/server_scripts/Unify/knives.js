// priority: 999
ServerEvents.tags('item', e => {
    const knives = [
        'ae2:certus_quartz_cutting_knife',
        'ae2:nether_quartz_cutting_knife',
        'refurbished_furniture:knife'
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
