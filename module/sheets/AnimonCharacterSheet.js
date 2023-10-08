import BaseAnimonCharacterSheet from '../../../../systems/animon/module/sheets/AnimonCharacterSheet.js';

export default class AnimonCharacterSheet extends BaseAnimonCharacterSheet {

  _onUpdateDamage(event) {
    event.preventDefault();
    let element = event.currentTarget;
    let power = parseFloat(element.value);
    let damage = 0;
    let advancement = 0;

    if (this.actor.system.advancement.damage1) { advancement = advancement + 2 }
    if (this.actor.system.advancement.damage2) { advancement = advancement + 2 }

    switch (element.dataset.stage) {
      case "1":
        damage = power + advancement;
        this.actor.update({ "system.fledgling.damage": damage });
        break;
      case "2":
        damage = 2 * power + advancement;
        this.actor.update({ "system.basic.damage": damage });
        break;
      case "3":
        damage = 2 * power + advancement;
        this.actor.update({ "system.super.damage": damage });
        break;
      case "4":
        damage = 3 * power + advancement;
        this.actor.update({ "system.ultra.damage": damage });
        break;
      case "5":
        damage = 4 * power + advancement;
        this.actor.update({ "system.giga.damage": damage });
        break;
    }
  }
}