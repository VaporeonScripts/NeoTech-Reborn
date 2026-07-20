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
        tag: "c:dusts/sulfur"
      },
      {
        item: "mysticalagriculture:prudentium_essence"
      },
      {
        tag: "c:dusts/sulfur"
      },
      {
        item: "mysticalagriculture:prudentium_essence"
      },
	  {
        tag: "c:dusts/sulfur"
      },
      {
        item: "mysticalagriculture:prudentium_essence"
      },
	  {
        tag: "c:dusts/sulfur"
      }
    ],
    result: {
      id: "mysticalagriculture:sulfur_seeds"
    }
  })
})