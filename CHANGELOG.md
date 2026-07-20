# NeoTech Reborn Changelog

## NeoTech Reborn 1.4.1.0.zip — 2026-07-20

NeoTech Reborn | 1.4.1.0 Changelog (Released)
Massive overhaul: dozens of new mobs (sharks, squids, deep-sea fish, orcas, and more) and new ocean biomes (coral reefs, trenches, sulfuric caves, tide pools)
Added

LootJS: KubeJS Addon

Removed

Complementary Structures (it looks like structures from this mod don't spawn at all, even when located)

Changes

Config Changes and Cleanup
Improved the server MOTD with a more vibrant color scheme
Added a "Filter: Tracked" option to the dropdown menu, to display currently tracked advancements (thanks to Niix)
The progress bar is now dynamic: when searching or filtering within a section, it updates to show progress only for the matching advancements (thanks to Niix)
Tracked advancements are now saved, so they're no longer lost on reload (thanks to Niix)
Added support for filtering by multiple mods at once in the Advancements screen's search bar (thanks to Niix)
Added support for remembering the search query in the Advancements screen across menu reopens (thanks to Niix)
Removed all of Tide's fishing rods, since Starcatcher already covers that niche and newer Starcatcher versions were conflicting with them, causing crashes
Disabled tide's "useThirdPartyMinigames" option due to crashes when using some rods
Re-adjusted Chloride config options
Removed unused FancyMenu layout config for FTB Backups

Notable Fixes

(!) Fixes included in Mod Updates
Fixed a crash that would happen when you fished with non-starcatcher rods
Fixed see-through UI elements after updating to the Accelerated Rendering Mesh update
Fixed crash when picking up Lucy's Axe from Confluence
Fixed numerous compatibility and world generation issues (including configs being ignored) with various biome/dimension mods
Fixed the Advancements screen missing 1 pixel on the right/bottom edges (thanks to Niix)
Fixed some memory leaks

Updated

(!) All mods that could be updated have been updated.
Updated Resource Packs
Updated NeoForge version from 21.1.235 -> 21.1.236

Current NeoForge Version

21.1.236

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.4.0.0.zip — 2026-07-13

NeoTech Reborn | 1.4.0.0 Changelog (Released)
Nether and End Overhaul update + diverse lag source fixes: tons of additions, including mobs, biomes, tweaks, many new materials, etc. World reset is recommended!
Added

Ars Unification
BetterNether (NeoForge)
BetterEnd (NeoForge)
Unusual End
Mod Name Tooltip (got re-added because the Tooltip Overhaul version of it didn't work properly)
Epic Structures: Jungle Temples
Put A Plug In it!

Removed

Ferdinand's Flowers (those flowers just flooded the world, possibly causing lag, weren't really cool to see, and disabled downloading from the public API, making it a lot slower for Kinetic Hosting to update the modpack)
Yeetus Experimentus (this mod's features are included in Blueprint)

Changes

Config Changes and Cleanup
Finally updated to Sodium 0.8.12 (their latest update), expect tons of performance improvements and fixes
Adjusted some configs values related to Kerria and More Culling
Changed Tooltip Overhaul's Inner Frame Corner to "gem"
Re-enabled Tooltip Overhaul's custom tooltip appearance animation
Completely disabled the Bone Serpent and Wither Bone Serpent (Terra Entity) from spawning, as they were too OP
Limited Wisp's max spawn count due to it spawning in massive amounts
Reduced MonsterPlus mob spawn rates (they were spawning too often), disabled the Ancient Hero's natural spawn, and moved its ancient broken sword drop to the crystal zombie instead
Reduced pixie village's spawn chance (it was too frequent)
Disabled multiple book loot tables, since those books are now included in the Eccentric Tome (inspired by ll8)
Added most, if not all, guides/manuals/books to the Eccentric Tome (received when first joining the world/server)
Removed the Aether guide book from being given on first entering the dimension
Changed the Eccentric Tome recipe to include all of the modpack's books, allowing it to be recreated if lost for any reason (e.g. a lost grave)
Blacklisted some GUIs to stop sort buttons from overlapping (IPN)
Fixed memory leak issues and optimized memory usage
Lowered player and villager snore chances and volumes
Prevented Fish of Thieves "Simple spawning condition" datapack from being automatically loaded
Replaced Clean Tooltips' durability showing with Cleaner Tooltips' one for better consistency
Reduced Pack file size

Notable Fixes

(!) Fixes included in Mod Updates
Fixed some texture rendering issues related to Supplementaries
Fixed clicking through the total advancement number (thanks to Niix)
Fixed an incompatibility between Lucid Advancements and Tooltip Overhaul causing the tooltip to appear twice in different positions, with one misplaced (thanks to Niix)
Fixed a rendering issue triggered by searching "Chest" or "Backpack"
Fixed the Expanded Delight root advancement showing raw translation keys instead of proper text

Updated

(!) All mods that could be updated have been updated.

Current NeoForge Version

21.1.235

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.9.0.zip — 2026-07-06

NeoTech Reborn | 1.3.9.0 Changelog (Released)
Mod cleanup, along critical fixes and adjustments
Added

Nothing added

Removed

AzureLib (not required anymore)
Mod Name Tooltip (this mod's feature is included in Tooltip Overhaul)

Changes

Config Changes and Cleanup
Tooltips now have a cool animation when hovering over an item (disabled in this update due to a small issue with LA)
Finally updated Accelerated Rendering, expect many performance improvements
Updated the modpack's java args
The Advancements screen now has a filter for partial progress, so you can quickly see what you're close to finishing (thanks to Niix)
The Advancements screen now shows an "X/Y completed" counter for each category in the sidebar (thanks to Niix)

Notable Fixes

(!) Fixes included in Mod Updates
Fixed a crash that could happen when opening chests
Fixed different crashes related to Prefab

Updated

(!) All mods that could be updated have been updated.
Updated Resource Packs
Updated Data Packs
Updated NeoForge version from 21.1.234 -> 21.1.235

Current NeoForge Version

21.1.235

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.8.0.zip — 2026-07-02

NeoTech Reborn | 1.3.8.0 Changelog (Released)
Buggy mods removal, startup time optimization, and some other changes (preparing for 1.4.0.0)
Added

LightSpeedRe

Removed

Living Things (most of the animals it added were already covered by other mob/animal mods in the pack)
Elytra Trims (Causes resource reload to fail)
Elytra Trims Extensions
Alex's Caves (removed due to the large number of bugs and issues it caused; a world reset is recommended but not required)
Citadel

Changes

Config Changes and Cleanup
Loading times are now a bit faster overall, except for the very first install and initial boot of the pack
Unbound some Coordinates Display's keybinds

Notable Fixes

(!) Fixes included in Mod Updates
Fixed an error triggered by manually reloading or adding resource packs.

Updated

(!) All mods that could be updated have been updated.
Updated Data Packs
Updated Shader Packs

Current NeoForge Version

21.1.234

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.7.0.zip — 2026-06-30

NeoTech Reborn | 1.3.7.0 Changelog (Released)
Enhanced performance, fixes and improved Excalibur compat, along some adjustments
Added

ByePregen
Excalibur Quark Support
Storage No Poof
Apothic Category Compat

Removed

Clickable advancements (it's now part of Lucid Advancements)
Elytra Slot (not really useful since there are other ways to equip elytras/have the elytra effect)
Fallen Gems & Affixes (had some issues like codenames, etc., and the mod won't be updated to 1.21.1 anytime soon, not worth keeping)
Additional Attributes (no longer required, and its attributes were displaying internal codenames instead of proper names)

Changes

Config Changes and Cleanup
Updated Kinetic Hosting banner, since promocodes aren't a thing anymore
Adjusted the modpack's Official CurseForge page description
Disabled GEO's hotkey (fixes overlap with Bomber's enchantment)
Disabled the Elytra Trims custom 3D model (it caused the Elytra item to appear invisible in EMI)
Disabled Enchantment Insights' maximum level display (incompatible with Apothic Enchanting's new max levels)
Items inside containers from removed mods are now preserved and recoverable
Added weapon categorization coverage for items Apotheosis misses
Changed the hosting message in the pause screen from "Host a Server" -> "Rent a Server"

Notable Fixes

(!) Fixes included in Mod Updates
Fixed advancements appearing twice in chat
Fixed world generation causing MSPT spikes and server freezes
Fixed Elytra being invisible in EMI

Updated

(!) All mods that could be updated have been updated.
Updated Resource Packs

Current NeoForge Version

21.1.234

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.6.0.zip — 2026-06-29

NeoTech Reborn | 1.3.6.0 Changelog (Released)
Optimization focused update, along many bug fixes and adjustments
Added

Polymorph Plus
Twilight Lootr
Calm The Leaks (CTL)
Extra Special Core (required by CTL)
Deeper and Darker: Spellbooks
Optimized Block Entities

Removed

Polymorph (replaced by Polymorph Plus)
AE2 JEI Integration (not required since EMI exists)
FTB JEI Extras (same thing as AE2J)
Cataclysm: Spellbooks (caused massive log spam, has some issues and the github page is archived, might get re-added once the mod returns active)

Changes

Config Changes and Cleanup
A unique Twilight Lootr chest now spawns after every boss kill
Removed Quark's and Ascended Quark's chest and furnace recipes in favor of better ones
Improved the Wart dupe fix script
Added Quark, Ascended Quark, and Aether chests to HMI's modRenderExclusions (they were invisible)
Re-added the script that removes the redundant line from enchanted book tooltips

Notable Fixes

(!) Fixes included in Mod Updates
Fixed some chests being invisible when held in the mainhand
Fixed massive log spam caused by Cataclysm: Spellbooks

Updated

(!) All mods that could be updated have been updated.

Current NeoForge Version

21.1.234

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.5.0.zip — 2026-06-27

NeoTech Reborn | 1.3.5.0 Changelog (Released)
Bug fix focused update, along many adjustments and compat improvements
Added

Glowing Emissive Ores Definitive Edition
Excalibur | Farmer's Delight Support

Removed

Glowing Emissive Ores (RP)
Glowing Emissive Ores - Fusion (RP)
Substrate (caused the bedrock floor to look broken from below, in the void) (this mod also got archived, so it can't get fixed)
YUNG's Better Caves (caused crashes and chunk loading failures)

Changes

Config Changes and Cleanup
Disabled Ascended Quark's Vertical Slabs
Switched the 2 GEO Resource Packs to the mod version, which only loads the required assets for the pack, drastically improving load times
Enchanted Books show which items they can be applied to
Maps display in the tooltip
Removed NeoEnchant+ enchantment descriptions from the script (they are now included in Enchantment Insights)
Changed EnchDesc.lang.js to contain only .desc translations (EnchDesc.js was removed)

Notable Fixes

(!) Fixes included in Mod Updates
Fixed nether wart block crafting recipe causing a dupe exploit
Fixed Mushroom Fields enderman not spawning

Updated

(!) All mods that could be updated have been updated.

Current NeoForge Version

21.1.234

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.4.0.zip — 2026-06-25

NeoTech Reborn | 1.3.4.0 Changelog (Released)
Useless performance mods removed, compatibility enhancements, new structures
Added

DarkTimer
Moog's Mineshafts Reimagined
Ascended Quark

Removed

ItemClearLag (caused crashes, replaced by DarkTimer)
Redirected (badly coded mod, could cause issues in modpacks)
FastEvent (the mod doesn't literally do anything on NeoForge 1.21.1)

Changes

Config Changes and Cleanup
Disabled Quark's usage ticker
Improved compatibility between "Aether" and "Quark" mods
New cool Mineshafts variants got added

Notable Fixes

(!) Fixes included in Mod Updates

Updated

(!) All mods that could be updated have been updated.
Updated Resource Packs
Updated Shader Packs

Current NeoForge Version

21.1.234

(!) = A change included in every update.


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.3.0.zip — 2026-06-24

NeoTech Reborn | 1.3.3.0 Changelog (Released)
Multiple config changes, along some fixes
Added

Loot Journal: Pickup Notifier
Fragmentum

Removed

Loot Log (replaced by Loot Journal) (this mod is not available on curseforge anymore)

Changes

Config Changes and Cleanup
Made Confluence's Blood Moon event rarer
Disabled Confluence's custom food overlay (it was causing different saturation overlays to overlap)
Re-enabled "showFoodValuesHudOverlay" (appleskin)
Disabled the sort button in the Sophisticated Backpacks screen (IPN)
Double trapdoors can no longer be opened together
Disabled ModernUI hotkey (not required for the regular player)

Notable Fixes

(!) Fixes included in Mod Updates
Fixed saturation bar overlap
Fixed Iron's Jewelry rings having buggy textures when picked up

Updated

(!) All mods that could be updated have been updated.

Current NeoForge Version

21.1.234

(!) = A change included in every update.
Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.2.0hf.zip — 2026-06-23

just an hotfix updating Lucid Advancements to fix a visual issue and improve performance while in the advancements screen. Use the same server pack as NeoTech Reborn 1.3.2.0

---

## NeoTech Reborn 1.3.2.0.zip — 2026-06-23

NeoTech Reborn | 1.3.2.0 Changelog (Released)
New building blocks + tons of changes, new advancements screen, improved server performance
Added

Macaw's Regions Unexplored
Macaw's Quark
Lucid Advancements

Removed

Better Advancements (replaced by Lucid Advancements)

Changes

Config Changes and Cleanup
Added NetProDis to the server side
The Starcatcher minigame will be used instead of the Tide minigame
Changed "cloudBlockPrecipitationDistance" (twilight forest) back to 32 (it was set to 0 because of an old crash that is now fixed)
Added compatibility between Macaw's Mods (Bridges, Fences, Roofs) and Regions Unexplored and Quark
Re-Enabled Coordinates in the hotbar and removed the hotkey to disable them (missclicked a key and disabled them lol)
Limited Sand Snapper spawns via InControl config (this mob kept spawning in large quantities causing massive lag)
Actually disabled Bosses'Rise combat roll (silly me was editing the old config)
Updated server JVM arguments for improved performance and reduced lag spikes during heavy gameplay
Blacklisted a ton of GUIs to stop sort buttons from overlapping (IPN)
Added Confluence's Alchemy table to HMI's blacklist (caused the item to have a buggy texture when held)
The advancements screen now looks clean, modern and alot better
Enabled Naturalist structures in CompatStructures config
Disabled movement while certain GUIs are open

Notable Fixes

(!) Fixes included in Mod Updates
Fixed massive lag caused by excessive number of Sand Snappers
Fixed Server Pack not working

Updated

(!) All mods that could be updated have been updated.
Updated Resource Packs
Updated NeoForge version from 21.1.233 -> 21.1.234

Current NeoForge Version

21.1.234

(!) = A change included in every update.
Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.1.1.zip — 2026-06-21

NeoTech Reborn | 1.3.1.1 Changelog (Released)
Small patch balancing multiple things
Added

Nothing new

Removed

Item Obliterator (not needed anymore)
Necronomicon API

Changes

Config Changes and Cleanup
Changed the pack changelog format
Updated SoL: Carrot config
Disabled own potion particles via Particle Core config
Nerfed the "Dashing" Enchantment from EE (max lvl changed from 10 -> 7)
Disabled Bosses' Rise combat roll in favor of the re-enabled Shield of Cthulhu and Tabi for dashing

Notable Fixes

Fixed a missing mod in the server mods folder
(!) Fixes included in Mod Updates

Updated

(!) All mods that could be updated have been updated.

Current NeoForge Version

21.1.233

(!) = A change included in every update.
Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.3.1.0.zip — 2026-06-20

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.3.1.0 Changelog (Released)
‎ 
Summary
tons (60+!!!) of new structures made by diff mods blocks/mobs, tons of tweaks (quark), new mobs and general config changes
‎ 
Added
- Open Together
- Quark
- Zeta
- Integrated API
- Integrated Dungeons and Structures
- Integrated Stronghold
‎ 
Removed
- Open Sesame (replaced by Open Together)
- EMI Loot (this caused massive log spam and prevented the user from joining a newly created world)
- YUNG's Better Strongholds (replaced by Integrated Stronghold)
- YUNG's Better End Island (personally, i prefer the normal island + one of the features of this mod is already covered by MDE)
- Repurposed Structures - Better Strongholds Compat (not required anymore)
- YUNG's Better Desert Temples (replaced by IDAS Desert Temple)
- Repurposed Structures - Better Desert Temples Compat (not required anymore)
‎ 
Changes
- Config Changes and Cleanup
- Removed LTAB Luck enchant description from the script (it's now included by default)
- Updated Apotheosis enchantments config file to fix wrong levels for some enchantments (Outreach, Cubic Mining, Grow, Light, Solid, Multi Boomerang, Swift Lash, Fire Wall, Aerodynamism, Wanderer)
- Added many new, highly detailed structures to world generation
- Supported animals now feature varied textures
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed wrong discount percentage displayed in the Kinetic Panel (multiplayer screen)
- Fixed a native crash on exit on certain AMD drivers
- Fixed an issue where the camera would snap unexpectedly when closing certain GUIs
- Fixed "Failed to load chunk" error/crash caused by Quark's Fairy Ring generator
- Fixed the "c:gems/peridot" tag being empty (changed a kjs script)
- Fixed "bomber" enchant description
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
‎ 
Current NeoForge Version
- 21.1.233
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.3.0.0.zip — 2026-06-13

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.3.0.0 Changelog (Released)
‎ 
Summary
Performance focused update, includes texture related optimizations and ram usage improvements
‎ 
Added
- 
‎ 
Removed
- Quality Food (caused a crash on startup, might get re-added if it gets fixed)
‎ 
Changes
- Config Changes and Cleanup
- Added ModernFix back to the server folder, it was missing for some reason
- Updated KJS scripts
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Shader Packs
- Updated Resource Packs
‎ 
Current NeoForge Version
- 21.1.233
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.9.0.zip — 2026-06-05

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.9.0 Changelog (Released)
‎ 
Summary
General update, some new mods, performance improvements, improved compatibility between mods
‎ 
Added
- Kinetic Hosting Integration
- Naturalist
- Starcatcher's Delight
- Polymorphic Occultism
- MVSI - Moog's Voyager Structures Integrated
‎ 
Removed
- Koopa's Critters (replaced by Naturalist)
‎ 
Changes
- Config Changes and Cleanup
- Added a clickable Kinetic Hosting affiliate banner to the multiplayer server list
- Moog's Voyager structures now use Supplementaries and Amendments blocks automatically
- Removed EE enchants descriptions from the script since they're now included in the mod itself
- Removed EE gamerule from the gamerules.js script since now its disabled by default


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Finally fixed stutters caused by EE
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
‎ 
Current NeoForge Version
- 21.1.233
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.8.0.zip — 2026-06-02

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.8.0 Changelog (Released)
‎ 
Summary
Massive update


‎ 
Added
- Elytra Trims Extensions
- Delight Lib (now required by More Delight)
- Shield Mechanics
- Excalibur | Sophisticated Support
- Excalibur | Ocean's Delight Support
- Excalibur | L_Ender 's Cataclysm
- Compact F3 Plus
- Enchantment Insights
- Apothic Tooltip Cleanup
‎ 
Removed
- Galosphere (caused issues with world gen and with apotheosis spawners) (will get re-added once fixed)
- Explosive Enhancement: Reforged (not really needed)
- Passive Shield (replaced by Shield Mechanics)
- Collective (not needed since PS got removed)
- Athena (embedded version is present)
- Suren's Sophisticated Storage (replaced by ESS)
- Better Sophisticated Backpack Upgrades (replaced by ESS)
- Fresh Waystones Texture (forgot to remove it, replaced by EWS)
- Krypton Reno (currently causes server issues)
- More Villagers: Missing Buildings (depends on a version that doesn't exist)
- Improved Village Placement (villages were almost non-existent)
- RarityCore (buggy in multiple aspects, such as showing an uncommon rarity border on the cursor in certain scenarios)
‎ 
Changes
- Config Changes and Cleanup
- Changed Puffish Skills luck attribute's icon (old one was from a removed mod, which caused problems)
- Many new structures from Farmers Structures mod got added!
- Adjusted enchantments level's cap
- Adjusted Mod Tab's layout positions
- Tweaked PacketFixer config to prevent possible issues
- Removed some enchant descs from the kjs script (they are included in the source mod)
- From now on, the modpack will follow semantic versioning
- The F3 Menu has been replaced with a better, less-bloated interface
- Modified the Enchant Descriptions kjs script to only show missing descriptions from NeoEnchant+ (as a workaround)
- Apotheosis tooltips have been cleaned up and made more compact, improving readability while keeping full configurability
- Changed Stylish Effects GUI scale to 3.0 (fixes a small issue with Mandala's GUI - Add-Ons)
- Added ChangeLegendaryToolsColor (false) to gamerules.js (temp-fix for constant stutters)


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed the enchanted tool FPS drop issue caused by Enhanced Enchanting
- Fixed the situation where the player would stay in the void (semi-softlock) for several seconds right after generating the world
- Fixed Curse Enchantments causing the whole tooltip to flicker in certain situations (damn you, ImmersiveUI!)
- Fixed NeoEnchant+ enchants not having a description when using Enchantment Insights
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
- Updated NeoForge Version from 21.1.228 -> 21.1.233
‎ 
Current NeoForge Version
- 21.1.233
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.7.3.zip — 2026-04-27

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.7.3 Changelog (Released)
‎ 
Summary
Performance focused update, also many mod replacements/removals, and changes
‎ 
Added
- Async Logger
- Kerria
- Iron's Lib
- Loot Integrations: Valhelsia Structures
- Epic Structures: Igloo
- Simple Backups
- ItemClearLag
- StructureOverlapless
‎ 
Removed
- Iron's Patreon Lib (integrated in Iron's Lib)
- FTB Backups 3 (replaced by Simple Backups)
- Nameless Trinkets (there are enough trinkets/curios/artifacts in the pack, also this mod causes overhead when checking curio slots)
- DarkQuesting (not needed, could provide op stuff during early gameplay's (such as shulker boxes or netherite armor))
- DarkTimer (replaced by ItemClearLag)
- No Structure Overlap (replaced by StructureOverlapless (better implementation)) 
‎ 
Changes
- Config Changes and Cleanup
- Loggers are now asynchronous, improving performance
- Texture animations have been optimized for better performance
- Changed Damage Indicator's mod source's size


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
- Updated NeoForge Version from 21.1.224 -> 21.1.228
‎ 
Current NeoForge Version
- 21.1.228
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.7.2.zip — 2026-04-07

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.7.2 Changelog (Released)
‎ 
Summary
New dungeons got added, along improved compat between Excalibur and pack's mods
‎ 
Added
- Epic Structures: Dungeons
- You're in Grave Danger x Excalibur
- Tag Localizations (Now separated from Tag Fixes)
‎ 
Removed
- Fantastic Deepslate Dungeons
‎ 
Changes
- Config Changes and Cleanup
- The “drowning bubbles” are now more transparent and obstruct less vision, with fewer bubbles appearing overall.
- Disabled Eccentric Tome in ModTabs config due to it being currently buggy


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated NeoForge version from 21.1.222 -> 21.1.224
‎ 
Current NeoForge Version
- 21.1.224
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.7.1.zip — 2026-04-02

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.7.1 Changelog (Released)
‎ 
Summary
Many mod changes, improved compat between mods, new rarity colors, bug fixes etc
‎ 
Added
- Loot Log: Pickup Notifier
- RarityCore
‎ 
Removed
- (Bee's) Fancy Crops (doesn't fit the pack style)
- Pick Up Notifier (replaced by Loot Log: Pickup Notifier)
‎ 
Changes
- Config Changes and Cleanup
- 35 new paintings got added
- Disabled April Fools stuff in mod configs
- Most items now have their own rarity color
- Disabled Immersive UI's VanillaSlotHighlighting (incompat with Rarity Core)
- Re-enabled GUI Item Batching (Accelerated Rendering)
- Disabled the SubtleEffects spawnEggUseParticles configuration to prevent a crash.
- Re-Retro Damage Indicators will now show from which mod the shown mob comes from


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed a crash when using Spawn Eggs
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
- Updated NeoForge Version from 21.1.221 -> 21.1.222
‎ 
Current NeoForge Version
- 21.1.222
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.7.0.zip — 2026-03-27

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.7.0 Changelog (Released)
‎ 
Summary
Tons of new enchantments have been added, along with some important fixes that could've made gameplay really unbalanced.
‎ 
Added
- Enhanced Enchanting & Enchantments
- Simply Swords x Excalibur
- Simply More x Excalibur
- Iron's Patreon Library (Now required by Iron's mods)
‎ 
Removed
- Enchantments Encore (modrinth ahh mod, dropped support for 1.21.1 many months ago)
‎ 
Changes
- Config Changes and Cleanup
- Made developer weapons from Confluence impossible to obtain from RandomOre blocks
- Fully adjusted/reworked and added missing descriptions for the Enhanced Enchanting mod
- Reduced pack file size
- Changed Enchantments max level (25% more than base given from Apothic Enchanting) (Only Enhanced Enchanting's enchantments were affected)


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated NeoForge version from 21.1.220 -> 21.1.221
‎ 
Current NeoForge Version
- 21.1.221
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.9.zip — 2026-03-21

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.6.9 Changelog (Released)
‎ 
Summary
Bug-Fix focused update, contains updates
‎ 
Added
- Compat API (Now required by Compat Structures)
- Gensokyo Delight ~ Youkais' Feasts
- Fantastic Deepslate Dungeons
‎ 
Removed
- Create: Enchantable Machinery (crashing issues, will get re-added once fixed)
- Gensokyo Delight ~ Youkai's Homecoming (1.21.1 version got removed)
- Fancy Beds (caused issues with bed rendering, also excalibur's beds fit better the pack's style)
- Better Beds (caused issues with Fast Beds option from Chloride)
- Adventure Dungeons (don't like how they are structured) (replaced by Fantastic Deepslate Dungeons)
- Loot Integrations: Adventure Dungeons
‎ 
Changes
- Config Changes and Cleanup
- Many new structures got added
- Disabled Chloride's Fast Beds option due to Bed Rendering issues
- Removed minecraft beds, comforts sleeping bags and torchflower from HoldMyItems whitelist (their models are now shown properly)
- Removed WWOO from the server side's mods folder


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed a bug that caused placing the Enchantment Library to render transparent blocks, allowing players to see through them
- Fixed buggy bed's models
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
‎ 
Current NeoForge Version
- 21.1.220
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.8.zip — 2026-03-16

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.6.8 Changelog (Released)
‎ 
Summary
Mod updates and bug fixes
‎ 
Added
\- Excalibur | Ice and Fire | Tabla's Dragon Retextures
‎ 
Removed
\- Regions Unexplored: Expansion (not compatible with newer versions of RU)
‎ 
Changes
\- Config Changes and Cleanup
\- Changed Crash Assistant's theme to "FlatDarculaLaf"


‎ 
Notable Fixes
\- (!) Fixes included in Mod Updates
\- Fixed Modded Way Signs having a buggy texture
‎ 
Updated
\- (!) All mods that could be updated have been updated.
\- Updated Resource Packs
\- Updated Shader Packs
\- Updated NeoForge version from 21.1.219 -> 21.1.220
‎ 
Current NeoForge Version
\- 21.1.220
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.7.zip — 2026-03-05

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.6.7 Changelog (Released)
‎ 
Summary
Just a bump update along some adjustments and bug fixes included in mod updates
‎ 
Added
- Simply Tooltips (now required by Simply Swords)
- Excalibur | My nether's Delight Support
‎ 
Removed
- 
‎ 
Changes
- Config Changes and Cleanup
- Adjusted ESM button position


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
‎ 
Current NeoForge Version
- 21.1.219
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.6.zip — 2026-02-25

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.6.6 Changelog (Released)
‎ 
Summary
Bug fix and performance focused update
‎ 
Added
- Smooth Movement
- Ancient Iron
- Load My F***ing Tags
- Tag Localization Fixes
‎ 
Removed
- 
‎ 
Changes
- Config Changes and Cleanup


‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
‎ 
Current NeoForge Version
- 21.1.219
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.5.zip — 2026-02-16

⁨⁨⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.6.5 Changelog (Released)
‎ 
Summary
Bug-fix focused update, with some improvements and a new mod
‎ 
Added
- Mandalas GUI-KOTS Compat
- Wildex Bestiary
- Re-Retro Damage Indicators
‎ 
Removed
- Simple Loot Viewer (EMI Loot is better)
- Health Bars (replaced by Re-Retro Damage Indicators)
‎ 
Changes
- Config Changes and Cleanup
- Confluence own's Advancements button is now hidden via FancyMenu
- Disabled DivineRPG's Tooltip modifications, since it showed harvest level as "coal" on any too
- Enabled Cleaner Tooltips new option "display mining speed"
- Added the Wildex book to the First_Join Eccentric Tome
- Enabled "Fast Beds" option in Chloride
- Added "[Let's Do] Meadow" mod's beds id's to the Hold My Items blacklist (due to buggy models)
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed beds being invisible
- Fixed buggy slime texture when hovering over them
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
‎ 
Current NeoForge Version
- 21.1.219
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.4.zip — 2026-02-02

⁨⁨⁨⁨⁨⁨⁨NeoTech Reborn | 1.2.6.4 Changelog (Released)
‎ 
Summary
Bug fixes and compatibility focused update, also contains performance improvements
‎ 
Added
- Smart Particles
‎ 
Removed
- Cardiac (Excessive particle effects when killing high-health mobs, leading to performance lag)
- Excalibur | Warrior Rage Support (Now included in Excalibur | Additions: Minor Mods Support)
‎ 
Changes
- Config Changes and Cleanup
- Adjusted Enchantment Levels
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed Hybrid Aquatic crabs being in the wrong offset in the GUI Health Bar
- Fixed some attributes showing incorrectly
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
‎ 
Current NeoForge Version
- 21.1.219
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.3.zip — 2026-01-28

NeoTech Reborn | 1.2.6.3 Changelog (Released)
‎ 
Summary


‎ 
Added
- Alex's Caves (Unofficial Port)
- Citadel (Unofficial Port)
- BiomeSpy
‎ 
Removed
- Structure Essentials (replaced by BiomeSpy)
‎ 
Changes
- Config Changes and Cleanup
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed NeoForge EarlyLoadingScreen not appearing
- Fixed Tooltip Overhaul not working on EMI
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated NeoForge version from 21.1.218 -> 21.1.219
‎ 
Current NeoForge Version
- 21.1.219
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.2HF.zip — 2026-01-12

NeoTech Reborn | 1.2.6.2 Changelog (Released)
‎ 
Summary
Fish-focused update, contains bug fixes and many improvements. Also includes some mod cleanup for future additions
‎ 
Added
- Biolith
‎ 
Removed
- Feature Recycler (caused issues with Biolith. That mod does the same thing as FR)
- Vampire's Delight
- Vampiric Ageing - A Vampirism Addon
- Vampires Need Umbrellas
- Vampirism Integrations
- Vampirism! (doesn't fit the pack style anymore)
- Bloodlines - A Vampirism Addon
- Werewolves - Become a Beast!
‎ 
Changes
- Config Changes and Cleanup
- Downgraded LWJGL from 3.3.6 -> 3.3.3 to prevent issues
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated NeoForge version from 21.1.217 -> 21.1.218
‎ 
Current NeoForge Version
- 21.1.218
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.1.zip — 2026-01-06

NeoTech Reborn | 1.2.6.1 Changelog (Released)
‎ 
Summary
Massive content update, tons of mod changes, significant performance improvements and bug fixes
‎ 
Added
- Villager API (Needed for MV: RE)
- BetterBlockZ
- Better Library
- Loot Integrations: ATi Structures, Epic Structures Villages & Witch Huts
- Loot Integrations: Born in Chaos
- Loot Integrations: Underground Villages, Stoneholm
- Excalibur | Hold My Items Support
- Excalibur | Better Archeology Support
- Excalibur | Oh The Biomes We've Gone Support
- Excalibur | Additions: Minor Mods Support
- Non-Directional Damage Tilt Fix
- Re:Animal
- Configured Defaults
- More Relics
- Nether Trials & Chambers
- Cleaner Tooltips
- Simply Swords: Cataclysm
‎ 
Removed
- Mowzie's Mobs (crashing issues)
- GTBC's Geomancy Plus - Iron's Spells Addon (MM got removed)
- Xtones Reworked (newer port got added)
- DefaultSettings
- JCPlugin
- Legendary Tooltips (useless since Tooltip Overhaul got added. Also, the damage value feature is now included in Cleaner Tooltips)
- Item Borders (not really needed)
- Iceberg (not needed anymore)
- Prism (not needed anymore)
- Hackers 'n Slashers (temporarily removed due to it not working on the server side) (will get re-added once fixed)
‎ 
Changes
- Config Changes and Cleanup
- Disabled Hacker 'n Slashers crosshair due to issues
- Adjusted/Cleaned up KubeJS scripts
- Updated Enchantment descriptions
- User options, keybinds, server list (servers.dat), and ESM configs are now properly preserved across modpack updates
- Disabled the "firefly" particle effect from the "Particular" mod because SubtleEffects already provides it
- Cataclysm bosses can no longer destroy graves
- Disabled durability information from the “Clean Tooltips” mod
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed a crash when searching in the creative inventory
- Fixed EMI crashing when joining a server/world
- Fixed Cursed Enchantments descriptions making the tooltip flicker
- Fixed Sophisticated Storage upgraded chests flickering
- Fixed NeoEnchant+ enchantment names displaying incorrectly when showing enchantment descriptions (thanks to Hardel!)
- Fixed the “Summoner Pact” enchantment displaying its codename as the name
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
- Updated NeoForge Version from 21.1.215 -> 21.1.217
‎ 
Current NeoForge Version
- 21.1.217
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.6.0.zip — 2025-11-26

NeoTech Reborn | 1.2.6.0 Changelog (Released)
‎ 
Summary
massive update, includes new content, tons of bug fixes/performance improvements and improved compat
‎ 
Added
- Network Protocol Disconnect
- Excalibur | Macaw's Doors Support
- Excalibur | Waystones
- Icons - Numerals
- NaNny (Fix NaN Health)
- Missing Mods Warning
- Ixeris
- No Chat Reports
- More Villagers: Missing Buildings
- Health Bars
- Cataclysm x YUNG's Better Nether Fortresses Compat
- Starcatcher
- Hybrid Aquatic
- Mod Name Tooltip
- TINBN
- Duplicationless
- Darker Depths
- Tooltip Overhaul
‎ 
Removed
- AsyncParticles (archived mod)
- Noisium (archived mod)
- Excalibur | Amendments Support (a better version of this type of compat was already there)
- Enchant Display: Roman numerals (replaced by Icons - Numerals)
- Torohealth Damage Indicator Reformed (replaced by Health Bars)
- Stardew Fishing (replaced by Starcatcher)
- TNBN (replaced by TINBN)
‎ 
Changes
- Config Changes and Cleanup
- Lowered floatingItemScale (immersiveUI from 1.4 -> 1.2)
- KJS changes and fixes
- Added Starcatcher guide to the first_join tome
- Tons of new fishes/acquatic mobs got added
- Disabled InvMove movement in some GUI's
- Disabled Emi modID due to possible issues when joining
- Updated Enchantments descriptions
- Updated Apotheosis enchanting config
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
- Updated NeoForge version from 21.1.211 -> 21.1.215
‎ 
Current NeoForge Version
- 21.1.215
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.5.6.zip — 2025-10-13

NeoTech Reborn | 1.2.5.6 Changelog (Released)
‎ 
Summary
many new mods, mostly biomes/content ones, new foods, also tons of bug fixes due to mod updates
‎ 
Added
- GTBC's Geomancy Plus - Iron's Spells Addon
- [Let's Do] Meadow
- [Let's Do] BloomingNature
- [Let's Do] WilderNature
- Accelerated Rendering
- Chat Impressive Animation
- Born in Chaos (parsing errors got fixed)
- Ceiling Torch
- Ars Creo
- Dungeons Delight
- RunicLib
- YUNG's Better Caves
‎ 
Removed
- Project: Vibrant Journeys (not needed anymore, since some other mods add similiar decorations, also this mod got some incompats with other biome mods)
- Roots Classic (like, what even is the purpose of this mod bruh)
- Stuttering Screen/Lag Protection (unstable mod, caused crashes)
‎ 
Changes
- Config Changes and Cleanup
- Changed AR config to temp-fix a visual issue
- Disabled Main-Hand item hud option in InventoryHUD+
- Removed Crop Marker from VanillaTweaks
- KubeJS compat changes
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed possible crashes related to the lag protection mod
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shader Packs
- Updated from NeoForge 21.1.209 -> 21.1.211
‎ 
Current NeoForge Version
- 21.1.211
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.5.5.zip — 2025-10-01

NeoTech Reborn | 1.2.5.5 Changelog (Released)
‎ 
Summary
mod changes, bug fixes, improved excalibur compat
‎ 
Added
- Shut Up GL Error
- JamLib
- Compat Structure
- Sodium Extra Information
- Anvian's Lib
- Excalibur | Supplementaries Support (got fixed)
- Excalibur | Amendments Support
- Excalibur | Ribbits Support
- Create Ultimine
- Don't Make Me Turn This Boat Around
‎ 
Removed
- 
‎ 
Changes
- Config Changes and Cleanup
- Changed ImmersiveUI config (improvements)
- Made enchantments show only when shift is pressed
- Updated Kinetic Hosting aff link in the main menu & pause screen
- Made the ToroHealth hud smaller (1.0 -> 0.85)
- Boats now automatically align with your facing direction when you board them.
- 16 new Alloys have been added
- Unbound iris "K" keybind due to it being overlapped by puffish skills
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed logs possibly being spammed by GL Errors
- Partially fixed some enchants flickering (altough when you will hold shift, it will flicker)
- Fixed some deadlocks
‎ 
Updated
- (!) All mods that could be updated have been updated.
‎ 
Current NeoForge Version
- 21.1.209
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.5.4.zip — 2025-09-22

NeoTech Reborn | 1.2.5.4 Changelog (Released)
‎ 
Summary


tons of mod changes, mostly bug fixes, new content, diagonal walls/fences, new villages types, tech additions
‎ 
Added
- Excalibur | Macaw's Roofs Support
- [Let's Do] Beachparty
- Horseman
- No Structure Overlap
- EMI Loot
- Homesteads
- Create: Copycats+
- Ribbits
- Security Craft
- Super Factory Manager
- Diagonal Fences
- Diagonal Walls
‎ 
Removed
- Rotten Creatures (some bugs, also mod support isn't provided)
- Platform (RC dep)
- Allthemodium (unbalanced to the pack style, also i won't maintain it, it would require too much work)
- All The Arcanist Gear (same reason of ATM)
- All the Wizard Gear (same reason of ATM)
- Excalibur | Supplementaries Support (signs textures were buggy, will get re-added once fixed)
- PolyLib (useless since FTB Backups 2 got removed)
‎ 
Changes
- Config Changes and Cleanup
- Reduced "Fortune" enchant max lvl from 10 -> 6 (to balance RandomOre drops) (also changed some enchants max lvl)
- Lowered challenge advancement volume (from 1 to 0.4)
- Changed Bridging mod Post-Bridging delay from 0 -> 1 ticks
- Some horse stuff improvements
- Structures in the world are now less likely to overlap with each other.
- Alot of KubeJS changes (mostly compat stuff)
- Changed Enchantments descriptions script
- Improved unification between mods
- Disabled ModernUI "useColorEmoji" option, as a possible fix to a rare crash
- Re-Enabled Occultism version of the Silver Ore
- Disabled the "What...? Magnet" trinket due to undesirable effects
- Repositioned multiple huds (inventoryHUD+, WarriorRage)
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed a bug where crouching and placing blocks would incorrectly fill the lower parts beneath the targeted block instead of placing just one.
- Fixed Actually Additions being disabled somehow
- Fixed some issues with tiny coals unification
- Fixed buggy Supplementaries signs textures
- Fixed some Supplementaries items being buggy while in the main hand
- Fixed buggy texture for torchflower while in the main hand
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated Shaders
‎ 
Current NeoForge Version
- 21.1.209
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.5.3.zip — 2025-09-15

NeoTech Reborn | 1.2.5.3 Changelog (Released)
‎ 
Summary
Excalibur compatibility focused update, along new mods
‎ 
Added
- Excalibur | Handcrafted Support
- Excalibur | Aquaculture 2
- Excalibur | Warrior Rage Support
- Excalibur | Magnum Torch Support
- Excalibur | Chipped Support
- Excalibur | Macaw's Pack
- Enchant Display: Roman numerals (basically "icons" RP enchants levels icons)
- Legendary Tabs - Neoport
- Botany Pots - Mystical Agriculture Compat
‎ 
Removed
- Skin Layers 3D (could cause compatibility problems with mods, also not really needed in big modpacks)
- I See My Armored Hand (some armors are bugged (no hand texture)), will re-add once they fix it
- Icons (multiple issues with overlapping)
- Advertisement Removal | Icons Addon (not needed anymore)
‎ 
Changes
- Config Changes and Cleanup
- Changed SubtleEffects fire height from 0 -> -0.20
- Removed some tweaks from Vanilla Tweaks resource pack (some are replaced by SubtleEffects config)
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed buggy hand texture with some chestplates
- Fixed advancements icons overlapping fancytoasts advancements
- Fixed language options having strange " (-) " symbols
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated Resource Packs
- Updated NeoForge version from 21.1.208 -> 21.1.209
‎ 
Current NeoForge Version
- 21.1.209
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here.

---

## NeoTech Reborn 1.2.5.2.zip — 2025-09-08

NeoTech Reborn | 1.2.5.2 Changelog (Released)
‎ 
Summary
Bug fixing focused update, along with added Excalibur-compatible resource packs for improved mod textures and immersion
‎ 
Added
- Excalibur | It Takes a Pillage
- Excalibur | Ice and Fire
- Excalibur | Iron's Spells 'N Spellbooks support
- Improved Village Placement
- GTBC's Spellbooks - Iron's Spells Addon
- GTBC's SpellLib/API
- Simply More
- Feature Recycler
- Detected setBlock Be Gone
- Create: Enchantment Industry
- Pick Up Notifier
- Crafting Station: J/EMI Edition Updated
- Excalibur | Lootr Retextured
‎ 
Removed
- What Are They Up To (Watut) (buggy mod, caused SubtleEffects firefly particles to be buggy)
- T.O Magic 'n Extras - Iron's Spells Addon (unstable + buggy mod, not even ready for 1.21.1 lol, will be re-added once they fix most issues) (replaced by GTBC's Spellbooks - Iron's Spells Addon)
- CoroUtil (watut dep)
- Loot Journal (got some bugs, replaced by Pick Up Notifier)
- AmbientSounds 6 (meh)
- Excalibur | Lootr Support (replaced by Excalibur | Lootr Retextured)
‎ 
Changes
- Config Changes and Cleanup
- KubeJS changes
- Adjusted FancyMenu panorama fov from 85 -> 90 (90 was used when the screenshots were taken)
- Suppressed the "Detected setBlock in a far chunk" message, reducing log file size
- Re-Enabled particles completely, the option is now enabled by default for new players
- Changed Subtle Effects item drop rarity particles to "Not Common Items"
- Changed LivingEntitiesMaxHorizontalTickDistance from 96 -> 128 (6 -> 8 chunks)
- Changed LivingEntitiesMaxVerticalTickDistance from 48 -> 64 (3 -> 4 chunks)
- Enabled allowVillageDestroyBlocks, which will now allow you to break blocks in vampirism factions villages even if you aren't in a faction
- Glowcaps and other groundcover will no longer appear on the top bedrock layer
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed firefly from SubtleEffects being buggy
- Fixed missing mods on the server side (my bad)
- Fixed most issues with crashing/anything else related to TravelOptics
- Fixed item flickering issues
- Fixed FancyMenu pre-loading resources issues
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Updated NeoForge version from 21.1.206 -> 21.1.208
‎ 
Current NeoForge Version
- 21.1.208
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.5.1.zip — 2025-09-01

NeoTech Reborn | 1.2.5.1 Changelog (Released)
‎ 
Summary
Apotheosis compatibility with other mods, some mod changes, many performance improvements & bug fixes, also new world generation stuff
‎ 
Added
- YUNG's Cave Biomes
- Create: Dreams n' Desires (added back)
- Ace's Spell Utils
- Save My Shaky Network
- More Sniffer Flowers
- TrimsEffects
- Underground Villages: Stoneholm
- Additional Attributes
- Fallen Gems & Affixes
- Epic Structures: Witch Huts
- Epic Structures: Villages
- Butchercraft
- LITE shaders (MakeUp edit)
‎ 
Removed
- Despawn Tweaks (replaced by Utilitarian new feature, works better)
- Sussy Sniffers (crashed with Additional Attributes, the issue has been reported)
- Miles's Enhanced Hud (not required anymore since Confluence modifies hearts and saturation textures)
- Better Mana Bar for Iron's Spells 'n Spellbooks (not required anymore since Confluence compat for irons spellbooks is enabled)
- Butchery (replaced by Butchercraft)
- MakeUp - Ultra Fast (replaced by LITE shaders (MakeUp  edit))
‎ 
Changes
- Balanced mining/combat skills required exp (exponential growth, will be much harder)
- Disabled Modern Industrialization update message
- Changed Fancy Toasts animation from playful -> quirky and changed the style to Terracraft
- Armor trims now grant different effects depending on the trim you use
- Disabled Slime & Magma Cube trails (Subtle Effects)
- You can now find more villages underground
- Disabled in-game message for underground Villages: Stoneholm
- You can now find really well-structured witch huts, and original Minecraft villages are now completely different
- Changed Bridging config
- Customized the credits screen (added NTR slideshows) (FancyMenu)
- Changed Butchercraft config
- Changed LivingEntitiesMaxHorizontalTickDistance from 128 -> 96 (8 -> 6 chunks) due to the new option StopRenderingSkippedEntities, which will hide entities from rendering if the entity tick is skipped
- Improved LITE shaders (MakeUp edit) config
- Disabled Chloride Max Entity Distance (culling/hiding) due to it overlapping "DoesPotatoTick?" features
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed missing mods in server mods folder
- Log Spam by fancy menu has been fixed
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Updated NeoForge version from 21.1.203 -> 21.1.206
- Updated Resource Packs
‎ 
Current NeoForge Version
- 21.1.206
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.5.0hf.zip — 2025-08-21

NeoTech Reborn | 1.2.5.0hf Changelog (Released)
‎ 
Summary


‎ 
Added
- 
‎ 
Removed
- 
‎ 
Changes
- Disabled showFoodValuesHudOverlay (AppleSkin) (it got overlapped by Confluence Hunger Bar)
- Disabled Vampirism "collectStats" (basically telemetry)
- Added comforts sleeping bags (totally 16) entries to holdmyitems blacklist, since they are bugged with the animation
- Re-Enabled Tide Minigame, it should now use Stardew Fishing minigame
- Reverted fallingStarInterval from 3600 -> 2400 since those are needed to get more mana
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed TAB config mismatching on server side
‎ 
Updated
- (!) All mods that could be updated have been updated.
‎ 
Current NeoForge Version
- 21.1.203
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.5.0.zip — 2025-08-21

NeoTech Reborn | 1.2.5.0 Changelog (Released)
‎ 
Summary
Pack Stability focused update, this update aims to fix many performance issues with chunk loading, also many mod changes (new mobs, structures and biomes), a new way to grow plants/trees and general improvements to the pack (a world reset is recommended but not necessary)
‎ 
Added
- Mine Treasure (Mod Version)
- AsyncParticles (the issues got fixed)
- More Dragon Eggs
- Apothic Attributes Extension
- Mo' Structures
- Loot Integrations: Mo' Structures
- Explore Ruins: The Aether - Dungeons & Structures
- Fancy Toasts | Better Advancements
- Complementary Structures
- TrashSlot
- LUMINOUS: NETHER
- LUMINOUS TAG
- Botany Pots
- Botany Trees
- Botany Pots Tiers
- Pufferfish's Unofficial Additions
- Iron's Spells 'n Spellbooks Dynamic Skill Trees
- Pufferfish's Skills
- Pufferfish's Attributes
‎ 
Removed
- Mine Treasure (DataPack Version)
- Wabi-Sabi Structures (not compatible with modded biomes due to hardcoded stuff)
- Piglet Structures (massive log spam + issues, far from becoming stable)
- Loot Integrations: Piglet Structures (useless since PS got removed)
- Dragonkind Evolved | End Battle Reborn (modrinth mod)
- Farmer's Knives (not really needed + flooding kubejs non-issues)
- Advancement Plaques (replaced by Fancy Toasts)
- Mandala's GUI - Dark mode Advancement Plaques Compat (useless since AP got removed)
- Toast Control (caused incompat with Fancy Toasts + useless since sodium extra got that option)
- FastWorkbench (Recipe Essentials includes the same function)
- Cataclysm Weaponery (not needed)
- AoA Iron Furnaces Fix (AoA got removed)
- Advent of Ascension (incomplete mod, buggy, will get re-added once it's complete)
‎ 
Changes
- Config Changes and Cleanup
- Reduced ModPack file size
- Customized the disconnection screen (Fancy Menu)
- Updated enchantments descriptions
- Updated Apotheosis Enchantments config
- Cleaned up KubeJS scripts
- Hidden an annoying message in the Utilitarian config
- Enabled Toasts in Toast Control
- Changed minimized window fps from 0 -> 10 (ModernUI)
- Disabled DTN inventory button (overlapped with stuff, the issue has been reported)
- Changed spawn chance for falling leaves (from 90 -> 95) (less frequent)
- Changed rotatespeed from 0.3 -> 0.1 (physics lite)
- Disabled confluence achievementToast type (will now use regular advancements)
- Changed tooltip borders color (now its a rainbow cycle)
- Balanced l2hostility config even more (reduced health and damage factor)
- Disabled Recipe Book button and logic via RecipeEssentials
- Added a custom background to FTBBackups screen (FancyMenu)
- Made xms and xmx the same (10gb) (server args), to improve stability
- Made XP cost multiplier higher (20 -> 25) (Everlasting Abilities) & changed totemCraftingRarityIncreasePercent from 15 -> 10) (Everlasting Abilities)
- Reworked the Loading Screen background and cleaned up assets
- Deeply customized Pufferfish Skill's backgrounds and icons
- Unbound an annoying IPN HotKey
- Changed Panorama folder name from Nether_Panorama to Loading_Panorama (user-friendly usage purposes)
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed a mistake in global packs (forgot the resourcepacks/ for the excalibur create resource pack lol)
- Fixed EMI exceptions/crashes when joining a world/server a 2nd time without rebooting the client
‎ 
Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Shader Packs
- Updated NeoForge from 21.1.200 -> 21.1.203
‎ 
Current NeoForge Version
- 21.1.203
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.4.4hf.zip — 2025-08-15

updated all the mods and fixed a server side issue

---

## NeoTech Reborn 1.2.4.4.zip — 2025-08-14

NeoTech Reborn | 1.2.4.4 Changelog (Released)
‎ 
Summary
Significant Vanilla Biomes changes, Boat QOL improvements + config adjustments, performance improvements
‎ 
Added
- ‎BoatView360
- Boat Item View
- Cut Through
- Jumpy Boats
- Regions Unexplored: Expansion
- You're in Grave Danger
‎ 
Removed
- Clean Swing (replaced by Cut Through)
- William Wythers' Overhauled Overworld (incompatible with Regions Unexplored: Expansion)
- Corail Tombstone (mid mod, involved in curios loss when claiming the grave)
‎ 
Changes
- Config Changes and Cleanup
- Changed Everlasting Abilities maxPlayerAbilities from 8 -> 10
- You're now able to rotate 360° while in a boat
- Disabled Geysers due to massive log spam
- Changed LivingEntitiesMaxVerticalTickDistance from 32 -> 48 (to semi-fix entities being stuck mid air when on high terrain)
- Added the ModPack version to the TAB config
- You can now see the item you're holding while riding in a boat
- You can now make small jumps while riding a boat
- Reduced pack file size
- Disabled KubeDex keybind (KubeJS) (wtf is this)
- Re-enabled FTBC Minimap by default and adjusted some settings
- Re-bound the "Show Minimap" hotkey to "Page_UP"
- Swapped "Icons" resourcepack with "Icons - NoLanguageMenu" (some languages had no icons)
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed Curios items loss (actually caused by Corail tombstone, ew)
‎ 
Updated
- (!) All mods that could be updated have been updated.
‎ 
Current NeoForge Version
- 21.1.200
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.4.3.zip — 2025-08-13

NeoTech Reborn | 1.2.4.3 Changelog (Released)
‎ 
Summary


‎ 
Added
- ‎TAB
- Item Obliterator
- Necronomicon API
‎ 
Removed
- 
‎ 
Changes
- Config Changes and Cleanup
- Added more dimensions (and fixed some stuff) to Apotheosis config (boss purposes)
- Cleaned up Apotheosis enchantment config (removed non-existent enchants from removed mods)
- Adjusted Enchants Descriptions
- Made all the enchants Max Level 1.25x better (due to crystalcraft balancing)
- Balanced l2hostility config to match the crystalcraft balancement and the enchantment improvements
- Customized TAB config to look cool
- Deleted some TerraCurio items with Item Obliterator (due to duped function/mechanics)
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
‎ 
Updated
- (!) All mods that could be updated have been updated. ‎ 
Current NeoForge Version
- 21.1.200
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.4.2.zip — 2025-08-11

NeoTech Reborn | 1.2.4.2 Changelog (Released)
‎ 
Summary
Finally, a pure NeoForge experience—no Sinytra or Fabric mods remain in the pack, as they have been replaced with NeoForge alternatives. Some config changes are included as well, along with many performance improvements and bug fixes (also resulting from the Connector removal).
‎ 
Added
- ‎Crash Assistant
- Glowing Emissive Ores - Fusion
- Torohealth Damage Indicator Reformed
- Leaves Be Gone (better Leaf Decay mod in terms of functionality and performance)
- Bosses'Rise
- Excalibur | Bosses'Rise Support
- Functional Armor Trim
‎ 
Removed
- Hyperbox (ew)
- AsyncParticles (currently removed due to issues with particles) (will get re-added once fixed)
- Continuity (replaced by Glowing Emissive Ores - Fusion (works with Fusion mod))
- TslatEntityStatus (replaced by Torohealth Damage Indicator Reformed)
- CleanF3 (required for Sinytra Connector removal; also removed useless info from some mods as a small debloat)
- Sinytra Connector (not needed anymore)
- Forgified Fabric API (was required for Sinytra Connector)
- Accelerated Decay (replaced by Leaves Be Gone)
- Bosses of Mass Destruction (basically dead, replaced by Bosses'Rise)
- CERBON's API (was required by BOMD)
- Colorful Hearts (replaced by Confluence terraStyleHealth, which got basically infinite colors and improved health display)
- Overloaded Armor Bar (replaced by Confluence terraStyleArmor, which got infinite colors and improved armor display)
- Born in Chaos (broken AzureLib/GeckoLib animations/erroring logs)
- All The Trims (archived Mod, replaced by Functional Trims)
- Better Trims (archived Mod, replaced by Functional Trims)
- Runtime Trims (ATR and BT api/dep)
‎ 
Changes
- Config Changes and Cleanup
- Changed particular config
- Customized Crash Assistant config
- Disabled (transparent) custom hit color (was bad asf)
- Multiple Changes to TDIR config (to better fit the pack + adjustments)
- Disabled ModernFix and EntityCulling F3 info (F3 screen debloating)
- Changed Jade Entity configs (adjustments)
- Disabled Project Vibrant Journeys icicles (there are already Lucky's Spelunker's Charm II's icicles) (PVJ icicles were dropping on the ground, potentially causing lag)
- Enabled Confluence compat for Iron's Spells 'n Spellbooks and Ars Nouveau
- Enabled terraStyleHealth, terraStyleFood & terraStyleArmor
- Reduced ModPack file size
- Unbound TerraCurio dashing keybind (replaced by Bosses'Rises rolling ability) (will eventually find a way to prevent those TerraCurio items from being found/crafted)
- Overridden keybinds (if you have changed something, please rebind it, sorry abt that) (was needed for multiple changes)
‎ 
Notable Fixes
- (!) Fixes included in Mod Updates
- Temp fixed jade flickering when hovering over an entity if a bossbar is present (gnetum config)
- Fixed AzureLib/GeckoLib errors in logs due to BornInChaos (will get fixed by AzureLib's new code)
‎ 
Updated
- (!) All mods that could be updated have been updated.
- NeoForge Version (21.1.197 -> 21.1.200)
- Resource Packs
‎ 
Current NeoForge Version
- 21.1.200
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.4.1.zip — 2025-08-08

NeoTech Reborn | 1.2.4.1 Changelog (Released)


Summary



Added
- 


Removed
- 


Changes
- Config Changes and Cleanup
- Reduced DistanceFactor (l2hostility) (mob were being too strong when using RTP)
- Reduced RTP max and min distance in order to improve server stability when using such command
- Changed respawn time to 1 second (confluence)


Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed Stardew fishing minigame not working with tide's rods
- Fixed curios items loss when dying (hopefully?)


Updated
- (!) All mods that could be updated have been updated.
- Updated Shaderpacks


Current NeoForge Version
- 21.1.197
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.4.0hf.zip — 2025-08-07

updated mods and fixed server side missing mods

---

## NeoTech Reborn 1.2.4.0.zip — 2025-08-06

NeoTech Reborn | 1.2.4.0 Changelog (Released)


Summary
A lot of mod changes, new food mechanic, tons of bug fixes, many performance improvements, and plenty of content additions (mobs, foods, structures, armors & tools)


Added
- OPack2Reload
- Repurposed Structures - Friends and Foes Compat Mod
- EMI professions
- Excalibur | Eternal Nether Support
- Sodium Addon: Substrate
- DoesPotatoTick?
- Stuttering Screen/Lag Protection (protects you from all sources of damage when your computer experiences frame drops)
- Lodestone
- Miner's Delight+
- Umbral Skies
- AU: Immersive Engineering
- Advertisement Removal | Icons Addon Resource Pack
- ATi Structures
- Born in Chaos
- Shulker Box Tooltip
- Shiny! Mobs
- Quality Food
- AoA Iron Furnaces Fix
- Cerulean
- AsyncParticles
- Stardew Fishing
- Ferdinand's Flowers
- Excalibur | Apotheosis Support
- Koopa's Critters
- Buried Wrecks
- Farmer's Knives
- Additional Lanterns


Removed
- Serene Seasons
- Season HUD
- Just Enough Professions (replaced by EMI professions)
- BetterThanMending (incompats with right clicks in some scenarios/dont feel good with how it works)
- Suggestion Provider Fix (Neoforge 21.1.196 implements the core feature, the mod is useless now)
- Does It Tick? (replaced by DoesPotatoTick?) (fork with better config, more features and etc)
- ScalableLux (inactive + buggy)
- When Dungeons Arise (mid structures + replaced by ATi Structures)
- RightClickHarvest (Replaced by FTBUltimine feature)
- JamLib (RCH Dep)
- Common Networking (Icarus dep)
- Common Capabilities (No longer useful since EnderIO was removed)
- Easy Shulker Boxes (replaced by Shulker Box Tooltip) (it's just simpler)
- Awesome Dungeon (meh)
- Library Ferret (Awesome Dungeon's Dep)
- Visuality Reforged (doesn't work lol)
- Chunk Activity Tracker (DIT dep)
- FlickerFix (doesn't work with/out this mod, might investigate in the future)


Changes
- Config Changes and Cleanup
- Changed DoesPotatoTick "LivingEntitiesMaxHorizontalTickDistance" from 64 to 128 (4 -> 8 chunks) (this should fix the "mobs not moving/freezing" when being too far)
- Changed Lag Protection FPS threshold (10 -> 15) & protectionDurationAfterLagMs (5000 -> 2000)
- Disabled Lag Protection FPS Hud (useless)
- Disabled TravelOptics welcome message (annoying warning about DoesPotatoTick? (while the incompat got fixed already lol))
- Bound the Observable KeyBind to Page_Down
- Changed the distance at which the player model will switch to 2d (14 -> 12 blocks)
- Prevented mining when the tool reaches 1 point of durability (ftb ultimine) & changed the max mineable blocks (64 -> 128) (also changed saturation exhaustion (20d -> 32d)
- Using a hoe on farmland won’t auto-plant seeds from nearby inventory slots anymore.
- KubeJS Changes (additions & improvements)
- Changed nightVisionFadingTime (100 -> 20 ticks aka 5 -> 1 seconds) (SubtleEffects)
- Added 1 more milestone for SOL: Carrot


Notable Fixes
- (!) Fixes included in Mod Updates
- Added traveloptics and irons_spellbooks to blacklist (DoesPotatoTick?)
- Fixed wrong Server Java Args (idk why i've put java 8-11 args but lmao)
- Fixed deadlocks caused by twilight forest (changed some stuff in config as a temp fix)
- Fixed Copyright text being buggy in the main menu (FancyMenu)


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Shader Packs
- Updated NeoForge version from 21.1.192 -> 21.1.197



Current NeoForge Version
- 21.1.197
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn  1.2.3.4 Last July.zip — 2025-07-17

Updated all the mods and changed Confluence Inventory button from the left to the right (Because effects were overriding it)

---

## NeoTech Reborn 1.2.3.4.zip — 2025-07-15

NeoTech Reborn | 1.2.3.4 Changelog (Released)


Summary
many mod changes, new trinkets, bug fixes, performance improvements, adjustments


Added
- Create Crafts & Additions
- Fast Tool Switching
- Nameless Trinkets
- Jade (Server side)
- Jade Addons (Server side)


Removed
- Icarus (not needed, there are enough methods of flying)
- SparkWeave Engine (Icarus dep)
- Combat Roll (Replaced by the dashing item from TerraCurio)
- Equipment Compare (Buggy, replaced by Apotheosis Comparision System)
- Artifacts: Curse of Pandora (Buggy)


Changes
- Config Changes and Cleanup
- Unbound Observable keybind (causes crashes + not needed for the average user)
- Unbound open vampirism menu keybind
- Re-bound TerraCurio Dash keybind (from "left_ctrl" -> "X") (replace for Combat Roll) (more balanced way of rolling)
- Disabled Tide Fishing MiniGame
- Re-enabled Apotheosis Comparision
- l2hostility config changes
- Multiple changes to Project: Vibrant Journeys generation config


Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed AE2 Jade infos not showing in servers


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs



Current NeoForge Version
- 21.1.192
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.3.3.zip — 2025-07-14

NeoTech Reborn | 1.2.3.3 Changelog (Released)


Summary
mod changes, bug fixes + performance improvements, general adjustments


Added
- Construction Sticks
- Clickable Advancements
- Critters and Companions


Removed
- 


Changes
- Config Changes and Cleanup
- Adjusted InControl! config
- Drastically changed rtp radius settings (FTB Essentials) (should fix server dying)
- Changed server min and max ram amount from 9gb -> 10gb
- Adjusted Combat Roll icon position
- adjusted Warrior Rage icon position (right -> left) (also adjusted y position to be more centered to the hotbar) (let me know if you think its not centered correctly)
- You can now click advancements and it will redirect u to the exact advancement you completed
- Changed max everlasting abilities max player abilities from 6 -> 8
- Changed totem crafting count from 3 -> 4 (Everlasting Abilities)
- Changed xp multiplier cost from 10 -> 20 (Everlasting Abilities)
- Re-enabled ModernFix Deduplication


Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed many items having wrong recipe (caused by ModernFix deduplication)


Updated
- (!) All mods that could be updated have been updated.



Current NeoForge Version
- 21.1.192
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.3.2hf.zip — 2025-07-13

Fixed recipe issues (caused by modernfix deduplication)

---

## NeoTech Reborn 1.2.3.2.zip — 2025-07-12

NeoTech Reborn | 1.2.3.2 Changelog (Released)


Summary
small mod changes, bug fixes and several performance improvements, also some adjustments to configs


Added
- Warrior Rage (got fixed this time)
- Ars Polymorphia
- In Control!
- Excalibur | Create Support
- Spelunker's Charm II (forgot to add it on the server side)
- Better Than Mending


Removed
- LMFT (only needed when debugging broken tags, useless log spam for now)
- Server Sleep (replaced by KubeJS script)
- Server Core (mid)


Changes
- Config Changes and Cleanup
- Changed l2hostility configs
- Reduced drastically max and min distance for rtp (to fix mobs overleveling and lag)
- Disabled "Force fullscreen" option in FancyMenu config
- Added 25 more colors to the Overloaded Armor Bar config (since there are strong armors)
- Set the sleeping percentage to 33 on world creation/server creation (via KubeJS Script)
- Disabled Spawn Chunk radius (set to 0) via KubeJS Script to improve performance
- Changed these options in modernfix configs: mixin.bugfix.restore_old_dragon_movement=true, mixin.feature.warn_missing_perf_mods=false, mixin.perf.faster_item_rendering=true, mixin.perf.ingredient_item_deduplication=true
- Changed "get it together, drops" radius from 30 -> 20
- Changed ponder keybind from "w" -> "left_alt"
- Changed "In Control!" config to improve tps and stuff
- Disabled tremors from Spelunker's Charm II mod
- Moved combat roll icon on the left part of the hotbar (fixes overlapping with warrior rage's streak icon)
- Enabled experimental_screen_batching (ImmediatelyFast)
- You're now able to sneak-right-click a Mending item to repair it with experience you already have.


Notable Fixes
- (!) Fixes included in Mod Updates


Updated
- (!) All mods that could be updated have been updated.



Current NeoForge Version
- 21.1.191
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.3.1hf2.zip — 2025-07-10

NeoTech Reborn | 1.2.3.1hf2 Changelog (Released)


Summary



Added
- 


Removed
- Warrior rage (kick while ticking, will get re-added once fixed)


Changes
- Config Changes and Cleanup
- Disabled ModernFix key signing option, because it wasn't possible to chat in the server
- Set the max tick time to -1 (from 60000) to prevent server hangups, since its possible for the server to have lag spikes when generating


Notable Fixes
- (!) Fixes included in Mod Updates
- Several crashes with Friend and Foes, warrior rage and so on


Updated
- (!) All mods that could be updated have been updated.



Current NeoForge Version
- 21.1.188
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.3.1Fix.zip — 2025-07-09

Updated shaders, mods and fixed tombstone error, also configured Shader settings, re-added sophisficated core sort button but with correct positioning

---

## NeoTech Reborn 1.2.3.1.zip — 2025-07-07

NeoTech Reborn | 1.2.3.1 Changelog (Released)


Summary



Added
- Show Me The Enchantment (might not show all the enchants that you will get when enchanting) (atleast its something)
- Warrior Rage (got fixed)


Removed
- Biome_fixer datapack (NetherEx fixed the issue with an update)


Changes
- Config Changes and Cleanup
- Disabled Sophisticated Sorting button (IPN does the job)



Notable Fixes
- (!) Fixes included in Mod Updates
- Temp-Fixed Iron's spellbar flickering due to gnetum (disabled gnetum for that bar)


Updated
- (!) All mods that could be updated have been updated.



Current NeoForge Version
- 21.1.186
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.3.0hf2.zip — 2025-07-06

replaced owo lib version

---

## NeoTech Reborn 1.2.3.0hf.zip — 2025-07-06

NeoTech Reborn | 1.2.3.0hf Changelog (Released)


Summary



Added
- 


Removed
- Warrior Rage (kicks player in the server due to ticking (sad) )


Changes
- Config Changes and Cleanup
- Added Slideshows background to Direct Connection Layout



Notable Fixes
- (!) Fixes included in Mod Updates
- Temp Fix for beds rendering incorrectly when used with HoldMyItems


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs



Current NeoForge Version
- 21.1.186
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## [Huge Rework] NeoTech Reborn 1.2.3.0.zip — 2025-07-06

NeoTech Reborn | 1.2.3.0 Changelog (Released)
WORLD RESET RECOMMENDED


Summary
massive update after almost a month, contains massive content changes, bug fixes/improvements, menu's complete rework and multiple changes to configs/buttons
Many modifications to biomes (especially caves), new mobs, compat between world generation mods, file size decrease


Added
- SmartBrainLib (embedded version from AoA is outdated)
- Mandala's GUI | Add-Ons
- DefaultSettings (requested by many users, finally here)
- JCPlugin (DS dep)
- FTB Backups 3
- Accurate Block Placement
- Better World Loading
- Open Sesame
- Ecologics
- Bloop Shaders Official
- Lucky's Spelunker's Charm II
- Mowzie's Mobs
- Apothic Equipment
- Apothic Materials
- Seamless Trading (New trade offers appear instantly as soon as the villager XP progress bar fills. No more level up and trade refresh delay.)
- Iron's Spell Books: Arcane Essence Blocks
- Iron's Spells' Recipe Additions
- Warrior Rage
- Hackers 'n Slashers
- WWOO (datapack)
- NE+ Addons - Structure


Removed
- Create Ultimine (doesn't work with latest NeoForge versions)
- Bloop Shaders (temporarily removed)
- FTB Backups 2 (replaced by FTB Backups 3)
- Dura Display (not needed anymore + overrides tooltips)
- Eclectic Trove resource pack (replaced by ModernUI Modern Tooltips)
- Double Doors (replaced by Open Sesame)
- Paxi (GlobalPacks order finally works, with this, resourcepacks can be loaded in order directly from the resourcepacks folder, saving alot of space)
- Geophilic (incompatible with William Wythers' Overhauled Overworld, said mod is preferred over Geophilic because it's more realistic)
- Create: Enchantment Industry (log spam of broken recipes errors, will get re-added once fixed)
- Create Crafts & Additions (same issue of the enchantment industry mod)
- William Wythers' Overhauled Overworld (replaced by the datapack version which is loaded first (terralith compatibility))
- Entity Texture Features (unneeded)
- Entity Model Features (unneeded)
- Cosmetic Armor Reworked (not functioning correctly)


Changes
- Config Changes and Cleanup
- Disabled item rendering for Legendary Tooltips (to fix Modern Tooltip option from ModernUI)
- Reworked the Server MOTD message
- Changed ModernTooltip colors and set ShadowsRadius to 0 (buggy)
- Removed UnobtrusiveScaffolding from VanillaTweaks resource pack (caused buggy scaffolding texture)
- Multiple changes to Cardiac config (balancing measures)
- Enabled AllTheLeaks "Ingredients Deduplication" Option (will massively help with memory usage)
- Changed FTBQ detection from 1 to 3 seconds (could improve performance)
- Enabled "Remove_Chat_Signing" option in ModernFix
- Enabled 3D Right/Left Sleeve
- Startup Messages changes
- Changed Shaders settings
- Drastically reduced modpack file size
- Changed HMI Switch speed 0.018 -> 0.010 and Animation speed 1.00 -> 0.80
- Updated enchantment descriptions
- Changed Gore effect from CONFLUENCE_VANILLA to ALL (death animation will now work on modded mobs too)
- Fully reworked loading_screen and main_menu and improved some layouts (fancymenu)
- Killing mobs in short time will grant you more attack damage or even fire aspect on the hit. (basically kill streak bonus)
- Improved critical system (attacking a mob that isn't targetting you, attacking a stunned mob, headshotting a mob with arrows), new mechanics (parry, bash (both with right click) and stealth (perception system for mobs))
- NeoEnchant+ Enchants can now be found in vanilla structures
- Changed dis-enchanting cost from 4 -> 5 levels
- Updated sdrp config and deleted removed dimensions
- Removed "Generated" folder from Productive Trees config, since its not used anymore (drastically reducing modpack size)


Notable Fixes
- (!) Fixes included in Mod Updates
- KubeJS fixes etc
- Fixed NetherEx tagging a Nether biome (torrid_wasteland) as a mushroom biome, which caused Overworld mobs and structures to generate there. Replaced the c:is_mushroom tag via datapack to only include appropriate Overworld biomes.
- Fixed Wither not dropping stuff


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Shader Packs


Current NeoForge Version
- 21.1.186


Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.5.zip — 2025-06-13

NeoTech Reborn | 1.2.2.5 Changelog (Released)


Summary
mod changes, performance improvements, general improvements to mod compatibility


Added
- Confluence: Otherworld



Removed
- Terracurio (replaced by Confluence: Otherworld)


Changes
- Config Changes and Cleanup
- Performance improvements by changing gnetum config
- Any ender pearl can be converted into vanilla ender pearl (improved mod compat)
- Kubejs changes
- Dropping physics speed changes



Notable Fixes
- (!) Fixes included in Mod Updates
- Wrong silicon block being used
- Tiny coals and charcoals being uncraftable



Updated
- (!) All mods that could be updated have been updated.
- Resource Packs



Current NeoForge Version
- 21.1.179
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.4.zip — 2025-06-10

NeoTech Reborn | 1.2.2.4 Changelog (Released)


Summary
mod changes, fixes, performance improvements


Added
- Better Advancements
- Krypton



Removed
- Advancements Reloaded (replaced by Better Advancements) (doesn't show all the advancements tabs)
- Excalibur | Easy Magic Support (doesn't work)
- Enchanting Infuser (not needed)
- EnderIO (don't like it)



Changes
- Config Changes and Cleanup
- Changed disenchanting price from 2 -> 4 exp levels
- Multiple Kubejs code changes
- Performance improvements with networking



Notable Fixes
- (!) Fixes included in Mod Updates
- Resource Pack order (paxi)



Updated
- (!) All mods that could be updated have been updated.
- Resource Packs


Current NeoForge Version
- 21.1.176
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.3hf.zip — 2025-06-09

NeoTech Reborn | 1.2.2.3hf Changelog (Released)


Summary



Added
- 


Removed
- 



Changes
- Config Changes and Cleanup



Notable Fixes
- (!) Fixes included in Mod Updates
- Crashes with apothic enchanting (list of available enchantments)



Updated
- (!) All mods that could be updated have been updated.
- Resource Packs


Current NeoForge Version
- 21.1.176
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.3.zip — 2025-06-08

NeoTech Reborn | 1.2.2.3 Changelog (Released)


Summary
general changes and fixes, significant performance improvements


Added
- Terralith and Nullscape Biome Names (fixes buggy codenames with coordinates display mod)
- Gnetum



Removed
- Excalibur Trade cycling



Changes
- Config Changes and Cleanup
- Changed dis-enchanting cost from 25 exp points to 2 levels (balancing measures)
- Disabled rows and colums sorting buttons
- Updated enchantment descriptions (missing descriptions)



Notable Fixes
- (!) Fixes included in Mod Updates



Updated
- (!) All mods that could be updated have been updated.


Current NeoForge Version
- 21.1.176
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.2.zip — 2025-06-07

NeoTech Reborn | 1.2.2.2 Changelog (Released)


Summary
lots of stuff changed, biomes, villages, performance improvements, bug fixes and other changes


Added
- Medieval Buildings [Nether Edition]
- Excalibur | Trade Cycling Support
- Excalibur | Easy Magic Support
- L_Ender 's Cataclysm Delight
- Crabber's Delight
- Observable



Removed
- 



Changes
- Config Changes and Cleanup
- Shader settings changes



Notable Fixes
- (!) Fixes included in Mod Updates


Updated
- (!) All mods that could be updated have been updated.


Current NeoForge Version
- 21.1.176
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.1.zip — 2025-06-02

NeoTech Reborn | 1.2.2.1 Changelog (Released)


Summary
Nether changes, new mobs, mod changes, performance improvements, config changes and bug fixes


Added
- Loot Integrations: Ice and Fire
- Excalibur | Lootr Support
- Ars Elemancy
- Simple Loot Viewer
- More Sound
- Hold My Items - Reforged
- NetherEx



Removed
- Midnightlib (Ube's Delight updated the embedded)
- Greater Eye of Ender
- Unloaded Activity (performance issues with c2me) (also removed for balancing reasons)



Changes
- Config Changes and Cleanup
- Lootr chests now have a new texture!
- Changed Enchantment Descriptions



Notable Fixes
- (!) Fixes included in Mod Updates


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Shaderpacks


Current NeoForge Version
- 21.1.174
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.0hf.zip — 2025-05-25

NeoTech Reborn | 1.2.2.0hf Changelog (Released)


Summary



Added
- 


Removed
- Repurposed Structures - Friends and Foes (removed from cf, will be included in Friend and Foes)



Changes
- Config Changes and Cleanup
- Changed distortion effects to 30% to provide a more realistic gameplay
- You can now put backpacks in containers (testing, if u dont want it, let me know!)



Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed buggy textures with trimmed armors and iron's jewelry


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs


Current NeoForge Version
- 21.1.172
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.2.0.zip — 2025-05-25

NeoTech Reborn | 1.2.2.0 Changelog (Released)


Summary
Loot integrations additions, tons of new artifacts, performance improvements


Added
- Loot Integrations: Adventure Dungeons
- Loot Integrations: Piglet Structures
- Loot Integrations: Yggdrasils
- Excalibur | Supplementaries Support
- Despawn Tweaks
- Artifacts: Curse of Pandora
- Elytra Trims
- Immersive Optimization



Removed
- Let Me Despawn (replaced by Despawn Tweaks)
- Almanac (LMD lib)



Changes
- Config Changes and Cleanup



Notable Fixes
- (!) Fixes included in Mod Updates
- Fixed crashes with ice and fire lectern



Updated
- (!) All mods that could be updated have been updated.
- Resource Packs


Current NeoForge Version
- 21.1.172
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.9.zip — 2025-05-19

NeoTech Reborn | 1.2.1.9 Changelog (Released)


Summary
updates and bug fixes


Added
- Accesories (embedded version is outdated)



Removed
- 



Changes
- Config Changes and Cleanup
- Re-enabled accessories button in inventory
- Now dis-enchanting costs 5 whole levels



Notable Fixes
- (!) Fixes included in Mod Updates



Updated
- (!) All mods that could be updated have been updated.
- Resource Packs


Current NeoForge Version
- 21.1.172
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.8pt2.zip — 2025-05-18

NeoTech Reborn | 1.2.1.8pt2 Changelog (Released)


Summary
10 new ores, config changes, bug fixes


Added
- 



Removed
- 



Changes
- Config Changes and Cleanup
- Changed max Everlasting Abilities from 4 -> 6



Notable Fixes
- (!) Fixes included in Mod Updates



Updated
- (!) All mods that could be updated have been updated.
- Resource Packs


Current NeoForge Version
- 21.1.172
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.8.zip — 2025-05-17

NeoTech Reborn | 1.2.1.8 Changelog (Released)


Summary
mod changes, bug fixes, updates, massive resource pack experience changes, performance improvements


Added
- Responsive Knockback (Updates hit mobs position in the same tick as knockback is applied. Fixing inconsistent delays between attack and knockback.)
- FastEvent (event optimization)
- Excalibur | Create Support
- Rechiseled: Create
- Eternal Nether
- Loot Integrations: Bygone Nether & Eternal Nether & It Takes a Pillage
- Smithing Template Viewer (finally working)
- Just Enough Resources
- Rotten Creatures
- Platform (required by Rotten Creatures)
- Vampire's Delight
- Clean Tooltips
- Vampirism Integrations
- Mandala's GUI - Dark mode
- Mandala's GUI - Dark mode - Utopia extension
- Mandala's GUI - Dark mode Advancement Plaques Compat
- Colorful Hearts
- Save Loot Tables (helps fixing lootr loottables)



Removed
- Wither's Weapons (not really needed anymore since simply swords is here)
- Visual Workbench (issues with crafting)
- Variants&Ventures (replaced by Rotten Creatures)
- Simple Hotbar (replaced by Mandala's GUI - Dark mode)
- Colourful Containers Dark Mode GUI (replaced by Mandala's GUI)
- Colourful Containers: Modded Dark Mode GUI Compat (replaced by Mandala's GUI)
- Shrimp's Immersive Interfaces (replaced by Mandala's GUI)
- Polytone (useless since Immersive Interfaces got removed)
- FutureHUD (replaced by Mandala's GUI - Dark mode Advancement Plaques Compat



Changes
- Config Changes and Cleanup
- Massive changes to world generation shapes and stuff, due to tectonic update
- Changed shader settings
- Changed max Everlasting abilities to 4 (from infinite), to balance the modpack
- Added many more heart colors for Colorful Hearts
- Switched default health bar to hearts (AoA)
- l2hostility config balance


Notable Fixes
- (!) Fixes included in Mod Updates
- Crafting table issues (hopefully)
- partially fixed Lootr chests not opening/not having loot in some environments


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Shader Packs
- Updated NeoForge version from 21.1.169 -> 21.1.172


Current NeoForge Version
- 21.1.172
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.7.zip — 2025-05-01

NeoTech Reborn | 1.2.1.7 Changelog (Released)


Summary
Mod changes, including more options for sodium, ability to see armor on main hands, performance improvements


Added
- Chloride (Sodium++)
- I See My Armored Hand
- TwilightForest Thread Safety Addon


Removed
- Sodium Options API
- Sodium Extras
- Sodium Options Mod Compat
 
Changes
- Config Changes and Cleanup
- Enabled Favourite keybind for EMI
- Disabled apotheosis equipment comparing to fix incompat with equipment compare mod
- Bonus chest will now have a basic backpack


Notable Fixes
- (!) Fixes included in Mod Updates
- Multiple compare boxes
- AlmostUnified errors
- Empty chests 


Updated
- (!) All mods that could be updated have been updated.
- ShaderPacks
- NeoForge version from 21.1.164 -> 21.1.169


Current NeoForge Version
- 21.1.169
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.6hf.zip — 2025-04-26

fixed server and client mismatch

---

## NeoTech Reborn 1.2.1.6.zip — 2025-04-26

NeoTech Reborn | 1.2.1.6 Changelog (Released)


Summary
tons of mod changes, config changes, new content and compatibility, general improvements/bug fixes


Added
- Reliquified L_Ender 's Cataclysm
- Apotheosis x Iron's Spellbooks Compat
- Ars Technica
- Building Gadgets
- Simple Snowy Fix
- World Play Time
- Not Enough Glyphs
- Prefab
- Animal Pens
- Create: Enchantable Machinery
- Create Crafts & Additions
- Midnight Lib (embedded version is old)
- Supplementaries
- Amendments
- Excalibur | Amendments Support


Removed
- Excalibur | Wither/Golem Spawn Animation Support (useless)
- Clean Tooltips (issues)
- GeOre (meh)
- GeOre Nouveau (meh)
 
Changes
- Config Changes and Cleanup


Notable Fixes
- (!) Fixes included in Mod Updates
- Item Showcase mod not showing items icons properly with Chat Heads installed
- Trial Vaults not opening(?)
- Missing jade infos for AE2 Cables
- Modern Industrialization Gears being uncraftable


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Shader Packs
- NeoForge Version from 21.1.146 -> 21.1.164


Current NeoForge Version
- 21.1.164
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.5.zip — 2025-04-12

NeoTech Reborn | 1.2.1.5 Changelog (Released)


Summary
mod changes, config changes, improvements


Added
- Create: Enchantment Industry
- Repurposed Structures | Chef's Delight Compat Datapack
- Excalibur | Friends and Foes Support
- Create: Dragons Plus
- Sophisticated Backpacks Create Integration


Removed
- 
 
Changes
- Config Changes and Cleanup


Notable Fixes
- (!) Fixes included in Mod Updates
- hopefully fixed ice and fire crashes(?)


Updated
- (!) All mods that could be updated have been updated. 
- Updated NeoForge version from 21.1.145 -> 21.1.146


Current NeoForge Version
- 21.1.146
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.4.zip — 2025-04-07

NeoTech Reborn | 1.2.1.4 Changelog (=Released)


Summary



Added
- Chef's Delight


Removed
- 
 
Changes
- Config Changes and Cleanup
- Balanced l2hostility config


Notable Fixes
- (!) Fixes included in Mod Updates


Updated
- (!) All mods that could be updated have been updated.
- Updated NeoForge version from 21.1.144 -> 21.1.145


Current NeoForge Version
- 21.1.145
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.3.zip — 2025-04-06

NeoTech Reborn | 1.2.1.3 Changelog (Released)


Summary
Tons of new spells, foods, resource pack compat, weapons and blocks, performance improvements and bug fixes


Added
- Equipment Compare (got fixed)
- Excalibur | Dis-Enchanting Table Support
- Excalibur | Illager Invasion Support
- Excalibur | Wither/Golem Spawn Animation Support
- Create Ultimine
- Twilight Treehouses
- Sophisticated Storage Create Integration
- Multi Mine
- Cataclysm Weaponery
- Macaw's Oh The Biomes We've Gone
- AddonsLib
- T.O Magic 'n Extras - Iron's Spells Addon
- Aquaculture Delight
- Undergarden Delight
- Ocean's Delight
- Fright's Delight
- Cultural Delights
- Ars Nouveau's Flavors & Delight
- Extra Apoth Compat
- Gadgets Against Grind


Removed
- GTBC's Spellbooks - Iron's Spells Addon (replaced by T.O Magic 'n Extras - Iron's Spells Addon)
- GTBCS Spell Lib
- Champions Unofficial and the Affix Remover datapack (the game is simply too hard)
 
Changes
- Config Changes and Cleanup
- Added Apotheosis bossed to all the dimensions
- Updated SOL: Carrot config


Notable Fixes
- (!) Fixes included in Mod Updates
- Tiny coal and charcoal being uncraftable


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs
- Updated NeoForge version from 21.1.141 -> 21.1.144


Current NeoForge Version
- 21.1.144
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.2.zip — 2025-03-31

NeoTech Reborn | 1.2.1.2 Changelog (Released)


Summary
General Update fixing some configs, mod changes and updates


Added
- 


Removed
- Fast Furnace (Recipe Essentials does the same job)
 
Changes
- Config Changes and Cleanup


Notable Fixes
- (!) Fixes included in Mod Updates


Updated
- (!) All mods that could be updated have been updated.
- Resource Packs


Current NeoForge Version
- 21.1.141
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.1.hf.zip — 2025-03-30

bumped some mod versions to fix crashes

---

## NeoTech Reborn 1.2.1.1.zip — 2025-03-30

NeoTech Reborn | 1.2.1.1 Changelog (Released)


Summary
One of the biggest updates, includes multiple mod changes, performance improvements and bug fixes, config changes to ensure compatibility between the mods


Added
- Fast Item Frames
- Faster Ladder Climbing
- Simply Swords
- Lionfish API
- L_Ender 's Cataclysm
- Cataclysm: Spellbooks
- Azurelib
- Loot Integrations: L_Ender 's Cataclysm
- Create
- Create: Bells & Whistles
- Create: Easy Structures
- Create: Structures Arise
- Create: Let The Adventure Begin
- Create: Pillager Arise Forge
- Create: New Beginnings
- Create: Sky Village Forge & Fabric
- Create Better Fps
- CurioEnchantment
- Fast Async World Save
- Valhelsia Structures
- Valhelsia Furniture
- Noisium
- Particular ✨ Reforged
- Flux Networks
- EMI Enchanting
- EMI Ores


Removed
- Lost Cities (Incompat with c2me)
- Not Enough Recipe Book (Recipe Essentials does the same job+better)
- Equipment Compare (Currently Broken)
- Too Many Bows
- Gobber (not really needed, causes some kubejs conflict with simply swords)
- Geosmelt
- THE UNDEAD REVAMPED
- Computer Craft: Tweaked (not on cf anymore)
 
Changes
- Config Changes and Cleanup
- Disabled Lightning rod oxidation
- Multiple changes to enchants descriptions


Notable Fixes
- (!) Fixes included in Mod Updates


Updated
- (!) All mods that could be updated have been updated. 
- Resource Packs
- Shader Packs
- NeoForge Version from 21.1.132 -> 21.1.141


Current NeoForge Version
- 21.1.141
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.0.1.zip — 2025-03-09

NeoTech Reborn | 1.2.1.0.1 Changelog (Released)


Summary
Mod updates and additions, new structures, general fixes and changes, performance improvements


Added
- InvMoveCompats
- Excalibur | End Remastered Support
- Awesome Dungeon
- Library Ferret


Removed
- 
 
Changes
- Cleaned up config
- Reduced Server file size (-175mb)
- Fixed Server Libraries
- added Eccentric Tome support for luminous book
- l2hostility config changes (max mob/player level and factors)
- Added missing enchantment descriptions and removed useless ones


Notable Fixes
- (!) Fixes included in Mod Updates
- ServerPack not working(?)


Updated
- (!) All mods that could be updated have been updated. - Resource Packs
- NeoForge version from 21.1.128 -> 21.1.132


Current NeoForge Version
- 21.1.132
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.1.0hf2.zip — 2025-03-02

NeoTech Reborn | 1.2.1.0 Changelog (Released)


Summary
Ice and Fire, mod changes, LOT OF NEW CONTENT, lots of updates/changes, fixes, optimizations


Added
- EMI
- TooManyRecipeViewers (TMRV)
- Just Enough Mekanism Multiblocks
- Chunk Activity Tracker
- Redirected
- GTBC's SpellLib
- Loot Integrations: Better Archeology
- Loot Integrations: Philip's Ruins
- Reliquified Twilight Forest
- Reliquified Ars Nouveau
- Towers of the Wild Modded - Extra Towers
- Inventory HUD+ (better)
- Uranus
- Jupiter
- IceAndFire Community Edition
- Load My F***ing Tags
- Cryonic Config
- Flerovium
- Excalibur Support for: Deeper and Darker, Aether, Advanced Netherite
- Double Doors


Removed
- Armor Status HUD Renewed (goofy+replaced by Inventory HUD+)
- Choup's Drakvyrn Mod (Replaced by IceAndFire Community Edition)
- Fast Async World Save (NeoForge .118+ implements it)
- True Weaponry (Buggy Descriptions, Replaced by CrystalCraft Unlimited)
- JEI (Replaced by EMI + TooManyRecipeViewers (TMRV))
- DarkBlades (Replaced by CrystalCraft Unlimited)
- Open Sesame (not on curseforge anymore lmao)
 
Changes
- Cleaned up config
- KubeJS Changes
- Multiple FancyMenu Changes & Fixes
- More annoying startup messages are now hidden


Notable Fixes
- (!) Fixes included in Mod Updates
- Delay when making a world that could last up to 10 seconds


Updated
- (!) All mods that could be updated have been updated. - Resource Packs
- Shader Packs
- NeoForge version from 21.1.115 -> 21.1.128


Current NeoForge Version
- 21.1.128
### Additional Notes
Nothing is perfect, the pack may and will have bugs, report them [here](https://github.com/VaporeonScripts/NeoTech-Reborn/issues) or in the discord server support channel.

---

## NeoTech Reborn 1.2.0.1.zip — 2025-02-02

NeoTech Reborn | 1.2.0.1 Changelog (Released)


Summary
mod additions, mod removals, lots of bug fixes, performance/memory improvements, new enchants, 30+ new bows


Added



ItemPhysic Lite
Vampires Need Umbrellas
GuideME
Sparkweave Engine
Saturn
Apothic Compats
FTB Backups 2
PolyLib
Enchanting Infuser
Too Many Bows
Armor Status HUD Renewed

Removed



Physics mod (performance intensive, replaced by ItemPhysics Lite)
Easy Magic (issues with Apotheosis/Apothic mods)
Knight Quest (replaced by Crystalcraft unlimited) (mobs didnt spawn anyways lol)
Knight Lib (useless cuz Knight Quests got removed)
Inventory HUD+ (replaced by Armor Status HUD Renewed, because lighter and simpler to use)
Basic End/Nether ores resource packs (oopsie)

Changes



Cleaned up config
Re-Enabled aether curios menu, allowing aether curios to be equipped
KubeJS fixes and changes
Forced some UI's to be as GUI Scale: 3, to prevent positions from breaking (FancyMenu)
Added new enchants descriptions
You can now use Umbrellas to protect from sun as a vampire
FTB Essentials config changes
Disabled some useless keybinds

Notable Fixes



(!) Fixes included in Mod Updates
Fixed Server Crashing
Fixed quests icon being broken

Updated



(!) All mods that could be updated have been updated.
Resource Packs
ShaderPacks
NeoForge Version from 21.1.112->21.1.115

Current NeoForge Version



21.1.115

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.2.0HF[New Era].zip — 2025-01-26

fixed server hanging crash

---

## NeoTech Reborn 1.2.0[New Era].zip — 2025-01-26

NeoTech Reborn | 1.2.0 Changelog (Released)


Summary
massive update, the new era is finally here! alot of new mods, bug fixes, lots of performance improvements, many updates, new dimensions, LOTS Of new Ores, Mobs, Weapons & Armors, REQUIRES A WORLD RESET


Added



Concurrent Chunk Management Engine
Vampirism
Vampiric Ageing
Bloodlines
Vampire's Delight
Werewolves
Guide-API Village and Pillage
Aeroblender
The Aether
Deep Aether
Aether Villages
oωo (owo-lib)
Luminous
The Age of Ores (Crystalcraft Unlimited Java edition)

Removed



Elytra Trims & Elytra Trims Extension
Baubley Heart Canisters
Point Blank (meh)
Xtra Arrows (incompat with latest NeoForge, will be readded once fixed)
Just Enough Mekanism Multiblocks (performance issues, crash issues, log spam issues) (will re-add once fixed)
Silent Gear, Silent Gems, Silent Lib (Replaced by Crystalcraft Unlimited Java edition, testing to see if its worth it)
PFW: Aesthetic Gems (Replaced by Crystalcraft Unlimited Java edition, testing to see if its worth it)

Changes



Cleaned up config
Updated SOL config
Multiple KubeJS Changes
Balanced Champion config
Added Eccentric Tome support for Vampirism, Aether, Crystalcraft Unlimited Guidebooks
Disabled useless keybinds
Added aether dimensions to SDRP config and discord rich presence
Some RPC icon changes
Removed useless buttons
JEI blacklist Changes
Removed useless hidden messages (due to them being removed by the removal of respective datapacks/mods) and hidden a new useless message

Notable Fixes



(!) Fixes included in Mod Updates

Updated



(!) All mods that could be updated have been updated.
NeoForge Version from 21.1.96->21.1.113
Resource Packs

Current NeoForge Version



21.1.113

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.9.zip — 2025-01-20

NeoTech Reborn | 1.1.9.9.9 Changelog (Released)


Summary
mods changes, config changes, performance improvements, many bug fixes


Added



Curios API
FTB Quests Optimizer

Removed



Curios API Continuation
Hostile Neural Networks
Mining Gadgets

Changes



Cleaned up config
Updated SOL config
Enabled dynamic resources option in ModernFix
KubeJS changes
Added some mod support for visuality

Notable Fixes



(!) Fixes included in Mod Updates
Structures NBT issues
Missing buttons in the options screen

Updated



(!) All mods that could be updated have been updated.
NeoForge Version from 21.1.93->21.1.96
DataPacks
Resource Packs
ShaderPacks

Current NeoForge Version



21.1.96

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.8HF.zip — 2025-01-09

hotfix for ae2 terminal mod

---

## NeoTech Reborn 1.1.9.9.8.zip — 2025-01-09

NeoTech Reborn | 1.1.9.9.8 Changelog (Released)


Summary


Added



Ancient Reforging

Removed



Prefab

Changes



Cleaned up config
Disabled infested affix via datapack (Champions)

Notable Fixes



(!) Fixes included in Mod Updates
Crash when using Prefab houses

Updated



(!) All mods that could be updated have been updated.
Resource Packs

Current NeoForge Version



21.1.93

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.7.zip — 2025-01-07

NeoTech Reborn | 1.1.9.9.7 Changelog (Released)


Summary
useless mods removal, new books design, performance improvements, World Generation Speed improvements, balancements and adjustments


Added



Just Enough Effect Descriptions
Moderately Enough Effect Descriptions
Beautiful Enchanted Books
Clean Swing Through Grass

Removed



Basic Nether Ores (not required anymore)
Basic End Ores (not required anymore)
No Chat Reports (meh)
More Totems (meh)
Better Fps - Render distance
Better Combat (doesnt fit the pack style)
Parcool
Evilcraft (ew)

Changes



Cleaned up config
Champions config balancements
Shaders config adjustments
l2hostility config adjustments
U can now see alot better from high views
Disabled tips for ESM
Removed Evilcraft kubejs scripts
Removed parcool kubejs script
Updated JEI Blacklist

Notable Fixes



(!) Fixes included in Mod Updates

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.93

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.6.zip — 2025-01-06

NeoTech Reborn | 1.1.9.9.6 Changelog (Released)


Summary
Texture fixes, Mod additions, performance improvements and config updates, also new experience for raids, Guns added


Added



Distraction Free Recipes
It Takes a Pillage Continuation
FTB Chunks Recoloured
Vic's Point Blank
Philip's Ruins
Butchery

Removed



Illagers Wear Armor
BlazeandCave's Advancements Pack
BlazeandCave's Advancement Pack Enhanced Discoveries

Changes



Cleaned up config
DivineRPG ores now have Emissive Glowing Textures
Added missing enchantments descriptions
Combat Roll icon Color
Combat Roll visibility in Creative Mode
Reduced File Size

Notable Fixes



(!) Fixes included in Mod Updates
Buggy Furnace and Blast Furnaces textures
Textures inconsistency
TempFix for point blank and Continuity incompatibility

Updated



(!) All mods that could be updated have been updated.
Resource Packs
NeoForge Version from 21.1.92->21.1.93
SOL config

Current NeoForge Version



21.1.93

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.5.zip — 2025-01-02

NeoTech Reborn | 1.1.9.9.5 Changelog (Released)


REQUIRES A WORLD RESET!
Summary
The Summary is too long


Added



Apotheosis
Explorer's Compass (confused this mod with another one lol)
Subtle Effects
Sophisticated Storage in Motion
Eccentric Tome
ScalableLux
Excalibur
Tectonic
Terralith
DivineRPG
Raided
Baubley Heart Canisters
Stick It!

Removed



Traveler's Compass (wrong mod bruh)
Eccentric Tome Updated (replaced by Eccentric Tome)
Stay True
Glowing Emissive Ores - Stay True
Boss Refreshed
Faithful 64x
Lithosphere
Journey Into the Light (had too many bugs, has been replaced by DivineRPG)
Mutant Monsters (they dont spawn+too hard to defeat with hostility mods)
Reforged (Replaced by Apotheosis)
UnionLib (Reforged got removed)

Changes



Cleaned up config
Changed sol carrot config
Mojang Telemetry is now fully blocked, enjoy playing without ur data being sent to mojang :D
New particles for many actions and blocks
Added new dimensions lang names and images to Discord Rich Presence
Removed JITL lang names and images from Discord Rich Presence
Removed Player Model from all the Screens
Redesigned the Pause Screen Logo
KubeJS Changes
English(US) is now the default game language (to fix FTBQuests issues)(we are almost done :D )

Notable Fixes



(!) Fixes included in Mod Updates
decorations from Project: Vibrant Journeys spawning on top of the nether bedrock zone
Fixed crashes when opening video settings

Updated



(!) All mods that could be updated have been updated.
Resource Packs
Shader Packs
Datapacks
NeoForge version from 21.1.90->21.1.92

Current NeoForge Version



21.1.92

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.3.zip — 2024-12-22

NeoTech Reborn | 1.1.9.9.3 Changelog (Released)


Summary
Mod and Resource Packs additions,  New bosses to fight, bug fixes/performance improvements and general improvements (preparing for 1.2.0)


Added



Physics Mod
Bosses of Mass Destruction
Bad Wither No Cookie Reloaded
Better Treasure Map
CERBON's API
Convenient Curios Container
Colourful Containers: Modded Dark Mode GUI Compat

Removed



Fancy Block Particles Renewed (performance issues) (Replaced by Physics Mod)
ItemPhysic Lite (Replaced by Physics Mod)

Changes



Cleaned up config
Tweaked shaders settings

Notable Fixes



(!) Fixes included in Mod Updates
Performance issues

Updated



(!) All mods that could be updated have been updated.
Shaders
Resource Packs

External Changes
Current NeoForge Version



21.1.90

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.2.zip — 2024-12-16

NeoTech Reborn | 1.1.9.9.2 Changelog (Released)


Summary
Mod additions, bug fixes/performance improvements and general improvements (preparing for 1.2.0)


Added



More Villagers : Re-employed
Better Archeology

Removed
Changes



Cleaned up config
Champions config balancement
Broken items can now be reforged
KubeJS changes/fixes

Notable Fixes



(!) Fixes included in Mod Updates
Relics not being upgradable
"Boat moved wrongly!" error/warning (I'm fast update)

Updated



(!) All mods that could be updated have been updated.
Shader Packs
Resource Packs
NeoForge version: 21.1.89->21.1.90

External Changes
Current NeoForge Version



21.1.90

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.9.1Special.zip — 2024-12-13

NeoTech Reborn | 1.1.9.9.1 Changelog (Released)


Summary
Mod additions, useless mods removal, new villager and piglins mechanics, new underground villages, structures, ability to trim elytras new resource packs, ModPack Icon OverHaul, new explosion animations, many bug fixes, performance improvements (preparing for 1.2.0)


Added



Better Sophisticated Backpack Upgrades
Choup's Drakvyrn Mod
Easy Villagers
Easy Piglins
Elytra Trims
Elytra Trims Extensions
Underground Villages
Wabi-Sabi Structures
Explosive Enhancement: Reforged (crash issues got fixed :D )

Removed



More Crafting Tables (useless, now all wood will craft the normal crafting table if theres no variant)
Curious Armor Stands (not rlly needed)
More Babies (not needed)
Additional Lanterns (buggy default lantern jade texture)
Trade Cycling (replaced by Easy Villagers)
Useful Hats (bad and goofy)
Auroras (doesnt seem to work, even when enabling "always show on each night") [i might be dum, if u want it back, suggest it back in the mod suggestion channel)
Hardened Armadillos (meh)
Forgiving Void

Changes



Cleaned up config
brand new ModPack icon
Champions config balancement
AllTheTrims config changes
sol carrot config changes
improved enchant description text (removed goofy simbol)

Notable Fixes



(!) Fixes included in Mod Updates
Every hostile mob having a rank (Champions)
Right-Click opening for the crafting tables not working (More Crafting Tables variants)
Buggy default lantern jade texture

Updated



(!) All mods that could be updated have been updated.
Resource Packs

External Changes



Changed CurseForge ModPack page icon
CurseForge page improvements with better text and images

Current NeoForge Version



21.1.89

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.8.2.zip — 2024-12-10

bump version to fix some stuff

---

## NeoTech Reborn 1.1.9.8.1.zip — 2024-12-09

NeoTech Reborn | 1.1.9.8.1 Changelog (Released)


Summary
Many new structures, new villages, new ores, new weapons, curios items, mobs, blocks and more! (also bug fixes and performance improvements preparing for 1.2.0)


Added



Piglet Structures
Tidal Towns

Removed



The Pillager Legion

Changes



Cleaned up config
sol carrot config changes to fit new update
disabled "undying" in l2hostility config
champions config balancement
added emissive glowing ores support for Piglet Structures
disabled "stay on floor" option for FancyBlockParticles "FancySnow" (improving performance)

Notable Fixes



(!) Fixes included in Mod Updates

Updated



(!) All mods that could be updated have been updated.
resource packs
shader packs
NeoForge Version from 21.1.84 -> 21.1.85

Current NeoForge Version



21.1.85

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.8.zip — 2024-12-07

NeoTech Reborn | 1.1.9.8 Changelog (Released)


Summary
bug fixes/server crashing fixes(?), kubejs fixes and mostly mod updates to prepare for 1.2.0


Added
Removed



Mo' Structures (testing server crashing fix)
Loot Integrations: Mo' Structures (useless without mo' structures)

Changes



Cleaned up config
kubejs mystical agriculture fixes (by egisdev)
ultimate balancement to l2hostility and Champions configs

Notable Fixes



(!) Fixes included in Mod Updates
testing some server crashing fixes (mo' structures mod is suspected to be the cause)

Updated



(!) All mods that could be updated have been updated.
NeoForge version from 21.1.83 to 21.1.84
resource packs

Current NeoForge Version



21.1.84

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.7.1.zip — 2024-12-05

NeoTech Reborn | 1.1.9.7.1 Changelog (Released)


Summary
new nether content, bug fixes, adjustments, improvements and general optimization preparing for 1.2.0


Added



Incendium

Removed
Changes



Cleaned up config
champions and l2hostility serious balancement (game will be fair starting from now)
re-enabled apothic earth enchant
kubejs changes

Notable Fixes



(!) Fixes included in Mod Updates
enchant description typo
disabled modernfix nbt usage optimizations to help mss generation, will find a way to fix kubejs part too
server crashes

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.83

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.7.zip — 2024-12-04

NeoTech Reborn | 1.1.9.7 Changelog (Released) (test version to fix 2 critical issues)


Summary
bug fixes, adjustments, improvements and general optimization preparing for 1.2.0


Added



Moog's Soaring Structures (testing a possible fix for nbt stuff)

Removed
Changes



Cleaned up config
parcool mana bar is now hidden (allowing u to see item names)
re-enabled Advent of Ascension xp particles
balancements to champions config
IPN "sort in rows" button is now hidden (covers most UI's)
changed cardiac orb follow distance 12->10
balancements to l2hostility config
improved vanilla tweaks resource pack
disabled Parcool's CatLeap (annoying for users)

Notable Fixes



(!) Fixes included in Mod Updates
small typo in enchant descriptions

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.83

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.6.zip — 2024-12-03

NeoTech Reborn | 1.1.9.6 Changelog


Summary
New Geodes, Bunkers with ton of loot, tech mods additions, improved loot for many different mods and many bug/crash fixes preparing for 1.2.0! Brand new geodes, new resource packs and many crash fixes, also some general improvements and perf improvements


Added



Suren's Sophisticated Storage
GeOre
GeOre Nouveau
Underground Bunkers
AE2 Things
ExtendedAE
Loot Integrations: Moog's Voyager, Soaring, End & Nether Structures
Loot Integrations: Structory & Towers
Loot Integrations: Towns and Towers

Removed



MSS (moog soaring structures) (crashes)
Shulker Box Slot (backpacks are better) (useless)
More Red (meh)
More Red x CC:Tweaked Compat (useless)
Glassential Renewed (will be re-added once they fix the connected glass issue)

Changes



Cleaned up config
re-enabled lithium and modernfix nbt usage optimizations (mss got removed)
balanced even more champions config
disabled "sort in rows" option from IPN (useless)
cardiac config improvements (orb lifetime 10->15, orb follow distance 8->12)
disabled modern industrialization update checker
performance improvements
updated vanilla tweaks resource pack with new additions

Notable Fixes



(!) Fixes included in Mod Updates
server crash due to MSS nbt data issues (lame it on mss dev)
server crash due to prefab recipe data stuff
typos and improvements for enchants descriptions
Huge FTB Chunks arrow
crash when opening the SOL: Carrot Edition book on a server.
Fixed being able to compost air (resulting in infinite bone meal)
kubejs fixes
temp fixed buggy connected glass by removing glassential renewed (will be re-added once fixed)
temp fixed crash when clicking advcancement button in singleplayer (downgraded version)

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.83

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.5HF.zip — 2024-12-01

fixed sol carrot crash when opening the book
changed sol carrot config available foods from 2684 to 2694

---

## NeoTech Reborn 1.1.9.5.zip — 2024-12-01

NeoTech Reborn | 1.1.9.5 Changelog


Summary
The Update before the New ERA
this update contains mostly adjustments, alot of balancing, and many bug fixes, to prepare for 1.2.0!
new blocks got added, new foods, and small jei fixes/improvements


Added



Sodium Options Mod Compat
TxniLib
Zinkenite Mobs

Removed



Mobs Refreshed (replaced by Zinkenite Mobs) (caused too many issues)

Changes



Cleaned up config
changed rotation speed for item dropping from 1.75 to 1.60
disabled IPN reloading hotkey (annoying)
enabled "sort in colums" and "sort in rows" buttons for IPN
balanced even more l2hostility and champions config due to the game being too hard
changed Spice of Life final milestone from 2683 to 2684
disabled l2hostility "adaptive" ability (replaced by champions adaptable affix)
disabled the chance for champions mobs to spawn from mob spawners
removed productive bees & productive trees books from starting Tome, as u will now need to craft them before adding them to the tome
disabled "wall slide" ability from parcool because its now obtainable from TerraCurio items
completely reworked solCarrot config, due to the 50hp bug being fixed by aoa update, now u can achieve 70 more hearts (previously 52)
Prevented Corrupted Ancient Hero from spawning (too op)

Notable Fixes



(!) Fixes included in Mod Updates
finally fixed hearts textures being huge in some cases
having 50 hp once u died one time
witch texture being buggy asf

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.83

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.4.zip — 2024-11-30

NeoTech Reborn | 1.1.9.4 Changelog


Summary
From now on, new updates will have a summary, giving the most important news about an update, for this update, we got some perf improvements, new loot improvements between structures, useless mods removed, and a new mob difficulty system, thanks to champions mod (will balance l2hostility along this mod)


Added



Mo' Structures
Loot Integrations: Mo' Structures
Loot Integrations: Medieval Buildings & End
Loot Integrations: Hopo Better Mineshaft, Ruins & Portals
Iron's Gems 'n Jewelry
YUNG's Better End Island
YUNG's Better Strongholds
Repurposed Structures - Better Strongholds Compat Datapack
Atlas API
Champions Unofficial

Removed



Too Many Paintings! (we got enough paintings)
Not Enough Glyphs (not needed)
brutal bosses (replaced by Champions Unofficial)
observable (not needed rn)
Visual Overhaul (too many issues)

Changes



Cleaned up config
new structures
loot is now improved (loot integration addons)
changed drop radius from 40 to 30
A lot of balancing has been done to the L2Hostility and Champions configs
re-enabled vengeance spirits as they are needed for progression (but their spawn limit went from 5 to 4)
slightly improved Champions Unofficial rank colors

Notable Fixes



(!) Fixes included in Mod Updates
prefab "starting house" being duped on each login
crash when using immersive engineering table
some issues related to Visual Overhaul

Updated



(!) All mods that could be updated have been updated.
NeoForge Loader updated to 21.1.83

Current NeoForge Version



21.1.83

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.3.zip — 2024-11-27

NeoTech Reborn | 1.1.9.3 Changelog


Added



Loot Integrations: Formations Overworld & Nether
ItemPhysic Lite (item drop animations)

Removed



noisium (world gen deadlock issues)

Changes



Cleaned up config
updated resource packs
more annoying messages are now hidden
disabled Advent Of Ascension "display xp particles"
changed TES hud position
Armor Hud position to not get overriden by Loot Journal
tweaked MakeUp UltraFast shaders (extreme+ preset but with useless performance waster features disabled [AO, depth of field])
multiple tweaks to bsl shaders (motion blur, clouds settings & more)
multiple tweaks to complementary unbound shaders
updated milestone from 2681 to 2683 (cuz of new food)

Notable Fixes



(!) Fixes included in Mod Updates
world/server deadlocks while generating

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.82

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.2.zip — 2024-11-23

NeoTech Reborn | 1.1.9.2 Changelog


Added



Inventory HUD+
TslatEntityStatus

Removed
Changes



Cleaned up config
added Spice of Life support for Eccentric Tome
removed mahou tsukai entry for Eccentric tome
parcool stamina got re-enabled, now with proper position
disabled RightClickHarvest server warning
lowered radius for GetItTogetherDrops from 45 to 25 blocks
changed anvil breaking chance from 0.04% to 0.05%
more annoying messages are now hidden
configured Inventory HUD+ disabling everything except armor hud which got customized to be small and to fit perfectly
enabled further optimizations to structures generation (losing seed parity)
configured TES to be comfortable (also did some adjustments)

Notable Fixes



(!) Fixes included in Mod Updates
properly fixed Productive Bee's spawning issues while preserving lithium performance
stamina position
fixed Moog soaring structures not spawning (fixed via lithium config)
almost fixed mana bar text having wrong offset (the error is now less visible due to small adjustments)
unification fixes (removed non-existent ores from placeholders.json)

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.80

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.1.zip — 2024-11-22

NeoTech Reborn | 1.1.9.1 Changelog


Added
Removed



azurelib (not needed)

Changes



Cleaned up config
disabled advanced tooltips, making user experience easier
kubejs changes
updated jei blacklist
annoying startup messages are now hidden
trophies rarity changes
disabled "reset on death" option for spice of life
custom tooltip now works

Notable Fixes



(!) Fixes included in Mod Updates
productive bees nests and bees not spawning naturally

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.80

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.9.zip — 2024-11-21

NeoTech Reborn | 1.1.9 Changelog


Added



Icarus
Cardiac
Common Network
Adventure Dungeons
Moog's Soaring Structures (added back cuz it seems it's not crash faulty)

Removed



Shrink (not needed,enchants for it exist)
polylib
Friends&Foes - Beekeeper Hut (useless ig, u can use productive bees route)

Changes



Cleaned up config
reduced terrain particles from 0.45 to 0.35 (FancyBlockParticles)
enabled fusion integration for pneumatic repressurized
disabled rain puddles (FancyBlockParticles), granting a noticeable fps boost(50~+-)
adjustments to fancy rain (FancyBlockParticles)
adjustments to fancy snow (FancyBlockParticles)
adjustments to fancy smoke (FancyBlockParticles)
disabled JITL update check message
Life orbs stay on the ground for 10 seconds. After that, they despawn

Notable Fixes



(!) Fixes included in Mod Updates
"formations" library icon

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.80

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.8.5.zip — 2024-11-19

NeoTech Reborn | 1.1.8.5 Changelog


Added



Loot Integrations: When Dungeons Arise & Co
Spice of Life: Carrot Edition
vanilla tweaks resource pack

Removed



rrls
smaller crosshair

Changes



Cleaned up config
ALOT of qol tweaks have been applied to the pack (via resource packs)
Lowered rain particle density (FancyBlockParticles)
Updated Glowing Emissive Ores (Resource Pack)
The Spice of Life configuration has been adjusted to ensure balanced gameplay and compatibility with all edible items.
ALOT of performance improvements with renderning, chunk loading, vortex, and more stuff thanks to sodium updates
enabled "limitProgressionToSurvival" for Spice of life
Mimic Spawn Egg can now be used on spawners.
enabled "reset on death" option for Spice Of Life

Notable Fixes



(!) Fixes included in Mod Updates
Class-loading crash on Dedicated server startup
visual overhaul textures being removed

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.80

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.8.4HF.zip — 2024-11-17

crash when clicking "q" got fixed

---

## NeoTech Reborn 1.1.8.4.zip — 2024-11-17

NeoTech Reborn | 1.1.8.4 Changelog
Added



I'm Fast
Terra Curio

Removed
Changes



cleaned up config
more than 140 new accessories have been added from terraria!!!!!
updated shaders (MakeUp UltraFast)

Notable Fixes



(!) Fixes included in Mod Updates

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.79

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.8.3.zip — 2024-11-16

NeoTech Reborn | 1.1.8.3 Changelog


Added



The Lost Cities
Prefab
Jade Addons

Removed
Changes



cleaned up config
disabled no chat reports buttons (space waster)
added "Report a Bug" button!!
enabled realm warning skip (NCR)
switched from sodium to sodium extras fps counter (changed also configs of it to fit better)
disabled some random tick and precipitation tick options (unloaded activity) [should increase performance by a little]
small adjustments to iron's mana position
enabled "always hide report button" in NCR
enabled "hide signing request message" in NCR

Notable Fixes



(!) Fixes included in Mod Updates

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.79

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.8.2.zip — 2024-11-16

NeoTech Reborn | 1.1.8.2 Changelog


Added



Suggestion Provider Fix
CreativeCore
AmbientSounds
All The Wood We've Got

Removed



Load My F***ing Tags (not needed+boring console spam)
suggestion tweaker (replaced by Suggestion Provider Fix)
yet another config lib (not needed)

Changes



cleaned up config
removed mahou tsukai book from the first join kubejs script
removed yigd kubejs script part as it's not anymore part of the modpack
bsl shaders changes to enhance user experience
now mana will always be shown
configured jei blacklist config
removed kubejs tombstone enchants part as it's fixed by updating the mod

Notable Fixes



(!) Fixes included in Mod Updates
mana text not being centered

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.79

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.8.1Hotfix.zip — 2024-11-15

deeper and darker update caused the mod to not work on servers, this hotfix fixes it.

---

## NeoTech Reborn 1.1.8.1.zip — 2024-11-15

NeoTech Reborn | 1.1.8.1 Changelog
Added



Structure Layout Optimizer

Removed



mahou tsukai (not rlly needed,i don't feel that way)

Changes



cleaned up config
updated bsl shaders and configured the options of it
lowered drop radius from 65 to 45 blocks (GetItTogetherDrops)
made maximun prior work penalty value '4' (was 3 before)
refreshed relics config to adapt to the new update
removed the annoying arrows from corail tombstone enchants descriptions

Notable Fixes



(!) Fixes included in Mod Updates
villager hat having crazy discounts (like 100x lol)

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.77

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.8.zip — 2024-11-15

NeoTech Reborn | 1.1.8 Changelog


Added



Loot Integrations: Dungeons and Taverns
YetAnotherConfigLib (not needed cuz included in some mod but kinetic needs it for the server jar to work )
Better Mana Bar for Iron's Spells 'n Spellbooks
miles's Enhanced Hud

Removed



villager names (not needed+causes issues with shrimp resource pack)

Changes



cleaned up config
changed parcool stamina type to "hidden" (waiting for the dev to fix light mode)
added eccentric tome support for eternal starlight book
disabled annoying config making with IPN

Notable Fixes



buggy villager in-trade textures
fixed hearts being huge in some cases

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.77

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.7.6.zip — 2024-11-14

NeoTech Reborn | 1.1.7.6 Changelog


Added
Removed
Changes



cleaned up config
completely new loading screen and re-worked main menu screen to achieve better experience overall (new font, new icon,changed buttons)
kubejs changes

Notable Fixes
Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.77

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.7.5.zip — 2024-11-12

NeoTech Reborn | 1.1.7.5 Changelog


Added



Nether Skeletons
boss refreshed
mobs refreshed
SimpleHotbar

Removed



Zerocore 2 (not needed)
Just Another Void Dimension (not rlly needed,better mods incoming)
Trenzalore (javd dependency)
ConnectedTexturesMod (not needed)
barely default
kubejs sdrp line for the rpc (void dimension)

Changes



cleaned up config

Notable Fixes



fixed transparent textures for mystical agricolture/aggraditions (removing barely default)
buggy stone textures when using continuity (removing barely default)

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.77

Additional Notes
Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.7.4.zip — 2024-11-11

NeoTech Reborn | 1.1.7.4 Changelog


Added



PFW: Aesthetic Gems (to see if it fits the pack style)

Removed



Moog's Soaring Structures (server crashes, will be added once the owner fixes this dumb error lol)
Crystals Overhauled (bad)

Changes



adjusted order to make fancy beds resource pack work

Notable Fixes



kubejs scripts

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.77
Additional Notes
-‎ Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.7.3.zip — 2024-11-11

version bump to play on the server

---

## NeoTech Reborn 1.1.7.2.zip — 2024-11-10

NeoTech Reborn | 1.1.7.2 Changelog


Added



Clean F3
Shulker Box Slot
Loot Integrations: Dungeon Crawl
Barely Default By Mickey Joe

Removed



Charm of Undying (curios continuation includes it)
Boss Refreshed (Replaced by Barely Default)
Mobs Refreshed (Replaced by Barely Default)
ars nouveau refresh resource pack

Changes



updated resource packs
1 relic of the relics mod has been balanced
cleaned up config
configured Clean F3 settings to only show needed infos, improving performance
bound "open shulker slot" to Z
advent of ascension health bar is now on "bar_numeric" due to the heart texture being fixed by Barely Default resource pack
updated shader packs

Notable Fixes



bugged villager trade screen due to a setting related to "villager names" mod (altough the resource pack might not recognize villagers professions
fancy menu buttons
(!) Fixes included in mod updates

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.76
Additional Notes
-‎ Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.7.1.zip — 2024-11-09

NeoTech Reborn | 1.1.7.1 Changelog


Added



Aquaculture 2
No Chat Reports

Removed



continents (too many oceans lol)

Changes



removed complementary reimagined because uselss (complementary unbound exists, they are the same, only thing that changes is their default settings)
corrected an enchant description
disabled some useless IPN keybinds
removed some kubejs scripts due to errors
updated resource packs (as of now, all ores now have glowing emissive textures)

Notable Fixes



(!) Fixes included in mod updates

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.76

Additional Notes


Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.7.zip — 2024-11-09

Requires a World Reset
NeoTech Reborn | 1.1.7 Changelog


Added



Jonn's Trophies
William Wythers' Overhauled Overworld
Coordinates Display
BoxLib
Magnum Torch
Continents
Reforged
UnionLib
Crystals Overhauled

Removed



Trofers (replaced by Jonn's Trophies)
Friends&Foes - Flowery Mooblooms Addon (earthmobs got the same mob)
Iron Bookshelves (apothic got better ones so this mod is useless)
Powder Power
terralith (incompat with lithosphere)
"Remove terralith intro message" mod
Tectonic
WF's Cave Overhaul (temp removed due to lithosphere incompatibility)
Epic Knights

Changes



many memory improvements
cleaned up config
ALOT of performance and world generating times improvements
changed Vertical Render Distance Scale from 200% to 175% (to see a lil better from really high views)
changed alot of coordinates display mod settings to be as small as possible (useful for mine treasure datapack)
unbounded many useless hotkeys
text background opacity from 50 to 0% (chat settings)
enabled "Hide lightning Flashes" setting in minecraft settings
disabled "Decay leaves" option in unloaded activity config, due to the leaves being instantly removed after chopping a tree down (might slightly improve performance)
disabled "Grow kelp" option in unloaded acitvity config (might slightly improve performance)
enabled "water freezing" option in unloaded activity config

Notable Fixes



many world generation issues
ore generation issues
(!) Fixes included in mod updates

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.76

Additional Notes



Nothing is perfect, the pack may and will have bugs, report them here or in the discord server support channel.

---

## NeoTech Reborn 1.1.6.2HF.zip — 2024-11-08

NeoTech Reborn | 1.1.6.2HF Changelog


Added



Yggdrasil
Loot Integrations: ChoiceTheorem's Overhauled Village & Immersive Structures
WF's Cave Overhaul

Removed



More Armor Trims (issues when joining)
Traveler Backpacks (useless because sophisticated backpacks its in the pack)

Changes



cleaned up config
kubejs changes to enhance compatibility
removed deepslate actually additions quartz ore, because of buggy texture (waiting for the mod itself to add it)
updated all the resource packs

Notable Fixes



issues when joining worlds
Everlasting Abilities mod's negative effects wont target passive mobs from now
(!) Fixes included in mod updates

Updated



(!) All mods that could be updated have been updated.

Current NeoForge Version



21.1.74

Additional Notes



Nothing is perfect, the pack may and will have bugs, report them in the support channel.

---

## NeoTech Reborn 1.1.6.2.zip — 2024-11-07

1.1.6.2 released! (changelog contains 1.1.6 and 1.1.6.1 changes due to cf not moderating correctly )


The Trims Update!

added Eccentric Tome
added compatibility for all the books for Eccentric Tome
disabled completely tool/weapon replace on break/before breaking from IPN
multiple changes to artifacts config (rarity and more)
fixed enchant descriptions
added missing enchant descriptions for enchantencore
added polytone
added Shrimp's Immersive Interfaces resource pack
removed respackopts (critical issues when loading (it got stuck sometimes) )
removed libjf (same reason as respackopts+it's respackopts dependency)
removed respackopts and libjf traces from resource packs
cleaned up config
with this update, 10 new armors trims have been added!
added More Armor Trims
downgraded neoenchant+ due to curseforge issues (L curseforge)
fixes by mod updates

---

## NeoTech Reborn 1.1.5.4.zip — 2024-11-05

1.1.5.4 released



updated all the mods
updated all the resource packs
bump to play on the server

---

## NeoTech Reborn 1.1.5.3.zip — 2024-11-04

1.1.5.3 released!



updated all the mods
updated all the resource packs
updated all the datapacks
removed achievement optimizer due to issues with progression
cleaned up config
updated to neoforge 21.1.74

---

## NeoTech Reborn 1.1.5.2.zip — 2024-11-03

1.1.5.2 released!



updated all the mods
removed expanded storage (due to recipe conflicts)
removed custom clear lag (replaced by dark timer)
disabled rolls from parcool to fix incompat with spell changing and to make the game balanced (because combat roll exists)
disabled vengeance spirit because it's annoying
made auroras visible every night
cleaned up config

---

## NeoTech Reborn 1.1.5.1.zip — 2024-11-02

1.1.5.1 released!



updated all the mods that could be updated
added Particle Core
added entity model features
added entity texture features
added Mobs Refreshed Resource Pack
added Boss Refreshed Resource Pack
kube js changes
tweaked some 3d skins settings to make it visually better
disabled forced gui scale for fancy menu

---

## NeoTech Reborn 1.1.5.zip — 2024-11-01

1.1.5 released!



updated all the mods that could be updated
removed earth2java mod due to it being not actively maintained and for the high number of issues/bugs
removed duckling mod (the mobs didnt spawn)
added bagus lib
added earthmobs mod
added sodium options API
added Sodium Extras
added server core (my pack is becoming really large, this will be needed in the future!)
disabled modern industrialization ftb int (to achieve better fps)
cleaned up config

---

## NeoTech Reborn 1.1.4.3.zip — 2024-10-31

1.1.4.3 Released!



updated all the mods that could be updated
added sky villages
removed lucky tnt mod
removed lucky tnt lib
re-added parcool (changing many configs to be less annoying and easy to use)
removed Hey Berry Shut Up (its features are included in Smarter Farmers mod)
added missing descriptions for enchantencore enchants (weakness aspect & weakness splash)
mekanism config changes
A CRITICAL ISSUE WHERE ALL MEKANISM ORES COULD NOT SPAWN HAS BEEN FIXED
fixes issue where some of the modern industrialization ores wouldnt spawn
fixed some geosmelt ores not spawning(?)
added missing dimension to sdrp (rpc) file,re-ordered the dimensions in alphabetical order
cleaned up config

---

## NeoTech Reborn 1.1.4.2.zip — 2024-10-30

1.1.4.2 released!



updated all the mods that could be updated
removed xp tome
removed you're in grave danger
added corail tombstone
added global xp
cleaned up config
changed some configs

---

## NeoTech Reborn 1.1.4.1.zip — 2024-10-30

1.1.4.1 released!



updated all the mods that could be updated
added tax free levels mod
removed Farmer's Cutting: Oh The Biomes We've Gone
added allthemodium ores to silent gear
some kubejs changes
config changes

---

## NeoTech Reborn 1.1.4.zip — 2024-10-29

1.1.4 released



updated all the mods that could be updated
cleaned up config
removed aquaculture 2 because it's not compatible with tide
right click harvest mod now doesn't require an hoe to work
possibly fixed fancy menu buttons positions
kube JS changes
removed aquaculture resource packs

---

## NeoTech Reborn 1.1.3.3.zip — 2024-10-28

1.1.3.3 released!



removed point blank due to crashes/issues
added natures compass
added explorer compass
cleaned up config
updated all the mods

---

## NeoTech Reborn 1.1.3.2.zip — 2024-10-28

1.1.3.2



updated all the mods that could be updated
Updated paxi resource packs
removed not needed resource pack from paxi
bump version

---

## NeoTech Reborn 1.1.3.1.zip — 2024-10-27

1.1.3.1 released the harvesting update!

updated all the mods that could be updated
Added showcase item mod
added jamlib
added right click harvest
temporaly removed explosive enhancement due to crashes with iron's spellbooks bosses
updated all the resource packs
because of the hard difficulty on the long run, shield delay has been removed
lowered the chance of a mob to spawn with a backpack (0.02->0.01)
lowered the chance of a mob to drop a backpack (0.05-> 0.03)

---

## NeoTech Reborn 1.1.3.zip — 2024-10-27

1.1.3 released!



updated all the mods
added Loot Integrations: Randomized Loot Compatibility
alot of kubejs changes, which include: compatibility additions, fixes,more unification between mods, recipe changes, balancing actions,tags unification, tag changes.
removed all the broken kube js scripts from folders
updated neoforge to 21.1.73

---

## NeoTech Reborn 1.1.2.1HF.zip — 2024-10-27

small hotfix to update all mods and change some stuff, now ur able to play on the official server! join the discord to get the ip and to chat with the community!

---

## NeoTech Reborn 1.1.2.1.zip — 2024-10-26

1.1.2.1 released!



updated all the mods that could be updated
added Visuality: Reforged
added Loot Journal
added FTB Quests (will start to make quests soon!)
added a new in-game pause screen logo!
removed a good place (because same type animation is provided by fancy block particles)
removed a good place sample pack from resource packs folder,reducing overall file size
removed Icons Advertisement Removal resource pack,because of the new pause screen logo (this also reduces file size)
removed the deleted resource packs names from paxi's resource pack load order
fixed long loading times when opening inventory the first time u join a world/server with jei
should have fixed (for real this time) fancy menu buttons positioning with different resolutions
added more blacklisted mobs/minibosses/mimic to apothic spawners
cleaned up further the config

---

## NeoTech Reborn 1.1.2.zip — 2024-10-26

1.1.2 released!



updated all the mods that could be updated
kube JS changes
cleaned up config
removed dyenamics (not really needed anymore)
removed occultism delight (not needed)
generalized datapack loading to use less lines in global packs
removed vanilla refresh because it caused critical issues with crafting table results
removed smart brain lib because it's included in advent of ascension
reduced file size

requires a WORLD RESET

---

## NeoTech Reborn 1.1.1.1.zip — 2024-10-25

1.1.1.1 released



updated all the mods that could be updated
cleaned up config
removed trimmable tools mod (useless because allthetrims is here)
many kube JS changes
many unifications additions/changes
should've fixed the fancy menu buttons being not in order on different resolutions (maybe)
enabled dynamic trim rendering from AllTheTrims mod
added custom text to most loading screens/guis
cleaned up some useless stuff in loading screen/guis
removed caps on all layouts (for fancy menu)
I didn't find a fix for the crafting table visual bug yet, will try to fix it tomorrow by using the binary method!

---

## NeoTech Reborn 1.1.1.zip — 2024-10-25

1.1.1 released



updated all the mods that could be updated (fixes windows-only crashes)
updated all resource packs
removed easy emerald tools mod as those materials are included with silent gear
added l2 hostility (now the fun starts)
added achievement optimizer
removed more bow and arrows merged (silent gear include those materials and bows)
removed underground bunkers (they spawned too often)
added Repurposed Structures - PneumaticCraft: Repressurized Compat
removed tidal towns
fixed(?) fancy menu buttons on resolutions that aren't 1920x1080(let me know if they work pls)
various kube JS changes
reduced file size

from the next updates, I'll work on quests with my collaborators!

---

## NeoTech Reborn 1.1.0.zip — 2024-10-22

1.1.0 Released!  THE TECH UPDATE!

updated all the mods
updated all resource packs
changed and cleaned up different configs
Removed Improvable Skills(replaced by everlasting abilities),removed HammerLib
Removed Cursed Earth Returns
Added Better Third Person
added everlasting abilities
Removed Yung's Better End Island
Added Basic Ender Ores
Removed Legendary Item
Removed Item Highlighter
Removed MI Sound Addon
Removed Nice Villagers Remastered
Added VillagerNames
Removed Yung's Better Strongholds
Added Yung's Bridges
Removed Achievement Optimizer
Removed Cursor Centered Fix
Removed Simple Pocket Machines (replaced by Crafting on a Stick)
Removed MmmMmmMmmMmm
Removed Aurel's Paintings
Added Actually Additions
Removed Just Another Mining Dimension
added Ars Énergistique
added CC: Tweaked
added Charging Gadgets
added Common Capabilities
added Immersive Engineering
added ZeroCore 2
added Mob Grinding Utils
added More Red x CC:Tweaked Compat
added Pipez
added PneumaticCraft: Repressurized
added Redstone Pen
many kube js changes
unification changes
changed bsl settings: disabled fxaa, disabled selective taa, changed from 2048 to 3172 shadow resolution
removed one yung's compat datapack due to that mod being removed
reduced file size

REQUIRES A NEW WORLD!

---

## NeoTech Reborn 1.0.9.zip — 2024-10-21

1.0.9 released!


the food UPDATE!!!

This update contains massive changes (more than 400 new foods, trees and crops!!), improvements,fixes
updated all mods
removed croptopia (dev didnt fix issues for months, so I removed it)
removed epherolib
removed dynamic asset generator
removed excavated variants (we got enough ores, so variants aren't needed,also they don't work with glowing emissive ores resource pack)
added Pam's HarvestCraft 2 - Food Core
added Pam's HarvestCraft 2 - Trees
added Pam's HarvestCraft 2 - Crops
added Pam's HarvestCraft 2 - Food Extended
added Respackopts
added LibJF
updated resource packs
re enabled jei bookmarks by config
tweaked Colourful containers Dark Mode GUI to use default inventory style (community asks, I listen :D )
resetted extreme sound muffler config, because of dark mode gui changes (now it fits well)
removed croptopia kubejs scripts and traces
fixed some stuff with tags with kubejs
removed croptopia tags from almostunified
major performance improvements

requires a WORLD RESET due to croptopia being removed,excavated variants being removed and pam addition!

---

## NeoTech Reborn 1.0.8.1.1.zip — 2024-10-20

1.0.8.1.1 released!



updated all the mods that could be updated (except ars nouveau because of a crash on launch)
removed trimesffects (replaced by BetterTrims)
added BetterTrims
added configurable (required by BetterTrims)
added allthetrims
added RuntimeTrims
added Epic Knights: Shields Armor and Weapons
unified utilitarian coal and charcoal

---

## NeoTech Reborn 1.0.8.1.zip — 2024-10-19

1.0.8.1 released!



updated all mods (includes tag fixes, fixes,adjustments)
removed better chunk loading (incompatibility with lithium+lithium offers better chunks optimizations)
added lithium for neoforge!!! (lets go)
cleaned up config
changed default health bar type from "BAR_NUMERIC" to "BAR" as a temp fix for big heart texture!
bumped version
adjusted extreme sounds muffle inventory icon to fit in the gui
updated BlazeandCave's Advancement Pack Enhanced Discoveries DataPack
disabled advanced tooltips ( i forgot about that)
removed useless keybinds
now new modded mobs types will also spawn (prob cuz of mods updates)
next update will have updated resource packs which will include better inventory resource pack (cuz current one looks trashy to some users(its true lmao))

---

## NeoTech Reborn 1.0.8.zip — 2024-10-18

The New Era update!

This is a really big update which includes: alot of new mobs,new armoury,new different types of illagers,new type of piglins, fully new dog customization and new decorations to use in your buildings!
1.0.8 released
removed more beautiful torches
added responsive shield (reduces delay when blocking, making it easier to block)
added additional lights
added monster plus
added mutant monsters
added Doggy Talents Next
added illager invasion
added Piglin Proliferation
removed villages and pillages (replaced by illager invasion)
removed Nice Mobs Remastered because it doesn't seem to work really well (like custom mobs not spawning)
removed armor of the ages
fixed issue where some mods mobs wouldn't spawn naturally
tweaked bridging mod to be less invasive and set the delay to wait for the next block to be placed to 0 (was 1 before), also added outline when bridging,so you will be able to see where the block is going to be placed
reduced file size

requires a NEW WORLD

---

## NeoTech Reborn 1.0.7.3.zip — 2024-10-18

1.0.7.3 released!



updated all mods that could be updated!
added a tooltip to the "Open Project Link" Button
updated resource packs
added AntiBlocksReChiseled

---

## NeoTech Reborn 1.0.7.2.zip — 2024-10-18

1.0.7.2 released!



updated all the mods
now mod config button will open instantly (due to better modlist update)
now mod config wont have errors when opening configs (due to better modlist update)
updated resource packs
neoforge loader is 21.1.72

---

## NeoTech Reborn 1.0.7.1.zip — 2024-10-17

1.0.7.1 released!



fixed not centered level loading screen (chunks image and text are now centered)
removed Open Project Link from pause screen cuz useless (now only present in main menu options screen)

---

## NeoTech Reborn 1.0.7.zip — 2024-10-17

1.0.7 released!



updated all the mods
added Yung Structures Addon for Loot Integrations
removed telemetry and credits buttons from the pause screen
added Client Player Entity to different Menus/Loading Screens
disabled bsl shaders advanced materials, because no resource pack supports it, this improves fps decently
added "Open Project Link" to both options in main screen and in-game pause screen
tweaked some texts in: pause screen, main menu,loading terrain screen,resource packs menu,multiplayer menu
modified layout names to be easier to understand
added the Discord button with integrated tooltip to pause screen and main menu screen options
removed the green splash text from main menu near the Discord icon (because of the new tooltip)
added a sneak peek tooltip to ONE of the main menu buttons, let's see if u can find it xD

---

## NeoTech Reborn 1.0.6.zip — 2024-10-16

WARNING!! FOR THE PACK TO WORK PROPERLY U NEED TO INSTALL THIS MOD: https://www.curseforge.com/minecraft/mc-mods/continuity/download/5425853



1.0.6 released!!!!!!!!
removed sound physics remastered (will improve performance decently and will fix a bug where u don't have sounds sometime)
added No Villager Death Messages
added Extreme Sound Muffler
updated all the mods that could be updated
some kubejs fixes/changes
the title has been changed slightly (from neotech 1.21.1 to NeoTech Reborn - 1.21.1
added a discord clickable icon which will redirect to this server!!
cleaned up config
updated resource packs to include better glowing support for modded ores!!!
added preloading for the new discord icons
changed slightly the NeoTech version in the bottom left of the pic
changed the layouts name to be easier to understand (useful to the dev)

---

## NeoTech Reborn 1.0.5.zip — 2024-10-15

1.0.5 released!!!!!!
this is the first big update of the pack!
updated all the mods as always
removed:
minecolonies,structurize, blockui, multi-piston, stylecolonies,Domum Ornamentum,TownTalk
added:
simple pocket machines,dyenamics, silent gear, silent gems,silent lib, twilight forest, twilightDelight
added in kubejs:
some general fixes and/or tag related
the new dimension (twilight forest) got added to the rich presence
cleaned up the config
cleaned up kube js
balanced some configs/tweaked some configs
and more!


requires a New World

---

## NeoTech Reborn 1.0.4.2.zip — 2024-10-15

fixed resource pack order sorting, re added paxi due to global packs not being able to order resource packs.

---

## NeoTech Reborn 1.0.4.1.zip — 2024-10-15

WARNING!! FOR THE PACK TO WORK PROPERLY U NEED TO INSTALL THIS MOD: https://www.curseforge.com/minecraft/mc-mods/continuity/download/5425853
1.0.4.1 released!
updated all the mods
changed paxi with global packs,saving alot of space
improved the chat arrows and added a color for them
added enchant descriptions to neoenchant+
made enchant descriptions gold instead of dark gray for easier reading
changed the color for the "Hold Shift to view enchantment descriptions" to be easier to find
re added the small crosshair via resource pack

---

## NeoTech Reborn 1.0.0.zip — 2024-10-13

the updated mod got installed in the downloads directory instead of my minecraft mods folder lol,now it works correctly
