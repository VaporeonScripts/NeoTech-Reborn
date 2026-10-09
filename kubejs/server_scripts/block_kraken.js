EntityEvents.spawned(event => {
    const id = String(event.entity.type)
    if (id.startsWith('block_factorys_bosses:') && id.includes('kraken')) {
        event.cancel()
    }
})
