import Vector2 from "@/app/constants/class/Vector2";

export default class Program {

    private visible: boolean;
    private focus: boolean;
    private readonly position: Vector2;

    constructor( visible: boolean, focus: boolean, position: Vector2 ) {

        this.visible = visible;
        this.focus = focus;
        this.position = position;

    }

    public getVisible(): boolean {
        return this.visible;
    }

    public show(): void {
        this.visible = true;
    }

    public hide(): void {
        this.visible = false;
    }

    public setFocus(value: boolean): void {
        this.focus = value;
    }

    public isFocus(): boolean {
        return this.focus;
    }

    public getPosition(): Vector2 {
        return this.position;
    }

}