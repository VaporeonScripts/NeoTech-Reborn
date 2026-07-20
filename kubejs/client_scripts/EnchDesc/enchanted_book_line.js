ItemEvents.modifyTooltips(event => {
    const ENCHANTED_BOOK = Ingredient.of('minecraft:enchanted_book');

    event.modify(ENCHANTED_BOOK, item => {
        item.removeLine(1);
    });
});
