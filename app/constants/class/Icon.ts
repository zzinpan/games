import Vector2 from "@/app/constants/class/Vector2";
import Size from "@/app/constants/class/Size";

export default class Icon {

    static OuterSize = new Size( 200, 200 );

    private readonly id: string;
    private readonly name: string;
    private readonly imageSource: string;
    private readonly position: Vector2;

    constructor( id: string, name: string, imageSource: string ) {

        this.id = id;
        this.name = name;
        this.imageSource = imageSource;
        this.position = new Vector2();

    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getImageSource(): string {
        return this.imageSource;
    }

    public getPosition(): Vector2 {
        return this.position;
    }

}