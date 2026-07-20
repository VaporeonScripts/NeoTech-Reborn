RecipeViewerEvents.addInformation('fluid', e => {
  /** @type {Record<Special.Fluid, string[]>} */
  const entries = {
    'justdirethings:unstable_portal_fluid_source': [
      'This fluid is used to make (stable) portal fluid.',
                                  'It must be made in a vanilla End Biome,',
                                  'otherwise it will vaporize when made.',
    ],
  };

  for (const [fluid, info] of Object.entries(entries)) {
    e.add(fluid, info);
  }
});
