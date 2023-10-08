import AnimonCharacterSheet from '../../systems/animon/module/sheets/AnimonCharacterSheet.js';
import UpdatedAnimonCharacterSheet from './module/sheets/AnimonCharacterSheet.js';

Hooks.once("init", () => {
  console.log("Animon | Replacing Sheet With Updated Damage Calculations");

  Actors.unregisterSheet("animon", AnimonCharacterSheet);
  //Actors.registerSheet("animon", UpdatedAnimonCharacterSheet, { makeDefault: true });

  DocumentSheetConfig.registerSheet(Actors, "animon", UpdatedAnimonCharacterSheet, {
    label: "Updated Animon Sheet",
    types: ["animon", "child"],
    makeDefault: true
  });
});