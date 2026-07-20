ServerEvents.recipes(neotech => {

    function changeInput(item, replacement){
        neotech.replaceInput(
            { mod: 'pneumaticcraft' },
            item, replacement
        )}

        neotech.remove({mod: 'pneumaticcraft', output: 'pneumaticcraft:amadron_tablet'})
        neotech.custom(
            {
                type: "pneumaticcraft:crafting_shaped_pressurizable",
                category: "misc",
                key: {
                    C: {
                        item: "pneumaticcraft:air_canister"
                    },
                    G: {
                        item: "pneumaticcraft:gps_tool"
                    },
                    P: {
                        tag: "c:plastics"
                    }
                },
                pattern: [
                    "PPP",
                    "PGP",
                    "PCP"
                ],
                result: {
                    count: 1,
                    id: "pneumaticcraft:amadron_tablet"
                }
            }
        )

        changeInput('pneumaticcraft:plastic', '#c:plastics')
})
