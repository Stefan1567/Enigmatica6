events.listen('item.tags', (event) => {
    var items = [
        'aquaculture:neptunium_boots',
        'ars_nouveau:apprentice_boots',
        'ars_nouveau:archmage_boots',
        'ars_nouveau:novice_boots',
        'botania:elementium_boots',
        'botania:manasteel_boots',
        'botania:manaweave_boots',
        'botania:terrasteel_boots',
        'byg:ametrine_boots',
        'immersiveengineering:armor_faraday_feet',
        'immersiveengineering:armor_steel_feet',
        'mapperbase:steel_boots',
        'mekanism:free_runners',
        'mekanism:hazmat_boots',
        'mekanism:mekasuit_boots',
        'mekanismtools:bronze_boots',
        'mekanismtools:lapis_lazuli_boots',
        'mekanismtools:osmium_boots',
        'mekanismtools:refined_glowstone_boots',
        'mekanismtools:refined_obsidian_boots',
        'minecraft:chainmail_boots',
        'minecraft:diamond_boots',
        'minecraft:golden_boots',
        'minecraft:iron_boots',
        'minecraft:leather_boots',
        'minecraft:netherite_boots',
        'mythicbotany:alfsteel_boots',
        'naturesaura:infused_iron_shoes',
        'naturesaura:sky_shoes',
        'pneumaticcraft:pneumatic_boots',
        'thermal:beekeeper_boots',
        'thermal:diving_boots',
        'thermal:hazmat_boots',
        'undergarden:froststeel_boots',
        'undergarden:cloggrum_boots',
        'undergarden:utheric_boots',
        'bloodmagic:livingboots',
        'mekanismtools:steel_boots',
        'dustrial_decor:cardboard_boots',
        'alexsmobs:roadrunner_boots',
        'eidolon:warlock_boots',
        'betterendforge:crystalite_boots',
        'betterendforge:aeternium_boots',
        'betterendforge:terminite_boots'
    ];
    event.get('forge:armor').add(items);
    event.get('forge:armor/boots').add(items);
});
