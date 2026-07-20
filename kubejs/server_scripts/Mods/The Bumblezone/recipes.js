ServerEvents.recipes(neotech => {
    neotech.remove({ id: 'the_bumblezone:carvable_wax/from_honeycomb' })
    neotech.shaped('the_bumblezone:carvable_wax', ['AAA', 'A A', 'AAA'], {
        A: 'productivebees:wax',
    })
})
