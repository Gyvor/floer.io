import { Definitions, ObjectDefinition } from "../utils/definitions";
import { Modifiers } from "../typings";

export type ProjectileDefinition = ObjectDefinition & {
    readonly onGround?: boolean;
};

export const Projectile = new Definitions<ProjectileDefinition>([
    {
        idString: "dandelion",
        displayName: "Dandelion",
    },{
        idString: "missile",
        displayName: "Missile",
    },{
        idString: "web",
        displayName: "Web",
        onGround: true
    },{
        idString: "peas",
        displayName: "Peas",
    },{
        idString: "poison_peas",
        displayName: "Peas",
    },
] as ProjectileDefinition[]);


export interface ProjectileParameters {
    definition: ProjectileDefinition;
    despawnTime: number
    speed: number
    damage: number
    health: number
    hitboxRadius: number
    modifiers?: Partial<Modifiers>
}
