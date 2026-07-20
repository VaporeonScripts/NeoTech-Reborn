ItemEvents.modifyTooltips(neotech => {

    // ##### Gear #####

    //Mekasuit
    neotech.add(/mekanism:mekasuit_/, [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity')
    ])
    //Meka Tool
    neotech.add('mekanism:meka_tool', [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity!'),
        Text.green('Increased Attack Speed & Damage!')
    ])

    // ##### Generators #####

    //Solar Generator
    neotech.add('mekanismgenerators:solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Advanced Solar Generator
    neotech.add('mekanismgenerators:advanced_solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Wind Generator
    neotech.add('mekanismgenerators:wind_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Heat Generator
    neotech.add('mekanismgenerators:heat_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Gas Burning Generator
    neotech.add('mekanismgenerators:gas_burning_generator', [
        Text.red('Decreased Energy Production!'),
        Text.red('Increased Fuel Consumption!')
    ])
    //Fission Generator
    neotech.add(/mekanismgenerators:fission_/, [
        Text.red('Decreased Energy Production!'),
    ])
    //Fusion Generator
    neotech.add(/mekanismgenerators:fusion_/, [
        Text.red('Decreased Energy Production!'),
        Text.green('Decreased Fuel Consumption!'),
    ])
    //Turbine
    neotech.add(/mekanismgenerators:turbine_/, [
        Text.green('Increased Production Speed!'),
    ])
    //Boiler
    neotech.add(/mekanism:boiler_/, [
        Text.green('Increased Production Speed!'),
    ])

    // ##### Machines #####

    //Upgrades
    neotech.add(/mekanism:upgrade_/, [
        Text.green('Increased Machine Boost!')
    ])
    //Waste Barrel
    neotech.add('mekanism:radioactive_waste_barrel', [
        Text.green('Increased Decay Rate!')
    ])
    //Thermal Evaporation Tower
    neotech.add(/mekanism:thermal_evaporation_/, [
        Text.green('Increased Production Speed!')
    ])
    //Solar Neutron Activator
    neotech.add('mekanism:solar_neutron_activator', [
        Text.green('Increased Production Speed!'),
        Text.green('Waste -> Polonium buffed!')
    ])
    //Isotopic Centrifuge
    neotech.add('mekanism:isotopic_centrifuge', [
        Text.green('Waste -> Plutonium buffed!')
    ])
    //Electric Pump
    neotech.add('mekanism:electric_pump', [
        Text.green('Increased Production Speed!')
    ])
    //SPS
    neotech.add(/mekanism:sps_/, [
        Text.green('Decreased Energy Consumption!')
    ])
})
