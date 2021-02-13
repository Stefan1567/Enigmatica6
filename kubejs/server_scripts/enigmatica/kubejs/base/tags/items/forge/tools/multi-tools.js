events.listen('item.tags', (event) => {
    var items = [
        'aiotbotania:alfsteel_aiot',
        'aiotbotania:elementium_aiot',
        'aiotbotania:livingrock_aiot',
        'aiotbotania:livingwood_aiot',
        'aiotbotania:manasteel_aiot',
        'aiotbotania:terra_aiot',
        'bountifulbaubles:gloves_digging_diamond',
        'bountifulbaubles:gloves_digging_iron',
        'immersiveengineering:buzzsaw',
        'immersiveengineering:drill',
        'industrialforegoing:infinity_drill',
        'industrialforegoing:infinity_saw',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'mekanismtools:bronze_paxel',
        'mekanismtools:diamond_paxel',
        'mekanismtools:gold_paxel',
        'mekanismtools:iron_paxel',
        'mekanismtools:lapis_lazuli_paxel',
        'mekanismtools:netherite_paxel',
        'mekanismtools:refined_glowstone_paxel',
        'mekanismtools:refined_obsidian_paxel',
        'mekanismtools:steel_paxel',
        'mekanismtools:stone_paxel',
        'mekanismtools:wood_paxel',
        'mininggadgets:mininggadget',
        'pneumaticcraft:jackhammer',
        'thermal:flux_drill',
        'thermal:flux_saw'
    ];
    event.get('forge:tools').add(items);
    event.get('forge:tools/multi-tool').add(items);
});
