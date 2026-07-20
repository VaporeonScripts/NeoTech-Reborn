ServerEvents.recipes(event => {
  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base"
    },
    ingredients: [
      {
        item: "mysticalagriculture:imperium_essence"
      },
      {
        item: "mekanism:ingot_osmium"
      },
      {
        item: "mysticalagriculture:imperium_essence"
      },
      {
        item: "mekanism:ingot_osmium"
      },
      {
        item: "mysticalagriculture:imperium_essence"
      },
	  {
        item: "mekanism:ingot_osmium"
      },
      {
        item: "mysticalagriculture:imperium_essence"
      },
	  {
        item: "mekanism:ingot_osmium"
      }
    ],
    result: {
      id: "mysticalagriculture:osmium_seeds"
    }
  })
})