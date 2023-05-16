export default class Vector2 {

    private x: number;
    private y: number;

    constructor( x: number = 0, y: number = 0 ) {
        this.set( x, y );
    }

    public set( x: number = this.x, y: number = this.y ): this {
        this.x = x;
        this.y = y;
        return this;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

}