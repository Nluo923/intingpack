/*
 - steel casing with electron tube and precision mechanism
 - enriched alloy with andesite alloy
 - advanced circuit needs electron tubes
 - metallurgic infuser: furnaces > mixer + sturdy sheet
 - enrichment chamber: iron > crushing wheels
 - nerf to solar and wind
*/

ServerEvents.recipes(recipe => {
  recipe.remove({output: 'mekanism:steel_casing'});
  recipe.shaped(
    Item.of('mekanism:steel_casing', 1),
    [
      'sgs',
      'tot',
      'sps'
    ],
    {
      s: 'mekanism:steel_ingot',
      g: 'minecraft:glass',
      t: 'create:electron_tube',
      o: 'mekanism:osmium_ingot',
      p: 'create:precision_mechanism'
    }
  );

  recipe.remove({output: 'mekanism:advanced_circuit'});
  recipe.shaped(
    Item.of('mekanism:advanced_circuit', 1),
    [
      'iti',
      'ece',
      'iti'
    ],
    {
      t: 'create:electron_tube',
      e: 'mekanism:enriched_alloy',
      c: 'mekanism:basic_control_circuit',
      i: 'create:iron_sheet'
    }
  );

  recipe.remove({output: 'mekanism:metallurgic_infuser'});
  recipe.shaped(
    Item.of('mekanism:metallurgic_infuser', 1),
    [
      'imi',
      'eoe',
      'isi'
    ],
    {
      i: 'create:iron_sheet',
      m: 'create:mixer',
      e: 'create:electron_tube',
      o: 'mekanism:osmium_ingot',
      s: 'create:sturdy_sheet'
    }
  );
  
  recipe.remove({output: 'mekanism:enrichment_chamber'});
  recipe.shaped(
    Item.of('mekanism:enrichment_chamber', 1),
    [
      'ece',
      'wsw',
      'ece'
    ],
    {
      i: 'create:iron_sheet',
      e: 'create:electron_tube',
      c: 'mekanism:basic_control_circuit',
      s: 'mekanism:steel_casing',
      w: 'create:crushing_wheel'
    }
  );
  
  recipe.custom({  
    type: 'mekanism:metallurgic_infusing',  
    itemInput: Ingredient.of('create:andesite_alloy').toJson()  
    chemicalInput: {  
      tag: 'mekanism:redstone',  
        amount: 20  
      },  
    output: Item.of('mekanism:enriched_alloy').toResultJson()  
  });
});

