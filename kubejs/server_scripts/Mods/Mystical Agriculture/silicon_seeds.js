ServerEvents.recipes(event => {
  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base"
    },
    ingredients: [
      {
        item: "mysticalagriculture:prudentium_essence"
      },
      {
        item: "ae2:silicon"
      },
      {
        item: "mysticalagriculture:prudentium_essence"
      },
      {
        item: "ae2:silicon"
      },
      {
        item: "mysticalagriculture:prudentium_essence"
      },
	  {
        item: "ae2:silicon"
      },
      {
        item: "mysticalagriculture:prudentium_essence"
      },
	  {
        item: "ae2:silicon"
      }
    ],
    result: {
      id: "mysticalagriculture:silicon_seeds"
    }
  })
})