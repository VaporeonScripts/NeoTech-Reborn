let stewsAndSoups = [
    "biomeswevegone:allium_oddion_soup",
"biomeswevegone:white_puffball_stew",
"confluence:bowl_of_soup",
"confluence:grub_soup",
"divinerpg:advanced_mushroom_stew",
"divinerpg:chicken_dinner",
"ecologics:tropical_stew",
"eternal_starlight:bouldershroom_stew",
"eternal_starlight:pungency_stew",
"luminous_nether:golden_stew",
"pamhc2foodcore:stewitem",
"the_bumblezone:bee_soup",
"twilightforest:meef_stroganoff",
"undergarden:bloody_stew",
"undergarden:inky_stew",
"undergarden:indigo_stew",
"undergarden:slop_bowl",
"undergarden:veiled_stew"
];

ItemEvents.modification(event => {
    stewsAndSoups.forEach(id => {
        event.modify(id, item => {
            item.setMaxStackSize(16);
        });
    });
});
