ServerEvents.recipes(neotech => {
    neotech.remove({id: 'forbidden_arcanus:smelting/dark_matter'})
    neotech.smelting('forbidden_arcanus:dark_matter', 'forbidden_arcanus:edelwood_log')
})
