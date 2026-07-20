ServerEvents.recipes(event => {
  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base"
    },
    ingredients: [
      { item: "mysticalagriculture:tertium_essence" },
      { item: "modern_industrialization:aluminum_ingot" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "modern_industrialization:aluminum_ingot" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "modern_industrialization:aluminum_ingot" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "modern_industrialization:aluminum_ingot" }
    ],
    result: {
      id: "mysticalagriculture:aluminum_seeds"
    }
  })

  event.custom({
    type: "mysticalagriculture:infusion",
    input: {
      item: "mysticalagriculture:prosperity_seed_base"
    },
    ingredients: [
      { item: "mysticalagriculture:tertium_essence" },
      { item: "moremekanismprocessing:aluminum_ingot" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "moremekanismprocessing:aluminum_ingot" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "moremekanismprocessing:aluminum_ingot" },
      { item: "mysticalagriculture:tertium_essence" },
      { item: "moremekanismprocessing:aluminum_ingot" }
    ],
    result: {
      id: "mysticalagriculture:aluminum_seeds"
    }
  })
})
