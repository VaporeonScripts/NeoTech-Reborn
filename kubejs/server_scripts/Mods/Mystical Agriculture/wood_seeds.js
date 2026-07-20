ServerEvents.recipes(event => {
  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base"
    },
    ingredients: [
      {
        item: "mysticalagriculture:inferium_essence"
      },
      {
        tag: "minecraft:logs"
      },
      {
        item: "mysticalagriculture:inferium_essence"
      },
      {
        tag: "minecraft:logs"
      },
      {
        item: "mysticalagriculture:inferium_essence"
      },
	  {
        tag: "minecraft:logs"
      },
      {
        item: "mysticalagriculture:inferium_essence"
      },
	  {
        tag: "minecraft:logs"
      }
    ],
    result: {
      id: "mysticalagriculture:wood_seeds"
    }
  })
})