import { ClientEntity } from "@/scripts/entities/clientEntity.ts";
import { EntityType } from "@common/constants.ts";
import { FloerSprite } from "../utils/pixi.ts";
import { Game } from "../game.ts";
// import { Inventory } from "@/scripts/inventory/inventory.ts";

export class Player extends ClientEntity {
    type = EntityType.Player;

    images = {
        body: new FloerSprite("flower")
    };

    // inventory: Inventory;

    constructor(game: Game, id: number) {
        super(game, id);

        this.container.addChild(
            this.images.body
        );

        this.game.camera.addObject(this.container);



        // this.inventory = new Inventory(game, this);
    }

    update(): void {
        this.container.position = this.position;
    }
}
