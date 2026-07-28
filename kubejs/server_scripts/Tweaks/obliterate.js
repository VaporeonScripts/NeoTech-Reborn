const obliterateItems = [
    'tide:stone_fishing_rod',
'tide:iron_fishing_rod',
'tide:golden_fishing_rod',
'tide:crystal_fishing_rod',
'tide:diamond_fishing_rod',
'tide:netherite_fishing_rod',
'tide:echo_fishing_rod',
'tide:prismarine_fishing_rod',
'tide:sunflower_fishing_rod',
'tide:village_fishing_rod',
'tide:blazing_fishing_rod',
'tide:honeycomb_fishing_rod',
'tide:midas_fishing_rod'
]
const obliterateIngredients = obliterateItems.concat([
    'minecraft:enchanted_book[minecraft:stored_enchantments={"l2complements:invincible":1}]'
])
// Check if itemID exists within obliterateItems
function ObliterateCheck(itemID) {
    let check = false
    for (let i = 0; i < obliterateItems.length; i++) {
        let id = obliterateItems[i]
        let reg = new RegExp(id)
        if (typeof id == "string") { reg = new RegExp(`^${id}$`) }
        if (reg.test(itemID)) {
            check = true
            break
        }
    }
    return check
}
function isInvincibleBook(item) {
    if (item.id !== 'minecraft:enchanted_book') return false
        return item.getEnchantments().getLevel('l2complements:invincible') > 0
}
function hasInvincibleEnchant(item) {
    return item.getEnchantments().getLevel('l2complements:invincible') > 0
}
// Remove recipes
ServerEvents.recipes(event => {
    event.remove({ input: obliterateIngredients })
    event.remove({ output: obliterateIngredients })
})
// Remove tags
ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(obliterateItems)
})
// Append disabled tooltip
ItemEvents.modifyTooltips(event => {
    event.add(obliterateIngredients, Text.red('Disabled'))
})
// Remove from recipe viewer
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove(obliterateIngredients)
})
// Remove from loot pools
LootJS.lootTables(event => {
    event.modifyLootTables(/.*/).removeItem(obliterateItems)
    event.modifyLootTables(/.*/).removeItem(ItemFilter.hasStoredEnchantment('l2complements:invincible'))
})
// Destroy on interaction
BlockEvents.rightClicked(event => {
    let { block } = event
    if (ObliterateCheck(block.id)) { block.set('minecraft:air') }
})
// Destroy on block placement
BlockEvents.placed(event => {
    let { block } = event
    if (ObliterateCheck(block.id)) {
        block.set('minecraft:air')
    }
})
// Destroy on pickup
ItemEvents.canPickUp(event => {
    let { item, itemEntity } = event
    if(itemEntity.hasPickUpDelay()) return
        if (ObliterateCheck(item.id) || isInvincibleBook(item)) { item.setCount(0) }
})
// Destroy on drop
ItemEvents.dropped(event => {
    let { item } = event
    if (ObliterateCheck(item.id) || isInvincibleBook(item)) { item.setCount(0) }
})
// Destroy on inventory changed
PlayerEvents.inventoryChanged(event => {
    let { item, player } = event
    if (ObliterateCheck(item.id) || isInvincibleBook(item)) {
        player.inventory.clear(item);
    }
    if (hasInvincibleEnchant(item)) {
        item.getEnchantments().remove('l2complements:invincible')
    }
})
