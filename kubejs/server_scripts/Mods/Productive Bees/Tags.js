ServerEvents.tags('item', event => {
    event.add('c:storage_blocks/niter', '#c:storage_blocks/saltpeter')
    event.add('c:dusts/niter', '#c:dusts/saltpeter')
    event.add('megacells:compression_overrides', 'productivebees:obsidian_shard')
})
ServerEvents.tags('block', event => {
    event.add('c:storage_blocks/niter', '#c:storage_blocks/saltpeter')
})
