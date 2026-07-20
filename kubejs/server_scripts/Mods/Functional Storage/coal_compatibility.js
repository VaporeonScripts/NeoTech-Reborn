ServerEvents.recipes(neotech => {
    function compacting(/** @type {$ItemStackKJS_} */LowerItem,/** @type {$ItemStackKJS_} */HigherItem) {
        neotech.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: HigherItem,
            lower_input: LowerItem
        })
    }
    compacting(Item.of("8x utilitarian:tiny_charcoal"), Item.of("minecraft:charcoal"))
    compacting(Item.of("8x utilitarian:tiny_coal"), Item.of("minecraft:coal"))
})
