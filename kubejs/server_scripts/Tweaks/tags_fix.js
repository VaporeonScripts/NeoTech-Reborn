ServerEvents.tags('block', event => {

    event.remove('c:ores/redstone', 'regions_unexplored:raw_redstone_block')
    event.remove('c:ores', 'regions_unexplored:raw_redstone_block')

});
